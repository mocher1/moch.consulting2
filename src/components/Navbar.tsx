import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const LINKS_PL = [
  { href: "#services", label: "Usługi" },
  { href: "#industries", label: "Branże" },
  { href: "#why", label: "Dlaczego ja" },
  { href: "#testimonials", label: "Opinie" },
  { href: "#about", label: "O mnie" },
  { href: "#contact", label: "Kontakt" }
];

const LINKS_EN = [
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#why", label: "Why Me" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  const links = isEnglish ? LINKS_EN : LINKS_PL;
  const [active, setActive] = useState<string>("#");

  useEffect(() => {
    const sections = links.map(l => document.querySelector(l.href) as HTMLElement).filter(Boolean);
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, [links]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
      <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          {/* LOGO OPCJA 3 - Growth Graph */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <rect width="32" height="32" rx="8" className="fill-mind-content-blue" />
            {/* Trzy słupki tworzące rosnący wykres / literę M */}
            <rect x="7" y="14" width="4" height="10" rx="1" fill="white" fillOpacity="0.7" />
            <rect x="14" y="10" width="4" height="14" rx="1" fill="white" />
            <rect x="21" y="6" width="4" height="18" rx="1" fill="#10b981" /> {/* Zielony akcent na wzrost */}
          </svg>
          <div className="flex flex-col">
            <span className="font-bold text-mind-content-primary text-lg leading-none tracking-tight">moch</span>
            <span className="font-medium text-mind-content-blue text-xs leading-none tracking-tight">.consulting</span>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-sm transition-colors ${active === l.href ? "text-black font-medium" : "text-gray-600 hover:text-black"}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Language Switcher */}
          <div className="flex items-center gap-2 ml-4 border-l border-gray-200 pl-4">
            <Link
              to="/"
              className={`flex items-center gap-1 px-2 py-1 rounded-md text-sm transition-colors ${
                !isEnglish ? 'bg-mind-content-blue text-white' : 'text-gray-600 hover:text-black hover:bg-gray-100'
              }`}
            >
              <span className="text-base">🇵🇱</span> PL
            </Link>
            <Link
              to="/en"
              className={`flex items-center gap-1 px-2 py-1 rounded-md text-sm transition-colors ${
                isEnglish ? 'bg-mind-content-blue text-white' : 'text-gray-600 hover:text-black hover:bg-gray-100'
              }`}
            >
              <span className="text-base">🇬🇧</span> EN
            </Link>
          </div>
        </div>
        
        <a
          href="#contact"
          className="hidden lg:inline-flex text-sm px-4 py-2 rounded-xl bg-black text-white hover:opacity-90 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 transition-all"
        >
          {isEnglish ? 'Start Hiring' : 'Umów konsultację'}
        </a>
        
        {/* Mobile Language Switcher */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            to="/"
            className={`flex items-center gap-1 px-2 py-1 rounded-md text-sm transition-colors ${
              !isEnglish ? 'bg-mind-content-blue text-white' : 'text-gray-600 hover:text-black'
            }`}
          >
            <span className="text-base">🇵🇱</span>
          </Link>
          <Link
            to="/en"
            className={`flex items-center gap-1 px-2 py-1 rounded-md text-sm transition-colors ${
              isEnglish ? 'bg-mind-content-blue text-white' : 'text-gray-600 hover:text-black'
            }`}
          >
            <span className="text-base">🇬🇧</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}