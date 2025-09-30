import Image from 'next/image';
import Link from 'next/link';
import styles from './InteractiveGuide.module.css';
import { urlForImage } from '@/sanity/lib/image';

export default function GuideOverview({
  data,
  onSelect,
  allLayers,
  activeIndex,
  onClose,
  onNavClick,
}) {
  return (
    <div className={'' + styles.overviewContainer}>
      <div className={'mb-4 flex flex-row items-center justify-between'}>
        <h1 className="heading-lg text-blue-800">Interactive Overview </h1>
        <nav className={styles.bottomNav}>
          {allLayers.map((navItem, index) => (
            <a
              key={navItem.title}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavClick(index);
              }}
              className={index === activeIndex ? styles.active : ''}
            >
              {navItem.title}
            </a>
          ))}
        </nav>
        {/* Back button */}
        <button
          className={
            'text-small rounded-full bg-blue-800 p-2 text-white ' +
            styles.backBtn
          }
          aria-label="Back to overview"
        >
          <Link href="/overview">← Exit</Link>
        </button>
      </div>
      <div className={'pb-20 ' + styles.overviewHeader}>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <h2 className="heading-md max-w-lg text-blue-800">
            Overview of the Many-to-Many System
          </h2>
          <p className="text-regular text-grey-600">
            <strong>Click</strong> to learn more about each layer of the
            Many-to-Many System and how it interacts with our key learnings,
            insights and alerts to watch out for.
          </p>
        </div>
      </div>

      <div className={styles.selectionBar}>
        {data.map((item, index) => (
          <button
            key={item._id}
            className={'opacity-80 ' + styles.selectionItem}
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
