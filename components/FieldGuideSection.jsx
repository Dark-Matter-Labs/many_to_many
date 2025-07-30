import styles from './FieldGuideSection.module.css';
export default function FieldGuideSection() {
  return (
    <section className={styles.container}>
      <div className={styles.titleSection}>
        <div className={styles.icon}></div>
        <h2>Let yourself guide by our Field Guide</h2>
        <p>an interactive or downlaodable linear filed guide.</p>
      </div>
      <div className={styles.guideContainer}>
        {/* Placeholders for the guide pages */}
        <div className={`${styles.guidePage} ${styles.page3}`}>
          Placeholder 3
        </div>
        <div className={`${styles.guidePage} ${styles.page2}`}>
          Placeholder 2
        </div>
        <div className={`${styles.guidePage} ${styles.page1}`}>
          Placeholder 1
        </div>
      </div>
      <div className={`${styles.bottomPage} grid-background`}>
        Bottom Page Placeholder
      </div>
    </section>
  );
}
