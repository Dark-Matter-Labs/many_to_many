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
          Let’s learn some basics
        </h2>
        <CurvedArrow className="rotate-180 transform text-orange-500" />
      </div>
      <p className="text-regular text-grey-600 my-10">
        Here are six different elements:
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
      <Link href="/system-overview/system-guide" className={styles.ctaButton}>
        Explore the interactive version →
      </Link>
    </section>
  );
}
