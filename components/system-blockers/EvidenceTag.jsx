import { EVIDENCE_LABELS } from './content';

const TAG_STYLES = {
  hyp: 'border-blue-800 bg-blue-400 text-blue-800',
  int: 'border-[#1f8a3a] bg-[#d3ffd8] text-[#14612a]',
  gap: 'border-dashed border-grey-600 bg-white text-grey-600',
};

export default function EvidenceTag({ kind }) {
  const meta = EVIDENCE_LABELS[kind];
  if (!meta) return null;
  return (
    <span
      title={meta.description}
      className={
        'tag inline-block rounded-[10px] border px-2 py-0.5 whitespace-nowrap ' +
        TAG_STYLES[kind]
      }
    >
      {meta.label}
    </span>
  );
}
