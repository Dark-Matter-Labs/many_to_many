import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import LearningFieldChoiceSection from '@/components/LearningFieldChoiceSection';
import { sanityFetch } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import styles from './learning-field.module.css';

export const metadata = {
  title: 'Learnings from the Field - Many-to-Many System',
};

const AudienceCard = ({ icon, title, children, imgW, imgH, link }) => (
  <div className="tipBg flex max-w-xs flex-col items-center justify-start lg:max-w-xl">
    {/* Icon circle */}
    <div className="pt-8">
      <Image width={imgW} height={imgH} src={icon} alt="icon" />
    </div>
    {/* Card content */}
    <div className="mb-2 px-10 pt-8 pb-10">
      <h3 className="heading-md mb-6 text-blue-800">{title}</h3>
      <p className="text-small text-grey-600">{children}</p>
    </div>
    <Link href={`/learnings-from-the-field/tips/${link}`}>
      <button className="text-regular text-grey-50 flex w-[263.065px] cursor-pointer flex-row items-center justify-center rounded-[20px] bg-blue-800 p-[10px] transition hover:bg-[#054ABF]">
        Read the Tips →
      </button>
    </Link>
  </div>
);

const caseStudiesQuery = `
*[_type == "case_study"]|order(title asc){
  _id,
  title,
  "slug": slug.current,
  image
}`;

export default async function LearningField() {
  const caseStudies = await sanityFetch({
    query: caseStudiesQuery,
    tags: ['case_study'],
  });
  return (
    <>
      <Navbar activePage="Learnings from the Field" />
      <main>
        <section className={'heading ' + styles.hero}>
          <h1 className="ml-8 text-blue-800 sm:ml-40">
            Learnings from the Field
          </h1>
        </section>

        <section className="mb-2 rounded-2xl bg-white px-[2em] py-[4em] shadow-[0_0_20px_rgba(255,224,145,1)]">
          <div className="container-main flex justify-center">
            <p className="text-regular text-grey-600 max-w-[600px]">
              We co-developed the Many-to-Many System in close partnership with
              experienced practitioners. Here, they offer a dual perspective:
              sharing insights from their own complex governance work and their
              firsthand experience testing components of the Many-to-Many
              System.
            </p>
          </div>
        </section>

        <LearningFieldChoiceSection />
        <section id="insights" className="mb-2 py-[160px]">
          <div className="container-main">
            <h2 className="heading text-blue-800">Introduction to the Field</h2>
            <h3 className="heading-lg text-grey-600 mb-[160px]">
              Who, what and how
            </h3>
            <div className="grid grid-cols-1 gap-x-40 gap-y-30 sm:grid-cols-2">
              <div>
                <h2 className="heading-lg pb-1 text-blue-800">
                  Who are we learning with?
                </h2>
              </div>
              <div>
                <p className="text-regular text-grey-600 pb-4">
                  The Many-to-Many "Proof of Possibility" was brought to life by
                  a dedicated Learning Network of practitioners and
                  organizations committed to exploring ways of collaborating.
                  This includes Dark Matter Labs, the Legal Plumber, Local
                  Motion, Huddlecraft, Plymouth Octopus Project, We are Opus,
                  Foundation Scotland, Lankelly Chase. This work was generously
                  supported by Arising Quo, Lankelly Chase, and Laudes
                  Foundation.
                </p>
                <p className="text-regular text-grey-600 pb-4">
                  This initiative didn't start from scratch; it emerged from a
                  rich history of fieldwork and shared inquiry. You can explore
                  this full story on{' '}
                  <Link href="/journey" className="underline">
                    Many-to-Many Journey page
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h2 className="heading-lg max-w-xs pb-1 text-blue-800">
                  What are the learnings from the Field?
                </h2>
              </div>
              <div>
                <p className="text-regular text-grey-600 pb-4">
                  Here, Huddlecraft invites you to explore the experiences of
                  four network participants through{' '}
                  <strong>in-depth case studies</strong> and{' '}
                  <strong>their insights synthesised into top tips</strong>.
                </p>
                <p className="text-regular text-grey-600 pb-4">
                  Both incorporate their reflections on co-developing the
                  system, lessons from testing its components, and valuable
                  wisdom from their own extensive work in complex
                  collaborations.
                </p>
              </div>
              <div>
                <h2 className="heading-lg max-w-xs pb-1 text-blue-800">
                  How did we conduct this learning?
                </h2>
              </div>
              <div>
                <p className="text-regular text-grey-600 pb-4">
                  The case studies and top tips were developed by Huddlecraft,
                  through in-depth interviews, survey responses and shared
                  project documentation.
                </p>
              </div>
              <div>
                <h2 className="heading-lg pb-1 text-blue-800">
                  Who was interviewed?
                </h2>
              </div>
              <div>
                <p className="text-regular text-grey-600 pb-4">
                  The practitioners we interviewed as part of this process were:
                </p>
                <ul className="text-regular text-grey-600 list-inside list-disc space-y-1 pl-2">
                  <li className="">
                    Annette Dhami, Beyond the Rules team,  Dark Matter Labs
                  </li>
                  <li>James Lock, Opus Independents (Opus)</li>
                  <li>Kathleen Kelly, Local Motion</li>
                  <li>Leah Black, Regenerative Futures Fund (RFF)</li>
                  <li>
                    Lisa Clarke, PG Collective (and previously Lankelly Chase)
                  </li>
                  <li>Matt Bell, Plymouth Octopus (POP)</li>
                  <li>
                    Michelle Zucker, Beyond the Rules team, Dark Matter Labs
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="heading-lg pb-1 text-blue-800">
                  Who is this for?
                </h2>
              </div>
              <div>
                <p className="text-regular text-grey-600 pb-4">
                  These are for anyone working on complex, entangled challenges
                  looking for inspiration. You might be particularly interested
                  if you are: a governance practitioner exploring how to hold
                  complexity and build trust in collaborative work; a funder
                  interested in how to redistribute power and support emergent
                  asset allocation; a legal professional who is mindful of how
                  their role and their stewardship of contracting, risk and
                  accountability can impact complex collaborations, and who is
                  looking to adapt their practice. 
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="case-studies"
          className="container-main my-2 bg-[#F3FBFA] py-[160px] shadow-[0_0_20px_rgba(255,224,145,1)]"
        >
          <h2 className="heading text-blue-800">Case Studies</h2>
          <h3 className="heading-lg text-grey-600 mb-[160px]">
            From the Field
          </h3>
          <div className="grid grid-cols-1 gap-x-40 gap-y-30 sm:grid-cols-2">
            <div>
              <h2 className="heading-md max-w-sm text-blue-800">
                Complex Collaboration in Practice: Case Studies from the Field
              </h2>
            </div>
            <div>
              <p className="text-regular text-grey-600">
                These case studies explore real-world contexts where people are
                tackling complex, entangled challenges - and disrupting norms in
                how we see value, ownership, power and risk. They were developed
                through seven in-depth interviews, survey responses and shared
                documentation about each of the projects. The initiatives
                featured are independent efforts that predate and sit alongside
                the work of the Many-to-Many System. We’re sharing these
                examples to demonstrate how people are doing complex
                collaboration work in practice - including distributed
                governance, collaborative resourcing, shared infrastructure, and
                deep relational work.
              </p>
            </div>

            <div>
              <h3 className="heading-md max-w-sm text-blue-800">
                What are the learnings from the Field?
              </h3>
            </div>
            <div>
              <p className="text-regular text-grey-600">
                This is not a set of uniform case studies. There is no single
                way of doing complex collaboration. What you’ll find here are
                multiple approaches, shaped by context, values, and
                experimentation. We’ve tried to show not just what worked, but
                what changed, where things got stuck, and how people held the
                ambiguity of this work.
                <br />
                Each story includes:
              </p>
              <ul className="text-regular text-grey-600 list-inside list-disc space-y-1 pl-2">
                <li className="">
                  Context: What the initiative was trying to do
                </li>
                <li className="">
                  What’s being disrupted: The intended shifts created through
                  this approach
                </li>
                <li className="">
                  What it looked like in practice: How the complex collaboration
                  unfolded in practice
                </li>
                <li className="">
                  What changed: How expectations evolved along the way
                </li>
                <li className="">
                  Hard bits: Where the work got hard, and what was learned
                </li>
                <li className="">
                  Insights & tips: Practitioner tips for others doing complex
                  collaboration work
                </li>
                <li>Looking ahead: Where next for this initiative</li>
              </ul>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 py-10 md:grid-cols-3">
            {(caseStudies || []).map((post) => (
              <BlogCard
                isCaseStudy
                key={post._id}
                title={post.title}
                slug={`/learnings-from-the-field/${post.slug}`}
                image={post.image ? urlForImage(post.image) : '/blog1.png'}
              />
            ))}
          </div>
        </section>

        <section
          id="top-tips"
          className="container-main my-2 bg-[#FFFAEC] py-[160px] shadow-[0_0_20px_rgba(255,224,145,1)]"
        >
          <h2 className="heading text-blue-800">Top Tips</h2>
          <h3 className="heading-lg text-grey-600 mb-[160px]">
            From the Field
          </h3>
          <div className="grid grid-cols-1 gap-x-40 gap-y-30 sm:grid-cols-2">
            <div>
              <h2 className="heading-md max-w-sm text-blue-800">
                Complex Collaboration in Practice: Top Tips from the Field
              </h2>
            </div>
            <div>
              <p className="text-regular text-grey-600">
                These tips are drawn from and rooted in real-world contexts
                where people are tackling complex, entangled challenges - and
                disrupting norms in how we see value, ownership, power and risk.
                They are from initiatives which are independent efforts that
                both predate and sit alongside the work of the Many-to-Many
                System.
              </p>
            </div>

            <div>
              <h3 className="heading-md max-w-sm text-blue-800">
                What are we sharing
              </h3>
            </div>
            <div>
              <p className="text-regular text-grey-600">
                We’re sharing these tips as a synthesis of some of the insights
                emerging from case studies we’ve developed to serve as
                inspiration for others doing this work. Please note these are
                generalised tips from practitioners, and so might miss some of
                the nuance for specific contexts - we encourage you to read the
                full case studies with more contextualised insights. 
              </p>
            </div>
          </div>

          <div className="py-[160px]">
            {/* Three audience cards */}
            <div className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
              <AudienceCard
                icon="/gov_prac.svg"
                title="Top Tips for Complex Governance Practitioners and Process Stewards"
                link="/governance-practitioners"
                imgH={72}
                imgW={72}
              >
                You’re supporting a group of people to navigate complexity,
                difference, and uncertainty together, towards a mission that
                requires collaboration across many different actors. You are
                building and testing structures to organise, make decisions and
                learn together. Your work is emotional, political and often
                invisible - and yet, without it, distributed governance doesn’t
                stick.
              </AudienceCard>

              <AudienceCard
                icon="/funder.svg"
                title="Top Tips for Funders"
                link="/funder"
                imgH={72}
                imgW={72}
              >
                You’re in a position to unlock resources, shift power, and
                change how risk ripples through the system. Traditional
                approaches to funding often repeat patterns you want to move
                away from in your - towards more collaboration, trust and
                emergence. 
              </AudienceCard>

              <AudienceCard
                icon="/legal.svg"
                title="Top Tips for Legal Professionals"
                link="/legal"
                imgH={72}
                imgW={72}
              >
                You’re working at the edges of law, governance, and care. In
                complex collaborations, legal frameworks can either constrain
                what’s possible - or expand the space for trust, emergence and
                mutual accountability. These insights are for those shaping
                legal artefacts and structures not as gatekeepers, but as
                enablers - often working behind the scenes to make new
                governance forms viable.
              </AudienceCard>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
