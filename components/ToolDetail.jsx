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
  return (
    <div className={'grid grid-cols-1 gap-8 sm:grid-cols-2'}>
      <div>
        <span className={styles.tag}>{type}</span>
        <h2 className="heading-lg text-blue-800">{title}</h2>
      </div>
      <p className={'text-regular text-grey-600 pt-12'}>{description}</p>

      {coverImage?.asset ? (
        <div className="relative h-64 w-full sm:h-80 md:h-96">
          <Image
            src={urlForImage(coverImage)}
            alt={coverImage?.alt || 'Tool cover image'}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
            className="object-cover"
            priority
          />
        </div>
      ) : (
        <div className="bg-grey-200 text-grey-600 flex h-64 items-center justify-center rounded-md">
          Coming soon
        </div>
      )}

      <div className={styles.sideContent}>
        <ul className={'text-small text-grey-600 ' + styles.metaList}>
          <li>
            Format: <span className="text-blue-800">{format}</span>
          </li>
          <li>
            Readiness: <span className="text-blue-800">{readiness}</span>
          </li>
          <li>
            Test Status: <span className="text-blue-800">{test_status}</span>
          </li>
          <li>
            Who is it for:{' '}
            {audience?.map((item, index) => (
              <span key={index} className={'text-blue-800'}>
                {item + (index < audience.length - 1 ? ', ' : '')}
              </span>
            ))}
          </li>
          <li>
            Availability: <span className="text-blue-800">{availability}</span>
          </li>
        </ul>

        {link ? (
          <Link href={link} className={styles.ctaButton}>
            Link →
          </Link>
        ) : (
          <button className={styles.ctaButton} disabled>
            Coming Soon
          </button>
        )}
      </div>
    </div>
  );
}
