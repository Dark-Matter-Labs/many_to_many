import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '@/sanity/lib/image';
import { portableTextComponents } from '@/sanity/lib/portable-text/pt-componets';
import { motion } from 'framer-motion';
import styles from './InteractiveGuide.module.css';

export default function GuideDetailView({
  item,
  onClose,
  onNext,
  onPrevious,
  allLayers,
  activeIndex,
  onNavClick,
}) {
  return (
    <div className="">
      <div className="bg-white">
        <div className={'flex flex-row items-center justify-between'}>
          <h1 className="heading-lg text-blue-800">Interactive Overview </h1>
          <nav className={styles.bottomNav}>
            {allLayers.map((navItem, index) => (
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
          </nav>
          {/* Back button */}
          <button
            onClick={onClose}
            className={
              'text-small rounded-full bg-blue-800 p-2 text-white ' +
              styles.backBtn
            }
            aria-label="Back to overview"
          >
            ← Overview
          </button>
        </div>

        <div
          className={
            'mb-6 flex flex-row items-center justify-between ' +
            styles.detailContainer
          }
        >
          <div className="flex items-center justify-baseline gap-4">
            <Image
              src={urlForImage(item?.icon)}
              width={366}
              height={494}
              className={styles.mainIcon}
              alt="layer icon"
            />
            <h2 className={'heading-md text-blue-800'}>{item.title}</h2>
          </div>

          <div className={'text-small text-grey-600 max-w-xl pb-2'}>
            <p>
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
      </div>
      <div className={styles.detailContainer}>
        <hr className="mb-6 border-t border-blue-800" />

        <div className={styles.detailContentGrid}>
          {/* Navigation buttons positioned outside of animated containers for stability */}
          {/* {activeIndex > 0 && (
            <button
              onClick={onPrevious}
              className="text-small fixed top-1/2 left-0 z-50 cursor-pointer rounded-t-[20px] bg-transparent px-10 py-2 text-blue-800 shadow-sm shadow-[#474747] transition-colors duration-200 hover:bg-orange-500 hover:text-white"
              style={{ transform: 'translateX(-43%) rotate(90deg)' }}
            >
              ← {allLayers[activeIndex - 1].title}
            </button>
          )}

          {activeIndex < allLayers.length - 1 && (
            <button
              onClick={onNext}
              className="text-small fixed top-1/2 right-0 z-50 cursor-pointer rounded-t-[20px] bg-transparent px-10 py-2 text-blue-800 shadow-sm shadow-[#474747] transition-colors duration-200 hover:bg-orange-500 hover:text-white"
              style={{ transform: 'translateX(43%) rotate(-90deg)' }}
            >
              {allLayers[activeIndex + 1].title} →
            </button>
          )} */}

          <motion.div
            className={'mx-auto max-w-2xl'}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="heading-md pb-2">{item.subtitle}</p>

            <PortableText
              value={item.detail}
              components={portableTextComponents}
            />
          </motion.div>

          {/* <motion.div
            className={styles.rightColumn}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >

          </motion.div> */}
        </div>
      </div>

      {/* Alerts and Insights Section */}
      <div className="grid-bg py-[160px]">
        <section
          className={'container-main grid grid-cols-1 gap-8 sm:grid-cols-2'}
        >
          <div>
            <h3 className="heading-md text-blue-800">Alerts</h3>
            <p className="text-small text-grey-600 mb-8">
              Alerts are the critical 'watch-outs'—the common challenges,
              tensions, complexities, and areas where we learned special
              attention is required.
            </p>
            <div>
              {item.alerts && item.alerts.length > 0 ? (
                item.alerts.map((alert) => (
                  <details
                    key={alert._id}
                    className={styles.collapsible + ' mb-4'}
                  >
                    <summary
                      className={
                        styles.collapsibleSummary + ' ' + styles.alertSummary
                      }
                      aria-controls={`alert-content-${alert._id}`}
                    >
                      <span className="text-regular text-blue-800">
                        {alert.title}
                      </span>
                      <span
                        className={styles.chevron}
                        aria-hidden="true"
                      ></span>
                    </summary>
                    <div
                      id={`alert-content-${alert._id}`}
                      className={styles.collapsibleContent}
                    >
                      <p className="text-small text-grey-600">
                        {alert.description}
                      </p>
                    </div>
                  </details>
                ))
              ) : (
                <p className="text-small text-grey-600">No alerts available.</p>
              )}
            </div>
          </div>
          <div>
            <h3 className="heading-md text-blue-800">Insights</h3>
            <p className="text-small text-grey-600 mb-8">
              Insights are the key discoveries that emerged from our work and
              point to promising pathways and core principles.
            </p>
            <div>
              {item.insights && item.insights.length > 0 ? (
                item.insights.map((insight) => (
                  <details
                    key={insight._id}
                    className={styles.collapsible + ' mb-4'}
                  >
                    <summary
                      className={
                        styles.collapsibleSummary + ' ' + styles.insightSummary
                      }
                      aria-controls={`insight-content-${insight._id}`}
                    >
                      <span className="text-regular text-blue-800">
                        {insight.title}
                      </span>
                      <span
                        className={styles.chevron}
                        aria-hidden="true"
                      ></span>
                    </summary>
                    <div
                      id={`insight-content-${insight._id}`}
                      className={styles.collapsibleContent}
                    >
                      <p className="text-small text-grey-600">
                        {insight.description}
                      </p>
                    </div>
                  </details>
                ))
              ) : (
                <p className="text-small text-grey-600">
                  No insights available.
                </p>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-center gap-2 py-8">
        <span className="text-small text-grey-600">
          This tool is part of Many-to-many Systems website, click{' '}
          <Link href="/" className="text-blue-800 underline">
            here
          </Link>{' '}
          to return to the homepage.
        </span>
      </div>
    </div>
  );
}
