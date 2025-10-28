import { Navbar } from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LearnBasicsSection from '@/components/LearnBasicsSection';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export const metadata = {
  title: 'Discover the System - Many-to-Many System',
};

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
              The Many-to-Many System is a collection of patterns, frameworks,
              and tools to support ways of thinking, organising, and
              governing. This page introduces the system&apos;s key layers, each
              designed to provide a new lens for making sense of and shaping
              your own collaborative environment.
            </p>
          </div>
        </section>

        <LearnBasicsSection />
      </main>
      <Footer />
    </div>
  );
}
