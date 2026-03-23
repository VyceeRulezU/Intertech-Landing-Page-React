import React from 'react';

const features = [
  {
    id: 1,
    icon: 'local_shipping',
    title: 'Free Delivery',
    description: 'Enjoy fast and free shipping on all orders nationwide, directly to your doorstep.'
  },
  {
    id: 2,
    icon: 'storefront',
    title: 'Self Pickup',
    description: 'Order online and pick up at your nearest InterTech retail location within 2 hours.'
  },
  {
    id: 3,
    icon: 'verified',
    title: 'Warranty',
    description: 'All premium audio products come with a comprehensive 2-year international warranty.'
  }
];

const StoreFeatures = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '4rem auto', padding: '4rem 2rem', backgroundColor: '#061128', border: '1px solid #234B9F', borderRadius: '1.8rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', color: '#FFFFFF', fontWeight: 'bold', marginBottom: '3rem' }}>
        Experience Streamlined Shopping With InterTech
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
        {features.map((feature) => (
          <div key={feature.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{ 
              width: '4rem', height: '4rem', 
              backgroundColor: '#0C1C40', 
              borderRadius: '1rem', 
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              border: '1px solid #6195FE'
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: '2rem', color: '#6195FE' }}>{feature.icon}</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF' }}>{feature.title}</h3>
            <p style={{ color: '#C4D7FF', fontSize: '1rem', lineHeight: '1.5', maxWidth: '300px' }}>{feature.description}</p>
          </div>
        ))}
      </div>

      <a href="#" className="hero_btn primary_btn" style={{ padding: '1rem 3rem', borderRadius: '0.6rem', display: 'inline-flex' }}>
        Shop Now
      </a>
    </div>
  );
};

export default StoreFeatures;
