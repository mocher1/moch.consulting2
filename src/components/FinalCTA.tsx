import React from 'react';
import { Calendar } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const FinalCTA = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section ref={ref} className="py-24 bg-mind-surface-bg-grey">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <h2 className="text-3xl md:text-4xl font-bold text-mind-content-primary mb-8 leading-tight">
            Nie każdy HR potrzebuje fractional.<br />
            Porozmawiajmy i sprawdźmy, czy to ma sens w Twojej firmie.
          </h2>
          
          <button 
            className="bg-mind-content-blue hover:bg-mind-hover-blue text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 mx-auto"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Calendar size={20} />
            Umów rozmowę
          </button>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;