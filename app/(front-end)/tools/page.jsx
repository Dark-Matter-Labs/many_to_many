import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import LearnHero from '@/components/LearnHero';
import ToolsBrowser from '@/components/ToolsBrowser';
import { sanityFetch } from '@/sanity/lib/client';
import styles from './learn.module.css';

export const metadata = {
  title: 'Tools & Examples - Many-to-Many System',
};

export const revalidate = 3600;

const toolsQuery = `
*[_type == 'tool'] | order(coalesce(priority, 9999) asc, title asc){
  _id,
  title,
  description,
  availability,
  readiness,
  test_status,
  coverImage,
  priority,
  "type": { "value": type, "title": select(
    type == "tool" => "Tool",
    type == "case_study" => "Case Study",
    type == "example" => "Example",
    null
  )},
  "slug": slug.current
}`;

// No build-time param generation required for this index page

export default async function LearnByYourselfPage() {
  const tools = await sanityFetch({
    query: toolsQuery,
    tags: ['tool'],
  });
  return (
    <div>
      <Navbar activePage="Tools & Examples" />
      <main>
        <LearnHero />

        <section
          className={
            'text-regular text-grey-600 section-shadow-tb mb-2 ' +
            styles.introTextSection
          }
        >
          <div className="container-main flex justify-center">
            <p>
              The tools and resources on this page emerged from our work and we
              offer them to help translate the concepts of the Many-to-Many
              System into tangible action. Please consider them starting
              points—templates to adapt, processes to try, or examples to test
              in your own collaborative work
            </p>
          </div>
        </section>

        {/* --- PRACTICAL TOOLS SECTION --- */}
        <section className={`grid-bg`}>
          <ToolsBrowser
            tools={tools}
            className={styles.mainContent + ' container-main'}
          />
        </section>

        <div className={styles.divider}></div>
      </main>
      <Footer />
    </div>
  );
}
