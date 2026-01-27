import React from 'react';
import { CheckCircle, Coffee } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="about" ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <p className="text-xl text-mind-content-secondary leading-relaxed">
              Od ponad 10 lat wspieram liderów i zarządy firm technologicznych i usługowych w podejmowaniu lepszych decyzji dotyczących ludzi, ról i zespołów.
            </p>
            </div>
          
          {/* ZDJĘCIE / WIZUALIZACJA */}
          <div className={`order-1 lg:order-2 relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
             <div className="relative z-10 bg-gray-100 rounded-[2rem] p-8 aspect-square flex items-center justify-center overflow-hidden">
                {/* Tutaj docelowo wstawisz swoje zdjęcie */}
                <div className="text-center">
                    <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 animate-pulse"></div>
                    <p className="text-gray-400 font-medium">Rafał Moch</p>
                    <p className="text-sm text-gray-400">Twój Partner w Biznesie</p>
                </div>

                {/* Pływające kafelki "Trust" */}
                <div className="absolute top-10 right-10 bg-white p-4 rounded-xl shadow-lg animate-bounce-slow">
                </div>
                <div className="absolute bottom-10 left-10 bg-white p-4 rounded-xl shadow-lg animate-bounce-slow" style={{ animationDelay: '1s' }}>
                   <div className="flex items-center gap-2">
                      <CheckCircle className="text-mind-content-blue" size={20} />
                      <span className="font-bold text-mind-content-primary">Lean Six Sigma</span>
                   </div>
                </div>
             </div>
             {/* Tło dekoracyjne */}
             <div className="absolute inset-0 bg-mind-content-blue/10 rounded-[2rem] transform rotate-3 -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;