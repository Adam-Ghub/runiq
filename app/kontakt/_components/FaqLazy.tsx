'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

const Faq = dynamic(() => import('../../components/ui/Faq/Faq'), {
  ssr: false,
  loading: () => <div className="py-16" role="status" aria-live="polite" aria-label="Načítám často kladené dotazy" />,
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
        <div className="py-16" role="status" aria-live="polite" aria-label="Načítám často kladené dotazy" />
      )}
    </section>
  );
}
