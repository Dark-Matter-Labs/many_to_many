import createImageUrlBuilder from '@sanity/image-url';

import { dataset, projectId } from '../env';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

export const urlForImage = (source, options = {}) => {
  if (!source) return null;
  
  const { width, height, quality = 85 } = options;
  let builder = imageBuilder?.image(source).auto('format').fit('max');
  
  if (width) builder = builder.width(width);
  if (height) builder = builder.height(height);
  if (quality) builder = builder.quality(quality);
  
  return builder.url();
};
