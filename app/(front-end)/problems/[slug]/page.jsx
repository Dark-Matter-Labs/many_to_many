import { notFound } from 'next/navigation';
import Link from 'next/link';
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
      alerts[]->{
        ...,
      },
      insights[]->{
        ...,
      },
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

  console.log('Fetched story:', story);

  if (!story) {
    notFound();
  }

  return (
    <div>
      <Navbar activePage="Navigate Challenges" />
      <main>
        <DetailHero title={story.title} />
        <div className={'py-20 ' + styles.subtitleWrapper}>
          <span className={styles.tag}>{story.type}</span>
          <p className="font-galosText text-lg">{story.description}</p>
        </div>
        <div className={'grid-bg ' + styles.contentWrapper}>
          <div className={styles.mainContent}>
            <p className="text-small">
              We’ve collected our key insights and alerts or areas to watch out
              for that relate to this challenge. There is much more detail
              inside the{' '}
              <Link className="underline" href="/M2M_System_Field_Guide.pdf">
                Field Guide
              </Link>{' '}
              should you wish to delve deeper.
            </p>
          </div>
          <div className={styles.sideContent}>
            <h3 className="heading-md">Alerts</h3>
            {story.layers.length > 0 &&
              story.layers.map(
                (layer) =>
                  layer.alerts?.length > 0 &&
                  layer.alerts.map((alert) => (
                    <Accordion
                      key={alert._id}
                      title={alert.title}
                      content={alert.description}
                    />
                  )),
              )}

            <h3 className="heading-md">Insights</h3>
            {story.layers.length > 0 &&
              story.layers.map(
                (layer) =>
                  layer.insights?.length > 0 &&
                  layer.insights.map((insight) => (
                    <Accordion
                      key={insight._id}
                      title={insight.title}
                      content={insight.description}
                    />
                  )),
              )}
          </div>
        </div>

        <section className={`${styles.section}`}>
          <h2 className={'heading-lg text-blue-800 ' + styles.sectionTitle}>
            Layers of the Many-to-Many System linked to this challenge
          </h2>
          <div className={styles.cardGrid}>
            {story.layers?.length > 0 ? (
              story.layers.map((layer) => (
                <InsightCard key={layer._id} {...layer} />
              ))
            ) : (
              <p className="text-small text-grey-600">
                No related layers found.
              </p>
            )}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={'heading-lg text-blue-800 ' + styles.sectionTitle}>
            Tools and Examples linked to this Challenge
          </h2>
          <p className="text-small text-grey-600">
            Here are some tools we used to tackle this problem. They might help
            you in your own work.
          </p>
          <div className={styles.cardGrid}>
            {story.tools?.length > 0 ? (
              story.tools.map((tool) => <ToolCard key={tool._id} {...tool} />)
            ) : (
              <p className="text-small text-grey-600">
                No related tools found.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
