import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import NoteCloud from '@/components/NoteCloud';
import ProblemsHero from '@/components/ProblemsHero';
import ProblemCard from '@/components/ProblemCard';
import ShareStory from '@/components/ShareStory';
import { sanityFetch } from '@/sanity/lib/client';
import styles from './problems.module.css';

const problemsQuery = `
*[_type == 'story'] {...}
`;

export default async function ProblemsPage() {
  const problemsData = await sanityFetch({
    query: problemsQuery,
    tags: ['story', 'layer'],
  });
  return (
    <div>
      <Navbar activePage="Problems" />
      <main>
        <ProblemsHero />
        <div className="mx-auto my-20 max-w-4xl px-4">
          <p className="text-regular text-gray-600">
            The problems that M2M can solve are complex and multifaceted, often
            requiring a collaborative approach to find effective solutions. Each
            problem represents a unique challenge that can benefit from the
            tools and methodologies offered by M2M. Whether it's addressing
            systemic issues, fostering collaboration, or enhancing
            decision-making processes, M2M provides the framework to tackle
            these challenges head-on.
          </p>
        </div>
        <section className={`${styles.gridSection} grid-bg`}>
          <div className={styles.filterBar}>
            <span className="text-regular text-blue-800">
              Filter by: phase, topic, readiness, blocker
            </span>
          </div>
          <div className={styles.problemsGrid}>
            {problemsData.map((problem) => (
              <ProblemCard key={problem._id} {...problem} />
            ))}
          </div>
        </section>
        <ShareStory />
        <NoteCloud />
      </main>
      <Footer />
    </div>
  );
}
