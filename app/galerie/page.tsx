'use client'; // Nutné pro animace

import Image from 'next/image';
import Container from '../components/Container';
import { motion } from 'framer-motion';

const shoes = [
  { id: 1, src: '/shoes/adidas_adizero_sl.webp', alt: 'Adidas Adizero SL' },
  { id: 2, src: '/shoes/asics_cumulus_25.webp', alt: 'Asics Cumulus 25' },
  { id: 3, src: '/shoes/asics_kayano_30.webp', alt: 'Asics Kayano 30' },
  { id: 4, src: '/shoes/hoka_clifton_9.webp', alt: 'Hoka Clifton 9' },
  { id: 5, src: '/shoes/hoka_speedgoat_5.webp', alt: 'Hoka Speedgoat 5' },
  { id: 6, src: '/shoes/nike_pegasus_40.webp', alt: 'Nike Pegasus 40' },
  { id: 7, src: '/shoes/nike_vaporfly_3.webp', alt: 'Nike Vaporfly 3' },
  { id: 8, src: '/shoes/on_cloudsurfer.webp', alt: 'On Cloudsurfer' },
];

export default function GaleriePage() {
  return (
    <Container>
      <header className="mb-16 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 uppercase">
          Naše Vybavení
        </h1>
        <div className="mt-4 w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 justify-items-center">
        {shoes.map((shoe) => (
          <motion.div 
            key={shoe.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center group w-fit"
          >
            <div className="relative w-[400px] h-[400px] overflow-hidden rounded-2xl bg-gray-50 shadow-sm transition-all duration-300 group-hover:shadow-2xl border border-transparent group-hover:border-blue-100">
              <Image
                src={shoe.src}
                alt={shoe.alt}
                fill
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                sizes="400px"
              />
            </div>
            
            <p className="mt-6 text-sm font-bold text-gray-800 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {shoe.alt}
            </p>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}