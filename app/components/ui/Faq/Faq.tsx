import Container from '../../Container';
import FAQItem from './Item';
import { faqData } from '@/app/lib/faqData';

export default function Faq() {
  return (
    <section className="w-full py-20 bg-background">
      <Container className='bg-background'>
        {/* Hlavička sekce */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4 tracking-tight">
            Často kladené otázky
          </h2>
          <span className="text-lg text-gray max-w-2xl mx-auto">
            Vše, co potřebujete vědět o tréninku, tepových zónách a správném vybavení na běh.
          </span>
        </div>

        {/* Seznam otázek - omezená šířka pro lepší čitelnost */}
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FAQItem 
              key={index} 
              question={item.question} 
              answer={item.answer} 
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
