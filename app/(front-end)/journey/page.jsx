import { Navbar } from '@/components/Navbar';
import styles from './coming-soon.module.css';

export const metadata = {
  title: 'Coming Soon',
};

export default function ComingSoonPage() {
  return (
    <>
      <Navbar activePage="Coming Soon" />
      <main className={styles.wrapper + ' font-galosText'}>
        <div className={styles.backdrop} />

        <section className={styles.content}>
          <h1 className={styles.title}>Journey</h1>
          <p className={styles.subtitle}>Coming Soon!</p>
          <p className={styles.description}>
            This page is under construction,
            <br />
            please check the newsletter,
            <br />
            or our community page for more info
          </p>
        </section>
      </main>
    </>
  );
}
