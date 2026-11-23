'use server';

import { randomUUID } from 'crypto';
import { writeClient } from '@/sanity/lib/writeClient';
import { clientIp, createRateLimiter } from '@/components/forms/rate-limit';
import { validateDownloadRequest } from './download-validation';

const isRateLimited = createRateLimiter({ perIp: 10, global: 120 });

export async function submitDownloadRequest(input) {
  // Honeypot: real visitors never see or fill this field.
  if (input?.website) return { success: true, error: null };

  const result = validateDownloadRequest(input || {});
  if (!result.ok) return { success: false, error: result.error };

  if (isRateLimited(await clientIp())) {
    return {
      success: false,
      error: 'You’ve sent a few already. Please try again in a few minutes.',
    };
  }

  if (!writeClient) {
    console.error('submitDownloadRequest: SANITY_API_WRITE_TOKEN is not set');
    // The download still goes ahead: a missing token must not block the tools.
    return { success: true, error: null };
  }

  try {
    // Saved as a draft so it is never readable from the public dataset.
    await writeClient.create({
      ...result.data,
      _id: `drafts.downloadRequest-${randomUUID()}`,
      _type: 'downloadRequest',
      submittedAt: new Date().toISOString(),
    });
    return { success: true, error: null };
  } catch (error) {
    console.error('submitDownloadRequest: failed to save', {
      download: result.data.download,
      message: error?.message,
    });
    // Same as above: never hold a free download back because saving failed.
    return { success: true, error: null };
  }
}
