import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-gradient-to-b from-mind-surface-bg-grey to-mind-surface-content-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-semibold text-mind-content-primary mb-6 tracking-tight">
            Porozmawiajmy o wyzwaniach HR w Twojej firmie?
          </h2>
          <p className="text-xl text-mind-content-secondary max-w-2xl mx-auto leading-relaxed tracking-tight">
            Umów bezpłatną konsultację i zobacz, jak mogę pomóc Twojej organizacji
          </p>
        </div>
        
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <form onSubmit={handleSubmit} className="bg-mind-surface-content-white rounded-3xl shadow-xl p-8 md:p-12 border border-mind-stroke-border-grey">
            {!isSubmitted ? (
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label 
                      htmlFor="name"
                      className="block text-sm font-semibold text-mind-content-primary mb-3 tracking-tight"
                    >
                      Imię i nazwisko
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-describedby="name-help"
                      className="w-full px-6 py-4 rounded-xl border-2 border-mind-stroke-border-grey focus:border-mind-content-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-mind-content-blue focus-visible:ring-offset-2 transition-colors text-mind-content-primary text-lg tracking-tight"
                      placeholder="Jak mam się do Ciebie zwracać?"
                    />
                    <div id="name-help" className="sr-only">Podaj swoje imię i nazwisko</div>
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email"
                      className="block text-sm font-semibold text-mind-content-primary mb-3 tracking-tight"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-describedby="email-help"
                      className="w-full px-6 py-4 rounded-xl border-2 border-mind-stroke-border-grey focus:border-mind-content-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-mind-content-blue focus-visible:ring-offset-2 transition-colors text-mind-content-primary text-lg tracking-tight"
                      placeholder="twoj@email.com"
                    />
                    <div id="email-help" className="sr-only">Podaj swój adres email do kontaktu</div>
                  </div>
                </div>
                
                <div>
                  <label 
                    htmlFor="message"
                    className="block text-sm font-semibold text-mind-content-primary mb-3 tracking-tight"
                  >
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    aria-describedby="message-help"
                    className="w-full px-6 py-4 rounded-xl border-2 border-mind-stroke-border-grey focus:border-mind-content-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-mind-content-blue focus-visible:ring-offset-2 transition-colors text-mind-content-primary text-lg resize-none tracking-tight"
                    placeholder="Opowiedz o swoich wyzwaniach HR..."
                  />
                  <div id="message-help" className="sr-only">Opisz swoje potrzeby i wyzwania HR</div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-mind-content-blue to-mind-green hover:from-mind-hover-blue hover:to-mind-green-26 text-mind-surface-content-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3 group tracking-tight focus-visible:ring-2 focus-visible:ring-mind-content-blue focus-visible:ring-offset-2"
                  aria-label="Wyślij formularz kontaktowy"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  Wyślij wiadomość
                </button>
              </div>
            ) : (
              <div className="text-center py-12">
                <CheckCircle className="w-20 h-20 text-mind-content-blue mx-auto mb-6" />
                <h3 className="text-3xl font-semibold text-mind-content-primary mb-4 tracking-tight">
                  Dziękuję za wiadomość!
                </h3>
                <p className="text-xl text-mind-content-secondary tracking-tight">
                  Odezwę się do Ciebie w ciągu 24 godzin
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;