import React from 'react';
import { Clock, Globe, Award, Zap } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const advantages = [
  {
    icon: Clock,
    title: 'Cost Efficiency',
    description: 'Access top-tier Polish developers at 40-60% lower costs than Western Europe, without compromising on quality'
  },
  {
    icon: Globe,
    title: 'Time Zone Overlap',
    description: 'Perfect alignment with EU/UK business hours. Real-time collaboration with your existing teams'
  },
  {
    icon: Award,
    title: 'EU Standards',
    description: 'GDPR compliance, EU work regulations, and Western business culture. No legal complications'
  },
  {
    icon: Zap,
    title: 'Proven Track Record',
    description: 'Hundreds of successful placements for startups, scale-ups and international corporations since 2019'
  }
];

const WhyChooseMeEN = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="why" ref={ref} className="py-24 bg-mind-surface-content-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-semibold text-mind-content-primary mb-6 tracking-tight">
            Why Hire Polish Tech Talent?
          </h2>
          <p className="text-xl text-mind-content-secondary max-w-3xl mx-auto leading-relaxed tracking-tight">
            Combining world-class technical skills with European business standards and cost efficiency
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

export default WhyChooseMeEN;