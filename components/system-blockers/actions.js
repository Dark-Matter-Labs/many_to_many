'use server';

import { randomUUID } from 'crypto';
import { writeClient } from '@/sanity/lib/writeClient';
import { validateInquiry } from './inquiry-validation';
import { clientIp, createRateLimiter } from '@/components/forms/rate-limit';

const isRateLimited = createRateLimiter({ perIp: 5, global: 60 });

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
