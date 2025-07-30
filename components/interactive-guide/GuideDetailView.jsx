import styles from './InteractiveGuide.module.css';

// A placeholder for the pink insight card
const InsightCard = () => (
  <div className={styles.insightCard}>
    <span className={styles.cardTag}>Stewardship Approach</span>
    <h3>Spotting patterns in your context: Diagnostics</h3>
    <p>
      A diagnostic tool to analyse patterns within your context and to suggest
      process considerations.
    </p>
    <button className={styles.cardButton}>go to Insight →</button>
  </div>
);

export default function GuideDetailView({ item, onClose, onNext, onPrevious }) {
  const bottomNavItems = [
    'Complex Collaboration',
    'Mission',
    'Deep Code Shift',
    'Stewardship Process',
    'Infrastructure Model',
  ];

  return (
    <div className={styles.detailContainer}>
      <div className={styles.detailHeader}>
        {/* We can make the breadcrumb part clickable to go back */}
        <h1 className={styles.breadcrumb} onClick={onClose}>
          {item.breadcrumb}
        </h1>
        <div className={styles.navButtons}>
          <button onClick={onPrevious}>← previous</button>
          <button onClick={onNext}>next →</button>
        </div>
      </div>

      <div className={styles.detailContentGrid}>
        <div className={styles.leftColumn}>
          <div className={styles.mainIcon}></div>
          <h2>{item.title}</h2>
          <p>{item.subtitle}</p>
          <div className={styles.mainText}>
            <p>
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <p>
              a torquent per conubia nostra, per inceptos himenaeos. Horem ipsum
              dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
              et velit interdum, ac aliquet odio mattis. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.
            </p>
            <p>
              ectetur adipiscing elit. Nunc vulputate libero et velit interdum,
              ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos.
            </p>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.insightSection}>
            <h3>Insights</h3>
            <p>
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <InsightCard />
          </div>
          <div className={styles.alertSection}>
            <h3>Alerts</h3>
            <p>
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
          <div className={styles.sideImagePlaceholder}></div>
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
