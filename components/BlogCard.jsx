import Image from 'next/image';
import styles from './ToolCard.module.css';
export default function BlogCard({ title, slug, image }) {
  return (
    <div className={styles.card}>
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
    </div>
  );
}
