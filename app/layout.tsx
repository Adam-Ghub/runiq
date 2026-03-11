import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../app/components/Header"; 
import Footer from "../app/components/Footer"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://runiq.me'),
  title: {
    default: 'Runiq – Průvodce světem běhání | Tepové zóny, Boty, Tipy',
    template: '%s | Runiq'
  },
  description: 'Runiq – váš bezplatný průvodce běháním v češtině. Kalkulačka tepových zón online, výběr běžeckých bot pomocí kvízu a tipy jak začít běhat. Zlepšete kondici a spalujte tuky efektivněji.',
  keywords: [
    // Hlavní brand + obecné
    'Runiq', 'běhání', 'běh',
    // Kalkulačka tepových zón – vysoký záměr
    'kalkulačka tepových zón', 'tepové zóny', 'výpočet tepových zón', 'tepové zóny zdarma',
    'tepové zóny online', 'karvonen vzorec', 'karvonen metoda', 'maximální tepová frekvence',
    'klidový tep', 'tepová frekvence výpočet', 'aerobní zóna', 'anaerobní práh',
    // Zóna 2 – aktuálně trendové téma
    'zóna 2 trénink', 'zone 2 běh', 'zóna 2 spalování tuků',
    // Boty – komerce
    'běžecké boty', 'výběr běžeckých bot', 'jaké boty na běh', 'nejlepší běžecké boty',
    'boty na trail', 'trailové boty', 'boty na asfalt',
    // Začátečníci – vysoký objem
    'jak začít běhat', 'běh pro začátečníky', 'začít běhat',
    // Hubnutí – vysoký objem
    'hubnutí běháním', 'spalování tuků běh', 'jak zhubnout běháním',
    // Trénink
    'běžecký trénink', 'tréninkový plán běh', 'intervalový trénink', 'kardio trénink',
    'regenerace po běhu', 'kondice',
  ],
  authors: [{ name: 'Runiq' }],
  creator: 'Runiq',
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://runiq.me',
    siteName: 'Runiq',
    title: 'Runiq – Průvodce světem běhání | Tepové zóny & Boty',
    description: 'Kalkulačka tepových zón online zdarma, kvíz na výběr běžeckých bot a tipy jak začít běhat. Česky a zdarma.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Runiq – průvodce světem běhání' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Runiq – Průvodce světem běhání',
    description: 'Kalkulačka tepových zón online zdarma, kvíz na výběr bot a tipy pro běžce.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://runiq.me',
    languages: { 'cs-CZ': 'https://runiq.me' },
  },
  icons: {
    icon: { url: '/icon.png', type: 'image/png' },
    apple: { url: '/icon.png', sizes: '180x180', type: 'image/png' },
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://runiq.me/#website',
      url: 'https://runiq.me',
      name: 'Runiq',
      description: 'Bezplatný průvodce světem běhání – kalkulačka tepových zón, výběr běžeckých bot a tipy pro běžce.',
      inLanguage: 'cs-CZ',
      publisher: { '@id': 'https://runiq.me/#organization' },
    },
    {
      '@type': 'Organization',
      '@id': 'https://runiq.me/#organization',
      name: 'Runiq',
      url: 'https://runiq.me',
      logo: {
        '@type': 'ImageObject',
        url: 'https://runiq.me/icon.svg',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'info@runiq.cz',
        contactType: 'customer support',
        availableLanguage: 'Czech',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased suppressHydrationWarning`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
