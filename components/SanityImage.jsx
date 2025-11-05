import Image from 'next/image';
import { useMemo } from 'react';
import { urlForImage } from '@/sanity/lib/image';

/**
 * SanityImage wraps next/image and adds automatic LQIP blur when available.
 * Props:
 * - image: Sanity image object (preferred). If provided, tries image.asset.metadata.lqip
 * - src: fallback string URL if you already built one (no blur unless blurDataURL provided)
 * - alt, width, height, fill, sizes, className, style, priority, loading, quality
 * - blurDataURL: override to supply custom blur (optional)
 */
function SanityImage({
  image,
  src,
  alt = '',
  width,
  height,
  fill,
  sizes,
  className,
  style,
  priority,
  loading,
  quality = 85,
  blurDataURL,
}) {
  const builtSrc = useMemo(() => {
    if (src) return src;
    if (!image) return undefined;
    const buildOptions = {};
    if (typeof width === 'number') buildOptions.width = width;
    if (typeof height === 'number') buildOptions.height = height;
    buildOptions.quality = quality;
    return urlForImage(image, buildOptions);
  }, [src, image, width, height, quality]);

  const lqip = useMemo(() => {
    if (blurDataURL) return blurDataURL;
    // Try to read LQIP from common shapes: image.asset.metadata.lqip or image.metadata.lqip
    return image?.asset?.metadata?.lqip || image?.metadata?.lqip || undefined;
  }, [image, blurDataURL]);

  const placeholder = lqip ? 'blur' : 'empty';

  return (
    <Image
      src={builtSrc}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      sizes={sizes}
      className={className}
      style={style}
      priority={priority}
      loading={loading}
      quality={quality}
      placeholder={placeholder}
      blurDataURL={lqip}
    />
  );
}

export default SanityImage;
