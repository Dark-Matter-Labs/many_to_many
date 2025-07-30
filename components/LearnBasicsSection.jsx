import styles from './LearnBasicsSection.module.css';
const basics = [
  { title: 'Complex Collaborations', description: 'About & Info' },
  { title: 'Deep Code', description: 'Learn through Exercises' },
  { title: 'Mission within a narrow focus', description: 'Choices' },
  { title: 'Stewardship', description: 'Take action' },
  { title: 'Infrastructuring', description: 'Description of this action' },
];
export default function LearnBasicsSection() {
  return (
    <section className={styles.container}>
      <div className={styles.titleSection}>
        <div className={styles.icon}></div>
        <h2>Let's learn some basics</h2>
        <p>Here are six different elements:</p>
      </div>
      <div className={styles.grid}>
        {basics.map((item) => (
          <div key={item.title} className={styles.gridItem}>
            <div className={styles.itemIcon}></div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <a href="#" className={styles.ctaButton}>
        Explore the interactive version →
      </a>
    </section>
  );
}
