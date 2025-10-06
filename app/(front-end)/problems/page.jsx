import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProblemsHero from '@/components/ProblemsHero';
import ProblemCard from '@/components/ProblemCard';
import ShareStory from '@/components/ShareStory';
import { sanityFetch } from '@/sanity/lib/client';
import styles from './problems.module.css';

const problemsQuery = `
*[_type == 'story'] {
...,
"type": {
    "value": type,
    "title": select(
      type == "getting_started" => "Getting started",
      type == "staying_focused" => "Staying focused",
      type == "withstanding_challenge" => "Withstanding challenge",
      null
    )
  },
}
`;

export default async function ProblemsPage() {
  const problemsData = await sanityFetch({
    query: problemsQuery,
    tags: ['story', 'layer'],
  });
  return (
    <div>
      <Navbar activePage="Navigate Challenges" />
      <main>
        <ProblemsHero />
        <div className="section-shadow mb-2">
          <div className="container-main flex justify-center py-10">
            <p className="text-regular text-grey-600 max-w-2xl">
              If you work in complex collaborations, the challenges outlined on
              this page may feel familiar. They are the very issues of
              governance, power, learning, and value that we also grappled with
              while building the Many-to-Many System. The frameworks and tools
              we developed are not silver bullets, but rather our practical
              responses to these struggles. Each was designed to provide a new
              lens or a different starting point for building more enabling
              structures for your work. We invite you to explore these
              challenges and our accompanying insights, in the hope that they
              offer useful support for your own efforts.
            </p>
          </div>
        </div>
        <section className={`${styles.gridSection} grid-bg gap-20 pt-8`}>
          <div className={styles.problemsGrid}>
            {problemsData.map((problem) => (
              <ProblemCard key={problem._id} {...problem} />
            ))}
          </div>
        </section>
        <ShareStory />
        {/* <NoteCloud /> */}
      </main>
      <Footer />
    </div>
  );
}
