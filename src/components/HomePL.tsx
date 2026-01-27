import React from 'react';
import Hero from './Hero';
import DecisionVsOperationsSection from './DecisionVsOperationsSection';
import ProblemSection from './ProblemSection';
import AuditSection from './AuditSection';
import Companies from './Companies';
import WhyChooseMe from './WhyChooseMe';
import Testimonials from './Testimonials';
import About from './About';
import FinalCTA from './FinalCTA';
import Contact from './Contact';
import Footer from './Footer';

const HomePL = () => {
  return (
    <main className="pt-14 min-h-screen bg-mind-surface-content-white font-sans">
      <Hero />
      <DecisionVsOperationsSection />
      <ProblemSection />
      <AuditSection />
      <Companies />
      <WhyChooseMe />
      <Testimonials />
      <About />
      <FinalCTA />
      <Contact />
      <Footer lang="pl" />
    </main>
  );
};

export default HomePL;