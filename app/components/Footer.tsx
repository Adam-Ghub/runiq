'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from 'lucide-react';
import { sneaker } from '@lucide/lab';
import Container from '../components/Container';

const pruvodceLinks = [
  { label: 'Tepové zóny', href: '/tepove-zony' },
  { label: 'Vybavení', href: '/vybaveni' },
  { label: 'Kontakt', href: '/kontakt' },
];

export default function Footer() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async () => {
    if (!message.trim()) return;
    setStatus('loading');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });

    if (res.ok) {
      setStatus('success');
      setMessage('');
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <Container>
        <div className="flex items-center flex-row max-[500px]:flex-col justify-between gap-12">
          {/* Levá strana: Logo a Popis */}
          <div className="">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Icon
                iconNode={sneaker}
                className="w-6 h-6 text-blue"
                strokeWidth={2.5}
              />
              <span className="text-xl font-bold text-black tracking-tight">Runiq</span>
            </Link>
            <p className="text-gray-500 leading-relaxed text-sm">
              V běhání se s námi neztratíte. Ukážeme vám, <br /> že <span className='font-black text-blue'>začít je jednodušší, než si myslíte!</span>
            </p>
          </div>

          <div className="flex items-start gap-10 w-full max-w-2xl justify-end flex-col sm:flex-row">
            <div className="w-auto sm:pr-5">
              <h2 className="font-bold text-black mb-4 text-base">Průvodce</h2>
              <ul className="space-y-3">
                {pruvodceLinks.map((link) => (
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

            <div className="w-auto sm:pr-5">
              <h2 className="font-bold text-black mb-4 text-base">Kontakt</h2>
              <div className="space-y-3">
                <a
                  href="mailto:info@runiq.me"
                  className="block text-gray hover:text-blue transition-colors text-sm"
                >
                  info@runiq.me
                </a>
                <p className="text-gray text-sm leading-relaxed">
                  Bráfova 7, Praha 5
                </p>
                <p className="text-gray text-sm">
                  +420 123 456 789
                </p>
              </div>
            </div>

            {/* Máte dotaz? */}
            <div className="flex flex-col justify-center flex-1 w-full sm:w-auto">
              <label htmlFor="textarea-ve-footeru-pro-dotaz" className="font-bold text-black mb-2 pl-2 cursor-pointer block">Máte dotaz?</label>
              <div className="flex items-center gap-2 w-full">
                <textarea
                  id="textarea-ve-footeru-pro-dotaz"
                  rows={1}
                  placeholder="Napište nám..."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="flex-1 min-w-0 px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition-all placeholder:text-gray-400 resize-none text-sm text-gray-800"
                />
                <button
                  onClick={handleSubmit}
                  disabled={status === 'loading'}
                  className="shrink-0 px-4 py-2.5 bg-blue text-white font-bold rounded-xl text-sm hover:opacity-90 cursor-pointer transition-opacity disabled:opacity-60"
                >
                  {status === 'loading' ? '...' : status === 'success' ? 'Odesláno!' : 'Odeslat'}
                </button>
              </div>
              {status === 'error' && (
                <p className="text-red-500 text-xs mt-1 pl-2">Něco se pokazilo, zkuste to znovu.</p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
