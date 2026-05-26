import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SectionTitle } from '@/components/SectionTitle';
import styles from '@/components/JourneyHeroSection.module.css';

export const metadata = {
  title: 'Journey',
};

function CircularStories({
  title,
  subtitle,
  imageSrc,
  buttonText,
  buttonLink,
}) {
  return (
    <div className="relative mx-auto my-20 sm:my-0">
      {/* Circular image overlapping the circular div */}
      <div
        className="absolute -top-16 left-1/2 h-[189px] w-[300px] -translate-x-1/2 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />

      {/* Circular content container */}
      <div className="bg-grey-50 flex aspect-square h-[377.32px] w-[377.32px] flex-col items-center justify-center rounded-[427px] px-10 pt-14 shadow-[0_3.535px_8.837px_0_rgba(0,95,255,0.30)]">
        <h3 className="text-regular mb-3 text-blue-800">{title}</h3>
        <p className="text-small text-grey-600 mb-6 max-w-[420px] leading-6">
          {subtitle}
        </p>
        <button className="text-regular hover:bg-dark-blue rounded-full bg-blue-800 px-6 py-2 text-white">
          <Link href={buttonLink}>{buttonText}</Link>
        </button>
      </div>
    </div>
  );
}

export default async function JourneyPage() {
  return (
    <>
      <Navbar activePage="Journey & Team" />

      <section className={'heading ' + styles.hero}>
        <h1 className="ml-8 text-blue-800 sm:ml-40">Journey and Team</h1>
      </section>

      <main className="font-galosText">
        {/* Intro blurb */}
        <section className="section-shadow mb-2 flex justify-center rounded-2xl bg-white px-[2em] py-[4em]">
          <div className="container-main flex justify-center">
            <p className="text-regular text-grey-600 max-w-[600px]">
              Like any complex collaboration, our own journey in creating
              Many-to-Many has been non-linear, full of learning, and deeply
              shaped by the partners we worked with. For those curious about the
              story behind the work, we’ve shared the story in three parts.
              These sections explore the origins of the idea, how our “Proof of
              Possibility” unfolded, and an exploration of the key learnings
              that continue to shape our work.
            </p>
          </div>
        </section>

        {/* Three circle images */}
        <section className="grid-bg py-[160px]">
          <div className="container-main">
            <h2 className="heading-lg mb-20 pb-8 text-blue-800">
              Our Journey in Three Parts
            </h2>
            <div className="grid grid-cols-1 content-center justify-items-center gap-20 md:grid-cols-2 lg:grid-cols-3">
              <CircularStories
                title="How the Many-to-Many System was Developed"
                subtitle="The Proof of Possibility and the Learning Network"
                imageSrc="/PoP.png"
                buttonText="Explore the How →"
                buttonLink="/journey/how-system"
              />
              <CircularStories
                title="The Origin Story"
                subtitle=" The broader context of where the idea of Many-to-Many  was born, and key collaborators along the way"
                imageSrc="/develop.png"
                buttonText="Explore the Evolution →"
                buttonLink="/journey/origin-story"
              />
              <CircularStories
                title="Ongoing Learnings"
                subtitle="Working and learning out loud, blogs, propositions, reflections"
                imageSrc="/learningdoing.png"
                buttonText=" Explore Our Learnings →"
                buttonLink="/journey/learnings"
              />
            </div>
          </div>
        </section>

        {/* Team section */}
        <section className="bg-[#F7FFE8] py-24">
          <div className="container-main">
            {/* Heading + intro */}
            <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start md:gap-20">
              <h2 className="heading-lg pb-8 text-blue-800">
                Meet the Core Team
              </h2>
              <p className="text-regular text-grey-600 max-w-2xl">
                The Many-to-Many initiative is stewarded by a small,
                multi-disciplinary team of practitioners, researchers, and
                designers within Dark Matter Labs. Our role was to be both
                (co)subjects and facilitators of a Proof of Possibility, where
                we have navigated the complexities of collaboration work
                firsthand. Our collective expertise spans collaboration
                governance, strategic design, systems architecture, governance,
                technology, and information design, united by a shared
                commitment to building more equitable and effective ways of
                collaborating.
              </p>
            </div>

            {/* 2x2 grid of profiles */}
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
              {/* Annette */}
              <div className="flex flex-col items-center">
                <div className="mx-auto mb-5 flex h-[170px] w-[340px] items-end justify-center rounded-[340px_340px_0_0] bg-[#F4F5F7] shadow-[0_4.7px_39.9px_rgba(0,95,255,0.30)]">
                  <div className="pb-4 text-center">
                    <div className="font-galosText text-[24px] text-orange-800">
                      Annette Dhami
                    </div>
                    <div className="text-small text-blue-800">
                      Co-Lead & Governance Systems Methodologist
                    </div>
                  </div>
                </div>
                <p className="text-small text-grey-600 max-w-sm">
                  Annette is co-leader of the Many-to-Many initiative, guiding
                  its strategic direction and grounding it in deep, context
                  based practice. Annette focuses on the methodology and process
                  of navigating complexity in live, emergent systems - as well
                  as the governing structures, legal architectures, and power
                  dynamics - that shape collaborative efforts. Annette has been
                  instrumental in stewarding the project’s core concepts and
                  deep codes from their earliest inception within Beyond the
                  Rules.
                </p>
              </div>

              {/* Michelle */}
              <div className="flex flex-col items-center">
                <div className="mx-auto mb-5 flex h-[170px] w-[340px] items-end justify-center rounded-[340px_340px_0_0] bg-[#F4F5F7] shadow-[0_4.7px_39.9px_rgba(0,95,255,0.30)]">
                  <div className="pb-4 text-center">
                    <div className="font-galosText text-[24px] text-orange-600">
                      Michelle Zucker
                    </div>
                    <div className="text-small text-blue-800">
                      Co-Lead & Emergent Strategy and Sensemaking
                    </div>
                  </div>
                </div>
                <p className="text-small text-grey-600 max-w-sm">
                  As co-leader of Many-to-Many, Michelle uses her strategic
                  synthesis and sensemaking abilities to guide the emergent
                  elements of the strategic direction, focussing on collecting
                  and articulating the underlying patterns and meta-learnings of
                  the work. Drawing from her background in tackling complex
                  social and environmental challenges in non-traditional ways,
                  she designed and held the space for the project to be both a
                  live collaborative context and a sandbox for new models.
                  Michelle has been instrumental in leading sensemaking of what
                  we learnt in order to create models, tools and assets that
                  others can build from.
                </p>
              </div>

              {/* Gurden */}
              <div className="flex flex-col items-center">
                <div className="mx-auto mb-5 flex h-[170px] w-[340px] items-end justify-center rounded-[340px_340px_0_0] bg-[#F4F5F7] shadow-[0_4.7px_39.9px_rgba(0,95,255,0.30)]">
                  <div className="pb-4 text-center">
                    <div className="font-galosText text-[24px] text-orange-600">
                      Gurden Batra
                    </div>
                    <div className="text-small text-blue-800">
                      Design Technologist
                    </div>
                  </div>
                </div>
                <p className="text-small text-grey-600 max-w-sm">
                  Gurden is the lead technologist who brought the Many-to-Many
                  digital platform to life. With a background in computer
                  science and a focus on new media design, he translated the
                  team’s deep content and complex requirements into a
                  functional, elegant, and human-friendly website and ecosystem
                  of supporting materials, tools, guides and logs. Gurden
                  championed an iterative, agile process, moving quickly from
                  wireframes to a live prototype to enable real-world testing
                  and feedback. He is leading the programme of work to ensure
                  the website does not become a static archive of information,
                  but a dynamic living resource for others.
                </p>
              </div>

              {/* Arianna */}
              <div className="flex flex-col items-center">
                <div className="mx-auto mb-5 flex h-[170px] w-[340px] items-end justify-center rounded-[340px_340px_0_0] bg-[#F4F5F7] shadow-[0_4.7px_39.9px_rgba(0,95,255,0.30)]">
                  <div className="pb-4 text-center">
                    <div className="font-galosText text-[24px] text-orange-600">
                      Arianna Smaron
                    </div>
                    <div className="text-small text-blue-800">
                      Interdisciplinary Designer and <br /> Information
                      Architect
                    </div>
                  </div>
                </div>
                <p className="text-small text-grey-600 max-w-sm">
                  Arianna is the strategic and visual designer for Many-to-Many,
                  responsible for making the project’s immense complexity
                  understandable and navigable. Her work is central to the
                  making the Many-to- Many work more accessible, turning dense
                  research and abstract concepts into clear diagrams, intuitive
                  pathways, and compelling stories. Arianna led the
                  architectural design of the website and Field Guide,
                  championing a “thinking through visual prototyping” approach.
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
