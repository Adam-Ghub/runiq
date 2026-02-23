import Link from 'next/link';
import { Icon} from 'lucide-react';
import { sneaker } from '@lucide/lab';
import Container from '../components/Container';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Testimonials', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Support', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Legal', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          {/* Levá strana: Logo a Popis */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <Icon 
                iconNode={sneaker} 
                className="w-6 h-6 text-blue" 
                strokeWidth={2.5}
              />
              <span className="text-xl font-bold text-black tracking-tight">Runiq</span>
            </div>
            <p className="text-gray-500 leading-relaxed text-sm">
              Empowering runners of all levels to reach their peak performance through science-backed training.
            </p>
          </div>

          {/* Pravá strana: Sloupce s odkazy */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-20">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="font-bold text-black mb-6">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link 
                        href={link.href} 
                        className="text-gray hover:text-blue transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Spodní lišta: Vycentrovaná autorská práva */}
        <div className="pt-8 border-t border-gray-50 text-center">
          <p className="text-gray text-sm">
            	&#169; {new Date().getFullYear()} Runiq. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}