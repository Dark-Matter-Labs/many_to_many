import Link from 'next/link';
import styles from './ToolGrid.module.css';

// Reusable Tool Card Component
const ToolCard = () => (
  <div className={styles.card}>
    <span className={styles.cardTag}>Stewardship Approach</span>
    <div className={styles.cardIcon}></div>
    <h3>Spotting patterns in your context: Diagnostics</h3>
    <p>
      A diagnostic tool to analyse patterns within your context and to suggest
      process considerations.
    </p>
    <div className={styles.cardMeta}>
      <span>
        Readiness: <strong>LOW</strong>
      </span>
      <span>
        Type: <strong>TOOL</strong>
      </span>
    </div>
    <Link href="/tools/the-contract" className={styles.cardButton}>
      go to Insight →
    </Link>
  </div>
);

export default function ToolGrid({ title, description, cardCount = 4 }) {
  return (
    <div className={styles.gridContainer}>
      <h3 className={styles.gridTitle}>{title}</h3>
      <p className={styles.gridDescription}>{description}</p>
      <div className={styles.grid}>
        {Array.from({ length: cardCount }).map((_, i) => (
          <ToolCard key={i} />
        ))}
      </div>
    </div>
  );
}
