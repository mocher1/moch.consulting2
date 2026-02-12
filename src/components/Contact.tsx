import React from 'react';
import { Mail, Calendar, Phone } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="contact" ref={ref} className="py-24 bg-mind-content-primary text-white relative overflow-hidden">
      {/* Tło */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 w-96 h-96 bg-mind-content-blue rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Zacznijmy od kawy. <span className="text-mind-green">Wirtualnej.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Nie sprzedaję nic "w ciemno". Umów się na bezpłatną, 20-minutową konsultację. Poznamy się, opowiesz mi o swoich wyzwaniach, a ja powiem Ci, czy model Fractional HR ma u Ciebie sens.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            
            {/* Karta 1: Calendly / Booking */}
            <a 
              href="https://calendly.com" // PODMIEŃ NA SWÓJ LINK
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-mind-content-blue hover:bg-mind-hover-blue text-white p-8 rounded-2xl transition-all hover:-translate-y-1 flex flex-col items-center min-w-[250px]"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Calendar size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Umów rozmowę</h3>
              <p className="text-sm text-blue-100">Wybierz termin w kalendarzu</p>
            </a>

            {/* Karta 2: Email */}
            <a 
              href="mailto:rafal.moch@gmail.com"
              className="group bg-white/5 hover:bg-white/10 border border-white/10 text-white p-8 rounded-2xl transition-all hover:-translate-y-1 flex flex-col items-center min-w-[250px]"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Napisz wiadomość</h3>
              <p className="text-sm text-gray-400">rafal.moch@gmail.com</p>
            </a>
          </div>

          <p className="mt-12 text-sm text-gray-500">
            Odpowiadam zazwyczaj w ciągu 24h. Bez spamu, bez botów.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;