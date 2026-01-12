import type { Metadata } from 'next';

import { Geist, Geist_Mono } from 'next/font/google';

import { Footer, Header } from '@common';
import { AppContext } from '@context';
import './globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  authors: [{ name: 'CompleteAutomate' }],
  category: 'Technology',
  creator: 'CompleteAutomate',
  description:
    'Your all-in-one solution for automation scripts and tools. We provide a comprehensive collection of ready-to-use automation scripts to streamline your workflows and boost productivity.',
  formatDetection: {
    address: false,
    email: true,
    telephone: false,
  },
  icons: {
    apple: '/apple-touch-icon.png',
    icon: '/favicon.ico',
  },
  keywords: ['automation', 'scripts', 'workflow', 'productivity', 'tools'],
  metadataBase: new URL('http://completeautomate.com'),
  openGraph: {
    description:
      'Your all-in-one solution for automation scripts and tools. Streamline your workflows and boost productivity.',
    images: [
      {
        alt: 'CompleteAutomate - Automation Solutions',
        height: 630,
        url: 'http://completeautomate.com/og-image.jpg',
        width: 1200,
      },
    ],
    locale: 'en_US',
    siteName: 'CompleteAutomate',
    title: 'Complete Automate | Automation Scripts & Workflow Solutions',
    type: 'website',
    url: 'http://completeautomate.com',
  },
  publisher: 'CompleteAutomate',
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    index: true,
  },
  title: 'Complete Automate | Automation Scripts & Workflow Solutions',
  twitter: {
    card: 'summary_large_image',
    creator: '@real_vimal_menon',
    description: 'Streamline your workflows with automation scripts and tools.',
    images: ['http://completeautomate.com/og-image.jpg'],
    title: 'Complete Automate | Automation Scripts & Workflow Solutions',
  },

  viewport: {
    initialScale: 1,
    maximumScale: 5,
    width: 'device-width',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        <AppContext>
          <Header />
          <main>{children}</main>
          <Footer />
        </AppContext>
      </body>
    </html>
  );
}
