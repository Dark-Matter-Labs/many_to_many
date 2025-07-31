// InsightCard.jsx
import Link from 'next/link';
import styles from './InsightCard.module.css';
export default function InsightCard() {
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
    </div>
  );
}
