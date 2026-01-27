import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const testimonials = [
  {
    quote: "Rafał pomógł nam uporządkować chaos w decyzjach personalnych. W 3 miesiące przeszliśmy od ciągłych eskalacji do jasnych procesów decyzyjnych.",
    author: "Founder, firma technologiczna 45 osób",
    company: "Warszawa"
  },
  {
    quote: "Audyt pokazał nam konkretnie, gdzie tracimy czas i pieniądze na złe decyzje HR. Rekomendacje były praktyczne i możliwe do wdrożenia.",
    author: "CEO, startup gamedev",
    company: "Kraków"
  },
  {
    quote: "Współpraca z Rafałem to inwestycja, która zwróciła się już w pierwszym kwartale. Mniej czasu na HR, lepsze decyzje biznesowe.",
    author: "Managing Director",
    company: "Firma usługowa 80 osób"
  }
];

const Testimonials = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-mind-content-primary mb-6">
            Co mówią klienci
          </h2>
          <p className="text-lg text-mind-content-secondary max-w-3xl mx-auto">
            Opinie founderów i zarządów firm, które uporządkowały swoje decyzje dotyczące ludzi
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-mind-surface-bg-grey rounded-xl p-8 border border-gray-100 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <blockquote className="text-mind-content-primary mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-gray-200 pt-6">
                <cite className="not-italic">
                  <div className="font-semibold text-mind-content-primary mb-1">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-mind-content-secondary">
                    {testimonial.company}
                  </div>
                </cite>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;