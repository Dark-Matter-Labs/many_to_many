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

        <section className={styles.introTextSection}>
          <p>
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </section>

        {/* --- PRACTICAL TOOLS SECTION --- */}
        <section className={`${styles.mainContent} grid-background`}>
          <div className={styles.sectionHeader}>
            <h2>Practical Tools and Examples</h2>
            <p>
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
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

        {/* --- DEEP CODES SECTION --- */}
        <section className={`${styles.mainContent} grid-background`}>
          <div className={styles.sectionHeader}>
            <h2>Deep Codes and Deep Codes Shift</h2>
            <p>
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <a href="#" className={styles.filterLink}>
              Filter by: topic, tool, typology, readiness
            </a>
          </div>

          <NoteCloud />

          <ToolGrid
            title="TOOLS"
            description="Horem ipsum dolor sit amet, consectetur adipiscing elit."
            cardCount={4}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
