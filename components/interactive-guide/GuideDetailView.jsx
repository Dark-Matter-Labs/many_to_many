import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '@/sanity/lib/image';
import { portableTextComponents } from '@/sanity/lib/portable-text/pt-componets';
import { motion } from 'framer-motion';
import styles from './InteractiveGuide.module.css';

const InsightCard = ({ title, description }) => (
  <div className={styles.insightCard}>
    <h4 className="text-regular pb-2 text-blue-800">{title}</h4>
    <p className="text-small text-grey-600">{description}</p>
  </div>
);

const AlertCard = ({ title, description }) => (
  <div className={styles.alertCard}>
    <h4 className="text-regular pb-2 text-blue-800">{title}</h4>
    <p className="text-small text-grey-600">{description}</p>
  </div>
);

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
      <div className="sticky top-0 bg-white">
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

          <div className={'text-regular text-grey-600 max-w-xl'}>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
      <div className={styles.detailContainer}>
        <hr className="mb-6 border-t border-blue-800" />

        <div className={styles.detailContentGrid}>
          {/* Navigation buttons positioned outside of animated containers for stability */}
          {activeIndex > 0 && (
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
          )}

          <motion.div
            className={styles.leftColumn}
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

          <motion.div
            className={styles.rightColumn}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <div className="">
              <h3 className="heading-md text-blue-800">Insights</h3>
              <p className="text-small text-grey-600">
                The key discoveries that emerged from our work and point to promising pathways and core principles.
              </p>
              {item.insights?.length ? (
                item.insights.map((insight) => (
                  <InsightCard key={insight._id} {...insight} />
                ))
              ) : (
                <p>No insights available for this layer.</p>
              )}
            </div>

            <div className={'pt-10 ' + styles.alertSection}>
              <h3 className="heading-md text-blue-800">Alerts</h3>
              <p className="text-small text-grey-600">
                The critical 'watch-outs'—the common challenges, tensions, complexities and areas where we learned special attention is required. 
              </p>
              {item.alerts?.length ? (
                item.alerts.map((alert) => (
                  <AlertCard key={alert._id} {...alert} />
                ))
              ) : (
                <p>No alerts available for this layer.</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
