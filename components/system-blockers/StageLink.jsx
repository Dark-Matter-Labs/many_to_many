'use client';

import Link from 'next/link';

export const STAGE_EVENT = 'system-blockers:open-stage';
export const PAGE_PATH = '/challenges/system-blockers';

// Links to a stage on the journey map. On the System Blockers page it opens
// the stage in place; from anywhere else it navigates to the page with the
// stage pre-selected via the URL hash.
export default function StageLink({ stageId, onPage = false, className, children }) {
  if (!onPage) {
    return (
      <Link href={`${PAGE_PATH}#${stageId}`} className={className}>
        {children}
      </Link>
    );
  }

  const handleClick = (event) => {
    event.preventDefault();
    window.history.replaceState(null, '', `#${stageId}`);
    window.dispatchEvent(
      new CustomEvent(STAGE_EVENT, { detail: { stageId, scroll: true } }),
    );
  };

  return (
    <a href="#journey" onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
