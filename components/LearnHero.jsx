import styles from './LearnHero.module.css';

export default function LearnHero() {
  return (
    <section className={styles.hero}>
      <h1 className={'heading text-white ' + styles.title}>
        Learn by Yourself
      </h1>
      <div className={'text-regular ' + styles.buttonGroup}>
        <a href="#" className={`${styles.button} ${styles.active}`}>
          Practical Tools & Examples
        </a>
        <a href="#" className={styles.button}>
          Deep Codes
        </a>
      </div>
    </section>
  );
}
