import React from 'react';
import { Clock, Heart, Award, Zap } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const advantages = [
  {
    icon: Clock,
    title: 'Szybka rekrutacja',
    description: 'Efektywne procesy rekrutacyjne skracające czas pozyskania kandydatów do 2-3 tygodni'
  },
  {
    icon: Heart,
    title: 'Indywidualne podejście',
    description: 'Każdy projekt traktuję jako unikalny. Dostosowuję strategię do specyfiki Twojej firmy'
  },
  {
    icon: Award,
    title: 'Doświadczenie w IT',
    description: 'Głęboka znajomość rynku technologicznego i rozumienie potrzeb firm IT'
  },
  {
    icon: Zap,
    title: 'Proven track record',
    description: 'Setki udanych rekrutacji dla startupów, scale-upów i międzynarodowych korporacji'
  }
];

const WhyChooseMe = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="why" ref={ref} className="py-24 bg-mind-surface-content-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-semibold text-mind-content-primary mb-6 tracking-tight">
            Dlaczego warto ze mną współpracować
          </h2>
          <p className="text-xl text-mind-content-secondary max-w-3xl mx-auto leading-relaxed tracking-tight">
            Łączę doświadczenie w HR z głęboką znajomością nowoczesnych branż technologicznych
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className={`text-center group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-mind-green to-mind-green-26 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="w-10 h-10 text-mind-surface-content-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-mind-content-primary mb-4 tracking-tight">
                  {advantage.title}
                </h3>
                
                <p className="text-mind-content-secondary leading-relaxed tracking-tight">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;