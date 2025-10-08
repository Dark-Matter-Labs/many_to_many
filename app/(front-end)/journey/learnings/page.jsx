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

const TestCard = ({ test }) => (
  <div className="whoBg flex flex-col items-center">
    {/* Icon circle */}
    <div className="py-10">
      <p className="heading-md text-blue-800">{test.testNumber}.</p>
    </div>
    {/* Card content */}
    <div className="mb-2 px-10 pt-4 pb-6">
      <h3 className="heading-md mb-3 font-semibold text-blue-800">
        {test.title}
      </h3>
      <p className="text-regular text-grey-600">{test.description}</p>
    </div>
    <Link href={`/journey/test/${test.slug.current}`}>
      <button className="text-regular text-grey-50 mb-8 flex w-[263.065px] cursor-pointer flex-row items-center justify-center rounded-[20px] bg-blue-800 p-[10px] transition hover:bg-[#054ABF]">
        Read tests →
      </button>
    </Link>
  </div>
);

export const metadata = {
  title: 'Journey - Many-to-Many System',
};

function CircularStories({
  title,
  subtitle,
  imageSrc,
  buttonText,
  buttonLink,
}) {
  return (
    <div className="relative mx-auto flex w-full max-w-[427px] items-center justify-center">
      {/* Circular image overlapping the circular div */}
      <div
        className="absolute -top-10 left-1/2 h-[223px] w-[223px] -translate-x-1/2 rounded-[111.5px] bg-cover bg-center bg-no-repeat shadow-[0_0_10px_0_#005FFF]"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />

      {/* Circular content container */}
      <div className="flex aspect-square w-full max-w-[540px] flex-col items-center justify-center rounded-[427px] bg-[#EFFBFF] px-10 pt-42 shadow-[0_4px_10px_0_rgba(0,95,255,0.30)]">
        <h3 className="text-regular mb-3 text-blue-800">{title}</h3>
        <p className="text-small text-grey-600 mb-6 max-w-[420px] leading-6">
          {subtitle}
        </p>
        <button className="text-regular rounded-full bg-[#005FFF] px-6 py-2 text-white">
          <Link href={buttonLink}>{buttonText}</Link>
        </button>
      </div>
    </div>
  );
}

export default async function JourneyPage() {
  const tests = await sanityFetch({
    query: tests_query,
    tags: ['test'],
  });
  return (
    <>
      <Navbar activePage="Journey" />

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
          className="container-main section-shadow scroll-top mb-20 rounded-2xl bg-[#F6FAFB] py-16 shadow-[0_0_20px_0_rgba(0,95,255,0.40)]"
          id="learning"
        >
          <div className="grid grid-cols-1 gap-x-40 gap-y-30 sm:grid-cols-2">
            <div>
              <h2 className="heading-lg text-blue-800">Ongoing Learnings</h2>
            </div>
          </div>

          <h3 className="heading-md mt-4 text-blue-800">
            Learning out loud - interview style blogs
          </h3>
          <p className="text-small text-grey-600 max-w-2xl">
            Sharing as the initiative was in progress, in an attempt to showcase
            and share the messy, less formed lessons and insights.
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
        </section>
        <Footer />
      </main>
    </>
  );
}
