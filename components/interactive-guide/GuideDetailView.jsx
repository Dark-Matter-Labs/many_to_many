import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '@/sanity/lib/image';
import { portableTextComponents } from '@/sanity/lib/portable-text/pt-componets';
import styles from './InteractiveGuide.module.css';

// A placeholder for the pink insight card
const InsightCard = ({ title, description }) => (
  <div className={styles.insightCard}>
    <h3 className="font-galosText">{title}</h3>
    <p className="font-galosText">{description}</p>
  </div>
);

export default function GuideDetailView({ item, onClose, onNext, onPrevious }) {
  const bottomNavItems = [
    'Complex Collaboration',
    'Deep Code Shift',
    'Mission Wide & Narrow',
    'Stewarding Approaches',
    'Infrastructure Model',
  ];

  return (
    <div className={styles.detailContainer}>
      <div className={styles.detailHeader}>
        {/* We can make the breadcrumb part clickable to go back */}
        <h1 className={'font-galosText ' + styles.breadcrumb} onClick={onClose}>
          {item.title}
        </h1>
        <div className={styles.navButtons}>
          <button onClick={onPrevious}>← previous</button>
          <button onClick={onNext}>next →</button>
        </div>
      </div>

      <div className={styles.detailContentGrid}>
        <div className={styles.leftColumn}>
          <Image
            src={urlForImage(item?.icon)}
            width={366}
            height={494}
            className={styles.mainIcon}
            alt="layer icon"
          ></Image>
          <h2 className="heading-lg pb-2">{item.title}</h2>
          <p className="heading-md pb-2">{item.subtitle}</p>
          <div className={'text-regular pb-4 ' + styles.mainText}>
            <p>{item.description}</p>
          </div>
          <PortableText
            value={item.detail}
            components={portableTextComponents}
          />
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.insightSection}>
            <h3>Insights</h3>
            <p>The key insights from this layer.</p>
            {item.insights?.length > 0 ? (
              item.insights.map((insight) => (
                <InsightCard key={insight._id} {...insight} />
              ))
            ) : (
              <p>No insights available for this layer.</p>
            )}
          </div>
          <div className={'pt-10 ' + styles.alertSection}>
            <h3>Alerts</h3>
            <p>
              Be aware of these potential pitfalls or challenges related to
              this.
            </p>
            {item.alerts?.length > 0 ? (
              item.alerts.map((alert) => (
                <InsightCard key={alert._id} {...alert} />
              ))
            ) : (
              <p>No alerts available for this layer.</p>
            )}
          </div>
        </div>
      </div>

      <nav className={styles.bottomNav}>
        {bottomNavItems.map((navItem, index) => (
          <a
            key={navItem}
            href="#"
            className={index === 0 ? styles.active : ''}
          >
            {navItem}
          </a>
        ))}
      </nav>
    </div>
  );
}
