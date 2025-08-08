import Link from 'next/link';
import styles from './ToolGrid.module.css';

const ToolCard = ({
  title,
  description,
  readiness,
  type,
  test_status,
  slug,
}) => (
  <div className={styles.card}>
    <span className={'tag text-blue-800 ' + styles.cardTag}>{type.title}</span>
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
      href={'/tools/' + slug}
      className={'text-regular text-warm-grey bg-blue-800 ' + styles.cardButton}
    >
      Open details →
    </Link>
  </div>
);

export default function ToolGrid({ category, tools }) {
  return (
    <div className={styles.gridContainer}>
      <h4 className={'heading-md text-blue-800'}>Availability: {category}</h4>
      {category === 'Demand Led' && (
        <p id="demand" className="text-grey-600 scroll-top text-sm">
          As part of this work, we have identified a number of potential
          instruments for implementation that may be useful. However, we’d
          prefer to only develop these if there is demand. Let us know if any of
          these seem interesting and we can{' '}
          <a
            className="underline"
            href="mailto:beyondtherules@darkmatterlabs.org"
          >
            start conversation
          </a>{' '}
          about their development.
        </p>
      )}
      {category === 'Coming Soon' && (
        <p id="soon" className="text-grey-600 scroll-top text-sm">
          These tools are currently in development and will be available soon.
        </p>
      )}
      <div className={styles.grid}>
        {tools.map((tool) => (
          <ToolCard key={tool._id} {...tool} />
        ))}
      </div>
    </div>
  );
}
