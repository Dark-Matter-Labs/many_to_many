'use client';

// Browse every pattern across the three archetypes, or read the rules and
// readings that sit behind them (prototype v13 to v18, Nov 2026).

import { useMemo, useState } from 'react';
import InquiryForm from './InquiryForm';
import {
  AGENCY,
  ARCHETYPE_NAMES,
  BLOCKERS,
  INFRASTRUCTURE_ELEMENTS,
  SHIFT_LABELS,
  TOOL_FOR,
  allPatterns,
  reach,
  reachLine,
} from './blockers';
import { STAGES, TESTED_SHORT } from './content';

const STAGE_NAME = Object.fromEntries(
  STAGES.map((stage) => [stage.id, stage.shortName ?? stage.name]),
);

const testedLabel = (tested) =>
  tested === 'desk'
    ? 'Desk research'
    : (TESTED_SHORT[tested] ?? TESTED_SHORT['']);

function Chip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        'text-small cursor-pointer rounded-full border px-3 py-1.5 transition-colors ' +
        (active
          ? 'border-blue-800 bg-blue-800 text-white'
          : 'border-blue-400 bg-white text-blue-800 hover:border-blue-800')
      }
    >
      {children}
    </button>
  );
}

function ShiftGuess({ shift }) {
  return (
    <div className="mt-4">
      <p className="tag text-grey-600 mb-2 tracking-wide uppercase">
        Could this shift? Our first guess
      </p>
      {/* Deliberately not pills: elsewhere on this page a filled pill is a
          choice the reader made. This is our verdict, and it is not clickable. */}
      <ul className="text-small flex flex-col gap-1">
        {Object.entries(SHIFT_LABELS).map(([key, label]) => {
          const applies = shift.includes(key);
          return (
            <li
              key={key}
              className={
                'border-l-2 pl-2 ' +
                (applies
                  ? 'text-dark-blue border-blue-800 font-semibold'
                  : 'border-grey-300 text-grey-600 decoration-grey-300 line-through')
              }
            >
              {label}
              <span className="sr-only">
                {applies ? ' — our guess' : ' — not our guess'}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function BlockerCard({ blockerKey }) {
  const blocker = BLOCKERS[blockerKey];
  const agency = AGENCY[blockerKey] ?? { shift: [] };
  const { names } = reach(blockerKey);
  return (
    <li className="rounded-2xl border border-blue-400 bg-white p-6">
      <p className="tag text-grey-600 mb-2 tracking-wide uppercase">
        {blocker.kind} · {blocker.status}
      </p>
      <h3 className="heading-md mb-2 text-blue-800">{blocker.name}</h3>
      <p className="text-small text-grey-600 mb-3">{blocker.short}</p>
      {/* The reason to name a rule is that it sits behind several patterns at
          once, so say which ones rather than only counting them. */}
      <details className="mb-3">
        <summary className="text-small cursor-pointer text-blue-800">
          {reachLine(blockerKey)}
        </summary>
        {names.length ? (
          <ul className="text-small text-grey-600 mt-2 flex flex-col gap-1">
            {names.map((name) => (
              <li key={name} className="border-l-2 border-blue-400 pl-2">
                {name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-small text-grey-600 mt-2">
            Nothing on this page links to it yet. That gap is worth telling us
            about.
          </p>
        )}
      </details>
      {agency.binds && (
        <p className="text-small text-grey-600 mb-3 rounded-xl bg-[#ffdcc8] p-3">
          <strong className="text-dark-blue">But not always:</strong>{' '}
          {agency.binds}
        </p>
      )}
      {agency.now && (
        <p className="text-small text-grey-600 mb-1">
          <strong className="text-blue-800">
            A workaround people use now:
          </strong>{' '}
          {agency.now}
        </p>
      )}
      <ShiftGuess shift={agency.shift} />
    </li>
  );
}

function PatternCard({ pattern }) {
  const tool = TOOL_FOR[pattern.name];
  return (
    <li className="rounded-2xl border border-blue-400 bg-white p-6">
      <p className="tag text-grey-600 mb-2 tracking-wide uppercase">
        {ARCHETYPE_NAMES[pattern.arch]} ·{' '}
        {STAGE_NAME[pattern.stage] ?? pattern.stage}
        {pattern.el ? ` · ${pattern.el}` : ''}
      </p>
      <h3 className="heading-md mb-2 text-blue-800">{pattern.name}</h3>
      <p className="text-small text-grey-600 mb-3">{pattern.pattern}</p>
      {/* Both sides always, and of equal weight: the claim is that a condition
          blocks someone and enables someone else in the same moment. Where we
          have not identified the other side, the card says so. */}
      <dl className="text-small text-grey-600 mb-3 flex flex-col gap-1">
        <div className="border-grey-600 border-l-2 pl-2">
          <dt className="inline font-semibold text-blue-800">Blocks: </dt>
          <dd className="inline">
            {pattern.blocks
              ? `${pattern.blocks.who}. ${pattern.blocks.how}`
              : 'We have not identified who.'}
          </dd>
        </div>
        <div className="border-l-2 border-blue-400 pl-2">
          <dt className="inline font-semibold text-blue-800">Enables: </dt>
          <dd className="inline">
            {pattern.enables
              ? `${pattern.enables.who}. ${pattern.enables.how}`
              : 'We have not identified who.'}
          </dd>
        </div>
      </dl>
      <p className="text-small text-grey-600 mb-1">
        <strong className="text-blue-800">The rule behind it:</strong>{' '}
        {pattern.behind}
      </p>
      {tool && (
        <p className="text-small text-grey-600 mb-1">
          <strong className="text-blue-800">Tools:</strong> {tool}
        </p>
      )}
      <p className="text-small text-grey-600 mt-3">
        <span className="tag border-grey-600 mr-2 rounded-[10px] border border-dashed px-2 py-0.5">
          {testedLabel(pattern.tested)}
        </span>
        {pattern.worked && (
          <a href="#worked" className="text-blue-800 underline">
            Worked through in full below
          </a>
        )}
      </p>
    </li>
  );
}

const VIEWS = [
  ['patterns', 'All patterns'],
  ['blockers', 'The rules behind them'],
];

export default function BrowseAndBlockers() {
  const [view, setView] = useState('patterns');
  const [arch, setArch] = useState('all');
  const [element, setElement] = useState('all');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const patterns = useMemo(() => allPatterns(), []);
  const shown = patterns.filter(
    (pattern) =>
      (arch === 'all' || pattern.arch === arch) &&
      (element === 'all' || pattern.el === element),
  );
  const blockerKeys = Object.keys(BLOCKERS);

  return (
    <div>
      <ul className="mb-8 flex flex-wrap gap-2" aria-label="How to look">
        {VIEWS.map(([key, label]) => (
          <li key={key}>
            <Chip active={view === key} onClick={() => setView(key)}>
              {label}
            </Chip>
          </li>
        ))}
      </ul>

      {view === 'patterns' ? (
        <>
          {/* On a phone eleven chips filled the screen before a single
              pattern showed. Open on request there, always open from tablet up. */}
          <div className="mb-6">
            <button
              type="button"
              onClick={() => setFiltersOpen((open) => !open)}
              aria-expanded={filtersOpen}
              className="text-small mb-4 cursor-pointer text-blue-800 underline md:hidden"
            >
              {filtersOpen ? 'Hide filters' : 'Filter these patterns'}
            </button>
            <div
              className={
                (filtersOpen ? 'flex' : 'hidden') + ' flex-col gap-4 md:flex'
              }
            >
              <div>
                <p className="tag text-grey-600 mb-2 tracking-wide uppercase">
                  Archetype
                </p>
                <ul className="flex flex-wrap gap-2">
                  <li>
                    <Chip
                      active={arch === 'all'}
                      onClick={() => setArch('all')}
                    >
                      All
                    </Chip>
                  </li>
                  {Object.entries(ARCHETYPE_NAMES).map(([key, label]) => (
                    <li key={key}>
                      <Chip active={arch === key} onClick={() => setArch(key)}>
                        {label}
                      </Chip>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="tag text-grey-600 mb-2 tracking-wide uppercase">
                  Infrastructure element (Field Guide)
                </p>
                <ul className="flex flex-wrap gap-2">
                  <li>
                    <Chip
                      active={element === 'all'}
                      onClick={() => setElement('all')}
                    >
                      All
                    </Chip>
                  </li>
                  {INFRASTRUCTURE_ELEMENTS.map((name) => (
                    <li key={name}>
                      <Chip
                        active={element === name}
                        onClick={() => setElement(name)}
                      >
                        {name}
                      </Chip>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="text-small text-grey-600 mb-4" aria-live="polite">
            {shown.length} of {patterns.length} patterns.
          </p>
          {shown.length ? (
            <ul className="grid gap-4 md:grid-cols-2">
              {shown.map((pattern) => (
                <PatternCard
                  key={`${pattern.arch}-${pattern.stage}-${pattern.name}`}
                  pattern={pattern}
                />
              ))}
            </ul>
          ) : (
            <p className="text-regular text-grey-600">
              Nothing here yet for that combination. That is itself worth
              telling us about.
            </p>
          )}
        </>
      ) : (
        <>
          <p className="text-regular text-grey-600 mb-6 max-w-3xl">
            A pattern is what people run into. The rule or reading behind it is
            the deeper thing, and it usually sits behind several patterns at
            once. That is what makes it worth shifting together rather than
            working around alone. Where it says “our first guess”, it is ours,
            and a lawyer should check it.
          </p>
          <ul className="grid gap-4 md:grid-cols-2">
            {blockerKeys.map((key) => (
              <BlockerCard key={key} blockerKey={key} />
            ))}
          </ul>
          <div className="mt-10 max-w-2xl">
            <InquiryForm
              heading="I’d work on this with others"
              intro="Tell us which of these you would work on, and what you would bring. Nothing is published. We read it before anything goes further."
              kinds={['interest']}
              pointOptions={blockerKeys.map((key) => BLOCKERS[key].name)}
              contactRequired
            />
          </div>
        </>
      )}
    </div>
  );
}
