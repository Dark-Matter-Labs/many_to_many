import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import DetailHero from '@/components/DetailHero';
import ToolDetail from '@/components/ToolDetail';
import styles from './specific-tool.module.css';

export default function SpecificToolPage() {
  return (
    <div>
      <Navbar activePage="Problems" />
      <main>
        <DetailHero title="Tools & Examples" />
        <div className={styles.contentWrapper}>
          <ToolDetail />
        </div>
        <div className={styles.imageGrid}>
          {[...Array(8)].map((_, i) => (
            <div key={i} className={styles.thumbnail}></div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
