import React from 'react';
import { AlertTriangle, TrendingDown, Users } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const problems = [
   {
     icon: AlertTriangle,
     title: 'Firma rośnie, a founder staje się wąskim gardłem decyzyjnym',
     description: 'Wszystkie decyzje dotyczące ludzi przechodzą przez założyciela, blokując rozwój organizacji.'
   },
   {
     icon: TrendingDown,
     title: 'Firma stoi w miejscu i nikt nie potrafi wskazać realnej przyczyny',
     description: 'Brak jasnych ról i odpowiedzialności sprawia, że problemy są niewidoczne dla zarządu.'
   },
   {
     icon: Users,
     title: 'HR działa operacyjnie, ale nie wpływa na realne problemy biznesowe',
     description: 'Zespół HR zajmuje się administracją, ale nie wspiera kluczowych decyzji strategicznych.'
   }
 ];

 const ProblemSection = () => {
   const [ref, isVisible] = useIntersectionObserver();

   return (
    <section ref={ref} className="py-16 bg-white relative overflow-hidden">
       <div className="max-w-7xl mx-auto px-6">
         
         {/* Header */}
         <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-semibold text-mind-content-primary mb-6 leading-tight">
             HR przestaje działać, gdy decyzje dotyczące ludzi są <span className="text-mind-content-blue">odkładane lub rozmyte</span>
           </h2>
         </div>
         
         {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
           {problems.map((problem, index) => {
             const Icon = problem.icon;
             return (
               <div
                 key={index}
                className={`bg-mind-surface-bg-grey rounded-xl p-6 border border-gray-100 transition-all duration-700 ${
                   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                 }`}
                 style={{ transitionDelay: `${index * 150}ms` }}
               >
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-500 mb-4">
                  <Icon size={20} />
                 </div>
                 
                <h3 className="text-lg font-bold text-mind-content-primary mb-3 leading-tight">
                   {problem.title}
                 </h3>
                 
                <p className="text-sm text-mind-content-secondary leading-relaxed">
                   {problem.description}
                 </p>
               </div>
             );
           })}
         </div>

         {/* Closing Statement */}
        <div className=\{`text-center max-w-4xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-mind-content-primary text-white p-6 md:p-8 rounded-2xl">
            <p className="text-lg md:text-xl leading-relaxed">
               W większości firm to nie są problemy narzędzi HR ani procesów.<br />
               <strong className="text-mind-green">To są problemy braku jasnych decyzji i odpowiedzialności.</strong>
             </p>
           </div>
         </div>
       </div>
     </section>
   );
 };

 export default ProblemSection;