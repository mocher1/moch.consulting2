import React from 'react';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: 'pl' | 'en';
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isPL = lang === 'pl';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const content = {
    pl: {
      desc: 'Twój zewnętrzny dział HR. Strategia, operacje i rekrutacja w jednym, przejrzystym abonamencie B2B.',
      linksTitle: 'Nawigacja',
      links: [
        { label: 'Oferta Fractional', href: '#services' },
        { label: 'Dlaczego ja?', href: '#about' },
        { label: 'Kontakt', href: '#contact' },
      ],
      contactTitle: 'Kontakt',
      rights: 'Wszelkie prawa zastrzeżone.',
      privacy: 'Polityka Prywatności',
    },
    en: {
      desc: 'Strategic Tech Recruitment Partner connecting global companies with world-class Polish IT talent.',
      linksTitle: 'Quick Links',
      links: [
        { label: 'Services', href: '#services' },
        { label: 'Why CEE?', href: '#why-us' },
        { label: 'Success Stories', href: '#testimonials' },
        { label: 'FAQ', href: '#faq' },
      ],
      contactTitle: 'Contact',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
    },
  };

  const t = isPL ? content.pl : content.en;

  return (
    <footer className="bg-mind-content-primary text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* KOLUMNA 1: BRAND */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
               {/* Proste Logo Tekstowe lub SVG */}
               <div className="w-8 h-8 bg-mind-content-blue rounded-lg flex items-center justify-center font-bold text-white">
                 M
               </div>
               <span className="text-2xl font-bold tracking-tight">Moch Consulting</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm mb-6">
              {t.desc}
            </p>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com" // PODMIEŃ NA SWÓJ LINK
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mind-content-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:rafal.moch@gmail.com" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mind-content-blue transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* KOLUMNA 2: LINKI */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t.linksTitle}</h4>
            <ul className="space-y-4">
              {t.links.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => {
                        // Obsługa scrollowania
                        const element = document.querySelector(link.href);
                        element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-white transition-colors text-sm text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* KOLUMNA 3: DANE KONTAKTOWE */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t.contactTitle}</h4>
            <address className="not-italic text-gray-400 text-sm space-y-4">
              <p>Rafał Moch</p>
              <p>Warszawa, Polska</p>
              <p>
                <a href="mailto:rafal.moch@gmail.com" className="hover:text-white transition-colors">
                  rafal.moch@gmail.com
                </a>
              </p>
              {/* Opcjonalnie: Telefon i NIP dla budowania zaufania B2B */}
              {/* <p>NIP: 000-000-00-00</p> */}
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Moch Consulting. {t.rights}</p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">{t.privacy}</a>
            <button 
                onClick={scrollToTop} 
                className="flex items-center gap-2 hover:text-white transition-colors"
            >
                Start <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;