import React from 'react';
import { Linkedin, Mail, Briefcase, Globe, Award } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AboutEN = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="about" ref={ref} className="py-24 bg-mind-surface-content-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-semibold text-mind-content-primary mb-8 tracking-tight leading-tight">
                Strategic HR that connects <span className="text-mind-content-blue">people</span> with <span className="text-mind-green">business</span> results.
              </h2>
              
              <div className="space-y-6 text-lg text-mind-content-secondary leading-relaxed tracking-tight">
                <p>
                  Since 2019, I've been working as an <strong className="text-mind-content-primary">independent HR expert</strong> (freelancer), supporting organizations in Poland and abroad. During this time, I've collaborated with dozens of companies – from dynamic tech startups to mature enterprises – helping them scale teams and establish processes across multiple European countries.
                </p>
                
                <p>
                  My approach is a unique hybrid. I combine <strong className="text-mind-content-primary">corporate standards</strong>, gained while working for market giants (GOG.com/CD Projekt Group, PepsiCo, EY), with the agility and flexibility essential in the SME world.
                </p>
                
                <p>
                  I'm not your typical "HR admin person." As a <strong className="text-mind-content-primary">Lean Six Sigma</strong> practitioner and enthusiast of <strong className="text-mind-content-primary">AI in business</strong>, I view Human Resources through the lens of numbers, efficiency, and return on investment (ROI).
                </p>

                <p>
                  My role is simple: I enter your organization, diagnose bottlenecks, and implement solutions that <strong className="text-mind-content-blue">turn chaos into organized systems</strong>.
                </p>
              </div>

              {/* Key attributes */}
              <div className="grid grid-cols-3 gap-4 mt-8 mb-8 border-t border-b border-mind-stroke-border-grey py-6">
                <div className="text-center">
                  <Globe className="w-8 h-8 text-mind-content-blue mx-auto mb-2" />
                  <p className="text-sm font-medium text-mind-content-primary">English C1</p>
                  <p className="text-xs text-mind-content-secondary">Fluent</p>
                </div>
                <div className="text-center border-l border-mind-stroke-border-grey">
                  <Briefcase className="w-8 h-8 text-mind-content-blue mx-auto mb-2" />
                  <p className="text-sm font-medium text-mind-content-primary">38 Days</p>
                  <p className="text-xs text-mind-content-secondary">Avg. Time-to-Hire</p>
                </div>
                <div className="text-center border-l border-mind-stroke-border-grey">
                  <Award className="w-8 h-8 text-mind-content-blue mx-auto mb-2" />
                  <p className="text-sm font-medium text-mind-content-primary">10+ Years</p>
                  <p className="text-xs text-mind-content-secondary">Experience</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button 
                  className="flex items-center gap-3 bg-mind-content-blue hover:bg-mind-hover-blue text-mind-surface-content-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl focus-visible:ring-2 focus-visible:ring-mind-content-blue focus-visible:ring-offset-2"
                  aria-label="View Rafał's LinkedIn profile"
                  onClick={() => window.open('https://linkedin.com', '_blank')}
                >
                  <Linkedin size={20} />
                  LinkedIn
                </button>
                <button 
                  className="flex items-center gap-3 border-2 border-mind-stroke-border-grey hover:border-mind-content-blue text-mind-content-primary hover:text-mind-content-blue px-6 py-3 rounded-xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-mind-content-blue focus-visible:ring-offset-2"
                  aria-label="Contact Rafał"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Mail size={20} />
                  Contact Me
                </button>
              </div>
            </div>
            
            {/* Image Area */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                 {/* Placeholder for your photo - aspect ratio optimized */}
                 <div className="aspect-[3/4] bg-gradient-to-br from-mind-surface-bg-grey to-mind-light-grey flex items-center justify-center">
                    <div className="text-center p-8">
                        <div className="w-20 h-20 bg-mind-content-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 text-mind-content-blue">
                            <Briefcase size={32} />
                        </div>
                        <p className="text-mind-content-secondary">Professional photo placeholder</p>
                    </div>
                 </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-mind-content-blue/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-mind-green/10 rounded-full blur-3xl -z-10"></div>
              
              {/* Floating badge */}
              <div className="absolute bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-mind-stroke-border-grey animate-bounce-slow hidden md:block">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <Award size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Certificate</p>
                        <p className="text-sm font-bold text-gray-900">Lean Six Sigma</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEN;