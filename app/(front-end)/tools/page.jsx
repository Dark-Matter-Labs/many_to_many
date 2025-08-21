import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import LearnHero from '@/components/LearnHero';
import ToolsBrowser from '@/components/ToolsBrowser';
import { client, sanityFetch } from '@/sanity/lib/client';
import styles from './learn.module.css';

const toolsQuery = `
*[_type == 'tool']{
  _id,
  title,
  availability,
  readiness,
  test_status,
  "type": {
    "value": type,
    "title": select(
      type == "tool" => "Tool",
      type == "case_study" => "Case Study",
      type == "example" => "Example",
      null
    )
  },
  "slug": slug.current,
  description
}
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
          className={
            'text-regular text-grey-600 section-shadow mb-2 ' +
            styles.introTextSection
          }
        >
          <p>
            As part of our two year journey to develop the Many-to-Many System,
            we created many artifacts and learnt many lessons along the way.
            We’ve curated and distilled these into tools, examples and case
            studies.
          </p>
        </section>

        {/* --- PRACTICAL TOOLS SECTION --- */}
        <section className={`grid-bg`}>
          <ToolsBrowser tools={tools} className={styles.mainContent} />
        </section>

        <div className={styles.divider}></div>
      </main>
      <Footer />
    </div>
  );
}
