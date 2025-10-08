import { notFound } from 'next/navigation';
import Link from 'next/link';
import { sanityFetch } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/sanity/lib/portable-text/pt-componets';
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
  const stories = await sanityFetch({
    query: story_slugs_query,
    tags: ['story'],
  });
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
            <Link href="/problems">← Navigate Challanges</Link>
          </button>
        </div>
        <div className={'py-10 ' + styles.subtitleWrapper}>
          <div className={'grid grid-cols-1 gap-8 sm:grid-cols-2'}>
            <div>
              <span className={styles.tag + ' font-galosText'}>
                {story.type.title}
              </span>
              <h2 className="heading-lg text-blue-800">{story.title}</h2>
            </div>
            <p className="heading-md text-grey-600">{story.description}</p>
          </div>
        </div>
        <div className="section-shadow">
          <div className={'' + styles.contentWrapper}>
            <div className={styles.introText}>
              <h3 className="heading-md text-blue-800">
                {' '}
                Connecting Learnings to this Challenge
              </h3>
              <p className="text-small">
                Navigating the crucial transition from an inspiring vision to a
                concrete, actionable plan is where many collaborations stall.
                The following insights and alerts, drawn from our work, offer
                patterns and considerations that can help maintain momentum and
                build the shared ownership needed to move forward together.
              </p>
            </div>
            <div className="mx-auto max-w-3xl pb-10">
              <PortableText
                value={story.details}
                components={portableTextComponents}
              />
            </div>
            <section className={styles.infoSection}>
              <h3 className="heading-md text-blue-800">Alerts</h3>
              <p className="text-small text-grey-600">
                Alerts are the critical 'watch-outs'—the common challenges,
                tensions, complexities, and areas where we learned special
                attention is required.
              </p>
              <div className={styles.infoListTwoCol}>
                {story.layers && story.layers.length > 0 ? (
                  story.layers
                    .flatMap((layer) => layer.alerts || [])
                    .map((alert) => (
                      <details key={alert._id} className={styles.collapsible}>
                        <summary
                          className={styles.collapsibleSummary + ' ' + styles.alertSummary}
                          aria-controls={`alert-content-${alert._id}`}
                        >
                          <span className="text-regular text-blue-800">{alert.title}</span>
                          <span className={styles.chevron} aria-hidden="true"></span>
                        </summary>
                        <div
                          id={`alert-content-${alert._id}`}
                          className={styles.collapsibleContent}
                        >
                          <div className={igStyles.alertCard}>
                            <h4 className="text-regular pb-2 text-blue-800">{alert.title}</h4>
                            <p className="text-small text-grey-600">{alert.description}</p>
                          </div>
                        </div>
                      </details>
                    ))
                ) : (
                  <p className="text-small text-grey-600">No alerts available.</p>
                )}
              </div>
            </section>

            <section className={styles.infoSection}>
              <h3 className="heading-md text-blue-800">Insights</h3>
              <p className="text-small text-grey-600">
                Insights are the key discoveries that emerged from our work and
                point to promising pathways and core principles.
              </p>
              <div className={styles.infoListTwoCol}>
                {story.layers && story.layers.length > 0 ? (
                  story.layers
                    .flatMap((layer) => layer.insights || [])
                    .map((insight) => (
                      <details key={insight._id} className={styles.collapsible}>
                        <summary
                          className={styles.collapsibleSummary + ' ' + styles.insightSummary}
                          aria-controls={`insight-content-${insight._id}`}
                        >
                          <span className="text-regular text-blue-800">{insight.title}</span>
                          <span className={styles.chevron} aria-hidden="true"></span>
                        </summary>
                        <div
                          id={`insight-content-${insight._id}`}
                          className={styles.collapsibleContent}
                        >
                          <div className={igStyles.insightCard}>
                            <h4 className="text-regular pb-2 text-blue-800">{insight.title}</h4>
                            <p className="text-small text-grey-600">{insight.description}</p>
                          </div>
                        </div>
                      </details>
                    ))
                ) : (
                  <p className="text-small text-grey-600">No insights available.</p>
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
