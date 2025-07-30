import styles from './ShareStory.module.css';
export default function ShareStory() {
  return (
    <section className={styles.container}>
      <div className={styles.icon}></div>
      <h2>Share your story</h2>
      <p>
        Share with on your story we will review it and consider if it's
        potentially can be part of it.
      </p>
      <a href="#" className={styles.ctaButton}>
        Share story
      </a>
    </section>
  );
}
