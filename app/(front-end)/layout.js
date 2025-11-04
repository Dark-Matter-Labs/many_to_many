import { Suspense } from 'react';
import Script from 'next/script';
import { Golos_Text } from 'next/font/google';
import Loading from './loading';
import './globals.css';

const golosText = Golos_Text({
  variable: '--font-golos-text',
  subsets: ['latin'],
  weights: ['400'],
  fallback: ['system-ui', 'sans-serif'],
  display: 'swap',
  preload: true,
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.manytomany.systems'),
  title: {
    default: 'Many-to-Many System',
    template: '%s | Many-to-Many System',
  },
  description:
    'A living library of practical tools, frameworks, and case studies designed to support practitioners in complex collaborations.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'Many-to-Many System',
    title: 'Many-to-Many: Governance & Tools for Systems Change',
    description:
      'A living library of practical tools, frameworks, and case studies designed to support practitioners in complex collaborations.',
    url: '/',
    images: [
      {
        url: '/m2m_cover.png',
        width: 1200,
        height: 630,
        alt: 'Many-to-Many System overview',
      },
    ],
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Many-to-Many: Governance & Tools for Systems Change',
    description:
      'A living library of practical tools, frameworks, and case studies designed to support practitioners in complex collaborations.',
    images: ['/m2m_cover.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${golosText.variable} antialiased`}>
      <Suspense fallback={<Loading />}>
        <body>{children}</body>
      </Suspense>
      <Script 
        src="https://scripts.simpleanalyticscdn.com/latest.js" 
        strategy="afterInteractive"
      />
    </html>
  );
}
