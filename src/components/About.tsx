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
              <p>
                Wiele firm konsultingowych działa na zasadzie: "Zrób audyt, zostaw raport, wystaw fakturę". Ja działam inaczej. 
              </p>
              <p>
                Jako <strong>Fractional HR Manager</strong> wchodzę w Twoje struktury. Mam firmowego maila, jestem na Twoim Slacku, znam imiona Twoich pracowników. Rozwiązuję problemy na bieżąco, zanim staną się pożarami.
              </p>
              <p>
                Moje doświadczenie z <strong>GOG.com (CD PROJEKT)</strong> czy <strong>PepsiCo</strong> nauczyło mnie jednego: procesy są dla ludzi, a nie ludzie dla procesów. Pomogę Ci zbudować firmę, w której ludzie chcą pracować, a biznes zarabia.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
               <a 
                 href="https://linkedin.com" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-lg font-semibold hover:bg-[#004182] transition-colors"
               >
                 <Linkedin size={20} />
                 Zobacz mój profil
               </a>
            </div>
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
             {/* Tło dekoracyjne */}
             <div className="absolute inset-0 bg-mind-content-blue/10 rounded-[2rem] transform rotate-3 -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;