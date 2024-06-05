// app/layout.js
import './globals.css';
import { Inter } from '@next/font/google'; // Import the Inter font

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Shopping List',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}> {/* Apply the font class to the html element */}
      <body>{children}</body>
    </html>
  );
}
