'use client';

import { useId, useState, useTransition } from 'react';
import { submitInquiry } from './actions';
import { MESSAGE_MAX, validateInquiry } from './inquiry-validation';

const KIND_COPY = {
  question: {
    option: 'Ask a question',
    label: 'What would you like to know?',
    submit: 'Send question',
  },
  correction: {
    option: 'Correct something',
    label: 'What did you find, and how?',
    submit: 'Send correction',
  },
  experience: {
    option: 'Share what you’ve tried',
    label: 'What did you try, and what happened?',
    submit: 'Share experience',
  },
  interest: {
    option: 'Work on a condition',
    label: 'Which condition, and what would you bring?',
    submit: 'Register interest',
  },
};

const RESPONSES = [
  ['seen', 'I’ve seen this'],
  ['opposite', 'I’ve seen the opposite'],
  ['missing', 'Something’s missing'],
];

const inputClass =
  'text-small w-full rounded-xl border border-blue-400 bg-white px-3 py-2 text-grey-600 focus:border-blue-800 focus:outline-none';

function Choice({ name, value, checked, onChange, children }) {
  return (
    <label
      className={
        'text-small cursor-pointer rounded-full border px-3 py-1.5 transition-colors ' +
        (checked
          ? 'border-blue-800 bg-blue-800 text-white'
          : 'border-blue-400 bg-white text-blue-800 hover:border-blue-800')
      }
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      {children}
    </label>
  );
}

export default function InquiryForm({
  heading,
  intro,
  kinds,
  stage = '',
  pointOptions = [],
  contactRequired = false,
}) {
  const id = useId();
  const [kind, setKind] = useState(kinds[0]);
  const [response, setResponse] = useState('');
  const [point, setPoint] = useState('');
  const [message, setMessage] = useState('');
  const [contact, setContact] = useState('');
  const [website, setWebsite] = useState('');
  const [error, setError] = useState(null);
  const [sent, setSent] = useState(false);
  const [isPending, startTransition] = useTransition();
  const copy = KIND_COPY[kind];

  const reset = () => {
    setMessage('');
    setResponse('');
    setPoint('');
    setContact('');
    setError(null);
    setSent(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = { kind, stage, point, response, message, contact, website };
    const check = validateInquiry(payload);
    if (!check.ok) {
      setError(check.error);
      return;
    }
    setError(null);
    startTransition(async () => {
      const result = await submitInquiry(payload);
      if (result.success) setSent(true);
      else setError(result.error);
    });
  };

  if (sent) {
    return (
      <div role="status" className="rounded-2xl border border-blue-400 bg-white p-5">
        <p className="heading-md mb-2 text-blue-800">Thanks, that’s with us.</p>
        <p className="text-small mb-4 text-grey-600">
          We review everything before it feeds into the wiki, and we’ll share
          anonymised reflections on this page.
        </p>
        <button
          type="button"
          onClick={reset}
          className="text-small cursor-pointer text-blue-800 underline"
        >
          Send something else
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby={`${id}-heading`}
      className="relative rounded-2xl border border-blue-400 bg-white p-5"
    >
      <h4 id={`${id}-heading`} className="heading-md mb-1 text-blue-800">
        {heading}
      </h4>
      {intro && <p className="text-small mb-4 text-grey-600">{intro}</p>}

      {kinds.length > 1 && (
        <fieldset className="mb-4">
          <legend className="sr-only">What would you like to send?</legend>
          <div className="flex flex-wrap gap-2">
            {kinds.map((value) => (
              <Choice
                key={value}
                name={`${id}-kind`}
                value={value}
                checked={kind === value}
                onChange={() => setKind(value)}
              >
                {KIND_COPY[value].option}
              </Choice>
            ))}
          </div>
        </fieldset>
      )}

      {kind === 'correction' && (
        <fieldset className="mb-4">
          <legend className="tag mb-2 text-grey-600">How is it wrong?</legend>
          <div className="flex flex-wrap gap-2">
            {RESPONSES.map(([value, label]) => (
              <Choice
                key={value}
                name={`${id}-response`}
                value={value}
                checked={response === value}
                onChange={() => setResponse(value)}
              >
                {label}
              </Choice>
            ))}
          </div>
        </fieldset>
      )}

      {pointOptions.length > 0 && (
        <div className="mb-4">
          <label htmlFor={`${id}-point`} className="tag mb-1 block text-grey-600">
            Which point is it about? (optional)
          </label>
          <select
            id={`${id}-point`}
            value={point}
            onChange={(e) => setPoint(e.target.value)}
            className={inputClass}
          >
            <option value="">The stage in general</option>
            {pointOptions.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
      )}

      <label htmlFor={`${id}-message`} className="tag mb-1 block text-grey-600">
        {copy.label}
      </label>
      <textarea
        id={`${id}-message`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        maxLength={MESSAGE_MAX}
        rows={4}
        placeholder="Describe the situation, without names."
        className={inputClass + ' mb-4'}
      />

      <label htmlFor={`${id}-contact`} className="tag mb-1 block text-grey-600">
        {contactRequired ? 'Your email' : 'Your email, if you’d like a reply (optional)'}
      </label>
      <input
        id={`${id}-contact`}
        type="email"
        autoComplete="email"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        aria-describedby={`${id}-contact-note`}
        className={inputClass + ' mb-1'}
      />
      <p id={`${id}-contact-note`} className="tag mb-4 text-grey-600">
        Only Dark Matter Labs sees your email. We use it to reply to you and
        delete it once we have.
      </p>

      {/* Honeypot for bots: hidden from people and assistive tech. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`${id}-website`}>Website</label>
        <input
          id={`${id}-website`}
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      {error && (
        <p role="alert" className="text-small mb-4 text-[#b42318]">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={isPending}
          className="text-small cursor-pointer rounded-full bg-blue-800 px-5 py-2 text-white transition-colors hover:bg-dark-blue disabled:cursor-wait disabled:opacity-60"
        >
          {isPending ? 'Sending…' : copy.submit}
        </button>
        <p className="tag max-w-sm text-grey-600">
          We review everything first. Please leave out names and anything
          confidential.
        </p>
      </div>
    </form>
  );
}
