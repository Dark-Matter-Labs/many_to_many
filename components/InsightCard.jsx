import styles from './InsightCard.module.css';
export default function InsightCard({ title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}></div>
      <h3 className="heading-md text-blue-800">{title}</h3>
      <p className="text-small text-grey-600">{description}</p>
    </div>
  );
}
