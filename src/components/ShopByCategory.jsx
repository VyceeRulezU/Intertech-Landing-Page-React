import React from 'react';

const categories = [
  {
    id: 1,
    title: 'Speaker',
    description: 'High fidelity audio for every room. Seamless wireless connectivity combined with rich, deep bass.',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Accessories',
    description: 'Enhance your experience with premium stands, cases, and protective gear for your devices.',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Wireless Charger',
    description: 'Fast, efficient, and sleek charging pads that blend perfectly with your minimalist workspace.',
    image: 'https://images.unsplash.com/photo-1615526675159-e248c3021d3f?q=80&w=600&auto=format&fit=crop'
  }
];

const ShopByCategory = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2rem', color: '#FFFFFF', fontWeight: '300' }}>Shop By Category</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <span className="material-symbols-outlined" style={{ color: '#FFFFFF', cursor: 'pointer', fontSize: '2rem' }}>arrow_circle_left</span>
          <span className="material-symbols-outlined" style={{ color: '#FFFFFF', cursor: 'pointer', fontSize: '2rem' }}>arrow_circle_right</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {categories.map((cat) => (
          <div key={cat.id} style={{
            backgroundColor: '#061128', // Same card bg as legacy
            border: '1px solid #234B9F',
            borderRadius: '1.5rem',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            overflow: 'hidden'
          }}>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '1rem', fontWeight: '300' }}>{cat.title}</h3>
              <p style={{ color: '#C4D7FF', fontSize: '1rem', lineHeight: '1.5', marginBottom: '1.5rem' }}>
                {cat.description}
              </p>
              <a href="#" style={{ color: '#6195FE', textDecoration: 'none', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                View {cat.title} 
                <span className="material-symbols-outlined" style={{ fontSize: '1.2rem' }}>chevron_right</span>
              </a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', minHeight: '200px', backgroundImage: `url(${cat.image})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '1rem' }}>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
