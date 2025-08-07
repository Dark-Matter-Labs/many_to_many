import styles from './ShareStory.module.css';
export default function ShareStory() {
  return (
    <section className={styles.container}>
      <h2 className="heading text-blue-800">Share Your Story</h2>
      <p className="text-regular text-gray-600">
        We’d love to hear from you about which challenges you are facing in your
        complex collaborations.
      </p>
      <a
        href="#"
        className={
          'text-regular text-warm-grey bg-blue-800 ' + styles.ctaButton
        }
      >
        Share story
      </a>
    </section>
  );
}
