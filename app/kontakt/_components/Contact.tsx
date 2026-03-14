'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';
import Container from '@/app/components/Container';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

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
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="py-20">
      <Container className='flex items-center flex-col'>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Napište nám zprávu
          </h1>
          <p className="text-gray text-md max-md:text-lg">
            Máte dotaz ohledně běhání, tepových zón nebo výběru běžeckých bot? Neváhejte nás kontaktovat.
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="bg-foreground lg:max-w-5xl rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-row max-md:flex-col">

          {/* Left Side - Form */}
          <div className="flex flex-col w-full max-md:w-full p-12 border-r max-md:border-r-0 max-md:border-b border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue/10 p-2 rounded-lg">
                <Mail className="w-5 h-5 text-blue" />
              </div>
              <h2 className="text-xl font-bold text-black">Kontaktní formulář</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold pl-2 text-black">Vaše jméno a příjmení</label>
                  <input
                    type="text"
                    placeholder="Jan Novák"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full px-4 py-3 mt-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition-all placeholder:text-slate-300 lg:w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold pl-2 text-black">Váš e-mail</label>
                  <input
                    type="email"
                    placeholder="name@email.cz"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-4 py-3 mt-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition-all placeholder:text-slate-300 lg:w-full"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold pl-2 text-black">Vaše zpráva</label>
                <textarea
                  rows={3}
                  placeholder="Jak vám můžeme pomoci?"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-3 mt-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition-all placeholder:text-slate-300 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-blue text-white font-bold py-4 rounded-xl hover:opacity-90 cursor-pointer transition-opacity shadow-lg shadow-blue/20 uppercase tracking-wide disabled:opacity-60"
              >
                {status === 'loading' ? 'Odesílám...' : status === 'success' ? 'Odesláno!' : 'Odeslat'}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
