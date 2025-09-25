import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
const Header = dynamic(() =>
  import('@/components/Header').then((m) => m.Header),
);
const M2MAnimation = dynamic(() => import('@/components/IntroAnimation'));
const OtherSections = dynamic(() =>
  import('@/components/OtherSections').then((m) => m.OtherSections),
);
const CardGrid = dynamic(() =>
  import('@/components/CardGrid').then((m) => m.CardGrid),
);
import { SectionTitle } from '@/components/SectionTitle';

import Footer from '@/components/Footer';

const InfoBubble = ({ children }) => (
  <div className="font-galosText mb-4 max-w-3xl rounded-[70px] bg-white p-12 text-xl text-blue-800 drop-shadow-md drop-shadow-blue-800">
    {children}
  </div>
);

export default function HomePage() {
  return (
    <>
      <main>
        <Header />
        {/* Welcome Section */}
        <section>
          <div className="section-shadow">
            <M2MAnimation />
          </div>
        </section>
        <div>
          <Navbar activePage="Home" />

          <CardGrid />
          <OtherSections />

          <section className="grid-bg px-4 py-20">
            <div className="relative mx-auto max-w-screen-xl">
              <SectionTitle>Still curious?</SectionTitle>

              <div className="curiousBg relative flex flex-col items-center gap-8 p-16">
                <InfoBubble>
                  {' '}
                  We welcome insight, reflection and participation from anyone
                  who feels moved by the ideas we’ve presented here.
                </InfoBubble>
                <InfoBubble>
                  Get involved by signing up to our newsletter or reaching out
                  to us at: <br />
                  <br />
                  <a
                    className="font-semibold"
                    href="mailto:beyondtherules@darkmatterlabs.org"
                  >
                    beyondtherules@darkmatterlabs.org
                  </a>
                  .
                </InfoBubble>
              </div>
            </div>
          </section>
          <div className="grid-bg">
            <section className="rounded-[261px] bg-[#2F7CFF] px-4 py-20">
              <div className="mx-auto max-w-screen-xl">
                <h2 className="heading text-warm-grey pb-4">Thank you</h2>
                <div className="sm:grid sm:grid-cols-2 sm:gap-8">
                  <div>
                    <p className="text-warm-grey font-galosText text-sm">
                      Thank you to all the Partners who co-developed, tested or
                      provided input to the Many-to-Many work.
                    </p>

                    <p className="text-warm-grey font-galosText mt-4 text-sm">
                      This includes the Many-to-Many Learning Network James Lock
                      -{' '}
                      <a
                        className="underline"
                        href="https://www.weareopus.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        We are Opus
                      </a>
                      , Kathleen Kelly -{' '}
                      <a
                        className="underline"
                        href="https://localmotion.org.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Local Motion
                      </a>
                      , Leah Black -
                      <a
                        className="underline"
                        href="https://regenerativefuturesfund.org.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Regenerative Futures Fund
                      </a>
                      , Lisa Clarke -{' '}
                      <a
                        className="underline"
                        href="https://lankellychase.org.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Lankelly Chase
                      </a>
                      , Matt Bell and Karen Pilkington -{' '}
                      <a
                        className="underline"
                        href="https://www.plymouthoctopus.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Plymouth Octopus Project
                      </a>
                      , Zahra Davidson and Dan Ford -{' '}
                      <a
                        className="underline"
                        href="https://www.huddlecraft.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Huddlecraft
                      </a>
                      , advisory from Angela Tang and our Lead Edge Testers of
                      Andy Crosby -{' '}
                      <a
                        className="underline"
                        href="https://www.ciacic.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Collective Impact Agency
                      </a>
                      , Guppi Bola -{' '}
                      <a
                        className="underline"
                        href="https://decolonisingeconomics.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Decolonising Economics
                      </a>
                      , Joey Harfouche -{' '}
                      <a
                        className="underline"
                        href="https://www.opensocietyfoundations.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open Society Foundation
                      </a>
                      , Irene Lopez de Vallejo -{' '}
                      <a
                        className="underline"
                        href="https://www.disco.coop/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        DisCo
                      </a>
                      , Lucas Counter -{' '}
                      <a
                        className="underline"
                        href="https://spaceofurgency.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Space of Urgency
                      </a>
                      .
                    </p>
                  </div>
                  <div>
                    <p className="text-warm-grey font-galosText text-sm">
                      Also a huge thank you to all the Partners who laid the
                      foundations for this Many-to-Many work as part of the work
                      on Beyond the Rules including{' '}
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
                    <p className="text-warm-grey font-galosText mt-4 text-sm">
                      Finally, thank you to the generous resourcing support and
                      deep collaboration from{' '}
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
                        href="https://arisingquo.com//"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Arising Quo
                      </a>{' '}
                      and{' '}
                      <a
                        className="underline"
                        href="https://www.laudesfoundation.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Laudes Foundation
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="heading-md flex items-center justify-center py-10 text-blue-600">
              <button className="mr-10 mb-4 rounded-full bg-blue-800 px-6 py-2 text-white transition-colors hover:bg-blue-700">
                <a
                  href="https://form.typeform.com/to/jpm8rdp1"
                  rel="noopener noreferrer"
                >
                  Subscribe to the Newsletter →
                </a>
              </button>
              <button className="text-grey-600 mb-4 rounded-full bg-blue-400 px-6 py-2 transition-colors hover:bg-blue-300">
                <a href=""></a>
                Privacy Policy →
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
