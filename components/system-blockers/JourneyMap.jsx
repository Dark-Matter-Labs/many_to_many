'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import StagePanel from './StagePanel';
import { STAGE_EVENT } from './StageLink';
import { STAGES, findStage, stageLabel, stagePoints } from './content';

const DEFAULT_STAGE = 'stage-1';
const PANEL_ID = 'journey-stage-panel';

const pointCount = (stage) => {
  const n = stagePoints(stage).length;
  return n === 1 ? '1 possible point' : `${n} possible points`;
};

function StageButton({ stage, active, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(stage.id)}
      aria-pressed={active}
      aria-controls={PANEL_ID}
      className={
        'flex h-full cursor-pointer flex-col items-start gap-1 rounded-2xl border-2 bg-white p-4 text-left transition-all ' +
        (stage.proposed ? 'border-dashed ' : '') +
        (active ? 'shadow-[0_4px_12px_rgba(0,95,255,0.3)]' : 'opacity-80 hover:opacity-100')
      }
      style={{
        borderColor: active ? '#005fff' : stage.colour,
        backgroundColor: active ? stage.colour : '#ffffff',
      }}
    >
      <span className="tag tracking-wide text-grey-600 uppercase">
        {stageLabel(stage)}
      </span>
      <span className="text-small font-medium text-blue-800">{stage.name}</span>
      <span className="tag mt-auto text-grey-600">{pointCount(stage)}</span>
    </button>
  );
}

export default function JourneyMap() {
  const [currentId, setCurrentId] = useState(DEFAULT_STAGE);
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const openStage = useCallback(
    (stageId, scroll) => {
      if (!findStage(stageId)) return;
      setCurrentId(stageId);
      if (scroll && sectionRef.current) {
        sectionRef.current.scrollIntoView({
          behavior: reduceMotion ? 'auto' : 'smooth',
          block: 'start',
        });
      }
    },
    [reduceMotion],
  );

  useEffect(() => {
    const fromHash = () => openStage(window.location.hash.slice(1), true);
    const fromEvent = (event) => openStage(event.detail.stageId, event.detail.scroll);
    // Defer the initial scroll until after Next.js restores scroll position.
    const initial = findStage(window.location.hash.slice(1))
      ? window.setTimeout(fromHash, 150)
      : null;
    window.addEventListener('hashchange', fromHash);
    window.addEventListener(STAGE_EVENT, fromEvent);
    return () => {
      if (initial) window.clearTimeout(initial);
      window.removeEventListener('hashchange', fromHash);
      window.removeEventListener(STAGE_EVENT, fromEvent);
    };
  }, [openStage]);

  const selectStage = (stageId) => {
    window.history.replaceState(null, '', `#${stageId}`);
    openStage(stageId, false);
  };

  const current = findStage(currentId);

  return (
    <div ref={sectionRef} className="scroll-mt-32">
      <ol className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {STAGES.map((stage) => (
          <li key={stage.id}>
            <StageButton
              stage={stage}
              active={stage.id === currentId}
              onSelect={selectStage}
            />
          </li>
        ))}
      </ol>
      <p className="sr-only" aria-live="polite">
        {`Showing ${stageLabel(current)}: ${current.name}`}
      </p>
      <div id={PANEL_ID} role="region" aria-label={`${stageLabel(current)}: ${current.name}`}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.id}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -4 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <StagePanel stage={current} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
