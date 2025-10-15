import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '@/components/JourneyHeroSection.module.css';

export const metadata = {
  title: 'Journey - Many-to-Many System',
};

export default async function JourneyPage() {
  return (
    <>
      <Navbar activePage="Journey" />

      <div className="px-20 pt-30">
        <Link
          href="/journey"
          className="text-small text-blue-800 hover:underline"
        >
          ← Many-to-Many Journey
        </Link>
      </div>

      <section className={'heading ' + styles.hero}>
        <h1 className="ml-8 text-blue-800 sm:ml-40">The Origin Story</h1>
      </section>

      <main className="font-galosText">
        {/* Intro blurb */}
        <section className="section-shadow mb-2 flex justify-center rounded-2xl bg-white px-[2em] py-[4em]">
          <div className="container-main flex justify-center">
            <p className="text-regular text-grey-600 max-w-[600px]">
              No project of this nature begins in a vacuum. The Many-to-Many System grew out of a rich ecosystem of prior thinking, parallel work, and, most importantly, a diverse community of collaborators, practitioners and thinkers. The map on this page is our attempt to honour that history and make the web of relationships and ideas that informed our journey visible. We invite you to explore this network to see the broader context from which this work emerged.
            </p>
          </div>
        </section>

        <section
          className="container-main section-shadow scroll-top py-[160px] bg-white"
          id="develop"
        >
          <div className="grid grid-cols-1 gap-x-40 gap-y-30 sm:grid-cols-2">
            <div>
              <h2 className="heading-lg pb-1 text-blue-800">
                The Origin Story
              </h2>
              <h3 className="heading-md text-blue-800">
                The Wider “Beyond the Rules” Journey
              </h3>
            </div>
            <div>
              <p className="text-regular text-grey-600">
                The enquiry into Many-to-Many emerged from{' '}
                <a
                  rel="noopener noreferrer"
                  className="underline"
                  href="https://darkmatterlabs.notion.site/Beyond-the-Rules-19e692bf98f54b44971ca34700e246fd"
                >
                  “Beyond the Rules,”
                </a>{' '}
                a wider initiative launched in 2020 to explore the rules, norms,
                and laws underpinning our current systems. "Beyond the Rules"
                has experimented across various themes like grant-making in
                complexity, employment contracts and pooled funding options.
                Many-to-Many is a deep dive, drawing from the broader work, to
                specifically focus on the governance, organising, and legal
                architecture within complex collaborations. The image below
                illustrates the full ecosystem explored, providing context for
                Many-to-Many's development.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-[160px] flex max-w-[1200px] items-center justify-center rounded-[70px] bg-[#D9D9D9] px-10 py-20">
            <Image
              src="/how-journey.png"
              alt="Beyond the Rules Journey Diagram"
              width={814}
              height={379}
              className="mx-auto"
            />
            <button className="text-regular absolute rounded-full bg-[#005FFF] px-6 py-2 text-white">
              Discover timeline →
            </button>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
