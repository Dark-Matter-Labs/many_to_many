import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import JourneyMap from '@/components/system-blockers/JourneyMap';
import {
  ArchetypesSection,
  HowToUseSection,
} from '@/components/system-blockers/IntroSections';
import { DEFINITION } from '@/components/system-blockers/content';
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
  'The cultural, legal, financial and organisational conditions that keep promising collaborations locked into inherited ways of working: where they get fixed, who they block and who they enable.';

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
        <div className="flex flex-col items-start gap-8 md:flex-row">
          <SystemBlockerIcon size={140} />
          <div className="max-w-3xl">
            <h1 className="heading mb-4 text-blue-800">
              System blockers and enablers
            </h1>
            <p className="heading-md mb-6 text-blue-800">{DEFINITION.lead}</p>
            {DEFINITION.body.map((paragraph) => (
              <p key={paragraph} className="text-regular mb-4 text-grey-600">
                {paragraph}
              </p>
            ))}
            <p className="text-regular mb-6 text-grey-600">
              A growing set of these surfaced while the{' '}
              <Link href="/discover-the-system" className="text-blue-800 underline">
                Many-to-Many materials
              </Link>{' '}
              were being developed. They show up differently in different
              kinds of collaboration, so each kind needs its own space to be
              made legible and tested in practice. Below is a first attempt at
              making that visible.
            </p>
            <p className="text-small text-grey-600">
              <span className="tag mr-2 rounded-[10px] border border-dashed border-grey-600 px-2 py-0.5">
                A sketch to be corrected
              </span>
              Drawn from practitioner conversations, desk research and a
              workshop in Sheffield.
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
        <ArchetypesSection />
        <HowToUseSection />
        <ReflectionSection />
        <section id="journey" aria-labelledby="journey-title" className="grid-bg py-20">
          <div className="container-main">
            <SectionIntro
              id="journey-title"
              eyebrow="The journey · philanthropy-funded collaboration"
              title="Where conditions get fixed"
            >
              <p>
                We map conditions against the life of a collaboration. At each
                stage there are decision points where some certainty gets
                locked in. Some certainty is genuinely needed at these moments.
                The question is how it gets created, and at whose cost.
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
