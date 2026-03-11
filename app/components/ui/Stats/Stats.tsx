import { HeartPulse, Flame, BedDouble, HandHeart } from 'lucide-react';
import Container from '../../Container';
import StatCard from '../Stats/Card';

const statsData = [
  {
    value: "+3 roky",
    label: "Dlouhověkost v každém kroku",
    description: "Pravidelný pohyb prodlužuje očekávanou délku života.",
    icon: HandHeart,
    alt: ""
  },
  {
    value: "-30 %",
    label: "Srdce jako zvon",
    description: "Výrazné snížení rizika kardiovaskulárních onemocnění.",
    icon: HeartPulse,
    alt: ""
  },
  {
    value: "+15 %",
    label: "Kvalitnější spánek",
    description: "Rychlejší usínání a více času v hluboké, regenerační fázi spánku.",
    icon: BedDouble,
    alt: "postel"
  },
  {
    value: "400-900 kcal",
    label: "Efektivní spalování kalorií",
    description: "Jeden z nejlepších způsobů spalování kalorií",
    icon: Flame,
    alt: ""
  }
];

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Nadpisy sekce */}
        <div className="text-center mb-16">
          <h2 className="md:text-4xl font-extrabold text-black mb-4 tracking-tight">
            Proč se vyplatí vyběhnout?
          </h2>
          <span className="text-md text-gray">
            Vědecky podložená fakta, která mění pohled na běhání.
          </span>
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
                Alt={item.alt}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}