import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import LegalHero from '@/components/LegalHero';

export const metadata = {
  title: 'Legal Architecture - Many-to-Many System',
};

function CircularStories({
  title,
  imageSrc,
  buttonText,
  buttonLink,
  subtitle,
}) {
  return (
    <div className="relative mx-auto mt-10 flex w-full max-w-[427px] items-center justify-center">
      {/* Circular image overlapping the circular div */}
      <div
        className="absolute -top-6 h-[164.8px] w-[292.8px] bg-cover bg-center bg-no-repeat shadow-[0_0_10px_0_#005FFF]"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />

      {/* Circular content container */}
      <div className="flex aspect-square w-full max-w-[540px] flex-col items-center justify-center rounded-[427px] bg-[#EFFBFF] px-10 pt-30 shadow-[0_4px_10px_0_rgba(0,95,255,0.30)]">
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

export default function LegalToolsPage() {
  return (
    <div>
      <Navbar activePage="Legal Architecture" />
      <main>
        <LegalHero />
        <section className="section-shadow mb-2 flex justify-center rounded-2xl bg-white px-[2em] py-[4em]">
          <div className="container-main flex justify-center">
            <p className="text-regular text-grey-600 max-w-[600px]">
              Complex collaborations bring together various institutions and
              individuals through diverse legal forms, roles, and relationships
              into what we call Legal Architecture. We experimented with
              different concepts and forms, in the hope that these may better
              support complex collaborations to disrupting norms and values,
              ownership, and power.
            </p>
          </div>
        </section>
        <section className="grid-bg mb-2 py-16">
          <div className="container-main px-8 sm:px-20">
            <div className="grid grid-cols-1 gap-x-40 gap-y-30 sm:grid-cols-2">
              <div>
                <h2 className="heading-lg pb-1 text-blue-800">
                  Our Observations
                </h2>
              </div>
              <div>
                <p className="text-regular text-grey-600 pb-4">
                  The legal architecture in any complex collaboration will be
                  distinct, depending on the number and nature of partners,
                  institutional norms, geographical spread, and more. There will
                  normally be a range of interrelating forms and relationships,
                  with people holding various legal roles within them, creating
                  a more complex environment than a traditional legal form.
                </p>
                <p className="text-regular text-grey-600 pb-4">
                  Our observation was that many readily available legal forms
                  and relationships impose 'deep codes' that misalign with a
                  collaboration's intended governance, particularly concerning
                  risk and power. While collaborations may democratically design
                  many operational aspects, the underlying legal
                  architecture—crucial for how governance is lived—is rarely
                  discussed in the same detail
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-x-40 gap-y-30 sm:grid-cols-2">
              <div>
                <h2 className="heading-lg pb-1 text-blue-800">
                  The Experiment
                </h2>
              </div>
              <div>
                <p className="text-regular text-grey-600 pb-4">
                  We aimed to create a Legal Architecture that invited all
                  partners into transparent, mission-aligned legal
                  relationships, avoiding separate or deep code-misaligned
                  agreements. We also experimented whether it was possible to
                  nudge deep codes shifts in ‘brown field’ environments where
                  existing legal architecture would prevent the use of a ‘new
                  route’. This included testing how the deep codes we identified
                  could be brought into existing legal forms and relationships.
                </p>
              </div>
            </div>

            <h2 className="heading-lg mt-8 max-w-md pb-1 text-blue-800">
              Our Learnings
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <CircularStories
                title="Legal System Architecture"
                subtitle=" An experimenter’s log showing the key legal areas we explored and how these connect to deep code shifts"
                imageSrc="/PoPBook.png"
                buttonText="Read Log →"
                buttonLink="/tools/legal-architecture-experiment-log"
              />
              <CircularStories
                title="Process Orchestration"
                subtitle="A process log showing the key orchestration and stewardship steps we took and how our learnings might apply to others"
                imageSrc="/Prototype-Book.png"
                buttonText="Read Log →"
                buttonLink="/tools/process-stewardship-experiment-log"
              />
              <CircularStories
                title="Many-to-Many Agreement Example"
                subtitle="An example showing how we experimented with embedding deep code shifts into agreements"
                imageSrc="/PoP-Example.png"
                buttonText="Read Log →"
                buttonLink="/tools/many-to-many-contract"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
