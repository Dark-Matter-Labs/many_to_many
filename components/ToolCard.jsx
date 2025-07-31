// ToolCard.jsx
import Link from 'next/link';
import styles from './ToolCard.module.css'; // You can reuse InsightCard.module.css and adjust
export default function ToolCard() {
  return (
    <div className={styles.card}>
      <span className={'tag ' + styles.tag}>Stewardship Approach</span>
      <div className={styles.icon}></div>
      <h3 className="heading-md text-blue-800">
        Spotting patterns in your context: Diagnostics
      </h3>
      <p className="text-small text-grey-600">
        A diagnostic tool to analyse patterns within your context and to suggest
        process considerations.
      </p>
      <div className={'tag text-blue-800 ' + styles.meta}>
        <span>
          Readiness: <strong>LOW</strong>
        </span>
        <br />
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
