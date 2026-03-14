import { Mail, Phone, MapPin } from 'lucide-react';
import Container from '@/app/components/Container';

const Contact = () => {
  return (
    <section className="py-20">
      <Container className='flex items-center flex-col'>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Napište nám zprávu
          </h1>
          <p className="text-gray text-md max-md:text-lg">
            Máte dotaz nebo připomínku? Rádi vám odpovíme.
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="bg-foreground lg:max-w-5xl rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-row max-md:flex-col">
          
          {/* Left Side - Form */}
          <div className="flex flex-col w-1/2 max-md:w-full p-12 border-r max-md:border-r-0 max-md:border-b border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue/10 p-2 rounded-lg">
                <Mail className="w-5 h-5 text-blue" />
              </div>
              <h2 className="text-xl font-bold text-black">Kontaktní formulář</h2>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-black">Vaše jméno a příjmení</label>
                  <input 
                    type="text" 
                    placeholder="Jan Novák"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition-all placeholder:text-slate-300 lg:w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-black">Váš e-mail</label>
                  <input 
                    type="email" 
                    placeholder="name@email.cz"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition-all placeholder:text-slate-300 lg:w-full"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-black">Vaše zpráva</label>
                <textarea 
                  rows={3}
                  placeholder="Jak vám můžeme pomoci?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition-all placeholder:text-slate-300 resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-blue text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-blue/20 uppercase tracking-wide">
                Odeslat
              </button>
            </form>
          </div>

          {/* Right Side - Contact info */}
          <div className="flex justify-center flex-col w-1/2 max-md:w-full p-12 bg-slate-50/30">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue/10 p-2 rounded-lg">
                <MapPin className="w-5 h-5 text-blue" />
              </div>
              <h2 className="text-xl font-bold text-black">Naše údaje</h2>
            </div>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                  <Mail className="w-4 h-4 text-blue" />
                </div>
                <span className="text-black font-medium">info@runiq.cz</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                  <Phone className="w-4 h-4 text-blue" />
                </div>
                <span className="text-black font-medium">+420 123 456 789</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                  <MapPin className="w-4 h-4 text-blue" />
                </div>
                <span className="text-black font-medium">Název ulice 123, Město</span>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Contact;