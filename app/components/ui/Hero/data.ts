export interface SlideData {
  id: number;
  image: string;
  imageAlt: string;
  title: string;
  titleHighlight: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

export const slides: SlideData[] = [
  {
    id: 1,
    image: '/hero/Carousel_1.webp',
    imageAlt: 'Běžec trénující v přírodě – kalkulačka tepových zón',
    title: 'Trénujte ve správné',
    titleHighlight: 'intenzitě',
    description:
      'Vypočítejte si tepové zóny pomocí Karvonenovy metody. Spalujte tuky v zóně 2, budujte kondici a vyhněte se přetrénování – online a zdarma.',
    ctaText: 'Vypočítat tepové zóny',
    ctaHref: '/tepove-zony',
  },
  {
    id: 2,
    image: '/hero/Carousel_2.webp',
    imageAlt: 'Výběr běžeckých bot – kvíz na míru',
    title: 'Boty přesně pro',
    titleHighlight: 'váš běh',
    description:
      'Nevíte, jaké boty na běh vybrat? Odpovězte na 3 otázky a náš kvíz vám doporučí ideální běžecké boty – pro silnici, trail i závodní tratě.',
    ctaText: 'Vybrat boty',
    ctaHref: '/vybaveni',
  },
  {
    id: 3,
    image: '/hero/Carousel_3.webp',
    imageAlt: 'Galerie běžeckého vybavení – boty a doplňky',
    title: 'Prohlédněte si naše',
    titleHighlight: 'vybavení',
    description:
      'Galerie prověřeného běžeckého vybavení. Boty, které jsme testovali a doporučujeme pro všechny typy běžců – od začátečníků po maraton.',
    ctaText: 'Zobrazit galerii',
    ctaHref: '/galerie',
  },
];
