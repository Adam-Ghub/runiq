import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '../../Container';

const photos = [
  {
    src: '/grid/Photo_1.webp',
    alt: 'Běžecký trénink 1',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    src: '/grid/Photo_2.webp',
    alt: 'Běžecký trénink 2',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    src: '/grid/Photo_3.webp',
    alt: 'Běžecký trénink 3',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    src: '/grid/Photo_4.webp',
    alt: 'Běžecký trénink 4',
    className: 'md:col-span-2 md:row-span-1',
  },
  {
    src: '/grid/Photo_5.webp',
    alt: 'Běžecký trénink 5',
    className: 'md:col-span-1 md:row-span-1',
  },
];

export default function BentoGrid() {
  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-black mb-6 tracking-tight uppercase">
            Život v pohybu
          </h2>
          <p className="text-lg text-gray max-w-2xl mx-auto font-medium">
            Inspirace pro každý váš kilometr. Podívejte se, jak vypadá radost z běhu v podání naší komunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-[2.5rem] group min-h-[300px] md:min-h-0 shadow-sm hover:shadow-2xl transition-all duration-500 ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link 
            href="/galerie"
            className="group inline-flex items-center gap-4 px-12 py-6 bg-black text-white text-xl font-black rounded-[2rem] hover:bg-blue transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl shadow-black/10 uppercase tracking-wider"
          >
            <span>Prozkoumat galerii</span>
            <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" strokeWidth={3} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
