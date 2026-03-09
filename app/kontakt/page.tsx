import { Metadata } from "next";
import Contact from './_components/Contact'
import Faq from '../components/ui/Faq/Faq'

export const metadata: Metadata = {
  title: 'Kontakt | Napište nám',
  description: 'Máte dotaz ohledně běhání, tepových zón nebo běžeckého vybavení? Rádi vám poradíme s tréninkem i výběrem bot.',
  alternates: {
    canonical: 'https://runiq.me/kontakt',
  },
};

export default function Page() {
  return (
    <>
      <Contact />
      <Faq />
    </>
  )
}