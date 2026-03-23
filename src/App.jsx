import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import './App.css'; // Global css

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCart(prev => {
      const index = prev.findIndex(item => item.id === productId);
      if (index > -1) {
        const newCart = [...prev];
        newCart.splice(index, 1);
        return newCart;
      }
      return prev;
    });
  };

  return (
    <Router>
      <div className="body_wrapper">
        <Navbar cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/products" 
            element={
              <ProductsPage 
                cart={cart} 
                onAddToCart={handleAddToCart} 
                onRemoveFromCart={handleRemoveFromCart} 
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
