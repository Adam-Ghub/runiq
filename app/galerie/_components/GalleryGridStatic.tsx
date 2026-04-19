import Image from 'next/image';
import { photos } from './photos';

export default function GalleryGridStatic() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="flex flex-col group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue/20 transition-all duration-500 hover:-translate-y-1"
        >
          <div className="relative aspect-square overflow-hidden bg-gray-50">
            <Image
              src={photo.src}
              alt={photo.title}
              fill
              priority={index < 3}
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) calc(100vw - 4rem), (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
          </div>
          <div className="p-5 text-center">
            <span className="text-sm font-bold text-black block tracking-wide">{photo.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
