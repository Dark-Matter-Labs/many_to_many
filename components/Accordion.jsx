import styles from './Accordion.module.css';
export default function Accordion({ title, content }) {
  return (
    <details className={'font-galosText ' + styles.details}>
      <summary className={'text-regular text-blue-800 ' + styles.summary}>
        {title}
      </summary>
      <div className={'text-sm ' + styles.content}>
        <p>{content}</p>
      </div>
    </details>
  );
}
