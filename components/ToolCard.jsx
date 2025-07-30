// ToolCard.jsx
import Link from 'next/link';
import styles from './ToolCard.module.css'; // You can reuse InsightCard.module.css and adjust
export default function ToolCard() {
  return (
    <div className={styles.card}>
      <span className={styles.tag}>Stewardship Approach</span>
      <div className={styles.icon}></div>
      <h3>Spotting patterns in your context: Diagnostics</h3>
      <p>
        A diagnostic tool to analyse patterns within your context and to suggest
        process considerations.
      </p>
      <div className={styles.meta}>
        <span>
          Readiness: <strong>LOW</strong>
        </span>
        <span>
          Type: <strong>TOOL</strong>
        </span>
      </div>
      <Link href="/tools/the-contract" className={styles.ctaButton}>
        go to Insight →
      </Link>
    </div>
  );
}
