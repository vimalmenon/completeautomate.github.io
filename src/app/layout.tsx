import { JSX } from 'react';

import { CookieConsent, Footer, Header } from '@common';
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
  alternates: {
    canonical: '/',
  },
  description:
    'AI workflow automation for small business — Complete Automate designs AI systems that eliminate repetitive work, tighten operations, and give your team calmer systems to run on. Workflow automation, AI assistants, and consultancy.',
  icons: {
    apple: '/apple-touch-icon.png',
    icon: [
      { sizes: '16x16', type: 'image/png', url: '/favicon-16.png' },
      { sizes: '32x32', type: 'image/png', url: '/favicon-32.png' },
      { sizes: '192x192', type: 'image/png', url: '/favicon-192.png' },
      { type: 'image/svg+xml', url: '/icon.svg' },
    ],
    shortcut: '/favicon.ico',
  },
  keywords: [
    'AI workflow automation',
    'AI automation for small business',
    'business automation services',
    'AI assistant for small business',
    'workflow automation consulting',
    'AI productivity tools',
    'automate business workflows',
  ],
  metadataBase: new URL('https://completeautomate.com'),
  openGraph: {
    description:
      'AI workflow automation for small business — Complete Automate designs AI systems that eliminate repetitive work, tighten your operations, and reduce friction.',
    images: [{ height: 630, url: '/logo.svg', width: 1200 }],
    siteName: 'Complete Automate',
    title: 'Complete Automate — AI Workflow Automation for Small Business',
    type: 'website',
    url: 'https://completeautomate.com',
  },
  title: {
    default: 'Complete Automate — AI Workflow Automation for Small Business',
    template: '%s | Complete Automate',
  },
  twitter: {
    card: 'summary_large_image',
    description:
      'AI workflow automation for small business — design AI systems that remove repetitive work and tighten operations.',
    title: 'Complete Automate — AI Workflow Automation for Small Business',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-clip">
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
        <CookieConsent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'sales',
                email: 'hello@completeautomate.com',
              },
              description:
                'AI workflow automation for small business — design AI systems that eliminate repetitive work, tighten operations, and give your team calmer systems to run on.',
              logo: 'https://completeautomate.com/logo.svg',
              name: 'Complete Automate',
              sameAs: ['https://youtube.com/@real_vimal_menon'],
              url: 'https://completeautomate.com',
            }),
          }}
        />
      </body>
      <GoogleAnalytics gaId="G-M0XBLGNSN6" />
    </html>
  );
}
