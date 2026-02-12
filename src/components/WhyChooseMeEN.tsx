import React from 'react';
import { Clock, ShieldCheck, MessageSquare, MonitorPlay } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const advantages = [
  {
    icon: Clock,
    title: 'Ideal Time Zone Alignment',
    description: 'Based in Central Europe (CET/CEST). I overlap heavily with US East Coast mornings and cover the entire UK/EU business day. No more 3 AM calls.'
  },
  {
    icon: ShieldCheck,
    title: 'EU Legal & IP Standards',
    description: 'Unlike hiring in Asia or South America, candidates from Poland/CEE operate under strict EU laws (GDPR). I ensure your Intellectual Property is 100% safe.'
  },
  {
    icon: MessageSquare,
    title: 'No Language Barrier',
    description: 'I only present candidates with verified C1/C2 English. Polish developers are ranked #11 in the world for English proficiency (EF EPI Index).'
  },
  {
    icon: MonitorPlay,
    title: 'Western Work Culture',
    description: 'Candidates from this region are known for "ownership". They don\'t just code tasks; they solve business problems and challenge bad specs.'
  }
];

const WhyChooseMeEN = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-24 bg-mind-content-primary text-white relative overflow-hidden">
      {/* Tło - mapa świata (abstrakcyjna) lub kropki */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={ref} className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why CEE Region? Why Me?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hiring remotely shouldn't feel distant. I bridge the gap between your HQ and the best engineering talent in Europe.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 bg-mind-content-blue/20 rounded-xl flex items-center justify-center text-mind-green mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={28} />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white">
                  {adv.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm">
                  {adv.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMeEN;