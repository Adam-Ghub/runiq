import { Metadata } from "next";
import Contact from './_components/Contact'
import Faq from '../components/ui/Faq/Faq'

export const metadata: Metadata = {
  title: 'Kontaktujte Nás',
  description: 'Máte dotaz ohledně běhání, tepových zón nebo výběru běžeckých bot? Napište nám – rádi poradíme s tréninkem i vybavením pro začátečníky i zkušené běžce.',
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