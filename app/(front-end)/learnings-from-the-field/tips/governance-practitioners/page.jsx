import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title:
    'Top Tips for Complex Governance Practitioners and Process Stewards - Many-to-Many System',
};

export default function GovernancePractitioners() {
  return (
    <>
      <Navbar activePage="Learnings from the Field" />
      <main>
        {/* Breadcrumb */}
        <div className="container-main py-4">
          <Link
            href="/learnings-from-the-field"
            className="text-regular text-grey-600 hover:text-blue-800"
          >
            ← Learning from the Field
          </Link>
        </div>

        {/* Hero Section */}
        <section className="bg-blue-800 py-20">
          <div className="container-main">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h1 className="heading mb-6 text-white">
                  Top Tips for Complex Governance Practitioners and Process
                  Stewards
                </h1>
                <p className="text-regular max-w-4xl text-white">
                  You're supporting a group of people to navigate complexity,
                  difference, and uncertainty together, towards a mission that
                  requires collaboration across many different actors. You are
                  building and testing structures to organise, make decisions
                  and learn together. Your work is emotional, political and
                  often invisible - and yet, without it, distributed governance
                  doesn't stick.
                </p>
              </div>
              <div className="ml-8">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
                    <div className="h-8 w-8 rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content - Five Tips */}
        <section className="bg-white py-20">
          <div className="container-main">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              {/* Tip 1 */}
              <div className="space-y-6">
                <h2 className="heading text-blue-800">
                  1. Start with relationships
                </h2>
                <blockquote className="text-regular text-orange-800 italic">
                  "You couldn't design this from the start. It's had to come out
                  of conversation and relationship." Leah Black, RFF
                </blockquote>
              </div>
              <div className="space-y-6">
                <p className="text-regular text-grey-600">
                  It can be tempting to jump into designing roles or
                  decision-making processes- but the strongest foundations are
                  relational. Focus on building enough trust for hard
                  conversations, and shape context-specific structures rooted in
                  those relationships. Where you've inherited problematic
                  structures, focus on building relational capacity in the
                  system before interrogating and redesigning them. You might
                  start with roles and processes that are 'good enough for now';
                  be prepared to revisit these when people are ready to go
                  deeper.
                </p>
                <ul className="text-regular text-grey-600 list-inside list-disc space-y-4">
                  <li>
                    In his work at POP, Matt Bell describes the importance of
                    building relationships before scaling any formal
                    decision-making. He and colleagues drew inspiration from The
                    Community Weaving Handbook and Network Weaver to centre
                    relationships and belonging.
                  </li>
                  <li>
                    Leah at the Regenerative Futures Fund talks about letting
                    the structures emerge through relationships, not assumption,
                    and how trust needs to build in multiple directions - not
                    just between "community" and "funder", but across the entire
                    system.
                  </li>
                  <li>
                    Kathleen Kelly at Local Motion shared about using coaching
                    tools to establish emotional safety early, and how often her
                    role has been about holding space for discomfort,
                    uncertainty, and reimagining what's possible.
                  </li>
                  <li>
                    James Lock reflected on the River Don project and how they
                    chose to keep it informal, allowing relationships to lead
                    and avoid premature legalisation of roles and ownership.
                  </li>
                </ul>
              </div>

              {/* Tip 2 */}
              <div className="space-y-6">
                <h2 className="heading text-blue-800">
                  2. Hold space for conflict, don't avoid it
                </h2>
                <blockquote className="text-regular text-orange-800 italic">
                  "Name and practise for conflict early. Conflict is normal, but
                  it's important to be prepared to hold it." Kathleen Kelly
                </blockquote>
              </div>
              <div className="space-y-6">
                <p className="text-regular text-grey-600">
                  Stewards sometimes feel they need to "keep things harmonious"
                  - but there will always be tension and conflict in complex
                  collaborations, and it can be generative, creative and serve
                  to deepen relationships. What matters is having protocols,
                  language and practices to navigate tension before it becomes
                  rupture, and processes for repair where rupture is
                  unavoidable.
                </p>
                <ul className="text-regular text-grey-600 list-inside list-disc space-y-4">
                  <li>
                    Local Motion co-developed designed alliances and used Deep
                    Democracy practices in each of the 6 places to prepare them
                    to hold tensions generatively and move towards decisions
                    with an awareness of the resistance involved.
                  </li>
                  <li>
                    Opus highlighted the need for emotional literacy and the
                    capacity to stay with uncertainty.
                  </li>
                  <li>
                    The Regenerative Futures Fund made space for values-driven
                    disagreement as part of their co-design process, which led
                    to fresh insights that could inform the design.
                  </li>
                </ul>
              </div>

              {/* Tip 3 */}
              <div className="space-y-6">
                <h2 className="heading text-blue-800">
                  3. Build learning into the system from the start
                </h2>
                <blockquote className="text-regular text-orange-800 italic">
                  "The learning is not an output - it is the work." - James
                  Lock, Opus
                </blockquote>
              </div>
              <div className="space-y-6">
                <p className="text-regular text-grey-600">
                  Complex collaboration is about learning from feedback and then
                  changing from that awareness. Learning is the work. Bake
                  reflection, feedback and documentation into the process from
                  the beginning so that adaptation becomes part of governance.
                  Set aside resources for the time and space needed to make
                  sense across the system.
                </p>
                <ul className="text-regular text-grey-600 list-inside list-disc space-y-4">
                  <li>
                    James Lock (Opus) stressed that learning infrastructure
                    (check-ins, transparent documentation, reflexivity) is core
                    to sustaining collaboration. Opus make learning and
                    meta-reflection part of the design, not an afterthought.
                  </li>
                  <li>
                    POP used iterative sensemaking and open learning spaces to
                    share insights as they emerged.
                  </li>
                  <li>
                    LocalMotion co-designed their learning approach with local
                    communities and funders.
                  </li>
                  <li>
                    Annette Dhami described a risk of centralising learning and
                    design into the steward's role. Even in contexts with
                    capacity and timeline constraints, it's worth considering
                    that over-centralisation here can accidentally incapacitate
                    the group later on.
                  </li>
                </ul>
              </div>

              {/* Tip 4 */}
              <div className="space-y-6">
                <h2 className="heading text-blue-800">
                  4. Practise and iterate
                </h2>
                <div className="space-y-4">
                  <blockquote className="text-regular text-orange-800 italic">
                    "Start small and manageable, then grow" - Matt Bell, POP
                  </blockquote>
                  <blockquote className="text-regular text-orange-800 italic">
                    "You can't just spec it. You have to live it." - James Lock,
                    Opus
                  </blockquote>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-regular text-grey-600">
                  Don't wait until everything is figured out. Start with "just
                  enough" governance or structure and iterate. Try things in
                  low-stakes ways - learning by doing is how this work grows.
                  Collaborators need just enough scaffolding to orient and feel
                  protected, without over-designing governance too early.
                </p>
                <ul className="text-regular text-grey-600 list-inside list-disc space-y-4">
                  <li>
                    Kathleen Kelly (Local Motion) described the art of creating
                    "gentle slopes" - not overwhelming people with structure but
                    offering enough to support practice.
                  </li>
                  <li>
                    POP used contracts carefully, only where necessary to
                    protect relationships without undermining them.
                  </li>
                </ul>
              </div>

              {/* Tip 5 */}
              <div className="space-y-6">
                <h2 className="heading text-blue-800">
                  5. Make the invisible visible
                </h2>
                <blockquote className="text-regular text-orange-800 italic">
                  "Much of the work was invisible: building alignment with
                  funders, calming anxieties, and pacing the project to protect
                  relationships." - Leah Black, RFF
                </blockquote>
              </div>
              <div className="space-y-6">
                <p className="text-regular text-grey-600">
                  Much of the work that sustains collaboration is hidden -
                  emotional labour, informal care, political negotiation, and
                  cultural weaving. This happens at multiple levels; a steward
                  may work with a funder's trustees, CEO, directors and staff
                  teams. Stewards play a vital role in surfacing, valuing and
                  naming this invisible work so that it can be recognised,
                  shared and supported.
                </p>
                <ul className="text-regular text-grey-600 list-inside list-disc space-y-4">
                  <li>
                    Leah Black (RFF) spoke about the invisible labour of
                    building alignment with funders, calming anxieties, and
                    pacing the project to protect relationships.
                  </li>
                  <li>
                    Kathleen Kelly (Local Motion) described holding emotional
                    safety and supporting people through discomfort as central
                    but often unseen parts of her role.
                  </li>
                  <li>
                    POP highlighted that the relational glue is exhausting to
                    hold when it goes unacknowledged or unsupported.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="bg-[#FFE091] py-20">
          <div className="container-main">
            <h2 className="heading mb-6 text-blue-800">
              And remember... Don't do it alone.
            </h2>
            <p className="text-regular text-grey-600 max-w-4xl">
              Nearly every steward interviewed talked about the loneliness of
              their role. Wherever possible, find others who are doing similar
              work - to decompress, get perspective, and share resources. Even
              better, build this kind of peer support into your structure from
              the start. You don't have to hold it all. In fact, trying to do so
              can reproduce problematic power dynamics. Be transparent about
              your limits and create conditions for others to step in.
            </p>
          </div>
        </section>

        {/* Navigation Buttons */}
        <section className="bg-white py-20">
          <div className="container-main flex justify-center gap-8">
            <Link href="/learnings-from-the-field">
              <button className="rounded-full bg-blue-800 px-8 py-4 text-white transition-colors hover:bg-blue-700">
                ← Previous
              </button>
            </Link>
            <Link href="/learnings-from-the-field">
              <button className="rounded-full bg-blue-800 px-8 py-4 text-white transition-colors hover:bg-blue-700">
                Next →
              </button>
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
