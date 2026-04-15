'use client';

import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HeroSlide from './HeroSlide';
import { slides } from './data';

export default function HeroCarousel() {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = useCallback(
    (newDirection: number) => {
      setCurrent(([prev]) => {
        const next = (prev + newDirection + slides.length) % slides.length;
        return [next, newDirection];
      });
    },
    []
  );

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [paginate]);

  // Preload next slide image
  useEffect(() => {
    const nextIndex = (current + 1) % slides.length;
    const img = new Image();
    img.src = slides[nextIndex].image;
  }, [current]);

  const goTo = (index: number) => {
    const dir = index > current ? 1 : -1;
    setCurrent([index, dir]);
  };

  return (
    <section
      className="relative w-full h-screen min-h-[480px] max-h-[900px] overflow-hidden bg-black"
      aria-label="Hero carousel"
    >
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction}>
        <HeroSlide
          key={slides[current].id}
          slide={slides[current]}
          direction={direction}
        />
      </AnimatePresence>

      {/* Left arrow */}
      <button
        onClick={() => paginate(-1)}
        aria-label="Předchozí slide"
        className="absolute left-4 max-sm:left-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 max-sm:w-10 max-sm:h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white transition-all hover:bg-white/30 active:scale-90 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 max-sm:w-5 max-sm:h-5" strokeWidth={2.5} />
      </button>

      {/* Right arrow */}
      <button
        onClick={() => paginate(1)}
        aria-label="Následující slide"
        className="absolute right-4 max-sm:right-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 max-sm:w-10 max-sm:h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white transition-all hover:bg-white/30 active:scale-90 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6 max-sm:w-5 max-sm:h-5" strokeWidth={2.5} />
      </button>

        {/* Pagination dots */}
      <div className="absolute bottom-8 max-sm:bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            className={`transition-all duration-300 rounded-full ${
              index === current
                ? 'bg-white w-8 h-2.5 max-sm:w-6 max-sm:h-2'
                : 'bg-white/50 w-2.5 h-2.5 max-sm:w-2 max-sm:h-2'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
