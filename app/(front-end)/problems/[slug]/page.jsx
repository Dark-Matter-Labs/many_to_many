import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/lib/client';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import DetailHero from '@/components/DetailHero';
import Accordion from '@/components/Accordion';
import InsightCard from '@/components/InsightCard';
import ToolCard from '@/components/ToolCard';
import styles from './specific-problem.module.css';

const story_detail_query = `
  *[_type == "story" && slug.current == $slug][0] {
    ...,
    layers[]->{
      ...,
    },
    tools[]->{
      ...,
    },
  }
  `;

export default async function SpecificProblemPage({ params }) {
  const { slug } = await params;
  const story = await sanityFetch({
    query: story_detail_query,
    tags: ['story'],
    qParams: { slug: slug },
  });

  if (!story) {
    notFound();
  }

  return (
    <div>
      <Navbar activePage="Navigate Challenges" />
      <main>
        <DetailHero title={story.title} />
        <div className={'py-20 ' + styles.subtitleWrapper}>
          <span className={styles.tag}>System Blockers</span>
          <p className="font-galosText text-lg">{story.description}</p>
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
            Related Layers
          </h2>
          <p className="text-small text-grey-600">Layer linked to this.</p>
          <div className={styles.cardGrid}>
            {story.layers.map((layer) => (
              <InsightCard key={layer._id} {...layer} />
            ))}
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
            {story.tools.map((tool) => (
              <ToolCard key={tool._id} {...tool} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
