import Link from 'next/link';
import { slides } from './data';

export default function HeroStatic() {
  const slide = slides[0];
  return (
    <section
      className="relative w-full h-screen min-h-[480px] max-h-[900px] overflow-hidden bg-black"
      aria-label="Hero carousel"
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
          fetchPriority="high"
          loading="eager"
          decoding="sync"
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
          <div className="max-w-2xl w-full p-8 max-sm:p-6 rounded-3xl bg-black/20 backdrop-blur-md border border-white/15 text-center">
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
          </div>
        </div>
      </div>
    </section>
  );
}
