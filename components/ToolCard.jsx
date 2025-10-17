import Link from 'next/link';
import Image from 'next/image';
import styles from './ToolCard.module.css';
export default function ToolCard({ title, type, description, slug }) {
  const slugPath = typeof slug === 'string' ? slug : slug?.current;
  return (
    <div className={styles.card}>
      <span
        className={
          (type === 'tool'
            ? 'bg-[#e6b7ff] text-blue-800 '
            : 'bg-[#992A70] text-white ') +
          styles.cardTag +
          ' tag w-22 text-center'
        }
      >
        {type}
      </span>
      <div className={styles.cardIcon}>
        <Image
          src={
            type === 'tool'
              ? '/tool.png'
              : type === 'example'
                ? '/example.png'
                : '/tool.png'
          }
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <h3 className="heading-lg text-blue-800">{title}</h3>
      <p className="text-small text-grey-600 pt-4 pb-8">{description}</p>
      <Link
        href={'/tools/' + slugPath}
        className={
          'text-regular text-warm-grey bg-blue-800 ' + styles.cardButton
        }
      >
        Open details →
      </Link>
    </div>
  );
}
