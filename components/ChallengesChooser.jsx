import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SystemBlockerIcon from '@/components/system-blockers/SystemBlockerIcon';

const PATHS = [
  {
    id: 'collaboration',
    eyebrow: 'Inside the work',
    title: 'Collaboration challenges',
    body: 'Common problem stories, from getting stuck at the start to losing momentum over time. Find one that sounds like yours and follow it into the Many-to-Many System.',
    cta: 'Explore collaboration challenges',
    href: '#collaboration-challenges',
    gradient: 'bg-gradient-to-t from-[#59ff7f] to-white',
  },
  {
    id: 'system',
    eyebrow: 'Around the work',
    title: 'System blockers and enablers',
    body: 'The funding, legal and organisational conditions that block some partners and enable others. See where they get fixed, and where there may be room to move.',
    cta: 'Explore blockers and enablers',
    href: '/challenges/system-blockers',
    gradient: 'bg-gradient-to-t from-[#ffc3a2] to-white',
    isNew: true,
  },
];

export default function ChallengesChooser() {
  return (
    <section aria-label="Choose where to start" className="grid-bg py-20">
      <div className="container-main">
        <h2 className="heading-lg mb-10 text-center text-blue-800">
          Where are you stuck?
        </h2>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {PATHS.map((path) => (
            <article
              key={path.id}
              className={
                'flex flex-col rounded-[20px] p-8 shadow-[0_4px_8px_0_#b7b7b7] ' +
                path.gradient
              }
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="tag tracking-wide text-grey-600 uppercase">
                  {path.eyebrow}
                </p>
                {path.isNew && (
                  <span className="tag rounded-[10px] border border-orange-800 bg-white px-2 py-0.5 text-orange-800">
                    New
                  </span>
                )}
              </div>
              {path.id === 'system' && (
                <SystemBlockerIcon size={72} className="mb-4" />
              )}
              <h3 className="heading-lg mb-3 text-blue-800">{path.title}</h3>
              <p className="text-small mb-6 flex-grow text-grey-600">{path.body}</p>
              <Link
                href={path.href}
                className="font-galosText inline-flex items-center gap-2 self-start rounded-full bg-blue-800 px-5 py-2 text-white transition-colors hover:bg-dark-blue"
              >
                {path.cta} <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
