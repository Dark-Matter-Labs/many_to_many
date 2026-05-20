import { notFound } from 'next/navigation';
import Link from 'next/link';
import { sanityFetch } from '@/sanity/lib/client';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/sanity/lib/portable-text/pt-componets';
import styles from '@/components/JourneyHeroSection.module.css';
import { reflections } from '../../reflections/data';

export const revalidate = 3600;

const test_detail_query = `
  *[_type == "test" && slug.current == $slug][0]{
    _id,
    title,
    description,
    testNumber,
    whatWasTested,
    whatWasNotTested,
    linkedTools[]->{ _id, title, description, type, slug }
  }`;

const test_slugs_query = `
  *[_type == "test" && defined(slug.current)]{ "slug": slug.current }
`;

export async function generateStaticParams() {
  const tests = await sanityFetch({
    query: test_slugs_query,
    tags: ['test'],
  });
  return (tests || []).map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const test = await sanityFetch({
    query: `*[_type == "test" && slug.current == $slug][0]{
      title,
      description,
      testNumber
    }`,
    tags: ['test'],
    qParams: { slug },
  });

  if (!test) {
    return {
      title: 'Test Not Found - Many-to-Many System',
    };
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.manytomany.systems';
  const description =
    test.description ||
    `Test ${test.testNumber}: ${test.title} - learnings from developing the Many-to-Many system.`;

  return {
    title: `Test ${test.testNumber}: ${test.title} | Journey - Many-to-Many System`,
    description,
    alternates: {
      canonical: `/journey/test/${slug}`,
    },
    openGraph: {
      title: `Test ${test.testNumber}: ${test.title} | Many-to-Many System`,
      description,
      url: `/journey/test/${slug}`,
      images: [
        {
          url: `${siteUrl}/m2m_cover.png`,
          width: 1200,
          height: 630,
          alt: `Test ${test.testNumber}: ${test.title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Test ${test.testNumber}: ${test.title} | Many-to-Many System`,
      description,
      images: [`${siteUrl}/m2m_cover.png`],
    },
  };
}

export default async function TestDetailPage({ params }) {
  const { slug } = await params;
  const test = await sanityFetch({
    query: test_detail_query,
    qParams: { slug: slug },
    tags: ['test'],
  });

  if (!test) {
    notFound();
  }

  return (
    <>
      <Navbar activePage="Journey & Team" />

      {/* Header with back link */}
      <div className="mt-28 px-4 sm:px-20">
        <Link
          href="/journey/how-system"
          className="text-small text-blue-800 hover:underline"
        >
          ← How the Many-to-Many System was Developed?
        </Link>
      </div>

      {/* Main content */}
      <main className="font-galosText">
        {/* Title and description */}
        <section className={'heading ' + styles.hero}>
          <h1 className="heading-lg ml-4 text-center text-blue-800 sm:ml-40">
            Test {test.testNumber}: {test.title}
          </h1>
        </section>

        <section className="section-shadow mx-auto mb-2 flex justify-center rounded-2xl bg-white px-[2em] py-[4em]">
          <p className="text-regular text-grey-600 max-w-[600px]">
            {test.description}
          </p>
        </section>

        {/* What we tested and What we didn’t test sections */}
        <section className="container-main px-20 py-8">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
            {/* What we tested */}
            <div>
              <h2 className="heading-md mb-6 text-blue-800">What we tested</h2>
              <div className="max-w-none">
                <PortableText
                  value={test.whatWasTested}
                  components={portableTextComponents}
                />
              </div>
            </div>

            {/* What we didn’t test */}
            <div>
              <h2 className="heading-md mb-6 text-orange-800">
                What we didn’t test
              </h2>
              <div className="max-w-none">
                <PortableText
                  value={test.whatWasNotTested}
                  components={portableTextComponents}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Deep dive instruments */}
        {test.linkedTools && test.linkedTools.length > 0 && (
          <section className="container-main px-20 pt-8 pb-[160px]">
            <h2 className="heading-md mb-6 text-blue-800">Related tools:</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {test.linkedTools.map((tool) => (
                <ToolCard key={tool._id} {...tool} />
              ))}
            </div>
          </section>
        )}

        {/* Reflections from the Network — shown for tests with linked stories */}
        {(() => {
          const related = reflections.filter((r) =>
            r.relatedTests.includes(slug),
          );
          if (related.length === 0) return null;
          return (
            <section className="section-shadow mb-2 rounded-2xl bg-white py-[80px]">
              <div className="container-main">
                <h2 className="heading-lg mb-4 text-blue-800">
                  Reflections from the Network
                </h2>
                <p className="text-regular text-grey-600 mb-12 max-w-[600px]">
                  First-hand stories from people in the learning network who
                  lived and practised these ideas.
                </p>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {related.map((reflection) => (
                    <div
                      key={reflection.slug}
                      className="flex flex-col rounded-2xl bg-white px-8 py-8 shadow-[0_4px_16px_0_rgba(0,95,255,0.15)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_0_rgba(0,95,255,0.25)]"
                    >
                      <p className="text-small mb-3 font-semibold tracking-wide text-blue-800 uppercase">
                        {reflection.author} &middot; {reflection.role}
                      </p>
                      <h3 className="heading-md mb-4 flex-1 text-blue-800">
                        {reflection.title}
                      </h3>
                      <p className="text-regular text-grey-600 mb-6 line-clamp-3">
                        {reflection.excerpt}
                      </p>
                      <Link href={`/journey/reflections/${reflection.slug}`}>
                        <button className="text-regular text-grey-50 hover:bg-dark-blue flex w-full cursor-pointer flex-row items-center justify-center rounded-[20px] bg-blue-800 p-[10px] transition">
                          Read story →
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })()}
      </main>

      <Footer />
    </>
  );
}
