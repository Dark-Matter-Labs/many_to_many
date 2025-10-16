import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SectionTitle } from '@/components/SectionTitle';
import styles from '@/components/JourneyHeroSection.module.css';

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
        className="absolute -top-10 left-1/2 h-[189px] w-[300px] -translate-x-1/2 bg-cover bg-center bg-no-repeat"
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
  return (
    <>
      <Navbar activePage="Journey" />

      <section className={'heading ' + styles.hero}>
        <h1 className="ml-8 text-blue-800 sm:ml-40">Many-to-Many Journey</h1>
      </section>

      <main className="font-galosText">
        {/* Intro blurb */}
        <section className="section-shadow mb-2 flex justify-center rounded-2xl bg-white px-[2em] py-[4em]">
          <div className="container-main flex justify-center">
            <p className="text-regular text-grey-600 max-w-[600px]">
              Like any complex collaboration, our own journey in creating
              Many-to-Many has been non-linear, full of learning, and deeply
              shaped by the partners we worked with. For those curious about the
              story behind the work, we've shared the story in three parts.
              These sections explore the origins of the idea, how our "proof of
              possibility" unfolded, and an exploration of the key learnings
              that continue to shape our work.
            </p>
          </div>
        </section>

        {/* Three circle images */}
        <section className="grid-bg py-[160px]">
          <div className="container-main">
            <SectionTitle className="mb-20">
              Our Journey in Three Parts
            </SectionTitle>
            <div className="flex items-center justify-start gap-8">
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
        <Footer />
      </main>
    </>
  );
}
