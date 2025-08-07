import { normalTextComponent } from '../portable-text/portable-text-blocks';
import { bold } from '../portable-text/portable-text-marks';

export const portableTextComponents = {
  block: {
    normal: normalTextComponent,
    description: ({ children }) => (
      <p className="p-xl-regular pb-4 text-[#EBEBEB]">{children}</p>
    ),
  },
  marks: {
    strong: bold,
  },
};
