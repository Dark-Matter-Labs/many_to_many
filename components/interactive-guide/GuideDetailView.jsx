import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '@/sanity/lib/image';
import { portableTextComponents } from '@/sanity/lib/portable-text/pt-componets';
import { motion } from 'framer-motion';
import styles from './InteractiveGuide.module.css';

const InsightCard = ({ title, description }) => (
  <div className={styles.insightCard}>
    <h3 className="font-galosText">{title}</h3>
    <p className="font-galosText">{description}</p>
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
    <div className={styles.detailContainer}>
      <div className={styles.detailHeader}>
        {/* Back button */}
        <button
          onClick={onClose}
          className={styles.backBtn}
          aria-label="Back to overview"
        >
          ← Back to overview
        </button>

        <h1 className={'font-galosText ' + styles.breadcrumb}>{item.title}</h1>

        <div className={styles.navButtons}>
          <button onClick={onPrevious} aria-label="Previous layer">← previous</button>
          <button onClick={onNext} aria-label="Next layer">next →</button>
        </div>
      </div>

      <div className={styles.detailContentGrid}>
        <motion.div
          className={styles.leftColumn}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={urlForImage(item?.icon)}
            width={366}
            height={494}
            className={styles.mainIcon}
            alt="layer icon"
          />
          <h2 className="heading-lg pb-2">{item.title}</h2>
          <p className="heading-md pb-2">{item.subtitle}</p>
          <div className={'text-regular pb-4 ' + styles.mainText}>
            <p>{item.description}</p>
          </div>
          <PortableText value={item.detail} components={portableTextComponents} />
        </motion.div>

        <motion.div
          className={styles.rightColumn}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          <div className={styles.insightSection}>
            <h3>Insights</h3>
            <p>The key insights from this layer.</p>
            {item.insights?.length ? (
              item.insights.map((insight) => (
                <InsightCard key={insight._id} {...insight} />
              ))
            ) : (
              <p>No insights available for this layer.</p>
            )}
          </div>

          <div className={'pt-10 ' + styles.alertSection}>
            <h3>Alerts</h3>
            <p>Be aware of these potential pitfalls or challenges related to this.</p>
            {item.alerts?.length ? (
              item.alerts.map((alert) => (
                <InsightCard key={alert._id} {...alert} />
              ))
            ) : (
              <p>No alerts available for this layer.</p>
            )}
          </div>
        </motion.div>
      </div>

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
    </div>
  );
}
