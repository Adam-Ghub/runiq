import { HeartPulse, ShieldCheck, Flame, Smartphone } from 'lucide-react';
import Container from '../../Container';
import StatCard from '../Stats/Card';

const statsData = [
  {
    value: "+3 roky",
    label: "Dlouhověkost v každém kroku",
    description: "Pravidelný pohyb prodlužuje očekávanou délku života.",
    icon: HeartPulse
  },
  {
    value: "-30 %",
    label: "Srdce jako zvon",
    description: "Výrazné snížení rizika kardiovaskulárních chorob.",
    icon: ShieldCheck
  },
  {
    value: "+15 %",
    label: "Kvalitnější spánek",
    description: "Rychlejší usínání a více času v hluboké, regenerační fázi spánku.",
    icon: Smartphone
  },
  {
    value: "400-900 kcal",
    label: "Spalování bez kompromisů",
    description: "Jeden z nejefektivnějších způsobů spalování kalorií za hodinu.",
    icon: Flame
  }
];

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Nadpisy sekce */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4 tracking-tight">
            Proč se vyplatí vyběhnout?
          </h2>
          <p className="text-lg text-gray">
            Vědecky podložená fakta, která mění pohled na běhání.
          </p>
        </div>

        {/* Flex kontejner pro karty */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-6">
          {statsData.map((item, index) => (
            <div key={index} className="flex-1 w-full">
              <StatCard 
                value={item.value}
                label={item.label}
                description={item.description}
                Icon={item.icon}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}