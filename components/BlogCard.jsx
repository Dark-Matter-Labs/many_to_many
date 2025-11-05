import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import styles from './ToolCard.module.css';

function BlogCard({ title, slug, image, isCaseStudy = false }) {
  return (
    <div className={styles.blogCard}>
      <div className={styles.cardIcon}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <h3 className="heading-lg pb-10 text-blue-800 lg:pb-20">{title}</h3>
      {isCaseStudy ? (
        <Link
          className={
            'text-regular text-warm-grey hover:bg-dark-blue bg-blue-800 ' +
            styles.cardButton
          }
          href={slug}
        >
          Explore case study →
        </Link>
      ) : (
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={slug}
          className={
            'text-regular text-warm-grey bg-blue-800 ' + styles.cardButton
          }
        >
          Read →
        </a>
      )}
    </div>
  );
}

export default memo(BlogCard);
