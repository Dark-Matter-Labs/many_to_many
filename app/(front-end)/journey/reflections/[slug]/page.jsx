import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { reflections } from '../data';

export function generateStaticParams() {
  return reflections.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const reflection = reflections.find((r) => r.slug === slug);
  if (!reflection) return { title: 'Not Found' };
  return {
    title: `${reflection.title} — Reflections from the Network`,
    description: reflection.excerpt,
  };
}

function Paragraph({ para, index }) {
  if (typeof para === 'string') {
    return (
      <p key={index} className="text-regular text-grey-600 mb-4">
        {para}
      </p>
    );
  }
  if (para.pullQuote) {
    return (
      <blockquote
        key={index}
        className="my-8 border-l-4 border-blue-800 pl-6"
      >
        <p className="heading-md text-blue-800 font-normal italic">
          {para.text}
        </p>
      </blockquote>
    );
  }
  return (
    <p key={index} className="text-regular text-grey-600 mb-4">
      {para.text}
    </p>
  );
}

export default async function ReflectionStoryPage({ params }) {
  const { slug } = await params;
  const reflection = reflections.find((r) => r.slug === slug);

  if (!reflection) notFound();

  const intro = reflection.content.find((c) => c.type === 'intro');
  const bodyContent = reflection.content.filter((c) => c.type !== 'intro');

  return (
    <>
      <Navbar activePage="Journey & Team" />

      <div className="journey-back mt-28 px-4 py-2 sm:px-20">
        <Link
          href="/journey/how-system#reflections"
          className="text-small text-blue-800 hover:underline"
        >
          ← Reflections from the Network
        </Link>
      </div>

      {/* Hero: green background + portrait */}
      <section className="flex h-[50vh] overflow-hidden">
        <div className="flex flex-1 items-center bg-[#9baf78] px-4 sm:px-16 lg:px-20">
          <h1 className="heading max-w-xl text-blue-800">
            {reflection.title}
          </h1>
        </div>
        <div className="relative hidden w-[32%] md:block">
          <Image
            src="/leah-black-portrait.jpg"
            alt={reflection.author}
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </section>
      <p className="text-small text-grey-600 px-4 pt-1 text-right sm:px-20">
        Photo: Lewis Houghton
      </p>

      <main className="font-galosText">
        {/* Author intro */}
        <section className="section-shadow mb-2 flex justify-center rounded-2xl bg-white px-[2em] py-[4em]">
          <div className="container-main flex justify-center">
            <div className="max-w-[700px]">
              <p className="text-small mb-3 font-semibold uppercase tracking-wide text-blue-800">
                {reflection.subtitle}
              </p>
              {intro && (
                <p className="text-regular text-grey-600 mt-4">{intro.text}</p>
              )}
            </div>
          </div>
        </section>

        {/* Body content: Q&A and images in data order */}
        <section className="py-[80px]">
          <div className="container-main flex justify-center">
            <div className="w-full max-w-[700px]">
              {bodyContent.map((item, i) => {
                if (item.type === 'image') {
                  return (
                    <figure key={i} className="my-12">
                      <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <figcaption className="text-small text-grey-600 mt-2">
                        Photo: {item.credit}
                      </figcaption>
                    </figure>
                  );
                }

                if (item.type === 'qa') {
                  return (
                    <div key={i} className="mb-12">
                      <p className="text-regular mb-4 font-semibold italic text-blue-800">
                        {item.question}
                      </p>
                      {item.paragraphs.map((para, j) => (
                        <Paragraph key={j} para={para} index={j} />
                      ))}
                    </div>
                  );
                }

                return null;
              })}

              <p className="text-regular text-grey-600 mt-8 border-t border-blue-400 pt-8">
                Thank you so much, Leah.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
