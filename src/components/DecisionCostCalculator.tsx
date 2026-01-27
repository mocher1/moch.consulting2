import React, { useState } from 'react';
import { ArrowRight, RefreshCw, AlertTriangle, TrendingUp, Calendar } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const DecisionCostCalculator = () => {
  const [ref, isVisible] = useIntersectionObserver();
  
  // Decision-focused parameters
  const [delayedHiringWeeks, setDelayedHiringWeeks] = useState(8); // weeks of delayed hiring decisions
  const [averageSalary, setAverageSalary] = useState(15000); // monthly salary of delayed position
  const [wrongHires, setWrongHires] = useState(2); // number of wrong hiring decisions per year
  const [founderTimeHours, setFounderTimeHours] = useState(10); // hours per week founder spends on people decisions
  const [founderHourlyRate, setFounderHourlyRate] = useState(500); // founder's hourly opportunity cost
  
  // CALCULATIONS
  const delayedHiringCost = (delayedHiringWeeks / 4) * averageSalary; // cost of delayed hiring
  const wrongHireCost = wrongHires * (averageSalary * 6); // 6 months cost per wrong hire
  const founderOpportunityCost = founderTimeHours * 52 * founderHourlyRate; // yearly founder time cost
  
  const totalAnnualCost = delayedHiringCost + wrongHireCost + founderOpportunityCost;

  return (
    <main className="pt-14 min-h-screen bg-mind-surface-content-white font-sans">
      <section ref={ref} className="py-24 bg-mind-surface-bg-grey relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          {/* HEADER */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-mind-content-primary mb-6 tracking-tight">
              Kalkulator kosztu decyzji dotyczących ludzi
            </h1>
            <p className="text-xl text-mind-content-secondary max-w-4xl mx-auto leading-relaxed">
              To narzędzie pomaga oszacować koszt opóźnień i błędnych decyzji personalnych.<br />
              <strong className="text-mind-content-primary">Nie zastępuje audytu — pokazuje skalę problemu.</strong>
            </p>
          </div>

          <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* LEFT COLUMN: INPUTS */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-10 text-mind-content-primary flex items-center gap-3">
                <RefreshCw size={24} className="text-mind-content-blue"/>
                Parametry decyzyjne w Twojej firmie:
              </h3>

              {/* SLIDER 1: Delayed Hiring */}
              <div className="mb-8">
                <div className="flex justify-between mb-4 items-end">
                  <label className="font-medium text-gray-700 text-lg">
                    Opóźnienia w rekrutacji
                    <span className="block text-xs text-gray-400 font-normal mt-1">(Średnie opóźnienie decyzji o zatrudnieniu)</span>
                  </label>
                  <span className="font-bold text-2xl text-mind-content-primary whitespace-nowrap">
                    {delayedHiringWeeks} tygodni
                  </span>
                </div>
                <input 
                  type="range" 
                  min="2" 
                  max="20" 
                  step="1" 
                  value={delayedHiringWeeks}
                  onChange={(e) => setDelayedHiringWeeks(Number(e.target.value))}
                  className="w-full h-3 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-mind-content-blue hover:bg-gray-200 transition-colors"
                />
                <p className="text-sm text-gray-500 mt-3 flex items-start gap-2">
                  <AlertTriangle size={16} className="shrink-0 mt-0.5 text-gray-400"/>
                  Czas od "potrzebujemy kogoś" do "mamy kandydata".
                </p>
              </div>

              {/* SLIDER 2: Average Salary */}
              <div className="mb-8">
                <div className="flex justify-between mb-4 items-end">
                  <label className="font-medium text-gray-700 text-lg">
                    Średnia pensja stanowiska
                    <span className="block text-xs text-gray-400 font-normal mt-1">(Miesięczny koszt pracownika)</span>
                  </label>
                  <span className="font-bold text-2xl text-mind-content-primary whitespace-nowrap">
                    {averageSalary.toLocaleString()} PLN
                  </span>
                </div>
                <input 
                  type="range" 
                  min="8000" 
                  max="30000" 
                  step="1000" 
                  value={averageSalary}
                  onChange={(e) => setAverageSalary(Number(e.target.value))}
                  className="w-full h-3 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-mind-content-blue hover:bg-gray-200 transition-colors"
                />
              </div>

              {/* SLIDER 3: Wrong Hires */}
              <div className="mb-8">
                <div className="flex justify-between mb-4 items-end">
                  <label className="font-medium text-gray-700 text-lg">
                    Błędne zatrudnienia
                    <span className="block text-xs text-gray-400 font-normal mt-1">(Rocznie - osoby, które się nie sprawdziły)</span>
                  </label>
                  <span className="font-bold text-2xl text-mind-content-primary whitespace-nowrap">
                    {wrongHires} osoby
                  </span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="8" 
                  step="1" 
                  value={wrongHires}
                  onChange={(e) => setWrongHires(Number(e.target.value))}
                  className="w-full h-3 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-red-500 hover:bg-gray-200 transition-colors"
                />
              </div>

              {/* SLIDER 4: Founder Time */}
              <div>
                <div className="flex justify-between mb-4 items-end">
                  <label className="font-medium text-gray-700 text-lg">
                    Czas foundera na decyzje HR
                    <span className="block text-xs text-gray-400 font-normal mt-1">(Godzin tygodniowo)</span>
                  </label>
                  <span className="font-bold text-2xl text-mind-content-primary whitespace-nowrap">
                    {founderTimeHours}h/tydz
                  </span>
                </div>
                <input 
                  type="range" 
                  min="2" 
                  max="25" 
                  step="1" 
                  value={founderTimeHours}
                  onChange={(e) => setFounderTimeHours(Number(e.target.value))}
                  className="w-full h-3 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-mind-green hover:bg-gray-200 transition-colors"
                />
                <p className="text-sm text-gray-500 mt-3 flex items-start gap-2">
                  <TrendingUp size={16} className="shrink-0 mt-0.5 text-gray-400"/>
                  Czas, który mógłby poświęcić na rozwój biznesu.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: RESULTS */}
            <div className="bg-mind-content-primary text-white p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col justify-between">
               {/* Background decoration */}
               <div className="absolute top-0 right-0 w-80 h-80 bg-mind-content-blue rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-mind-green rounded-full blur-[80px] opacity-10 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
              
              <div>
                <h3 className="text-base font-medium text-gray-400 mb-6">Szacowany roczny koszt opóźnionych lub błędnych decyzji:</h3>
                <div className="text-6xl md:text-8xl font-black text-white mb-16 tracking-tight leading-none">
                  {totalAnnualCost > 0 ? totalAnnualCost.toLocaleString() : 0} PLN
                </div>

                <div className="space-y-3 mb-12">
                  {/* Cost breakdown */}
                  <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                      <span className="text-gray-300 text-sm md:text-base">Opóźniona rekrutacja:</span>
                    </div>
                    <span className="text-white font-bold whitespace-nowrap">{Math.round(delayedHiringCost).toLocaleString()} zł</span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                      <span className="text-gray-300 text-sm md:text-base">Błędne zatrudnienia:</span>
                    </div>
                    <span className="text-white font-bold whitespace-nowrap">{Math.round(wrongHireCost).toLocaleString()} zł</span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-white/20 rounded-lg border border-white/30">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-mind-green"></div>
                      <span className="text-white font-bold text-sm md:text-base">Koszt alternatywny foundera:</span>
                    </div>
                    <span className="text-white font-bold whitespace-nowrap">{Math.round(founderOpportunityCost).toLocaleString()} zł</span>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="space-y-6">
                <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20 mb-8">
                  <p className="text-xl font-medium mb-4 text-center">
                    Chcesz zrozumieć, skąd dokładnie biorą się te koszty?
                  </p>
                  <p className="text-base text-gray-300 text-center leading-relaxed">
                    Audyt Decyzji i Zarządzania Ludźmi pozwala to rozłożyć na konkretne decyzje.
                  </p>
                </div>

                <button 
                  onClick={() => {
                    const element = document.getElementById('audyt');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-white text-mind-content-primary font-bold py-5 rounded-xl hover:bg-gray-100 transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 group mb-4"
                >
                  Zobacz audyt
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                </button>

                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-transparent border-2 border-white/50 text-white font-semibold py-5 rounded-xl hover:bg-white hover:text-mind-content-primary transition-all flex items-center justify-center gap-3 group"
                >
                  <Calendar size={20} />
                  Umów rozmowę
                </button>
              </div>
              
              <p className="text-xs text-center text-gray-500 mt-6 opacity-60">
                *Szacunki oparte na typowych kosztach decyzji w firmach 20-100 osób.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default DecisionCostCalculator;