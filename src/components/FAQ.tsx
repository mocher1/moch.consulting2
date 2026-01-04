import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const faqItems = [
  {
    question: "Czy 'Fractional HR' opłaca się małej firmie?",
    answer: "Zdecydowanie. Zatrudnienie doświadczonego HR Managera (Seniora) to koszt rzędu 18-25 tys. PLN miesięcznie + narzuty. Junior z kolei nie ułoży procesów strategicznych. Jako Fractional HR wchodzę na ustaloną część etatu, dając Ci senioralne kompetencje (ex-CD PROJEKT, PepsiCo) za ułamek tej ceny. Płacisz za konkretne efekty i rozwiązywanie problemów, a nie za 'siedzenie w biurze' na pełen etat."
  },
  {
    question: "Jak wygląda proces wdrażania zmian w zespole?",
    answer: "Nie robię rewolucji, która wystraszy zespół. Zaczynam od audytu i rozmów, by zrozumieć Waszą kulturę (DNA firmy). Zmiany wprowadzam ewolucyjnie, kładąc ogromny nacisk na transparentną komunikację. Ludzie muszą wiedzieć 'dlaczego' coś zmieniamy i co z tego będą mieli. Działam jak partner wewnątrz zespołu, a nie zewnętrzny audytor, co drastycznie zmniejsza opór przed zmianą."
  },
  {
    question: "Czy rekrutujesz też Juniorów?",
    answer: "Tak, prowadzę procesy end-to-end na każde stanowisko. Jednak moją największą wartością dodaną jest to, że przy okazji takiej rekrutacji układam proces (standardy ogłoszeń, zadania rekrutacyjne, scoring), który zostaje w firmie. Dzięki temu kolejne rekrutacje na niższe szczeble Twój zespół będzie mógł często prowadzić już samodzielnie lub z moim minimalnym nadzorem."
  },
  {
    question: "Ile trwa audyt procesów HR?",
    answer: "Szanuję Twój czas i budżet, więc nie tworzę dokumentów 'na półkę'. Wstępna diagnoza (HR Health Check) to zazwyczaj 1-2 dni robocze. Pełny przegląd procesów w firmie 30-50 osobowej zamykamy zazwyczaj w 2 tygodnie (w ramach bieżącej współpracy). Od razu po nim wdrażamy tzw. 'quick wins' – proste zmiany, które dają natychmiastowy, odczuwalny efekt w organizacji."
  }
];

const FAQ = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="faq" ref={ref} className="py-24 bg-gradient-to-b from-mind-surface-content-white to-mind-surface-bg-grey">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-semibold text-mind-content-primary mb-6 tracking-tight">
            Częste pytania
          </h2>
          <p className="text-xl text-mind-content-secondary max-w-3xl mx-auto leading-relaxed tracking-tight">
            Konkretne odpowiedzi na to, co najczęściej nurtuje Founderów i CEO przed podjęciem współpracy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-mind-surface-content-white rounded-2xl p-8 border border-mind-stroke-border-grey hover:border-mind-content-blue hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <h3 className="text-xl font-semibold text-mind-content-primary mb-4 tracking-tight leading-tight">
                  {item.question}
                </h3>
                <p className="text-mind-content-secondary leading-relaxed text-lg">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;