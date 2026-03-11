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
    default: 'Runiq | Cesta k lepšímu běhu',
    template: '%s | Runiq'
  },
  description: 'Runiq je váš průvodce světem běhání. Kalkulačka tepových zón, tipy jak začít běhat, běžecké vybavení a tréninkové plány. Začněte běhat správně ještě dnes.',
  keywords: [
    'běhání', 'běh', 'tepové zóny', 'běžecký trénink', 'kalkulačka tepových zón',
    'jak začít běhat', 'běh pro začátečníky', 'běžecké boty', 'hubnutí běháním',
    'maximální tepová frekvence', 'tréninkový plán', 'Karvonen metoda',
    'intervalový trénink', 'regenerace po běhu', 'běžecká obuv',
    'výpočet tepových zón', 'spalování tuků běh', 'kondice', 'kardio trénink'
  ],
  authors: [{ name: 'Runiq' }],
  creator: 'Runiq',
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://runiq.me',
    siteName: 'Runiq',
    title: 'Runiq | Cesta k lepšímu běhu',
    description: 'Váš průvodce světem běhání. Kalkulačka tepových zón online zdarma, tipy pro začátečníky i pokročilé běžce.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Runiq | Cesta k lepšímu běhu',
    description: 'Váš průvodce světem běhání. Kalkulačka tepových zón online zdarma.',
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
    languages: {
      'cs-CZ': 'https://runiq.me',
    },
  },
  icons: {
    icon: '/icon.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased suppressHydrationWarning`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
