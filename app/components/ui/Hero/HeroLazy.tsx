'use client';

import dynamic from 'next/dynamic';
import HeroStatic from './HeroStatic';

const HeroCarousel = dynamic(() => import('./HeroCarousel'), {
  ssr: false,
  loading: () => <HeroStatic />,
});

export default function HeroLazy() {
  return <HeroCarousel />;
}
