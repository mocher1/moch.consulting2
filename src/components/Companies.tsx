import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const companies = [
  { name: 'EY', logo: '/src/assets/logos/ey.png', className: 'scale-50' },
  { name: 'GOG', logo: '/src/assets/logos/gog.png' },
  { name: 'PepsiCo', logo: '/src/assets/logos/pepsico.png' },
  { name: 'Nyra Health', logo: '/src/assets/logos/nyra health.png' },
  { name: 'PhotoAID', logo: '/src/assets/logos/photoaid.jpeg' },
  { name: 'Hilti', logo: '/src/assets/logos/hilti wlasciwe.png', className: 'scale-75' },
  { name: 'Vilgain', logo: '/src/assets/logos/vilgain.png' },
  { name: 'Wiedza i Praktyka', logo: '/src/assets/logos/wiedza i praktyka.jpeg', className: 'scale-90' }
];

const Companies = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % companies.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="py-24 bg-mind-surface-bg-grey">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-semibold text-mind-content-primary mb-6 tracking-tight">
            Wybrane firmy, z którymi pracowałem
          </h2>
          <p className="text-xl text-mind-content-secondary max-w-3xl mx-auto leading-relaxed tracking-tight">
            Zbierałem doświadczenie w organizacjach różnych wielkości - od startupów po międzynarodowe korporacje.
          </p>
        </div>
        
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Desktop slider */}
          <div className="hidden md:block overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {[...companies, ...companies, ...companies].map((company, index) => (
                <div key={index} className="flex-shrink-0 w-1/3 px-8">
                  <div className="bg-mind-surface-content-white rounded-2xl p-8 border border-mind-stroke-border-grey hover:border-mind-content-blue hover:shadow-lg transition-all duration-300 group">
                    <div className="h-24 flex items-center justify-center">
                      <img
                        src={company.logo}
                        alt={`Logo ${company.name}`}
                        className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile grid */}
          <div className="md:hidden grid grid-cols-2 gap-4">
            {companies.map((company, index) => (
              <div key={index} className="bg-mind-surface-content-white rounded-2xl p-6 border border-mind-stroke-border-grey">
                <div className="h-16 flex items-center justify-center">
                  <img
                    src={company.logo}
                    alt={`Logo ${company.name}`}
                    className="w-full h-full object-contain filter grayscale opacity-60"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Dots indicator for desktop */}
          <div className="hidden md:flex justify-center mt-8 space-x-2">
            {companies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-mind-content-blue' : 'bg-mind-stroke-border-grey hover:bg-mind-content-secondary'
                }`}
                aria-label={`Przejdź do slajdu ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;