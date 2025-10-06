import styles from './LearnHero.module.css';

export default function LearnHero() {
  return (
    <section className={styles.hero}>
      <h1 className={'heading ml-8 text-blue-800 sm:ml-40'}>
        Tools and Examples
      </h1>
    </section>
  );
}
