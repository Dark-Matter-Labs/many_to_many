import styles from './Accordion.module.css';
export default function Accordion({ title }) {
  return (
    <details className={styles.details}>
      <summary className={'text-regular text-blue-800 ' + styles.summary}>
        {title}
      </summary>
      <div className={'text-regular ' + styles.content}>
        <p>Content for the accordion goes here. It can be anything you want.</p>
      </div>
    </details>
  );
}
