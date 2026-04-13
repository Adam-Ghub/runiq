'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SlideData } from './data';

interface HeroSlideProps {
  slide: SlideData;
  direction: number;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
};

export default function HeroSlide({ slide, direction }: HeroSlideProps) {
  return (
    <motion.div
      key={slide.id}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="absolute inset-0"
    >
      {/* Background image */}
      <Image
        src={slide.image}
        alt={slide.imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-[1600px] mx-auto px-8 max-lg:px-6 max-sm:px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl max-sm:max-w-full"
          >
            <h1 className="text-5xl max-lg:text-4xl max-sm:text-3xl font-extrabold text-white tracking-tight leading-[1.15]">
              {slide.title}
              <br />
              <span className="text-blue">{slide.titleHighlight}</span>
            </h1>

            <p className="mt-6 max-sm:mt-4 text-base max-sm:text-sm text-white/80 leading-relaxed max-w-lg">
              {slide.description}
            </p>

            <div className="mt-8 max-sm:mt-6">
              <Link
                href={slide.ctaHref}
                className="inline-block px-8 max-sm:px-6 py-4 max-sm:py-3 bg-blue text-white font-bold rounded-full shadow-lg shadow-blue-900/40 transition-all hover:brightness-110 active:scale-95 text-sm"
              >
                {slide.ctaText}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
