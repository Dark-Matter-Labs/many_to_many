import Link from 'next/link';
import styles from './ProblemCard.module.css';
export default function ProblemCard({ slug, title, description, type }) {
  return (
    <div className={`${styles.card}`}>
      <div className={styles.tags}>
        <span
          className={
            'tag border border-blue-800 bg-blue-400 text-blue-800 ' + styles.tag
          }
        >
          {type}
        </span>
      </div>
      <h3 className={'heading-lg text-blue-800 ' + styles.title}>{title}</h3>
      <p className={'text-small text-grey-600 ' + styles.description}>
        {description}
      </p>
      <div className={styles.cardFooter}>
        {/* <div className={styles.toolInfo}>
          {Array.from({ length: tools.length }).map((_, i) => (
            <span key={i} className={styles.toolDot}></span>
          ))}
        </div> */}
        <Link href={`/problems/${slug.current}`} className={styles.ctaButton}>
          Go through the story →
        </Link>
      </div>
    </div>
  );
}
