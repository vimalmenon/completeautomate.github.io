import { JSX } from 'react';

import { Footer, Header } from '@common';
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
  description: 'This is the website for Complete Automate',
  title: 'Complete Automate',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sora.variable} ${mono.variable} relative flex min-h-screen flex-col overflow-x-clip bg-background text-foreground antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="relative z-10 flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
