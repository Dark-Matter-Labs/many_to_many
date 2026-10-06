import PointExplorer from './PointExplorer';
import EvidenceTag from './EvidenceTag';
import { mailto, stageLabel } from './content';

function Eyebrow({ children }) {
  return (
    <p className="tag mb-3 tracking-wide text-grey-600 uppercase">{children}</p>
  );
}

export default function StagePanel({ stage }) {
  const title = `${stageLabel(stage)}: ${stage.name}`;
  return (
    <div
      className={
        'rounded-[24px] bg-grey-50 p-6 sm:p-10 ' +
        (stage.proposed ? 'border-2 border-dashed border-grey-200' : '')
      }
      style={{ boxShadow: `0 0 0 3px ${stage.colour}, 0 4px 20px rgba(0,0,0,0.08)` }}
    >
      <header className="mb-8 max-w-3xl">
        <Eyebrow>{stageLabel(stage)}</Eyebrow>
        <h3 className="heading-lg mb-3 text-blue-800">{stage.name}</h3>
        <p className="text-regular mb-5 text-grey-600">{stage.intro}</p>
        <div className="flex flex-wrap items-center gap-2">
          <span className="tag text-grey-600">Decision points:</span>
          {stage.decisionPoints.map((point) => (
            <span
              key={point}
              className="tag rounded-full border border-blue-800 px-3 py-1 text-blue-800"
            >
              {point}
            </span>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr]">
        <section aria-label="Possible points at this stage">
          <PointExplorer stage={stage} />
        </section>

        <div className="flex flex-col gap-8">
          <section aria-label="Questions to ask here">
            <Eyebrow>Questions to ask here</Eyebrow>
            <ul className="flex flex-col gap-3">
              {stage.questions.map((question) => (
                <li
                  key={question}
                  className="text-small rounded-2xl border border-blue-400 bg-white px-4 py-3 text-blue-800"
                >
                  {question}
                </li>
              ))}
            </ul>
          </section>

          <section aria-label="What we’ve heard so far">
            <Eyebrow>What we’ve heard so far</Eyebrow>
            <ul className="flex flex-col gap-4">
              {stage.evidence.map(([kind, text]) => (
                <li key={text} className="flex flex-col items-start gap-1">
                  <EvidenceTag kind={kind} />
                  <span className="text-small text-grey-600">{text}</span>
                </li>
              ))}
            </ul>
          </section>

          <section
            aria-label="A better question to take away"
            className="rounded-2xl bg-blue-800 p-5 text-white"
          >
            <p className="tag mb-2 tracking-wide uppercase opacity-80">
              A better question to take away
            </p>
            <p className="text-regular">{stage.takeaway}</p>
          </section>

          <p className="text-small text-grey-600 italic">
            This shows what people have said and tried. It isn’t legal advice,
            and it doesn’t tell you whether anything binds you.
          </p>

          <a
            href={mailto(`System blockers correction: ${title}`)}
            className="text-small self-start rounded-full border border-blue-800 px-5 py-2 text-blue-800 transition-colors hover:bg-blue-800 hover:text-white"
          >
            Seen something different? Correct this stage
          </a>
        </div>
      </div>
    </div>
  );
}
