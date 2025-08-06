import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/lib/client';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import DetailHero from '@/components/DetailHero';
import ToolDetail from '@/components/ToolDetail';
import InsightCard from '@/components/InsightCard';
import styles from './specific-tool.module.css';

const tool_detail_query = `
  *[_type == "tool" && slug.current == $slug][0] {
    ...,
    layers[]->{
      ...,
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
        <DetailHero title={'Instruments for Implementation'} />
        <div className={styles.contentWrapper}>
          <ToolDetail {...tool} />
        </div>
        <div className={styles.imageGrid}>
          {[...Array(8)].map((_, i) => (
            <div key={i} className={styles.thumbnail}></div>
          ))}
        </div>
        <section className={`${styles.section}`}>
          <h2 className={'heading-lg text-blue-800 ' + styles.sectionTitle}>
            Related Layers
          </h2>
          <p className="text-small text-grey-600">Layer linked to this.</p>
          <div className={styles.cardGrid}>
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
