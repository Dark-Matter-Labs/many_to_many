import styles from './Accordion.module.css';
export default function Accordion({ title }) {
  return (
    <details className={styles.details}>
      <summary className={styles.summary}>{title}</summary>
      <div className={styles.content}>
        <p>Content for the accordion goes here. It can be anything you want.</p>
      </div>
    </details>
  );
}
