import React, { useEffect, useState } from 'react';
import { Clock, Users, Briefcase, TrendingUp, Award } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// Funkcja pomocnicza do animacji liczb
const Counter = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useIntersectionObserver();

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (easeOutExpo) dla płynniejszego efektu
      const ease = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(end * ease));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return (
    <span ref={ref} className="font-bold tabular-nums">
      {count}{suffix}
    </span>
  );
};

const stats = [
  {
    icon: Clock,
    value: 40,
    suffix: '%',
    label: 'Krótszy czas rekrutacji',
    subtext: 'Redukcja Time-to-Hire (z 63 do 38 dni) dzięki optymalizacji procesów.'
  },
  {
    icon: Briefcase,
    value: 10,
    suffix: '+',
    label: 'Lat doświadczenia',
    subtext: 'Praca dla gigantów rynku: GOG.com, PepsiCo, EY.'
  },
  {
    icon: Users,
    value: 45,
    suffix: '+',
    label: 'Ról rocznie',
    subtext: 'Średnia liczba zamykanych procesów jako Senior Recruiter.'
  },
  {
    icon: Award,
    value: 20,
    suffix: '+',
    label: 'Warsztatów Lean',
    subtext: 'Przeprowadzonych szkoleń z optymalizacji i Change Managementu.'
  }
];

const Testimonials = () => { // Nazwa komponentu została dla kompatybilności z App.tsx
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="results" ref={ref} className="py-24 bg-mind-content-primary text-white relative overflow-hidden">
      {/* Tło dekoracyjne */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute right-0 top-0 w-96 h-96 bg-mind-content-blue rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-mind-green rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Nie obiecuję. <span className="text-mind-green">Dowożę wyniki.</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            W HR liczy się empatia, ale w biznesie liczą się efekty. Oto liczby, które stoją za moim doświadczeniem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group ${
                   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 bg-mind-content-blue/20 rounded-xl flex items-center justify-center text-mind-content-blue mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={24} className="text-mind-green" />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                
                <p className="text-lg font-semibold text-gray-200 mb-3">
                  {stat.label}
                </p>
                
                <p className="text-sm text-gray-400 leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;