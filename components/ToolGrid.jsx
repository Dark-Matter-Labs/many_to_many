import Link from 'next/link';
import styles from './ToolGrid.module.css';

// Reusable Tool Card Component
const ToolCard = () => (
  <div className={styles.card}>
    <span className={'tag text-blue-800 ' + styles.cardTag}>
      Stewardship Approach
    </span>
    <div className={styles.cardIcon}></div>
    <h3 className="heading-lg text-blue-800">
      Spotting patterns in your context: Diagnostics
    </h3>
    <p className="text-small text-grey-600">
      A diagnostic tool to analyse patterns within your context and to suggest
      process considerations.
    </p>
    <div className={'tag text-blue-800 ' + styles.cardMeta}>
      <span>
        Readiness: <strong>LOW</strong>
      </span>
      <br />
      <span>
        Type: <strong>TOOL</strong>
      </span>
    </div>
    <Link
      href="/tools/the-contract"
      className={'text-regular text-warm-grey bg-blue-800 ' + styles.cardButton}
    >
      go to Insight →
    </Link>
  </div>
);

export default function ToolGrid({ title, description, cardCount = 4 }) {
  return (
    <div className={styles.gridContainer}>
      <h3 className={'heading-lg text-blue-800 ' + styles.gridTitle}>
        {title}
      </h3>
      <p className={'text-regular text-blue-800'}>{description}</p>
      <div className={styles.grid}>
        {Array.from({ length: cardCount }).map((_, i) => (
          <ToolCard key={i} />
        ))}
      </div>
    </div>
  );
}
