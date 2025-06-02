import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="text-[32px] sm:text-[48px] font-bold text-center">
          Welcome to Many-to-Many Systems
        </h1>
        <div className="bg-gray-400 p-10">
          <p>The Many-to-Many System aims to supports collaborations tackling complex, entangled challenges.</p>

          <p>where disrupting norms around value, ownership, and power is essential</p>

          <p>for creating viable, sustainable solutions.</p>
        </div>
        <div className="flex flex-row gap-[16px]">
          <div className="mx-80"></div>
          <div>
            <p>
              Solving today's complex, interconnected problems requires what we term "complex collaborations[*]" – bringing together many diverse groups (public, private, civic) with many new perspectives, including future generations and the natural world. 
              While many collaborations like this are already doing great work, we believe that finding better ways to support how they are structured and organised them could unlock more effective, system-level change.
              </p>
              <p>The Many-to-Many System is focussed on unlocking the governance, organising, legal, and learning structures of complex collaborations to enable many resources – not just money, but also knowledge and relationships – to flow more freely, and to foster many new ways of working that embrace diverse value exchange.</p>
            </div>
        </div>
        <h2  className="text-[24px] sm:text-[32px] font-bold text-center">What can we share with you</h2>
        <p>A diversity of materials, topics, learnings in different formats and experiences.</p>
        <div className="grid grid-cols-4 gap-10 mb-8">
          <div>
            <h3>Subject Knowledge</h3>
          </div>
          <div>
            <h3>Practical Tools</h3>
          </div>
          <div>
            <h3>Field Guide</h3>
          </div>
          <div>
            <h3>Community</h3>
          </div>
        </div>
        <h2  className="text-[24px] sm:text-[32px] font-bold text-center">Who is this for?</h2>
        <p>Anyone can access this information but some might find certain information more useful </p>
        <Image
          src="/home.png"
          alt="Complex Collaborations"
          width={800}
          height={600}
          className="rounded-lg shadow-lg"
        />
        <h2  className="text-[24px] sm:text-[32px] font-bold text-center pt-8">The Learning Network</h2>
        <p>The project is not just abstract, a Learning Network was and is involved.</p>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div>
            <h3>“A quote by the Learning Network here one quote”</h3>
          </div>
          <div>
            <h3>“A quote by the Learning Network here one quote”</h3>
          </div>
          <div>
            <h3>“A quote by the Learning Network here one quote”</h3>
          </div>
        </div>
        <h2  className="text-[24px] sm:text-[32px] font-bold text-center pt-8">The structure and navigation</h2>
        <p>The information is complex and a lot, we structured it in 3 entry points.</p>
        <div className="grid grid-cols-3 gap-20">
          <div className="border border-gray-300 p-4 rounded-lg">
            <h3>System Guide</h3>
            <p>Go through the sequential journey and explore each element.</p>
          </div>
          <div className="border border-gray-300 p-4 rounded-lg">
            <h3>Stories</h3>
            <p>Connect with real experiences.</p>
          </div>
          <div className="border border-gray-300 p-4 rounded-lg">
            <h3>Legal Themes</h3>
            <p>Find the topic most pressing for you.</p>
          </div>
        </div>
        <h2  className="text-[24px] sm:text-[32px] font-bold text-center pt-8">DIY Approach</h2>
        <p>See all the key information without any scaffolding.</p>
        <div className="grid grid-cols-3 gap-20">
          <div className="border border-gray-300 p-4 rounded-lg">
            <h3>Tools</h3>
            <p>Go through the tools repository.</p>
          </div>
          <div className="border border-gray-300 p-4 rounded-lg">
            <h3>System Blockers</h3>
            <p>Go through the tools repository.</p>
          </div>
          <div className="border border-gray-300 p-4 rounded-lg">
            <h3>Deep Code Shifts</h3>
            <p>Go through the tools repository.</p>
          </div>
        </div>
        <h2  className="text-[24px] sm:text-[32px] font-bold text-center pt-8">Our Journey & Process</h2>
        <div className="border border-gray-300 p-4 rounded-lg">
            <h3>Read more</h3>
          </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
