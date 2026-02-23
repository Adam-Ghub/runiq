import Container from '../Container';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-white h-[600px] flex py-16 md:py-12">
      <Container className='flex items-center justify-center'>
        <div className="flex flex-col items-center text-center">
          {/* Nadpis */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-black tracking-tight leading-[1.1]">
            Elevate Your Run with <br />
            <span className="text-blue">Precision</span>
          </h1>

          {/* Podnadpis */}
          <p className="mt-6 text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
            Professional running advice tailored to your biology and goals. 
            Discover your optimal training zones, find the perfect shoes, 
            and master every distance.
          </p>

          {/* Tlačítka */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
            {/* Hlavní tlačítko */}
            <Link 
              href="/plans" 
              className="px-8 py-4 bg-blue text-white font-bold rounded-full transition-all shadow-lg shadow-blue-200 text-center"
            >
              Začít trénovat
            </Link>

            {/* Vedlejší tlačítko */}
            <Link 
              href="/about" 
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