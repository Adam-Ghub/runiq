'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Icon } from 'lucide-react';
import { sneaker } from '@lucide/lab';
import Container from '../components/Container';

const footerLinks = [
  {
    title: 'Průvodce',
    links: [
      { label: 'Tepové zóny', href: '/tepove-zony' },
      { label: 'Vybavení', href: '/vybaveni' },
      /*{ label: 'Tipy', href: '/tipy' },*/
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        resetTimerRef.current = setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <Container>
        <div className="flex items-center flex-row max-md:flex-col justify-between gap-12 mb-12">
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

          {/* Střed: Kontaktní zpráva */}
          <div className="max-w-xs w-full">
            <h4 className="font-bold text-black mb-3">Napište nám</h4>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="text"
                placeholder="Vaše jméno"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition-all placeholder:text-slate-300 text-sm"
              />
              <input
                type="email"
                placeholder="Váš e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition-all placeholder:text-slate-300 text-sm"
              />
              <textarea
                rows={3}
                placeholder="Vaše zpráva..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition-all placeholder:text-slate-300 resize-none text-sm"
              />
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full bg-blue text-white font-bold py-2 rounded-xl hover:opacity-90 transition-opacity text-sm disabled:opacity-70"
              >
                {status === 'success' ? 'Odesláno!' : status === 'loading' ? 'Odesílám...' : 'Odeslat'}
              </button>
              {status === 'error' && (
                <p className="text-red-500 text-xs">Nepodařilo se odeslat zprávu. Zkuste to znovu.</p>
              )}
            </form>
          </div>

          {/* Pravá strana: Sloupce s odkazy */}
          <div className="grid grid-cols-2 gap-20 max-md:gap-8">
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