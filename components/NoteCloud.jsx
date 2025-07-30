import styles from './NoteCloud.module.css';
export default function NoteCloud() {
  return (
    <section className={`${styles.container} grid-background`}>
      <div className={styles.cloudWrapper}>
        <svg
          className={styles.cloudSvg}
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
        >
          <path
            d="M0 150 C50 50, 150 50, 200 150 C250 250, 350 250, 400 150 C450 50, 550 50, 600 150 C650 250, 750 250, 800 150 C850 50, 950 50, 1000 150 C1050 250, 1150 250, 1200 150 L1200 300 L0 300 Z"
            fill="#fff"
          />
          <path
            d="M0 150 C50 50, 150 50, 200 150 C250 250, 350 250, 400 150 C450 50, 550 50, 600 150 C650 250, 750 250, 800 150 C850 50, 950 50, 1000 150 C1050 250, 1150 250, 1200 150"
            fill="none"
            stroke="#fd8c4c"
            strokeWidth="5"
          />
        </svg>
        <div className={styles.cloudContent}>
          <div className={styles.noteBox}>
            NOTE: those are in progress learnings...
          </div>
          <p className={styles.mainText}>
            Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent.
          </p>
          <div className={styles.learningBox}>
            Learning by the Learning Network
          </div>
        </div>
      </div>
    </section>
  );
}
