import React from 'react';
import { Linkedin as LinkedIn, Mail, Phone } from 'lucide-react';

interface FooterProps {
  lang: 'pl' | 'en';
}

const Footer = ({ lang }: FooterProps) => {
  const content = {
    pl: {
      description: "HR Business Partner specjalizujący się w rekrutacji dla branż technologicznych i nowoczesnych firm.",
      services: "Usługi",
      servicesList: [
        "Rekrutacja IT",
        "Employer Branding", 
        "Doradztwo HR",
        "Rozwój talentów"
      ],
      contact: "Kontakt",
      rights: "Wszystkie prawa zastrzeżone."
    },
    en: {
      description: "HR Business Partner specializing in recruitment for tech and modern companies.",
      services: "Services",
      servicesList: [
        "Tech Recruitment",
        "Employer Branding",
        "HR Consulting", 
        "Talent Development"
      ],
      contact: "Contact",
      rights: "All rights reserved."
    }
  };

  const t = content[lang];

  return (
    <footer className="bg-mind-grey-900 text-mind-surface-content-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 tracking-tight">Rafał</h3>
            <p className="text-mind-content-secondary leading-relaxed mb-6 tracking-tight">{t.description}</p>
            <div className="flex space-x-4">
              <button className="w-12 h-12 bg-mind-grey-800 hover:bg-mind-content-blue rounded-xl flex items-center justify-center transition-colors">
                <LinkedIn className="w-6 h-6 text-mind-surface-content-white" />
              </button>
              <button className="w-12 h-12 bg-mind-grey-800 hover:bg-mind-green rounded-xl flex items-center justify-center transition-colors">
                <Mail className="w-6 h-6 text-mind-surface-content-white" />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 tracking-tight">{t.services}</h4>
            <ul className="space-y-3 text-mind-content-secondary">
              {t.servicesList.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="hover:text-mind-content-blue transition-colors tracking-tight">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 tracking-tight">{t.contact}</h4>
            <div className="space-y-4 text-mind-content-secondary">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-mind-content-blue" />
                <span className="tracking-tight">rafal@hrexpert.pl</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-mind-content-blue" />
                <span className="tracking-tight">+48 123 456 789</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-mind-grey-700 mt-12 pt-8 text-center text-mind-content-secondary">
          <p className="tracking-tight">&copy; 2025 Rafał. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;