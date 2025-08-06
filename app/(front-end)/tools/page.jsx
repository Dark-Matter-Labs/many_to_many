import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import LearnHero from '@/components/LearnHero';
import ToolGrid from '@/components/ToolGrid';
import { client, sanityFetch } from '@/sanity/lib/client';
import styles from './learn.module.css';

// TODO: only fetch needed data for this page
const toolsQuery = `
*[_type == 'tool'] {...}
`;

export const tools_paths_query = `
*[_type == "tool" && defined(slug.current)][].slug.current
`;

export async function generateStaticParams() {
  const slugs = await client.fetch(tools_paths_query);
  return slugs.map((slug) => ({ slug }));
}

export default async function LearnByYourselfPage() {
  const tools = await sanityFetch({
    query: toolsQuery,
    tags: ['tool', 'layer'],
  });
  return (
    <div>
      <Navbar activePage="Tools & Examples" />
      <main>
        <LearnHero />

        <section
          className={'text-regular text-grey-600 ' + styles.introTextSection}
        >
          <p>
            As part of our two year journey to develop the Many-to-Many System,
            we created many artifacts and learnt many lessons along the way.
            We’ve curated and distilled these into tools, examples and case
            studies.
          </p>
        </section>

        {/* --- PRACTICAL TOOLS SECTION --- */}
        <section className={`${styles.mainContent} grid-bg`}>
          <div className={styles.sectionHeader}>
            <h2 className="heading text-blue-800">
              Instruments for Implementation
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
