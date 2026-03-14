export interface Shoe {
  id: string;
  brand: string;
  name: string;
  surface: 'road' | 'trail' | 'hybrid';
  goal: 'daily' | 'speed' | 'long';
  fit: 'standard' | 'wide' | 'stability';
  image: string;
  pros: string[];
  priceId: 'budget' | 'midrange' | 'premium'; // Propojení s výběrem
  priceRange: string;
  description: string;
}

export const SHOE_DATABASE: Shoe[] = [
  // --- BUDGET (2 000 - 4 000 Kč) ---
  {
    id: 'nike_pegasus_40',
    brand: 'Nike',
    name: 'Pegasus 40',
    surface: 'hybrid',
    goal: 'daily',
    fit: 'standard',
    image: '/shoes/nike_pegasus_40.webp',
    pros: ['Univerzální dříč', 'Legendární odolnost', 'Skvělá cena'],
    priceId: 'budget',
    priceRange: '2 800 - 3 400 Kč',
    description: 'Nejoblíbenější bota na světě. Zvládne asfalt i lehké polní cesty. Ideální pro ty, co chtějí jedny boty na všechno.'
  },
  {
    id: 'adidas_adizero_sl',
    brand: 'Adidas',
    name: 'Adizero SL',
    surface: 'road',
    goal: 'speed',
    fit: 'standard',
    image: '/shoes/adidas_adizero_sl.webp',
    pros: ['Velmi lehká', 'Pevné usazení nohy', 'Rychlá odezva'],
    priceId: 'budget',
    priceRange: '2 500 - 3 200 Kč',
    description: 'Vstupenka do světa rychlosti od Adidasu. Lehká bota, která tě v tréninku pošle dopředu.'
  },
  {
    id: 'asics_cumulus_25',
    brand: 'Asics',
    name: 'Gel-Cumulus 25',
    surface: 'road',
    goal: 'daily',
    fit: 'standard',
    image: '/shoes/asics_cumulus_25.webp',
    pros: ['PureGEL™ technologie', 'Měkký došlap', 'Pohodlný svršek'],
    priceId: 'budget',
    priceRange: '3 200 - 3 900 Kč',
    description: 'Klasika pro každodenní polykání kilometrů. Skvěle tlumí a odpouští chyby v technice.'
  },

  // --- MIDRANGE (4 000 - 6 000 Kč) ---
  {
    id: 'hoka_clifton_9',
    brand: 'Hoka',
    name: 'Clifton 9',
    surface: 'road',
    goal: 'daily',
    fit: 'wide',
    image: '/shoes/hoka_clifton_9.webp',
    pros: ['Maximální tlumení', 'Kolébkový tvar podrážky', 'Pohodlí'],
    priceId: 'midrange',
    priceRange: '4 200 - 4 800 Kč',
    description: 'Měkkost, kterou si zamiluješ. Hoka Clifton je synonymem pro komfortní běh, který šetří tvoje klouby.'
  },
  {
    id: 'asics_kayano_30',
    brand: 'Asics',
    name: 'Gel-Kayano 30',
    surface: 'road',
    goal: 'long',
    fit: 'stability',
    image: '/shoes/asics_kayano_30.webp',
    pros: ['Nejlepší podpora na trhu', '4D Guidance System', 'Prémiové materiály'],
    priceId: 'midrange',
    priceRange: '4 800 - 5 500 Kč',
    description: 'Král stability. Pokud se ti bortí klenba nebo šlapeš dovnitř (pronace), tohle je nejlepší volba pro tvé zdraví.'
  },
  {
    id: 'on_cloudmonster',
    brand: 'On',
    name: 'Cloudmonster',
    surface: 'road',
    goal: 'long',
    fit: 'standard',
    image: '/shoes/on_cloudmonster.webp',
    pros: ['Unikátní design', 'Masivní tlumení', 'Švýcarská kvalita'],
    priceId: 'midrange',
    priceRange: '4 500 - 5 200 Kč',
    description: 'Výrazný vzhled a ještě výraznější tlumení. Cloudmonster tě doslova vystřelí do dalšího kroku.'
  },

  // --- PREMIUM (6 000 Kč+) ---
  {
    id: 'nike_vaporfly_3',
    brand: 'Nike',
    name: 'Vaporfly 3',
    surface: 'road',
    goal: 'speed',
    fit: 'standard',
    image: '/shoes/nike_vaporfly_3.webp',
    pros: ['Karbonový plát', 'Extrémní návratnost energie', 'Neuvěřitelná lehkost'],
    priceId: 'premium',
    priceRange: '6 500 - 7 500 Kč',
    description: 'Zbraň pro tvoje osobní rekordy. Bota, která změnila svět maratonu. Jen pro ty, co chtějí být nejrychlejší.'
  },

  // --- TRAIL SPECIÁL ---
  {
    id: 'hoka_speedgoat_5',
    brand: 'Hoka',
    name: 'Speedgoat 5',
    surface: 'trail',
    goal: 'long',
    fit: 'standard',
    image: '/shoes/hoka_speedgoat_5.webp',
    pros: ['Vibram® podrážka', 'Extrémní grip', 'Ochrana v terénu'],
    priceId: 'midrange',
    priceRange: '4 000 - 4 600 Kč',
    description: 'Nejlepší trailová bota současnosti. Podrží tě na kamenech, v blátě i na kořenech.'
  }
];
/**
 * Funkce vypočítá skóre shody a vrátí top 3 boty.
 */
export const getRecommendedShoes = (selections: Record<string, string>) => {
  return SHOE_DATABASE
    .filter(shoe => !selections.price || shoe.priceId === selections.price)
    .map(shoe => {
      let score = 0;

      // Povrch je kritický - shoda dává 50 bodů
      if (shoe.surface === selections.surface) score += 50;

      // Cíl běhu dává 30 bodů
      if (shoe.goal === selections.goal) score += 30;

      // Šířka/Fit dává 20 bodů
      if (shoe.fit === selections.fit) score += 20;

      return { ...shoe, matchScore: score };
    })
    .sort((a, b) => b.matchScore - a.matchScore) // Od nejlepší po nejhorší
    .slice(0, 3); // Chceme jen Top 3
};