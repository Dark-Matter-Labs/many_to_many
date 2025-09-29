import { notFound } from 'next/navigation';
import Link from 'next/link';
import { sanityFetch } from '@/sanity/lib/client';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import { PortableText } from '@portabletext/react';

export const revalidate = 3600;

const test_detail_query = `
  *[_type == "test" && slug.current == $slug][0] {
    ...,
    linkedTools[]->{
      ...,
      coverImage,
    }
  }
`;

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

  console.log('Test data:', test);

  return (
    <>
      <Navbar activePage="Journey" />

      {/* Header with back link */}
      <div className="px-20 pt-8">
        <Link
          href="/journey"
          className="text-small text-blue-800 hover:underline"
        >
          ← Many-to-Many Journey
        </Link>
      </div>

      {/* Main content */}
      <main className="font-galosText">
        {/* Title and description */}
        <section className="px-20 py-8">
          <h1 className="heading-lg mb-6 text-center text-blue-800">
            {test.title}
          </h1>
          <p className="text-regular mx-auto max-w-4xl text-center text-blue-800">
            {test.description}
          </p>
        </section>

        {/* What we tested and What we didn't test sections */}
        <section className="px-20 py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* What we tested */}
            <div>
              <h2 className="heading-md mb-6 text-blue-800">What we tested</h2>
              <div className="prose prose-blue max-w-none">
                <PortableText value={test.whatWasTested} />
              </div>
            </div>

            {/* What we didn't test */}
            <div>
              <h2 className="heading-md mb-6 text-blue-800">
                What we didn't test
              </h2>
              <div className="prose prose-blue max-w-none">
                <PortableText value={test.whatWasNotTested} />
              </div>
            </div>
          </div>
        </section>

        {/* Deep dive instruments */}
        {test.linkedTools && test.linkedTools.length > 0 && (
          <section className="px-20 py-8">
            <h2 className="heading-md mb-6 text-blue-800">
              Deep dive instruments(s):
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {test.linkedTools.map((tool) => (
                <ToolCard key={tool._id} {...tool} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
