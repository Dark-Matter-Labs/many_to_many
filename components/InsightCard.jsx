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

export default function InsightCard({ title, description, icon }) {
  return (
    <div className={styles.card}>
      <Link href={'/overview/system-guide?layer=' + slugify(title)}>
        <Image
          src={urlForImage(icon)}
          width={366}
          height={494}
          className={styles.mainIcon}
          alt="layer icon"
        ></Image>
        <h3 className="heading-md text-blue-800">{title}</h3>
        <p className="text-small text-grey-600">{description}</p>
      </Link>
    </div>
  );
}
