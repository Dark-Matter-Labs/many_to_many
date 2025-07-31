import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import NoteCloud from '@/components/NoteCloud';
import LearnHero from '@/components/LearnHero';
import ToolGrid from '@/components/ToolGrid';
import styles from './learn.module.css';

export default function LearnByYourselfPage() {
  return (
    <div>
      <Navbar activePage="Learn by yourself" />
      <main>
        <LearnHero />

        <section
          className={'text-regular text-grey-600 ' + styles.introTextSection}
        >
          <p>
            You can learn by yourself, at your own pace, using the resources we
            have gathered for you. Whether you are a beginner or an experienced
            practitioner, our curated content will help you deepen your
            understanding of the Many-to-Many approach and its practical
            applications. Explore our resources, tools, and case studies to
            enhance your skills and knowledge.
          </p>
        </section>

        {/* --- PRACTICAL TOOLS SECTION --- */}
        <section className={`${styles.mainContent} grid-bg`}>
          <div className={styles.sectionHeader}>
            <h2 className="heading text-blue-800">
              Practical Tools and Examples
            </h2>
            <p className="text-regular text-grey-600 py-10">
              Repository of practical tools and examples to help you implement
              the Many-to-Many approach in your work.
            </p>
            <a href="#" className={styles.filterLink}>
              Filter by: topic, tool, typology, readiness
            </a>
          </div>

          <ToolGrid
            title="TOOLS"
            description="Horem ipsum dolor sit amet, consectetur adipiscing elit."
            cardCount={4}
          />
          <ToolGrid
            title="DIGITAL TOOLS"
            description="Horem ipsum dolor sit amet, consectetur adipiscing elit."
            cardCount={4}
          />
          <ToolGrid
            title="CASE STUDIES"
            description="Horem ipsum dolor sit amet, consectetur adipiscing elit."
            cardCount={4}
          />
        </section>

        <div className={styles.divider}></div>
      </main>
      <Footer />
    </div>
  );
}
