import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import ShopByCategory from './components/ShopByCategory';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css'; // Global css

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

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="body_wrapper">
      <Navbar cartCount={cartCount} />
      
      <div className="section_wrapper">
        <Hero />
        <ProductList products={products} onAddToCart={handleAddToCart} />
        <ShopByCategory />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
