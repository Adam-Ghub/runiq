import { Metadata } from "next";
import Vybaveni from './Vybaveni'

export const metadata: Metadata = {
  title: { absolute: 'Výběr běžeckých bot – Kvíz na míru | Runiq' },
  description: 'Nevíte jaké boty na běh vybrat? Odpovězte na 3 otázky a náš kvíz vám doporučí ideální běžecké boty přesně pro váš styl, povrch a cíle. Zdarma.',
  keywords: [
    'výběr běžeckých bot', 'jaké boty na běh', 'kvíz běžecké boty', 'nejlepší běžecké boty',
    'boty na trail', 'boty na asfalt', 'boty pro začátečníky běh',
    'Hoka boty', 'Saucony boty', 'Brooks boty', 'Asics boty', 'Altra boty',
    'boty na dlouhé běhy', 'závodní běžecké boty', 'karbonové boty na běh',
    'běžecké boty s tlumením', 'boty pro pronaci', 'trailové boty',
  ],
  alternates: {
    canonical: 'https://runiq.me/vybaveni',
  },
  openGraph: {
    title: 'Výběr běžeckých bot – Kvíz na míru | Runiq',
    description: 'Odpovězte na 3 otázky a zjistěte, jaké boty jsou ideální přesně pro váš styl běhu. Boty na silnici, trail i závodní karbonové modely.',
    url: 'https://runiq.me/vybaveni',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function page() {
  return (
    <>
      <Vybaveni />
    </>
  )
}
