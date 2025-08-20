import Image from 'next/image';
import styles from './InteractiveGuide.module.css';
import { urlForImage } from '@/sanity/lib/image';

export default function GuideOverview({ data, onSelect }) {
  return (
    <div className={styles.overviewContainer}>
      <div className={styles.overviewHeader}>
        <div className={styles.overviewIntro}>
          <h2>Overview of the Many-to-Many System</h2>
          <p>
            Click to learn more about each layer of the Many-to-Many System and
            how it interacts with our key learnings, insights and alerts to
            watch out for.
          </p>
        </div>
      </div>

      <div className={styles.selectionBar}>
        {data.map((item, index) => (
          <button
            key={item._id}
            className={styles.selectionItem}
            onClick={() => onSelect(index)}
          >
            <Image
              src={urlForImage(item?.icon)}
              width={366}
              height={494}
              alt="layer icon"
            ></Image>
            <span className={styles.itemTitle}>{item.title}</span>
            <span className={styles.itemSubtitle}>{item.subtitle}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
