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
                  className="flex items-center justify-center gap-3 bg-mind-content-blue hover:bg-mind-hover-blue text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  onClick={() => window.open('https://linkedin.com/in/your-profile', '_blank')}
                >
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </button>
                
                <button 
                  className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-mind-content-blue border-2 border-mind-content-blue px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  onClick={() => window.location.href = 'mailto:contact@example.com'}
                >
                  <Mail size={20} />
                  Send Email
                </button>
              </div>
            </div>

            {/* PROFILE IMAGE */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-mind-content-blue to-blue-600 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Briefcase size={64} className="mx-auto mb-4 opacity-80" />
                      <p className="text-lg font-semibold">Professional Photo</p>
                      <p className="text-sm opacity-80">Coming Soon</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg">
                  <CheckCircle className="w-6 h-6 text-mind-green" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg">
                  <Globe className="w-6 h-6 text-mind-content-blue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutEN;