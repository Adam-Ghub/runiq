'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2, RefreshCcw, Trophy, Tag, Gauge, Map } from 'lucide-react';
import { Shoe } from '../_lib/data';

interface SelectedShoeProps {
  results: (Shoe & { matchScore: number })[];
  onReset: () => void;
}

export const SelectedShoe = ({ results, onReset }: SelectedShoeProps) => {
  const [winnerIndex, setWinnerIndex] = useState(0);

  const winner = results[winnerIndex];
  const alternatives = results.filter((_, i) => i !== winnerIndex);

  if (!winner) return null;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* HLAVNÍ VÍTĚZ */}
      <div className="mb-12">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Trophy className="text-blue-600" size={24} />
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Tvoje nejlepší shoda</span>
        </div>

        <div className="bg-white rounded-[2.5rem] border-2 border-blue-600 p-12 max-md:p-8 shadow-2xl shadow-blue-100 relative overflow-hidden">
          {/* Match Score Badge */}
          <div className="absolute top-0 right-0 bg-blue-600 text-white px-10 py-4 rounded-bl-4xl font-black text-2xl">
            {winner.matchScore}%
          </div>

          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-12 items-center">
            {/* OBRÁZEK */}
            <div className="relative h-105 rounded-3xl overflow-hidden max-lg:mt-16">
              <Image
                src={winner.image}
                alt={`${winner.brand} ${winner.name}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* DETAILY */}
            <div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">{winner.brand}</span>
              <h2 className="text-5xl font-black text-gray-900 mb-4">{winner.name}</h2>
              
              {/* TECHNICKÉ PARAMETRY (Štítky) */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-bold uppercase">
                  <Map size={14} /> {winner.surface}
                </span>
                <span className="flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-bold uppercase">
                  <Gauge size={14} /> {winner.goal}
                </span>
                <span className="flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-bold uppercase">
                  <Tag size={14} /> {winner.fit}
                </span>
              </div>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {winner.description}
              </p>

              {/* PROS (Výhody) */}
              <div className="grid grid-cols-1 gap-3 mb-10">
                {winner.pros.map((pro, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-800 font-semibold bg-blue-50/50 p-3 rounded-xl border border-blue-50">
                    <CheckCircle2 className="text-blue-600 shrink-0" size={20} />
                    {pro}
                  </div>
                ))}
                {/* CENA */}
                <div className="flex items-center gap-3 text-gray-800 font-semibold bg-blue-50/50 p-3 rounded-xl border border-blue-50">
                  <CheckCircle2 className="text-blue-600 shrink-0" size={20} />
                  <span className="whitespace-nowrap">{winner.priceRange}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ALTERNATIVNÍ MOŽNOSTI (Menší karty) */}
      {alternatives.length > 0 && (
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 mb-12">
          {alternatives.map(shoe => (
            <div
              key={shoe.id}
              onClick={() => setWinnerIndex(results.indexOf(shoe))}
              className="bg-white border border-gray-100 p-6 rounded-3xl flex items-center gap-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-[1.03]"
            >
              <Image src={shoe.image} alt={`${shoe.brand} ${shoe.name}`} width={96} height={96} className="object-contain shrink-0" />
              <div className="flex-1">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{shoe.brand}</span>
                <h4 className="text-lg font-bold text-gray-900 leading-tight mb-2">{shoe.name}</h4>
                <div className="flex gap-1">
                  <span className="text-[9px] bg-gray-100 px-2 py-0.5 rounded text-gray-500 font-bold uppercase">{shoe.surface}</span>
                  <span className="text-[9px] bg-gray-100 px-2 py-0.5 rounded text-gray-500 font-bold uppercase">{shoe.goal}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-blue-600 font-black text-sm">{shoe.matchScore}%</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* RESET TLAČÍTKO */}
      <div className="flex justify-center">
        <button 
          onClick={onReset}
          className="flex items-center gap-2 text-gray-400 hover:text-blue-600 font-bold py-4 px-8 rounded-2xl transition-all cursor-pointer"
        >
          <RefreshCcw size={20} /> Zkusit jiný výběr
        </button>
      </div>
    </div>
  );
};