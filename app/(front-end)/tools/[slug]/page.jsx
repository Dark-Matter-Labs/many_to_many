import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/lib/client';
import { Navbar } from '@/components/Navbar';
import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';
import ToolDetail from '@/components/ToolDetail';
import InsightCard from '@/components/InsightCard';
import styles from './specific-tool.module.css';

const tool_detail_query = `
  *[_type == "tool" && slug.current == $slug][0] {
    ...,
    coverImage,
    layers[]->{
      ...,
      "icon": image.asset->.url,
    },
  }
  `;

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
          <div className={'pb-8 ' + styles.contentWrapper}>
            <ToolDetail {...tool} />
          </div>
        </div>
        <section
          className={`${styles.section} flex items-center justify-between`}
        >
          <h2
            className={
              'heading-md max-w-sm text-blue-800 ' + styles.sectionTitle
            }
          >
            Layers of the Many-to-Many System linked to this tool
          </h2>
          <div className={'flex flex-wrap gap-6'}>
            {tool.layers?.length > 0 ? (
              tool.layers.map((layer) => (
                <InsightCard key={layer._id} {...layer} />
              ))
            ) : (
              <p className="text-small text-grey-600">
                No related layers found.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
