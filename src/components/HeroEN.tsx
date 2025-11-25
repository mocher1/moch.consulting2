import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar, CheckCircle, Globe, Map } from 'lucide-react';

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
        
        {/* LEWA STRONA */}
        <div className={`text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-mind-content-blue mb-8 w-fit">
            <Globe size={14} className="animate-pulse" />
            <span className="text-xs font-bold tracking-wide uppercase">Pan-European Tech Recruitment</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-mind-content-primary mb-6 leading-[1.1] tracking-tight">
            Unlock Top Tech Talent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mind-content-blue to-mind-green">
              Across Europe.
            </span>
          </h1>
          
          <p className="text-xl text-mind-content-secondary mb-8 leading-relaxed max-w-xl">
            Don't limit your search to one city. I execute <strong>cross-border executive search</strong> to find world-class engineers in the CEE region (Poland, Czechia, Romania) and beyond.
          </p>

          {/* AUTHORITY BADGES */}
          <div className="flex flex-wrap gap-4 mb-10 text-sm font-medium text-gray-500">
             <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm">
                <span className="text-mind-content-primary font-bold">Ex-CD PROJEKT Group</span>
             </div>
             <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm">
                <span className="text-mind-content-primary font-bold">International Network</span>
             </div>
             <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm">
                <span className="text-mind-content-primary font-bold">Remote-First Expert</span>
             </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              className="group bg-mind-content-blue hover:bg-mind-hover-blue text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar size={20} />
              Book a Discovery Call
            </button>
            
            <button 
              className="group border border-gray-200 hover:border-mind-content-blue text-mind-content-primary bg-white hover:bg-blue-50/50 px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-3"
              onClick={() => {
                const element = document.getElementById('services');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See My Reach
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* PRAWA STRONA: Mapa zamiast Karty Kandydata */}
        <div className={`hidden lg:block relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
           <div className="relative z-10 bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 max-w-md mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-500">
              
              <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                 <div>
                    <p className="text-xs text-gray-400 uppercase font-semibold">Talent Pool Access</p>
                    <p className="text-lg font-bold text-mind-content-primary">Central & Eastern Europe</p>
                 </div>
                 <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-mind-content-blue">
                    <Map size={20} />
                 </div>
              </div>

              {/* Lista krajów/Hubów */}
              <div className="space-y-4 mb-6">
                 <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                        <span className="text-xl">🇵🇱</span>
                        <span className="font-semibold text-gray-700">Poland</span>
                    </div>
                    <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">Top Choice</span>
                 </div>
                 <div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg">
                    <div className="flex items-center gap-3">
                        <span className="text-xl">🇨🇿</span>
                        <span className="font-semibold text-gray-700">Czechia</span>
                    </div>
                    <span className="text-xs text-gray-400">Senior Eng.</span>
                 </div>
                 <div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg">
                    <div className="flex items-center gap-3">
                        <span className="text-xl">🇷🇴</span>
                        <span className="font-semibold text-gray-700">Romania</span>
                    </div>
                    <span className="text-xs text-gray-400">High Volume</span>
                 </div>
                 <div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg">
                    <div className="flex items-center gap-3">
                        <span className="text-xl">🇪🇺</span>
                        <span className="font-semibold text-gray-700">Remote EU</span>
                    </div>
                    <span className="text-xs text-gray-400">Digital Nomads</span>
                 </div>
              </div>

              <div className="text-center">
                 <p className="text-xs text-gray-400">Operating remotely from Warsaw HQ</p>
              </div>
           </div>

           {/* Dekoracja */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-mind-content-blue/10 to-mind-green/10 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroEN;