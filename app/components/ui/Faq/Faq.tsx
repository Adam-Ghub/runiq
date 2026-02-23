import Container from '../../Container';
import FAQItem from './Item';

const faqData = [
  {
    question: "How does the heart rate zone analysis work?",
    answer: "Our system analyzes your resting and maximum heart rate to define five specific intensity zones. This allows you to train more efficiently by ensuring you're working at the right intensity for your specific goals."
  },
  {
    question: "Can I switch training plans mid-cycle?",
    answer: "Yes, you can switch plans at any time. However, we recommend finishing your current phase to see the best physiological results before transitioning to a different goal."
  },
  {
    question: "Is this suitable for absolute beginners?",
    answer: "Absolutely! We have specific 'Couch to 5K' and basic building plans designed to safely introduce your body to the stresses of running without causing injury."
  },
  {
    question: "What equipment do I need?",
    answer: "At minimum, a good pair of running shoes and a smartphone or GPS watch. For the best experience and zone analysis, we recommend a chest-strap heart rate monitor."
  }
];

export default function Faq() {
  return (
    <section className="py-20 bg-background">
      <Container>
        {/* Hlavička sekce */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            Everything you need to know about getting faster and stronger.
          </p>
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