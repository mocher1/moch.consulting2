import React from 'react';
import { Calculator, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CalculatorsPage = () => {
  return (
    <div className="min-h-screen bg-mind-surface-content-white pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-mind-content-blue hover:text-mind-hover-blue transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Powrót do strony głównej
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-mind-content-primary mb-6">
            Kalkulatory HR
          </h1>
          <p className="text-xl text-mind-content-secondary leading-relaxed">
            Narzędzia do szybkiego oszacowania kosztów i oszczędności w procesach HR.
          </p>
        </div>

        {/* Calculator Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-mind-stroke-border-grey shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-mind-content-blue mb-6">
              <Calculator size={24} />
            </div>
            <h3 className="text-2xl font-bold text-mind-content-primary mb-4">
              Kalkulator Oszczędności
            </h3>
            <p className="text-mind-content-secondary mb-6">
              Porównaj koszty zatrudnienia Senior HR Managera na etat vs. model Fractional HR.
            </p>
            <Link 
              to="/#savings" 
              className="inline-flex items-center gap-2 bg-mind-content-blue hover:bg-mind-hover-blue text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Użyj kalkulatora
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-mind-stroke-border-grey shadow-sm opacity-60">
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 mb-6">
              <Calculator size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-400 mb-4">
              Kalkulator ROI Rekrutacji
            </h3>
            <p className="text-gray-400 mb-6">
              Oblicz zwrot z inwestycji w profesjonalne procesy rekrutacyjne.
            </p>
            <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-500 px-6 py-3 rounded-xl font-semibold cursor-not-allowed">
              Wkrótce dostępne
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorsPage;