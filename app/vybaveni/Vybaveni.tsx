'use client';

import { useState, useEffect } from 'react';
import { 
  Route, 
  Mountain, 
  Trees, 
  Zap, 
  Dumbbell, 
  Trophy, 
  Footprints, 
  Expand, 
  Target, 
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';

// --- IMPORTY TVÝCH KOMPONENT ---
import { SelectionCard } from './_components/SelectionCard';
import { SelectedShoe } from './_components/SelectedShoe';
import { getRecommendedShoes } from './_lib/data';

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
    key: 'fit',
    title: 'Co tvoje chodidlo potřebuje?',
    description: 'Pohodlí je nejdůležitější faktor pro zdravý běh.',
    options: [
      { id: 'standard', title: 'Standardní střih', benefits: ['Klasické pevné obepnutí', 'Jistota v technickém terénu'], icon: <Footprints /> },
      { id: 'wide', title: 'Široká špička', benefits: ['Přirozený prostor pro prsty', 'Prevence otlaků a puchýřů'], icon: <Expand /> },
      { id: 'stability', title: 'Podpora a stabilita', benefits: ['Korekce pronace (šlapání dovnitř)', 'Pevnější vnitřní hrana'], icon: <Target /> },
    ]
  }
];

export default function Vybaveni() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [allDone, setAllDone] = useState(false);

  // Preload obrázků bot hned jak uživatel dokončí kvíz,
  // aby se při zobrazení výsledků načetly okamžitě z cache
  useEffect(() => {
    if (!allDone) return;
    const shoes = getRecommendedShoes(selections);
    shoes.forEach(({ image }) => {
      const img = new window.Image();
      img.src = image;
    });
  }, [allDone, selections]);

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
          {allDone ? (
            <div className="col-span-3 flex flex-col items-center justify-center py-16 gap-6 animate-in fade-in duration-500">
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