'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './TopicAccordion.module.css';

// Copied from problems page for reusability
const InsightCard = () => (
  <div className={styles.insightCard}>
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

// Copied from problems page for reusability
const ToolCard = () => (
  <div className={styles.toolCard}>
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

export default function TopicAccordion({
  title,
  tag,
  status,
  isDefaultOpen = false,
}) {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);

  const getStatusClass = () => {
    if (status === 'open') return styles.open;
    if (status === 'active') return styles.active;
    if (status === 'coming-soon') return styles.comingSoon;
    return '';
  };

  return (
    <div className={`${styles.accordion} ${getStatusClass()}`}>
      <button className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.headerLeft}>
          <span className={styles.tag}>{tag}</span>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div className={styles.toggleButton}>{isOpen ? '—' : '+'}</div>
      </button>
      {isOpen && (
        <div className={styles.content}>
          <p>
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos.
          </p>

          <div className={styles.section}>
            <h3>Insights</h3>
            <p>
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, p
            </p>
            <div className={styles.cardGrid}>
              <InsightCard />
              <InsightCard />
            </div>
          </div>

          <div className={styles.section}>
            <h3>Tools</h3>
            <p>
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, p
            </p>
            <div className={styles.cardGrid}>
              <ToolCard />
              <ToolCard />
            </div>
          </div>

          <div className={styles.alertSection}>
            <h3>! Alert!</h3>
            <p>
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, p
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
