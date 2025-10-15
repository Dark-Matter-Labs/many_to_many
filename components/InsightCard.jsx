import Image from 'next/image';
import Link from 'next/link';
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

export default function InsightCard({ title, icon }) {
  return (
    <div className={styles.card}>
      <Link href={'/discover-the-system/interactive-overview?layer=' + slugify(title)}>
        <div className="flex items-center justify-center gap-2">
          <Image
            src={urlForImage(icon)}
            width={80}
            height={77}
            className={styles.mainIcon}
            alt="layer icon"
          ></Image>
          <h3 className="text-small font-semibold text-blue-800">{title}</h3>
        </div>
      </Link>
    </div>
  );
}
