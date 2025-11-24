import React, { useEffect, useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const HeroEN = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar, CheckCircle, Globe } from 'lucide-react';

const HeroEN = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-mind-warm-white via-white to-mind-light-grey flex items-center justify-center px-6 overflow-hidden">
      {/* Tło dekoracyjne */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-mind-content-blue/5 via-transparent to-transparent"></div>
      
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEWA STRONA: Copywriting sprzedażowy */}
        <div className={`text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Badge: Global Reach */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-mind-content-blue mb-8 w-fit">
            <Globe size={14} className="animate-pulse" />
            <span className="text-xs font-bold tracking-wide uppercase">Remote Recruitment Partner for EU/US/UK</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-mind-content-primary mb-6 leading-[1.1] tracking-tight">
            Hire Top Polish <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mind-content-blue to-mind-green">
              Tech Talent.
            </span> <br />
            Directly.
          </h1>
          
          <p className="text-xl text-mind-content-secondary mb-8 leading-relaxed max-w-xl">
            Stop relying on generic agencies. I provide <strong>direct executive search</strong> and <strong>technical sourcing</strong> to help you hire Poland's top 5% developers.
          </p>

          {/* AUTHORITY BADGES - To robi "12/10" */}
          <div className="flex flex-wrap gap-4 mb-10 text-sm font-medium text-gray-500">
             <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm">
                <span className="text-mind-content-primary font-bold">Ex-CD PROJEKT Group</span>
             </div>
             <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm">
                <span className="text-mind-content-primary font-bold">10+ Years Exp.</span>
             </div>
             <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm">
                <span className="text-mind-content-primary font-bold">Avg. 38 days to hire</span>
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
              See How I Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* PRAWA STRONA: Wizualny dowód "Jakości" (Abstrakcyjna karta kandydata) */}
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

              {/* Cechy kandydata */}
              <div className="space-y-4 mb-8">
                 <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-mind-content-blue"></div>
                    <p className="text-mind-content-secondary">Stack: <strong>React, Node.js, AWS</strong></p>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-mind-content-blue"></div>
                    <p className="text-mind-content-secondary">Location: <strong>Warsaw / Remote</strong></p>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-mind-content-blue"></div>
                    <p className="text-mind-content-secondary">English: <strong>C1/C2 (Verified)</strong></p>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-mind-green"></div>
                    <p className="text-mind-content-secondary">Sourced by: <strong>Rafał Moch</strong></p>
                 </div>
              </div>

              {/* Przycisk na karcie */}
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                 <p className="text-sm text-gray-500 mb-1">Market Salary Benchmark</p>
                 <p className="text-xl font-bold text-mind-content-primary">€5,500 - €7,500 / mo</p>
              </div>
           </div>

           {/* Dekoracje w tle (blobs) */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-mind-content-blue/10 to-mind-green/10 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroEN;
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-mind-warm-white via-mind-surface-content-white to-mind-light-grey flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-gradient-to-r from-mind-content-blue/5 to-mind-green/5"></div>
      
      <div className="relative max-w-5xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-7xl font-semibold text-mind-content-primary mb-8 leading-tight tracking-tight">
            Scale your team with top{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mind-content-blue to-mind-green">
              Tech Talent
            </span>
            {' '}from Europe
          </h1>
          
          <p className="text-xl md:text-2xl text-mind-content-secondary mb-12 leading-relaxed max-w-3xl mx-auto tracking-tight">
            Freelance Tech Recruiter & Sourcer based in Poland. Direct search and market intelligence without agency fees.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              className="group bg-mind-content-blue hover:bg-mind-hover-blue text-mind-surface-content-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-mind-content-blue focus-visible:ring-offset-2"
              aria-label="Start hiring tech talent"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail size={24} />
              Start Hiring
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              className="group border-2 border-mind-stroke-border-grey hover:border-mind-content-blue text-mind-content-primary hover:text-mind-content-blue px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 focus-visible:ring-2 focus-visible:ring-mind-content-blue focus-visible:ring-offset-2"
              aria-label="Learn about my services"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              My Services
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-mind-stroke-border-grey rounded-full flex justify-center">
          <div className="w-1 h-3 bg-mind-content-secondary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroEN;