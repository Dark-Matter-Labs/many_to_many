import 'server-only';

const RESEND_URL = 'https://api.resend.com/emails';

// Emails the team about a new form entry through Resend. Does nothing when
// RESEND_API_KEY is unset, and never throws: a lost email must not affect the
// person filling in the form.
export async function notifyTeam({ subject, text, replyTo }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('notifyTeam: RESEND_API_KEY is not set, no email sent');
    return;
  }
  const to = process.env.NOTIFY_EMAIL_TO || 'beyondtherules@darkmatterlabs.org';
  const from = process.env.NOTIFY_EMAIL_FROM || 'Many-to-Many <onboarding@resend.dev>';

  try {
    const response = await fetch(RESEND_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: to.split(',').map((address) => address.trim()),
        subject,
        text,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    });
    if (!response.ok) {
      console.error('notifyTeam: Resend refused the email', {
        status: response.status,
        body: (await response.text()).slice(0, 300),
      });
    }
  } catch (error) {
    console.error('notifyTeam: could not reach Resend', { message: error?.message });
  }
}
