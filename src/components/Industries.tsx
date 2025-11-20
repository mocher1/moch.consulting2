import React from 'react';
import { Laptop, Gamepad, Rocket, ShoppingCart, Building2 } from 'lucide-react'; // Zmieniłem ikony na bardziej pasujące
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const industries = [
  {
    icon: Gamepad,
    title: 'Gaming & Gamedev',
    description: 'Doświadczenie prosto z Grupy CD Projekt. Rozumiem unikalną kulturę studiów gier, specyfikę ról artystyczno-technicznych oraz wyzwania związane z premierami (crunch, retention). Pomagam budować zespoły, które dowożą hity.'
  },
  {
    icon: Laptop,
    title: 'IT & Software Houses',
    description: 'Wiem, jak rozmawiać z Senior Developerami i jak budować kulturę inżynierską. Oprócz rekrutacji, wdrażam ścieżki kariery i systemy ocen, które zmniejszają rotację w Twoim software house.'
  },
  {
    icon: Rocket,
    title: 'Startups & Scaleups',
    description: 'Twój biznes rośnie szybciej niż Twoje struktury? Jako Fractional HR wchodzę w chaos i układam procesy (onboarding, handbooki, levele), które są skalowalne, ale nie zabijają ducha startupu.'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Szybka rekrutacja i efektywność operacyjna. Pomagam skalować działy sprzedaży i obsługi klienta w szczytach sezonowych, dbając o twarde KPI i jakość zatrudnienia.'
  },
  {
    icon: Building2,
    title: 'Professional Services',
    description: 'Standardy Wielkiej Czwórki (EY). Wspieram firmy doradcze, finansowe i prawne, gdzie liczy się najwyższy profesjonalizm, etyka pracy i precyzyjne zarządzanie talentami (up-or-out, evaluations).'
  }
];

const Industries = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="industries" ref={ref} className="py-24 bg-gradient-to-b from-mind-surface-bg-grey to-mind-surface-content-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-semibold text-mind-content-primary mb-6 tracking-tight">
            Rozumiem specyfikę Twojej branży
          </h2>
          <p className="text-xl text-mind-content-secondary max-w-3xl mx-auto leading-relaxed tracking-tight">
            Nie stosuję metody "kopiuj-wklej". Moje doświadczenie w GOG, EY czy PepsiCo pozwala mi dopasować strategię HR do DNA Twojego sektora.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Pierwsza linia - 3 karty (Gaming, IT, Startups) - to Twoje 'Core' */}
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
                  <div className="w-16 h-16 bg-gradient-to-br from-mind-content-blue to-mind-green rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon className="w-8 h-8 text-mind-surface-content-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-mind-content-primary mb-4 tracking-tight">
                    {industry.title}
                  </h3>
                  
                  <p className="text-mind-content-secondary leading-relaxed tracking-tight flex-1 text-base">
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Druga linia - 2 karty wyśrodkowane (E-commerce, Professional Services) */}
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
                  <div className="w-16 h-16 bg-gradient-to-br from-mind-content-blue to-mind-green rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon className="w-8 h-8 text-mind-surface-content-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-mind-content-primary mb-4 tracking-tight">
                    {industry.title}
                  </h3>
                  
                  <p className="text-mind-content-secondary leading-relaxed tracking-tight flex-1 text-base">
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