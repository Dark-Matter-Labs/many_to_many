'use client';

import { useState } from 'react';
import EvidenceTag from './EvidenceTag';

function Eyebrow({ children }) {
  return (
    <p className="tag mb-3 tracking-wide text-grey-600 uppercase">{children}</p>
  );
}

// Suggested questions with an example of what the material holds. These are
// fixed examples, not live answers: visitors send their own questions below.
export default function ExampleAnswers({ stage }) {
  const [selected, setSelected] = useState(0);
  const question = stage.questions[selected];

  return (
    <div className="flex flex-col gap-6">
      <section aria-label="Questions to ask here">
        <Eyebrow>Questions to ask here</Eyebrow>
        <ul className="flex flex-col gap-3">
          {stage.questions.map((q, i) => (
            <li key={q}>
              <button
                type="button"
                onClick={() => setSelected(i)}
                aria-pressed={i === selected}
                className={
                  'text-small w-full cursor-pointer rounded-2xl border px-4 py-3 text-left transition-colors ' +
                  (i === selected
                    ? 'border-blue-800 bg-blue-400 text-blue-800'
                    : 'border-blue-400 bg-white text-blue-800 hover:border-blue-800')
                }
              >
                {q}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-label="Example answer"
        className="rounded-2xl border border-dashed border-blue-800 bg-white p-5"
      >
        <p className="tag mb-3 tracking-wide text-blue-800 uppercase">
          Example answer · “{question}”
        </p>
        <p className="text-small mb-4 text-grey-600">
          <strong>What the material holds</strong>, as a range, with where each
          item comes from:
        </p>
        <ul className="mb-5 flex flex-col gap-4">
          {stage.evidence.map(([kind, text]) => (
            <li key={text} className="flex flex-col items-start gap-1">
              <EvidenceTag kind={kind} />
              <span className="text-small text-grey-600">{text}</span>
            </li>
          ))}
        </ul>
        <div className="mb-4 rounded-2xl bg-blue-800 p-4 text-white">
          <p className="tag mb-1 tracking-wide uppercase opacity-80">
            A better question to take away
          </p>
          <p className="text-regular">{stage.takeaway}</p>
        </div>
        <p className="text-small text-grey-600 italic">
          This shows what people have said and tried. It isn’t legal advice,
          and it doesn’t tell you whether anything binds you.
        </p>
      </section>
    </div>
  );
}
