'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
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
  { src: '/gallery/Gallery_19.webp', title: 'Trailový běh' },
  { src: '/gallery/Gallery_20.webp', title: 'Rychlý běh' },
];

export default function GalleryGrid() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPhoto(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="flex flex-col group cursor-pointer bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue/20 transition-all duration-500 hover:-translate-y-1"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="relative aspect-square overflow-hidden bg-gray-50">
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                priority={index < 4} // Slightly more aggressive priority for initial paint
                // fetchPriority is part of Next.js 14.2+, using camelCase in JSX
                // @ts-ignore
                fetchPriority={index < 2 ? "high" : "auto"}
                loading={index < 4 ? undefined : 'lazy'}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>
            <div className="p-4 md:p-5 text-center">
              <span className="text-sm font-bold text-black block tracking-wide">{photo.title}</span>
            </div>
          </div>
        ))}
      </div>

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
              <div className="relative w-full h-[70vh] md:h-[80vh] flex justify-center">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  fill
                  className="object-contain rounded-2xl shadow-2xl"
                  sizes="(max-width: 800px) 100vw, 800px"
                />
              </div>
              <div className="mt-4 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <span className="text-white font-bold">{selectedPhoto.title}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
