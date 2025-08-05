import styles from './InteractiveGuide.module.css';

export default function GuideOverview({ data, onSelect }) {
  return (
    <div className={styles.overviewContainer}>
      <div className={styles.overviewHeader}>
        {/* <div className={styles.howToNote}>
          <p>
            how to navigate this page? <strong>Click on the pieces!</strong>
          </p>
        </div> */}
        <div className={styles.overviewIntro}>
          <h2>Overview of the Many-to-Many System</h2>
          <p>
            Click to learn more about each layer of the Many-to-Many System and
            how it interacts with our key learnings, insights and alerts to
            watch out for.
          </p>
        </div>
      </div>

      <div className={styles.selectionBar}>
        {data.map((item, index) => (
          <button
            key={item.id}
            className={styles.selectionItem}
            onClick={() => onSelect(index)}
          >
            <div className={styles.itemIcon}></div>
            <span className={styles.itemTitle}>{item.title}</span>
            <span className={styles.itemSubtitle}>{item.subtitle}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
