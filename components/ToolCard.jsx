import Link from 'next/link';
import Image from 'next/image';
import styles from './ToolCard.module.css';
export default function ToolCard({ title, type, description, slug }) {
  return (
    <div className={styles.card}>
      <span className={'tag w-30 text-center text-blue-800 ' + styles.cardTag}>
        {type}
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
        href={'/tools/' + slug?.current}
        className={
          'text-regular text-warm-grey bg-blue-800 ' + styles.cardButton
        }
      >
        Go to tool →
      </Link>
    </div>
  );
}
