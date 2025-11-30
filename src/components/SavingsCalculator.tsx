import React, { useState } from 'react';
import { DollarSign, RefreshCw, ArrowRight, Calculator, TrendingUp } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const SavingsCalculator = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [hrSalary, setHrSalary] = useState(18000); // Monthly gross salary
  const [agencyBudget, setAgencyBudget] = useState(40000); // Annual agency budget

  // Math Logic
  const fullTimeCostYearly = (hrSalary * 12) * 1.20; // 20% employer costs (ZUS, etc.)
  const fractionalCostYearly = 9000 * 12; // 9,000 PLN/month flat fee
  const agencySavings = agencyBudget * 0.8; // 80% reduction in agency dependency
  const totalSavings = (fullTimeCostYearly - fractionalCostYearly) + agencySavings;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pl-PL', {
      style: 'currency',
      currency: 'PLN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-mind-surface-bg-grey to-mind-surface-content-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-semibold text-mind-content-primary mb-6 tracking-tight">
            Ile możesz zaoszczędzić?
          </h2>
          <p className="text-xl text-mind-content-secondary max-w-3xl mx-auto leading-relaxed tracking-tight">
            Porównaj koszt pełnoetatowego Senior HR z elastycznym wsparciem Fractional HR
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-mind-surface-content-white rounded-3xl shadow-xl border border-mind-stroke-border-grey overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              
              {/* LEFT SIDE - INPUTS */}
              <div className="p-8 md:p-12 bg-white">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-mind-content-blue/10 rounded-xl flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-mind-content-blue" />
                  </div>
                  <h3 className="text-2xl font-semibold text-mind-content-primary tracking-tight">
                    Twoje parametry
                  </h3>
                </div>

                <div className="space-y-8">
                  {/* HR Salary Slider */}
                  <div>
                    <label className="block text-sm font-semibold text-mind-content-primary mb-4 tracking-tight">
                      Rynkowa pensja Senior HR (Miesięcznie Brutto)
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min="8000"
                        max="30000"
                        step="1000"
                        value={hrSalary}
                        onChange={(e) => setHrSalary(Number(e.target.value))}
                        className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        style={{
                          background: `linear-gradient(to right, #0069ff 0%, #0069ff ${((hrSalary - 8000) / (30000 - 8000)) * 100}%, #e5e7eb ${((hrSalary - 8000) / (30000 - 8000)) * 100}%, #e5e7eb 100%)`
                        }}
                      />
                      <div className="flex justify-between text-xs text-mind-content-secondary mt-2">
                        <span>8 000 PLN</span>
                        <span className="font-bold text-mind-content-blue text-lg">
                          {formatCurrency(hrSalary)}
                        </span>
                        <span>30 000 PLN</span>
                      </div>
                    </div>
                  </div>

                  {/* Agency Budget Slider */}
                  <div>
                    <label className="block text-sm font-semibold text-mind-content-primary mb-4 tracking-tight">
                      Roczny budżet na agencje rekrutacyjne
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min="0"
                        max="100000"
                        step="5000"
                        value={agencyBudget}
                        onChange={(e) => setAgencyBudget(Number(e.target.value))}
                        className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        style={{
                          background: `linear-gradient(to right, #2dca8c 0%, #2dca8c ${(agencyBudget / 100000) * 100}%, #e5e7eb ${(agencyBudget / 100000) * 100}%, #e5e7eb 100%)`
                        }}
                      />
                      <div className="flex justify-between text-xs text-mind-content-secondary mt-2">
                        <span>0 PLN</span>
                        <span className="font-bold text-mind-green text-lg">
                          {formatCurrency(agencyBudget)}
                        </span>
                        <span>100 000 PLN</span>
                      </div>
                    </div>
                  </div>

                  {/* Reset Button */}
                  <button
                    onClick={() => {
                      setHrSalary(18000);
                      setAgencyBudget(40000);
                    }}
                    className="flex items-center gap-2 text-mind-content-secondary hover:text-mind-content-blue transition-colors text-sm"
                  >
                    <RefreshCw size={16} />
                    Resetuj do wartości domyślnych
                  </button>
                </div>
              </div>

              {/* RIGHT SIDE - RESULTS */}
              <div className="p-8 md:p-12 bg-gradient-to-br from-mind-content-blue to-mind-green text-white relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      Twój szacowany zysk roczny
                    </h3>
                  </div>

                  {/* Main Result */}
                  <div className="mb-8">
                    <div className="text-5xl md:text-6xl font-bold mb-2 text-white">
                      {formatCurrency(totalSavings)}
                    </div>
                    <p className="text-white/80 text-lg">
                      oszczędności rocznie
                    </p>
                  </div>

                  {/* Breakdown */}
                  <div className="space-y-3 mb-8 bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/80">Koszt Senior HR (z narzutami):</span>
                      <span className="font-semibold text-red-200">- {formatCurrency(fullTimeCostYearly)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/80">Koszt Moch Consulting:</span>
                      <span className="font-semibold text-red-200">- {formatCurrency(fractionalCostYearly)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/80">Oszczędność na agencjach:</span>
                      <span className="font-semibold text-green-200">+ {formatCurrency(agencySavings)}</span>
                    </div>
                    <div className="border-t border-white/20 pt-3 mt-3">
                      <div className="flex justify-between items-center font-bold">
                        <span>Łączna oszczędność:</span>
                        <span className="text-green-200">+ {formatCurrency(totalSavings)}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-white text-mind-content-blue px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3 group"
                  >
                    Porozmawiajmy o liczbach
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom slider styles */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #ffffff;
          border: 3px solid #0069ff;
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #ffffff;
          border: 3px solid #0069ff;
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
};

export default SavingsCalculator;