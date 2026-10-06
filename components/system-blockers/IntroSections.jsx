import EvidenceTag from './EvidenceTag';
import { SectionIntro } from './Sections';
import {
  ARCHETYPES,
  EVIDENCE_LABELS,
  HOW_TO_USE,
  JOURNEY_STAGE_NAMES,
} from './content';

// Three wandering journeys across the same five stages (Georgia, 6 Oct).
// Philanthropy is drawn strongest because it was discussed and lightly
// tested; the others come from desk research only.
const JOURNEYS = [
  {
    label: 'Philanthropy-funded',
    y: 67,
    colour: '#005fff',
    strong: true,
    d: 'M270,68 C275,67 284,64 300,62 C316,60 344,57 367,55 C390,53 412,50 435,48 C458,46 480,41 502,45 C524,49 548,66 570,70 C592,74 614,75 637,72 C660,69 682,54 705,50 C728,46 750,45 772,48 C794,51 824,64 840,66 C856,68 865,61 870,60',
    dots: [62, 48, 70, 50, 66],
  },
  {
    label: 'Public-private, place-based',
    y: 125,
    colour: '#1f8a3a',
    d: 'M270,126 C275,125 284,120 300,120 C316,120 344,129 367,126 C390,123 412,104 435,100 C458,96 480,93 502,99 C524,105 548,128 570,134 C592,140 614,139 637,134 C660,129 682,112 705,106 C728,100 750,97 772,101 C794,105 824,124 840,128 C856,132 865,123 870,122',
    dots: [120, 100, 134, 106, 128],
  },
  {
    label: 'Multi-geography',
    y: 181,
    colour: '#fa691a',
    d: 'M270,182 C275,181 284,178 300,176 C316,174 344,165 367,168 C390,171 412,188 435,192 C458,196 480,199 502,194 C524,189 548,166 570,160 C592,154 614,155 637,159 C660,163 682,180 705,186 C728,192 750,196 772,193 C794,190 824,173 840,168 C856,163 865,163 870,162',
    dots: [176, 192, 160, 186, 168],
  },
];
const STAGE_XS = [300, 435, 570, 705, 840];

function JourneysDiagram() {
  return (
    <div className="mb-10 overflow-x-auto">
      <svg
        viewBox="0 0 930 215"
        className="h-auto w-full min-w-[640px]"
        role="img"
        aria-label="Three wandering journeys across the same five stages. The philanthropy-funded journey is drawn strongest; the public-private and multi-geography journeys are lighter, because they come from desk research only."
      >
        {JOURNEY_STAGE_NAMES.map((name, i) => (
          <text
            key={name}
            x={STAGE_XS[i]}
            y="22"
            textAnchor="middle"
            className="font-galosText"
            fontSize="15"
            fill="#5a5a5a"
          >
            {name}
          </text>
        ))}
        {JOURNEYS.map((journey) => (
          <g key={journey.label} opacity={journey.strong ? 1 : 0.55}>
            <text
              x="20"
              y={journey.y}
              className="font-galosText"
              fontSize="16"
              fill={journey.colour}
            >
              {journey.label}
            </text>
            <path
              d={journey.d}
              fill="none"
              stroke={journey.colour}
              strokeWidth={journey.strong ? 4 : 2.5}
              strokeLinecap="round"
            />
            {journey.dots.map((cy, i) => (
              <circle
                key={STAGE_XS[i]}
                cx={STAGE_XS[i]}
                cy={cy}
                r={journey.strong ? 7 : 5}
                fill="#ffffff"
                stroke={journey.colour}
                strokeWidth={journey.strong ? 3 : 2.5}
              />
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
}

export function ArchetypesSection() {
  return (
    <section aria-labelledby="archetypes" className="grid-bg py-20">
      <div className="container-main">
        <SectionIntro
          id="archetypes"
          eyebrow="How we’re exploring this"
          title="Three kinds of collaboration, three journeys"
        >
          <p className="mb-4">
            Collaborations differ in who holds the money, who decides and who
            answers for what. To get specific, we look at three archetypes.
            Each moves through broadly the same stages, but in a different
            shape, with different conditions along the way.
          </p>
          <p className="text-small italic">
            * We’ve started here loosely and humbly, so that we can get
            specific while still looking at the whole system. These aren’t
            perfect archetypes, or the only ones, and a collaboration’s journey
            is rarely this sequential.
          </p>
        </SectionIntro>
        <JourneysDiagram />
        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {ARCHETYPES.map((archetype) => (
            <article
              key={archetype.id}
              className={
                'flex flex-col rounded-[20px] p-6 ' +
                (archetype.deep
                  ? 'bg-white shadow-[0_4px_8px_0_#b7b7b7]'
                  : 'border-2 border-dashed border-grey-200 bg-white/70')
              }
            >
              <p className="tag mb-3 tracking-wide text-grey-600 uppercase">
                {archetype.status}
              </p>
              <h3 className="heading-md mb-3 text-blue-800">{archetype.title}</h3>
              <p className="text-small mb-6 flex-grow text-grey-600">
                {archetype.body}
              </p>
              {archetype.deep && (
                <a
                  href="#philanthropy"
                  className="text-small self-start rounded-full bg-blue-800 px-5 py-2 text-white transition-colors hover:bg-dark-blue"
                >
                  Explore where you got stuck
                </a>
              )}
            </article>
          ))}
        </div>
        <p className="text-small text-grey-600 italic">
          * If you’d like to take one of these forward with us, in conversation
          or testing,{' '}
          <a href="#register-interest" className="text-blue-800 underline">
            get in touch
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export function HowToUseSection() {
  return (
    <section aria-labelledby="how-to-use" className="section-shadow bg-white py-20">
      <div className="container-main">
        <SectionIntro id="how-to-use" eyebrow="Using this page" title="How to use it" />
        <ol className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {HOW_TO_USE.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span
                aria-hidden="true"
                className="heading-md flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffdcc8] text-blue-800"
              >
                {index + 1}
              </span>
              <div>
                <h3 className="heading-md mb-1 text-blue-800">{step.title}</h3>
                <p className="text-small text-grey-600">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="text-small text-grey-600">Everything is labelled:</span>
          {Object.keys(EVIDENCE_LABELS).map((kind) => (
            <EvidenceTag key={kind} kind={kind} />
          ))}
        </div>
        <p className="text-small max-w-3xl text-grey-600 italic">
          None of this is legal advice. Whether something binds depends on who
          you are, where you are and the facts. We hope this page helps you take
          a better question to your own lawyer.
        </p>
      </div>
    </section>
  );
}
