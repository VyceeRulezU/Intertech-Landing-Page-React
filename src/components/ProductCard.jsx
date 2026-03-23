import React from 'react';

const ProductCard = ({ name, price, category, image, onAddToCart }) => {
  return (
    <div 
      className="feat-product-card" 
      style={{
        backgroundColor: '#061128',
        border: '1px solid #234B9F',
        borderRadius: '1.5rem',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0.5rem',
        transition: 'transform 0.3s ease, boxShadow 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{ width: '100%', height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
        <img 
          src={image || "./images/product1.png"} 
          alt={name} 
          style={{ minWidth: '100%', minHeight: '100%', maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', borderRadius: '1rem', mixBlendMode: 'lighten' }} 
        />
      </div>
      
      <span style={{ fontSize: '0.9rem', color: '#C4D7FF', fontWeight: '300' }}>{category || 'Electronics'}</span>
      <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', fontWeight: '300', margin: '0 0 0.5rem 0' }}>{name}</h3>
      <p style={{ fontSize: '1.2rem', color: '#6195FE', fontWeight: '300', margin: 0 }}>₦ {Number(price).toFixed(2)}</p>
      
      <div style={{ width: '100%', marginTop: '1rem' }}>
        <button 
          className="hero_btn primary_btn"
          onClick={(e) => {
            e.preventDefault();
            onAddToCart();
          }}
          style={{ 
            width: '100%', 
            justifyContent: 'center', 
            padding: '1rem',
            fontSize: '1rem',
            borderRadius: '0.6rem',
            border: 'none'
          }}
        >
          Add to Cart
          <span className="material-symbols-outlined" style={{ fontSize: '1.2rem', marginLeft: '0.5rem' }}>add_shopping_cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
