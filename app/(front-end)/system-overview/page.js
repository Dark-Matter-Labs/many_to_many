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
        <HeroSection />

        <section className={styles.introTextSection}>
          <p>
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
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
