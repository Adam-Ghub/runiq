'use client';

import dynamic from 'next/dynamic';

const Faq = dynamic(() => import('../../components/ui/Faq/Faq'), { ssr: false });

export default function FaqLazy() {
  return <Faq />;
}
