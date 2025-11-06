import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProblemsHero from '@/components/ProblemsHero';
import ProblemCard from '@/components/ProblemCard';
import ShareStory from '@/components/ShareStory';
import { sanityFetch } from '@/sanity/lib/client';
import styles from './problems.module.css';

export const metadata = {
  title: 'Navigate Challenges - Many-to-Many System',
};

const problemsQuery = `
*[_type == 'story']{
  _id,
  title,
  description,
  slug,
  "type": {
    "value": type,
    "title": select(
      type == "getting_started" => "Getting started",
      type == "staying_focused" => "Staying focused",
      type == "withstanding_challenge" => "Withstanding challenge",
      null
    )
  }
}`;

export default async function ProblemsPage() {
  const problemsData = await sanityFetch({
    query: problemsQuery,
    tags: ['story'],
  });
  return (
    <div>
      <Navbar activePage="Navigate Challenges" />
      <main>
        <ProblemsHero />
        <div className="section-shadow mb-2">
          <div className="container-main flex justify-center py-10">
            <p className="text-regular text-grey-600 max-w-2xl">
              The challenges of complex collaboration are often difficult to
              name. This section offers a set of common “problem stories”—from
              getting stuck at the start to losing momentum over time—that you
              might recognise in your own work. Our hope is that by identifying
              a challenge that resonates with your situation, you can use it as
              a starting point to explore relevant patterns and possibilities
              within the Many-to-Many System.
            </p>
          </div>
        </div>
        <section className={`grid-bg py-[160px]`}>
          <div className="container-main">
            <h2 className="heading-lg mb-10 text-blue-800">
              Example Challenges
            </h2>
            <div className={styles.problemsGrid}>
              {problemsData.map((problem) => (
                <ProblemCard key={problem._id} {...problem} />
              ))}
            </div>
          </div>
        </section>
        <ShareStory />
        {/* <NoteCloud /> */}
      </main>
      <Footer />
    </div>
  );
}
