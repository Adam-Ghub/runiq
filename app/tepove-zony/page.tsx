import { Metadata } from "next";
import TepoveZonyClient from "./Tepove_zony";

const calculatorJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Kalkulačka tepových zón',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Any',
  description: 'Online kalkulačka tepových zón pro běžce. Výpočet 5 tréninkových zón podle Karvonenovy metody na základě věku a klidové tepové frekvence.',
  url: 'https://runiq.me/tepove-zony',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'CZK',
  },
  inLanguage: 'cs-CZ',
};

export const metadata: Metadata = {
  title: { absolute: 'Kalkulačka tepových zón zdarma | Výpočet online' },
  description: 'Vypočítejte si tepové zóny pro běh zdarma pomocí Karvonenovy metody. Zjistěte ideální intenzitu tréninku pro spalování tuků v zóně 2, vytrvalost i výkon. Online kalkulačka.',
  keywords: [
    'kalkulačka tepových zón', 'výpočet tepových zón', 'tepové zóny online zdarma',
    'tepové zóny běh', 'karvonen vzorec', 'karvonen metoda',
    'maximální tepová frekvence výpočet', 'klidový tep',
    'spalování tuků tepová zóna', 'zóna 2 trénink', 'zone 2 běh',
    'aerobní zóna', 'anaerobní práh', 'jak zjistit tepové zóny',
    'tepová frekvence výpočet věk', 'intenzita tréninku'
  ],
  alternates: {
    canonical: 'https://runiq.me/tepove-zony',
  },
  openGraph: {
    title: 'Kalkulačka tepových zón zdarma | Výpočet online',
    description: 'Vypočítejte si tepové zóny pro běh online zdarma. Karvonen metoda – ideální intenzita pro spalování tuků, vytrvalost a výkon.',
    url: 'https://runiq.me/tepove-zony',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorJsonLd) }}
      />
      <TepoveZonyClient />
    </>
  );
}