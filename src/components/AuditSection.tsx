import React from 'react';
import { CheckCircle, Target, Clock, TrendingUp, FileText, Calendar } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const scopeItems = [
  'decyzje personalne i odpowiedzialność',
  'role i struktura organizacyjna', 
  'rekrutacja i czas decyzji',
  'wynagrodzenia i spójność płac',
  'współpraca HR z managementem'
];

const metrics = [
  'czas podejmowania decyzji personalnych',
  'liczba eskalacji do foundera / zarządu',
  'time-to-hire i time-to-decision',
  'liczba zawieszonych procesów rekrutacyjnych',
  'rotacja i stabilność kluczowych ról'
];

const outputs = [
  'dokument decyzyjny (10–15 slajdów)',
  'lista decyzji dla foundera i zarządu',
  'rekomendacje na 30–60–90 dni'
];

const AuditSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="audyt" ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-mind-content-primary mb-6 tracking-tight">
            Audyt Decyzji i Zarządzania Ludźmi
          </h2>
          <p className="text-xl md:text-2xl text-mind-content-secondary max-w-4xl mx-auto leading-relaxed">
            Audyt odpowiada na pytanie, dlaczego decyzje dotyczące ludzi nie wspierają dziś biznesu — i które z nich realnie blokują organizację.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Scope & Metrics */}
          <div className={`space-y-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            
            {/* Scope Section */}
            <div className="bg-mind-surface-bg-grey rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-mind-content-blue" />
                <h3 className="text-2xl font-bold text-mind-content-primary">Zakres analizy</h3>
              </div>
              <ul className="space-y-4">
                {scopeItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-mind-green shrink-0 mt-0.5" />
                    <span className="text-mind-content-secondary text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metrics Section */}
            <div className="bg-mind-content-primary text-white rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-6 h-6 text-mind-green" />
                <h3 className="text-2xl font-bold">Metryki, które analizuję</h3>
              </div>
              <ul className="space-y-4 mb-6">
                {metrics.map((metric, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-mind-green rounded-full shrink-0 mt-2.5" />
                    <span className="text-gray-300 text-lg">{metric}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-white/20">
                <p className="text-sm text-gray-400 italic">
                  Metryki analizowane są kontekstowo — nie benchmarkingowo — w celu wskazania konkretnych decyzji do podjęcia.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Output & Pricing */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            
            {/* Output Section */}
            <div className="bg-white rounded-2xl p-8 border-2 border-mind-content-blue shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-mind-content-blue" />
                <h3 className="text-2xl font-bold text-mind-content-primary">Co otrzymujesz</h3>
              </div>
              <ul className="space-y-4 mb-8">
                {outputs.map((output, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-mind-content-blue shrink-0 mt-0.5" />
                    <span className="text-mind-content-secondary text-lg font-medium">{output}</span>
                  </li>
                ))}
              </ul>
              
              {/* Pricing */}
              <div className="bg-mind-surface-bg-grey rounded-xl p-6 mb-8">
                <div className="text-center">
                  <p className="text-sm text-mind-content-secondary mb-2">Cena:</p>
                  <p className="text-3xl font-bold text-mind-content-primary mb-2">6 000 – 9 000 PLN</p>
                  <p className="text-sm text-gray-500">(zależna od wielkości organizacji i zakresu analizy)</p>
                </div>
              </div>

              {/* CTA */}
              <button 
                className="w-full bg-mind-content-blue hover:bg-mind-hover-blue text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calendar size={20} />
                Zobacz, czy audyt ma sens w Twojej firmie
              </button>
            </div>

            {/* Process Timeline */}
            <div className="bg-mind-surface-bg-grey rounded-2xl p-8 border border-gray-100">
              <h4 className="text-xl font-bold text-mind-content-primary mb-6">Proces realizacji</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-mind-content-blue text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <p className="font-semibold text-mind-content-primary">Wywiad z zarządem</p>
                    <p className="text-sm text-gray-600">Identyfikacja kluczowych wyzwań (2-3h)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-mind-content-blue text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <p className="font-semibold text-mind-content-primary">Analiza danych i procesów</p>
                    <p className="text-sm text-gray-600">Przegląd dokumentów i metryk (3-5 dni)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-mind-content-blue text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <p className="font-semibold text-mind-content-primary">Prezentacja wyników</p>
                    <p className="text-sm text-gray-600">Dokument + spotkanie decyzyjne (2h)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditSection;