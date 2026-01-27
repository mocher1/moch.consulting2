@@ .. @@
import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const companies = [
   { name: 'EY', logo: '/src/assets/logos/ey.png', className: 'scale-50' },
   { name: 'GOG', logo: '/src/assets/logos/gog.png' },
   { name: 'PepsiCo', logo: '/src/assets/logos/pepsico.png' },
   { name: 'Nyra Health', logo: '/src/assets/logos/nyra health.png' },
   { name: 'PhotoAID', logo: '/src/assets/logos/photoaid.jpeg' },
   { name: 'Hilti', logo: '/src/assets/logos/hilti wlasciwe.png', className: 'scale-75' },
   { name: 'Vilgain', logo: '/src/assets/logos/vilgain.png' },
   { name: 'Wiedza i Praktyka', logo: '/src/assets/logos/wiedza i praktyka.jpeg', className: 'scale-90' }
 ];

 const Companies = () => {
   const [ref, isVisible] = useIntersectionObserver();
   const [translateX, setTranslateX] = useState(0);
   const [isTransitioning, setIsTransitioning] = useState(true);

   useEffect(() => {
     const slideWidth = 100 / 3; // Each slide is 1/3 of container width
     const totalSlides = companies.length;
     
     const interval = setInterval(() => {
       setTranslateX(prev => {
         const newTranslateX = prev - slideWidth;
         
         // When we reach the end of the first set, reset to beginning without transition
         if (Math.abs(newTranslateX) >= slideWidth * totalSlides) {
           setTimeout(() => {
             setIsTransitioning(false);
             setTranslateX(0);
             setTimeout(() => setIsTransitioning(true), 50);
           }, 500); // Wait for transition to complete
         }
         
         return newTranslateX;
       });
     }, 2500);
     
     return () => clearInterval(interval);
   }, []);

   return (
-    <section ref={ref} className="py-24 bg-mind-surface-bg-grey">
+    <section ref={ref} className="py-16 bg-white">
       <div className="max-w-7xl mx-auto px-6">
-        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
-          <h2 className="text-4xl md:text-5xl font-semibold text-mind-content-primary mb-6 tracking-tight">
+        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
+          <h2 className="text-2xl md:text-3xl font-semibold text-mind-content-primary mb-4 tracking-tight">
             Wybrane firmy, z którymi pracowałem
           </h2>
-          <p className="text-xl text-mind-content-secondary max-w-3xl mx-auto leading-relaxed tracking-tight">
+          <p className="text-base text-mind-content-secondary/80 max-w-3xl mx-auto leading-relaxed tracking-tight">
             Zbierałem doświadczenie w organizacjach różnych wielkości - od startupów po międzynarodowe korporacje.
           </p>
         </div>
         
         <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
           {/* Desktop slider */}
           <div className="hidden md:block overflow-hidden">
             <div 
               className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
               style={{ transform: `translateX(${translateX}%)` }}
             >
               {[...companies, ...companies].map((company, index) => (
-                <div key={index} className="flex-shrink-0 w-1/3 px-8">
-                  <div className="bg-mind-surface-content-white rounded-2xl p-8 border border-mind-stroke-border-grey hover:border-mind-content-blue hover:shadow-lg transition-all duration-300 group">
-                    <div className="h-24 flex items-center justify-center">
+                <div key={index} className="flex-shrink-0 w-1/3 px-6">
+                  <div className="bg-mind-surface-content-white rounded-xl p-6 border border-mind-stroke-border-grey hover:border-gray-300 transition-all duration-300 group">
+                    <div className="h-16 flex items-center justify-center">
                       <img
                         src={company.logo}
                         alt={`Logo ${company.name}`}
-                        className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
+                        className="w-full h-full object-contain filter grayscale transition-all duration-300 opacity-50"
                       />
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>

           {/* Mobile grid */}
-          <div className="md:hidden grid grid-cols-2 gap-4">
+          <div className="md:hidden grid grid-cols-2 gap-3">
             {companies.map((company, index) => (
-              <div key={index} className="bg-mind-surface-content-white rounded-2xl p-6 border border-mind-stroke-border-grey">
-                <div className="h-16 flex items-center justify-center">
+              <div key={index} className="bg-mind-surface-content-white rounded-xl p-4 border border-mind-stroke-border-grey">
+                <div className="h-12 flex items-center justify-center">
                   <img
                     src={company.logo}
                     alt={`Logo ${company.name}`}
-                    className="w-full h-full object-contain filter grayscale opacity-60"
+                    className="w-full h-full object-contain filter grayscale opacity-50"
                   />
                 </div>
               </div>
             ))}
           </div>

-          {/* Progress indicator for desktop */}
-          <div className="hidden md:flex justify-center mt-8">
-            <div className="w-32 h-1 bg-mind-stroke-border-grey rounded-full overflow-hidden">
-              <div 
-                className="h-full bg-mind-content-blue rounded-full transition-all duration-2500 ease-linear"
-                style={{ 
-                  width: `${((Math.abs(translateX) % (100/3 * companies.length)) / (100/3 * companies.length)) * 100}%`
-                }}
-              />
-            </div>
-          </div>
         </div>
       </div>
     </section>
   );
 };

 export default Companies;