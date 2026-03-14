import { HeartPulse, Flame, BedDouble, HandHeart } from 'lucide-react';
import Container from '../../Container';
import StatCard from '../Stats/Card';

const statsData = [
  {
    value: "+3 roky",
    label: "Dlouhověkost v každém kroku",
    description: "Pravidelný pohyb prodlužuje očekávanou délku života.",
    icon: HandHeart,
  },
  {
    value: "-30 %",
    label: "Srdce jako zvon",
    description: "Výrazné snížení rizika kardiovaskulárních onemocnění.",
    icon: HeartPulse,
  },
  {
    value: "+15 %",
    label: "Kvalitnější spánek",
    description: "Rychlejší usínání a více času v hluboké, regenerační fázi spánku.",
    icon: BedDouble,
  },
  {
    value: "400-900 kcal",
    label: "Efektivní spalování kalorií",
    description: "Jeden z nejlepších způsobů spalování kalorií",
    icon: Flame,
  }
];

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Nadpisy sekce */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-black mb-4 tracking-tight">
            Proč se vyplatí vyběhnout?
          </h2>
          <span className="text-md text-gray">
            Vědecky podložená fakta, která mění pohled na běhání.
          </span>
        </div>

        {/* Flex kontejner pro karty */}
        <div className="flex flex-row max-md:flex-col items-start justify-between gap-6 max-md:gap-12">
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