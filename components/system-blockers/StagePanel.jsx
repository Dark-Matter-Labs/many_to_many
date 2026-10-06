import PointExplorer from './PointExplorer';
import ExampleAnswers from './ExampleAnswers';
import InquiryForm from './InquiryForm';
import { stageLabel, stagePoints } from './content';

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
          <ExampleAnswers stage={stage} />
          <InquiryForm
            heading="Ask, correct or share"
            intro="We don’t give live answers yet. Send a question, a correction or what you’ve tried, and we’ll review it before it feeds into the wiki."
            kinds={['question', 'correction', 'experience']}
            stage={title}
            pointOptions={stagePoints(stage).map((point) => point.name)}
          />
        </div>
      </div>
    </div>
  );
}
