import React from 'react';
import { Target, Shield, Clock, Users } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const reasons = [
  {
    icon: Target,
    title: 'Eksperckość',
    desc: 'Doświadczenie z CD PROJEKT czy PepsiCo. Dostajesz wiedzę z "dużego świata", dopasowaną do realiów MŚP.'
  },
  {
    icon: Shield,
    title: 'Bezpieczeństwo',
    desc: 'Umowa B2B z miesięcznym wypowiedzeniem. Żadnych długoterminowych zobowiązań czy kosztów zwolnienia.'
  },
  {
    icon: Clock,
    title: 'Dostępność',
    desc: 'Nie jestem "dochodzącym konsultantem". Jestem dostępny na Slacku/Teamsach jak każdy inny Twój pracownik.'
  },
  {
    icon: Users,
    title: 'Kultura',
    desc: 'Wiem, jak budować zespoły, które się lubią. Dbam o to, żeby "chemikalia" w firmie się zgadzały.'
  }
];

const WhyChooseMe = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section ref={ref} className="py-24 bg-mind-content-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Dlaczego model <span className="text-mind-green">Fractional</span> wygrywa z etatem?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Zatrudniając na etat, kupujesz czas pracownika. Zatrudniając mnie, kupujesz rozwiązane problemy.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Większość firm do 150 osób nie potrzebuje Dyrektora HR na pełen etat. Potrzebują <strong>Strategii Dyrektora</strong> i <strong>Egzekucji Managera</strong>. Mój model łączy te dwie rzeczy w cenie, która nie obciąża budżetu.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
                >
                  <Icon className="text-mind-content-blue mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                  <p className="text-sm text-gray-400">{reason.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;