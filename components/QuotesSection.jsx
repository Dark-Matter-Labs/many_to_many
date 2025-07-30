import styles from './QuotesSection.module.css';
export default function QuotesSection() {
  return (
    <section className={`${styles.container} grid-background`}>
      <div className={styles.quote}>
        “A quote by the Learning Network here one quote”
      </div>
      <div className={styles.quote}>
        “A quote by the Learning Network here one quote”
      </div>
      <div className={styles.quote}>
        “A quote by the Learning Network here one quote”
      </div>
    </section>
  );
}
