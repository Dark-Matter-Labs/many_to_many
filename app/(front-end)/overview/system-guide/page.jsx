import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Loading from '../../loading';
import { sanityFetch } from '@/sanity/lib/client';
import Footer from '@/components/Footer';
const InteractiveGuide = dynamic(
  () => import('@/components/interactive-guide/InteractiveGuide'),
  { ssr: false, loading: () => <Loading /> }
);

const layers_query = `
*[_type == "layer"] | order(order asc) {
  ...,
  "icon": image.asset->.url,
  insights[]->{
  ...,
  },
  alerts[]->{
  ...,
  },
}
`;

export default async function SystemGuidePage() {
  const layers = await sanityFetch({
    query: layers_query,
    tags: ['layer'],
  });
  return (
    <div>
      <main>
        <Suspense fallback={<Loading />}>
          <InteractiveGuide layers={layers} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
