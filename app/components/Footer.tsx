import Link from 'next/link';
import { Icon} from 'lucide-react';
import { sneaker } from '@lucide/lab';
import Container from '../components/Container';

const footerLinks = [
  {
    title: 'Průvodce',
    links: [
      { label: 'Tepové zóny', href: '/tepove-zony' },
      /*{ label: 'Vybavení', href: '/vybaveni' },
      { label: 'Tipy', href: '/tipy' },*/
    ],
  },
  {
    title: 'Kontakt',
    links: [
      { label: 'info@runiq.cz', href: '#' },
      { label: '+420 123 456 789', href: '#' },
      { label: 'Název ulice 123, Město', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <Container>
        <div className="flex items-center flex-col md:flex-row justify-between gap-12 mb-12">
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
              V běhání se s námi neztratíte. Ukážeme vám, že začít je jednodušší, než si myslíte!
            </p>
          </div>

          {/* Pravá strana: Sloupce s odkazy */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 md:gap-20">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="font-bold text-black mb-4">{section.title}</h4>
                <ul className="space-y-3">
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
      </Container>
    </footer>
  );
}