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

        <section className="px-4 py-20">
          <div className="relative mx-auto max-w-screen-md">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-full w-full rotate-12 transform rounded-full border-2 border-dashed border-orange-400"></div>
            </div>
            <div className="relative flex flex-col items-center gap-8 bg-[#F4F4F8] p-8">
              <SectionTitle>Still curious?</SectionTitle>
              <div className="font-galosText flex flex-col gap-4 text-center">
                <div className="rounded-3xl bg-white p-4 shadow-sm">
                  We welcome insight, reflection and participation from anyone
                  who feels moved by the ideas we’ve presented here.
                </div>
                <div className="rounded-3xl bg-white p-4 shadow-sm">
                  If that’s you, there are lots of ways to get involved so
                  please check out the options below [socials??] Alternatively,
                  if you would just like to connect please reach out to
                  beyondtherules@darkmatterlabs.org.
                </div>
                <div className="glow-bubble text-blue-600">
                  <div className="rounded-3xl bg-white/80 p-6 text-left shadow-md backdrop-blur-sm">
                    <h4 className="mb-2 font-bold">
                      Thanks to all partners that contributed to the projects:
                    </h4>
                    <p className="text-sm">
                      DARK MATTER LABS - HUDDLECRAFT - POP PLYMOUTH - TITLE
                      ORGANISATION -TITLE ORGANISATION–TITLE ORGANISATION
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
