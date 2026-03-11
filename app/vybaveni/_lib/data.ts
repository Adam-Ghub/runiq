export interface Shoe {
  id: string;
  brand: string;
  name: string;
  surface: 'road' | 'trail' | 'hybrid';
  goal: 'daily' | 'speed' | 'long';
  fit: 'standard' | 'wide' | 'stability';
  image: string;
  pros: string[];
  priceRange: string;
  description: string;
}

export const SHOE_DATABASE: Shoe[] = [
  // --- SILNICE (ROAD) ---
  {
    id: 'hoka_clifton_9',
    brand: 'Hoka',
    name: 'Clifton 9',
    surface: 'road',
    goal: 'daily',
    fit: 'wide',
    image: '/shoes/hoka_clifton_9.webp', 
    pros: ['Maximální tlumení', 'Pohodlí pro široká chodidla', 'Nízká váha'],
    priceRange: '3 200 - 3 800 Kč',
    description: 'Kultovní bota pro každodenní běhání na asfaltu. Ideální pro ty, co hledají měkký dopad a šetří své klouby.'
  },
  {
    id: 'brooks_adrenaline_gts_23',
    brand: 'Brooks',
    name: 'Adrenaline GTS 23',
    surface: 'road',
    goal: 'daily',
    fit: 'stability',
    image: '/shoes/brooks_adrenaline_gts_23.webp',
    pros: ['Podpora GuideRails', 'Vysoká stabilita', 'Dlouhá životnost'],
    priceRange: '3 300 - 3 900 Kč',
    description: 'Jistota pro běžce s pronací. Technologie GuideRails drží tvůj krok v ose a minimalizuje riziko zranění.'
  },
  {
    id: 'asics_metaspeed_sky',
    brand: 'Asics',
    name: 'Metaspeed Sky+',
    surface: 'road',
    goal: 'speed',
    fit: 'standard',
    image: '/shoes/asics_metaspeed_sky.webp',
    pros: ['Karbonový plát', 'Neuvěřitelná lehkost', 'Závodní DNA'],
    priceRange: '5 800 - 6 500 Kč',
    description: 'Čistokrevná závodní bota pro tvoje nejtěžší dny a nové osobní rekordy.'
  },

  // --- TRAIL (TERÉN) ---
  {
    id: 'hoka_speedgoat_5',
    brand: 'Hoka',
    name: 'Speedgoat 5',
    surface: 'trail',
    goal: 'long',
    fit: 'standard',
    image: '/shoes/hoka_speedgoat_5.webp',
    pros: ['Vibram® Megagrip podrážka', 'Ochrana prstů', 'Skvělé tlumení'],
    priceRange: '3 500 - 4 300 Kč',
    description: 'Král technického terénu. Bota, která tě nenechá ve štychu v bahně, na kamenech ani na 100km ultramaratonu.'
  },
  {
    id: 'saucony_peregrine_13',
    brand: 'Saucony',
    name: 'Peregrine 13',
    surface: 'trail',
    goal: 'speed',
    fit: 'standard',
    image: '/shoes/saucony_peregrine_13.webp',
    pros: ['Agresivní 5mm špunty', 'Vynikající cit pro terén', 'Nízká váha'],
    priceRange: '2 800 - 3 400 Kč',
    description: 'Lehká a dravá trailovka pro ty, co chtějí v lese závodit a cítit každý kořen.'
  },
  {
    id: 'altra_lone_peak_8',
    brand: 'Altra',
    name: 'Lone Peak 8',
    surface: 'trail',
    goal: 'daily',
    fit: 'wide',
    image: '/shoes/altra_lone_peak_8.webp',
    pros: ['Nulový drop (0mm)', 'FootShape™ široká špička', 'Přirozený běh'],
    priceRange: '3 700 - 4 400 Kč',
    description: 'Naprostá svoboda pro tvoje prsty. Ideální pro příznivce přirozeného běhu a barefoot nadšence.'
  },
  {
    id: 'la_sportiva_akasha_ii',
    brand: 'La Sportiva',
    name: 'Akasha II',
    surface: 'trail',
    goal: 'long',
    fit: 'wide',
    image: '/shoes/la_sportiva_akasha_ii.webp',
    pros: ['Robustní ochrana', 'Komfort na dlouhé tratě', 'Vysoká stabilita'],
    priceRange: '3 900 - 4 600 Kč',
    description: 'Tank, který tě provede alpským terénem. Pohodlná bota i po 10 hodinách v horách.'
  },

  // --- HYBRID (MIX) ---
  {
    id: 'nike_pegasus_40',
    brand: 'Nike',
    name: 'Pegasus 40',
    surface: 'hybrid',
    goal: 'daily',
    fit: 'standard',
    image: '/shoes/nike_pegasus_40.webp',
    pros: ['Univerzální dříč', 'Dlouhá výdrž podrážky', 'Výborná cena'],
    priceRange: '2 600 - 3 200 Kč',
    description: 'Nejuniverzálnější bota na světě. Zvládne ranní běh v parku i odpolední kilometry na asfaltu.'
  },
  {
    id: 'on_cloudsurfer',
    brand: 'On',
    name: 'Cloudsurfer',
    surface: 'hybrid',
    goal: 'daily',
    fit: 'standard',
    image: '/shoes/on_cloudsurfer.webp',
    pros: ['CloudTec Phase® tlumení', 'Švýcarský prémiový design', 'Hladký přechod'],
    priceRange: '4 100 - 4 800 Kč',
    description: 'Městský styl se špičkovou technologií tlumení. Bota pro ty, co chtějí vypadat skvěle a běžet lehce.'
  },
  {
    id: 'hoka_challenger_7',
    brand: 'Hoka',
    name: 'Challenger 7 ATR',
    surface: 'hybrid',
    goal: 'long',
    fit: 'wide',
    image: '/shoes/hoka_challenger_7.webp',
    pros: ['Široký střih', 'Všestrannost Road-to-Trail', 'Měkké tlumení'],
    priceRange: '3 200 - 3 900 Kč',
    description: 'Pokud běháš z domu rovnou do lesa, tohle je tvůj ideální parťák. Skvělý na obojím.'
  }
];

/**
 * Funkce vypočítá skóre shody a vrátí top 3 boty.
 */
export const getRecommendedShoes = (selections: Record<string, string>) => {
  return SHOE_DATABASE
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