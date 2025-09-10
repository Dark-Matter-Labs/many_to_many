import styles from './LegalHero.module.css';
export default function LegalHero() {
  return (
    <section className={styles.hero}>
      <h1 className={'heading text-blue-800 ' + styles.title}>
        Legal Architecture
      </h1>
    </section>
  );
}
