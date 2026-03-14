import {Heart, Footprints, Lightbulb } from 'lucide-react';
import Container from '../../Container';
import FeatureCard from './Card';

const features = [
  {
    title: "Tepové Zóny",
    description: "Vypočítáme vám, tepové zóny pro lepší efektivitu tréninků a správné řízení vaší intenzity.",
    linkText: "jak na výpočet",
    linkHref: "/tepove-zony",
    icon: Heart
  },
  {
    title: "Vybavení na běh",
    description: "Doporučíme běžecké boty pro každý povrch. Správné tlumení chrání klouby a předchází zraněním.",
    linkText: "Vybrat boty",
    linkHref: "/vybaveni",
    icon: Footprints
  },
  /*{
    title: "Tipy",
    description: "Běhejte chytřeji. Praktické tipy pro lepší techniku, rychlejší regeneraci a radost z každého dalšího kilometru",
    linkText: "Zjistit více",
    linkHref: "/tipy",
    icon: Lightbulb
  }*/
];

export default function Features() {
  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4 max-md:gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              linkText={feature.linkText}
              linkHref={feature.linkHref}
              Icon={feature.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}