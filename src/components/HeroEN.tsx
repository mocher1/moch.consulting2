import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar, CheckCircle, Code2, Terminal } from 'lucide-react';

const HeroEN = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-mind-warm-white via-white to-mind-light-grey flex items-center justify-center px-6 overflow-hidden">
      {/* Tło dekoracyjne */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-mind-content-blue/5 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEWA STRONA: Copywriting sprzedażowy (IT Partner) */}
        <div className={`text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-mind-content-blue mb-8 w-fit">
            <Terminal size={14} className="animate-pulse" />
            <span className="text-xs font-bold tracking-wide uppercase">IT & Tech Recruitment Specialist</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-mind-content-primary mb-6 leading-[1.1] tracking-tight">
            Your Strategic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mind-content-blue to-mind-green">
              IT Recruitment Partner
            </span> <br />
            in Poland.
          </h1>
          
          <p className="text-xl text-mind-content-secondary mb-8 leading-relaxed max-w-xl">
            I don't just send resumes. I connect global tech companies with world-class Polish engineers. Direct communication, deep technical understanding, and <strong>zero agency fluff</strong>.
          </p>

          {/* AUTHORITY BADGES */}
          <div className="flex flex-wrap gap-4 mb-10 text-sm font-medium text-gray-500">
             <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
                <span className="text-mind-content-primary font-bold">Ex-CD PROJEKT Group</span>
             </div>
             <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
                <span className="text-mind-content-primary font-bold">Technical Sourcing</span>
             </div>
             <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
                <span className="text-mind-content-primary font-bold">Senior Roles Focus</span>
             </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              className="group bg-mind-content-blue hover:bg-mind-hover-blue text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar size={20} />
              Book a Call
            </button>
            
            <button 
              className="group border border-gray-200 hover:border-mind-content-blue text-mind-content-primary bg-white hover:bg-blue-50/50 px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-3"
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

        {/* PRAWA STRONA: Wizualizacja "Idealnego Kandydata IT" (Zamiast Mapy/Tabeli) */}
        <div className={`hidden lg:block relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
           <div className="relative z-10 bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 max-w-md mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Header Karty */}
              <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                 <div>
                    <p className="text-xs text-gray-400 uppercase font-semibold">Candidate Profile</p>
                    <p className="text-lg font-bold text-mind-content-primary">Senior Fullstack Dev</p>
                 </div>
                 <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle size={20} />
                 </div>
              </div>

              {/* Tech Stack Visuals */}
              <div className="space-y-4 mb-8">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-mind-content-blue font-bold text-xs">TS</div>
                    <div>
                        <p className="text-sm font-bold text-mind-content-primary">TypeScript / React</p>
                        <p className="text-xs text-gray-400">7+ years experience</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-mind-green font-bold text-xs">ND</div>
                    <div>
                        <p className="text-sm font-bold text-mind-content-primary">Node.js / AWS</p>
                        <p className="text-xs text-gray-400">Architect level</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 font-bold text-xs">EN</div>
                    <div>
                        <p className="text-sm font-bold text-mind-content-primary">English C1/C2</p>
                        <p className="text-xs text-gray-400">Verified fluency</p>
                    </div>
                 </div>
              </div>

              {/* Przycisk na karcie */}
              <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
                 <div>
                    <p className="text-xs text-gray-500">Availability</p>
                    <p className="text-sm font-bold text-mind-content-primary">Immediate start</p>
                 </div>
                 <div className="px-3 py-1 bg-white border border-gray-200 rounded-md shadow-sm">
                    <p className="text-xs font-bold text-mind-content-blue">Verified</p>
                 </div>
              </div>
           </div>

           {/* Dekoracje w tle (blobs) */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-mind-content-blue/10 to-mind-green/10 rounded-full blur-3xl -z-10"></div>
           
           {/* Kod dekoracyjny (floating) */}
           <div className="absolute -right-4 top-20 bg-mind-content-primary p-3 rounded-lg shadow-xl border border-gray-700 animate-bounce-slow hidden xl:block">
              <Code2 size={20} className="text-mind-green" />
           </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEN;