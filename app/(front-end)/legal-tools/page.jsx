import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import LegalHero from '@/components/LegalHero';

function CircularStories({ title, imageSrc, buttonText, buttonLink }) {
  return (
    <div className="relative mx-auto mt-10 flex w-full max-w-[427px] items-center justify-center">
      {/* Circular image overlapping the circular div */}
      <div
        className="absolute -top-2 h-[206px] w-[366px] bg-cover bg-center bg-no-repeat shadow-[0_0_10px_0_#005FFF]"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />

      {/* Circular content container */}
      <div className="flex aspect-square w-full max-w-[540px] flex-col items-center justify-center rounded-[427px] bg-[#EFFBFF] px-10 pt-42 shadow-[0_4px_10px_0_rgba(0,95,255,0.30)]">
        <h3 className="text-regular mb-3 text-blue-800">{title}</h3>
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
        <section className="section-shadow mx-auto mb-2 flex justify-center rounded-2xl bg-white px-[2em] py-[4em]">
          <p className="text-regular text-grey-600 max-w-[600px]">
            Complex collaborations bring together various institutions and
            individuals through diverse legal forms, roles, and relationships
            into what we call Legal Architecture. The legal architecture in any
            complex collaboration will be distinct, depending on the number and
            nature of partners, institutional norms, geographical spread, and
            more. There will normally be a range of interrelating forms and
            relationships, with people holding various legal roles within them,
            creating a more complex environment than a traditional legal form.
          </p>
        </section>
        <section className="grid-bg mb-2 px-20 py-16">
          <div className="grid grid-cols-1 gap-x-40 gap-y-30 sm:grid-cols-2">
            <div>
              <h2 className="heading-lg pb-1 text-blue-800">
                Insights, resource and tools
              </h2>
            </div>
            <div>
              <p className="text-regular text-grey-600 pb-4">
                Our observation was that many readily available legal forms and
                relationships impose 'deep codes' that misalign with a
                collaboration's intended governance, particularly concerning
                risk and power. While collaborations may democratically design
                many operational aspects, the underlying legal
                architecture—crucial for how governance is lived—is rarely
                discussed in the same detail.
              </p>
              <p className="text-regular text-grey-600 pb-4">
                We aimed to create a Legal Architecture that invited all
                partners into transparent, mission-aligned legal relationships,
                avoiding separate or deep code-misaligned agreements. We also
                experimented whether it was possible to nudge deep codes shifts
                in ‘brown field’ environments where existing legal architecture
                would prevent the use of a ‘new route’. This included testing
                how the deep codes we identified could be brought into existing
                legal forms and relationships.
              </p>
            </div>
          </div>

          <h2 className="heading-lg mt-8 max-w-md pb-1 text-blue-800">
            The following documents show how we experimented in our Proof of
            Possibility
          </h2>
          <div className="flex items-center justify-start gap-8">
            <CircularStories
              title="Experiment Log - Legal System Architecture book"
              imageSrc="/PoPBook.png"
              buttonText="Read book →"
              buttonLink="#pop"
            />
            <CircularStories
              title="Experiment Log - Process orchestration book"
              imageSrc="/Prototype-Book.png"
              buttonText="Read book →"
              buttonLink="#pop"
            />
            <CircularStories
              title="Many-to-Many Agreement example"
              imageSrc="/PoP-Example.png"
              buttonText="View example →"
              buttonLink="#pop"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
