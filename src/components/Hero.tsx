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
  )
}