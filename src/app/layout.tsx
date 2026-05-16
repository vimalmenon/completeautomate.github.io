import { JSX } from 'react';

import { Footer, Header } from '@common';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ThemeProvider } from 'next-themes';

import type { Metadata } from 'next';

import { IBM_Plex_Mono, Sora } from 'next/font/google';

import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  description:
    'AI automation consulting — CompleteAutomate designs AI workflows that remove repetitive work and tighten your operations.',
  icons: {
    apple: '/apple-touch-icon.png',
    icon: [
      { sizes: '16x16', type: 'image/png', url: '/favicon-16x16.png' },
      { sizes: '32x32', type: 'image/png', url: '/favicon-32x32.png' },
    ],
    shortcut: '/favicon.ico',
  },
  metadataBase: new URL('https://completeautomate.com'),
  openGraph: {
    description:
      'AI automation consulting — CompleteAutomate designs AI workflows that remove repetitive work and tighten your operations.',
    locale: 'en_US',
    siteName: 'Complete Automate',
    title: 'Complete Automate',
    type: 'website',
  },
  title: {
    default: 'Complete Automate',
    template: '%s | Complete Automate',
  },
  twitter: {
    card: 'summary_large_image',
    description:
      'AI automation consulting — CompleteAutomate designs AI workflows that remove repetitive work and tighten your operations.',
    title: 'Complete Automate',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${sora.variable} ${mono.variable} relative flex min-h-screen flex-col overflow-x-clip bg-background text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <Header />
          <main className="relative z-10 flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-M0XBLGNSN6" />
    </html>
  );
}
