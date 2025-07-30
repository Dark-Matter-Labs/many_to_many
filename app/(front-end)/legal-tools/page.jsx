import { Navbar } from '@/components/Navbar'; // Reusing
import Footer from '@/components/Footer'; // Reusing
import LegalHero from '@/components/LegalHero';
import TopicAccordion from '@/components/TopicAccordion';
import styles from './legal-tools.module.css';

// Data for the accordion sections
const topicsData = [
  {
    id: 'tax-vat',
    title: 'TAX and VAT',
    tag: 'System Blockers',
    status: 'open', // This one will be open by default
  },
  {
    id: 'contracts',
    title: 'Contracts',
    tag: 'System Blockers',
    status: 'active',
  },
  {
    id: 'ip',
    title: 'Intellectual Property',
    tag: 'System Blockers',
    status: 'active',
  },
  {
    id: 'coming-soon-1',
    title: 'Another topic Coming soon!',
    tag: 'System Blockers',
    status: 'coming-soon',
  },
  {
    id: 'coming-soon-2',
    title: 'Another topic Coming soon!',
    tag: 'System Blockers',
    status: 'coming-soon',
  },
];

export default function LegalToolsPage() {
  return (
    <div>
      <Navbar activePage="Legal Topics" />
      <main>
        <LegalHero />
        <section className={`${styles.accordionSection} grid-background`}>
          <div className={styles.filterBar}>
            Filter by: phase, topic, readiness, blocker
          </div>
          <div className={styles.accordionList}>
            {topicsData.map((topic, index) => (
              <TopicAccordion
                key={topic.id}
                title={topic.title}
                tag={topic.tag}
                status={topic.status}
                isDefaultOpen={index === 0} // Only the first one is open
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
