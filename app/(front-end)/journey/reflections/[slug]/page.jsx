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

export default async function ReflectionStoryPage({ params }) {
  const { slug } = await params;
  const reflection = reflections.find((r) => r.slug === slug);

  if (!reflection) notFound();

  const intro = reflection.content.find((c) => c.type === 'intro');
  const qas = reflection.content.filter((c) => c.type === 'qa');

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

      <section className="flex h-[50vh] items-center justify-start bg-[#9baf78] px-4 sm:px-40">
        <h1 className="heading max-w-2xl text-blue-800">{reflection.title}</h1>
      </section>

      <main className="font-galosText">
        {/* Author intro */}
        <section className="section-shadow mb-2 flex justify-center rounded-2xl bg-white px-[2em] py-[4em]">
          <div className="container-main flex justify-center">
            <div className="max-w-[700px]">
              <p className="text-small mb-3 font-semibold tracking-wide text-blue-800 uppercase">
                {reflection.subtitle}
              </p>
              {intro && (
                <p className="text-regular text-grey-600 mt-4">{intro.text}</p>
              )}
            </div>
          </div>
        </section>

        {/* Q&A content */}
        <section className="py-[80px]">
          <div className="container-main flex justify-center">
            <div className="w-full max-w-[700px]">
              {qas.map((item, i) => (
                <div key={i} className="mb-12">
                  <p className="text-regular mb-4 font-semibold text-blue-800 italic">
                    {item.question}
                  </p>
                  {item.paragraphs.map((para, j) => (
                    <p key={j} className="text-regular text-grey-600 mb-4">
                      {para}
                    </p>
                  ))}
                </div>
              ))}

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
