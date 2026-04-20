import type { Metadata } from 'next';
import Container from '../components/Container';
import GalleryGrid from './_components/GalleryGrid';

export const metadata: Metadata = {
  title: 'Galerie | Runiq',
  description: 'Prohlédněte si momenty z našich běhů, vybavení a inspiraci, která nás žene vpřed.',
  alternates: {
    canonical: 'https://runiq.me/galerie',
  },
};

export default function GaleriePage() {
  return (
    <div className="bg-background min-h-screen py-8 md:py-16">
      <Container className="max-w-7xl px-4 md:px-12">
        <header className="mb-8 md:mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black uppercase">
            Galerie
          </h1>
          <div className="mt-2 md:mt-4 w-16 md:w-24 h-1 bg-blue mx-auto rounded-full"></div>
          <p className="mt-4 md:mt-6 text-sm md:text-base text-gray max-w-2xl mx-auto">
            Prohlédněte si momenty z našich běhů, vybavení a inspiraci, která nás žene vpřed.
          </p>
        </header>

        <GalleryGrid />
      </Container>
    </div>
  );
}
