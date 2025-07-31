import Link from 'next/link';
import styles from './ProblemCard.module.css';
export default function ProblemCard({
  id,
  title,
  description,
  tags,
  toolCount,
  isHighlighted = false,
}) {
  return (
    <div
      className={`${styles.card} ${isHighlighted ? styles.highlighted : ''}`}
    >
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span
            key={tag}
            className={
              'tag border border-blue-800 bg-blue-400 text-blue-800 ' +
              styles.tag
            }
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className={'heading-lg text-blue-800 ' + styles.title}>{title}</h3>
      <p className={'text-small text-grey-600 ' + styles.description}>
        {description}
      </p>
      <div className={styles.cardFooter}>
        <div className={styles.toolInfo}>
          {Array.from({ length: toolCount }).map((_, i) => (
            <span key={i} className={styles.toolDot}></span>
          ))}
        </div>
        <Link href={`/problems/${id}`} className={styles.ctaButton}>
          Go through the stories →
        </Link>
      </div>
    </div>
  );
}
