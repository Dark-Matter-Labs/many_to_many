import Link from 'next/link';
import Image from 'next/image';
import styles from './ToolGrid.module.css';

const ToolCard = ({ title, description, type, slug }) => (
  <div className={styles.card}>
    <span className={'tag w-22 text-center text-blue-800 ' + styles.cardTag}>
      {type.title}
    </span>
    <div className={styles.cardIcon}>
      <Image
        src={
          type?.title === 'Example'
            ? '/example.png'
            : type?.title === 'Case Study'
              ? '/case.png'
              : '/tool.png'
        }
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: 'contain' }}
      />
    </div>
    <h3 className="heading-lg text-blue-800">{title}</h3>
    <p className="text-small text-grey-600 pb-8">{description}</p>
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
    <div>
      <div
        className={'section-shadow-tb bg-white p-10 ' + styles.titleContainer}
      >
        <h4 className={'heading-md text-blue-800'}>Availability: {category}</h4>
        {category === 'Demand Led' && (
          <p id="demand" className="text-grey-600 scroll-top text-small">
            As part of this work, we have identified a number of potential
            instruments for implementation that may be useful. However, we’d
            prefer to only develop these if there is demand. Let us know if any
            of these seem interesting and we can{' '}
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
          <p id="soon" className="text-grey-600 scroll-top text-small">
            These tools are currently in development and will be available soon.
          </p>
        )}
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          {tools.map((tool) => (
            <ToolCard key={tool._id} {...tool} />
          ))}
        </div>
      </div>
    </div>
  );
}
