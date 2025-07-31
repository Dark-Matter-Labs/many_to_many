import styles from './LegalHero.module.css';
export default function LegalHero() {
  return (
    <section className={styles.hero}>
      <h1 className={'heading text-white ' + styles.title}>
        Legal tools by topic
      </h1>
    </section>
  );
}
