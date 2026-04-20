import { LucideIcon, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  Icon: LucideIcon;
}

export default function Card({ title, description, linkText, linkHref, Icon }: CardProps) {
  return (
    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-50 flex flex-col h-full hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-blue" strokeWidth={2.5} />
      </div>

      <h2 className="text-xl font-bold text-black mb-3">{title}</h2>
      <p className="text-gray leading-relaxed mb-8 grow">
        {description}
      </p>

      <Link 
        href={linkHref} 
        className="inline-flex items-center gap-2 text-blue font-bold hover:gap-3 transition-all"
      >
        {linkText}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}