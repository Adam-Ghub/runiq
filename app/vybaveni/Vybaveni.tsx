'use client';

import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { 
  Route, 
  Mountain, 
  Trees, 
  Zap, 
  Dumbbell, 
  Trophy, 
  ArrowLeft,
  CheckCircle2,
  Banknote,
  Wallet
} from 'lucide-react';

// --- IMPORTY TVÝCH KOMPONENT ---
import { SelectionCard } from './_components/SelectionCard';
import { getRecommendedShoes } from './_lib/data';

const SelectedShoe = dynamic(
  () => import('./_components/SelectedShoe').then(m => ({ default: m.SelectedShoe })),
  { ssr: false }
);

const STEPS = [
  {
    id: 1,
    key: 'surface',
    title: 'Kde budeš nejčastěji běhat?',
    description: 'Povrch určuje typ podrážky a míru tlumení.',
    options: [
      { id: 'road', title: 'Silnice', benefits: ['Hladký asfalt a beton', 'Vysoká návratnost energie', 'Dlouhá životnost podrážky'], icon: <Route /> },
      { id: 'trail', title: 'Trail', benefits: ['Nezpevněné lesní cesty', 'Agresivní grip (špunty)', 'Ochrana prstů a stability'], icon: <Mountain /> },
      { id: 'hybrid', title: 'Kombinace', benefits: ['Univerzální vzorek', 'Přechody asfalt ↔ les', 'Ideální pro parky a cyklostezky'], icon: <Trees /> },
    ]
  },
  {
    id: 2,
    key: 'goal',
    title: 'Jaký je tvůj hlavní cíl?',
    description: 'Pomůžeme ti vybrat botu s ideální váhou a dynamikou.',
    options: [
      { id: 'daily', title: 'Denní trénink', benefits: ['Maximální komfort', 'Ochrana kloubů', 'Pro každodenní kilometry'], icon: <Dumbbell /> },
      { id: 'speed', title: 'Rychlost a závod', benefits: ['Extrémně lehká váha', 'Karbonový plát / tuhost', 'Pro osobní rekordy'], icon: <Zap /> },
      { id: 'long', title: 'Dlouhé běhy / Ultra', benefits: ['Maximální tlumení', 'Šetří nohy při únavě', 'Pro běhy nad 90 minut'], icon: <Trophy /> },
    ]
  },
  {
    id: 3,
    key: 'price',
    title: 'Jaký je tvůj rozpočet?',
    description: 'Kvalitní boty jsou investicí do tvého zdraví a radosti z pohybu.',
   options: [
  { 
    id: 'budget', title: '2 000 – 4 000 Kč', benefits: ['Ideální volba pro začátečníky', 'Skvělý poměr ceny a výkonu'], icon: <Wallet /> 
  },
  { 
    id: 'midrange', title: '4 000 – 6 000 Kč', benefits: ['Pokročilé technologie a tlumení', 'Vhodné pro pravidelný trénink'], icon: <Banknote /> 
  },
  { 
    id: 'premium', title: '6 000 Kč a více', benefits: ['Karbonové pláty a nízká váha', 'Maximální výkon pro rekordy'], icon: <Zap /> 
  },
]
  }
];

export default function Vybaveni() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [allDone, setAllDone] = useState(false);

  const stepData = STEPS[currentStep];

  const handleSelect = (optionId: string) => {
    const updatedSelections = { ...selections, [stepData.key]: optionId };
    setSelections(updatedSelections);

    if (currentStep < STEPS.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 400);
    } else {
      setAllDone(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelections({});
    setShowResults(false);
    setAllDone(false);
  };

  // 2. ZOBRAZENÍ VÝSLEDKŮ
  if (showResults) {
    const recommendedShoes = getRecommendedShoes(selections);
    return (
      <div className="max-w-6xl mx-auto py-12 px-6">
        <SelectedShoe results={recommendedShoes} onReset={handleReset} />
      </div>
    );
  }

  // 3. ZOBRAZENÍ KVÍZU
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto pt-12 px-6">
        <div className="flex items-center justify-between mb-8">
          <div className="w-30" />

          <div className="flex space-x-2">
            {STEPS.map((_, index) => (
              <div 
                key={index}
                className={`h-2 w-12 rounded-full transition-all duration-500 ${index <= currentStep ? 'bg-blue-600' : 'bg-gray-100'}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => {
                if (allDone) {
                  setAllDone(false);
                } else {
                  setCurrentStep(currentStep - 1);
                }
              }}
              disabled={currentStep === 0 && !allDone}
              className="flex items-center text-gray-400 hover:text-blue-600 transition-colors font-medium cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-gray-400"
            >
              <ArrowLeft size={20} className="mr-2" /> Zpět
            </button>
            <div className="text-sm font-bold text-gray-400">KROK {currentStep + 1} / 3</div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{stepData.title}</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">{stepData.description}</p>
        </div>

        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8 pb-20">
          {allDone ? (
            <div className="col-span-3 flex flex-col items-center justify-center py-16 gap-6 animate-in fade-in duration-500">
              {/* Skryté obrázky pro preload — Next.js Image priority zajistí správné optimizer URL */}
              <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '800px' }}>
                {getRecommendedShoes(selections).map((shoe, i) => (
                  <div key={shoe.id} style={{ position: 'relative', width: i === 0 ? '400px' : '96px', height: i === 0 ? '420px' : '96px' }}>
                    <Image
                      src={shoe.image}
                      alt=""
                      fill
                      priority
                      sizes={i === 0 ? '(max-width: 768px) 100vw, 50vw' : '96px'}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 text-green-600">
                <CheckCircle2 size={48} />
              </div>
              <h2 className="text-2xl font-black text-gray-900">Všechno vybráno!</h2>
              <p className="text-gray-500 text-center max-w-md">Máme všechno, co potřebujeme. Klikni níže a zobrazíme ti nejlepší boty přímo pro tebe.</p>
              <button
                onClick={() => setShowResults(true)}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-12 rounded-2xl transition-all cursor-pointer shadow-lg shadow-blue-100 text-lg"
              >
                Zobrazit doporučené boty
              </button>
            </div>
          ) : (
            stepData.options.map((option) => (
              <SelectionCard
                key={option.id}
                title={option.title}
                benefits={option.benefits}
                icon={option.icon}
                isSelected={selections[stepData.key] === option.id}
                onClick={() => handleSelect(option.id)}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
}