import Link from 'next/link';
import SystemBlockerIcon from '@/components/system-blockers/SystemBlockerIcon';
import StageChips from '@/components/system-blockers/StageChips';
import { REFLECTION_PROMPT } from '@/components/system-blockers/content';

export default function SystemBlockersTeaser() {
  return (
    <section
      id="system-blockers"
      aria-labelledby="system-blockers-title"
      className="section-shadow-tb mb-2 bg-gradient-to-b from-[#ffdcc8] to-white py-20"
    >
      <div className="container-main grid grid-cols-1 items-start gap-10 lg:grid-cols-[auto_1fr]">
        <SystemBlockerIcon size={140} />
        <div className="max-w-3xl">
          <p className="tag mb-3 tracking-wide text-grey-600 uppercase">
            Around the work
          </p>
          <h2 id="system-blockers-title" className="heading mb-4 text-blue-800">
            System blockers and enablers
          </h2>
          <p className="text-regular mb-8 text-grey-600">
            {REFLECTION_PROMPT} Grant terms, legal duties and board processes
            often decide what’s possible before a collaboration starts. The same
            condition that blocks one partner often protects another.
          </p>
          <h3 className="heading-md mb-4 text-blue-800">Where did you feel it?</h3>
          <div className="mb-8">
            <StageChips />
          </div>
          <Link
            href="/challenges/system-blockers"
            className="text-regular inline-block rounded-full bg-blue-800 px-6 py-3 text-white transition-colors hover:bg-dark-blue"
          >
            See the full journey map →
          </Link>
        </div>
      </div>
    </section>
  );
}
