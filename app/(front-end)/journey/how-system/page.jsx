import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { sanityFetch } from '@/sanity/lib/client';
import styles from '@/components/JourneyHeroSection.module.css';

const tests_query = `
  *[_type == "test"] | order(testNumber asc){
    _id,
    slug,
    title,
    description,
    testNumber,
    linkedTools[]->{ _id, title, description, type, slug }
  }`;

const TestCard = ({ test }) => (
  <div className="tipBg flex max-w-xs flex-col items-center justify-center lg:max-w-xl">
    {/* Icon circle */}
    <div className="pt-12">
      <p className="heading-md text-blue-800">{test.testNumber}.</p>
    </div>
    {/* Card content */}
    <div className="flex flex-1 flex-col items-center justify-items-center px-8 pt-12">
      {test.title === 'Infrastructures' ? (
        <Image src="/infra.png" alt="Test Icon" width={306} height={306} />
      ) : test.title === 'Process' ? (
        <Image src="/process.png" alt="Test Icon" width={306} height={306} />
      ) : (
        <Image src="/living.png" alt="Test Icon" width={306} height={306} />
      )}
      <div className="pt-2 pb-6">
        <h3 className="heading-md mb-2 font-semibold text-blue-800">
          {test.title}
        </h3>
        <p className="text-regular text-grey-600">{test.description}</p>
      </div>
      <Link href={`/journey/test/${test.slug.current}`}>
        <button className="text-regular text-grey-50 flex w-[263.065px] cursor-pointer flex-row items-center justify-center rounded-[20px] bg-blue-800 p-[10px] transition hover:bg-[#054ABF]">
          Read details →
        </button>
      </Link>
    </div>
  </div>
);

export const metadata = {
  title:
    'How the Many-to-Many System was Developed? - Journey - Many-to-Many System',
};

export default async function JourneyPage() {
  const tests = await sanityFetch({
    query: tests_query,
    tags: ['test'],
  });
  return (
    <>
      <Navbar activePage="Journey" />

      <div className={'journey-back mt-28 px-20 py-2'}>
        <Link
          href="/journey"
          className="text-small text-blue-800 hover:underline"
        >
          ← Many-to-Many Journey
        </Link>
      </div>

      <section className={'heading ' + styles.heroHow}>
        <h1 className="ml-8 max-w-xl text-blue-800 sm:ml-40">
          How the Many-to-Many System was Developed?
        </h1>
      </section>

      <main className="font-galosText">
        {/* Intro blurb */}
        <section className="section-shadow mb-2 flex justify-center rounded-2xl bg-white px-[2em] py-[4em]">
          <div className="container-main flex justify-center">
            <p className="text-regular text-grey-600 max-w-[600px]">
              The Many-to-Many System didn't emerge fully formed; it was forged
              through a "Proof of Possibility"—a live experiment co-developed
              with a dedicated Learning Network. Our goal was to test if a
              collaboration could truly embody new 'deep codes' by intentionally
              designing its Infrastructures, its co-creative Process, and its
              capacity for 'Living In' these new practices. On this page, we
              offer a transparent look at that journey—what we did, what we
              didn't get to, and what we learned. Each learning connects back to
              the core components of the Many-to-Many System, offering practical
              insights for your own work.
            </p>
          </div>
        </section>

        <section className="grid-bg section-shadow rounded-2xl py-[160px] shadow-[0_0_20px_0_rgba(0,95,255,0.40)]">
          <div className="container-main">
            <h3 className="heading-md text-blue-800">
              Things we wanted to test
            </h3>
            <div className="mx-auto mt-8 grid max-w-[1300px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {tests?.map((test) => (
                <TestCard key={test._id} test={test} />
              ))}
            </div>

            <div className="mx-auto max-w-2xl">
              <p className="heading-md mt-12 text-blue-800">
                Or read more about our general learnings from the journey and
                the proof of possibility:
              </p>
              <div className="flex items-center justify-center gap-20 md:justify-start">
                <button className="text-regular text-grey-50 mt-6 flex w-[263.065px] cursor-pointer flex-row items-center justify-center rounded-[20px] bg-blue-800 p-[10px] transition">
                  <Link href="#what">What we learned ↓</Link>
                </button>
                <button className="text-regular text-grey-50 mt-6 flex w-[263.065px] cursor-pointer flex-row items-center justify-center rounded-[20px] bg-blue-800 p-[10px] transition">
                  <Link href="#pop">Proof of Possibility ↓</Link>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="what"
          className="container-main section-shadow rounded-2xl py-[160px] shadow-[0_0_20px_0_rgba(0,95,255,0.40)]"
        >
          <h3 className="heading-lg pb-20 text-blue-800">What we learned</h3>
          <div className="grid grid-cols-1 gap-x-40 gap-y-30 sm:grid-cols-2">
            <div>
              <ul className="text-regular text-grey-600 list-inside list-disc">
                <li className="mb-4">
                  <span className="text-blue-800">
                    When orchestrating a collaboration
                  </span>
                  , balancing energy, resources and attention between
                  infrastructure and progressing the intended work is critical –
                  it needs to be proportionate.
                </li>
                <li className="mb-4">
                  <span className="text-blue-800">In a ‘ripe’ environment</span>
                  , a group can collaboratively set the design of their
                  governance infrastructures, deeply coded to the futures they
                  want. Done well, this can build relationships, shared context
                  and mutual demand that enables the work; done badly, it can
                  create friction and group breakdown that undermines it.
                </li>
                <li>
                  <span className="text-blue-800">
                    That said, the act of ‘deeply coding’ infrastructures is
                    made difficult
                  </span>{' '}
                  and often limited by “system blockers” in the wider
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
                  <span className="text-blue-800">
                    Governing, organising, learning, ecosystem strategy and
                    legal architecture systems
                  </span>{' '}
                  heavily interaffect – if they aren’t developed to work
                  effectively together they can undermine each other’s purposes.
                </li>
                <li className="mb-4">
                  <span className="text-blue-800">
                    It was possible to establish a deeply coded legal contract
                    aligned
                  </span>{' '}
                  with wider governance infrastructures in the particular
                  sandbox context, albeit this created legal grey areas and
                  risks. 
                </li>
                <li>
                  <span className="text-blue-800">
                    The specific multi-party contractual approach
                  </span>{' '}
                  that we used is unlikely to be appropriate in most complex
                  collaborations, or may only be relevant for particular parts
                  of it. 
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="pop" className="grid-bg py-[160px]">
          <div className="container-main">
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
                  collaboration can hold and strategically deploy varied
                  resources towards a systemic mission, using an approach that
                  shifts deep codes. We describe this process briefly below. The
                  insights from this proof of possibility and related work were
                  then distilled into the Many-to-Many System (and many other
                  elements!) in an attempt to create something that was
                  navigable and useful for others to use.
                </p>
              </div>

              <div>
                <Image
                  src="/journey-flow.png"
                  alt="Journey Flow Diagram"
                  width={741.6}
                  height={738}
                  className="mx-auto"
                />
              </div>
              <div>
                <p className="text-regular text-grey-600 pb-4">
                  Short caption about this image
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
                  governance. This network was given £122k and a mission: "How
                  do we collectively steward—with responsibility and care—a pool
                  of assets to build the system's capacity for many-to-many
                  governance?"
                </p>
                <p className="text-regular text-grey-600">
                  The core challenge was to develop a legally robust way to move
                  money from multiple funders to multiple actors collaborating
                  on a shared mission. The learning network then live-prototyped
                  an initial many-to-many governance and organising structure to
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
                  Next, we tested this prototype in real-world contexts.
                  Learning network participants experimented with components of
                  the prototype, identifying what worked and what didn't,
                  allowing us to learn by doing. Key insights were continuously
                  woven back into the prototype, refining it through iteration.
                  This live testing is ongoing, meaning the Many-to-Many System
                  will continue to evolve.
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
                  is an initiative that is interested in the deep, thoughtful
                  and highly creative work required to rewrite, reinvent or
                  reimagine rules, norms and laws that hold us in the current
                  system.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
