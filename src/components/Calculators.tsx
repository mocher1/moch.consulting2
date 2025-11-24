import React, { useState } from 'react';
import { Calculator, TrendingUp, Heart, Info } from 'lucide-react';

const Calculators = () => {
  // State for first calculator (Recruitment)
  const [avgSalary1, setAvgSalary1] = useState('');
  const [timeToFill1, setTimeToFill1] = useState('');
  const [improvement1, setImprovement1] = useState('');
  const [positions1, setPositions1] = useState('');

  // State for second calculator (Retention)
  const [avgSalary2, setAvgSalary2] = useState('');
  const [turnoverRate2, setTurnoverRate2] = useState('');
  const [reduction2, setReduction2] = useState('');
  const [employees2, setEmployees2] = useState('');

  // State for third calculator (Engagement)
  const [avgSalary3, setAvgSalary3] = useState('');
  const [engagement3, setEngagement3] = useState('');
  const [improvement3, setImprovement3] = useState('');
  const [employees3, setEmployees3] = useState('');

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pl-PL', {
      style: 'currency',
      currency: 'PLN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const calculateRecruitmentSavings = () => {
    const salary = parseFloat(avgSalary1) || 0;
    const currentTime = parseFloat(timeToFill1) || 0;
    const improvementPercent = parseFloat(improvement1) || 0;
    const positions = parseFloat(positions1) || 0;

    const improvedTime = currentTime * (1 - improvementPercent / 100);
    const timeSaved = currentTime - improvedTime;
    const dailyCost = (salary * 12) / 365;
    const savingsPerPosition = timeSaved * dailyCost;
    const totalSavings = savingsPerPosition * positions;

    return totalSavings;
  };

  const calculateRetentionSavings = () => {
    const salary = parseFloat(avgSalary2) || 0;
    const currentTurnover = parseFloat(turnoverRate2) || 0;
    const reductionPercent = parseFloat(reduction2) || 0;
    const employees = parseFloat(employees2) || 0;

    const currentLeavers = employees * (currentTurnover / 100);
    const improvedLeavers = currentLeavers * (1 - reductionPercent / 100);
    const leaversReduced = currentLeavers - improvedLeavers;
    const costPerLeaver = salary * 0.75; // 75% of annual salary as replacement cost
    const totalSavings = leaversReduced * costPerLeaver;

    return totalSavings;
  };

  const calculateEngagementRevenue = () => {
    const salary = parseFloat(avgSalary3) || 0;
    const currentEngagement = parseFloat(engagement3) || 0;
    const improvementPercent = parseFloat(improvement3) || 0;
    const employees = parseFloat(employees3) || 0;

    const engagementIncrease = improvementPercent;
    const productivityIncrease = engagementIncrease * 0.31; // Research shows 31% productivity increase per 10% engagement
    const revenuePerEmployee = salary * 3; // Assume 3x salary as revenue contribution
    const additionalRevenue = (revenuePerEmployee * productivityIncrease / 100) * employees;

    return additionalRevenue;
  };

  const Tooltip = ({ children, text }: { children: React.ReactNode; text: string }) => (
    <div className="relative group">
      {children}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
        {text}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-mind-text-primary mb-6">
          Kalkulatory ROI
        </h1>
        <p className="text-xl text-mind-text-secondary max-w-3xl mx-auto">
          Sprawdź jak dużo możesz zaoszczędzić dzięki lepszej rekrutacji i zarządzaniu talentami
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Calculator 1: Recruitment */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-mind-primary/10 rounded-xl flex items-center justify-center mr-4">
              <Calculator className="w-6 h-6 text-mind-primary" />
            </div>
            <h3 className="text-2xl font-bold text-mind-text-primary">Lepsza rekrutacja</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-mind-text-secondary mb-2">
                Średnia roczna pensja (PLN)
                <Tooltip text="Średnia roczna pensja brutto dla rekrutowanych stanowisk">
                  <Info className="w-4 h-4 inline ml-1 text-gray-400" />
                </Tooltip>
              </label>
              <input
                type="number"
                value={avgSalary1}
                onChange={(e) => setAvgSalary1(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mind-primary focus:border-transparent"
                placeholder="120000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-mind-text-secondary mb-2">
                Obecny czas rekrutacji (dni)
                <Tooltip text="Średni czas od publikacji oferty do podpisania umowy">
                  <Info className="w-4 h-4 inline ml-1 text-gray-400" />
                </Tooltip>
              </label>
              <input
                type="number"
                value={timeToFill1}
                onChange={(e) => setTimeToFill1(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mind-primary focus:border-transparent"
                placeholder="60"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-mind-text-secondary mb-2">
                Poprawa czasu rekrutacji (%)
                <Tooltip text="O ile procent skróci się czas rekrutacji">
                  <Info className="w-4 h-4 inline ml-1 text-gray-400" />
                </Tooltip>
              </label>
              <input
                type="number"
                value={improvement1}
                onChange={(e) => setImprovement1(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mind-primary focus:border-transparent"
                placeholder="30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-mind-text-secondary mb-2">
                Liczba stanowisk rocznie
                <Tooltip text="Ile stanowisk planujesz rekrutować w ciągu roku">
                  <Info className="w-4 h-4 inline ml-1 text-gray-400" />
                </Tooltip>
              </label>
              <input
                type="number"
                value={positions1}
                onChange={(e) => setPositions1(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mind-primary focus:border-transparent"
                placeholder="10"
              />
            </div>

            <div className="bg-mind-primary/5 rounded-lg p-6 mt-8">
              <h4 className="text-lg font-semibold text-mind-text-primary mb-2">Roczne oszczędności:</h4>
              <p className="text-3xl font-bold text-mind-primary">
                {formatCurrency(calculateRecruitmentSavings())}
              </p>
            </div>

            <button className="w-full bg-mind-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-mind-primary/90 transition-colors">
              Skontaktuj się ze mną
            </button>
          </div>
        </div>

        {/* Calculator 2: Retention */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-mind-secondary/10 rounded-xl flex items-center justify-center mr-4">
              <TrendingUp className="w-6 h-6 text-mind-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-mind-text-primary">Mniejsza rotacja</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-mind-text-secondary mb-2">
                Średnia roczna pensja (PLN)
                <Tooltip text="Średnia roczna pensja brutto w zespole">
                  <Info className="w-4 h-4 inline ml-1 text-gray-400" />
                </Tooltip>
              </label>
              <input
                type="number"
                value={avgSalary2}
                onChange={(e) => setAvgSalary2(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mind-secondary focus:border-transparent"
                placeholder="120000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-mind-text-secondary mb-2">
                Obecna rotacja (% rocznie)
                <Tooltip text="Jaki procent zespołu odchodzi w ciągu roku">
                  <Info className="w-4 h-4 inline ml-1 text-gray-400" />
                </Tooltip>
              </label>
              <input
                type="number"
                value={turnoverRate2}
                onChange={(e) => setTurnoverRate2(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mind-secondary focus:border-transparent"
                placeholder="20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-mind-text-secondary mb-2">
                Redukcja rotacji (%)
                <Tooltip text="O ile procent zmniejszy się rotacja">
                  <Info className="w-4 h-4 inline ml-1 text-gray-400" />
                </Tooltip>
              </label>
              <input
                type="number"
                value={reduction2}
                onChange={(e) => setReduction2(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mind-secondary focus:border-transparent"
                placeholder="25"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-mind-text-secondary mb-2">
                Liczba pracowników
                <Tooltip text="Wielkość zespołu/działu">
                  <Info className="w-4 h-4 inline ml-1 text-gray-400" />
                </Tooltip>
              </label>
              <input
                type="number"
                value={employees2}
                onChange={(e) => setEmployees2(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mind-secondary focus:border-transparent"
                placeholder="50"
              />
            </div>

            <div className="bg-mind-secondary/5 rounded-lg p-6 mt-8">
              <h4 className="text-lg font-semibold text-mind-text-primary mb-2">Roczne oszczędności:</h4>
              <p className="text-3xl font-bold text-mind-secondary">
                {formatCurrency(calculateRetentionSavings())}
              </p>
            </div>

            <button className="w-full bg-mind-secondary text-white py-3 px-6 rounded-lg font-semibold hover:bg-mind-secondary/90 transition-colors">
              Skontaktuj się ze mną
            </button>
          </div>
        </div>

        {/* Calculator 3: Engagement */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-mind-pink/10 rounded-xl flex items-center justify-center mr-4">
              <Heart className="w-6 h-6 text-mind-pink" />
            </div>
            <h3 className="text-2xl font-bold text-mind-text-primary">Zaangażowanie i performance</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-mind-text-secondary mb-2">
                Średnia roczna pensja (PLN)
                <Tooltip text="Średnia roczna pensja brutto w zespole">
                  <Info className="w-4 h-4 inline ml-1 text-gray-400" />
                </Tooltip>
              </label>
              <input
                type="number"
                value={avgSalary3}
                onChange={(e) => setAvgSalary3(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mind-pink focus:border-transparent"
                placeholder="120000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-mind-text-secondary mb-2">
                Obecne zaangażowanie (%)
                <Tooltip text="Aktualny poziom zaangażowania zespołu">
                  <Info className="w-4 h-4 inline ml-1 text-gray-400" />
                </Tooltip>
              </label>
              <input
                type="number"
                value={engagement3}
                onChange={(e) => setEngagement3(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mind-pink focus:border-transparent"
                placeholder="60"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-mind-text-secondary mb-2">
                Poprawa zaangażowania (%)
                <Tooltip text="O ile punktów procentowych wzrośnie zaangażowanie">
                  <Info className="w-4 h-4 inline ml-1 text-gray-400" />
                </Tooltip>
              </label>
              <input
                type="number"
                value={improvement3}
                onChange={(e) => setImprovement3(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mind-pink focus:border-transparent"
                placeholder="15"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-mind-text-secondary mb-2">
                Liczba pracowników
                <Tooltip text="Wielkość zespołu/działu">
                  <Info className="w-4 h-4 inline ml-1 text-gray-400" />
                </Tooltip>
              </label>
              <input
                type="number"
                value={employees3}
                onChange={(e) => setEmployees3(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mind-pink focus:border-transparent"
                placeholder="50"
              />
            </div>

            <div className="bg-mind-pink/5 rounded-lg p-6 mt-8">
              <h4 className="text-lg font-semibold text-mind-text-primary mb-2">Dodatkowy przychód:</h4>
              <p className="text-3xl font-bold text-mind-pink">
                {formatCurrency(calculateEngagementRevenue())}
              </p>
            </div>

            <button className="w-full bg-mind-pink text-white py-3 px-6 rounded-lg font-semibold hover:bg-mind-pink/90 transition-colors">
              Skontaktuj się ze mną
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculators;