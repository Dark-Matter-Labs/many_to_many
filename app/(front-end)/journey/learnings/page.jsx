import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import styles from '@/components/JourneyHeroSection.module.css';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

async function fetchLearnings() {
  const blogQuery = `*[_type == "blog_post"] | order(_createdAt desc){
    title,
    "slug": link,
    image
  }`;
  const propQuery = `*[_type == "proposition"] | order(_createdAt desc){
    title,
    "slug": link,
    image
  }`;

  const [blogs, props] = await Promise.all([
    client.fetch(blogQuery, {}, { next: { tags: ['blog_post'] } }),
    client.fetch(propQuery, {}, { next: { tags: ['proposition'] } }),
  ]);

  const blogPosts = (blogs || []).map((b) => ({
    title: b?.title || '',
    slug: b?.slug || '#',
    image: urlForImage(b?.image) || '/m2m_cover.png',
  }));
  const propositions = (props || []).map((p) => ({
    title: p?.title || '',
    slug: p?.slug || '#',
    image: urlForImage(p?.image) || '/m2m_cover.png',
  }));

  return { blogPosts, propositions };
}

export const metadata = {
  title: 'Journey - Many-to-Many System',
};

export default async function JourneyPage() {
  const { blogPosts, propositions } = await fetchLearnings();
  return (
    <>
      <Navbar activePage="Journey & Team" />

      <div className="journey-back mt-28 px-4 py-2 sm:px-20">
        <Link
          href="/journey"
          className="text-small text-blue-800 hover:underline"
        >
          ← Many-to-Many Journey
        </Link>
      </div>

      <section className={'heading ' + styles.heroLearn}>
        <h1 className="ml-4 text-blue-800 sm:ml-40">Ongoing Learnings</h1>
      </section>

      <main className="font-galosText">
        {/* Intro blurb */}
        <section className="section-shadow mb-2 flex justify-center rounded-2xl bg-white px-[2em] py-[4em]">
          <div className="container-main flex justify-center">
            <p className="text-regular text-grey-600 max-w-[600px]">
              The more polished looking frameworks and narratives found in the
              Many-to-Many System are only half the story. The other half is the
              messy, iterative process of learning and thinking that got us
              there. This page shares that "behind-the-scenes" journey, offering
              both our real-time "Working out Loud" blogs written in the midst
              of the work, and the more structured propositional papers that
              explore the conceptual foundations in depth.
            </p>
          </div>
        </section>
        <section
          className="grid-bg section-shadow scroll-top mb-20 rounded-2xl py-[160px] shadow-[0_0_20px_0_rgba(0,95,255,0.40)]"
          id="learning"
        >
          <div className="container-main">
            <div className="grid grid-cols-1 gap-x-40 gap-y-30 sm:grid-cols-2">
              <div>
                <h2 className="heading-lg text-blue-800">Ongoing Learnings</h2>
              </div>
            </div>

            <h3 className="heading-md mt-4 text-blue-800">
              Learning out loud - interview style blogs
            </h3>
            <p className="text-small text-grey-600 max-w-2xl">
              Sharing as the initiative was in progress, in an attempt to
              showcase and share the messy, less formed lessons and insights.
            </p>
            <div className="grid grid-cols-1 gap-8 py-10 md:grid-cols-3">
              {blogPosts.map((post, index) => (
                <BlogCard
                  key={index}
                  title={post.title}
                  slug={post.slug}
                  image={post.image}
                />
              ))}
            </div>

            <h3 className="heading-md mt-8 text-blue-800">Propositions</h3>
            <p className="text-small text-grey-600 max-w-2xl">
              Propositional papers and blogs co-developed with collaborators
              showing the background and diving deeper into the conceptual
              underpinnings.
            </p>
            <div className="grid grid-cols-1 gap-8 py-10 md:grid-cols-3">
              {propositions.map((post, index) => (
                <BlogCard
                  key={index}
                  title={post.title}
                  slug={post.slug}
                  image={post.image}
                />
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
