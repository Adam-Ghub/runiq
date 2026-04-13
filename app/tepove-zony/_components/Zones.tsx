"use client";

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Container from '@/app/components/Container';

interface ZonesProps {
  age: number;
  restingHR: number;
  isMaxHREnabled: boolean;
  maxHROverride: number;
}

export default function Zones({ age, restingHR, isMaxHREnabled, maxHROverride }: ZonesProps) {
  const maxHR = isMaxHREnabled ? maxHROverride : Math.round(208 - (0.7 * age));
  const hrr = maxHR - restingHR;

  const calculateBPM = (percentage: number) => Math.round((hrr * percentage) + restingHR);

  const zonesData = [
    {
      id: "Z1", name: "Velmi lehké", 
      min: calculateBPM(0.40), 
      max: calculateBPM(0.50), 
      desc: "Velmi lehký pohyb, chůze nebo protažení.",
      benefits: ["Aktivní regenerace", "Snížení stresu", "Zlepšení prokrvení"],
      color: "text-[#118844]", circleBorder: "border-[#118844]", bgColor: "bg-[#118844]"
    },
    {
      id: "Z2", name: "Vytrvalost", 
      min: calculateBPM(0.51), 
      max: calculateBPM(0.65),
      desc: "Základní vytrvalost. Pálení tuku a bududování srdce.",
      benefits: ["Maximální spalování tuků", "Budování aerobního základu", "Posílení srdce"],
      color: "text-blue", circleBorder: "border-blue", bgColor: "bg-blue"
    },
    {
      id: "Z3", name: "Aerobní", 
      min: calculateBPM(0.66), 
      max: calculateBPM(0.80), 
      desc: "Tempo maratonu. Zlepšení kondice a kapacity plic.",
      benefits: ["Zlepšení aerobní kapacity", "Efektivnější dýchání", "Zvýšení výdrže"],
      color: "text-amber-500", circleBorder: "border-amber-500", bgColor: "bg-amber-500"
    },
    {
      id: "Z4", name: "Anaerobní", 
      min: calculateBPM(0.81), 
      max: calculateBPM(0.90),
      desc: "Tvrdý trénink pro zvýšení rychlosti a prahu únavy.",
      benefits: ["Zvyšování rychlosti", "Tolerance laktátu", "Síla nohou"],
      color: "text-orange-500", circleBorder: "border-orange-500", bgColor: "bg-orange-500"
    },
    {
      id: "Z5", name: "Maximální", 
      min: calculateBPM(0.90), 
      max: maxHR,
      desc: "Krátké sprinty. Špičkový výkon organismu.",
      benefits: ["Zvýšení VO2 max", "Nervosvalová koordinace", "Explozivní síla"],
      color: "text-red-500", circleBorder: "border-red-500",bgColor: "bg-red-500"
    }
  ];

  return (
    <Container className="my-20 px-6">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-black mb-4 tracking-tight">Vaše tepové zóny pro běh</h2>
        <p className="mt-6 text-md max-md:text-base text-gray-600 max-w-2xl mx-auto  leading-relaxed">Výpočet tepových zón pro běhání. Zjistěte svůj cílový tep pro spalování tuků (zóna 2), aerobní zónu i anaerobní práh.</p>
      </div>

      <div className="grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-1 gap-8">
        {zonesData.map((zone) => (
          <div key={zone.id} className="relative bg-foreground rounded-4xl p-10 border-4 border-gray/10 flex flex-col transition-all hover:shadow-xl">
            <div className={`w-18 h-18 rounded-full border-3 ${zone.circleBorder} flex items-center justify-center mx-auto mb-8`}>
              <span className={`font-black text-xl ${zone.color}`}>{zone.id}</span>
            </div>
            <div className="text-center mb-8">
              <h3 className="font-bold text-black text-2xl mb-1">{zone.name}</h3>
              <p className={`font-black text-xl ${zone.color}`}>{zone.min}-{zone.max} BPM</p>
            </div>
            <p className="text-gray text-sm text-center mb-10 leading-relaxed min-h-12">{zone.desc}</p>
            <div className="mb-10 grow">
              <ul className="space-y-4">
                {zone.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className={`w-6 h-6 mt-0.5 shrink-0 ${zone.color}`} />
                    <span className="text-[14px] font-bold text-black/80 leading-tight ">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full bg-gray/10 h-3 rounded-full overflow-hidden mt-auto">
              <div className={`${zone.bgColor} h-full transition-all duration-1000`} style={{ width: `${(parseInt(zone.id.substring(1)) / 5) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}