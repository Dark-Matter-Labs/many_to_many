import Link from 'next/link';
import Image from 'next/image';
import { memo } from 'react';
import styles from './ToolCard.module.css';

function ToolCard({ title, type, description, slug, availability }) {
  const slugPath = typeof slug === 'string' ? slug : slug?.current;
  const isInactive = availability === 'now' ? false : true;
  const isTool =
    typeof type === 'string' ? type === 'tool' : type?.title === 'Tool';
  const isExample =
    typeof type === 'string' ? type === 'example' : type?.title === 'Example';

  return (
    <div
      className={
        isInactive ? styles.card + ' ' + styles.cardInactive : styles.card
      }
    >
      <span
        className={
          isInactive
            ? styles.cardTag + ' text-grey-50 bg-grey-600 tag w-22 text-center'
            : isTool
              ? styles.cardTag +
                ' tag w-22 bg-[#e6b7ff] text-center text-blue-800'
              : styles.cardTag + ' tag w-22 bg-[#992A70] text-center text-white'
        }
      >
        {typeof type === 'string' ? type : type?.title}
      </span>
      <div className={styles.cardIcon}>
        <Image
          src={
            !isInactive && isTool
              ? '/tool.png'
              : !isInactive && isExample
                ? '/example.png'
                : '/soon.png'
          }
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <h3
        className={
          isInactive ? 'heading-lg text-grey-600' : 'heading-lg text-blue-800'
        }
      >
        {title}
      </h3>
      <p className="text-small text-grey-600 pt-4 pb-8">{description}</p>
      {isInactive ? (
        <button
          type="button"
          className={
            styles.cardButton + ' bg-grey-600 text-grey-50 cursor-pointer'
          }
        >
          <a
            href={`mailto:beyondtherules@darkmatterlabs.org?subject=Tool interest: %20${title}`}
          >
            Express demand →
          </a>
        </button>
      ) : (
        <Link
          href={'/tools/' + slugPath}
          className={
            'text-regular text-warm-grey bg-blue-800 ' + styles.cardButton
          }
        >
          Open details →
        </Link>
      )}
    </div>
  );
}

export default memo(ToolCard);
