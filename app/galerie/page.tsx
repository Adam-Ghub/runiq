'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import Container from '../components/Container';
import { motion, AnimatePresence } from 'framer-motion';

const photos = [
  { src: '/gallery/Gallery_1.webp', title: 'Ranní rozcvička' },
  { src: '/gallery/Gallery_3.webp', title: 'Běh v horách' },
  { src: '/gallery/Gallery_4.webp', title: 'Správná technika' },
  { src: '/gallery/Gallery_5.webp', title: 'Večerní tempo' },
  { src: '/gallery/Gallery_6.webp', title: 'Městský běh' },
  { src: '/gallery/Gallery_7.webp', title: 'Závodní nasazení' },
  { src: '/gallery/Gallery_8.webp', title: 'Zasloužený odpočinek' },
  { src: '/gallery/Gallery_9.webp', title: 'Soustředění' },
  { src: '/gallery/Gallery_10.webp', title: 'Příprava na start' },
  { src: '/gallery/Gallery_11.webp', title: 'Radost z pohybu' },
  { src: '/gallery/Gallery_12.webp', title: 'Běžecká komunita' },
  { src: '/gallery/Gallery_13.webp', title: 'Překonávání limitů' },
  { src: '/gallery/Gallery_14.webp', title: 'Nové obzory' },
  { src: '/gallery/Gallery_15.webp', title: 'Síla a vytrvalost' },
  { src: '/gallery/Gallery_16.webp', title: 'Cesta k cíli' },
  { src: '/gallery/Gallery_17.webp', title: 'Rychlostní trénink' },
  { src: '/gallery/Gallery_18.webp', title: 'Relaxace po běhu' },
  { src: '/gallery/Gallery_15.webp', title: 'Síla a vytrvalost' },
  { src: '/gallery/Gallery_16.webp', title: 'Cesta k cíli' },
  { src: '/gallery/Gallery_17.webp', title: 'Rychlostní trénink' },
  { src: '/gallery/Gallery_18.webp', title: 'Relaxace po běhu' },
];

export default function GaleriePage() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPhoto(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="bg-background min-h-screen py-16">
      <Container className="max-w-7xl px-8 md:px-12">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-black uppercase">
            Galerie
          </h1>
          <div className="mt-4 w-24 h-1 bg-blue mx-auto rounded-full"></div>
          <p className="mt-6 text-gray max-w-2xl mx-auto">
            Prohlédněte si momenty z našich běhů, vybavení a inspiraci, která nás žene vpřed.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
              className="flex flex-col group cursor-pointer bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue/20 transition-all duration-500 hover:-translate-y-1"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  priority={index < 6}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <div className="p-5 text-center">
                <span className="text-sm font-bold text-black block tracking-wide">{photo.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Preview Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 md:p-10 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 p-3 bg-white/20 hover:bg-white/30 border border-white/40 rounded-full transition-all z-50 text-white cursor-pointer shadow-xl backdrop-blur-md"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhoto(null);
              }}
            >
              <X className="w-8 h-8" strokeWidth={3} />
            </motion.button>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-[800px] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-auto max-h-[90vh] flex justify-center">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
