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
    sections[]{
      title,
      body
    },
    "prev": *[_type=="case_study" && title < ^.title] | order(title desc)[0]{ "slug": slug.current },
    "next": *[_type=="case_study" && title > ^.title] | order(title asc)[0]{ "slug": slug.current }
  }
`;

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
        <section className={'heading'}>
          <div className="mx-10 my-6">
            <Link
              href="/community"
              className="text-small font-bold text-blue-800"
            >
              ← Learnings from the Field
            </Link>
          </div>
          <h1 className="ml-40 text-blue-800">{data.title}</h1>
        </section>

        <section className="grid-bg px-20 py-12">
          {data.image && (
            <div className="relative mx-auto mb-10 h-[260px] w-[420px]">
              <Image
                src={urlForImage(data.image)}
                alt={data.title}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          )}
          {data.context && (
            <div className="section-shadow mx-auto mb-10 max-w-[900px] rounded-2xl bg-white px-10 py-10">
              <p className="text-regular text-grey-600">{data.context}</p>
            </div>
          )}

          {(data.sections || []).map((section) => (
            <div key={section.title} className="mx-auto mb-14 max-w-[1000px]">
              {section.title && (
                <h2 className="heading-md mb-2 text-blue-800">
                  {section.title}
                </h2>
              )}
              <div className="prose max-w-none">
                <PortableText
                  value={section.body}
                  components={portableTextComponents}
                />
              </div>
            </div>
          ))}
        </section>

        <div className="mx-20 mb-20 flex items-center justify-between">
          {data.prev?.slug ? (
            <Link
              href={`/community/${data.prev.slug}`}
              className="text-small text-blue-800"
            >
              ← Previous
            </Link>
          ) : (
            <span />
          )}
          {data.next?.slug ? (
            <Link
              href={`/community/${data.next.slug}`}
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
