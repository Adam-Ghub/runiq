import Features from "./components/ui/Features/Features";
import Stats from "./components/ui/Stats/Stats";
import Faq from "./components/ui/Faq/Faq";
import HeroLazy from "./components/ui/Hero/HeroLazy";

export default function Home() {
  return (
    <>
      {/* Preload hero images only on the home page */}
      <link
        rel="preload"
        as="image"
        href="/hero/Carousel_3_mobile.webp"
        type="image/webp"
        fetchPriority="high"
        media="(max-width: 768px)"
      />
      <link
        rel="preload"
        as="image"
        href="/hero/Carousel_3.webp"
        type="image/webp"
        fetchPriority="high"
        media="(min-width: 769px)"
      />
      <HeroLazy />
    <Features />
    <Stats />
    <Faq />
    </>
  );
}
