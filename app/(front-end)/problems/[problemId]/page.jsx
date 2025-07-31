import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import DetailHero from '@/components/DetailHero';
import Accordion from '@/components/Accordion';
import InsightCard from '@/components/InsightCard';
import ToolCard from '@/components/ToolCard';
import styles from './specific-problem.module.css';

export default function SpecificProblemPage() {
  return (
    <div>
      <Navbar activePage="Problems" />
      <main>
        <DetailHero title="Problems / The Stuck Start" />
        <div className={'py-20 ' + styles.subtitleWrapper}>
          <span className={styles.tag}>System Blockers</span>
          <p className="font-galosText text-lg">
            There was lots of potential early on but we couldn’t quite make the
            most of it. We lost the initial trust, and the confusion led to the
            energy and conditions eroding.
          </p>
        </div>
        <div className={'grid-bg ' + styles.contentWrapper}>
          <div className={styles.mainContent}>
            <p className="text-small">
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <p className="text-small pt-4">
              <strong>
                What we tried and it could be useful for you as well:
              </strong>
            </p>
            <p className="text-small pt-4">
              Oditio mattis. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra.
            </p>
          </div>
          <div className={styles.sideContent}>
            <Accordion title="Alert 1" />
            <Accordion title="Alert 2" />
          </div>
        </div>

        <section className={`${styles.section}`}>
          <h2 className={'heading-lg text-blue-800 ' + styles.sectionTitle}>
            Insights
          </h2>
          <p className="text-small text-grey-600">
            Here are some insights we gathered while working on this problem.
            They might help you understand the context better or inspire your
            own solutions.
          </p>
          <div className={styles.cardGrid}>
            <InsightCard />
            <InsightCard />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={'heading-lg text-blue-800 ' + styles.sectionTitle}>
            Tools
          </h2>
          <p className="text-small text-grey-600">
            Here are some tools we used to tackle this problem. They might help
            you in your own work.
          </p>
          <div className={styles.cardGrid}>
            <ToolCard />
            <ToolCard />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
