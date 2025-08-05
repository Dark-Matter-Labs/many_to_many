import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import LearnHero from '@/components/LearnHero';
import ToolGrid from '@/components/ToolGrid';
import { sanityFetch } from '@/sanity/lib/client';
import styles from './learn.module.css';

const toolsQuery = `
*[_type == 'tool'] {...}
`;

export default async function LearnByYourselfPage() {
  const tools = await sanityFetch({
    query: toolsQuery,
    tags: ['story', 'layer'],
  });
  return (
    <div>
      <Navbar activePage="Tools" />
      <main>
        <LearnHero />

        <section
          className={'text-regular text-grey-600 ' + styles.introTextSection}
        >
          <p>
            You can learn by yourself, at your own pace, using the resources we
            have gathered for you. Whether you are a beginner or an experienced
            practitioner, our curated content will help you deepen your
            understanding of the Many-to-Many approach and its practical
            applications. Explore our resources, tools, and case studies to
            enhance your skills and knowledge.
          </p>
        </section>

        {/* --- PRACTICAL TOOLS SECTION --- */}
        <section className={`${styles.mainContent} grid-bg`}>
          <div className={styles.sectionHeader}>
            <h2 className="heading text-blue-800">
              Practical Tools and Examples
            </h2>
            <p className="text-regular text-grey-600 py-10">
              Repository of practical tools and examples to help you implement
              the Many-to-Many approach in your work.
            </p>
            <a href="#" className={styles.filterLink}>
              Filter by: topic, tool, typology, readiness
            </a>
          </div>

          <ToolGrid
            category="Now"
            tools={tools.filter((tool) => tool.availability === 'now')}
          />
          <ToolGrid
            category="Coming Soon"
            tools={tools.filter((tool) => tool.availability === 'coming_soon')}
          />
          <ToolGrid
            category="Next Six Months"
            tools={tools.filter((tool) => tool.availability === 'next')}
          />
          <ToolGrid
            category="Demand Led"
            tools={tools.filter((tool) => tool.availability === 'demand_led')}
          />
        </section>

        <div className={styles.divider}></div>
      </main>
      <Footer />
    </div>
  );
}
