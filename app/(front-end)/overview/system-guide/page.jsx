import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import InteractiveGuide from '@/components/interactive-guide/InteractiveGuide';

export default function SystemGuidePage() {
  return (
    <div>
      <Navbar activePage="Discover the System" />
      <main>
        {/* You can add other sections before or after the guide */}
        <InteractiveGuide />
      </main>
      <Footer />
    </div>
  );
}
