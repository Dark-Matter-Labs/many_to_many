import styles from './ShareStory.module.css';
export default function ShareStory() {
  return (
    <section className={'flex items-start justify-around ' + styles.container}>
      <h2 className="heading text-blue-800">Share Your Story</h2>
      <div>
        <p className="text-regular text-grey-600 max-w-xl pb-8">
          We’d love to hear from you about which challenges you are facing in
          your complex collaborations.
        </p>
        <a
          href="#"
          className={
            'text-regular text-warm-grey bg-blue-800 ' + styles.ctaButton
          }
        >
          Share story
        </a>
      </div>
    </section>
  );
}
