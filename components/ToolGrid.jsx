import Link from 'next/link';
import Image from 'next/image';
import SanityImage from './SanityImage';
import { memo } from 'react';
import styles from './ToolGrid.module.css';

const ToolCard = memo(
  ({ title, description, type, slug, category, coverImage }) => {
    const isInactive = category !== 'Now';
    return (
      <div
        className={
          isInactive ? styles.card + ' ' + styles.cardInactive : styles.card
        }
      >
        <span
          className={
            isInactive
              ? styles.cardTag +
                ' text-grey-50 bg-grey-600' +
                ' tag w-22 text-center'
              : type?.title === 'Tool'
                ? styles.cardTag +
                  ' bg-[#e6b7ff] text-blue-800' +
                  ' tag w-22 text-center'
                : styles.cardTag +
                  ' bg-[#992A70] text-white' +
                  ' tag w-22 text-center'
          }
        >
          {type.title}
        </span>
        <div className={styles.cardIcon}>
          {coverImage ? (
            <>
              {/* Full image background */}
              <SanityImage
                image={coverImage}
                alt={title}
                /* Request a higher-res rendition from Sanity for sharpness */
                width={560} /* ~2x of display width for retina */
                height={296}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover', display: 'block' }}
                quality={90}
                loading="lazy"
              />
              {/* Left-side decorative border bar overlay */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '21.659px',
                  height: '100%',
                  borderRadius: '8px 0 0 8px',
                  border: `0.451px solid ${type?.title === 'Example' ? '#992A70' : '#E6B7FF'}`,
                  background: `${type?.title === 'Example' ? '#992A70' : '#E6B7FF'}`,
                  zIndex: 2,
                }}
              />
            </>
          ) : (
            <Image
              src={
                !isInactive && type?.title === 'Tool'
                  ? '/tool.png'
                  : !isInactive && type?.title === 'Example'
                    ? '/example.png'
                    : '/soon.png'
              }
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'contain' }}
            />
          )}
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
              styles.cardButton + ' bg-grey-600 text-grey-50 cursor-pointer font-galosText'
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
            href={'/tools/' + slug}
            scroll={false}
            className={
              'text-regular text-warm-grey hover:bg-dark-blue bg-blue-800 ' +
              styles.cardButton
            }
          >
            Open details →
          </Link>
        )}
      </div>
    );
  },
);

ToolCard.displayName = 'ToolCard';

export default function ToolGrid({ category, tools }) {
  return (
    <div>
      <div className={styles.gridContainer}>
        <div className={'flex items-center justify-between pt-16 pb-12'}>
          {category === 'Now' ? (
            <h4 className={'heading-md text-blue-800'}>Current Selection</h4>
          ) : (
            <h4 className={'heading-md text-blue-800'}>{category}</h4>
          )}
          {category === 'Demand Led' && (
            <p
              id="demand"
              className="text-grey-600 scroll-top text-small max-w-lg"
            >
              As part of this work, we have identified a number of potential
              instruments for implementation that may be useful. However, we’d
              prefer to only develop these if there is demand. Let us know if
              any of these seem interesting and we can{' '}
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
            <p
              id="soon"
              className="text-grey-600 scroll-top text-small max-w-lg"
            >
              These tools are currently in development and will be available
              soon.
            </p>
          )}
        </div>
        <div className={styles.grid}>
          {tools.map((tool) => (
            <ToolCard key={tool._id} category={category} {...tool} />
          ))}
        </div>
      </div>
    </div>
  );
}
