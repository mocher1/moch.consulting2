import React from 'react';
import { Laptop, Gamepad, Megaphone, ShoppingCart, Briefcase } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const industries = [
  {
    icon: Laptop,
    title: 'IT & Tech',
    description: 'Rekrutacja programistów, DevOps, QA, PM i innych specjalistów technicznych. Doradztwo HR i procesy wspierające rozwój zespołów technologicznych.'
  },
  {
    icon: Gamepad,
    title: 'Gaming',
    description: 'Pozyskiwanie talentów dla studiów gier i firm gamedev. Budowa ścieżek rozwoju, employer branding i wsparcie liderów zespołów kreatywnych.'
  },
  {
    icon: Megaphone,
    title: 'Marketing',
    description: 'Specjaliści digital marketing, growth, content i analityki. Wdrożenie procesów i narzędzi wspierających zespoły kreatywne.'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'HR dla firm e-commerce: rekrutacja sprzedaży online, logistyki i customer experience. Optymalizacja procesów rekrutacyjnych i rozwój kadr wspierających szybki wzrost.'
  },
  {
    icon: Briefcase,
    title: 'White Collar',
    description: 'Rekrutacje kadry menedżerskiej, finansowej, prawnej i biurowej. Strategiczne doradztwo HR – procedury, struktury i coaching liderów.'
  }
];

const Industries = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="industries" ref={ref} className="py-24 bg-gradient-to-b from-mind-surface-bg-grey to-mind-surface-content-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-semibold text-mind-content-primary mb-6 tracking-tight">
            Branże, w których działam
          </h2>
          <p className="text-xl text-mind-content-secondary max-w-3xl mx-auto leading-relaxed tracking-tight">
            Wspieram firmy w budowaniu zespołów i procesów HR w kluczowych sektorach nowoczesnej gospodarki.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Pierwsza linia - 3 karty */}
          {industries.slice(0, 3).map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className={`group text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-mind-surface-content-white rounded-2xl p-8 border border-mind-stroke-border-grey group-hover:border-mind-content-blue group-hover:shadow-lg transition-all duration-300 group-hover:scale-105 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-mind-content-blue to-mind-green rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-mind-surface-content-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-mind-content-primary mb-4 tracking-tight">
                    {industry.title}
                  </h3>
                  
                  <p className="text-mind-content-secondary leading-relaxed tracking-tight flex-1">
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Druga linia - 2 karty wyśrodkowane */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-8">
          {industries.slice(3, 5).map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index + 3}
                className={`group text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 3) * 200}ms` }}
              >
                <div className="bg-mind-surface-content-white rounded-2xl p-8 border border-mind-stroke-border-grey group-hover:border-mind-content-blue group-hover:shadow-lg transition-all duration-300 group-hover:scale-105 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-mind-content-blue to-mind-green rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-mind-surface-content-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-mind-content-primary mb-4 tracking-tight">
                    {industry.title}
                  </h3>
                  
                  <p className="text-mind-content-secondary leading-relaxed tracking-tight flex-1">
                    {industry.description}
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

export default Industries;