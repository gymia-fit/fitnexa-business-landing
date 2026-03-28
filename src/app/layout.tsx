import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Gymia Business - Grow Your Gym with Real Demand',
    template: '%s | Gymia Business',
  },
  description:
    "Gymia isn't just another gym software. It's a growth engine that captures demand, converts leads, and keeps members engaged — all through a branded digital experience.",
  keywords: [
    'gym management',
    'fitness software',
    'gym growth',
    'member management',
    'fitness business',
    'gym leads',
  ],
  authors: [{ name: 'Gymia' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://business.gymia.fit',
    siteName: 'Gymia Business',
    title: 'Gymia Business - Grow Your Gym with Real Demand',
    description:
      "Gymia isn't just another gym software. It's a growth engine that captures demand, converts leads, and keeps members engaged.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gymia Business - Gym Growth Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gymia Business - Grow Your Gym with Real Demand',
    description:
      "Gymia isn't just another gym software. It's a growth engine that captures demand, converts leads, and keeps members engaged.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className={`${inter.className} ${sora.className} bg-black text-white antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
