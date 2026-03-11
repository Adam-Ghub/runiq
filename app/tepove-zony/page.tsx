// app/tepove-zony/page.tsx
import { Metadata } from "next";
import TepoveZonyClient from "./Tepove_zony";
import JsonLd from "../components/JsonLd";

export const metadata: Metadata = {
  title: 'Kalkulačka tepových zón zdarma | Runiq',
  description: 'Vypočítejte si tepové zóny pro běh zdarma pomocí Karvonenovy metody. Zjistěte ideální intenzitu tréninku pro spalování tuků, vytrvalost a výkon.',
  keywords: [
    'kalkulačka tepových zón', 'výpočet tepových zón', 'tepové zóny běh',
    'tepová frekvence zóny', 'Karvonen metoda', 'maximální tepová frekvence výpočet',
    'spalování tuků tepová zóna', 'aerobní zóna', 'anaerobní práh',
    'klidový tep', 'jak zjistit tepové zóny', 'tepové zóny kalkulačka online zdarma',
    'jaké tepové zóny pro spalování tuků', 'intenzita tréninku'
  ],
  alternates: {
    canonical: 'https://runiq.me/tepove-zony',
  },
  openGraph: {
    title: 'Kalkulačka tepových zón zdarma | Runiq',
    description: 'Vypočítejte si tepové zóny pro běh online zdarma pomocí Karvonenovy metody. Zjistěte ideální intenzitu pro vaše tréninky.',
    url: 'https://runiq.me/tepove-zony',
    type: 'website',
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Domů",
      "item": "https://runiq.me",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Kalkulačka tepových zón",
      "item": "https://runiq.me/tepove-zony",
    },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Kalkulačka tepových zón",
  "url": "https://runiq.me/tepove-zony",
  "description": "Online kalkulačka pro výpočet tepových zón metodou Karvonenovy formule. Zadejte věk a klidový tep a zjistěte vaše ideální tréninkové zóny.",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "inLanguage": "cs-CZ",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "CZK",
  },
  "publisher": {
    "@type": "Organization",
    "name": "Runiq",
    "url": "https://runiq.me",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webAppSchema} />
      <TepoveZonyClient />
    </>
  );
}
