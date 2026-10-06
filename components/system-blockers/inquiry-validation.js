// Validation for System Blockers submissions. Shared by the form (for
// immediate feedback) and the server action (the real check).

import { STAGES, stageLabel, stagePoints } from './content';

export const GENERAL_STAGE = 'General';
const ALLOWED_STAGES = new Set([
  GENERAL_STAGE,
  ...STAGES.map((stage) => `${stageLabel(stage)}: ${stage.name}`),
]);
const ALLOWED_POINTS = new Set(
  STAGES.flatMap((stage) => stagePoints(stage).map((point) => point.name)),
);

export const INQUIRY_KINDS = ['question', 'correction', 'experience', 'interest'];
export const CORRECTION_RESPONSES = ['seen', 'opposite', 'missing'];
export const MESSAGE_MIN = 10;
export const MESSAGE_MAX = 2000;
const SHORT_MAX = 160;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (value) => (typeof value === 'string' ? value.trim() : '');

export function validateInquiry(input) {
  const kind = clean(input.kind);
  const stage = clean(input.stage).slice(0, SHORT_MAX);
  const point = clean(input.point).slice(0, SHORT_MAX);
  const response = clean(input.response);
  const message = clean(input.message);
  const contact = clean(input.contact);

  if (!ALLOWED_STAGES.has(stage || GENERAL_STAGE)) {
    return { ok: false, error: 'Something went wrong. Please reload the page and try again.' };
  }
  if (point && !ALLOWED_POINTS.has(point)) {
    return { ok: false, error: 'Choose a point from the list.' };
  }
  if (!INQUIRY_KINDS.includes(kind)) {
    return { ok: false, error: 'Choose what you’d like to send.' };
  }
  if (kind === 'correction' && response && !CORRECTION_RESPONSES.includes(response)) {
    return { ok: false, error: 'Choose how this stage is wrong.' };
  }
  if (message.length < MESSAGE_MIN) {
    return {
      ok: false,
      error: `Tell us a little more: at least ${MESSAGE_MIN} characters.`,
    };
  }
  if (message.length > MESSAGE_MAX) {
    return {
      ok: false,
      error: `Please keep it under ${MESSAGE_MAX} characters.`,
    };
  }
  if (kind === 'interest' && !contact) {
    return {
      ok: false,
      error: 'Add an email address so we can get in touch about working together.',
    };
  }
  if (contact && (contact.length > SHORT_MAX || !EMAIL_PATTERN.test(contact))) {
    return { ok: false, error: 'That email address doesn’t look right.' };
  }

  return {
    ok: true,
    data: {
      kind,
      stage: stage || GENERAL_STAGE,
      point,
      response: kind === 'correction' ? response : '',
      message,
      contact,
    },
  };
}
