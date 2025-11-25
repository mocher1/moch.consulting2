import React from 'react';
import { Linkedin, Mail, Briefcase, Globe, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AboutEN = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="about" ref={ref} className="py-24 bg-mind-surface-content-white relative overflow-hidden">
      {/* Dekoracyjne tło */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* TEXT CONTENT */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-mind-content-blue mb-6 w-fit">
                <Globe size={14} />
                <span className="text-xs font-bold tracking-wide uppercase">Based in Warsaw, Working Globally</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-mind-content-primary mb-8 leading-tight tracking-tight">
                I'm your <span className="text-mind-content-blue">"Boots on the Ground"</span> <br />
                in the Polish Tech Market.
              </h2>
              
              <div className="space-y-6 text-lg text-mind-content-secondary leading-relaxed">
                <p>
                  Hiring remotely can be risky if you don't have a trusted partner locally. With over <strong>10 years of experience</strong> in HR & Recruitment for global brands like <strong className="text-mind-content-primary">GOG.com (CD PROJEKT Group)</strong>, <strong className="text-mind-content-primary">PepsiCo</strong>, and <strong className="text-mind-content-primary">EY</strong>, I bridge the gap between Western business expectations and Polish tech talent.
                </p>
                
                <p>
                  I am not just a recruiter. I am an <strong className="text-mind-content-primary">independent consultant</strong>. This means I work directly with your Hiring Managers, I understand your stack, and I care about your "Time-to-Hire" as much as you do.
                </p>
                
                <p>
                  Why work with me? Because I combine the agility of a freelancer with the standards of a corporate Head of HR. No fluff, no hidden fees, just high-quality candidates delivered to your pipeline.
                </p>
              </div>

              {/* KEY ATTRIBUTES GRID */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 mb-10">
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <Globe className="w-6 h-6 text-mind-content-blue mb-2" />
                  <p className="font-bold text-mind-content-primary">English C1</p>
                  <p className="text-xs text-gray-500">Fluent Communication</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <Briefcase className="w-6 h-6 text-mind-content-blue mb-2" />
                  <p className="font-bold text-mind-content-primary">Tech & Gaming</p>
                  <p className="text-xs text-gray-500">Industry Expert</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <CheckCircle className="w-6 h-6 text-mind-green mb-2" />
                  <p className="font-bold text-mind-content-primary">B2B Contracts</p>
                  <p className="text-xs text-gray-500">Full Compliance</p>
                </div>
              </div>
              
              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="flex items-center justify-center gap-3 bg-mind-content-blue hover:bg-mind-hover-blue text-white px-8 py-4 rounded