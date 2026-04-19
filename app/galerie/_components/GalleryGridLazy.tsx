'use client';

import dynamic from 'next/dynamic';
import GalleryGridStatic from './GalleryGridStatic';

const GalleryGrid = dynamic(() => import('./GalleryGrid'), {
  ssr: false,
  loading: () => <GalleryGridStatic />,
});

export default function GalleryGridLazy() {
  return <GalleryGrid />;
}
