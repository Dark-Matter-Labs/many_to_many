import { notFound } from 'next/navigation';
import Link from 'next/link';
import { sanityFetch } from '@/sanity/lib/client';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import InsightCard from '@/components/InsightCard';
import ToolCard from '@/components/ToolCard';
import styles from './specific-problem.module.css';
import igStyles from '@/components/interactive-guide/InteractiveGuide.module.css';

export const revalidate = 3600;

const story_detail_query = `
  *[_type == "story" && slug.current == $slug][0] {
    ...,
    "type": {
    "value": type,
    "title": select(
      type == "getting_started" => "Getting started",
      type == "staying_focused" => "Staying focused",
      type == "withstanding_challenge" => "Withstanding challenge",
      null
    )
  },
    layers[]->{
      ...,
      "icon": image.asset->.url,
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
     "prev": *[_type=="story" && title < ^.title] | order(title desc)[0]{ "slug": slug.current },
     "next": *[_type=="story" && title > ^.title] | order(title asc)[0]{ "slug": slug.current }
  }
  `;

const story_slugs_query = `
  *[_type == "story" && defined(slug.current)]{ "slug": slug.current }
`;

export async function generateStaticParams() {
  const stories = await sanityFetch({ query: story_slugs_query, tags: ['story'] });
  return (stories || []).map((s) => ({ slug: s.slug }));
}

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
        <div className={styles.hero}>
          <button className={'text-small ml-40 font-bold text-blue-800'}>
            <Link href="/problems">← NAVIGATE CHALLENGES</Link>
          </button>
        </div>
        {/* <DetailHero
          title={story.title}
          nextLink={story.next}
          prevLink={story.prev}
        /> */}
        <div className={'py-20 ' + styles.subtitleWrapper}>
          <div className={'grid grid-cols-1 gap-8 sm:grid-cols-2'}>
            <div>
              <span className={styles.tag}>{story.type.title}</span>
              <h2 className="heading-lg text-blue-800">{story.title}</h2>
            </div>
            <p className="heading-md text-grey-600">{story.description}</p>
          </div>
        </div>
        <div className="section-shadow">
          <div className={'' + styles.contentWrapper}>
            <div className={styles.introText}>
              <p className="text-small">
                We’ve collected our key insights and alerts or areas to watch
                out for that relate to this challenge. There is much more detail
                inside the{' '}
                <Link className="underline" href="/M2M_System_Field_Guide.pdf">
                  Field Guide
                </Link>{' '}
                should you wish to delve deeper.
              </p>
            </div>
            <section className={styles.infoSection}>
              <h3 className="heading-md text-blue-800">Alerts</h3>
              <p className="text-small text-grey-600">
                Be aware of these potential pitfalls or challenges related to
                this.
              </p>
              <div className={styles.infoListTwoCol}>
                {story.layers && story.layers.length > 0 ? (
                  story.layers
                    .flatMap((layer) => layer.alerts || [])
                    .map((alert) => (
                      <div key={alert._id} className={igStyles.alertCard}>
                        <h4 className="text-regular pb-2 text-blue-800">
                          {alert.title}
                        </h4>
                        <p className="text-small text-grey-600">
                          {alert.description}
                        </p>
                      </div>
                    ))
                ) : (
                  <p className="text-small text-grey-600">
                    No alerts available.
                  </p>
                )}
              </div>
            </section>

            <section className={styles.infoSection}>
              <h3 className="heading-md text-blue-800">Insights</h3>
              <p className="text-small text-grey-600">
                The key insights from this challenge.
              </p>
              <div className={styles.infoListTwoCol}>
                {story.layers && story.layers.length > 0 ? (
                  story.layers
                    .flatMap((layer) => layer.insights || [])
                    .map((insight) => (
                      <div key={insight._id} className={igStyles.insightCard}>
                        <h4 className="text-regular pb-2 text-blue-800">
                          {insight.title}
                        </h4>
                        <p className="text-small text-grey-600">
                          {insight.description}
                        </p>
                      </div>
                    ))
                ) : (
                  <p className="text-small text-grey-600">
                    No insights available.
                  </p>
                )}
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={'heading-lg text-blue-800 ' + styles.sectionTitle}>
                Tools and Examples linked to this Challenge
              </h2>
              <p className="text-small text-grey-600">
                Here are some tools we used to tackle this problem. They might
                help you in your own work.
              </p>
              <div className={styles.toolsGrid}>
                {story.tools?.length > 0 ? (
                  story.tools.map((tool) => (
                    <ToolCard key={tool._id} {...tool} />
                  ))
                ) : (
                  <p className="text-small text-grey-600">
                    No related tools found.
                  </p>
                )}
              </div>
            </section>
          </div>
        </div>

        <section
          className={`${styles.section} grid grid-cols-1 gap-8 sm:grid-cols-2`}
        >
          <h4 className={'heading-md text-blue-800 ' + styles.sectionTitle}>
            Layers of the Many-to-Many System linked to this challenge
          </h4>
          <div className={styles.layersGrid}>
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
      </main>
      <Footer />
    </div>
  );
}
