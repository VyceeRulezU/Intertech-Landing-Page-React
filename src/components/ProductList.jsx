import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="feat-product-section" style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 2rem' }}>
      
      <div className="feat-product-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', color: '#FFFFFF', fontWeight: '300', margin: 0 }}>Featured Products</h2>
          <a href="#" className="hero_btn primary_btn" style={{ padding: '0.8rem 1.5rem', borderRadius: '0.6rem', fontSize: '1rem' }}>
              See All Products
          </a>
      </div>

      <div className="feat-product-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {products.map(product => (
          <ProductCard 
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            image={product.image}
            onAddToCart={() => onAddToCart()}
          />
        ))}
      </div>
      
    </div>
  );
};

export default ProductList;
