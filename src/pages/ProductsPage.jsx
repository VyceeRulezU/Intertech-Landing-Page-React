import React from 'react';
import ProductList from '../components/ProductList';
import ShopByCategory from '../components/ShopByCategory';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const products = [
  { 
    id: 1, 
    name: "Pro X168A Headphones", 
    price: 250, 
    category: "Headphones",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=600"
  },
  { 
    id: 2, 
    name: "Earbud Y168A", 
    price: 270, 
    category: "Earbuds",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=600"
  },
  { 
    id: 3, 
    name: "Speaker P168A", 
    price: 240, 
    category: "Speakers",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=600"
  },
];

const ProductsPage = ({ onAddToCart }) => {
  return (
    <div className="section_wrapper">
      <div className="hero_section">
        <div className="section_content_wrapper">
          <div className="hero_header">
              <h1>Elevate Your Audio Journey</h1>
              <p>Discover our premium range of audio equipment, designed to bring studio-quality sound to your fingertips. From high-fidelity headphones to professional-grade microphones, we have everything you need to experience audio like never before.</p>
          </div>

          <div className="hero_btns_wrapper">
              <a href="#" className="hero_btn primary_btn">
                  Check Availability
                  <span className="material-symbols-outlined">arrow_outward</span>
              </a>
              <a href="#" className="hero_btn secondary_btn">
                  Learn More
                  <span className="material-symbols-outlined">arrow_outward</span>
              </a>
          </div>
        </div>
      </div>
      <ProductList products={products} onAddToCart={onAddToCart} />
      <ShopByCategory />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default ProductsPage;
