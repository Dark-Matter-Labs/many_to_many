'use client';

// Three entries worked end to end in the five-part model (prototype v12 to
// v18): the rule, how it is read, the practice built around it, our read, and
// responses at three levels. Evidence is shown as a range, so the thin parts
// are visible rather than hidden.

import { useState } from 'react';
import { BLOCKERS, WORKED_ENTRIES } from './blockers';

const NAMES = Object.keys(WORKED_ENTRIES);

// The chain is the content, so each link is numbered and the steps read as
// steps rather than as stacked paragraphs.
function Part({ step, label, children }) {
  return (
    <div className="mb-4 border-l-2 border-blue-400 pl-3">
      <p className="tag text-grey-600 mb-1 tracking-wide uppercase">
        <span className="text-blue-800">{step}</span> · {label}
      </p>
      <p className="text-small text-grey-600">{children}</p>
    </div>
  );
}

// "Not yet" is the honest answer for several of these, and the page should
// show that at a glance rather than bury it in the sentence.
const isThin = (body) => /^(not yet|nothing|no )/i.test(body.trim());

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
          <p className="tag text-grey-600 mb-2 tracking-wide uppercase">
            The rule behind it · {BLOCKERS[entry.blocker].name}
          </p>
          <Part step="1" label="What it says">
            {entry.rule}
          </Part>
          <p className="text-small text-grey-600 mb-4 pl-3 italic">
            {entry.ruleSrc}
          </p>
          <Part step="2" label="How it is read">
            {entry.reading}
          </Part>
          <Part step="3" label="The practice built around it">
            {entry.practice}
          </Part>
          <Part step="4" label="Our read, to test">
            {entry.ourRead}
          </Part>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-2xl border border-blue-400 bg-white p-6">
            <p className="tag text-grey-600 mb-3 tracking-wide uppercase">
              What could be done
            </p>
            <ol className="flex flex-col gap-3">
              {entry.levels.map(([level, body], index) => (
                <li key={level} className="border-l-2 border-blue-400 pl-3">
                  <p className="text-small font-semibold text-blue-800">
                    {index + 1}. {level}
                  </p>
                  <p className="text-small text-grey-600">{body}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="border-grey-600 rounded-2xl border border-dashed bg-white p-6">
            <p className="tag text-grey-600 mb-1 tracking-wide uppercase">
              How much evidence we have
            </p>
            <p className="text-small text-grey-600 mb-3">
              Shown as a range on purpose. The thin lines are the honest part.
            </p>
            <dl className="flex flex-col gap-2">
              {entry.evidence.map(([level, body]) => {
                const thin = isThin(body);
                return (
                  <div
                    key={level}
                    className={
                      'border-l-2 pl-3 ' +
                      (thin ? 'border-grey-300' : 'border-blue-800')
                    }
                  >
                    <dt
                      className={
                        'text-small font-semibold ' +
                        (thin ? 'text-grey-600' : 'text-blue-800')
                      }
                    >
                      {level}
                      {thin && (
                        <span className="font-normal"> — nothing yet</span>
                      )}
                    </dt>
                    <dd className="text-small text-grey-600">{body}</dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
