import Link from 'next/link';
import Image from 'next/image';
import { CurvedArrow } from './CurvedArrow';
import styles from './LearnBasicsSection.module.css';
const basics = [
  { title: 'Complex Collaborations', description: 'About & Info' },
  { title: 'Deep Code', description: 'Learn through Exercises' },
  { title: 'Mission within a narrow focus', description: 'Choices' },
  { title: 'Stewardship', description: 'Take action' },
  { title: 'Infrastructuring', description: 'Description of this action' },
];
export default function LearnBasicsSection() {
  return (
    <section className={styles.container}>
      <div
        className={
          'flex flex-col items-center justify-center gap-2 ' +
          styles.titleSection
        }
      >
        <CurvedArrow className="rotate-180 transform text-orange-500" />
        <h2 className="font-galosText text-center text-2xl text-blue-800">
          The System At A Glance
        </h2>
        <CurvedArrow className="rotate-180 transform text-orange-500" flip />
      </div>
      <p className="text-regular text-grey-600 mx-auto my-10 max-w-4xl text-left">
        The Many-to-Many System has six key layers. It's important to note the
        System simplifies a highly complex landscape, aiming to make these
        interconnected elements digestible and navigable. In practice, these
        layers aren't sequential steps with clear starts and stops; they are
        often messy, iterative, and entangled.
      </p>
      <Image
        src="/guide.png"
        alt="Learn Basics"
        width={1046}
        height={461}
        className="mx-auto py-4"
      />
      {/* <div className={styles.grid}>
        {basics.map((item) => (
          <div key={item.title} className={styles.gridItem}>
            <div className={styles.itemIcon}></div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div> */}
      <Link
        href="/overview/system-guide"
        className={'font-galosText ' + styles.ctaButton}
      >
        Explore the interactive version
      </Link>
      <Link
        href="/M2M_System_Field_Guide.pdf"
        className={'font-galosText mx-10 ' + styles.ctaButton}
      >
        Download the Field Guide
      </Link>
    </section>
  );
}
