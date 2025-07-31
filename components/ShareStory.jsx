import styles from './ShareStory.module.css';
export default function ShareStory() {
  return (
    <section className={styles.container}>
      <h2 className="heading text-blue-800">Share your story</h2>
      <p className="text-regular text-gray-600">
        Share with on your story we will review it and consider if it's
        potentially can be part of it.
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
