import StageLink from './StageLink';
import { STAGES } from './content';

export default function StageChips({ onPage = false }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {STAGES.map((stage) => (
        <li key={stage.id}>
          <StageLink
            stageId={stage.id}
            onPage={onPage}
            className={
              'text-small inline-block rounded-full border bg-white px-4 py-2 text-blue-800 transition-colors hover:bg-blue-800 hover:text-white ' +
              (stage.proposed ? 'border-dashed border-grey-600' : 'border-blue-800')
            }
          >
            {stage.shortName || stage.name}
          </StageLink>
        </li>
      ))}
    </ul>
  );
}
