import React from 'react';
import { Target, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const DecisionVsOperationsSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="jak-pracuje" ref={ref} className="py-24 bg-mind-surface-bg-grey relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Icon */}
          <div className="w-16 h-16 bg-mind-content-blue rounded-xl flex items-center justify-center mx-auto mb-8">
            <Target size={32} className="text-white" />
          </div>

          {/* Main Content */}
          <h2 className="text-3xl md:text-4xl font-bold text-mind-content-primary mb-8 leading-tight">
            Działam <span className="text-mind-content-blue">decyzyjnie</span>, nie operacyjnie.
          </h2>
          
          <p className="text-xl text-mind-content-secondary leading-relaxed max-w-3xl mx-auto">
            Pomagam podejmować trudne decyzje dotyczące ludzi — ról, odpowiedzialności, wynagrodzeń i zespołów — zamiast zajmować się administracją HR.
          </p>

          {/* Visual separator */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200">
              <span className="text-sm font-medium text-mind-content-primary">Decyzje strategiczne</span>
            </div>
            <ArrowRight size={20} className="text-mind-content-blue" />
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200">
              <span className="text-sm font-medium text-mind-content-primary">Wyniki biznesowe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecisionVsOperationsSection;