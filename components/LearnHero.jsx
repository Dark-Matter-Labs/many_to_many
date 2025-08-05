import styles from './LearnHero.module.css';

export default function LearnHero() {
  return (
    <section className={styles.hero}>
      <h1 className={'heading text-white ' + styles.title}>Instruments for Implementation</h1>
    </section>
  );
}
