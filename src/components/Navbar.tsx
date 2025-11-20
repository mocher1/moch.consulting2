import { useEffect, useState } from "react";

const LINKS = [
  { href: "#services", label: "Usługi" },
  { href: "#industries", label: "Branże" },
  { href: "#why", label: "Dlaczego ja" },
  { href: "#testimonials", label: "Opinie" },
  { href: "#about", label: "O mnie" },
  { href: "#contact", label: "Kontakt" }
];

export default function Navbar() {
  const [active, setActive] = useState<string>("#");

  useEffect(() => {
    const sections = LINKS.map(l => document.querySelector(l.href) as HTMLElement).filter(Boolean);
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
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
      <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="w-8 h-8 bg-gradient-to-br from-mind-content-blue to-mind-green rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-mind-content-primary text-lg leading-none tracking-tight">moch</span>
            <span className="font-medium text-mind-content-blue text-xs leading-none tracking-tight">.consulting</span>
          </div>
        </a>
        <ul className="hidden md:flex items-center gap-6">
          {LINKS.map(l => (
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
        <a
          href="#contact"
          className="hidden md:inline-flex text-sm px-4 py-2 rounded-xl bg-black text-white hover:opacity-90 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 transition-all"
        >
          Umów konsultację
        </a>
      </nav>
    </header>
  );
}