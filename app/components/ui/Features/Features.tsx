import {Heart, Footprints, Lightbulb } from 'lucide-react';
import Container from '../../Container';
import FeatureCard from './Card';

const features = [
  {
    title: "Tepové Zóny",
    description: "Naučíme vás, jak si nastavit vlastní tepové zóny pro lepší efektivitu tréninků a správné řízení vaší intenzity.",
    linkText: "jak na výpočet",
    linkHref: "/tepove-zony",
    icon: Heart
  },
  {
    title: "Vybavení na běh",
    description: "Doporučíme běžecké boty pro každý povrch. Správné tlumení chrání klouby a předchází zraněním.",
    linkText: "Vybrat boty",
    linkHref: "/vybavení",
    icon: Footprints
  },
  {
    title: "Tipy",
    description: "Běhejte chytřeji. Praktické tipy pro lepší techniku, rychlejší regeneraci a radost z každého dalšího kilometru",
    linkText: "Zjistit více",
    linkHref: "/tipy",
    icon: Lightbulb
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
          {features.map((feature, index) => (
            <div key={index}> 
              <FeatureCard 
                title={feature.title}
                description={feature.description}
                linkText={feature.linkText}
                linkHref={feature.linkHref}
                Icon={feature.icon}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}