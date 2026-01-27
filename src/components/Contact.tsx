import React from 'react';
import { Calendar, Mail, Phone } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="contact" ref={ref} className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <h2 className="text-3xl md:text-4xl font-bold text-mind-content-primary mb-8">
            Skontaktuj się ze mną
          </h2>
          
          <p className="text-xl text-mind-content-secondary mb-12 max-w-2xl mx-auto">
            Porozmawiajmy o Twojej firmie i sprawdźmy, czy mogę pomóc w podejmowaniu lepszych decyzji dotyczących ludzi.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-mind-content-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-mind-content-primary mb-2">Umów rozmowę</h3>
              <p className="text-mind-content-secondary text-sm">30-minutowa rozmowa o Twojej sytuacji</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-mind-content-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-mind-content-primary mb-2">Email</h3>
              <a href="mailto:rafal.moch@gmail.com" className="text-mind-content-blue hover:underline">
                rafal.moch@gmail.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-mind-content-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-mind-content-primary mb-2">Telefon</h3>
              <p className="text-mind-content-secondary text-sm">Dostępny po umówieniu rozmowy</p>
            </div>
          </div>

          <div className="bg-mind-surface-bg-grey rounded-2xl p-8">
            <h3 className="text-xl font-bold text-mind-content-primary mb-4">
              Przed rozmową warto przygotować:
            </h3>
            <ul className="text-left max-w-2xl mx-auto space-y-2 text-mind-content-secondary">
              <li>• Krótki opis firmy (branża, wielkość zespołu)</li>
              <li>• Główne wyzwania związane z ludźmi/zespołami</li>
              <li>• Pytania o model współpracy fractional</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;