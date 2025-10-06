import styles from './ProblemsHero.module.css';
export default function ProblemsHero() {
  return (
    <section className={styles.hero}>
      <h1 className={'heading ml-8 max-w-xl text-blue-800 sm:ml-40'}>
        Challenges that Many-to-Many Aims To Address
      </h1>
    </section>
  );
}
