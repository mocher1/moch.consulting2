import React from 'react';
import { Search, Cog, TrendingUp } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const services = [
  {
    icon: Search,
    title: 'Rekrutacja specjalistów i liderów',
    description: 'Skuteczne procesy rekrutacyjne dla IT, gamingu, marketingu i white collar. Od ogłoszeń i direct search po selekcję i rekomendacje.',
    effect: 'krótszy time-to-hire i lepsza jakość zatrudnień'
  },
  {
    icon: Cog,
    title: 'Procesy i optymalizacja',
    description: 'Usprawniam onboarding, feedback, performance i szkolenia. Eliminuję zbędne kroki metodami Lean i wdrażam narzędzia HR.',
    effect: 'przewidywalność i klarowność w codziennym HR'
  },
  {
    icon: TrendingUp,
    title: 'Strategiczne doradztwo HR',
    description: 'Wspieram zarządy i managerów jako HRBP i coach ICF. Buduję strategie HR, rozwijam liderów i tworzę polityki wspierające rozwój organizacji.',
    effect: 'spójna kultura i większe zaangażowanie zespołów'
  }
];

const Services = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="services" ref={ref} className="py-24 bg-mind-surface-content-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-semibold text-mind-content-primary mb-6 tracking-tight">
            Moje usługi
          </h2>
          <p className="text-xl text-mind-content-secondary max-w-3xl mx-auto leading-relaxed tracking-tight">
            Łączę wieloletnie doświadczenie rekrutacyjne, HR Business Partnera oraz praktyka Lean i Change Management. Pomagam firmom zatrudniać, rozwijać i angażować pracowników w sposób, który realnie wspiera cele biznesowe.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-16 h-16 text-mind-content-blue group-hover:text-mind-green transition-colors duration-300 group-hover:scale-110 transition-transform" />
                </div>
                
                <h3 className="text-2xl font-semibold text-mind-content-primary mb-4 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-mind-content-secondary leading-relaxed tracking-tight mb-4">
                  {service.description}
                </p>
                <p className="text-mind-content-primary tracking-tight">
                  <strong>Efekt:</strong> {service.effect}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;