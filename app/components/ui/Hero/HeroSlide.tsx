'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SlideData } from './data';

interface HeroSlideProps {
  slide: SlideData;
  direction: number;
  isFirst?: boolean;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
  }),
  center: {
    x: 0,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
  }),
};

export default function HeroSlide({ slide, direction, isFirst }: HeroSlideProps) {
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
      {/* Background image using <picture> for responsive mobile/desktop sources */}
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={slide.mobileImage}
          type="image/webp"
        />
        <img
          src={slide.image}
          alt={slide.imageAlt}
          fetchPriority={isFirst ? 'high' : 'auto'}
          loading={isFirst ? 'eager' : 'lazy'}
          decoding={isFirst ? 'sync' : 'async'}
          className="absolute inset-0 w-full h-full object-cover"
          style={slide.blurDataURL ? {
            backgroundImage: `url(${slide.blurDataURL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          } : undefined}
        />
      </picture>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-[1600px] mx-auto px-20 max-lg:px-16 max-sm:px-14 w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl w-full p-8 max-sm:p-6 rounded-3xl bg-black/20 backdrop-blur-md border border-white/15 text-center"
          >
            <h1 className="text-5xl max-lg:text-4xl max-sm:text-3xl font-extrabold text-white tracking-tight leading-[1.15]">
              {slide.title}
              <br />
              <span className="text-blue">{slide.titleHighlight}</span>
            </h1>

            <p className="mt-6 max-sm:mt-4 text-lg max-sm:text-base text-white leading-relaxed mx-auto max-w-xl">
              {slide.description}
            </p>

            <div className="mt-8 max-sm:mt-6">
              <Link
                href={slide.ctaHref}
                className="inline-block px-10 max-sm:px-8 py-4 max-sm:py-3 bg-blue text-white font-bold rounded-full shadow-lg shadow-blue-900/40 transition-all hover:brightness-110 active:scale-95 text-base max-sm:text-sm"
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
