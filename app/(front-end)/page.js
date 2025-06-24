import { Navbar } from "@/components/Navbar";
import { Header } from "@/components/Header";
import { OtherSections } from "@/components/OtherSections";
import { CardGrid } from "@/components/CardGrid";
import { SectionTitle } from "@/components/SectionTitle";
import { CurvedArrow } from "@/components/CurvedArrow";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Header />
        <OtherSections />
        <CardGrid />

        {/* Still Curious Section */}
        <section className="py-20 px-4">
          <div className="max-w-screen-md mx-auto relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full border-2 border-dashed border-orange-400 rounded-full transform rotate-12"></div>
            </div>
            <div className="relative bg-[#F4F4F8] p-8 flex flex-col items-center gap-8">
              <SectionTitle>
                Still curious? about who, why, and how to contribute?
              </SectionTitle>
              <div className="flex flex-col gap-4 text-center font-galosText">
                <div className="bg-white rounded-3xl p-4 shadow-sm">
                  under the menu you can find all subsections on who, why, when,
                  contacts and partners.
                </div>
                <div className="bg-white rounded-3xl p-4 shadow-sm">
                  How can you contribute? You can subscribe to our Newsletter,
                  follow the social media.. and so on.
                </div>
                <div className="glow-bubble text-blue-600">
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-md text-left">
                    <h4 className="font-bold mb-2">
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

      <footer className="py-10 text-center bg-gray-200">
        <div className="flex flex-col items-center text-blue-600">
          <CurvedArrow className="text-orange-500" />
          <span className=" font-galosText text-2xl my-2">
            Many-to-Many Systems
          </span>
          <CurvedArrow className="text-orange-500 transform -scale-y-100" />
        </div>
      </footer>
    </>
  );
}
