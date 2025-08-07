import { Navbar } from '@/components/Navbar';
import { Header } from '@/components/Header';
import M2MAnimation from '@/components/IntroAnimation';
import { OtherSections } from '@/components/OtherSections';
import { CardGrid } from '@/components/CardGrid';
import { SectionTitle } from '@/components/SectionTitle';

import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar activePage="Home" />

      <main>
        <Header />
        {/* Welcome Section */}
        <section className="px-4 text-center">
          <div className="animation-wrapper">
            <M2MAnimation />
          </div>
        </section>
        <CardGrid />
        <OtherSections />

        <section className="bg-[#F4F4F8] px-4 py-20">
          <div className="relative mx-auto max-w-screen-md">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-full w-full transform rounded-full border-2 border-dashed border-orange-400"></div>
            </div>
            <div className="relative flex flex-col items-center gap-8 p-16">
              <SectionTitle>Still curious?</SectionTitle>
              <p className="text-grey-600 font-galosText text-md -mt-4">
                We welcome insight, reflection and participation from anyone who
                feels moved by the ideas we’ve presented here.
              </p>
              <p className="text-grey-600 font-galosText text-md -mt-4">
                If that’s you, there are lots of ways to get involved so please
                check out the options below. Alternatively, if you would just
                like to connect please reach out to
                beyondtherules@darkmatterlabs.org.
              </p>
            </div>
          </div>
        </section>
        <section className="px-4 py-20">
          <div className="mx-auto max-w-screen-md">
            <p className="text-grey-600 font-galosText text-sm">
              Thank you to all the Partners who co-developed, tested or provided
              input to the Many-to-Many work. This includes the Many-to-Many
              Learning Network James Lock - We are Opus, Kathleen Kelly - Local
              Motion, Leah Black - Regenerative Futures Fund, Lisa Clarke -
              Lankelly Chase, Matt Bell and Karen Pilkington - Plymouth Octopus
              Project, Zahra Davidson and Dan Ford - Huddlecraft, advisory from
              Angela Tang and our Lead Edge Testers of Andy Crosby - Collective
              Impact Agency, Guppi Bola - Decolonising Economics, Joey Harfouche
              - Open Society Foundation, Irene Lopez de Vallejo - DisCo, Lucas
              Counter - Space of Urgency.
            </p>
            <p className="text-grey-600 font-galosText mt-4 text-sm">
              Also a huge thank you to all the Partners who laid the foundations
              for this Many-to-Many work as part of the work on Beyond the Rules
              including{' '}
              <a
                className="underline"
                href="https://www.demsoc.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Democratic Society
              </a>
              ,{' '}
              <a
                className="underline"
                href="https://lankellychase.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lankelly Chase
              </a>
              ,{' '}
              <a
                className="underline"
                href="https://yorkmcn.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                York Multiple Complex Needs Network
              </a>
              's (MCN) Enabling Team,{' '}
              <a
                className="underline"
                href="https://www.blackthrive.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Black Thrive
              </a>{' '}
              and advisory from Angela Tang.
            </p>
            <p className="text-grey-600 font-galosText mt-4 text-sm">
              Finally, thank you to the generous resourcing support and deep
              collaboration from Lankelly Chase, Arising Quo and Laudes
              Foundation.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
