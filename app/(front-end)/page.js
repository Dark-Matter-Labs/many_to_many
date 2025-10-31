import dynamic from 'next/dynamic';
import Image from 'next/image';
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

const AudienceCard = ({ icon, title, children, imgW, imgH }) => (
  <div className="whoBg flex max-w-xs flex-col items-center lg:max-w-xl">
    {/* Icon circle */}
    <div className="pt-8">
      <Image width={imgW} height={imgH} src={icon} alt="icon" />
    </div>
    {/* Card content */}
    <div className="mb-2 px-10 pt-4 pb-10">
      <h3 className="heading-md mb-3 font-semibold text-blue-800">{title}</h3>
      <p className="text-regular text-grey-600">{children}</p>
    </div>
  </div>
);

export default function HomePage() {
  return (
    <>
      <main>
        <Navbar activePage="Home" />
        <Header />

        {/* Who is it for? Section */}
        <section className="grid-bg pt-[160px]">
          <div className="container-main">
            <div className="relative mx-4 flex-row items-start gap-20 sm:mx-0 sm:flex">
              <SectionTitle>Who is it for?</SectionTitle>
            </div>

            {/* Three audience cards */}
            <div className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
              <AudienceCard
                icon="/gov_prac.svg"
                title="Governance Practitioners"
                imgH={72}
                imgW={72}
              >
                who are already working in complex collaborations and struggling
                to find or create suitable governance and organising structures
                for their complex work and/or who want to disrupt norms around
                value, ownership, risk and power.
              </AudienceCard>

              <AudienceCard
                icon="/funder.svg"
                title="Funders"
                imgH={72}
                imgW={72}
              >
                especially those seeking to disrupt these same norms or invest
                effectively in systemic change initiatives.
              </AudienceCard>

              <AudienceCard
                icon="/legal.svg"
                title="Legal and Financial Professionals"
                imgH={72}
                imgW={72}
              >
                including lawyers and accountants, whose expertise is vital for
                societal transformation, particularly around governance, legal
                structuring, and contracting.
              </AudienceCard>
            </div>
          </div>
        </section>

        <section>
          <div className="section-shadow">
            <M2MAnimation />
          </div>
        </section>

        <div>
          <CardGrid />
          <OtherSections />

          <section className="grid-bg py-[160px]">
            <div className="container-main">
              <SectionTitle>Still curious?</SectionTitle>

              <div className="curiousBg relative flex flex-col items-center p-4 sm:p-24 md:gap-8">
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
                    beyondtherules @ darkmatterlabs.org
                  </a>
                  .
                </InfoBubble>
              </div>
            </div>
          </section>
          <section className="relative bg-blue-400">
            <div className="grid-bg pointer-events-none absolute inset-0 h-[50%]"></div>
            <div className="relative rounded-[261px] bg-blue-300 px-20 py-20 lg:px-0">
              <div className="container-main">
                <h2 className="heading text-warm-grey pb-4">Thank you</h2>
                <div className="sm:grid sm:grid-cols-2 sm:gap-8">
                  <div>
                    <p className="text-warm-grey font-galosText text-sm">
                      Thank you to all the Partners who co-developed, tested or
                      provided input to the Many-to-Many work.
                    </p>

                    <p className="text-warm-grey font-galosText mt-4 text-sm">
                      This includes David Hunter -{' '}
                      <a
                        className="underline"
                        href="https://www.weareopus.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Bates Wells
                      </a>{' '}
                      and the Many-to-Many Learning Network James Lock -{' '}
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
                      , Leah Black -{' '}
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
                      </a>{' '}
                      and our Lead Edge Testers of Andy Crosbie -{' '}
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
                      , Jowe Harfouche -{' '}
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
                      &apos;s (MCN) Enabling Team,{' '}
                      <a
                        className="underline"
                        href="https://www.blackthrive.org.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Black Thrive
                      </a>{' '}
                      and{' '}
                      <a
                        className="underline"
                        href="https://www.weareopus.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Bates Wells
                      </a>
                      .
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
            </div>

            <div className="container-main heading-md items-center justify-center py-10 text-blue-600 sm:flex">
              <button className="text-grey-300 mr-10 mb-4 rounded-full bg-blue-800 px-6 py-2 transition-colors hover:bg-blue-700">
                <a
                  href="https://form.typeform.com/to/jpm8rdp1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Subscribe to the Newsletter →
                </a>
              </button>
              <button className="text-grey-300 mb-4 rounded-full bg-blue-300 px-6 py-2 transition-colors hover:bg-blue-800">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://darkmatterlabs.org/privacy-policy"
                >
                Privacy Policy →
                </a>
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
