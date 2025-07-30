import Link from 'next/link';
import styles from './DetailHero.module.css';
export default function DetailHero({ title, subtitle, tag }) {
  return (
    <section className={styles.hero}>
      <div className={styles.navButtons}>
        <Link href="#" className={styles.navButton}>
          ← previous
        </Link>
        <Link href="#" className={styles.navButton}>
          next →
        </Link>
      </div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.subtitleWrapper}>
        {tag && <span className={styles.tag}>{tag}</span>}
        <p>{subtitle}</p>
      </div>
    </section>
  );
}
