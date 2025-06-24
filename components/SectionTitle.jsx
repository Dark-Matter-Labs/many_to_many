import { CurvedArrow } from "./CurvedArrow";

export const SectionTitle = ({ children, className = "" }) => (
  <div
    className={`flex flex-col items-center justify-center gap-2 ${className}`}
  >
    <CurvedArrow className="text-orange-500 transform rotate-180" />
    <h2 className="font-galosText text-2xl md:text-2xl text-blue-800 text-center">
      {children}
    </h2>
    <CurvedArrow className="text-orange-500" />
  </div>
);
