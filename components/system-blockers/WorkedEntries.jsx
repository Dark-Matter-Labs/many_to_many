'use client';

// Three entries worked end to end in the five-part model (prototype v12 to
// v18): the rule, how it is read, the practice built around it, our read, and
// responses at three levels. Evidence is shown as a range, so the thin parts
// are visible rather than hidden.

import { useState } from 'react';
import { BLOCKERS, WORKED_ENTRIES } from './blockers';

const NAMES = Object.keys(WORKED_ENTRIES);

function Part({ label, children }) {
  return (
    <div className="mb-4">
      <p className="tag mb-1 tracking-wide text-grey-600 uppercase">{label}</p>
      <p className="text-regular text-grey-600">{children}</p>
    </div>
  );
}

export default function WorkedEntries() {
  const [name, setName] = useState(NAMES[0]);
  const entry = WORKED_ENTRIES[name];

  return (
    <div>
      <ul className="mb-8 flex flex-wrap gap-2" aria-label="Worked entries">
        {NAMES.map((item) => (
          <li key={item}>
            <button
              type="button"
              onClick={() => setName(item)}
              aria-pressed={item === name}
              className={
                'text-small cursor-pointer rounded-full border px-3 py-1.5 transition-colors ' +
                (item === name
                  ? 'border-blue-800 bg-blue-800 text-white'
                  : 'border-blue-400 bg-white text-blue-800 hover:border-blue-800')
              }
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-blue-400 bg-white p-6">
          <p className="tag mb-2 tracking-wide text-grey-600 uppercase">
            The rule behind it · {BLOCKERS[entry.blocker].name}
          </p>
          <Part label="What it says">{entry.rule}</Part>
          <p className="text-small mb-4 text-grey-600 italic">
            {entry.ruleSrc}
          </p>
          <Part label="How it is read">{entry.reading}</Part>
          <Part label="The practice built around it">{entry.practice}</Part>
          <Part label="Our read, to test">{entry.ourRead}</Part>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-2xl border border-blue-400 bg-white p-6">
            <p className="tag mb-3 tracking-wide text-grey-600 uppercase">
              What could be done
            </p>
            <ol className="flex flex-col gap-3">
              {entry.levels.map(([level, body]) => (
                <li key={level}>
                  <p className="text-small font-semibold text-blue-800">
                    {level}
                  </p>
                  <p className="text-regular text-grey-600">{body}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border border-dashed border-grey-600 bg-white p-6">
            <p className="tag mb-1 tracking-wide text-grey-600 uppercase">
              How much evidence we have
            </p>
            <p className="text-small mb-3 text-grey-600">
              Shown as a range on purpose. The thin lines are the honest part.
            </p>
            <dl className="flex flex-col gap-2">
              {entry.evidence.map(([level, body]) => (
                <div key={level}>
                  <dt className="text-small font-semibold text-blue-800">
                    {level}
                  </dt>
                  <dd className="text-regular text-grey-600">{body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
