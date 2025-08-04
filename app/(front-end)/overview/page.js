import { Navbar } from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import QuotesSection from '@/components/QuotesSection';
import LearnBasicsSection from '@/components/LearnBasicsSection';
import NoteCloud from '@/components/NoteCloud';
import FieldGuideSection from '@/components/FieldGuideSection';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function OverviewPage() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar activePage="System Overview" />
      <main>
        <HeroSection title="Overview" />
        <section
          className={'font-galosText text-md ' + styles.introTextSection}
        >
          <p>
            The Many-to-Many System distills two years of learning, prototyping,
            research, and practice. It was a labour of love, aiming to honor the
            contributions of many collaborators and offer something we hope is
            valuable to others.
          </p>
        </section>

        <QuotesSection />

        <LearnBasicsSection />

        <NoteCloud />

        <FieldGuideSection />
      </main>
      <Footer />
    </div>
  );
}
