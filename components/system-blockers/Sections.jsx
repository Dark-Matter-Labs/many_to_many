import Link from 'next/link';
import EvidenceTag from './EvidenceTag';
import StageChips from './StageChips';
import StageLink from './StageLink';
import {
  EVIDENCE_LABELS,
  PATTERNS,
  REFLECTION_PROMPT,
  REFLECTION_QUESTIONS,
  RULE_SPECTRUM,
  TOOLS,
  findStage,
  mailto,
} from './content';

export function SectionIntro({ id, eyebrow, title, children }) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow && (
        <p className="tag mb-3 tracking-wide text-grey-600 uppercase">{eyebrow}</p>
      )}
      <h2 id={id} className="heading mb-4 text-blue-800">
        {title}
      </h2>
      {children && <div className="text-regular text-grey-600">{children}</div>}
    </div>
  );
}

export function ReflectionSection() {
  return (
    <section
      id="philanthropy"
      aria-labelledby="been-here"
      className="section-shadow scroll-mt-28 bg-white py-20"
    >
      <div className="container-main grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <p className="tag mb-3 tracking-wide text-grey-600 uppercase">
            Philanthropy-funded collaboration · explored through research and
            conversations
          </p>
          <h2 id="been-here" className="heading mb-4 text-blue-800">
            Have you been here?
          </h2>
          <p className="text-regular mb-8 max-w-md text-grey-600">{REFLECTION_PROMPT}</p>
          <h3 className="heading-md mb-4 text-blue-800">Where did you feel it?</h3>
          <p className="text-small mb-4 text-grey-600">
            Pick the moment in the collaboration to see what we’ve mapped there.
          </p>
          <StageChips onPage />
        </div>
        <ul className="flex flex-col gap-6">
          {REFLECTION_QUESTIONS.map(({ question, detail }) => (
            <li key={question} className="border-l-4 border-orange-50 pl-5">
              <p className="heading-md mb-1 text-blue-800">{question}</p>
              <p className="text-small text-grey-600">{detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function RuleSpectrumSection() {
  return (
    <section aria-labelledby="binding" className="section-shadow bg-white py-20">
      <div className="container-main">
        <SectionIntro id="binding" eyebrow="A question for every stage" title="Binding, or chosen?">
          <p>
            Is this constraint actually binding, or a cautious reading of
            something less fixed? A fiduciary duty is a condition. Meeting it
            through a one-year grant tied to fixed outputs is a design choice.
            That is often where the room to move is.
          </p>
        </SectionIntro>
        <ol className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {RULE_SPECTRUM.map((item, index) => (
            <li
              key={item.title}
              className="rounded-2xl border border-blue-400 p-5"
              style={{ backgroundColor: `rgba(0, 95, 255, ${0.04 + index * 0.06})` }}
            >
              <p className="heading-md mb-2 text-blue-800">{item.title}</p>
              <p className="text-small text-grey-600">{item.body}</p>
            </li>
          ))}
        </ol>
        <p className="text-small max-w-3xl text-grey-600 italic">
          Not every constraint is a choice. Some bind hard, and what binds
          depends on the country.
        </p>
      </div>
    </section>
  );
}

export function PatternsSection() {
  return (
    <section aria-labelledby="trying" className="grid-bg py-20">
      <div className="container-main">
        <SectionIntro id="trying" eyebrow="A range, not a recommendation" title="What others are trying">
          <p>
            These are patterns we heard across several conversations, not
            single cases, and none of them is settled.
          </p>
        </SectionIntro>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PATTERNS.map((pattern) => (
            <article
              key={pattern.title}
              className="flex flex-col gap-3 rounded-[20px] bg-white p-6 shadow-[0_4px_8px_0_#b7b7b7]"
            >
              <EvidenceTag kind="int" />
              <h3 className="heading-md text-blue-800">{pattern.title}</h3>
              <p className="text-small flex-grow text-grey-600">{pattern.body}</p>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="tag text-grey-600">Where it bites:</span>
                {pattern.stages.map((id) => (
                  <StageLink
                    key={id}
                    stageId={id}
                    onPage
                    className="tag rounded-full bg-blue-800 px-3 py-1 text-white hover:bg-dark-blue"
                  >
                    {`Stage ${findStage(id).num}`}
                  </StageLink>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeedbackSection() {
  return (
    <section aria-labelledby="wrong" className="section-shadow-tb bg-[#ffdcc8] py-20">
      <div className="container-main grid grid-cols-1 items-center gap-10 lg:grid-cols-[3fr_2fr]">
        <div>
          <p className="tag mb-3 tracking-wide text-grey-600 uppercase">Corrections</p>
          <h2 id="wrong" className="heading mb-4 text-blue-800">
            Tell us where this is wrong
          </h2>
          <p className="text-regular mb-4 max-w-2xl text-grey-600">
            We would rather hear “no, that’s wrong, this is what we found, and
            this is how” than quiet agreement. Every stage above has its own
            correction link. You can also register interest in working on one
            condition with others.
          </p>
          <p className="text-small max-w-2xl text-grey-600">
            <strong className="text-blue-800">What happens to what you send:</strong>{' '}
            we’ll share anonymised reflections on this page. We won’t use your
            name unless you ask us to. Please leave out names and anything
            confidential.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <a
            href={mailto('System blockers: a correction')}
            className="text-regular rounded-full bg-blue-800 px-6 py-3 text-white transition-colors hover:bg-dark-blue"
          >
            Send a correction
          </a>
          <a
            href={mailto('System blockers: I’d like to work on a condition')}
            className="text-regular rounded-full border border-blue-800 bg-white px-6 py-3 whitespace-nowrap text-blue-800 transition-colors hover:bg-blue-800 hover:text-white"
          >
            Register interest in a condition
          </a>
        </div>
      </div>
    </section>
  );
}

export function ToolsSection() {
  return (
    <section aria-labelledby="tools" className="bg-white py-20">
      <div className="container-main">
        <SectionIntro id="tools" eyebrow="Tools" title="Use them in your own collaboration">
          <p>
            We’re still testing these canvases for rigour, so they aren’t
            published yet.
          </p>
        </SectionIntro>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TOOLS.map((tool) => (
            <li
              key={tool.title}
              className="rounded-[20px] border-2 border-dashed border-grey-200 p-6"
            >
              <span className="tag mb-3 inline-block rounded-[10px] bg-grey-100 px-2 py-0.5 text-grey-600">
                In development
              </span>
              <h3 className="heading-md mb-2 text-blue-800">{tool.title}</h3>
              <p className="text-small text-grey-600">{tool.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section aria-labelledby="about" className="grid-bg py-20">
      <div className="container-main grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <h2 id="about" className="heading-lg mb-4 text-blue-800">
            About this work
          </h2>
          <p className="text-regular text-grey-600">
            System Blockers is part of Many-to-Many, Dark Matter Labs’ work on
            the legal and organisational design of complex collaborations. It
            draws on practitioner conversations, desk research and a workshop in
            Sheffield, and it builds on the Many-to-Many{' '}
            <Link href="/discover-the-system" className="text-blue-800 underline">
              Field Guide
            </Link>
            . Everything here is a working hypothesis.
          </p>
        </div>
        <div className="rounded-[20px] bg-white p-6">
          <h3 className="heading-md mb-4 text-blue-800">How items are marked</h3>
          <dl className="flex flex-col gap-3">
            {Object.entries(EVIDENCE_LABELS).map(([kind, meta]) => (
              <div key={kind} className="flex flex-col items-start gap-1">
                <dt>
                  <EvidenceTag kind={kind} />
                </dt>
                <dd className="text-small text-grey-600">{meta.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
