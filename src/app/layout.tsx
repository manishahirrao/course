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
  metadataBase: new URL('https://contenulabs.com'),
  title: 'Contenu Labs - White Label Education Solutions | Content That Drives Growth',
  description:
    'Empowering educators with India\'s leading white label study material platform. Contenu Labs provides white-label content, test series, and digital media branding for coaching institutes and EdTech platforms.',
  keywords: 'EdTech, education technology, white-label content, white label study material, test series, competitive exams, Contenu Labs, coaching institute solutions',
  openGraph: {
    title: 'Contenu Labs - White Label Education Solutions',
    description: 'Your Study Material, Your Brand — No Co-Branding. Empowering educators with India\'s leading white label study material platform.',
    type: 'website',
    url: 'https://contenulabs.com',
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
