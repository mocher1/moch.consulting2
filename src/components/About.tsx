import React from 'react';
import { Linkedin, CheckCircle, Coffee } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="about" ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 font-bold text-xs uppercase tracking-wide mb-6">
              <Coffee size={14} />
              <span>HR bez kija w d...</span> {/* Odważne, ale zapada w pamięć. Możesz zmienić na "HR z ludzką twarzą" jeśli wolisz safe mode, ale polecam odwagę. */}
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-mind-content-primary mb-6 leading-tight">
              Nie robię audytów <br/>
              <span className="text-mind-content-blue">do szuflady.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Większość konsultantów przychodzi, robi mądre slajdy i zostawia Cię z listą zadań. Ja działam inaczej. Jestem "hands-on". Jeśli trzeba zwolnić pracownika – robię to. Jeśli trzeba napisać procedurę – piszę ją.
              </p>
              <p>
                Przez lata pracowałem w <strong>GOG.com (CD PROJEKT)</strong> i <strong>PepsiCo</strong>. Wiem, jak wyglądają procesy w korporacjach, ale wiem też, że w Twojej firmie nie ma na to czasu. Dlatego biorę z korpo to, co działa (standardy, dane), i wyrzucam to, co wkurza (biurokrację, spotkania o niczym).
              </p>
              <p>
                <strong>Mój cel jest prosty:</strong> Poukładać Twoją firmę tak, żebyś Ty mógł zająć się biznesem, a nie niańczeniem dorosłych ludzi.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
               <a 
                 href="https://linkedin.com" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-lg font-semibold hover:bg-[#004182] transition-colors shadow-md hover:shadow-lg"
               >
                 <Linkedin size={20} />
                 Sprawdź mnie na LinkedIn
               </a>
            </div>
          </div>
          
          {/* ZDJĘCIE - Zostawiamy bez zmian w kodzie struktury, tylko treść się liczy */}
          <div className={`order-1 lg:order-2 relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
             <div className="relative z-10 bg-gray-100 rounded-[2rem] p-8 aspect-square flex items-center justify-center overflow-hidden">
                <div className="text-center">
                    <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 animate-pulse"></div>
                    <p className="text-gray-400 font-medium">Rafał Moch</p>
                    <p className="text-sm text-gray-400">Twój Partner Operacyjny</p>
                </div>

                <div className="absolute top-10 right-10 bg-white p-4 rounded-xl shadow-lg animate-bounce-slow">
                   <div className="flex items-center gap-2">
                      <CheckCircle className="text-mind-green" size={20} />
                      <span className="font-bold text-mind-content-primary">English C1</span>
                   </div>
                </div>
                <div className="absolute bottom-10 left-10 bg-white p-4 rounded-xl shadow-lg animate-bounce-slow" style={{ animationDelay: '1s' }}>
                   <div className="flex items-center gap-2">
                      <CheckCircle className="text-mind-content-blue" size={20} />
                      <span className="font-bold text-mind-content-primary">Lean Six Sigma</span>
                   </div>
                </div>
             </div>
             <div className="absolute inset-0 bg-mind-content-blue/10 rounded-[2rem] transform rotate-3 -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;