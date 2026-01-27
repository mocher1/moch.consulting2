@@ .. @@
import React from 'react';
import { Target, Clock, Users, TrendingUp, CheckCircle, Zap } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const reasons = [
   {
     icon: Target,
     title: 'Działam decyzyjnie, nie operacyjnie',
     description: 'Pomagam podejmować trudne decyzje dotyczące ludzi, ról i wynagrodzeń — zamiast zajmować się administracją HR.',
     benefit: 'Founder może skupić się na biznesie'
   },
   {
     icon: Clock,
     title: 'Szybkie wdrożenie i efekty',
     description: 'Zaczynam od audytu decyzji, który pokazuje konkretne blokady. Pierwsze rekomendacje w ciągu 2 tygodni.',
     benefit: 'Natychmiastowa wartość biznesowa'
   },
   {
     icon: Users,
     title: 'Doświadczenie w skalowaniu zespołów',
     description: 'Ponad 10 lat pracy z firmami technologicznymi — od startupów po międzynarodowe korporacje.',
     benefit: 'Sprawdzone metody i procesy'
   },
   {
     icon: TrendingUp,
     title: 'Model fractional — elastyczność i koszt',
     description: 'Płacisz za konkretne rezultaty, nie za pełny etat. Skalujesz współpracę według potrzeb biznesowych.',
     benefit: 'ROI widoczny od pierwszego miesiąca'
   }
 ];

 const WhyChooseMe = () => {
   const [ref, isVisible] = useIntersectionObserver();

   return (
-    <section id="why-me" ref={ref} className="py-24 bg-white relative overflow-hidden">
-      {/* Background decoration */}
-      <div className="absolute top-0 left-0 w-1/3 h-full bg-slate-50 skew-x-12 opacity-50 -z-10" />
+    <section id="why-me" ref={ref} className="py-16 bg-white relative overflow-hidden">

       <div className="max-w-7xl mx-auto px-6">
         
         {/* Header */}
-        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
-          <h2 className="text-4xl md:text-5xl font-bold text-mind-content-primary mb-6 tracking-tight">
+        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
+          <h2 className="text-3xl md:text-4xl font-semibold text-mind-content-primary mb-4 tracking-tight">
             Dlaczego warto ze mną współpracować?
           </h2>
-          <p className="text-xl text-mind-content-secondary max-w-3xl mx-auto leading-relaxed">
+          <p className="text-base text-mind-content-secondary/80 max-w-3xl mx-auto leading-relaxed">
             Nie jestem kolejnym HR-owcem. Jestem partnerem biznesowym, który rozumie, 
             że decyzje dotyczące ludzi muszą wspierać cele firmy.
           </p>
         </div>

         {/* Reasons Grid */}
-        <div className="grid md:grid-cols-2 gap-8 mb-16">
+        <div className="grid md:grid-cols-2 gap-6 mb-12">
           {reasons.map((reason, index) => {
             const Icon = reason.icon;
             return (
               <div
                 key={index}
-                className={`group bg-mind-surface-bg-grey rounded-2xl p-8 border border-gray-100 hover:border-mind-content-blue hover:shadow-lg transition-all duration-300 ${
+                className={`group bg-mind-surface-bg-grey rounded-xl p-6 border border-gray-100 hover:border-gray-300 transition-all duration-300 ${
                   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                 }`}
                 style={{ transitionDelay: `${index * 150}ms` }}
               >
-                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-mind-content-blue mb-6 group-hover:bg-mind-content-blue group-hover:text-white transition-colors duration-300">
-                  <Icon size={28} />
+                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-mind-content-blue mb-4 transition-colors duration-300">
+                  <Icon size={20} />
                 </div>
                 
-                <h3 className="text-2xl font-bold text-mind-content-primary mb-4">
+                <h3 className="text-lg font-bold text-mind-content-primary mb-3">
                   {reason.title}
                 </h3>
                 
-                <p className="text-mind-content-secondary mb-6 leading-relaxed">
+                <p className="text-sm text-mind-content-secondary mb-4 leading-relaxed">
                   {reason.description}
                 </p>
                 
-                <div className="pt-6 border-t border-gray-200">
-                  <p className="text-sm font-bold text-mind-content-blue flex items-center gap-2">
-                    <Zap size={16} />
+                <div className="pt-4 border-t border-gray-200">
+                  <p className="text-xs font-bold text-mind-content-blue flex items-center gap-2">
+                    <Zap size={14} />
                     {reason.benefit}
                   </p>
                 </div>
               </div>
             );
           })}
         </div>

         {/* Bottom CTA */}
-        <div className={`bg-mind-content-primary rounded-3xl p-8 md:p-12 text-white text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
-          <h3 className="text-2xl md:text-3xl font-bold mb-4">
+        <div className={`bg-mind-content-primary rounded-2xl p-6 md:p-8 text-white text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
+          <h3 className="text-xl md:text-2xl font-bold mb-3">
             Gotowy na zmianę podejścia do HR?
           </h3>
-          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
+          <p className="text-base text-gray-300 mb-6 max-w-2xl mx-auto">
             Sprawdźmy, czy Twoja firma potrzebuje wsparcia w podejmowaniu lepszych decyzji dotyczących ludzi.
           </p>
           <button 
-            className="bg-white text-mind-content-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 mx-auto"
+            className="bg-white text-mind-content-primary px-6 py-3 rounded-lg font-semibold text-base hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 mx-auto"
             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
           >
-            <CheckCircle size={20} />
+            <CheckCircle size={18} />
             Sprawdź, czy to ma sens w Twojej firmie
           </button>
         </div>
       </div>
     </section>
   );
 };

 export default WhyChooseMe;