import React from 'react';

const Hero = () => {
  return (
    <div style={{
      display: 'flex',
      backgroundColor: '#0C1C40', // A dark blue matching the legacy theme card borders
      borderRadius: '1.8rem',
      padding: '4rem',
      marginTop: '10rem',
      margin: '2rem auto',
      maxWidth: '1200px',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '2rem'
    }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '300', color: '#FFFFFF', lineHeight: '1.2' }}>
          Elevate Your Audio Journey
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#C4D7FF', lineHeight: '1.5' }}>
          Experience Sound In Its Purest Form. Our premium audio equipment brings studio-quality precision to your everyday listening.
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <a href="#" className="hero_btn primary_btn" style={{ padding: '1rem 2rem', borderRadius: '0.6rem' }}>
            Shop Now
          </a>
          <a href="#" className="hero_btn secondary_btn" style={{ padding: '1rem 2rem', borderRadius: '0.6rem' }}>
            Learn More
          </a>
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <img 
          src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop" 
          alt="Person listening to headphones" 
          style={{ width: '100%', maxWidth: '400px', borderRadius: '1.5rem', objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export default Hero;
