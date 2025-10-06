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

        <LearnBasicsSection />
      </main>
      <Footer />
    </div>
  );
}
