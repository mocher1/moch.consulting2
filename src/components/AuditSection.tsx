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
    <section id="audyt" ref={ref} className="py-32 bg-mind-surface-bg-grey relative overflow-hidden">
      {/* Premium background treatment */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-mind-surface-bg-grey to-mind-light-grey"></div>

       <div className="max-w-7xl mx-auto px-6">
         
         {/* Header */}
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl md:text-6xl font-black text-mind-content-primary mb-8 tracking-tight leading-[1.1]">
             Audyt Decyzji i Zarządzania Ludźmi
           </h2>
          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-mind-content-primary font-medium leading-relaxed">
              Audyt odpowiada na pytanie, dlaczego decyzje dotyczące ludzi nie wspierają dziś biznesu.
            </p>
            <p className="text-lg text-mind-content-secondary leading-relaxed">
              Identyfikuje konkretne decyzje, które realnie blokują organizację.
            </p>
          </div>
         </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
           
           {/* Left Column - Scope & Metrics */}
          <div className={`space-y-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
             
             {/* Scope Section */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-mind-content-primary mb-2">Zakres analizy</h3>
                <div className="w-12 h-1 bg-mind-content-blue rounded-full"></div>
               </div>
              <ul className="space-y-5">
                 {scopeItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-mind-content-blue rounded-full shrink-0 mt-2.5"></div>
                    <span className="text-mind-content-primary text-lg font-medium">{item}</span>
                   </li>
                 ))}
               </ul>
             </div>

             {/* Metrics Section */}
            <div className="bg-mind-content-primary text-white rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">Metryki diagnostyczne</h3>
                  <div className="w-12 h-1 bg-mind-green rounded-full"></div>
                </div>
                
                {/* Metrics Grid */}
                <div className="grid grid-cols-1 gap-4 mb-8">
                  {metrics.map((metric, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-4 border border-white/20">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-mind-green/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-mind-green rounded-full"></div>
                        </div>
                        <span className="text-gray-200 text-base leading-relaxed">{metric}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-white/20">
                  <p className="text-sm text-gray-400 italic leading-relaxed">
                    Metryki analizowane są kontekstowo — nie benchmarkingowo — w celu wskazania konkretnych decyzji do podjęcia.
                  </p>
                </div>
              </div>
             </div>
           </div>

           {/* Right Column - Output & Pricing */}
          <div className={`space-y-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
             
             {/* Output Section */}
            <div className="bg-white rounded-2xl p-10 border-2 border-mind-content-blue shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-mind-content-blue/5 rounded-full blur-xl"></div>
              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-mind-content-primary mb-2">Rezultat audytu</h3>
                  <div className="w-12 h-1 bg-mind-content-blue rounded-full"></div>
                </div>
                
                <div className="space-y-6 mb-10">
                  {outputs.map((output, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-mind-content-blue shrink-0 mt-0.5" />
                      <span className="text-mind-content-primary text-lg font-medium leading-relaxed">{output}</span>
                    </div>
                  ))}
                </div>
                
                {/* Pricing */}
                <div className="bg-mind-surface-bg-grey rounded-xl p-8 mb-10">
                  <div className="text-center">
                    <p className="text-sm text-mind-content-secondary mb-3 font-medium">Inwestycja:</p>
                    <p className="text-4xl font-black text-mind-content-primary mb-3">6 000 – 9 000 PLN</p>
                    <p className="text-sm text-gray-500 leading-relaxed">(zależna od wielkości organizacji i zakresu analizy)</p>
                  </div>
                </div>

                {/* CTA */}
                <button 
                  className="w-full bg-mind-content-blue hover:bg-mind-hover-blue text-white px-8 py-5 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Calendar size={20} />
                  Zobacz, czy audyt ma sens w Twojej firmie
                </button>
              </div>
             </div>

             {/* Process Timeline */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="mb-6">
                <h4 className="text-xl font-bold text-mind-content-primary mb-2">Proces realizacji</h4>
                <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
              </div>
              <div className="space-y-6">
                 <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-mind-content-blue text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                   <div>
                     <p className="font-semibold text-mind-content-primary">Wywiad z zarządem</p>
                     <p className="text-sm text-gray-600">Identyfikacja kluczowych wyzwań (2-3h)</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-mind-content-blue text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                   <div>
                     <p className="font-semibold text-mind-content-primary">Analiza danych i procesów</p>
                     <p className="text-sm text-gray-600">Przegląd dokumentów i metryk (3-5 dni)</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-mind-content-blue text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
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