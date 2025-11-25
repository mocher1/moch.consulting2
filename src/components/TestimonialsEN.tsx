import React, { useEffect, useState } from 'react';
import { Clock, Users, Globe, Award } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

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
      const ease = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      setCount(Math.floor(end * ease));
      if (progress < duration) animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return <span ref={ref} className="font-bold tabular-nums">{count}{suffix}</span>;
};

const stats = [
  {
    icon: Clock,
    value: 38,
    suffix: ' days',
    label: 'Avg. Time-to-Hire',
    subtext: 'For Senior Technical Roles (vs. market avg of 60+ days).'
  },
  {
    icon: Users,
    value: 95,
    suffix: '%',
    label: 'Retention Rate',
    subtext: 'Candidates hired by me stay with clients for >2 years.'
  },
  {
    icon: Globe,
    value: 10,
    suffix: '+',
    label: 'Global Markets',
    subtext: 'Experience working with clients from US, UK, DE, SE.'
  },
  {
    icon: Award,
    value: 1000,
    suffix: '+',
    label: 'Interviews',
    subtext: 'Technical screenings conducted for IT & Engineering roles.'
  }
];

const TestimonialsEN = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
       {/* Delikatne tło */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-mind-content-primary mb-6">
            Data-Driven Recruitment
          </h2>
          <p className="text-xl text-mind-content-secondary max-w-2xl mx-auto leading-relaxed">
            I don't rely on luck. I rely on benchmarks, metrics, and a proven process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className={`bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group ${
                   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-mind-content-blue mb-6 group-hover:bg-mind-content-blue group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                
                <div className="text-4xl font-bold text-mind-content-primary mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                
                <p className="text-lg font-bold text-mind-content-blue mb-3">
                  {stat.label}
                </p>
                
                <p className="text-sm text-gray-500 leading-relaxed">
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

export default TestimonialsEN;