import Image from 'next/image';

// The System Blockers layer icon from the Interactive Overview:
// the hollow and filled bursts read as the same condition blocking one
// partner and enabling another.
export default function SystemBlockerIcon({ size = 120, className = '' }) {
  return (
    <span
      className={
        'inline-flex shrink-0 items-center justify-center rounded-full border border-blue-400 bg-[#ffdcc8] shadow-[0_0_12px_rgba(0,95,255,0.25)] ' +
        className
      }
      style={{ width: size, height: size }}
    >
      <Image
        src="/system-blocker.svg"
        width={Math.round(size * 0.62)}
        height={Math.round(size * 0.52)}
        alt=""
        aria-hidden="true"
      />
    </span>
  );
}
