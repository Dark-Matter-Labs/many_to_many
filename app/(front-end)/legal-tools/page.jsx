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
        <div className="mx-auto my-20 max-w-4xl px-4">
          <p className="text-regular text-gray-600">
            Welcome to the Legal Tools section! Here, you can find essential
            legal topics that are crucial for the smooth operation of our
            platform. Each topic is designed to address specific legal needs and
            challenges, ensuring that we maintain compliance and protect our
            community.
          </p>
        </div>
        <section className={`${styles.accordionSection} grid-bg`}>
          <div className={'text-regular ' + styles.filterBar}>
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
