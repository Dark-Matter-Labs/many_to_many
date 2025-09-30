export const normalTextComponent = ({ children }) => (
  <p className="font-galosText pb-2 text-sm text-[#5a5a5a]">{children}</p>
);

export const bulletList = ({ children }) => (
  <ul className="font-galosText list-disc space-y-1 pl-6 text-[#5a5a5a]">
    {children}
  </ul>
);

export const numberList = ({ children }) => (
  <ol className="font-galosText list-decimal space-y-1 pl-6 text-[#5a5a5a]">
    {children}
  </ol>
);

export const bulletListItem = ({ children }) => <li>{children}</li>;

export const numberListItem = ({ children }) => <li>{children}</li>;
