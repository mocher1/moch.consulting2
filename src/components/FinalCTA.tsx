import React from 'react';
import { Calendar } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const FinalCTA = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section ref={ref} className="py-32 bg-mind-surface-bg-grey">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <h2 className="text-4xl md:text-5xl font-black text-mind-content-primary mb-12 leading-tight tracking-tight">
            Nie każdy HR potrzebuje fractional.<br />
            Porozmawiajmy i sprawdźmy, czy to ma sens w Twojej firmie.
          </h2>
          
          <div className="pt-8">
            <button 
              className="bg-mind-content-blue hover:bg-mind-hover-blue text-white px-12 py-5 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 mx-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar size={20} />
              Umów rozmowę
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;