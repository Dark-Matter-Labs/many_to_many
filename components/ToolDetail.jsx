import Link from 'next/link';
import Accordion from './Accordion';
import styles from './ToolDetail.module.css';
export default function ToolDetail() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <h2>The Contract</h2>
        <span className={styles.tag}>System Blockers</span>
        <p className={styles.description}>
          A diagnostic tool to analyse patterns within your context and to
          suggest process considerations.
        </p>
        <p>
          Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
        <Link href="#" className={styles.ctaButton}>
          Link to the miro board →
        </Link>
      </div>
      <div className={styles.sideContent}>
        <ul className={styles.metaList}>
          <li>
            <strong>Format:</strong> Digital Tool
          </li>
          <li>
            <strong>Readiness:</strong> Low
          </li>
          <li>
            <strong>Test Status:</strong> Yes, once
          </li>
          <li>
            <strong>Who is it for:</strong> Complex collaboration, Governance
            Stewardship
          </li>
          <li>
            <strong>Is it possible to use?</strong>
          </li>
        </ul>
        <Accordion title="Alert 1" />
      </div>
    </div>
  );
}
