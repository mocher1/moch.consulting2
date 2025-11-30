import React from 'react';
import { Code2, Rocket, LineChart, Globe } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const industries = [
  {
    icon: Code2,
    name: 'Software Houses & IT',
    desc: 'Rozumiem specyfikę pracy z programistami. Wiem, czym różni się Senior od Mida, jak rekrutować w Stacku JS/Python i jak budować kulturę remote-first.'
  },
  {
    icon: Rocket,
    name: 'Scale-ups & Startupy',
    desc: 'Twoja firma rośnie szybciej niż Twoje procesy? Wdrażam struktury, które nie zabijają ducha startupu, ale wprowadzają niezbędny porządek.'
  },
  {
    icon: Globe,
    name: 'Firmy wchodzące do Polski',
    desc: 'Budujesz oddział nad Wisłą? Pomagam zagranicznym podmiotom zrozumieć polski rynek pracy, prawo i mentalność pracowników.'
  },
  {
    icon: LineChart,
    name: 'MŚP w trakcie transformacji',
    desc: 'Masz 30-100 osób i czujesz, że "zarządzanie na wyczucie" już nie działa? Wdrażam profesjonalne HR, które wspiera zarząd, a nie generuje biurokrację.'
  }
];

const Industries = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section ref={ref} className="py-24 bg-mind-surface-content-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-mind-content-primary mb-6">
            Gdzie sprawdzam się najlepiej?
          </h2>
          <p className="text-xl text-mind-content-secondary max-w-2xl mx-auto">
            Nie jestem dla każdego. Specjalizuję się w firmach technologicznych i usługowych, które chcą rosnąć mądrze.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className={`bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group ${
                   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-mind-content-blue mb-6 group-hover:bg-mind-content-blue group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-mind-content-primary mb-3">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;