'use server';

import { randomUUID } from 'crypto';
import { headers } from 'next/headers';
import { writeClient } from '@/sanity/lib/writeClient';
import { validateInquiry } from './inquiry-validation';

const RATE_LIMIT_PER_IP = 5;
const RATE_LIMIT_GLOBAL = 60;
const RATE_WINDOW_MS = 10 * 60 * 1000;
// Per-instance memory: a light brake on abuse, not a hard guarantee. A shared
// store (and bot protection) is the next step if spam becomes a problem.
let recentByIp = new Map();
let recentGlobal = [];

const withinWindow = (times, now) => times.filter((t) => now - t < RATE_WINDOW_MS);

function pruneIdle(now) {
  recentByIp = new Map(
    [...recentByIp]
      .map(([ip, times]) => [ip, withinWindow(times, now)])
      .filter(([, times]) => times.length > 0),
  );
}

function isRateLimited(ip) {
  const now = Date.now();
  pruneIdle(now);
  recentGlobal = withinWindow(recentGlobal, now);
  if (recentGlobal.length >= RATE_LIMIT_GLOBAL) return true;
  const recent = ip ? recentByIp.get(ip) || [] : [];
  if (ip && recent.length >= RATE_LIMIT_PER_IP) return true;
  recentGlobal = [...recentGlobal, now];
  if (ip) recentByIp.set(ip, [...recent, now]);
  return false;
}

// Vercel sets x-real-ip to the connecting client; the first x-forwarded-for
// entry is only a fallback because clients can supply it themselves.
async function clientIp() {
  const h = await headers();
  return (
    h.get('x-real-ip') ||
    (h.get('x-forwarded-for') || '').split(',')[0].trim() ||
    null
  );
}

export async function submitInquiry(input) {
  // Honeypot: real visitors never see or fill this field.
  if (input?.website) return { success: true, error: null };

  const result = validateInquiry(input || {});
  if (!result.ok) return { success: false, error: result.error };

  if (isRateLimited(await clientIp())) {
    return {
      success: false,
      error: 'You’ve sent a few already. Please try again in a few minutes.',
    };
  }

  if (!writeClient) {
    console.error('submitInquiry: SANITY_API_WRITE_TOKEN is not set');
    return {
      success: false,
      error: 'We couldn’t send this right now. Please email beyondtherules@darkmatterlabs.org instead.',
    };
  }

  try {
    // Saved as a draft so it is never readable from the public dataset.
    await writeClient.create({
      ...result.data,
      _id: `drafts.inquiry-${randomUUID()}`,
      _type: 'inquiry',
      status: 'new',
      submittedAt: new Date().toISOString(),
    });
    return { success: true, error: null };
  } catch (error) {
    console.error('submitInquiry: failed to save submission', {
      kind: result.data.kind,
      stage: result.data.stage,
      message: error?.message,
    });
    return {
      success: false,
      error: 'Something went wrong sending this. Please try again, or email beyondtherules@darkmatterlabs.org.',
    };
  }
}
