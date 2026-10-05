import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import JourneyMap from '@/components/system-blockers/JourneyMap';
import SystemBlockerIcon from '@/components/system-blockers/SystemBlockerIcon';
import {
  AboutSection,
  FeedbackSection,
  PatternsSection,
  ReflectionSection,
  RuleSpectrumSection,
  SectionIntro,
  ToolsSection,
} from '@/components/system-blockers/Sections';

const DESCRIPTION =
  'Where funding, legal and organisational conditions get fixed across the life of a philanthropy-funded collaboration: who they block, who they enable, and where there may be room to move.';

export const metadata = {
  title: 'System Blockers and Enablers | Challenges',
  description: DESCRIPTION,
  alternates: { canonical: '/challenges/system-blockers' },
  openGraph: {
    title: 'System Blockers and Enablers | Many-to-Many System',
    description: DESCRIPTION,
    url: '/challenges/system-blockers',
    siteName: 'Many-to-Many System',
    images: [
      {
        url: '/m2m_cover.png',
        width: 1200,
        height: 630,
        alt: 'System blockers and enablers',
      },
    ],
  },
};

function Hero() {
  return (
    <header className="bg-gradient-to-b from-[#ffdcc8] to-white pt-32 pb-16">
      <div className="container-main">
        <nav aria-label="Breadcrumb" className="text-small mb-10 text-blue-800">
          <Link href="/challenges">← Challenges</Link>
        </nav>
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
          <SystemBlockerIcon size={140} />
          <div className="max-w-3xl">
            <h1 className="heading mb-4 text-blue-800">
              System blockers and enablers
            </h1>
            <p className="text-regular mb-4 text-grey-600">
              Some of what makes collaboration hard isn’t inside the
              collaboration at all. It sits in the system around it: grant
              terms, legal duties, board processes, the way risk gets written
              down. The same condition that blocks one partner often protects
              another.
            </p>
            <p className="text-small text-grey-600">
              <span className="tag mr-2 rounded-[10px] border border-dashed border-grey-600 px-2 py-0.5">
                Working sketch
              </span>
              Drawn from practitioner conversations, desk research and a
              workshop in Sheffield. Please correct it.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function SystemBlockersPage() {
  return (
    <div>
      <Navbar activePage="Challenges" />
      <main>
        <Hero />
        <ReflectionSection />
        <section id="journey" aria-labelledby="journey-title" className="grid-bg py-20">
          <div className="container-main">
            <SectionIntro
              id="journey-title"
              eyebrow="The journey of a philanthropy-funded collaboration"
              title="Where conditions get fixed"
            >
              <p className="mb-4">
                We map conditions against the life of a collaboration. At each
                stage there are decision points where some certainty gets
                locked in. Some certainty is genuinely needed at these moments.
                The question is how it gets created, and at whose cost.
              </p>
              <p className="text-small">
                The dashed stage came from practitioners in Sheffield, who told
                us some of the most important conditions sit before stage one.
                We already know the journey is less linear than it looks here.
              </p>
            </SectionIntro>
            <JourneyMap />
          </div>
        </section>
        <RuleSpectrumSection />
        <PatternsSection />
        <FeedbackSection />
        <ToolsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
