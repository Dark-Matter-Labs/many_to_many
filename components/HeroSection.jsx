import styles from './HeroSection.module.css';

export default function HeroSection({ title }) {
  return (
    <section className={'heading ' + styles.hero}>
      <h1 className="ml-40 text-blue-800">{title}</h1>
    </section>
  );
}
