import React, { useState } from 'react';
import { ArrowRight, RefreshCw, Briefcase, TrendingUp } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const SavingsCalculator = () => {
  const [ref, isVisible] = useIntersectionObserver();
  
  // NOWE WARTOŚCI DOMYŚLNE (Bardziej rynkowe dla MŚP)
  // HR Manager (ok. 12-14k brutto na umowie) -> koszt pracodawcy ok. 18-20k
  const [managerCostMonthly, setManagerCostMonthly] = useState(18000); 
  // Budżet na agencje (nieco mniejszy, bo celujemy w mniejsze firmy)
  const [agencyBudgetYearly, setAgencyBudgetYearly] = useState(30000); 
  
  // TWOJA NOWA STAWKA "LONG-TERM"
  const MOCH_FRACTIONAL_MONTHLY = 7000; // 7k netto to bezpieczny "środek" (między 6 a 8)
  
  // OBLICZENIA
  const fullTimeCostYearly = managerCostMonthly * 12;
  const fractionalCostYearly = MOCH_FRACTIONAL_MONTHLY * 12;
  
  // Zakładamy redukcję kosztów agencji (nadal 80% - to Twój atut)
  const agencySavings = agencyBudgetYearly * 0.8; 
  
  const totalSavings = (fullTimeCostYearly - fractionalCostYearly) + agencySavings;

  return (
    <section ref={ref} className="py-24 bg-mind-surface-bg-grey relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* NAGŁÓWEK SEKCYJNY */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-mind-content-primary mb-6">
            Policzmy to uczciwie: <br/>
            <span className="text-mind-content-blue">Etat vs. mój abonament</span>
          </h2>
          <p className="text-xl text-mind-content-secondary max-w-3xl mx-auto leading-relaxed">
            Nie potrzebujesz HR Managera na pełen etat, żeby mieć poukładane procesy. <br/>
            W modelu abonamentowym zyskujesz Eksperta w cenie Juniora.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* KOLUMNA 1: SUWAKI (INPUTS) */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-10 text-mind-content-primary flex items-center gap-3">
              <RefreshCw size={24} className="text-mind-content-blue"/>
              Twoje obecne koszty:
            </h3>

            {/* SUWAK 1: KOSZT MANAGERA */}
            <div className="mb-12">
              <div className="flex justify-between mb-4 items-end">
                <label className="font-medium text-gray-700 text-lg">
                  Koszt HR Managera
                  <span className="block text-xs text-gray-400 font-normal mt-1">(Pełny koszt pracodawcy / mies.)</span>
                </label>
                <span className="font-bold text-2xl text-mind-content-primary whitespace-nowrap">
                  {managerCostMonthly.toLocaleString()} PLN
                </span>
              </div>
              <input 
                type="range" 
                min="10000" 
                max="30000" 
                step="1000" 
                value={managerCostMonthly}
                onChange={(e) => setManagerCostMonthly(Number(e.target.value))}
                className="w-full h-3 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-mind-content-blue hover:bg-gray-200 transition-colors"
              />
              <p className="text-sm text-gray-500 mt-3 flex items-start gap-2">
                <Briefcase size={16} className="shrink-0 mt-0.5 text-gray-400"/>
                Rynkowa pensja + ZUS + sprzęt + urlopy + L4.
              </p>
            </div>

            {/* SUWAK 2: AGENCJE */}
            <div>
              <div className="flex justify-between mb-4 items-end">
                <label className="font-medium text-gray-700 text-lg">
                  Wydatki na rekrutacje
                  <span className="block text-xs text-gray-400 font-normal mt-1">(Rocznie na agencje)</span>
                </label>
                <span className="font-bold text-2xl text-mind-content-primary whitespace-nowrap">
                  {agencyBudgetYearly.toLocaleString()} PLN
                </span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100000" 
                step="5000" 
                value={agencyBudgetYearly}
                onChange={(e) => setAgencyBudgetYearly(Number(e.target.value))}
                className="w-full h-3 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-mind-green hover:bg-gray-200 transition-colors"
              />
              <p className="text-sm text-gray-500 mt-3 flex items-start gap-2">
                <TrendingUp size={16} className="shrink-0 mt-0.5 text-gray-400"/>
                Prowizje, które zredukuję, przejmując rekrutację.
              </p>
            </div>
          </div>

          {/* KOLUMNA 2: WYNIK (RESULT) */}
          <div className="bg-mind-content-primary text-white p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col justify-between">
             {/* Tło dekoracyjne */}
             <div className="absolute top-0 right-0 w-80 h-80 bg-mind-content-blue rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-mind-green rounded-full blur-[80px] opacity-10 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-300 mb-2">Rocznie zostanie w firmie:</h3>
              <div className="text-5xl md:text-6xl font-bold text-mind-green mb-10 tracking-tight">
                {totalSavings > 0 ? totalSavings.toLocaleString() : 0} PLN
              </div>

              <div className="space-y-4 mb-10">
                {/* Linia 1: Koszt Etatu */}
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <span className="text-gray-300 text-sm md:text-base">Etat (HR Manager):</span>
                  </div>
                  <span className="text-gray-300 font-medium whitespace-nowrap">~{Math.round(fullTimeCostYearly).toLocaleString()} zł</span>
                </div>

                {/* Linia 2: Koszt Moch */}
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-mind-green"></div>
                    <span className="text-white font-bold text-sm md:text-base"> Mój Abonament:</span>
                  </div>
                  <span className="text-white font-bold whitespace-nowrap">{fractionalCostYearly.toLocaleString()} zł</span>
                </div>

                {/* Linia 3: Bonus Agencje */}
                <div className="flex justify-between items-center p-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-mind-content-blue"></div>
                    <span className="text-gray-400 text-sm md:text-base">Oszczędność na agencjach:</span>
                  </div>
                  <span className="text-mind-content-blue font-medium whitespace-nowrap">+{Math.round(agencySavings).toLocaleString()} zł</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-white text-mind-content-primary font-bold py-4 rounded-xl hover:bg-gray-100 transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              Zapytaj o dostępność
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform text-mind-content-blue"/>
            </button>
            
            <p className="text-[10px] text-center text-gray-500 mt-4 opacity-60">
              *Szacunki dla modelu abonamentowego (ok. 1 dzień/tydz).
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;