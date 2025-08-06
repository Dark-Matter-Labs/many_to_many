import { CurvedArrow } from './CurvedArrow';

export const SectionTitle = ({ children, className = '' }) => (
  <div
    className={`flex flex-col items-center justify-center gap-2 ${className}`}
  >
    <CurvedArrow className="rotate-180 transform text-orange-500" />
    <h2 className="font-galosText text-center text-2xl text-blue-800 md:text-2xl">
      {children}
    </h2>
    <CurvedArrow className="text-orange-500" flip />
  </div>
);
