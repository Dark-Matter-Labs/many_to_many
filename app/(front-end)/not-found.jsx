import Link from 'next/link';
import Navbar from '@/components/Navbar';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.gridSection}></div>
      <div className={styles.gradientCircle}></div>
      <div className={styles.content}>
        <div className={styles.errorMessage}>
          <p>Sorry, the page you are</p>
          <p>looking for is not there.</p>
        </div>
        <Link href="/" className={styles.homeLink}>
          <p>Click here to return</p>
          <p>home →</p>
        </Link>
      </div>
    </div>
  );
}
