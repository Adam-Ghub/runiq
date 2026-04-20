'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

const FaqLoadingPlaceholder = () => (
  <div className="py-16 flex items-center justify-center" role="status" aria-live="polite">
    <span className="sr-only">Načítám často kladené dotazy…</span>
  </div>
);

const Faq = dynamic(() => import('../../components/ui/Faq/Faq'), {
  ssr: false,
  loading: () => <FaqLoadingPlaceholder />,
});

export default function FaqLazy() {
  const [shouldLoadFaq, setShouldLoadFaq] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (shouldLoadFaq || !triggerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadFaq(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' }
    );

    observer.observe(triggerRef.current);

    return () => observer.disconnect();
  }, [shouldLoadFaq]);

  return (
    <section ref={triggerRef}>
      {shouldLoadFaq ? (
        <Faq />
      ) : (
        <FaqLoadingPlaceholder />
      )}
    </section>
  );
}
