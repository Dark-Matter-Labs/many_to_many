export const SectionTitle = ({ children, className = '' }) => (
  <div className={` ${className}`}>
    <h2 className="heading pb-8 text-blue-800">{children}</h2>
  </div>
);
