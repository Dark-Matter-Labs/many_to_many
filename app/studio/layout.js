export const metadata = {
  title: 'Many-to-Many Studio',
  description: 'Collections and all information',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
