'use client';

import { useState } from 'react';
import ConditionCard from './ConditionCard';
import { TESTED_SHORT, stagePoints } from './content';

const W = 440;
const H = 130;
const X_START = 34;
const X_END = W - 26;

// A deliberately wandering line: collaborations don't move predictably.
const yAt = (x, k) =>
  66 + 22 * Math.sin(x / 42 + k * 1.3) + 9 * Math.sin(x / 15 + k * 2.1);

const linePath = (k) => {
  const steps = [];
  for (let x = 14; x <= W - 10; x += 5) {
    steps.push(`${steps.length ? 'L' : 'M'}${x},${yAt(x, k).toFixed(1)}`);
  }
  return steps.join(' ');
};

const pointXs = (n) =>
  Array.from({ length: n }, (_, i) =>
    n === 1 ? (X_START + X_END) / 2 : X_START + ((X_END - X_START) * i) / (n - 1),
  );

function StageLine({ stage, points, selected, onSelect }) {
  const k = Number(stage.num);
  const xs = pointXs(points.length);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" aria-hidden="true">
      <path
        d={linePath(k)}
        fill="none"
        stroke={stage.colour}
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={stage.proposed ? '8 8' : undefined}
      />
      {points.map((point, i) => {
        const active = i === selected;
        const r = active ? 10 : point.workshop ? 8 : 5.5;
        return (
          <circle
            key={point.id}
            cx={xs[i].toFixed(1)}
            cy={yAt(xs[i], k).toFixed(1)}
            r={r}
            fill={active ? '#005fff' : '#ffffff'}
            stroke="#005fff"
            strokeWidth={point.workshop || active ? 3 : 2}
            className="cursor-pointer"
            onClick={() => onSelect(i)}
          >
            <title>{point.name}</title>
          </circle>
        );
      })}
    </svg>
  );
}

export default function PointExplorer({ stage }) {
  const points = stagePoints(stage);
  const [selected, setSelected] = useState(0);
  const current = points[selected];

  return (
    <div>
      <p className="tag mb-1 tracking-wide text-grey-600 uppercase">
        Possible points of crystallisation, blockers and enablers
      </p>
      <p className="text-small mb-4 text-grey-600">
        Pick a point to read its card. Larger dots are the cards from the
        Sheffield workshop; the rest are draft cards from desk research.
      </p>
      <div className="mb-4 rounded-2xl bg-white px-2 py-1">
        <StageLine
          stage={stage}
          points={points}
          selected={selected}
          onSelect={setSelected}
        />
      </div>
      <ul className="mb-6 flex flex-wrap gap-2" aria-label="Points at this stage">
        {points.map((point, i) => (
          <li key={point.id}>
            <button
              type="button"
              onClick={() => setSelected(i)}
              aria-pressed={i === selected}
              className={
                'flex cursor-pointer flex-col items-start rounded-2xl border px-3 py-2 text-left transition-colors ' +
                (i === selected
                  ? 'border-blue-800 bg-blue-800 text-white'
                  : 'border-blue-400 bg-white text-blue-800 hover:border-blue-800')
              }
            >
              <span className="text-small">{point.name}</span>
              <span className={'tag ' + (i === selected ? 'opacity-80' : 'text-grey-600')}>
                {point.workshop ? 'Sheffield card · ' : ''}
                {TESTED_SHORT[point.tested] ?? TESTED_SHORT['']}
              </span>
            </button>
          </li>
        ))}
      </ul>
      {current && <ConditionCard condition={current} colour={stage.colour} />}
    </div>
  );
}
