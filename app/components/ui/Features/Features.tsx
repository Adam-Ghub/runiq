import { Timer, Heart, Footprints } from 'lucide-react';
import Container from '../../Container';
import FeatureCard from './Card';

const features = [
  {
    title: "Distances",
    description: "Custom training plans for 5K, 10K, Half, and Full Marathons.",
    linkText: "View Plans",
    linkHref: "/plans",
    icon: Timer
  },
  {
    title: "Heart Zones",
    description: "Optimize your heart rate zones for maximum metabolic efficiency.",
    linkText: "Analyze Zones",
    linkHref: "/coaching",
    icon: Heart
  },
  {
    title: "Shoe Finder",
    description: "Find the perfect footwear based on your stride, cadence, and arch.",
    linkText: "Find Shoes",
    linkHref: "/shoes",
    icon: Footprints
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