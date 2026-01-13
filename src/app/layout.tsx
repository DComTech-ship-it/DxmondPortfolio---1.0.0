import type { Metadata } from 'next';
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import ClientLayout from "./client-layout";
import Script from 'next/script';

// JSON-LD data for structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dxmond Deelyn',
  jobTitle: 'Social Engineer & Web Developer',
  url: 'https://dxmond-portfolio.vercel.app',
  sameAs: [
    // Add your social profiles here, for example:
    // 'https://linkedin.com/in/yourprofile',
    // 'https://github.com/yourusername',
  ],
  image: 'https://dxmond-portfolio.vercel.app/favicon/android-chrome-512x512.png',
  description: 'Professional portfolio of Dxmond Deelyn, showcasing skills in social engineering and web development.'
};

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const siteUrl = 'https://dxmond-portfolio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Dxmond Deelyn | Me',
  description: 'Dxmond Deelyn - Social Engineer & Web Developer',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        rel: 'apple-touch-icon',
        url: '/favicon/apple-touch-icon.png',
      },
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
  openGraph: {
    title: 'Dxmond Deelyn | Me',
    description: 'Social Engineer & Web Developer',
    url: siteUrl,
    siteName: 'Dxmond Deelyn | Me',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/favicon/favicon.png`,
        width: 192,
        height: 192,
        alt: 'Dxmond Deelyn | Me',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Dxmond Deelyn | Me',
    description: 'Social Engineer & Web Developer',
    images: [`${siteUrl}/favicon/favicon.png`],
  },
  other: {
    'og:image:secure_url': `${siteUrl}/favicon/favicon.png`,
    'og:image:type': 'image/png',
    'og:image:width': '192',
    'og:image:height': '192',
    'og:image:alt': 'Dxmond Deelyn | Me',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.variable}>
        <ClientLayout>
          <Header />
          <main>{children}</main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
