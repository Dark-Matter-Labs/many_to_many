import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/lib/client';
import { Navbar } from '@/components/Navbar';
import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';
import ToolDetail from '@/components/ToolDetail';
import styles from './specific-tool.module.css';

export const revalidate = 3600;

export const metadata = {
  title: 'Tools & Examples - Many-to-Many System',
};

const tool_detail_query = `
  *[_type == "tool" && slug.current == $slug][0]{
    _id,
    title,
    description,
    type,
    format,
    readiness,
    test_status,
    audience,
    availability,
    link,
    coverImage,
    layers[]->{ _id, title, icon }
  }`;

const tool_slugs_query = `
  *[_type == "tool" && defined(slug.current)]{ "slug": slug.current }
`;

export async function generateStaticParams() {
  const tools = await sanityFetch({ query: tool_slugs_query, tags: ['tool'] });
  return (tools || []).map((t) => ({ slug: t.slug }));
}

export default async function SpecificToolPage({ params }) {
  const { slug } = await params;
  const tool = await sanityFetch({
    query: tool_detail_query,
    tags: ['tool'],
    qParams: { slug: slug },
  });

  if (!tool) {
    notFound();
  }

  return (
    <div>
      <Navbar activePage="Tools & Examples" />
      <main>
        <div className={styles.hero}>
          <BackButton />
        </div>
        <div className="section-shadow">
          <div
            className={
              'mx-4 my-[2rem] pb-8 sm:mx-auto ' + styles.contentWrapper
            }
          >
            <ToolDetail {...tool} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
