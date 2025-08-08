import Link from 'next/link';
import styles from './ToolCard.module.css';
export default function ToolCard({
  title,
  type,
  description,
  readiness,
  test_status,
  slug,
}) {
  return (
    <div className={styles.card}>
      <span className={'tag text-blue-800 ' + styles.cardTag}>{type}</span>
      <div className={styles.cardIcon}></div>
      <h3 className="heading-lg text-blue-800">{title}</h3>
      <p className="text-small text-grey-600">{description}</p>
      <div className={'tag text-blue-800 ' + styles.cardMeta}>
        <span>
          Readiness: <strong>{readiness}</strong>
        </span>
        <br />
        <span>
          Test status: <strong>{test_status}</strong>
        </span>
      </div>
      <Link
        href={'/tools/' + slug.current}
        className={
          'text-regular text-warm-grey bg-blue-800 ' + styles.cardButton
        }
      >
        Go to tool →
      </Link>
    </div>
  );
}
