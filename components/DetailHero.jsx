import Link from 'next/link';
import styles from './DetailHero.module.css';
export default function DetailHero({ title, subtitle, tag }) {
  return (
    <section className={'mt-10 bg-[#FFA1EF] ' + styles.hero}>
      <div className={styles.navButtons}>
        <Link
          href="#"
          className={'text-grey-600 text-small bg-white ' + styles.navButton}
        >
          ← previous
        </Link>
        <Link
          href="#"
          className={'text-grey-600 text-small bg-white ' + styles.navButton}
        >
          next →
        </Link>
      </div>
      <h1 className={'heading text-blue-800 ' + styles.title}>{title}</h1>
    </section>
  );
}
