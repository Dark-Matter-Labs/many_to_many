import EvidenceTag from './EvidenceTag';
import { TESTED_LABELS } from './content';

function Field({ label, children }) {
  return (
    <div>
      <p className="tag mb-1 tracking-wide text-grey-600 uppercase">{label}</p>
      <p className="text-small text-grey-600">{children}</p>
    </div>
  );
}

function FeltAs({ variant, who, how }) {
  const isBlocker = variant === 'blocks';
  return (
    <div
      className={
        'rounded-2xl border p-4 ' +
        (isBlocker
          ? 'border-grey-600 bg-grey-100'
          : 'border-blue-400 bg-white')
      }
    >
      <p className="tag mb-2 flex items-center gap-2 tracking-wide text-grey-600 uppercase">
        <span
          aria-hidden="true"
          className={
            'inline-block h-3 w-3 rounded-full border border-black ' +
            (isBlocker ? 'bg-black' : 'bg-white')
          }
        />
        {isBlocker ? 'Felt as a blocker by' : 'Felt as an enabler by'}
      </p>
      <p className="text-small text-grey-600">
        <strong className="text-blue-800">{who}.</strong> {how}
      </p>
    </div>
  );
}

export default function ConditionCard({ condition, colour }) {
  return (
    <article
      className="mb-6 rounded-[20px] bg-white p-6 shadow-[0_4px_8px_0_#b7b7b7]"
      style={{ borderTop: `6px solid ${colour}` }}
    >
      <div className="mb-2 flex flex-wrap items-center gap-3">
        <h4 className="heading-md text-blue-800">{condition.name}</h4>
        <EvidenceTag kind="hyp" />
      </div>
      <p className="tag mb-4 text-grey-600">
        {TESTED_LABELS[condition.tested] ?? TESTED_LABELS['']}
        {condition.workshop && ' · Sheffield workshop card'}
      </p>
      <div className="flex flex-col gap-4">
        <Field label="The moment">{condition.moment}</Field>
        <Field label="The pattern">{condition.pattern}</Field>
        <div className="grid grid-cols-1 gap-3">
          <FeltAs variant="blocks" {...condition.blocks} />
          <FeltAs variant="enables" {...condition.enables} />
        </div>
      </div>
    </article>
  );
}
