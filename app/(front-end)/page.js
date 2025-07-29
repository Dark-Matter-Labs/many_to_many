import { Navbar } from '@/components/Navbar';
import { Header } from '@/components/Header';
import { OtherSections } from '@/components/OtherSections';
import { CardGrid } from '@/components/CardGrid';
import { SectionTitle } from '@/components/SectionTitle';
import { CurvedArrow } from '@/components/CurvedArrow';

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Header />
        <OtherSections />
        <CardGrid />

        {/* Still Curious Section */}
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

      <footer className="bg-gray-200 py-10 text-center">
        <div className="flex flex-col items-center text-blue-600">
          <CurvedArrow className="text-orange-500" />
          <span className="font-galosText my-2 text-2xl">
            Many-to-Many Systems
          </span>
          <CurvedArrow className="-scale-y-100 transform text-orange-500" />
        </div>
      </footer>
    </>
  );
}
