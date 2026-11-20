// Two ways into the page (prototype v15, 5 Nov 2026): follow one journey, or
// look across all three archetypes at once.
//
// Kept compact on purpose. It is a chooser, not a section of its own argument,
// so it carries the real counts and nothing else.

import { BLOCKERS, allPatterns } from './blockers';
import { STAGES } from './content';

const WAYS = [
  {
    href: '#journey',
    title: 'Follow the journey',
    body: 'The life of a philanthropy-funded collaboration, stage by stage, and where each condition gets fixed.',
    count: () => `${STAGES.length} stages`,
  },
  {
    href: '#browse',
    title: 'Browse all patterns',
    body: 'Everything we hold at once, across all three kinds of collaboration, and the rules underneath them.',
    count: () =>
      `${allPatterns().length} patterns · ${Object.keys(BLOCKERS).length} rules`,
  },
];

export default function WaysIn() {
  return (
    <section aria-labelledby="ways-in-title" className="bg-white py-10">
      <div className="container-main">
        <h2 id="ways-in-title" className="tag text-grey-600 mb-3 tracking-wide uppercase">
          Two ways in
        </h2>
        <ul className="grid gap-4 md:grid-cols-2">
          {WAYS.map((way) => (
            <li key={way.href}>
              <a
                href={way.href}
                className="group flex h-full flex-col rounded-2xl border border-blue-400 bg-white p-5 transition-colors hover:border-blue-800"
              >
                <span className="heading-md text-blue-800 mb-1 underline decoration-blue-400 underline-offset-4 group-hover:decoration-blue-800">
                  {way.title}
                </span>
                <span className="tag text-grey-600 mb-2 tracking-wide uppercase">
                  {way.count()}
                </span>
                <span className="text-small text-grey-600">{way.body}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
