import React from 'react';
import { Search, Cog, TrendingUp } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const services = [
  {
    icon: Search,
    title: 'Tech Sourcing',
    description: 'Direct search for software engineers, DevOps, data scientists, and tech leads. From junior to senior levels across all tech stacks.',
    effect: 'faster hiring with higher quality candidates'
  },
  {
    icon: Cog,
    title: 'Full-Cycle Recruitment',
    description: 'End-to-end recruitment process: job posting, screening, technical interviews, and offer negotiation. Lean methodology for efficiency.',
    effect: 'streamlined process and reduced time-to-hire'
  },
  {
    icon: TrendingUp,
    title: 'Market Intelligence',
    description: 'Salary benchmarking, talent mapping, and competitive analysis for European tech markets. Strategic insights for hiring decisions.',
    effect: 'data-driven recruitment strategy'
  }
];

const ServicesEN = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="services" ref={ref} className="py-24 bg-mind-surface-content-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-semibold text-mind-content-primary mb-6 tracking-tight">
            My Services
          </h2>
          <p className="text-xl text-mind-content-secondary max-w-3xl mx-auto leading-relaxed tracking-tight">
            Combining years of recruitment experience with deep tech market knowledge. I help companies hire, develop, and retain talent in ways that truly support business goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-16 h-16 text-mind-content-blue group-hover:text-mind-green transition-colors duration-300 group-hover:scale-110 transition-transform" />
                </div>
                
                <h3 className="text-2xl font-semibold text-mind-content-primary mb-4 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-mind-content-secondary leading-relaxed tracking-tight mb-4">
                  {service.description}
                </p>
                <p className="text-mind-content-primary tracking-tight">
                  <strong>Result:</strong> {service.effect}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesEN;