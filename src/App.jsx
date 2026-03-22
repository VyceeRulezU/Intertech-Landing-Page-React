import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Infrastructure from './components/Infrastructure';
import Performance from './components/Performance';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="body_wrapper">
      <Analytics />
      <Navbar />
      <div className="section_wrapper">
        <Hero />
        <Trust />
        <Infrastructure />
        <Performance />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
