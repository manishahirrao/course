import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Continue Labs - Enterprise EdTech Solutions',
  description:
    'Empowering the future of education with advanced technology solutions. Continue Labs provides white-label content, platforms, and AI-driven tools for educational institutions.',
  keywords: 'EdTech, education technology, white-label content, LMS, AI in education, Continue Labs',
  openGraph: {
    title: 'Continue Labs - Enterprise EdTech Solutions',
    description: 'Empowering the future of education with advanced technology solutions.',
    type: 'website',
    url: 'https://continuelabs.ai',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
