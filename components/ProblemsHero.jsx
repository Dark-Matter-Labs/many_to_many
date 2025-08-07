import styles from './ProblemsHero.module.css';
export default function ProblemsHero() {
  return (
    <section className={styles.hero}>
      <h1 className={'heading mt-20 ' + styles.title}>
        Challenges that Many-to-Many Aims To Address
      </h1>
    </section>
  );
}
