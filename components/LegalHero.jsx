import styles from './LegalHero.module.css';
export default function LegalHero() {
  return (
    <section className={styles.hero}>
      <h1 className={'heading ml-8 text-blue-800 sm:ml-40 ' + styles.title}>
        Legal Architecture
      </h1>
    </section>
  );
}
