import React from 'react';
import { Linkedin as LinkedIn, Mail } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="about" ref={ref} className="py-24 bg-mind-surface-content-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-semibold text-mind-content-primary mb-8 tracking-tight">
                O mnie
              </h2>
              
              <div className="space-y-6 text-lg text-mind-content-secondary leading-relaxed tracking-tight">
  <p>
    Przez ponad 10 lat pracowałem dla gigantów takich jak <strong className="text-mind-content-primary">GOG.com (CD Projekt Group), PepsiCo czy EY</strong>. Wiem, jak wyglądają światowe standardy HR.
  </p>
  
  <p>
    Jednak jako były <strong className="text-mind-content-primary">współwłaściciel restauracji</strong>, rozumiem też ból płacenia faktur i walki o rentowność. Moja misja jest prosta: Wzrost ludzi ma przekładać się na zysk firmy.
  </p>
  
  <p>
    Nie jestem typowym konsultantem z prezentacją w PowerPoincie. Jestem praktykiem. Zakasam rękawy, wchodzę w Twoje systemy (Slack, Jira, ATS) i działam ramię w ramię z Twoim zespołem jako <strong className="text-mind-content-blue">Fractional HR Manager</strong>.
  </p>
  
  <p>
   Posiadam certyfikaty: <strong className="text-mind-content-primary">Lean Six Sigma Green Belt</strong> oraz <strong className="text-mind-content-primary">ACSTH ICF Coach</strong>. Aktualnie zgłębiam wykorzystanie AI w HR.
  </p>
</div>
              
              <div className="flex gap-4 mt-8">
                <button 
                  className="flex items-center gap-3 bg-mind-content-blue hover:bg-mind-hover-blue text-mind-surface-content-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-mind-content-blue focus-visible:ring-offset-2"
                  aria-label="Zobacz profil LinkedIn Rafała - HR Business Partner"
                >
                  <LinkedIn size={20} />
                  LinkedIn
                </button>
                <button 
                  className="flex items-center gap-3 border-2 border-mind-stroke-border-grey hover:border-mind-content-blue text-mind-content-primary hover:text-mind-content-blue px-6 py-3 rounded-xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-mind-content-blue focus-visible:ring-offset-2"
                  aria-label="Skontaktuj się z Rafałem w sprawie usług HR"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Mail size={20} />
                  Kontakt
                </button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 text-center">
              <div className="relative inline-block">
                <div className="w-80 h-80 bg-gradient-to-br from-mind-content-blue to-mind-green rounded-3xl"></div>
                <div className="absolute inset-4 bg-mind-surface-bg-grey rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-mind-content-secondary to-mind-grey-600 rounded-full mx-auto mb-4"></div>
                    <p className="text-mind-content-primary font-semibold text-lg tracking-tight">Rafał</p>
                    <p className="text-mind-content-secondary tracking-tight">HR Business Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;