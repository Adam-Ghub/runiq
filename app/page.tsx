import Features from "./components/ui/Features/Features";
import Stats from "./components/ui/Stats/Stats";
import BentoGrid from "./components/ui/BentoGrid/BentoGrid";
import Faq from "./components/ui/Faq/Faq";
import HeroLazy from "./components/ui/Hero/HeroLazy";

export default function Home() {
  return (
    <>
    <HeroLazy />
    <Features />
    <Stats />
    <BentoGrid />
    <Faq />
    </>
  );
}
