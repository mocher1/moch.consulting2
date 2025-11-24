import React from 'react';
import { Gamepad, Smartphone, Globe, Cpu, Rocket } from 'lucide-react'; // Ikony dopasowane do Tech
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const industries = [
  {
    icon: Gamepad,
    title: 'Gamedev & Gaming',
    description: 'Leveraging my network from CD PROJEKT Group (GOG.com). I know where to find C++, Unreal Engine, and Unity experts who built world-class titles like The Witcher or Cyberpunk.'
  },
  {
    icon: Globe,
    title: 'FinTech & Banking',
    description: 'Poland is a global hub for banking technology. I source engineers experienced in high-frequency trading, blockchain, and secure payment systems (PCI DSS standards).'
  },
  {
    icon: Rocket,
    title: 'Startups & Scaleups',
    description: 'Need "product-minded" engineers? I find developers who understand equity, fast iterations, and ownership – perfect for VC-backed startups growing in Europe.'
  },
  {
    icon: Smartphone,
    title: 'SaaS & Mobile',
    description: 'Fullstack and Mobile (iOS/Android) developers who know how to build scalable architectures on AWS/GCP. From MVP to millions of users.'
  },
  {
    icon: Cpu,
    title: 'AI & Data Science',
    description: 'Polish devs consistently rank Top 3 in global algorithm competitions (HackerRank, Google Code Jam). I help you hire top-tier Data Engineers and ML Specialists.'
  }
];

const IndustriesEN = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-24 bg-gradient-to-b from-mind-surface-bg-grey to-mind-surface-content-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* NAGŁÓWEK */}
        <div ref={ref} className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-mind-content-primary mb-6">
            Specialized in High-Demand Sectors
          </h2>
          <p className="text-xl text-mind-content-secondary max-w-3xl mx-auto leading-relaxed">
            I don't recruit "everyone". I focus on industries where Poland has a distinct talent advantage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Pierwsza linia - 3 główne karty (Gaming, FinTech, Startups) */}
          {industries.slice(0, 3).map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className={`group text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-mind-surface-content-white rounded-2xl p-8 border border-mind-stroke-border-grey group-hover:border-mind-content-blue group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2 h-full flex flex-col">
                  <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-mind-content-blue group-hover:text-white transition-all duration-300">
                    <Icon size={32} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-mind-content-primary mb-4">
                    {industry.title}
                  </h3>
                  
                  <p className="text-mind-content-secondary leading-relaxed flex-1 text-base">
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Druga linia - 2 karty wyśrodkowane (SaaS, AI) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-8">
          {industries.slice(3, 5).map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index + 3}
                className={`group text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 3) * 200}ms` }}
              >
                <div className="bg-mind-surface-content-white rounded-2xl p-8 border border-mind-stroke-border-grey group-hover:border-mind-content-blue group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2 h-full flex flex-col">
                  <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-mind-content-blue group-hover:text-white transition-all duration-300">
                    <Icon size={32} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-mind-content-primary mb-4">
                    {industry.title}
                  </h3>
                  
                  <p className="text-mind-content-secondary leading-relaxed flex-1 text-base">
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default IndustriesEN;