import { Golos_Text } from 'next/font/google';
import './globals.css';

const golosText = Golos_Text({
  variable: '--font-golos-text',
  subsets: ['latin'],
  weights: ['400'],
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata = {
  title: 'Many-to-Many System',
  description:
    'Sharing our knowledge on Many-to-Many System and complex collaborations',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${golosText.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
