import Link from 'next/link';
import styles from './ToolGrid.module.css';

const ToolCard = ({ title, description, readiness, type, test_status }) => (
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
      href="/tools/the-contract"
      className={'text-regular text-warm-grey bg-blue-800 ' + styles.cardButton}
    >
      Open →
    </Link>
  </div>
);

export default function ToolGrid({ title, description, tools }) {
  return (
    <div className={styles.gridContainer}>
      <h3 className={'heading-lg text-blue-800 ' + styles.gridTitle}>
        {title}
      </h3>
      <p className={'text-regular text-blue-800'}>{description}</p>
      <div className={styles.grid}>
        {tools.map((tool) => (
          <ToolCard key={tool._id} {...tool} />
        ))}
      </div>
    </div>
  );
}
