import Image from 'next/image';
import Link from 'next/link';
import { memo, useMemo } from 'react';
import { urlForImage } from '@/sanity/lib/image';
import styles from './InsightCard.module.css';

const slugify = (text) => {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars except hyphen
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .trim();
};

function InsightCard({ title, icon }) {
  const slugifiedTitle = useMemo(() => slugify(title), [title]);
  const imageUrl = useMemo(() => {
    if (!icon) return null;
    return urlForImage(icon, { width: 80, height: 77, quality: 85 });
  }, [icon]);
  
  return (
    <div className={styles.card}>
      <Link
        href={
          '/discover-the-system/interactive-overview?layer=' + slugifiedTitle
        }
      >
        <div className="flex items-center justify-center gap-2">
          {imageUrl && (
            <Image
              src={imageUrl}
              width={80}
              height={77}
              className={styles.mainIcon}
              alt="layer icon"
              loading="lazy"
            />
          )}
          <h3 className="text-small font-semibold text-blue-800">{title}</h3>
        </div>
      </Link>
    </div>
  );
}

export default memo(InsightCard);
