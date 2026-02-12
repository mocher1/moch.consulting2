import React from 'react';
import HeroEN from './HeroEN';
import ServicesEN from './ServicesEN';
import IndustriesEN from './IndustriesEN';
import Companies from './Companies';
import WhyChooseMeEN from './WhyChooseMeEN';
import TestimonialsEN from './TestimonialsEN';
import AboutEN from './AboutEN';
import FAQEN from './FAQEN';
import ContactEN from './ContactEN';
import Footer from './Footer';

const HomeEN = () => {
  return (
    <main className="pt-14 min-h-screen bg-mind-surface-content-white font-sans">
      <HeroEN />
      <ServicesEN />
      <IndustriesEN />
      <Companies />
      <WhyChooseMeEN />
      <TestimonialsEN />
      <AboutEN />
      <FAQEN />
      <ContactEN />
      <Footer lang="en" />
    </main>
  );
};

export default HomeEN;