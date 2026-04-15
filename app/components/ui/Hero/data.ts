export interface SlideData {
  id: number;
  image: string;
  mobileImage: string;
  blurDataURL: string;
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
    image: '/hero/Carousel_3.webp',
    mobileImage: '/hero/Carousel_3_mobile.webp',
    blurDataURL:
      'data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAAAwAgCdASoQAAwABUB8JbACdAYvrFcxM4ONwAD+yjXSgcW7KrHD0XAGuh2YVvHKvnSQ/JMBYPeqPP/rhwBz6CDgFWZErg/GQKK5HhEG74waDY7hWNBTFQqjcVLSjecugAA',
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
    mobileImage: '/hero/Carousel_2_mobile.webp',
    blurDataURL:
      'data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADwAQCdASoQAA0ABUB8JbACdAD8JnMlmyAA/R+EwV2dX7YjreI6T3lT9oiR7gJG0GBAb5ZOEtOz/LdlfF/3h7AFvAAAAA==',
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
    image: '/hero/Carousel_1.webp',
    mobileImage: '/hero/Carousel_1_mobile.webp',
    blurDataURL:
      'data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADwAQCdASoQAAgABUB8JZgCdAEO5EKzIAAA/kUtUqBpGXnwKbm2ZkLO3PWfzKVDmJGvyfy4+wdY8BKHr5jEi+tRByr0z8AA',
    imageAlt: 'Galerie běžeckého vybavení – boty a doplňky',
    title: 'Prohlédněte si naše',
    titleHighlight: 'vybavení',
    description:
      'Galerie prověřeného běžeckého vybavení. Boty, které jsme testovali a doporučujeme pro všechny typy běžců – od začátečníků po maraton.',
    ctaText: 'Zobrazit galerii',
    ctaHref: '/galerie',
  },
];
