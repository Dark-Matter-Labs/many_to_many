import styles from './LegalHero.module.css';
export default function LegalHero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Legal tools by topic</h1>
      <div className={styles.introTextWrapper}>
        <p>
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
      </div>
    </section>
  );
}
