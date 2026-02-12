import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar, Terminal } from 'lucide-react';

const HeroEN = () => {
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
          
          {/* Badge nad nagłówkiem - wyśrodkowany */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-mind-content-blue mb-8 mx-auto">
            <Terminal size={14} className="animate-pulse" />
            <span className="text-xs font-bold tracking-wide uppercase">IT & Tech Recruitment Specialist</span>
          </div>

          {/* Nagłówek H1 - potężny i centralny */}
          <h1 className="text-5xl md:text-7xl font-bold text-mind-content-primary mb-8 leading-[1.1] tracking-tight">
            Your Strategic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mind-content-blue to-mind-green">
              IT Recruitment Partner
            </span> <br />
            in Poland.
          </h1>
          
          {/* Podtytuł - szerszy (max-w-3xl) dla lepszego układu */}
          <p className="text-xl md:text-2xl text-mind-content-secondary mb-10 leading-relaxed max-w-3xl mx-auto">
            I don't just send resumes. I connect global tech companies with world-class Polish engineers. Direct communication, deep technical understanding, and <strong>zero agency fluff</strong>.
          </p>

          {/* AUTHORITY BADGES - Wyśrodkowane */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm font-medium text-gray-500">
             <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
                <span className="text-mind-content-primary font-bold">Ex-CD PROJEKT Group</span>
             </div>
             <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
                <span className="text-mind-content-primary font-bold">Technical Sourcing</span>
             </div>
             <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
                <span className="text-mind-content-primary font-bold">Senior Roles Focus</span>
             </div>
          </div>
          
          {/* CTA Buttons - Wyśrodkowane */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button 
              className="group bg-mind-content-blue hover:bg-mind-hover-blue text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar size={20} />
              Book a Call
            </button>
            
            <button 
              className="group border border-gray-200 hover:border-mind-content-blue text-mind-content-primary bg-white hover:bg-blue-50/50 px-10 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-3"
              onClick={() => {
                const element = document.getElementById('services');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              How I Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroEN;