import Link from 'next/link';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
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
  link,
  coverImage,
}) {
  const typeTitle = typeof type === 'string' ? type : type?.title;
  const formattedType = typeTitle
    ? typeTitle.charAt(0).toUpperCase() + typeTitle.slice(1).toLowerCase()
    : '';
  const tagColorClass =
    typeTitle === 'tool'
      ? 'bg-[#e6b7ff] text-blue-800'
      : typeTitle === 'example'
        ? 'bg-[#992A70] text-white'
        : 'bg-grey-600 text-grey-50';
  return (
    <div className={"grid grid-cols-1 gap-10 lg:grid-cols-12"}>
      {/* Left: Image Card */}
      <div className="lg:col-span-6 order-2 lg:order-1">
        <div className={styles.imageCard}>
          {coverImage?.asset ? (
            <div className="relative h-64 w-full sm:h-80 md:h-[28rem]">
              <Image
                src={urlForImage(coverImage)}
                alt={coverImage?.alt || 'Tool cover image'}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="object-contain"
                priority
              />
            </div>
          ) : (
            <div className="bg-grey-200 text-grey-600 flex h-64 items-center justify-center rounded-md">
              Coming soon
            </div>
          )}
        </div>
      </div>

      {/* Right: Details */}
      <div className="lg:col-span-6 order-1 lg:order-2">
        <span className={`${styles.tag} ${tagColorClass}`}>{formattedType}</span>
        <h2 className="heading-lg text-blue-800">{title}</h2>
        {description ? (
          <p className={"text-regular text-grey-600 mt-6"}>{description}</p>
        ) : null}

        <div className={styles.sideContent + " mt-8"}>
          <ul className={"text-small text-grey-600 " + styles.metaList}>
            <li>
              Format: <span className="text-blue-800">{format}</span>
            </li>
            <li>
              Test Status: <span className="text-blue-800">{test_status}</span>
            </li>
            {audience?.length ? (
              <li>
                Who is it for:{' '}
                {audience?.map((item, index) => (
                  <span key={index} className={'text-blue-800'}>
                    {item + (index < audience.length - 1 ? ', ' : '')}
                  </span>
                ))}
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      {/* Bottom: CTA */}
      <div className="lg:col-span-12 order-3 flex justify-center">
        {link ? (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            className={styles.ctaButton}
          >
            Try out this tool →
          </a>
        ) : (
          <button className={styles.ctaButton} disabled>
            Coming Soon
          </button>
        )}
      </div>
    </div>
  );
}
