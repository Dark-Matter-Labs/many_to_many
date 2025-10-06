import { Navbar } from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LearnBasicsSection from '@/components/LearnBasicsSection';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function OverviewPage() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar activePage="Discover the System" />
      <main>
        <HeroSection title="Discover the System" />
        <section
          className={
            'text-regular section-shadow mb-2 ' + styles.introTextSection
          }
        >
          <div className="container-main flex justify-center">
            <p>
              The Many-to-Many System distills key learnings from our two-year
              exploration involving numerous partners who contributed insights
              through building, prototyping, and testing.
            </p>
          </div>
        </section>

        <LearnBasicsSection />
      </main>
      <Footer />
    </div>
  );
}
