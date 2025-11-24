import React, { useEffect, useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const HeroEN = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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