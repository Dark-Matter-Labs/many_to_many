import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProblemsHero from '@/components/ProblemsHero';
import ProblemCard from '@/components/ProblemCard';
import ShareStory from '@/components/ShareStory';
import ChallengesChooser from '@/components/ChallengesChooser';
import SystemBlockersTeaser from '@/components/SystemBlockersTeaser';
import { sanityFetch } from '@/sanity/lib/client';
import styles from './problems.module.css';

export const metadata = {
  title: 'Challenges',
  description:
    'Name the challenge you’re facing: common problem stories from inside complex collaborations, and the system blockers and enablers around them.',
  alternates: { canonical: '/challenges' },
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
      <Navbar activePage="Challenges" />
      <main>
        <ProblemsHero />
        <div className="section-shadow mb-2">
          <div className="container-main flex justify-center py-10">
            <p className="text-regular text-grey-600 max-w-2xl">
              The challenges of complex collaboration are often hard to name,
              and they turn up in two places. Some live inside the work: getting
              started, staying focused, holding together under pressure. Others
              sit in the system around it: the grant terms, legal duties and
              institutional habits that shape what’s possible. Naming the
              challenge is the first step to finding a way through it.
            </p>
          </div>
        </div>
        <ChallengesChooser />
        <section
          id="collaboration-challenges"
          aria-labelledby="collaboration-challenges-title"
          className="section-shadow-tb mb-2 scroll-mt-28 py-[120px]"
        >
          <div className="container-main">
            <p className="tag mb-3 tracking-wide text-grey-600 uppercase">
              Inside the work
            </p>
            <h2
              id="collaboration-challenges-title"
              className="heading-lg mb-4 text-blue-800"
            >
              Collaboration challenges
            </h2>
            <p className="text-regular text-grey-600 mb-10 max-w-2xl">
              Common problem stories you might recognise in your own work. Pick
              one that resonates to explore the patterns, tools and
              possibilities in the Many-to-Many System that relate to it.
            </p>
            <div className={styles.problemsGrid}>
              {problemsData.map((problem) => (
                <ProblemCard key={problem._id} {...problem} />
              ))}
            </div>
          </div>
        </section>
        <SystemBlockersTeaser />
        <ShareStory />
      </main>
      <Footer />
    </div>
  );
}
