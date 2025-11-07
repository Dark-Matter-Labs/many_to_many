import Image from 'next/image';
import styles from './ShareStory.module.css';
export default function ShareStory() {
  return (
    <section
      className={
        'section-shadow-tb mb-2 items-start justify-around sm:flex ' +
        styles.container
      }
    >
      <div>
        <h2 className="heading text-blue-800">Share Your Story</h2>
        <Image
          src="/arrows.png"
          alt="Share icon"
          width={277.4}
          height={147.19}
        />
      </div>
      <div>
        <p className="text-regular text-grey-600 max-w-xl pb-8">
          We’d love to hear from you about which challenges you are facing in
          your complex collaborations.
        </p>
        <a
          href="mailto:beyondtherules@darkmatterlabs.org?subject=Many-to-Many:Share Story"
          className={
            'text-regular text-warm-grey hover:bg-dark-blue bg-blue-800 ' +
            styles.ctaButton
          }
        >
          Share story
        </a>
      </div>
    </section>
  );
}
