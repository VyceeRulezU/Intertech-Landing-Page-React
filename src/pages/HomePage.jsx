import React from 'react';
import IndexHero from '../components/IndexHero';
import Trust from '../components/Trust';
import Infrastructure from '../components/Infrastructure';
import Performance from '../components/Performance';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="section_wrapper">
      <IndexHero />
      <Trust />
      <Infrastructure />
      <Performance />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;
