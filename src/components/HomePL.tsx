import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Companies from './Companies';
import WhyChooseMe from './WhyChooseMe';
import Testimonials from './Testimonials';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const HomePL = () => {
  return (
    <main className="pt-14 min-h-screen bg-mind-surface-content-white font-sans">
      <Hero />
      <Services />
      <Companies />
      <WhyChooseMe />
      <Testimonials />
      <About />
      <Contact />
      <Footer lang="pl" />
    </main>
  );
};

export default HomePL;