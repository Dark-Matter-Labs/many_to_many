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
      <Navbar activePage="Legal Considerations" />
      <main>
        <LegalHero />
        <div className="mx-auto my-20 max-w-4xl px-4">
          <p className="text-regular pb-4 text-gray-600">
            Complex collaborations bring together various institutions and
            individuals through diverse legal forms, roles, and relationships
            into what we call Legal Architecture.
          </p>
          <p className="text-regular pb-4 text-gray-600">
            The legal architecture in any complex collaboration will be
            distinct, depending on the number and nature of partners,
            institutional norms, geographical spread, and more. There will
            normally be a range of interrelating forms and relationships, with
            people holding various legal roles within them, creating a more
            complex environment than a traditional legal form.
          </p>
          <h2 className="heading-md text-blue-800">
            Insights, resources and tools
          </h2>
          <p className="text-regular pb-4 text-gray-600">
            Our observation was that many readily available legal forms and
            relationships impose 'deep codes' that misalign with a
            collaboration's intended governance, particularly concerning risk
            and power. While collaborations may democratically design many
            operational aspects, the underlying legal architecture—crucial for
            how governance is lived—is rarely discussed in the same detail.{' '}
          </p>
          <p className="text-regular pb-4 text-gray-600">
            We aimed to create a Legal Architecture that invited all partners
            into transparent, mission-aligned legal relationships, avoiding
            separate or deep code-misaligned agreements. We also experimented
            whether it was possible to nudge deep codes shifts in ‘brown field’
            environments where existing legal architecture would prevent the use
            of a ‘new route’. This included testing how the deep codes we
            identified could be brought into existing legal forms and
            relationships.
          </p>
          <p className="text-regular pb-4 text-black">
            Below are our lessons and insights developed from this work. [COMING
            SOON]
          </p>
        </div>
        {/* <section className={`${styles.accordionSection} grid-bg`}>
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
        </section> */}
      </main>
      <Footer />
    </div>
  );
}
