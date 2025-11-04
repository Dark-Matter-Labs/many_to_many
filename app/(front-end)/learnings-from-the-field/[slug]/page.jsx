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

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const caseStudy = await sanityFetch({
    query: `*[_type == "case_study" && slug.current == $slug][0]{
      title,
      context,
      image
    }`,
    tags: ['case_study'],
    qParams: { slug },
  });

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found - Many-to-Many System',
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.manytomany.systems';
  const imageUrl = caseStudy.image
    ? urlForImage(caseStudy.image, { width: 1200, height: 630 })
    : `${siteUrl}/m2m_cover.png`;

  // Extract description from context (first block of text)
  const description =
    (caseStudy.context &&
      typeof caseStudy.context === 'object' &&
      caseStudy.context[0]?.children?.[0]?.text) ||
    `Learn from ${caseStudy.title} - a case study in Many-to-Many systems and complex collaborations.`;

  return {
    title: `${caseStudy.title} | Learnings from the Field - Many-to-Many System`,
    description,
    alternates: {
      canonical: `/learnings-from-the-field/${slug}`,
    },
    openGraph: {
      title: `${caseStudy.title} | Many-to-Many System`,
      description,
      url: `/learnings-from-the-field/${slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${caseStudy.title} | Many-to-Many System`,
      description,
      images: [imageUrl],
    },
  };
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
        <section className="mb-2 pt-28">
          <div className="mx-auto">
            <div className="mb-2 bg-[linear-gradient(180deg,rgba(255,235,185,1)_0%,rgba(255,255,255,1)_100%)] px-6 py-2">
              <Link
                href="/learnings-from-the-field"
                className="text-small text-blue-800"
              >
                ← Learnings from the Field
              </Link>
            </div>
            <div className="">
              <h1 className="heading max-w-xl px-6 py-10 text-blue-800 sm:ml-20">
                {data.title}
              </h1>
            </div>
          </div>
        </section>

        <section className="section-shadow mx-auto mb-2 flex justify-center bg-blue-800 px-[2em] py-[4em]">
          {data.context && (
            <div className="max-w-[700px]">
              <span className="text-regular text-white">Context:</span>
              <PortableText
                value={data.context}
                components={portableTextComponents}
              />
            </div>
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
              className="text-small text-white px-4 py-4 bg-blue-800 rounded-2xl hover:bg-blue-700 transition"
            >
              ← Previous
            </Link>
          ) : (
            <span />
          )}
          {data.next?.slug ? (
            <Link
              href={`/learnings-from-the-field/${data.next.slug}`}
              className="text-small text-white px-4 py-4 bg-blue-800 rounded-2xl hover:bg-blue-700 transition"
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
