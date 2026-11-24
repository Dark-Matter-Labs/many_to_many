'use server';

import { randomUUID } from 'crypto';
import { after } from 'next/server';
import { writeClient } from '@/sanity/lib/writeClient';
import { clientIp, createRateLimiter } from '@/components/forms/rate-limit';
import { validateDownloadRequest } from './download-validation';
import { notifyTeam } from '@/components/forms/notify';

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
    // Sent after the response, so the person never waits on the email.
    after(() => notifyTeam(signupEmail(result.data)));
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

function signupEmail({ name, email, organisation, note, newsletter, download }) {
  return {
    subject: `New download sign-up: ${name}, ${organisation}`.replace(/\s+/g, ' '),
    replyTo: email,
    text: [
      `${name} (${organisation}) downloaded ${download}.`,
      '',
      `Email: ${email}`,
      `Wants the newsletter: ${newsletter ? 'yes' : 'no'}`,
      note ? `Why: ${note}` : 'Why: (not given)',
      '',
      'See all sign-ups: https://manytomany.systems/studio',
    ].join('\n'),
  };
}
