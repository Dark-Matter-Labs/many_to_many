// Validation for the form shown before a download. Shared by the form (for
// immediate feedback) and the server action (the real check).

export const NOTE_MAX = 1000;
const SHORT_MAX = 160;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (value) => (typeof value === 'string' ? value.trim() : '');

export function validateDownloadRequest(input) {
  const name = clean(input.name);
  const email = clean(input.email);
  const organisation = clean(input.organisation);
  const note = clean(input.note);
  const download = clean(input.download).slice(0, SHORT_MAX);

  if (!download) {
    return {
      ok: false,
      error: 'Something went wrong. Please reload the page and try again.',
    };
  }
  if (!name || name.length > SHORT_MAX) {
    return { ok: false, error: 'Add your name.' };
  }
  if (!email || email.length > SHORT_MAX || !EMAIL_PATTERN.test(email)) {
    return { ok: false, error: 'Add an email address that looks right.' };
  }
  if (!organisation || organisation.length > SHORT_MAX) {
    return {
      ok: false,
      error: 'Add your organisation, or “independent”.',
    };
  }
  if (note.length > NOTE_MAX) {
    return { ok: false, error: `Please keep the note under ${NOTE_MAX} characters.` };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      organisation,
      note,
      newsletter: input.newsletter === true,
      download,
    },
  };
}
