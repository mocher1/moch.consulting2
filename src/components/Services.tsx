import React from 'react';
import { Search, Cog, ShieldCheck, Zap, Users, LayoutDashboard } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const pillars = [
  {
    icon: LayoutDashboard,
    title: 'Codzienne operacje HR',
    description: 'Przejmuję "bieżączkę", która zatyka Twój kalendarz. Onboardingi, offboardingi, rozwiązywanie konfliktów w zespole, ankiety satysfakcji i 1:1 z pracownikami.',
    benefit: 'Zyskujesz spokój i czas na rozwój biznesu.'
  },
  {
    icon: Search,
    title: 'Rekrutacja i Sourcing',
    description: 'Działam jak Twój wewnętrzny Headhunter. Sam prowadzę procesy, weryfikuję kandydatów technicznych i negocjuję stawki. Ograniczam koszty agencji niemal do zera.',
    benefit: 'Oszczędność min. 30-50 tys. PLN rocznie.'
  },
  {
    icon: Cog,
    title: 'Strategia i procesy (Lean)',
    description: 'Nie tylko "gaszę pożary", ale buduję system, żeby nie wybuchały. Wdrażam ścieżki rozwoju, siatki płac, oceny okresowe i automatyzację HR.',
    benefit: 'Firma staje się skalowalna i gotowa na wzrost.'
  }
];

const Services = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="services" ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Tło dekoracyjne */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Nagłówek - Zmiana narracji na "Abonament" */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-mind-content-primary mb-6 tracking-tight">
            Jeden abonament. <br/>
            <span className="text-mind-content-blue">Cały dział HR.</span>
          </h2>
          <p className="text-xl text-mind-content-secondary max-w-3xl mx-auto leading-relaxed tracking-tight">
            W ramach stałej współpracy ryczałtowej, biorę odpowiedzialność za trzy filary Twojej organizacji. Nie musisz wybierać - dostajesz kompletne wsparcie.
          </p>
        </div>
        
        {/* Siatka Kart (Pillars) */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Gradientowa linia na górze */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mind-content-blue to-mind-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-mind-content-blue mb-6 group-hover:bg-mind-content-blue group-hover:text-white transition-colors duration-300">
                  <Icon size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-mind-content-primary mb-4 tracking-tight">
                  {pillar.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {pillar.description}
                </p>
                
                {/* Sekcja Korzyści na dole karty */}
                <div className="pt-6 border-t border-gray-100 mt-auto">
                  <p className="text-sm font-bold text-mind-content-blue flex items-start gap-2">
                    <Zap size={16} className="shrink-0 mt-0.5" />
                    {pillar.benefit}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sekcja "Co zyskujesz" - Podsumowanie modelu */}
        <div className={`mt-20 bg-mind-surface-bg-grey rounded-3xl p-8 md:p-12 border border-gray-100 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl font-bold text-mind-content-primary mb-6">Jak to działa w praktyce?</h3>
            <div className="grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
                <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-mind-green flex items-center justify-center text-white font-bold shrink-0">1</div>
                    <div>
                        <p className="font-bold text-mind-content-primary">Stała obecność</p>
                        <p className="text-sm text-gray-600 mt-1">Jestem u Ciebie w biurze (lub online) 1 dzień w tygodniu, ale dostępny pod telefonem jestem cały czas.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-mind-green flex items-center justify-center text-white font-bold shrink-0">2</div>
                    <div>
                        <p className="font-bold text-mind-content-primary">Brak L4 i urlopów</p>
                        <p className="text-sm text-gray-600 mt-1">Rozliczasz się za efekt. Jedna faktura B2B miesięcznie. Pełna przewidywalność kosztów.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-mind-green flex items-center justify-center text-white font-bold shrink-0">3</div>
                    <div>
                        <p className="font-bold text-mind-content-primary">Skalowalność</p>
                        <p className="text-sm text-gray-600 mt-1">Gdy urośniesz, zwiększymy wymiar współpracy lub pomogę Ci zatrudnić Juniora do pomocy.</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Services;