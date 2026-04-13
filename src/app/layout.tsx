import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Superteam Australia - Accelerating Builders & Founders',
  description:
    'The official home of Superteam Australia. Accelerating founders, builders, and creatives across Australia and the broader Solana ecosystem.',
  keywords: [
    'Superteam',
    'Australia',
    'Solana',
    'Web3',
    'Builders',
    'Founders',
    'Ecosystem',
    'Community',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://australia.superteam.fun',
    siteName: 'Superteam Australia',
    title: 'Superteam Australia - Accelerating Builders & Founders',
    description:
      'The official home of Superteam Australia. Accelerating founders, builders, and creatives across Australia and the broader Solana ecosystem.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Superteam Australia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Superteam Australia',
    description:
      'The official home of Superteam Australia. Accelerating founders, builders, and creatives across Australia.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <meta name="theme-color" content="#5a67f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="space-bg bg-gradient-to-br from-slate-950 via-blue-900 to-slate-950 text-blue-50 antialiased">
        {children}
      </body>
    </html>
  );
}
