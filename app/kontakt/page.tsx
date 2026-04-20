import { Metadata } from "next";
import dynamic from 'next/dynamic';
import FaqLazy from './_components/FaqLazy'
import Container from "@/app/components/Container";

const Contact = dynamic(() => import('./_components/Contact'), {
  ssr: true,
  loading: () => <div className="w-full max-w-5xl h-[400px] bg-foreground rounded-3xl animate-pulse mx-auto" />
});

export const metadata: Metadata = {
  title: 'Kontaktujte Nás',
  description: 'Máte dotaz ohledně běhání, tepových zón nebo výběru běžeckých bot? Napište nám – rádi poradíme s tréninkem i vybavením pro začátečníky i zkušené běžce.',
  alternates: {
    canonical: 'https://runiq.me/kontakt',
  },
};

export default function Page() {
  return (
    <main className="bg-background">
      <section className="py-20">
        <Container className='flex items-center flex-col'>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">
              Napište nám zprávu
            </h1>
            <p className="text-gray text-base max-md:text-lg">
              Máte dotaz ohledně běhání, tepových zón nebo výběru běžeckých bot? Neváhejte nás kontaktovat.
            </p>
          </div>
          <Contact />
        </Container>
      </section>
      <FaqLazy />
    </main>
  )
}
