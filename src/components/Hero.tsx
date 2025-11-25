import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar, CheckCircle, TrendingUp, Briefcase, Zap } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-mind-warm-white via-white to-mind-light-grey flex items-center justify-center px-6 overflow-hidden">
      {/* Tło dekoracyjne (Blobs) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-mind-content-blue/5 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEWA STRONA: Copywriting sprzedażowy (Fractional HR) */}
        <div className={`text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Badge: Kategoria Usługi */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-mind-content-blue mb-8 w-fit">
            <Zap size={14} className="animate-pulse" />
            <span className="text-xs font-bold tracking-wide uppercase">Fractional HR & Interim Management</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mind-content-primary mb-6 leading-[1.15] tracking-tight">
            Twój biznes rośnie, <br />
            a procesy HR stoją w miejscu? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mind-content-blue to-mind-green">
              Zyskaj Senior HR Managera
            </span> <br />
            na ułamek etatu.
          </h1>
          
          <p className="text-xl text-mind-content-secondary mb-8 leading-relaxed max-w-xl">
            Twój biznes potrzebuje wsparcia HR, ale nie stać Cię na pełnoetatowego Senior HR Managera? 
            Zyskaj dostęp do doświadczonego specjalisty na ułamek kosztów tradycyjnego zatrudnienia.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-mind-content-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2">
              Umów bezpłatną konsultację
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-mind-content-blue text-mind-content-blue px-8 py-4 rounded-lg font-semibold hover:bg-mind-content-blue hover:text-white transition-all duration-300">
              Zobacz case studies
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 text-sm text-mind-content-secondary">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-mind-green" />
              <span>Doświadczenie w CD PROJEKT</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-mind-green" />
              <span>ROI widoczny w 30 dni</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase size={16} className="text-mind-green" />
              <span>Elastyczne modele współpracy</span>
            </div>
          </div>
        </div>
        
        {/* PRAWA STRONA: Visual/Image */}
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-mind-content-blue/10 to-mind-green/10 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <Calendar size={64} className="text-mind-content-blue mx-auto mb-4" />
                <p className="text-mind-content-secondary font-medium">Wizualizacja procesu HR</p>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg border border-mind-stroke-border-grey">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-mind-green rounded-full"></div>
                <span className="text-mind-content-primary font-medium">Aktywny projekt</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg border border-mind-stroke-border-grey">
              <div className="text-sm">
                <div className="text-mind-content-primary font-bold text-lg">-40%</div>
                <div className="text-mind-content-secondary">Koszt vs pełny etat</div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}