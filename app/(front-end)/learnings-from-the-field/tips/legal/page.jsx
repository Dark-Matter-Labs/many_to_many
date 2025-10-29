import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '@/components/TipsHeroSection.module.css';

export const metadata = {
  title: 'Top Tips for Legal Professionals - Many-to-Many System',
};

export default function GovernancePractitioners() {
  return (
    <>
      <Navbar activePage="Learnings from the Field" />
      <main>
        {/* Breadcrumb */}
        <div className={'learning-back mt-28 px-20 py-2'}>
          <Link
            href="/learnings-from-the-field"
            className="text-small text-blue-800 hover:underline"
          >
            ← Learning from the Field
          </Link>
        </div>

        <section className={'heading ' + styles.heroLegal}>
          <h1 className="ml-8 max-w-xl text-blue-800 sm:ml-40">
            Top Tips for Legal Professionals
          </h1>
        </section>

        {/* Hero Section */}
        <section className="bg-blue-800 py-20">
          <div className="container-main">
            <div className="mx-auto max-w-2xl">
              <p className="text-regular max-w-4xl text-white">
                Legal professionals are working at the edges of law, governance,
                and care. In complex collaborations, legal frameworks can either
                constrain what’s possible - or expand the space for trust,
                emergence and mutual accountability. These insights are for
                those shaping legal artefacts and structures not as gatekeepers,
                but as enablers - often working behind the scenes to make new
                governance forms viable.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content - Five Tips */}
        <section className="bg-white py-20">
          <div className="container-main">
            <p className="text-regular text-grey-600 max-w-4xl">Coming Soon!</p>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="bg-[#FFE091] py-20">
          <div className="container-main">
            <div className="mx-auto max-w-xl">
              <h2 className="heading mb-6 text-blue-800">
                And remember... you’re a steward of possibility.
              </h2>
              <p className="text-regular text-grey-600 max-w-4xl">
                When you approach your legal practice as a relational craft, it
                becomes part of the culture of collaboration - helping people
                show up with more clarity, more trust, and more creativity.
              </p>
              <blockquote className="text-regular text-orange-800 italic">
                “There’s no way of making this simple – there isn’t an end
                document, it’s an ongoing conversation.” — James Lock, Opus
              </blockquote>
            </div>
          </div>
        </section>

        {/* Navigation Buttons */}
        <section className="bg-white py-20">
          <div className="container-main flex justify-center gap-8">
            <Link href="/learnings-from-the-field">
              <button className="rounded-full bg-blue-800 px-8 py-4 text-white transition-colors hover:bg-blue-700">
                ← Previous
              </button>
            </Link>
            <Link href="/learnings-from-the-field">
              <button className="rounded-full bg-blue-800 px-8 py-4 text-white transition-colors hover:bg-blue-700">
                Next →
              </button>
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
