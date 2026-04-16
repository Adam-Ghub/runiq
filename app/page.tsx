import HeroCarousel from "./components/ui/Hero";
import Features from "./components/ui/Features/Features";
import Stats from "./components/ui/Stats/Stats";
import BentoGrid from "./components/ui/BentoGrid/BentoGrid";
import Faq from "./components/ui/Faq/Faq";


export default function Home() {
  return (
    <>
    <HeroCarousel />
    <Features />
    <Stats />
    <BentoGrid />
    <Faq />
    </>
  );
}
