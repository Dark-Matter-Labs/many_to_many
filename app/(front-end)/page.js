import { Navbar } from '@/components/Navbar';
import { Header } from '@/components/Header';
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
        <OtherSections />
        <CardGrid />

        <section className="px-4 py-20">
          <div className="relative mx-auto max-w-screen-md">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-full w-full rotate-12 transform rounded-full border-2 border-dashed border-orange-400"></div>
            </div>
            <div className="relative flex flex-col items-center gap-8 bg-[#F4F4F8] p-8">
              <SectionTitle>
                Still curious? about who, why, and how to contribute?
              </SectionTitle>
              <div className="font-galosText flex flex-col gap-4 text-center">
                <div className="rounded-3xl bg-white p-4 shadow-sm">
                  under the menu you can find all subsections on who, why, when,
                  contacts and partners.
                </div>
                <div className="rounded-3xl bg-white p-4 shadow-sm">
                  How can you contribute? You can subscribe to our Newsletter,
                  follow the social media.. and so on.
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
