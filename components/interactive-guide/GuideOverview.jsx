import Image from 'next/image';
import Link from 'next/link';
import styles from './InteractiveGuide.module.css';
import { urlForImage } from '@/sanity/lib/image';

export default function GuideOverview({
  data,
  onSelect,
  allLayers,
  activeIndex,
  onClose,
  onNavClick,
}) {
  return (
    <>
      <div
        className={
          'flex flex-row items-center justify-between px-10 ' +
          styles.overviewBg
        }
      >
        <h1 className="heading-lg text-blue-800">Interactive Overview </h1>
        {/* <nav className={styles.bottomNav}>
          {allLayers.map((navItem, index) => 
          (
            <a
              key={navItem.title}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavClick(index);
              }}
              className={index === activeIndex ? styles.active : ''}
            >
              {navItem.title}
            </a>
          ))}
        </nav> */}
        {/* Back button */}
        <button
          className={
            'text-small rounded-full bg-blue-800 px-4 py-2 text-white ' +
            styles.backBtn
          }
          aria-label="Back to overview"
        >
          <Link href="/discover-the-system">← Exit</Link>
        </button>
      </div>

      <div className={''}>
        <div className={'px-4 py-8 sm:px-0 ' + styles.overviewHeader}>
          <div className="mx-auto max-w-2xl">
            <p className="text-small text-grey-600">
              This interactive overview is your guide to the Many-to-Many
              System. Use this tool to explore each of the core layers and
              understand how they interrelate. Think of it as a high-level map
              of the system, highlighting the key insights and important
              considerations we uncovered throughout our work. <br />
              <br />
              Should you wish to delve deeper into the detail of the
              Many-to-Many System, please explore the{' '}
              <Link
                href="/M2M_System_Field_Guide.pdf"
                target="_blank"
                className="text-blue-800"
                rel="noopener noreferrer"
              >
                Field Guide.
              </Link>
            </p>
          </div>
        </div>
        <div className="container-main pb-10">
          <p className="text-small pb-4 text-blue-800">
            Click on one of the layers to open up.
          </p>
          <div className={styles.selectionBar}>
            {data.map((item, index) => {
              if (index === 5) return null;
              else
                return (
                  <button
                    key={item._id}
                    className={'opacity-80 ' + styles.selectionItem}
                    onClick={() => onSelect(index)}
                  >
                    <Image
                      src={urlForImage(item?.icon)}
                      width={366}
                      height={494}
                      alt="layer icon"
                    ></Image>
                    <span className={styles.itemTitle}>{item.title}</span>
                    <span className={styles.itemSubtitle}>{item.subtitle}</span>
                  </button>
                );
            })}
          </div>

          <div className="shadow-0_0_6px_0_rgba(0,0,0,0.25)] mx-4 my-10 rounded-[3.16px] bg-orange-50 px-10 py-10">
            <div
              className={
                'flex cursor-pointer items-center justify-around gap-6 opacity-60 hover:opacity-100'
              }
              onClick={() => onSelect(5)}
            >
              <div
                className={
                  'font-galosText text-[15.82px] font-medium text-black'
                }
              >
                System Blockers
              </div>
              <Image
                src="/system-blocker.svg"
                width={62.56}
                height={74.9}
                alt="blocker icon"
              ></Image>
              <Image
                src="/system-blocker.svg"
                width={62.56}
                height={74.9}
                alt="blocker icon"
              ></Image>
              <Image
                src="/system-blocker.svg"
                width={62.56}
                height={74.9}
                alt="blocker icon"
                className="hidden sm:block"
              ></Image>
              <Image
                src="/system-blocker.svg"
                width={62.56}
                height={74.9}
                alt="blocker icon"
                className="hidden sm:block"
              ></Image>
              <Image
                src="/system-blocker.svg"
                width={62.56}
                height={74.9}
                alt="blocker icon"
                className="hidden sm:block"
              ></Image>
              <Image
                src="/system-blocker.svg"
                width={62.56}
                height={74.9}
                alt="blocker icon"
                className="hidden sm:block"
              ></Image>
              <Image
                src="/system-blocker.svg"
                width={62.56}
                height={74.9}
                alt="blocker icon"
                className="hidden lg:block"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
