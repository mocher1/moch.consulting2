import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import Companies from './components/Companies';
import WhyChooseMe from './components/WhyChooseMe';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-14 min-h-screen bg-mind-surface-content-white font-sans">
        <Hero />
        <Services />
        <Industries />
        <Companies />
        <WhyChooseMe />
        <Testimonials />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;