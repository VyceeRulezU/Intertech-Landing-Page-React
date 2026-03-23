import React from 'react';

const Header = ({ cartCount }) => {
  return (
    <div className="nav_wrapper">
      <div className="nav">
        <div className="logo">
          <a href="/"><img src="./images/Logo_main.svg" alt="InterTech Logo" /></a>
        </div>

        <nav className="nav_links_wrapper">
          <a className="nav-link" href="#">Solution</a>
          <a className="nav-link" href="#">Products</a>
          <a className="nav-link" href="#">Pricing</a>
          <a className="nav-link" href="#">FAQs</a>
        </nav>

        <a href="#" className="nav-btn" onClick={(e) => e.preventDefault()}>
          Cart ({cartCount})
          <span className="material-symbols-outlined">shopping_cart</span>
        </a>
      </div>

      <div className="nav_mobile">
        <div className="logo">
          <a href="/"><img src="./images/Logo_main.svg" alt="InterTech Logo" /></a>
        </div>
        
        <div className="menu">
          <img src="./images/menu-3-line.svg" alt="Mobile Menu" />
        </div>

        <div className="mobile_nav_links_wrapper">
          <div className="close_menu">
            <span className="material-symbols-outlined">close</span>
          </div>
          <nav className="mobile_nav_links">
            <a className="nav-link" href="#">Solution</a>
            <a className="nav-link" href="#">Products</a>
            <a className="nav-link" href="#">Pricing</a>
            <a className="nav-link" href="#">FAQs</a>
          </nav>
          <a href="#" className="nav-btn mobile_menu_btn" onClick={(e) => e.preventDefault()}>
            Cart ({cartCount})
            <span className="material-symbols-outlined">shopping_cart</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
