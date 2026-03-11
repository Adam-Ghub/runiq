import Container from '../Container';
import Link from 'next/link';
import Heading from '../Heading';

export default function Hero() {
  return (
    <section className="bg-white h-150 flex py-16 md:py-12">
      <Container className='flex items-center justify-center'>
        <div className="flex flex-col items-center text-center">
          <Heading
            title="Zlepšete svůj běh" 
            titleHighlight="jednoduše" 
            description="Kalkulačka tepových zón, výběr běžeckých bot i tipy jak začít běhat – vše na jednom místě. Pochopte svůj tep, vyberte správné boty a začněte běhat chytřeji." 
          />

          {/* Tlačítka */}
          <div className="mt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
            {/* Hlavní tlačítko */}
            <Link 
              href="/tepove-zony" 
              className="px-8 py-4 bg-blue text-white font-bold rounded-full transition-all shadow-lg shadow-blue-200 text-center"
            >
              Vypočítat tepové zóny
            </Link>

            {/* Vedlejší tlačítko */}
            <Link 
              href="/kontakt" 
              className="px-8 py-4 text-blue font-bold rounded-full border border-blue transition-all text-center"
            >
              Zjistit více
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}