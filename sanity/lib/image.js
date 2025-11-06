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

  const url = builder.url();
  // In development, append a cache-busting param so CDN/browser don’t serve stale images
  if (process.env.NODE_ENV === 'development') {
    const sep = url.includes('?') ? '&' : '?';
    return `${url}${sep}cb=${Date.now()}`;
  }
  return url;
};
