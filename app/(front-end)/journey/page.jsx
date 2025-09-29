import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SectionTitle } from '@/components/SectionTitle';
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
        <h1 className="ml-40 text-blue-800">Many-to-Many Journey</h1>
      </section>

      <main className="font-galosText">
        {/* Intro blurb */}
        <section className="section-shadow mx-auto mb-2 flex justify-center rounded-2xl bg-white px-[2em] py-[4em]">
          <p className="text-regular text-grey-600 max-w-[600px]">
            A snapshot of how this work came together: the partners involved,
            the steps we took, and what we learned along the way. Images and
            diagrams are represented with placeholders for now.
          </p>
        </section>

        {/* Three circle images */}
        <section className="grid-bg px-20 py-16">
          <SectionTitle className="mb-20">
            The 3 stories in the system
          </SectionTitle>
          <div className="flex items-center justify-start gap-8">
            <CircularStories
              title="What happened in the Proof of Possibility?"
              subtitle="How was it developed, history and broader context"
              imageSrc="/PoP.png"
              buttonText="Scroll to section →"
              buttonLink="#pop"
            />
            <CircularStories
              title="How was the Many-to-Many System developed?"
              subtitle="The full context, journey and learnings"
              imageSrc="/develop.png"
              buttonText="Scroll to section →"
              buttonLink="#develop"
            />
            <CircularStories
              title="Our Learning by doing approach"
              subtitle="Learning out loud, propositions, working spaces, loose notes"
              imageSrc="/learningdoing.png"
              buttonText="Scroll to section →"
              buttonLink="#learning"
            />
          </div>
        </section>

        <section
          className="section-shadow mb-20 rounded-2xl bg-[#EFFBFF] px-20 py-16 shadow-[0_0_20px_0_rgba(0,95,255,0.40)]"
          id="pop"
        >
          <div className="grid grid-cols-1 gap-x-40 gap-y-30 sm:grid-cols-2">
            <div>
              <h2 className="heading-lg pb-1 text-blue-800">
                The Proof of Possibility
              </h2>
              <h3 className="heading-md text-blue-800">
                How was this developed?
              </h3>
            </div>
            <div>
              <p className="text-regular text-grey-600">
                The Many-to-Many team worked with a set of diverse partners to
                create a "proof of possibility”. This demonstrated how a
                collaboration can hold and strategically deploy varied resources
                towards a systemic mission, using an approach that shifts deep
                codes. We describe this process briefly below. The insights from
                this proof of possibility and related work were then distilled
                into the Many-to-Many System (and many other elements!) in an
                attempt to create something that was navigable and useful for
                others to use.
              </p>
            </div>

            <div>
              <h3 className="heading-md max-w-sm text-blue-800">
                Stage One:
                <br /> Creating a Learning Network & Initial Prototype
              </h3>
            </div>
            <div>
              <p className="text-regular text-grey-600 pb-4">
                Our proof of possibility began by establishing a learning
                network of organisations with deep expertise in collaborative
                governance. This network was given £122k and a mission: "How do
                we collectively steward—with responsibility and care—a pool of
                assets to build the system's capacity for many-to-many
                governance?"
              </p>
              <p className="text-regular text-grey-600">
                The core challenge was to develop a legally robust way to move
                money from multiple funders to multiple actors collaborating on
                a shared mission. The learning network then live-prototyped an
                initial many-to-many governance and organising structure to
                allocate the £122k, designed for future use by other
                collaborations. This first prototype included a methodology,
                governance model, organising structure, practices, funding
                methods, and a many-to-many contract.
              </p>
            </div>

            <div>
              <h3 className="heading-md max-w-sm text-blue-800">
                Stage Two:
                <br /> Live Testing and Iteration
              </h3>
            </div>
            <div>
              <p className="text-regular text-grey-600">
                Next, we tested this prototype in real-world contexts. Learning
                network participants experimented with components of the
                prototype, identifying what worked and what didn't, allowing us
                to learn by doing. Key insights were continuously woven back
                into the prototype, refining it through iteration. This live
                testing is ongoing, meaning the Many-to-Many System will
                continue to evolve.
              </p>
            </div>

            <div>
              <h3 className="heading-md max-w-sm text-blue-800">
                History and Broader Context
              </h3>
            </div>
            <div>
              <p className="text-regular text-grey-600">
                <a
                  rel="noopener noreferrer"
                  className="underline"
                  href="https://darkmatterlabs.notion.site/Beyond-the-Rules-19e692bf98f54b44971ca34700e246fd"
                >
                  Beyond the Rules
                </a>{' '}
                is an initiative that is interested in the deep, thoughtful and
                highly creative work required to rewrite, reinvent or reimagine
                rules, norms and laws that hold us in the current system.
              </p>
            </div>
          </div>
          <Image
            src="/journey-flow.png"
            alt="Journey Flow Diagram"
            width={1236}
            height={1230}
            className="mx-auto mt-20"
          />

          <h3 className="heading-md mt-40 text-blue-800">
            Things we wanted to test
          </h3>
          <div className="mx-auto mt-12 grid max-w-[1300px] gap-8 md:grid-cols-3">
            {tests?.map((test) => (
              <TestCard key={test._id} test={test} />
            ))}
          </div>

          <h3 className="heading-md pt-20 pb-10 text-blue-800">
            What we learned
          </h3>
          <div className="grid grid-cols-1 gap-x-40 gap-y-30 sm:grid-cols-2">
            <div>
              <ul className="text-regular text-grey-600 list-inside list-disc">
                <li className="mb-4">
                  When orchestrating a collaboration, balancing energy,
                  resources and attention between infrastructure and progressing
                  the intended work is critical – it needs to be proportionate.
                </li>
                <li className="mb-4">
                  In a ‘ripe’ environment, a group can collaboratively set the
                  design of their governance infrastructures, deeply coded to
                  the futures they want. Done well, this can build
                  relationships, shared context and mutual demand that enables
                  the work; done badly, it can create friction and group
                  breakdown that undermines it.
                </li>
                <li>
                  That said, the act of ‘deeply coding’ infrastructures is made
                  difficult and often limited by “system blockers” in the wider
                  environment. The condition of this wider environment and the
                  conditions within the collaborators largely determine if
                  conditions for deeply coding are ‘ripe’ or ‘unripe’ to try and
                  how far.
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-regular text-grey-600 list-inside list-disc">
                <li className="mb-4">
                  Governing, organising, learning, ecosystem strategy and legal
                  architecture systems heavily interaffect – if they aren’t
                  developed to work effectively together they can undermine each
                  other’s purposes.
                </li>
                <li className="mb-4">
                  It was possible to establish a deeply coded legal contract
                  aligned with wider governance infrastructures in the
                  particular sandbox context, albeit this created legal grey
                  areas and risks. 
                </li>
                <li>
                  The specific multi-party contractual approach that we used is
                  unlikely to be appropriate in most complex collaborations, or
                  may only be relevant for particular parts of it. 
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          className="section-shadow mb-20 bg-white px-20 py-16"
          id="develop"
        >
          <div className="grid grid-cols-1 gap-x-40 gap-y-30 sm:grid-cols-2">
            <div>
              <h2 className="heading-lg pb-1 text-blue-800">
                How was Many-to-Many developed?
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

          <div className="mx-auto mt-12 flex max-w-[1200px] items-center justify-center rounded-[70px] bg-[#D9D9D9] px-10 py-20">
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

          <div className="grid grid-cols-1 gap-x-40 gap-y-30 pt-40 sm:grid-cols-2">
            <h3 className="heading-md text-blue-800">The Learning Network</h3>
            <p className="text-regular text-grey-600">
              Something about the network something here
            </p>
          </div>

          <Image
            src="/learning-network.png"
            alt="Journey Flow Diagram"
            width={1236}
            height={1230}
            className="mx-auto mt-20"
          />
        </section>

        <section
          className="section-shadow mb-20 rounded-2xl bg-[#F6FAFB] px-20 py-16 shadow-[0_0_20px_0_rgba(0,95,255,0.40)]"
          id="learning"
        >
          <div className="grid grid-cols-1 gap-x-40 gap-y-30 sm:grid-cols-2">
            <div>
              <h2 className="heading-lg text-blue-800">
                Our learning by doing
              </h2>
            </div>
            <div>
              <p className="text-regular text-grey-600">
                The learnings got text text text
              </p>
            </div>
          </div>

          <h3 className="heading-md text-blue-800">
            Learning out loud - interview style blogs
          </h3>
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
