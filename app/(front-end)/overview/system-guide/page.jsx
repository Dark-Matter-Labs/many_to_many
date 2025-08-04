import { Navbar } from '@/components/Navbar'; // Assuming reuse
import Footer from '@/components/Footer'; // Assuming reuse
import InteractiveGuide from '@/components/interactive-guide/InteractiveGuide';

export default function SystemGuidePage() {
  return (
    <div>
      <Navbar activePage="System Overview" />
      <main>
        {/* You can add other sections before or after the guide */}
        <InteractiveGuide />
      </main>
      <Footer />
    </div>
  );
}
