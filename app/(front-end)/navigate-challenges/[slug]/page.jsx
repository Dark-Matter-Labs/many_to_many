import { notFound } from 'next/navigation';
import Link from 'next/link';
import { sanityFetch } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/sanity/lib/portable-text/pt-componets';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import styles from './specific-problem.module.css';

export const revalidate = 3600;

const story_detail_query = `
  *[_type == "story" && slug.current == $slug][0]{
    title,
    description,
    intro,
    sections[]{ title, body },
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
      _id,
      "icon": image,
      alerts[]->{ _id, title, description },
      insights[]->{ _id, title, description }
    },
    tools[]->{ _id, title, description, type, slug },
    "prev": *[_type=="story" && title < ^.title] | order(title desc)[0]{ "slug": slug.current },
    "next": *[_type=="story" && title > ^.title] | order(title asc)[0]{ "slug": slug.current }
  }`;

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
        <div className={'text-small px-20 pt-30 pb-4 text-blue-800'}>
          <Link href="/navigate-challenges">← Navigate Challanges</Link>
        </div>
        <div className={styles.hero}>
          <h2 className="heading ml-8 max-w-xl text-blue-800 sm:ml-40">
            {story.title}
          </h2>
        </div>
        <div className={'w-full flex justify-center bg-blue-300 py-10'}>
          <div>
            <span
              className={
                styles.tag + ' font-galosText bg-blue-400 text-blue-800'
              }
            >
              {story.type.title}
            </span>
            <p className="heading-md text-grey-50 mt-4 max-w-2xl">
              {story.description}
            </p>
          </div>
        </div>
        <div className="section-shadow grid-bg pt-10">
          <div className={'container-main'}>
            <div className="mx-auto max-w-2xl pb-10">
              {story.intro && (
                <p className="text-regular max-w-[700px] text-blue-800">
                  {story.intro}
                </p>
              )}
            </div>
            <section className="py-12">
              <div>
                {(story.sections || []).map((section, index) => (
                  <div
                    key={section.title}
                    className="mx-auto my-16 grid grid-cols-1 gap-x-20 gap-y-4 sm:grid-cols-2"
                  >
                    <div>
                      {section.title && (
                        <h2 className="heading-md mb-2 text-blue-800">
                          {section.title}
                        </h2>
                      )}
                    </div>
                    <div className="prose max-w-none">
                      {index === 0 && story.image && (
                        <div className="relative mx-auto mb-10 h-[260px] w-[420px]">
                          <Image
                            src={urlForImage(data.image)}
                            alt={story.title}
                            fill
                            style={{ objectFit: 'contain' }}
                          />
                        </div>
                      )}
                      <PortableText
                        value={section.body}
                        components={portableTextComponents}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
        <div className="container-main pt-[160px] pb-20">
          <section>
            <div className="mb-12 sm:flex sm:justify-between">
              <h2
                className={
                  'heading-lg max-w-xs text-blue-800 ' + styles.sectionTitle
                }
              >
                Tools and Examples linked to this Challenge
              </h2>
              <p className="text-small text-grey-600 max-w-lg">
                Moving from a powerful vision to a shared, actionable plan
                requires more than just good intentions—it requires practical
                scaffolding. The tools and examples below are designed to help
                with this critical transition. They offer tangible starting
                points for co-creating your initial strategy, defining roles,
                and building the momentum needed to move forward together.
              </p>
            </div>

            <div className={styles.toolsGrid}>
              {story.tools?.length > 0 ? (
                story.tools.map((tool) => <ToolCard key={tool._id} {...tool} />)
              ) : (
                <p className="text-small text-grey-600">
                  No related tools found.
                </p>
              )}
            </div>
          </section>
        </div>
        <div className="grid-bg py-[160px]">
          <section
            className={'container-main grid grid-cols-1 gap-8 sm:grid-cols-2'}
          >
            <div>
              <h3 className="heading-md text-blue-800">Alerts</h3>
              <p className="text-small text-grey-600 mb-8">
                Alerts are the critical 'watch-outs'—the common challenges,
                tensions, complexities, and areas where we learned special
                attention is required.
              </p>
              <div>
                {story.layers && story.layers.length > 0 ? (
                  story.layers
                    .flatMap((layer) => layer.alerts || [])
                    .map((alert) => (
                      <details
                        key={alert._id}
                        className={styles.collapsible + ' mb-4'}
                      >
                        <summary
                          className={
                            styles.collapsibleSummary +
                            ' ' +
                            styles.alertSummary
                          }
                          aria-controls={`alert-content-${alert._id}`}
                        >
                          <span className="text-regular text-blue-800">
                            {alert.title}
                          </span>
                          <span
                            className={styles.chevron}
                            aria-hidden="true"
                          ></span>
                        </summary>
                        <div
                          id={`alert-content-${alert._id}`}
                          className={styles.collapsibleContent}
                        >
                          <p className="text-small text-grey-600">
                            {alert.description}
                          </p>
                        </div>
                      </details>
                    ))
                ) : (
                  <p className="text-small text-grey-600">
                    No alerts available.
                  </p>
                )}
              </div>
            </div>
            <div>
              <h3 className="heading-md text-blue-800">Insights</h3>
              <p className="text-small text-grey-600 mb-8">
                Insights are the key discoveries that emerged from our work and
                point to promising pathways and core principles.
              </p>
              <div>
                {story.layers && story.layers.length > 0 ? (
                  story.layers
                    .flatMap((layer) => layer.insights || [])
                    .map((insight) => (
                      <details
                        key={insight._id}
                        className={styles.collapsible + ' mb-4'}
                      >
                        <summary
                          className={
                            styles.collapsibleSummary +
                            ' ' +
                            styles.insightSummary
                          }
                          aria-controls={`insight-content-${insight._id}`}
                        >
                          <span className="text-regular text-blue-800">
                            {insight.title}
                          </span>
                          <span
                            className={styles.chevron}
                            aria-hidden="true"
                          ></span>
                        </summary>
                        <div
                          id={`insight-content-${insight._id}`}
                          className={styles.collapsibleContent}
                        >
                          <p className="text-small text-grey-600">
                            {insight.description}
                          </p>
                        </div>
                      </details>
                    ))
                ) : (
                  <p className="text-small text-grey-600">
                    No insights available.
                  </p>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
