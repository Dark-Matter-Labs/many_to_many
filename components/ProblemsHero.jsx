import styles from './ProblemsHero.module.css';
export default function ProblemsHero() {
  return (
    <section className={styles.hero}>
      <h1 className={'heading mt-20 ' + styles.title}>
        Problems that M2M can solve
      </h1>
    </section>
  );
}
