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
          {/* LOGO - HR Talent Bridge */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <rect width="32" height="32" rx="8" fill="url(#logo-gradient)" />
            {/* Stylizowana litera M z połączeniami */}
            <path d="M6 24V12L12 18L16 14L20 18L26 12V24" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            {/* Punkty połączeń reprezentujące talenty */}
            <circle cx="12" cy="18" r="1.5" fill="white" />
            <circle cx="20" cy="18" r="1.5" fill="white" />
            {/* Gradient tło */}
            <defs>
              <linearGradient id="logo-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0069ff" /> {/* mind-content-blue */}
                <stop offset="0.6" stopColor="#2dca8c" /> {/* mind-green */}
                <stop offset="1" stopColor="#10b981" />
              </linearGradient>
            </defs>
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
              <svg width="16" height="12" viewBox="0 0 16 12" className="shrink-0">
                <rect width="16" height="6" fill="#ffffff"/>
                <rect y="6" width="16" height="6" fill="#dc143c"/>
              </svg>
              PL
            </Link>
            <Link
              to="/en"
              className={`flex items-center gap-1 px-2 py-1 rounded-md text-sm transition-colors ${
                isEnglish ? 'bg-mind-content-blue text-white' : 'text-gray-600 hover:text-black hover:bg-gray-100'
              }`}
            >
              <svg width="16" height="12" viewBox="0 0 16 12" className="shrink-0">
                <rect width="16" height="12" fill="#012169"/>
                <path d="M0 0l16 12M16 0L0 12" stroke="#ffffff" strokeWidth="1.5"/>
                <path d="M0 0l16 12M16 0L0 12" stroke="#c8102e" strokeWidth="1"/>
                <path d="M8 0v12M0 6h16" stroke="#ffffff" strokeWidth="2"/>
                <path d="M8 0v12M0 6h16" stroke="#c8102e" strokeWidth="1.2"/>
              </svg>
              EN
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
            <svg width="16" height="12" viewBox="0 0 16 12" className="shrink-0">
              <rect width="16" height="6" fill="#ffffff"/>
              <rect y="6" width="16" height="6" fill="#dc143c"/>
            </svg>
            <span className="hidden sm:inline">PL</span>
          </Link>
          <Link
            to="/en"
            className={`flex items-center gap-1 px-2 py-1 rounded-md text-sm transition-colors ${
              isEnglish ? 'bg-mind-content-blue text-white' : 'text-gray-600 hover:text-black'
            }`}
          >
            <svg width="16" height="12" viewBox="0 0 16 12" className="shrink-0">
              <rect width="16" height="12" fill="#012169"/>
              <path d="M0 0l16 12M16 0L0 12" stroke="#ffffff" strokeWidth="1.5"/>
              <path d="M0 0l16 12M16 0L0 12" stroke="#c8102e" strokeWidth="1"/>
              <path d="M8 0v12M0 6h16" stroke="#ffffff" strokeWidth="2"/>
              <path d="M8 0v12M0 6h16" stroke="#c8102e" strokeWidth="1.2"/>
            </svg>
            <span className="hidden sm:inline">EN</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}