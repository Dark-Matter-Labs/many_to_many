import Link from 'next/link';
import styles from './DetailHero.module.css';
export default function DetailHero({ title, nextLink, prevLink }) {
  return (
    <section className={'mt-10 bg-[#D8FFD5] ' + styles.hero}>
      <div className={styles.navButtons}>
        {prevLink && (
          <Link
            href={prevLink ? `/tools/${prevLink.slug}` : '#'}
            className={'text-grey-600 text-small bg-white ' + styles.navButton}
          >
            ← previous
          </Link>
        )}
        {nextLink && (
          <Link
            href={nextLink ? `/tools/${nextLink.slug}` : '#'}
            className={'text-grey-600 text-small bg-white ' + styles.navButton}
          >
            next →
          </Link>
        )}
      </div>
      <h1 className={'heading text-blue-800 ' + styles.title}>{title}</h1>
    </section>
  );
}
