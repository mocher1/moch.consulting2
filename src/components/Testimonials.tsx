import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const testimonials = [
  {
    quote: "Rafał pomógł nam zrekrutować 15 deweloperów w ciągu 3 miesięcy. Jego znajomość rynku IT jest niezrównana.",
    name: "Anna Kowalska",
    position: "CTO, TechStartup",
    company: "Warsaw"
  },
  {
    quote: "Dzięki strategii employer branding, którą opracował Rafał, otrzymujemy 3x więcej aplikacji od top kandydatów.",
    name: "Michał Nowak",
    position: "Head of People",
    company: "GameStudio"
  },
  {
    quote: "Profesjonalizm, szybkość i jakość kandydatów - w rekrutacji nie można chcieć więcej. Polecam każdej firmie IT.",
    name: "Katarzyna Wiśniewska",
    position: "CEO",
    company: "MarketingPro"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, isVisible] = useIntersectionObserver();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-gradient-to-b from-mind-surface-bg-grey to-mind-surface-content-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-semibold text-mind-content-primary mb-6 tracking-tight">
            Opinie klientów
          </h2>
          <p className="text-xl text-mind-content-secondary max-w-3xl mx-auto leading-relaxed tracking-tight">
            Zobacz, co mówią firmy, z którymi współpracowałem
          </p>
        </div>
        
        <div className="relative">
          <div className="bg-mind-surface-content-white rounded-3xl shadow-xl p-12 border border-mind-stroke-border-grey">
            <Quote className="w-16 h-16 text-mind-content-blue mx-auto mb-8" />
            
            <div className="text-center">
              <p className="text-2xl text-mind-content-primary mb-8 leading-relaxed italic tracking-tight">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div>
                <h4 className="text-xl font-semibold text-mind-content-primary tracking-tight">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-mind-content-blue font-medium tracking-tight">
                  {testimonials[currentIndex].position}
                </p>
                <p className="text-mind-content-secondary tracking-tight">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>
          
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-mind-surface-content-white rounded-full shadow-lg border border-mind-stroke-border-grey flex items-center justify-center hover:bg-mind-surface-light-blue hover:border-mind-content-blue transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-mind-content-secondary" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-mind-surface-content-white rounded-full shadow-lg border border-mind-stroke-border-grey flex items-center justify-center hover:bg-mind-surface-light-blue hover:border-mind-content-blue transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-mind-content-secondary" />
          </button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-mind-content-blue' : 'bg-mind-stroke-border-grey hover:bg-mind-content-secondary'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;