import {
  normalTextComponent,
  bulletList,
  numberList,
  bulletListItem,
  numberListItem,
} from '../portable-text/portable-text-blocks';
import { bold, blue } from '../portable-text/portable-text-marks';

export const portableTextComponents = {
  block: {
    normal: normalTextComponent,
    description: ({ children }) => (
      <p className="p-xl-regular pb-4 text-[#EBEBEB]">{children}</p>
    ),
  },
  list: {
    bullet: bulletList,
    number: numberList,
  },
  listItem: {
    bullet: bulletListItem,
    number: numberListItem,
  },
  marks: {
    strong: bold,
    blue: blue,
  },
};
