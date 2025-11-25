import React from 'react';
import { Search, Cog, TrendingUp, Zap } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const services = [
  {
    icon: Search,
    title: 'Rekrutacja specjalistów i liderów',
    description: 'Skuteczne procesy rekrutacyjne dla IT, gamingu, marketingu i white collar. Od ogłoszeń i direct search po selekcję i rekomendacje.',
    effect: 'Krótszy time-to-hire i lepsza jakość zatrudnień'
  },
  {
    icon: Cog,
    title: 'Procesy i optymalizacja',
    description: 'Usprawniam onboarding, feedback, performance i szkolenia. Eliminuję zbędne kroki metodami Lean Six Sigma i wdrażam nowoczesne narzędzia HR.',
    effect: 'Przewidywalność i klarowność w codziennym HR'
  },
  {
    icon: TrendingUp,
    title: 'Strategiczne doradztwo HR',
    description: 'Wspieram zarządy i managerów jako HRBP i certyfikowany coach ICF. Buduję strategie, rozwijam liderów i tworzę polityki wspierające wzrost.',
    effect: 'Spójna kultura i zaangażowane zespoły'
  }
];

const Services = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="services" ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Tło dekoracyjne (zgodne z wersją EN) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Nagłówek */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-mind-content-primary mb-6 tracking-tight">
            Kompleksowe wsparcie HR
          </h2>
          <p className="text-xl text-mind-content-secondary max-w-3xl mx-auto leading-relaxed tracking-tight">
            Łączę wieloletnie doświadczenie rekrutacyjne, rolę HR Business Partnera oraz praktykę Lean i Change Management. Pomagam firmom nie tylko zatrudniać, ale też układać procesy, które wspierają cele biznesowe.
          </p>
        </div>
        
        {/* Siatka Kart (Grid) */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Gradientowa linia na górze (pojawia się przy hover) */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mind-content-blue to-mind-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                {/* Ikona w kwadracie */}
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-mind-content-blue mb-6 group-hover:bg-mind-content-blue group-hover:text-white transition-colors duration-300">
                  <Icon size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-mind-content-primary mb-4 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Sekcja Efektu na dole karty */}
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm font-bold text-mind-content-blue flex items-center gap-2">
                    <Zap size={16} className="shrink-0" />
                    {service.effect}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;