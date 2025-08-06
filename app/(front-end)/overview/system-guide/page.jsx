import { sanityFetch } from '@/sanity/lib/client';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import InteractiveGuide from '@/components/interactive-guide/InteractiveGuide';

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
      <Navbar activePage="Discover the System" />
      <main>
        {/* You can add other sections before or after the guide */}
        <InteractiveGuide layers={layers} />
      </main>
      <Footer />
    </div>
  );
}
