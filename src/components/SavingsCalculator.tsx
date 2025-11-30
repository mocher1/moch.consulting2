import React, { useState } from 'react';
import { DollarSign, ArrowRight, RefreshCw, Briefcase, TrendingUp } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const SavingsCalculator = () => {
  const [ref, isVisible] = useIntersectionObserver();
  
  // WARTOŚCI DOMYŚLNE
  // Zakładamy, że Dyrektor HR kosztuje firmę ok. 28k miesięcznie (brutto brutto)
  const [directorCostMonthly, setDirectorCostMonthly] = useState(28000); 
  // Zakładamy, że firma wydaje 50k rocznie na agencje
  const [agencyBudgetYearly, setAgencyBudgetYearly] = useState(50000); 
  
  // STAŁE
  const MOCH_FRACTIONAL_MONTHLY = 12000; // Twoja stawka ryczałtowa (netto B2B)
  
  // OBLICZENIA
  const fullTimeCostYearly = directorCostMonthly * 12;
  const fractionalCostYearly = MOCH_FRACTIONAL_MONTHLY * 12;
  
  // Zakładamy, że dzięki Tobie zredukują wydatki na agencje o 80% (robisz to in-house)
  const agencySavings = agencyBudgetYearly * 0.8; 
  
  const totalSavings = (fullTimeCostYearly - fractionalCostYearly) + agencySavings;

  return (
    <section ref={ref} className="py-24 bg-mind-surface-bg-grey relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* NAGŁÓWEK SEKCYJNY */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-mind-content-primary mb-6">
            Matematyka nie kłamie: <br/>
            <span className="text-mind-content-blue">Etat vs. Fractional</span>
          </h2>
          <p className="text-xl text-mind-content-secondary max-w-3xl mx-auto leading-relaxed">
            Zatrudniając Seniora na etat, płacisz za "obecność". Współpracując ze mną, płacisz za <strong>efekt</strong> – bez ukrytych kosztów, urlopów i L4.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* KOLUMNA 1: SUWAKI (INPUTS) */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-10 text-mind-content-primary flex items-center gap-3">
              <RefreshCw size={24} className="text-mind-content-blue"/>
              Dostosuj parametry Twojej firmy:
            </h3>

            {/* SUWAK 1: KOSZT DYREKTORA */}
            <div className="mb-12">
              <div className="flex justify-between mb-4 items-end">
                <label className="font-medium text-gray-700 text-lg">
                  Rynkowy koszt Dyrektora HR
                  <span className="block text-xs text-gray-400 font-normal mt-1">(Pełny koszt pracodawcy / mies.)</span>
                </label>
                <span className="font-bold text-2xl text-mind-content-primary whitespace-nowrap">
                  {directorCostMonthly.toLocaleString()} PLN
                </span>
              </div>
              <input 
                type="range" 
                min="15000" 
                max="45000" 
                step="1000" 
                value={directorCostMonthly}
                onChange={(e) => setDirectorCostMonthly(Number(e.target.value))}
                className="w-full h-3 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-mind-content-blue hover:bg-gray-200 transition-colors"
              />
              <p className="text-sm text-gray-500 mt-3 flex items-start gap-2">
                <Briefcase size={16} className="shrink-0 mt-0.5 text-gray-400"/>
                Ile musiałbyś zapłacić ekspertowi z 10-letnim doświadczeniem (GOG, PepsiCo) na pełen etat?
              </p>
            </div>

            {/* SUWAK 2: AGENCJE */}
            <div>
              <div className="flex justify-between mb-4 items-end">
                <label className="font-medium text-gray-700 text-lg">
                  Wydatki na agencje
                  <span className="block text-xs text-gray-400 font-normal mt-1">(Rocznie)</span>
                </label>
                <span className="font-bold text-2xl text-mind-content-primary whitespace-nowrap">
                  {agencyBudgetYearly.toLocaleString()} PLN
                </span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="150000" 
                step="5000" 
                value={agencyBudgetYearly}
                onChange={(e) => setAgencyBudgetYearly(Number(e.target.value))}
                className="w-full h-3 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-mind-green hover:bg-gray-200 transition-colors"
              />
              <p className="text-sm text-gray-500 mt-3 flex items-start gap-2">
                <TrendingUp size={16} className="shrink-0 mt-0.5 text-gray-400"/>
                Prowizje headhunterów, które zredukuję robiąc rekrutację wewnętrznie.
              </p>
            </div>
          </div>

          {/* KOLUMNA 2: WYNIK (RESULT) */}
          <div className="bg-mind-content-primary text-white p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col justify-between">
             {/* Tło dekoracyjne */}
             <div className="absolute top-0 right-0 w-80 h-80 bg-mind-content-blue rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-mind-green rounded-full blur-[80px] opacity-10 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-300 mb-2">Zostaje w Twojej firmie rocznie:</h3>
              <div className="text-5xl md:text-6xl font-bold text-mind-green mb-10 tracking-tight">
                {totalSavings > 0 ? totalSavings.toLocaleString() : 0} PLN
              </div>

              <div className="space-y-4 mb-10">
                {/* Linia 1: Koszt Etatu */}
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <span className="text-gray-300 text-sm md:text-base">Pełny etat Dyrektora:</span>
                  </div>
                  <span className="text-gray-300 font-medium whitespace-nowrap">~{Math.round(fullTimeCostYearly).toLocaleString()} zł</span>
                </div>

                {/* Linia 2: Koszt Moch */}
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-mind-green"></div>
                    <span className="text-white font-bold text-sm md:text-base">Model Fractional (Moch):</span>
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
              Umów rozmowę o finansach
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform text-mind-content-blue"/>
            </button>
            
            <p className="text-[10px] text-center text-gray-500 mt-4 opacity-60">
              *Szacunki orientacyjne. Ostateczna wycena zależy od zakresu współpracy i potrzeb Twojej firmy.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;