import { Metadata } from "next";
import Contact from './_components/Contact'
import Faq from '../components/ui/Faq/Faq'
import JsonLd from '../components/JsonLd'
import { faqData, buildFaqSchema } from '../lib/faqData'

export const metadata: Metadata = {
  title: 'Kontakt | Runiq – Napište nám',
  description: 'Máte dotaz ohledně běhání, tepových zón nebo běžeckého vybavení? Kontaktujte nás. Rádi vám poradíme s tréninkem i výběrem vybavení.',
  keywords: [
    'kontakt Runiq', 'běžecké poradenství', 'dotaz běhání', 'pomoc s tréninkem', 'běžecký kouč'
  ],
  alternates: {
    canonical: 'https://runiq.me/kontakt',
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
      "name": "Kontakt",
      "item": "https://runiq.me/kontakt",
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={buildFaqSchema(faqData)} />
      <Contact />
      <Faq />
    </>
  )
}
