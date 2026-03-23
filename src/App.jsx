import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import './App.css'; // Global css

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <Router>
      <div className="body_wrapper">
        <Navbar cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage onAddToCart={handleAddToCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
