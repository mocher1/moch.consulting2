import React from 'react';
import { TrendingUp, Clock, Globe, Award } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const stats = [
  {
    icon: Clock,
    number: '38',
    unit: 'Days',
    label: 'Average Time-to-Hire',
    description: '40% faster than industry average'
  },
  {
    icon: TrendingUp,
    number: '95%',
    unit: 'Success',
    label: 'Placement Success Rate',
    description: 'Candidates who pass probation'
  },
  {
    icon: Globe,
    number: '10+',
    unit: 'Years',
    label: 'Experience',
    description: 'In tech recruitment across EU'
  },
  {
    icon: Award,
    number: 'C1',
    unit: 'English',
    label: 'Language Proficiency',
    description: 'All candidates verified'
  }
];

const TestimonialsEN = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-gradient-to-b from-mind-surface-bg-grey to-mind-surface-content-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-semibold text-mind-content-primary mb-6 tracking-tight">
            Results That Speak
          </h2>
          <p className="text-xl text-mind-content-secondary max-w-3xl mx-auto leading-relaxed tracking-tight">
            Numbers don't lie. Here's what you can expect when working with me.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`text-center group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-mind-surface-content-white rounded-2xl p-8 border border-mind-stroke-border-grey group-hover:border-mind-content-blue group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-mind-content-blue to-mind-green rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon className="w-8 h-8 text-mind-surface-content-white" />
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-mind-content-primary mb-1 tracking-tight">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold text-mind-content-blue tracking-tight">
                      {stat.unit}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-mind-content-primary mb-3 tracking-tight">
                    {stat.label}
                  </h3>
                  
                  <p className="text-mind-content-secondary leading-relaxed tracking-tight flex-1 text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Call to action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-mind-surface-content-white rounded-2xl p-8 border border-mind-stroke-border-grey shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-mind-content-primary mb-4 tracking-tight">
              Ready to see these results for your company?
            </h3>
            <p className="text-mind-content-secondary mb-6 tracking-tight">
              Let's discuss your hiring needs and how I can help you build your dream team in Poland.
            </p>
            <button 
              className="bg-mind-content-blue hover:bg-mind-hover-blue text-mind-surface-content-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsEN;