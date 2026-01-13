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
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Dxmond Deelyn - Portfolio',
    description: 'Social Engineer & Web Developer Portfolio',
    url: siteUrl,
    siteName: 'Dxmond Deelyn Portfolio',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dxmond Deelyn Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dxmond Deelyn - Portfolio',
    description: 'Social Engineer & Web Developer Portfolio',
    images: ['/og-image.png'],
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
