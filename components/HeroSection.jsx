import styles from './HeroSection.module.css';

export default function HeroSection({ title }) {
  return (
    <section className={'heading ' + styles.hero}>
      <h1 className={styles.title}>{title}</h1>
    </section>
  );
}
