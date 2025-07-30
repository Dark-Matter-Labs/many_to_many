import styles from './InteractiveGuide.module.css';

export default function GuideOverview({ data, onSelect }) {
  return (
    <div className={styles.overviewContainer}>
      <div className={styles.overviewHeader}>
        <div className={styles.howToNote}>
          <p>
            how to navigate this page? <strong>Click on the pieces!</strong>
          </p>
        </div>
        <div className={styles.overviewIntro}>
          <h2>Overview / The System Guide</h2>
          <p>
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
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
