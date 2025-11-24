import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Industries from './Industries';
import Companies from './Companies';
import WhyChooseMe from './WhyChooseMe';
import Testimonials from './Testimonials';
import About from './About';
import Contact from './Contact';

const HomePL = () => {
  return (
    <main className="pt-14 min-h-screen bg-mind-surface-content-white font-sans">
      <Hero />
      <Services />
      <Industries />
      <Companies />
      <WhyChooseMe />
      <Testimonials />
      <About />
      <Contact />
    </main>
  );
};

export default HomePL;