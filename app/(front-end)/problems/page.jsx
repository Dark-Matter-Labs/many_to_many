import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import NoteCloud from '@/components/NoteCloud';
import ProblemsHero from '@/components/ProblemsHero';
import ProblemCard from '@/components/ProblemCard';
import ShareStory from '@/components/ShareStory';
import styles from './problems.module.css';

// Data for the problem cards
const problemsData = [
  {
    id: 'unripe-conditions',
    title: 'Unripe conditions',
    description:
      "We had great ambitions and possibility for emergence but we couldn't make them happen, content in the major transactions to warrant styles...",
    tags: ['System Blockers'],
    toolCount: 2,
  },
  {
    id: 'stuck-start',
    title: 'Stuck Start',
    description:
      "There was lots of potential early on but we couldn't quite make the most of it. We lost the initial trust, and the confusion led to the energy and conditions eroding.",
    tags: ['Stewardship Approach', 'Complex Collaboration'],
    toolCount: 2,
  },
  {
    id: 'frizzle-out',
    title: 'Frizzle Out',
    description:
      "There was lots of energy and potential at the start but we couldn't quite make it into a tangible and more coherent and actionable plan.",
    tags: ['Stewardship Approach'],
    toolCount: 2,
  },
  {
    id: 'coherence-drift',
    title: 'Coherence Drift',
    description:
      'Gradually alignment and energy to the collaboration has eroded and it became more difficult to find a coherent sense.',
    tags: [],
    toolCount: 1,
  },
  {
    id: 'practice-drift',
    title: 'Practice Drift',
    description:
      'Whilst we started agreeing and operating in a particular way, gradually our ways of practicing have drifted so far from the principles we agreed and that is biting into that we will sink together.',
    tags: [],
    toolCount: 1,
  },
  {
    id: 'tension-driven',
    title: 'Tension driven fragmentation',
    description:
      'Like in group work in a school project there were few getting on in the table and now There are several groups',
    tags: ['Stewardship Approach'],
    toolCount: 2,
  },
  {
    id: 'self-protection',
    title: 'Necessary Self Protection',
    description:
      "The terms and conditions we had initially referred to the contract for each city on the project. We agreed on a process but now there's some disagreement over mutual resolution",
    tags: ['Stewardship Approach'],
    toolCount: 1,
  },
];

export default function ProblemsPage() {
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
              <ProblemCard key={problem.id} {...problem} />
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
