import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '@/components/TipsHeroSection.module.css';

export const metadata = {
  title: 'Top Tips for Funders',
};

export default function GovernancePractitioners() {
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

        <section className={'heading ' + styles.heroFund}>
          <h1 className="ml-8 max-w-xl text-blue-800 sm:ml-40">
            Top Tips for Funders
          </h1>
        </section>

        {/* Hero Section */}
        <section className="bg-blue-800 py-20">
          <div className="container-main">
            <div className="mx-auto max-w-2xl">
              <p className="text-regular text-white">
                Top tips were developed by Huddlecraft, through a series of
                in-depth interviews with other members of the Learning Network,
                survey responses and shared project documentation. The tips
                include reflections on co-developing the Many-to-Many System,
                lessons from testing its components, and valuable wisdom from
                their own extensive work in complex collaborations.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#FFF4D6] py-20">
          <div className="container-main">
            <div className="mx-auto max-w-2xl">
              <p className="text-regular text-blue-300">
                Funders are in a position to unlock resources, shift power, and
                change how risk ripples through the system. Traditional
                approaches to funding often repeat patterns you want to move
                away from, towards more collaboration, trust and emergence.
              </p>
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
                  1. Fund the conditions, not just the outputs
                </h2>
                <blockquote className="text-regular text-orange-800 italic">
                  “Hold your nerve and allow time for the work to unfold.” Leah
                  Black, RFF
                </blockquote>
              </div>
              <div className="space-y-6">
                <p className="text-regular text-grey-600">
                  Complex collaboration needs time, care and trust. It is often
                  slow, iterative, and relational. Funders can enable processes
                  that take time to unfold, not just deliverables - and support
                  the invisible labour and relational work as an essential part
                  of the enabling conditions for complex collaboration.
                </p>
                <ul className="text-regular text-grey-600 list-disc space-y-4 pl-8">
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                      href="https://regenerativefuturesfund.org.uk/about-us"
                    >
                      RFF funders
                    </a>{' '}
                    committed flexible, long-term resourcing that enabled deep
                    relationship-building.
                  </li>
                  <li>
                    The{' '}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                      href="https://localmotion.org.uk/funders/"
                    >
                      Local Motion
                    </a>{' '}
                    funders committed to deeper relationships and ten years of
                    funding, which included a two-year development commitment to
                    enable the local places to develop their own plans and
                    invest in their learning and capabilities.
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                      href="https://www.plymouthoctopus.org/pop-funding"
                    >
                      POP
                    </a>{' '}
                    showed how experimentation and reflection required patient
                    rhythms and longer-term resourcing to support this.
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                      href="https://lankellychase.org.uk/insight/place/"
                    >
                      Lankelly Chase with its key partners in place-based work
                    </a>{' '}
                    invested in relationships that go beyond funding. They
                    experimented with principle-led infrastructure and
                    governance - collective ways of holding money, making
                    decisions, collaborating, and building solidarity through
                    networks.
                  </li>
                </ul>
              </div>

              {/* Tip 2 */}
              <div className="space-y-6">
                <h2 className="heading text-blue-800">
                  2. You’re more than your money
                </h2>
                <blockquote className="text-regular text-orange-800 italic">
                  “It’s amazing what happens when you open the conversation
                  about 'more than money' and what people with power and
                  influence can enable and unlock.” Leah Black, RFF
                </blockquote>
              </div>
              <div className="space-y-6">
                <p className="text-regular text-grey-600">
                  Rather than sitting outside the system, consider how you can
                  <b>show up as a participant in the learning</b>. This doesn’t
                  mean overriding others’ agency, but being open, responsive and
                  transparent. It’s about being real about what you can offer
                  that might go beyond the financial resource you put in.
                </p>
                <ul className="text-regular text-grey-600 list-disc space-y-4 pl-8">
                  <li>
                    In RFF, funders participated in co-design sessions with
                    residents - and in the enabling Board.
                  </li>
                  <li>
                    In Local Motion, they have tapped into funders networks and
                    existing wider funder support offers to build capacity in
                    each of the places.
                  </li>
                  <li>
                    <i>POP</i> called for funders to “amplify patterns that
                    already exist” rather than impose new ones.
                  </li>
                </ul>
              </div>

              {/* Tip 3 */}
              <div className="space-y-6">
                <h2 className="heading text-blue-800">
                  3. Be ready to let go of the original plan
                </h2>
                <blockquote className="text-regular text-orange-800 italic">
                  “You need to surrender into co-design with an open mind.”
                  Kathleen Kelly
                </blockquote>
              </div>
              <div className="space-y-6">
                <p className="text-regular text-grey-600">
                  Emergent collaboration requires <b>adaptable goals</b>. As new
                  people, perspectives and priorities emerge, the mission may
                  evolve. That’s not failure - it’s how this work needs to
                  happen. Rigid contracts and reporting systems can choke
                  collaboration. Funders can support light and flexible
                  infrastructure that protect relationships while leaving room
                  for emergence.
                </p>
                <ul className="text-regular text-grey-600 list-disc space-y-4 pl-8">
                  <li>
                    POP used fiscal hosting platform{' '}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                      href="https://opencollective.com/"
                    >
                      Open Collective
                    </a>{' '}
                    to decentralise funding while minimising contractual burden.
                  </li>
                  <li>
                    In RFF, the focus areas shifted through collaboration with
                    the funders and the residents panel, to focus more on racial
                    justice.
                  </li>
                  <li>
                    Opus shifted governance decisions based on what the group
                    could hold relationally.
                  </li>
                </ul>
              </div>

              {/* Tip 4 */}
              <div className="space-y-6">
                <h2 className="heading text-blue-800">
                  4. Share power in practice, not just principle
                </h2>
                <div className="space-y-4">
                  <blockquote className="text-regular text-orange-800 italic">
                    “We’re never going to change systems if the people who hold
                    resources, power and influence aren’t committed to enabling
                    change themselves.” Leah Black, RFF
                  </blockquote>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-regular text-grey-600">
                  In the RFF, funders joined the Oversight and Enabling Board
                  and allowed residents to lead allocation decisions. The
                  ecosystem agreement emerged through dialogue, not predefined
                  structure.
                </p>
                <ul className="text-regular text-grey-600 list-disc space-y-4 pl-8">
                  <li>
                    Local Motion brought funders directly into the collaborative
                    process to create two-way accountability in the work, and
                    funders offered access to their capability building
                    programmes.
                  </li>
                  <li>
                    At POP, they linked funding to belonging, not bureaucracy -
                    they found that centring belonging before formal systems
                    created stronger long-term outcomes.
                  </li>
                  <li>
                    Sometimes less is more. Lisa Clarke described how funders
                    can unblock things by suspending some of their system
                    conditions, around contracting for example.
                  </li>
                </ul>
              </div>

              {/* Tip 5 */}
              <div className="space-y-6">
                <h2 className="heading text-blue-800">
                  5. Resource capability, not just capacity
                </h2>
                <blockquote className="text-regular text-orange-800 italic">
                  “The capability building is as important as the resource -
                  it’s what makes the collaboration possible.” - Kathleen Kelly,
                  Local Motion
                </blockquote>
              </div>
              <div className="space-y-6">
                <p className="text-regular text-grey-600">
                  People don’t just need more staff or hours - they need support
                  to practise new kinds of work. What’s often missing is the
                  capability (the skills, confidence and literacy) that enable
                  groups to collaborate well. Fund coaching, peer learning,
                  facilitation and the <b>development of new capabilities</b>{' '}
                  across your ecosystem alongside providing resources for
                  delivery.
                </p>
                <ul className="text-regular text-grey-600 list-disc space-y-4 pl-8">
                  <li>
                    Local Motion invested in a{' '}
                    <b>learning academy and bespoke support</b> to grow
                    collaborative skills, confidence and network leadership,
                    recognising that system change required a homegrown network
                    of change makers.
                  </li>
                  <li>
                    Kathleen Kelly described how coaching practice and training
                    in Co-Resolve Deep Democracy built the{' '}
                    <b>emotional literacy and facilitative capability</b> needed
                    for partners to stay with discomfort and tension in decision
                    making.
                  </li>
                  <li>
                    Leah Black (RFF) emphasised that residents and funders alike
                    needed{' '}
                    <b>support to learn new governance and systems tools</b>,
                    not just funding to ‘be at the table’.
                  </li>
                  <li>
                    Lisa Clarke suggested that experiential learning is the key
                    along with a <b>sense of playfulness</b>. Ideally, this
                    learning space would be alongside people who have already
                    been through the complexity and come out the other side.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="bg-[#FFE091] py-20">
          <div className="container-main">
            <div className="mx-auto max-w-xl">
              <h2 className="heading mb-6 text-blue-800">
                And remember... Internal systems matter.
              </h2>
              <p className="text-regular text-grey-600">
                Even the most relational, forward-thinking funder can be held
                back by internal reporting, procurement, and governance rules.
                Be transparent about what can and can’t flex and look for places
                where <b>your own ways of thinking and working need shifting</b>
                .
              </p>
              <blockquote className="text-regular text-orange-800 italic">
                “We’ll never change systems if people who hold resources, power
                and influence aren’t committed to enabling change themselves.” -
                Leah Black, RFF
              </blockquote>
            </div>
          </div>
        </section>

        {/* Navigation Buttons */}
        <section className="bg-white py-20">
          <div className="container-main flex justify-center gap-8">
            <Link href="/learnings-from-the-field/tips/governance-practitioners">
              <button className="font-galosText cursor-pointer rounded-full bg-blue-800 px-8 py-4 text-white transition-colors hover:bg-blue-700">
                ← Previous
              </button>
            </Link>
            <Link href="/learnings-from-the-field/tips/legal">
              <button className="font-galosText cursor-pointer rounded-full bg-blue-800 px-8 py-4 text-white transition-colors hover:bg-blue-700">
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
