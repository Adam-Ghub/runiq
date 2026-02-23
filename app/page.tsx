import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/ui/Hero";
import Features from "./components/ui/Features/Features";
import Stats from "./components/ui/Stats/Stats";
import Faq from "./components/ui/Faq/Faq";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Features />
    <Stats />
    <Faq />
    <Footer />
    </>
  );
}
