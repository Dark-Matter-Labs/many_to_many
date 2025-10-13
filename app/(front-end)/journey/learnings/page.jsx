import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { sanityFetch } from '@/sanity/lib/client';
import styles from '@/components/JourneyHeroSection.module.css';

const blogPosts = [
  {
    title:
      'Untangling Complexity: How Can We Better Support Collaboration on Complex and Interconnected Problems?',
    slug: 'https://provocations.darkmatterlabs.org/untangling-complexity-how-can-we-better-support-collaboration-on-complex-and-interconnected-cd83272e68c3',
    image: '/blog1.png',
  },
  {
    title: 'Navigating Complexity: Embracing the Human Pace',
    slug: 'https://provocations.darkmatterlabs.org/navigating-complexity-embracing-the-human-pace-55bdad83ab98',
    image: '/blog1.png',
  },
  {
    title: 'Many-to-Many: From Abstract Ideas to a Living System',
    slug: 'https://provocations.darkmatterlabs.org/many-to-many-from-abstract-ideas-to-a-living-system-c0057245a71c',
    image: '/blog3.png',
  },
];

const propositions = [
  {
    title: '#BeyondTheRules',
    slug: 'https://provocations.darkmatterlabs.org/beyondtherules-e3ab44f0dc3',
    image: '/prop1.png',
  },
  {
    title:
      '#BeyondtheRules — Balanced governance and ‘behaving well’ everywhere, every day.',
    slug: 'https://provocations.darkmatterlabs.org/beyondtherules-balanced-governance-and-behaving-well-everywhere-every-day-5aa852b4843e',
    image: '/prop1.png',
  },
  {
    title: 'Organising #BeyondtheRules at Dark Matter Labs 1/4',
    slug: 'https://provocations.darkmatterlabs.org/organising-beyondtherules-at-dark-matter-labs-e59e4f5dd32f',
    image: '/prop2.png',
  },
];

const tests_query = `
  *[_type == "test"] | order(testNumber asc) {
    ...,
    linkedTools[]->{
      ...,
    }
  }
`;

export const metadata = {
  title: 'Journey - Many-to-Many System',
};

export default async function JourneyPage() {
  return (
    <>
      <Navbar activePage="Journey" />

      <div className="px-20 pt-8">
        <Link
          href="/journey"
          className="text-small text-blue-800 hover:underline"
        >
          ← Many-to-Many Journey
        </Link>
      </div>

      <section className={'heading ' + styles.hero}>
        <h1 className="ml-8 text-blue-800 sm:ml-40">Ongoing Learnings</h1>
      </section>

      <main className="font-galosText">
        {/* Intro blurb */}
        <section className="section-shadow mb-2 flex justify-center rounded-2xl bg-white px-[2em] py-[4em]">
          <div className="container-main flex justify-center">
            <p className="text-regular text-grey-600 max-w-[600px]">
              Working and learning out loud, blogs, propositions, reflections.
            </p>
          </div>
        </section>
        <section
          className="grid-bg section-shadow scroll-top mb-20 rounded-2xl py-[160px] shadow-[0_0_20px_0_rgba(0,95,255,0.40)]"
          id="learning"
        >
          <div className="container-main">
            <div className="grid grid-cols-1 gap-x-40 gap-y-30 sm:grid-cols-2">
              <div>
                <h2 className="heading-lg text-blue-800">Ongoing Learnings</h2>
              </div>
            </div>

            <h3 className="heading-md mt-4 text-blue-800">
              Learning out loud - interview style blogs
            </h3>
            <p className="text-small text-grey-600 max-w-2xl">
              Sharing as the initiative was in progress, in an attempt to
              showcase and share the messy, less formed lessons and insights.
            </p>
            <div className="grid grid-cols-1 gap-8 py-10 md:grid-cols-3">
              {blogPosts.map((post, index) => (
                <BlogCard
                  key={index}
                  title={post.title}
                  slug={post.slug}
                  image={post.image}
                />
              ))}
            </div>

            <h3 className="heading-md mt-8 text-blue-800">Propositions</h3>
            <p className="text-small text-grey-600 max-w-2xl">
              Propositional papers and blogs co-developed with collaborators
              showing the background and diving deeper into the conceptual
              underpinnings.
            </p>
            <div className="grid grid-cols-1 gap-8 py-10 md:grid-cols-3">
              {propositions.map((post, index) => (
                <BlogCard
                  key={index}
                  title={post.title}
                  slug={post.slug}
                  image={post.image}
                />
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
