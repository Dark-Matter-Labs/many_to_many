import styles from './HeroSection.module.css';

export default function HeroSection({ title }) {
  return (
    <section className={'heading ' + styles.hero}>
      <h1 className="ml-8 text-blue-800 sm:ml-40">{title}</h1>
    </section>
  );
}
