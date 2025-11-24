import React from 'react';
import { Search, Users, TrendingUp, Code2, ShieldCheck, Zap } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const services = [
  {
    icon: Search,
    title: 'Deep Tech Sourcing',
    description: 'I don\'t wait for applications. I use advanced Boolean search, X-Ray, and GitHub sourcing to find passive candidates who are not on job boards.',
    benefit: 'Access to the "Hidden Top 10%" of talent.'
  },
  {
    icon: Code2,
    title: 'Technical Pre-Vetting',
    description: 'Thanks to my background in gaming (CD Projekt Group) and tech, I speak the language of developers. I verify "culture fit" and basic tech stack alignment before you even see the CV.',
    benefit: 'You interview only qualified candidates.'
  },
  {
    icon: TrendingUp,
    title: 'Market Intelligence',
    description: 'Entering the Polish market? I provide up-to-date salary benchmarks, advice on B2B/Contract models, and competitor analysis.',
    benefit: 'Data-driven hiring decisions (No overpaying).'
  }
];

const ServicesEN = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="services" ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADLINE */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-mind-content-primary mb-6">
            Not just "Recruitment". <br />
            <span className="text-mind-content-blue">Your Strategic Partner in Poland.</span>
          </h2>
          <p className="text-xl text-mind-content-secondary max-w-3xl mx-auto leading-relaxed">
            Agencies send you resumes. I deliver <span className="font-semibold text-mind-content-primary">hired employees</span>. 
            My process is designed for speed, quality, and transparency.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Hover gradient line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mind-content-blue to-mind-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-mind-content-blue mb-6 group-hover:bg-mind-content-blue group-hover:text-white transition-colors duration-300">
                  <Icon size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-mind-content-primary mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm font-bold text-mind-content-blue flex items-center gap-2">
                    <Zap size={16} />
                    {service.benefit}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* "WHY POLAND?" MINI SECTION (Social Proof dla kraju) */}
        <div className={`bg-mind-content-primary rounded-3xl p-8 md:p-12 text-white overflow-hidden relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '500ms' }}>
           {/* Decorative circles */}
           <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
           <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-64 h-64 bg-mind-content-blue/20 rounded-full blur-3xl" />

           <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                 <h3 className="text-3xl font-bold mb-6">Why Hire in Poland? 🇵🇱</h3>
                 <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                       <ShieldCheck className="text-mind-green shrink-0 mt-1" size={20} />
                       <span className="text-gray-300">Ranked <strong className="text-white">#3 globally</strong> in HackerRank developer skills.</span>
                    </li>
                    <li className="flex items-start gap-3">
                       <ShieldCheck className="text-mind-green shrink-0 mt-1" size={20} />
                       <span className="text-gray-300">High English proficiency (EF EPI Rank: <strong className="text-white">Very High</strong>).</span>
                    </li>
                    <li className="flex items-start gap-3">
                       <ShieldCheck className="text-mind-green shrink-0 mt-1" size={20} />
                       <span className="text-gray-300">Cultural proximity to Western Europe & US working hours overlap.</span>
                    </li>
                 </ul>
              </div>
              
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                 <p className="text-lg font-medium text-center mb-4">"Poland has become the Silicon Valley of Central Europe."</p>
                 <div className="flex justify-center gap-4 text-sm text-gray-400 uppercase tracking-widest font-semibold">
                    <span>Google</span>
                    <span>•</span>
                    <span>Microsoft</span>
                    <span>•</span>
                    <span>Netflix</span>
                 </div>
                 <p className="text-xs text-center text-gray-500 mt-2">(All have major R&D hubs here)</p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesEN;