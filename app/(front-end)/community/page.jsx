import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { sanityFetch } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import styles from './learning-field.module.css';

export const metadata = {
  title: 'Learnings from the Field - Many-to-Many System',
};

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
            Learnings from the Field - Case Studies
          </h1>
        </section>

        <section className="mb-2 rounded-2xl bg-white px-[2em] py-[4em] shadow-[0_0_20px_rgba(255,224,145,1)]">
          <div className="container-main flex justify-center">
            <p className="text-regular text-grey-600 max-w-[600px]">
              The Many-to-Many System was co-developed with experienced
              practitioners already navigating the challenges of complex
              governance. Through a dedicated learning network, these partners
              shared insights from their live initiatives and tested components
              of the Many-to-Many System in their diverse contexts.
            </p>
          </div>
        </section>
        <section className="grid-bg mb-2 py-16">
          <div className="container-main px-20">
            <div className="grid grid-cols-1 gap-x-40 gap-y-30 sm:grid-cols-2">
              <div>
                <h2 className="heading-lg pb-1 text-blue-800">
                  Who is the Community?
                </h2>
              </div>
              <div>
                <p className="text-regular text-grey-600 pb-4">
                  The Many-to-Many "Proof of Possibility" was brought to life by
                  a dedicated Learning Network of practitioners and
                  organizations committed to exploring new ways of
                  collaborating. This includes Dark Matter Labs, the Legal
                  Plumber, Local Motion, Huddlecraft, Plymouth Octopus Project,
                  We are Opus, Foundation Scotland, Lankelly Chase. This work
                  was generously supported by Arising Quo, Lankelly Chase, and
                  Laudes Foundation.
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
                <p className="text-regular text-grey-600">
                  Here, we invite you to explore the experiences of four network
                  participants through in-depth case studies. You'll find their
                  reflections on co-developing the system, lessons from testing
                  its components, and valuable wisdom from their own extensive
                  work in complex collaborations.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="container-main my-2 bg-white px-20 py-16 shadow-[0_0_20px_rgba(255,224,145,1)]">
          <div className="grid grid-cols-1 gap-x-40 gap-y-30 sm:grid-cols-2">
            <div>
              <h2 className="heading-lg max-w-sm text-blue-800">
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
                What we’ve tried to share
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
              <ul className="text-regular text-grey-600 list-inside list-disc">
                <li className="mb-2">
                  Context: What the initiative was trying to do
                </li>
                <li className="mb-2">
                  What’s being disrupted: The intended shifts created through
                  this approach
                </li>
                <li className="mb-2">
                  What it looked like in practice: How the complex collaboration
                  unfolded in practice
                </li>
                <li className="mb-2">
                  What changed: How expectations evolved along the way
                </li>
                <li className="mb-2">
                  Hard bits: Where the work got hard, and what was learned
                </li>
                <li className="mb-2">
                  Insights & tips: Practitioner tips for others doing complex
                  collaboration work
                </li>
                <li>Looking ahead: Where next for this initiative</li>
              </ul>
            </div>

            <div>
              <h3 className="heading-md max-w-sm text-blue-800">
                Who is this for?
              </h3>
            </div>
            <div>
              <p className="text-regular text-grey-600">
                These are for anyone working on complex, entangled challenges
                looking for inspiration. You might be particularly interested in
                these case studies if you are: a governance practitioner
                exploring how to hold complexity and build trust in
                collaborative work; a funder interested in how to redistribute
                power and support emergent asset allocation; a legal
                professional who is mindful of how their role and their
                stewardship of contracting, risk and accountability can impact
                complex collaborations, and who is looking to adapt their
                practice. We’ve pulled out top tips for each of these audiences
                here.
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 py-10 md:grid-cols-3">
            {(caseStudies || []).map((post) => (
              <BlogCard
                isCaseStudy
                key={post._id}
                title={post.title}
                slug={`/community/${post.slug}`}
                image={post.image ? urlForImage(post.image) : '/blog1.png'}
              />
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
