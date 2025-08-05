import Link from 'next/link';
import Accordion from './Accordion';
import styles from './ToolDetail.module.css';
export default function ToolDetail({
  title,
  description,
  type,
  format,
  readiness,
  test_status,
  audience,
  availability,
}) {
  return (
    <div className={'font-galosText ' + styles.container}>
      <div className={styles.mainContent}>
        <h2 className="heading-lg text-blue-800">{title}</h2>
        <span className={styles.tag}>{type}</span>
        <p className={'text-regular ' + styles.description}>{description}</p>
        <Link href="#" className={styles.ctaButton}>
          Link →
        </Link>
      </div>
      <div className={styles.sideContent}>
        <ul className={styles.metaList}>
          <li>
            <strong>Format:</strong> {format}
          </li>
          <li>
            <strong>Readiness:</strong> {readiness}
          </li>
          <li>
            <strong>Test Status:</strong> {test_status}
          </li>
          <li>
            <strong>Who is it for:</strong>{' '}
            {audience.map((item, index) => (
              <span key={index} className={styles.audienceTag}>
                {item + (index < audience.length - 1 ? ', ' : '')}
              </span>
            ))}
          </li>
          <li>
            <strong>Availability:</strong> {availability}
          </li>
        </ul>
        {/* <Accordion title="Alert 1" /> */}
      </div>
    </div>
  );
}
