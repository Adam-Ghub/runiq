import type { Metadata } from "next";
import Hero from "./components/ui/Hero";
import Features from "./components/ui/Features/Features";
import Stats from "./components/ui/Stats/Stats";
import Faq from "./components/ui/Faq/Faq";
import JsonLd from "./components/JsonLd";
import { faqData, buildFaqSchema } from "./lib/faqData";

export const metadata: Metadata = {
  title: 'Runiq | Cesta k lepšímu běhu',
  description: 'Runiq je váš průvodce světem běhání. Kalkulačka tepových zón zdarma, tipy pro začátečníky i pokročilé a tréninkové plány. Začněte běhat správně ještě dnes.',
  alternates: {
    canonical: 'https://runiq.me',
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Runiq",
  "url": "https://runiq.me",
  "description": "Váš průvodce světem běhání – kalkulačka tepových zón, tréninkové tipy a vybavení.",
  "inLanguage": "cs-CZ",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Runiq",
  "url": "https://runiq.me",
  "logo": "https://runiq.me/icon.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "info@runiq.cz",
    "contactType": "customer support",
    "areaServed": "CZ",
    "availableLanguage": "Czech",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={websiteSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={buildFaqSchema(faqData)} />
      <Hero />
      <Features />
      <Stats />
      <Faq />
    </>
  );
}
