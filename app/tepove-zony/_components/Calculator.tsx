"use client";

import { Calculator, Info } from 'lucide-react';
import { useState } from 'react';

interface CalculatorProps {
  age: string;
  setAge: (val: string) => void;
  restingHR: string;
  setRestingHR: (val: string) => void;
  isMaxHREnabled: boolean;
  setIsMaxHREnabled: (val: boolean) => void;
  maxHRInput: string;
  setMaxHRInput: (val: string) => void;
  onCalculate: () => void;
}

export default function CalculatorPage({ 
  age, setAge, restingHR, setRestingHR,
  isMaxHREnabled, setIsMaxHREnabled, maxHRInput, setMaxHRInput,
  onCalculate 
}: CalculatorProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="bg-foreground rounded-3xl md:rounded-4xl shadow-2xl p-6 md:p-12 w-full max-w-xl border border-gray/5">
      
      <h2 className="text-center text-xl md:text-2xl font-black text-black mb-8 md:mb-14">
        Kalkulačka tepových zón
      </h2>

      <div className="flex items-center justify-center gap-4 md:gap-5 mb-6 md:mb-8 group">
        <button
          type="button"
          aria-label="Tlačítko pro zapnutí/vypnutí zadávání maximálního tepu"
          onClick={() => setIsMaxHREnabled(!isMaxHREnabled)}
          className={`relative inline-flex h-8 w-14 md:h-9 md:w-16 items-center rounded-2xl transition-all duration-200 focus:outline-none border-2 transform hover:scale-[1.03] active:scale-95 ${
            isMaxHREnabled 
              ? 'bg-blue border-blue hover:bg-blue/90' 
              : 'bg-gray/10 border-transparent hover:bg-gray/20'
          } shadow-sm hover:cursor-pointer`}
        >
          <span
            className={`inline-block h-5 w-5 md:h-6 md:w-6 transform rounded-xl bg-white shadow-sm transition-all duration-200 ${
              isMaxHREnabled ? 'translate-x-7 md:translate-x-8' : 'translate-x-1.5'
            }`}
          />
        </button>
        <span 
          className="text-sm md:text-base font-medium text-black/70 cursor-pointer select-none"
          onClick={() => setIsMaxHREnabled(!isMaxHREnabled)}
        >
          Znám svůj maximální tep
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
        <div className="flex flex-col gap-2 md:gap-3">
          <label htmlFor='age-input' className="text-[10px] md:text-sm font-bold text-gray tracking-[1px] md:tracking-[2px] ml-1 md:ml-2 uppercase">
            {isMaxHREnabled ? 'Max. tep' : 'Věk'}
          </label>
          <input
          id='age-input'
            type="number"
            inputMode="numeric"
            value={isMaxHREnabled ? maxHRInput : age}
            onChange={(e) => isMaxHREnabled ? setMaxHRInput(e.target.value) : setAge(e.target.value)}
            onFocus={(e) => { 
              if (e.target.value === '0') {
                if (isMaxHREnabled) {
                  setMaxHRInput('');
                } else {
                  setAge('');
                }
              }
            }}
            className="w-full px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl border-2 border-gray/10 text-black text-lg md:text-xl font-bold focus:outline-none focus:ring-4 focus:ring-blue/10 focus:border-blue transition-all bg-background/50"
          />
        </div>

        <div className="flex flex-col gap-2 md:gap-3 relative">
          <div className="flex items-center gap-2 ml-1 md:ml-2">
            <label  htmlFor='resting-hr-input' className="text-[10px] md:text-sm font-bold text-gray tracking-[1px] md:tracking-[2px] uppercase">
              Klidový tep
            </label>
            
            <div 
              className="relative flex items-center"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <div className="flex items-start justify-start hover:cursor-help">
                <Info size={14} className="text-blue md:hidden" />
                <Info size={16} className="text-blue hidden md:block" />
              </div>
              
              {showTooltip && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 md:w-80 py-3 px-6 md:py-4 md:px-8 bg-background backdrop-blur-md text-xs rounded-2xl shadow-2xl z-50 border border-blue/10 animate-in fade-in slide-in-from-bottom-1 duration-200">
                  <p className="font-bold text-blue mb-1 md:mb-2 text-sm md:text-[16px]">Co je klidový tep?</p>
                  <p className="text-gray-600 leading-relaxed font-medium text-xs md:text-[14px]">
                    Tepová frekvence měřená v naprostém klidu. Nejlépe ráno po probuzení.
                  </p>
                </div>
              )}
            </div>
          </div>

          <input
          id='resting-hr-input'
            type="number"
            inputMode="numeric"
            value={restingHR}
            onChange={(e) => setRestingHR(e.target.value)}
            onFocus={(e) => e.target.value === '0' && setRestingHR('')}
            className="w-full px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl border-2 border-gray/10 text-black text-lg md:text-xl font-bold focus:outline-none focus:ring-4 focus:ring-blue/10 focus:border-blue transition-all bg-background/50"
          />
        </div>
      </div>

      {/* Tlačítko pro výpočet */}
      <button 
        type="button"
        onClick={onCalculate}
        className="w-full bg-blue hover:bg-blue/90 text-foreground font-black py-4 md:py-5 rounded-xl md:rounded-2xl flex items-center justify-center gap-2 md:gap-3 transition-all hover:cursor-pointer transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue/25 mb-6 md:mb-8"
      >
        <Calculator size={20} className="md:w-6 md:h-6" />
        <span className="text-lg md:text-xl font-bold">Vypočítat zóny</span>
      </button>

      {/* Info o vzorci pod tlačítkem */}
      <div className="flex gap-3 md:gap-4 p-4 md:p-5 rounded-xl md:rounded-2xl bg-gray/5 border border-gray/5 items-center">
        <div className="shrink-0">
          <Info size={18} className="text-blue md:w-5 md:h-5" />
        </div>
        <p className="text-gray-500 leading-relaxed text-[11px] md:text-[13px]">
          Výpočet je orientační a vychází z Karvonenova vzorce.
        </p>
      </div>
    </div>
  );
}