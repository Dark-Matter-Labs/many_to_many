'use client';

import { useEffect, useId, useRef, useState, useTransition } from 'react';
import { createPortal } from 'react-dom';
import { submitDownloadRequest } from './actions';
import { NOTE_MAX, validateDownloadRequest } from './download-validation';

// Only a flag is kept in the browser, never the person's details.
const STORAGE_KEY = 'm2m-download-form-done';

const inputClass =
  'text-small w-full rounded-xl border border-blue-400 bg-white px-3 py-2 text-grey-600 focus:border-blue-800 focus:outline-none';

function alreadyFilledIn() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === 'yes';
  } catch {
    return false;
  }
}

function rememberFilledIn() {
  try {
    window.localStorage.setItem(STORAGE_KEY, 'yes');
  } catch {
    // Private windows can refuse storage; the form simply shows again next time.
  }
}

// A download link that asks for a few details the first time. Without
// JavaScript it is a plain link, so the file is never out of reach.
export default function DownloadGate({
  href,
  download,
  className,
  target = '_blank',
  onOpen,
  children,
}) {
  const id = useId();
  const dialogRef = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [note, setNote] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const [website, setWebsite] = useState('');
  const [error, setError] = useState(null);
  const [done, setDone] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [mounted, setMounted] = useState(false);

  // The dialog lives at the end of <body>: some links sit inside a <p> or a
  // <button>, where a form is not valid HTML.
  useEffect(() => setMounted(true), []);

  function handleLinkClick(event) {
    onOpen?.();
    if (alreadyFilledIn()) return;
    event.preventDefault();
    setError(null);
    dialogRef.current?.showModal();
  }

  function handleSubmit(event) {
    event.preventDefault();
    const input = { name, email, organisation, note, newsletter, download, website };
    const check = validateDownloadRequest(input);
    if (!check.ok) {
      setError(check.error);
      return;
    }
    startTransition(async () => {
      const result = await submitDownloadRequest(input);
      if (!result.success) {
        setError(result.error);
        return;
      }
      rememberFilledIn();
      setDone(true);
    });
  }

  return (
    <>
      <a
        href={href}
        target={target}
        rel="noopener noreferrer"
        className={className}
        onClick={handleLinkClick}
      >
        {children}
      </a>

      {mounted &&
        createPortal(
      <dialog
        ref={dialogRef}
        aria-labelledby={`${id}-heading`}
        className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-2xl border border-blue-400 bg-white p-0 text-left backdrop:bg-blue-800/40"
      >
        <div className="relative p-6">
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close"
            className="text-small absolute top-4 right-4 cursor-pointer text-blue-800"
          >
            ✕
          </button>

          {done ? (
            <div role="status">
              <p id={`${id}-heading`} className="heading-md mb-2 text-blue-800">
                Thank you. Your download is ready.
              </p>
              <p className="text-small mb-5 text-grey-600">
                We won’t ask again in this browser.
              </p>
              <a
                href={href}
                target={target}
                rel="noopener noreferrer"
                onClick={() => dialogRef.current?.close()}
                className="text-small inline-block rounded-full bg-blue-800 px-5 py-2 text-white transition-colors hover:bg-dark-blue"
              >
                Download {download} →
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <h2 id={`${id}-heading`} className="heading-md mb-1 pr-8 text-blue-800">
                Before you download {download}
              </h2>
              <p className="text-small mb-5 text-grey-600">
                The tools are free. Telling us who you are helps us learn who
                uses them and follow up on how they worked.
              </p>

              <label htmlFor={`${id}-name`} className="tag mb-1 block text-grey-600">
                Your name
              </label>
              <input
                id={`${id}-name`}
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass + ' mb-4'}
              />

              <label htmlFor={`${id}-email`} className="tag mb-1 block text-grey-600">
                Your email
              </label>
              <input
                id={`${id}-email`}
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass + ' mb-4'}
              />

              <label htmlFor={`${id}-organisation`} className="tag mb-1 block text-grey-600">
                Your organisation, or “independent”
              </label>
              <input
                id={`${id}-organisation`}
                autoComplete="organization"
                value={organisation}
                onChange={(e) => setOrganisation(e.target.value)}
                className={inputClass + ' mb-4'}
              />

              <label htmlFor={`${id}-note`} className="tag mb-1 block text-grey-600">
                What will you use it for? (optional)
              </label>
              <textarea
                id={`${id}-note`}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                maxLength={NOTE_MAX}
                rows={3}
                className={inputClass + ' mb-4'}
              />

              <label className="text-small mb-4 flex cursor-pointer items-start gap-2 text-grey-600">
                <input
                  type="checkbox"
                  checked={newsletter}
                  onChange={(e) => setNewsletter(e.target.checked)}
                  className="mt-1"
                />
                Send me the Beyond the Rules newsletter
              </label>

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

              <button
                type="submit"
                disabled={isPending}
                className="text-small mb-4 cursor-pointer rounded-full bg-blue-800 px-5 py-2 text-white transition-colors hover:bg-dark-blue disabled:cursor-wait disabled:opacity-60"
              >
                {isPending ? 'Sending…' : 'Continue to download'}
              </button>
              <p className="tag text-grey-600">
                Only Dark Matter Labs sees these details. We use them to
                understand who uses our tools and, if you ask, to send the
                newsletter. To have them deleted, email
                beyondtherules@darkmatterlabs.org.
              </p>
            </form>
          )}
        </div>
      </dialog>,
          document.body,
        )}
    </>
  );
}
