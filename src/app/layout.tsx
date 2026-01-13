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
  title: 'Dxmond Deelyn Portfolio',
  description: 'Dxmond Deelyn - Social Engineer & Web Developer Portfolio',
  icons: {
    icon: [
      { url: '/favicon_io (1)/favicon.ico' },
      { url: '/favicon_io (1)/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io (1)/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon_io (1)/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/favicon_io (1)/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/favicon_io (1)/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        rel: 'apple-touch-icon',
        url: '/favicon_io (1)/apple-touch-icon.png',
      },
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
  openGraph: {
    title: 'Dxmond Deelyn - Portfolio',
    description: 'Social Engineer & Web Developer Portfolio',
    url: siteUrl,
    siteName: 'Dxmond Deelyn Portfolio',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Dxmond Deelyn Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dxmond Deelyn - Portfolio',
    description: 'Social Engineer & Web Developer Portfolio',
    images: [`${siteUrl}/og-image.png`],
  },
  other: {
    'og:image:secure_url': `${siteUrl}/og-image.png`,
    'og:image:type': 'image/png',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:alt': 'Dxmond Deelyn Portfolio Preview',
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
