import type { Metadata } from 'next';
import { Poppins, Playfair_Display } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], variable: '--font-sans', weight: ['400', '500', '600', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif', weight: ['500', '700'] });

export const metadata: Metadata = {
  title: 'Ayna Food | Delicious Food, Made With Love',
  description: 'Ayna Food menghadirkan makanan dan minuman modern dengan cita rasa homemade, fresh, dan hygienic.',
  openGraph: {
    title: 'Ayna Food',
    description: 'Modern F&B brand for young food lovers and families.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${poppins.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  );
}
