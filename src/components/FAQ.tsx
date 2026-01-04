import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const faqItems = [
  {
    question: "Czy '1 dzień w tygodniu' to nie za mało, żeby ogarnąć firmę?",
    answer: "Wystarczy, bo nie zajmuję się 'mikromanagementem' ani administracją kadrową (twardy HR). Skupiam się na procesach, strategii i kluczowych rekrutacjach. To, co etatowy HR robi w 5 dni (spotkania, kawa, zbędne maile), ja kondensuję w 1 dzień konkretnych działań operacyjnych. Działam zadaniowo, a nie na dupogodziny."
  },
  {
    question: "Czy mogę zrezygnować z zewnętrznych agencji rekrutacyjnych?",
    answer: "Tak, to jeden z głównych celów naszej współpracy. Przejmuję procesy rekrutacyjne. Oszczędzasz dzięki temu 15-30% rocznej pensji kandydata (success fee), które oddałbyś agencji. Mój miesięczny abonament często jest niższy niż prowizja agencji za jednego zatrudnionego programistę."
  },
  {
    question: "Co jeśli pilny pożar wybuchnie, gdy Ciebie nie ma?",
    answer: "Działam elastycznie. W sytuacjach kryzysowych (wypadki, nagłe zwolnienia dyscyplinarne, konflikty) reaguję tego samego dnia, nawet jeśli to nie jest mój 'dyżurowy' dzień. Ustalamy to na początku współpracy – jako Twój partner biznesowy nie zostawiam Was samych z pożarem."
  },
  {
    question: "Ile rekrutacji możesz prowadzić jednocześnie w abonamencie?",
    answer: "Realistycznie prowadzę 2-3 procesy 'end-to-end' jednocześnie (od ogłoszenia po ofertę) przy założeniu 1 dnia w tygodniu. Przy większej skali wchodzę w rolę koordynatora – układam proces i wspieram Twoich Hiring Managerów, aby rekrutowali skutecznie, ale nie robię każdego screeningu osobiście."
  },
  {
    question: "Co jeśli w danym miesiącu nie mamy żadnej rekrutacji?",
    answer: "Nie przepalasz budżetu. Wtedy przesuwamy ciężar na inne obszary: układanie ścieżek karier, systemy premiowe, szkolenia liderów czy poprawę onboardingu. W obszarze People & Culture zawsze jest coś do usprawnienia, co w długim terminie zmniejszy rotację pracowników."
  },
  {
    question: "Mamy spory bałagan w procesach – czy to też układasz?",
    answer: "Tak, często od tego zaczynam. Robię audyt, porządkuję strukturę, tworzę brakujące wzory dokumentów i procesy (onboarding, offboarding, 1:1). Nie jestem jednak kadrową (payroll) – współpracuję z Twoim działem księgowości/kadr, dostarczając im merytoryczny wsad, którego potrzebują."
  },
  {
    question: "Czy dajesz gwarancję na zatrudnionego pracownika?",
    answer: "Działam jako część Twojego zespołu, a nie zewnętrzna agencja, więc model 'gwarancji' działa inaczej. Minimalizuję ryzyko błędu poprzez dokładny proces (który sam układam), ale jeśli kandydat się nie sprawdzi – po prostu szukamy dalej w ramach tego samego abonamentu, bez dodatkowych opłat 'za sukces'."
  },
  {
    question: "Czym różnisz się od freelancera HR za 100 zł/h?",
    answer: "Doświadczeniem biznesowym i skalą. Nie jestem tylko rekruterem na godziny. Wnoszę know-how z firm takich jak CD PROJEKT czy PepsiCo. Patrzę na HR jak na inwestycję biznesową, a nie 'miękkie relacje'. To różnica między 'wykonaniem zadania' a ułożeniem działającej, samodzielnej firmy."
  }
];

const FAQ = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={ref} className="py-24 bg-mind-surface-bg-grey">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-semibold text-mind-content-primary mb-6 tracking-tight">
            Pytania i odpowiedzi
          </h2>
          <p className="text-xl text-mind-content-secondary max-w-2xl mx-auto">
            Rozwiewam wątpliwości związane z modelem Fractional HR.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`group bg-mind-surface-content-white rounded-2xl border transition-all duration-500 overflow-hidden
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                ${openIndex === index ? 'border-mind-content-blue shadow-lg' : 'border-mind-stroke-border-grey hover:border-mind-content-secondary'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${openIndex === index ? 'text-mind-content-blue' : 'text-mind-content-primary'}`}>
                  {item.question}
                </span>
                <div className={`flex-shrink-0 ml-4 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className={openIndex === index ? 'text-mind-content-blue' : 'text-mind-content-tertiary'}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </button>
              
              <div 
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <div className="p-6 pt-0 text-mind-content-secondary text-lg leading-relaxed border-t border-transparent">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;