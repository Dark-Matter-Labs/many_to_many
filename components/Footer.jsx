'use client';

import { useEffect, useRef, useState } from 'react';

export default function Footer() {
  const [isAttributionOpen, setIsAttributionOpen] = useState(false);
  const closeButtonRef = useRef(null);

  const openAttribution = () => setIsAttributionOpen(true);
  const closeAttribution = () => setIsAttributionOpen(false);

  // Open attribution modal if URL indicates it (e.g., /?attribution=1 or /#attribution)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const { hash, href } = window.location;
      const url = new URL(href);
      const hasQueryFlag = url.searchParams.get('attribution') === '1';
      const hasHashFlag = hash === '#attribution';
      if (hasQueryFlag || hasHashFlag) {
        setIsAttributionOpen(true);
      }
    } catch {
      // noop: best-effort
    }
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeAttribution();
    };
    if (isAttributionOpen) {
      document.addEventListener('keydown', onKeyDown);
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      window.setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 0);
      return () => {
        document.removeEventListener('keydown', onKeyDown);
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isAttributionOpen]);

  return (
    <footer className="bg-blue-400 pt-8 pb-[40px]">
      {isAttributionOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-20"
          role="dialog"
          aria-modal="true"
          aria-labelledby="attribution-title"
          onClick={(e) => {
            if (e.currentTarget === e.target) closeAttribution();
          }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative z-10 w-full max-w-4xl">
            <section className="bg-grey-50 rounded-3xl px-6 py-8 shadow-[0_0_20px_rgba(0,95,255,0.40)] sm:px-10 sm:py-10 md:rounded-[48px] md:px-14 md:py-12">
              <button
                ref={closeButtonRef}
                onClick={closeAttribution}
                className="absolute top-4 right-4 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="Close"
              >
                ×
              </button>
              <div className="container-main">
                <div className="sm:grid sm:grid-cols-2 sm:gap-8">
                  <div>
                    <h2
                      id="attribution-title"
                      className="heading-lg pb-4 text-blue-800"
                    >
                      Attribution of Many-to-Many work
                    </h2>
                  </div>
                  <div>
                    <p className="text-small text-blue-800">
                      We are delighted you want to use and adapt our work! This
                      is exactly why we've made it available under a Creative
                      Commons license. When attributing, we'd appreciate it if
                      you could:
                    </p>
                    <ol className="text-small mt-4 ml-1 list-inside list-decimal space-y-2 text-blue-800">
                      <li>
                        Name the work: e.g., "the Many-to-Many System" or "the
                        Many-to-Many Field Guide" or “Experimenter’s Log”.
                      </li>
                      <li>
                        Include a link: A hyperlink back to our website is the
                        most valuable part of any attribution, as it allows
                        others to discover the work for themselves.
                      </li>
                      <li>
                        Specify that the work is licensed under a{' '}
                        <a
                          href="https://creativecommons.org/licenses/by-nc/4.0/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          Creative Commons BY-NC-SA 4.0 License
                        </a>{' '}
                        license.
                      </li>
                    </ol>
                    <p className="text-small mt-4 text-blue-800">
                      For example: 'This concept is adapted from the
                      Many-to-Many Field Guide
                      [https://www.manytomany.systems/]'.
                    </p>
                    <p className="text-small mt-4 text-blue-800">
                      Thank you for being part of this learning journey!
                    </p>
                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={closeAttribution}
                        className="cursor-pointer rounded-full bg-blue-600 px-5 py-2 text-white shadow hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
      <div className="container-main">
        <p className="text-small text-blue-800">
          This work is part of{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://darkmatterlabs.org/"
          >
            Dark Matter Labs
          </a>
          ’ Beyond the Rules Lab and under the{' '}
          <a
            rel="noopener noreferrer"
            href="https://creativecommons.org/licenses/by-nc/4.0/"
          >
            Creative Commons BY-NC
          </a>{' '}
          license.{' '}
          <button
            type="button"
            onClick={openAttribution}
            className="cursor-pointer text-blue-800 underline decoration-blue-800 underline-offset-2 hover:text-blue-300"
          >
            Click here for how to attribute this work.
          </button>
        </p>
      </div>
    </footer>
  );
}
