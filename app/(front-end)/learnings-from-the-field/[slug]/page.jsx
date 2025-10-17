import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { sanityFetch } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '@/sanity/lib/image';
import { portableTextComponents } from '@/sanity/lib/portable-text/pt-componets';

export const revalidate = 3600;

const caseStudyQuery = `
  *[_type == "case_study" && slug.current == $slug][0]{
    _id,
    title,
    context,
    image,
    sections[]{ title, body },
    "prev": *[_type=="case_study" && title < ^.title] | order(title desc)[0]{ "slug": slug.current },
    "next": *[_type=="case_study" && title > ^.title] | order(title asc)[0]{ "slug": slug.current }
  }`;

const caseStudySlugsQuery = `
  *[_type == "case_study" && defined(slug.current)]{ "slug": slug.current }
`;

export async function generateStaticParams() {
  const slugs = await sanityFetch({
    query: caseStudySlugsQuery,
    tags: ['case_study'],
  });
  return (slugs || []).map((s) => ({ slug: s.slug }));
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const data = await sanityFetch({
    query: caseStudyQuery,
    qParams: { slug },
    tags: ['case_study'],
  });

  if (!data) return notFound();

  return (
    <div>
      <Navbar activePage="Learnings from the Field" />
      <main>
        {/* Hero with subtle gradient and shadowed container */}
        <section className="mt-28 mb-2">
          <div className="mx-auto">
            <div className="my-2 h-[37px] px-6 py-2">
              <Link
                href="/learnings-from-the-field"
                className="text-small font-bold text-blue-800"
              >
                ← Learnings from the Field
              </Link>
            </div>
            <div className="bg-[linear-gradient(180deg,rgba(255,235,185,1)_0%,rgba(255,255,255,1)_100%)]">
              <h1 className="heading ml-40 max-w-4xl px-6 py-10 text-blue-800">
                {data.title}
              </h1>
            </div>
          </div>
        </section>

        <section className="section-shadow mx-auto mb-2 flex justify-center rounded-2xl bg-white px-[2em] py-[4em]">
          {data.context && (
            <p className="text-regular text-grey-600 max-w-[700px]">
              Context: {data.context}
            </p>
          )}
        </section>

        <section className="grid-bg py-12">
          <div className="container-main">
            {(data.sections || []).map((section, index) => (
              <div
                key={section.title}
                className="mx-auto mb-16 grid max-w-[1100px] grid-cols-1 gap-x-20 gap-y-4 sm:grid-cols-2"
              >
                <div>
                  {section.title && (
                    <h2 className="heading-md mb-2 text-blue-800">
                      {section.title}
                    </h2>
                  )}
                </div>
                <div className="prose max-w-none">
                  {index === 0 && data.image && (
                    <div className="relative mx-auto mb-10 h-[260px] w-[420px]">
                      <Image
                        src={urlForImage(data.image)}
                        alt={data.title}
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

        <div className="container-main mb-20 flex items-center justify-between">
          {data.prev?.slug ? (
            <Link
              href={`/learnings-from-the-field/${data.prev.slug}`}
              className="text-small text-blue-800"
            >
              ← Previous
            </Link>
          ) : (
            <span />
          )}
          {data.next?.slug ? (
            <Link
              href={`/learnings-from-the-field/${data.next.slug}`}
              className="text-small text-blue-800"
            >
              Next →
            </Link>
          ) : null}
        </div>
      </main>
      <Footer />
    </div>
  );
}
