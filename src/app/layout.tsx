import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header, Footer } from "@common";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Complete Automate | Automation Scripts & Workflow Solutions",
  description: "Your all-in-one solution for automation scripts and tools. We provide a comprehensive collection of ready-to-use automation scripts to streamline your workflows and boost productivity.",
  keywords: ["automation", "scripts", "workflow", "productivity", "tools"],
  authors: [{ name: "CompleteAutomate" }],
  creator: "CompleteAutomate",
  publisher: "CompleteAutomate",
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("http://completeautomate.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "http://completeautomate.com",
    title: "Complete Automate | Automation Scripts & Workflow Solutions",
    description: "Your all-in-one solution for automation scripts and tools. Streamline your workflows and boost productivity.",
    siteName: "CompleteAutomate",
    images: [
      {
        url: "http://completeautomate.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CompleteAutomate - Automation Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Automate | Automation Scripts & Workflow Solutions",
    description: "Streamline your workflows with automation scripts and tools.",
    creator: "@real_vimal_menon",
    images: ["http://completeautomate.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
