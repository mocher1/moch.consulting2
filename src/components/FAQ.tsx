import React from 'react';
import { Play } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const faqItems = [
  {
    question: "Czy 'Fractional HR' opłaca się małej firmie?",
    videoId: "dQw4w9WgXcQ" // Placeholder YouTube video ID
  },
  {
    question: "Jak wygląda proces wdrażania zmian w zespole?",
    videoId: "dQw4w9WgXcQ" // Placeholder YouTube video ID
  },
  {
    question: "Czy rekrutujesz też Juniorów?",
    videoId: "dQw4w9WgXcQ" // Placeholder YouTube video ID
  },
  {
    question: "Ile trwa audyt procesów HR?",
    videoId: "dQw4w9WgXcQ" // Placeholder YouTube video ID
  }
];

const FAQ = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="faq" ref={ref} className="py-24 bg-gradient-to-b from-mind-surface-content-white to-mind-surface-bg-grey">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-semibold text-mind-content-primary mb-6 tracking-tight">
            Częste pytania (Wideo)
          </h2>
          <p className="text-xl text-mind-content-secondary max-w-3xl mx-auto leading-relaxed tracking-tight">
            Zamiast czytać długie e-maile, posłuchaj moich konkretnych odpowiedzi.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-mind-surface-content-white rounded-2xl p-6 border border-mind-stroke-border-grey group-hover:border-mind-content-blue group-hover:shadow-xl transition-all duration-300 h-full">
                <h3 className="text-xl font-semibold text-mind-content-primary mb-6 tracking-tight leading-tight">
                  {item.question}
                </h3>
                
                <div className="relative aspect-video rounded-xl overflow-hidden bg-mind-surface-bg-grey border border-mind-stroke-border-grey">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.videoId}`}
                    title={item.question}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                  
                  {/* Play button overlay for visual appeal */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-mind-content-blue/90 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-mind-surface-content-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;