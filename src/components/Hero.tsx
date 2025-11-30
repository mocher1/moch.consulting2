import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar, Zap, Briefcase, TrendingUp } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[85vh] bg-gradient-to-br from-mind-warm-white via-white to-mind-light-grey flex items-center justify-center px-6 overflow-hidden">
      {/* Tło dekoracyjne - subtelne, centralne */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-mind-content-blue/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="relative max-w-5xl mx-auto text-center z-10">
        
        {/* Główny kontener z animacją wejścia */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Nagłówek H1 - potężny i centralny */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-mind-content-primary mb-8 leading-[1.15] tracking-tight">
            Twój biznes rośnie, <br />
            a procesy HR stoją w miejscu? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mind-content-blue to-mind-green">
              Zyskaj HR Managera
            </span> <br />
            na ułamek etatu.
          </h1>
          
          {/* Podtytuł - szerszy dla lepszego układu */}
          <p className="text-xl md:text-2xl text-mind-content-secondary mb-10 leading-relaxed max-w-3xl mx-auto">
            Wchodzę do firmy, układam chaos, wdrażam standardy i rekrutuję kluczowe talenty. Działam jak członek Twojego zarządu, ale bez kosztów pełnego etatu.
          </p>
          
          {/* CTA Buttons - Wyśrodkowane */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button 
              className="group bg-mind-content-blue hover:bg-mind-hover-blue text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar size={20} />
              Umów darmową konsultację
            </button>
            
            <button 
              className="group border border-gray-200 hover:border-mind-content-blue text-mind-content-primary bg-white hover:bg-blue-50/50 px-10 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-3"
              onClick={() => {
                const element = document.getElementById('services');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Sprawdź ofertę
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;