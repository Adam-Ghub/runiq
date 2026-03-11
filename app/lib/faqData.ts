export interface FaqItem {
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    question: "Co dělat, když mě při běhu začne píchat v boku?",
    answer: "Píchání v boku je nejčastěji signál, že dýcháte příliš mělce nebo běžíte příliš rychle. Okamžitou pomocí je zpomalit do chůze, hluboce dýchat do břicha. Jakmile se váš dech uklidní, bolest obvykle rychle zmizí.",
  },
  {
    question: "Proč všichni mluví o Zóně 2 a musím v ní běhat i já?",
    answer: "Zóna 2 je tempo, při kterém vaše tělo učíte efektivně pracovat s kyslíkem a spalovat tuky. Přestože se výsledky dostaví až po několika týdnech, je to nejlepší cesta k budování vytrvalosti bez zbytečného vyčerpání.",
  },
  {
    question: "Jaká je ideální strava před během?",
    answer: "Před během volte lehce stravitelné sacharidy, jako je banán, ovesná kaše nebo pečivo s marmaládou. Ideální je jíst zhruba 1,5 až 2 hodiny před vyběhnutím, aby vaše tělo mělo dostatek energie, ale žaludek nebyl plný. Správné načasování jídla je individuální.",
  },
  {
    question: "Jak začít běhat a nevzdat to po prvním běhu?",
    answer: "Nejdůležitější je vědět, že ze začátku je naprosto v pořádku přecházet do chůze. Právě střídání běhu a chůze je nejlepší způsob, jak si tělo postupně zvykne na zátěž, až se postupem času přirozeně propracujete k plynulému běhu. Klíčem je trpělivost a radost z každého pohybu.",
  },
  {
    question: "Jaké vybavení potřebuji do začátku?",
    answer: "Základem jsou kvalitní běžecké boty, které ochrání vaše klouby, a sportovní oblečení, které odvádí pot. Pro efektivní trénink jsou pak skvělým pomocníkem hodinky s měřením tepu, díky kterým si snadno pohlídáte správnou intenzitu a své pokroky.",
  },
];

export function buildFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };
}
