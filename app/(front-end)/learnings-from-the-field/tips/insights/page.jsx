import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '@/components/TipsHeroSection.module.css';

export const metadata = {
  title:
    'Complex Collaboration in Practice: Insights on Roles & Accountabilities',
};

export default function Insights() {
  return (
    <>
      <Navbar activePage="Learnings from the Field" />
      <main>
        {/* Breadcrumb */}
        <div className={'learning-back mt-28 px-20 py-2'}>
          <Link
            href="/learnings-from-the-field"
            className="text-small text-blue-800 hover:underline"
          >
            ← Learning from the Field
          </Link>
        </div>

        <section className={'heading ' + styles.heroGov}>
          <h1 className="ml-8 max-w-3xl text-blue-800 sm:ml-40">
            Complex Collaboration in Practice: Insights on Roles &amp;
            Accountabilities
          </h1>
        </section>

        {/* Hero Section */}
        <section className="bg-blue-800 py-20">
          <div className="container-main">
            <div className="mx-auto max-w-2xl">
              <p className="text-regular max-w-4xl text-white">
                The Many-to-Many System was co-developed with experienced
                practitioners already navigating the challenges of complex
                governance. Through a dedicated learning network, these partners
                shared insights from their live initiatives and tested
                components of the Many-to-Many System in their diverse contexts.
                This page gathers reflections from a sub-group of practitioners
                focusing specifically on how they approached roles and
                accountability in their different contexts.
              </p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="bg-[#FFF4D6] py-20">
          <div className="container-main">
            <div className="mx-auto max-w-2xl space-y-6">
              <p className="text-regular max-w-4xl text-blue-300">
                We&apos;re sharing these reflections to provide more insight on
                structuring roles and accountabilities in complex
                collaborations. They can be read alongside the Role Cards
                Example from the Proof of Possibility. We hope these will
                provide useful prompts to people doing complex collaboration
                work in practice - including distributed governance,
                collaborative resourcing, shared infrastructure, and deep
                relational work.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-white py-20">
          <div className="container-main">
            <div className="mx-auto max-w-4xl space-y-16">
              {/* Roles and Accountabilities */}
              <section className="space-y-6">
                <h2 className="heading text-blue-800">
                  Roles and accountabilities
                </h2>
                <blockquote className="text-regular text-orange-800 italic">
                  “M2M roles are not job descriptions - they’re living
                  agreements. The work is to keep them alive.”
                </blockquote>
                <p className="text-regular text-grey-600">
                  While many collaboration practices apply when working with
                  roles and accountabilities, Many-to-Many contexts bring
                  specific qualities and challenges:
                </p>
                <ul className="text-regular text-grey-600 list-disc space-y-4 pl-8">
                  <li>
                    <b>High complexity and emergence</b> – Multiple
                    organisations, cultures, and incentives mean roles can’t be
                    set once and for all. Clarity must be continually
                    re-generated.
                  </li>
                  <li>
                    <b>Fluid roles</b> – People move between roles as capacity,
                    focus, and energy shift. This requires &apos;just
                    enough&apos; scaffolding: enough structure to orient, not
                    enough to stifle.
                  </li>
                  <li>
                    <b>Visibility and shared awareness</b> – Without explicit
                    visibility, accountabilities blur, risks stay hidden, and
                    invisible labour grows.
                  </li>
                  <li>
                    <b>Co-responsibility</b> – Accountability is built by
                    actively stepping into shared responsibility for the
                    outcomes of the whole, not just one&apos;s part.
                  </li>
                  <li>
                    <b>Capacity constraints</b> – Co-governance takes time and
                    attention. Recognising capacity as a live, changing factor
                    (not a static input) is essential.
                  </li>
                </ul>
              </section>

              {/* Common pitfalls */}
              <section className="space-y-6">
                <h2 className="heading text-blue-800">Common pitfalls</h2>
                <blockquote className="text-regular text-orange-800 italic">
                  “When orchestration, sensemaking, and documentation aren’t
                  distributed, the initiator becomes a bottleneck - and burnout
                  becomes a risk.”
                </blockquote>
                <p className="text-regular text-grey-600">
                  We noticed certain patterns when exploring roles and
                  accountabilities that can become missteps or pitfalls, and
                  risk the collaboration failing as a result:
                </p>
                <ul className="text-regular text-grey-600 list-disc space-y-4 pl-8">
                  <li>
                    <b>Fragility through over-dependence on initiators</b> – The
                    system never transitions to shared responsibility, and there
                    is an &apos;agency vacuum&apos; when the initiator steps
                    away or changes role.
                  </li>
                  <li>
                    <b>Illusion of flatness</b> – Mistaking distributed
                    governance for “everyone in every decision”, which slows and
                    over-complicates decision-making to the point of inertia.
                  </li>
                  <li>
                    <b>Underestimating and undervaluing the overhead</b> –
                    Neglecting the 20–30% of time and budget needed for
                    governance, alignment, and reflection, which is critical to
                    effective complex collaboration.
                  </li>
                  <li>
                    <b>Invisible care work</b> – Relational and emotional labour
                    often goes unseen and unsupported, risking extraction from
                    those who play those roles and undermining the collaboration
                    by not understanding where the work is actually happening.
                  </li>
                  <li>
                    <b>Lack of fluidity in practice</b> – Despite good
                    intentions, people get stuck in roles and power pools around
                    specific people, building overreliance on them to make
                    things happen.
                  </li>
                  <li>
                    <b>Low collective capacity</b> – When too many participants
                    bring low or scattered attention, shared accountability
                    erodes.
                  </li>
                </ul>
              </section>

              {/* Tactics from practitioners */}
              <section className="space-y-6">
                <h2 className="heading text-blue-800">
                  Tactics from practitioners
                </h2>
                <p className="text-regular text-grey-600">
                  These are not prescriptions but patterns – things that
                  practitioners have found useful to keep roles alive, visible,
                  and adaptive over time. Working with roles and
                  accountabilities in complex collaborations is less about
                  finding the perfect structure, and more about cultivating
                  living systems of visibility, responsiveness, and care.
                </p>
                <blockquote className="text-regular text-orange-800 italic">
                  “Describe what is known, build the relationships to act when
                  it’s not, and create rhythms to keep both alive.”
                </blockquote>

                {/* 1. Lay strong foundations */}
                <div className="space-y-4">
                  <h3 className="heading text-blue-800">
                    1. Lay strong foundations
                  </h3>
                  <p className="text-regular text-grey-600">
                    Invest early in relational infrastructure and shared
                    culture: on a foundation of strong relationships, roles
                    become clearer, visibility across roles is easier, and
                    fluidity between roles is enabled. Building trust up front
                    is key.
                  </p>
                  <ul className="text-regular text-grey-600 list-disc space-y-3 pl-8">
                    <li>
                      <b>Assess “ripeness”</b> – Be real with each other about
                      the readiness of individuals and organisations to work
                      with uncertainty, power-sharing, and emergence. Work
                      through scenarios together to surface assumptions about
                      values and deep codes.
                    </li>
                    <li>
                      <b>Use group charters and user manuals</b> to make your
                      culture and ways-of-working expectations explicit. Share
                      the structures and tools that support you, and make group
                      agreements about how you&apos;ll work together.
                    </li>
                    <li>
                      <b>Budget generously</b> (for example ~20%) for alignment,
                      learning, and governance rhythms – and factor in
                      relationship- and capacity-building time in the set-up
                      phase (such as a &quot;Year 0&quot; dedicated to setting
                      up the collaboration). Invest in capabilities that support
                      relational, fluid working, such as feedback skills, peer
                      coaching, consent decision-making and deep democracy.
                    </li>
                  </ul>
                </div>

                {/* 2. Make roles visible */}
                <div className="space-y-4">
                  <h3 className="heading text-blue-800">
                    2. Make roles visible
                  </h3>
                  <blockquote className="text-regular text-orange-800 italic">
                    “Visibility is an act of care - it makes contribution,
                    power, and responsibility legible.”
                  </blockquote>
                  <ul className="text-regular text-grey-600 list-disc space-y-3 pl-8">
                    <li>
                      Map assets, roles, accountabilities, and capacity using
                      visual tools (for example Miro, Maptio, Mural or Kumu). It
                      can help to visualise how things are (existing power
                      dynamics) versus where you want to get to (your intended
                      network structure).
                    </li>
                    <li>
                      Include both task-based roles and inner roles (for example
                      &quot;governance custodian&quot;, &quot;connector&quot;,
                      &quot;sensemaker&quot;, &quot;care steward&quot;). This
                      supports shared awareness and accountability, brings
                      shared language to role fluidity, and makes visible work
                      that often goes unseen – including roles like &quot;voice
                      of nature&quot;.
                    </li>
                    <li>
                      Keep documentation alive. It helps for someone to hold a
                      &quot;role of looking after the roles&quot; (for example
                      an enabler, system orchestrator, steward, or coordinator),
                      including rhythms to refresh and update the shared picture
                      of who is holding what as you go.
                    </li>
                  </ul>
                </div>

                {/* 3. Scaffold for fluidity */}
                <div className="space-y-4">
                  <h3 className="heading text-blue-800">
                    3. Scaffold for fluidity
                  </h3>
                  <ul className="text-regular text-grey-600 list-disc space-y-3 pl-8">
                    <li>
                      Accept that roles will change. Integrate a &quot;good
                      enough patchwork&quot; of structures that can evolve, for
                      example a regular rhythm to review and update roles
                      (monthly or quarterly) to avoid constant churn.
                    </li>
                    <li>
                      Embed development, handover and onboarding pathways from
                      the start. Support people to grow in their roles and hand
                      them over when needed: be explicit about what people want
                      to learn and how to signal it&apos;s time to hand
                      something over.
                    </li>
                    <li>
                      Use regular retrospectives, critique and feedback sessions
                      to support each other&apos;s work, surface tensions and
                      re-align. For example, in some Huddles there are 6-weekly
                      &quot;Power Up&quot; sessions where everybody shares what
                      they&apos;re working on and gets feedback from everyone
                      else.
                    </li>
                  </ul>
                </div>

                {/* 4. Build co-responsibility */}
                <div className="space-y-4">
                  <h3 className="heading text-blue-800">
                    4. Build co-responsibility
                  </h3>
                  <ul className="text-regular text-grey-600 list-disc space-y-3 pl-8">
                    <li>
                      Encourage stepping into leadership as a practice of care,
                      not control. Create regular moments for people to step in
                      to take more responsibility, or integrate this into the
                      structure (for example rotating facilitation).
                    </li>
                    <li>
                      Create distributed sensemaking spaces – moments for
                      alignment, cross-pollination and folding in learning to
                      decide when to adapt to new feedback. These might be open
                      sharing and cross-pollination sessions, or more structured
                      learning reviews and adaptive action cycles.
                    </li>
                    <li>
                      Celebrate when people play their roles well. Celebration
                      is a vital part of governance: nurturing positive energy
                      and recognising contribution. Remember: &quot;parties are
                      governance too!&quot;
                    </li>
                    <li>
                      Explore equity of reciprocity – ensuring contributions and
                      compensation feel fair, even if not equal, to avoid people
                      feeling alienated, unseen or undervalued in the system.
                    </li>
                  </ul>
                </div>

                {/* 5. Attend to live capacity */}
                <div className="space-y-4">
                  <h3 className="heading text-blue-800">
                    5. Attend to live capacity
                  </h3>
                  <ul className="text-regular text-grey-600 list-disc space-y-3 pl-8">
                    <li>
                      Treat capacity as a changing landscape. Check in regularly
                      on energy, attention, and bandwidth, and give people
                      opportunities to step out and in.
                    </li>
                    <li>
                      Use lightweight tools (for example intranets, Slack
                      check-ins, or timesheets) to sense where energy is flowing
                      or thin.
                    </li>
                    <li>
                      Be explicit about what kind of capacity is needed –
                      emotional, relational, or technical – and redistribute
                      accordingly.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Open questions */}
              <section className="space-y-6">
                <h2 className="heading text-blue-800">Open questions</h2>
                <p className="text-regular text-grey-600">
                  These are some of the live questions that practitioners
                  continue to explore, as an invitation to ongoing enquiry:
                </p>
                <ul className="text-regular text-grey-600 list-disc space-y-3 pl-8">
                  <li>
                    What does healthy hierarchy look like in a many-to-many
                    context?
                  </li>
                  <li>
                    How do we continue to hold people accountable to shared
                    culture, not just contracts?
                  </li>
                  <li>
                    How can we make “looking after the collaboration” itself
                    feel meaningful, not administrative?
                  </li>
                  <li>
                    How do we continue to surface and work with risk in an
                    ongoing way?
                  </li>
                  <li>
                    How do we navigate conflict and care across organisational
                    boundaries?
                  </li>
                  <li>
                    What new or different tools might help visualise and track
                    fluid roles in live complex collaborations?
                  </li>
                </ul>
                <blockquote className="text-regular text-orange-800 italic">
                  “The work of governance is not a distraction from the mission
                  - it’s part of how the mission lives.”
                </blockquote>
              </section>
            </div>
          </div>
        </section>

        {/* Navigation Buttons */}
        <section className="bg-white py-20">
          <div className="container-main flex justify-center gap-8">
            <Link href="/learnings-from-the-field">
              <button className="font-galosText cursor-pointer rounded-full bg-blue-800 px-8 py-4 text-white transition-colors hover:bg-blue-700">
                ← Back to Learnings from the Field
              </button>
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
