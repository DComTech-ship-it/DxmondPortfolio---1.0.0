import type { Metadata } from 'next';
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import ClientLayout from "./client-layout";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const siteUrl = 'https://dxmond-portfolio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Dxmond Deelyn | Me',
  description: 'Dxmond Deelyn - Social Engineer & Web Developer Portfolio',
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
    description: 'Social Engineer & Web Developer Portfolio',
    url: siteUrl,
    siteName: 'Dxmond Deelyn Portfolio',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/favicon/favicon.png`,
        width: 192,
        height: 192,
        alt: 'Dxmond Deelyn Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Dxmond Deelyn | Me',
    description: 'Social Engineer & Web Developer Portfolio',
    images: [`${siteUrl}/favicon/favicon.png`],
  },
  other: {
    'og:image:secure_url': `${siteUrl}/favicon/favicon.png`,
    'og:image:type': 'image/png',
    'og:image:width': '192',
    'og:image:height': '192',
    'og:image:alt': 'Dxmond Deelyn Portfolio',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
