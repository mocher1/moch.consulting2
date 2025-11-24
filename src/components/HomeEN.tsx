import React from 'react';
import HeroEN from './HeroEN';
import ServicesEN from './ServicesEN';
import IndustriesEN from './IndustriesEN';
import Companies from './Companies';
import WhyChooseMe from './WhyChooseMe';
import Testimonials from './Testimonials';
import AboutEN from './AboutEN';
import ContactEN from './ContactEN';

const HomeEN = () => {
  return (
    <main className="pt-14 min-h-screen bg-mind-surface-content-white font-sans">
      <HeroEN />
      <ServicesEN />
      <IndustriesEN />
      <Companies />
      <WhyChooseMe />
      <Testimonials />
      <AboutEN />
      <ContactEN />
    </main>
  );
};

export default HomeEN;