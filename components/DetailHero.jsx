import styles from './DetailHero.module.css';
export default function DetailHero({ title, nextLink, prevLink }) {
  return (
    <section className={'mt-10 bg-[#D8FFD5] ' + styles.hero}>
      <h1 className={'heading text-blue-800 ' + styles.title}>{title}</h1>
    </section>
  );
}
