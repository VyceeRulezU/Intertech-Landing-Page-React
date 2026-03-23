import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/Logo_main.svg';

const Navbar = ({ cartCount = 0 }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        // Update path on location changes if using a client-side router
        setCurrentPath(window.location.pathname);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Close menu on escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeMenu();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            const mobileNav = document.querySelector('.mobile_nav_links_wrapper');
            const menuBtn = document.querySelector('.hamburger-btn');
            if (isMenuOpen && mobileNav && !mobileNav.contains(e.target) && !menuBtn.contains(e.target)) {
                closeMenu();
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMenuOpen]);

    const menuVariants = {
        closed: {
            x: '100%',
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30
            }
        },
        open: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30
            }
        }
    };

    // Helper to check active state based on URL or assume '/' is products
    const isProductsActive = currentPath.includes('product') || currentPath === '/';

    return (
        <div className="nav_wrapper">
            {/* Desktop Nav */}
            <div className="nav">
                <div className="logo">
                    <a href="/"><img src={logo} alt="InterTech Logo" /></a>
                </div>

                <nav className="nav_links_wrapper">
                    <a className="nav-link" href="#solution">Solution</a>
                    <a className="nav-link" href="#products" style={isProductsActive ? { color: '#6195FE', fontWeight: 'bold' } : {}}>Products</a>
                    <a className="nav-link" href="#pricing">Pricing</a>
                    <a className="nav-link" href="#faqs">FAQs</a>
                </nav>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href="#" className="nav-btn" style={{ backgroundColor: 'transparent', color: '#FFFFFF', border: '1px solid #717171' }}>
                        Cart ({cartCount})
                        <span className="material-symbols-outlined">shopping_cart</span>
                    </a>
                </div>
            </div>

            {/* Mobile Nav */}
            <div className="nav_mobile">
                <div className="logo">
                    <a href="/"><img src={logo} alt="InterTech Logo" /></a>
                </div>

                <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle Menu">
                    <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>

                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div 
                            className="mobile_nav_links_wrapper open"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                        >
                            <div className="close_menu" onClick={closeMenu}>
                                <span className="material-symbols-outlined">close</span>
                            </div>
                            <nav className="mobile_nav_links">
                                <a className="nav-link" href="#solution" onClick={closeMenu}>Solution</a>
                                <a className="nav-link" href="#products" onClick={closeMenu} style={isProductsActive ? { color: '#6195FE', fontWeight: 'bold' } : {}}>Products</a>
                                <a className="nav-link" href="#pricing" onClick={closeMenu}>Pricing</a>
                                <a className="nav-link" href="#faqs" onClick={closeMenu}>FAQs</a>
                            </nav>
                            <a href="#" className="nav-btn mobile_menu_btn" style={{ backgroundColor: 'transparent', color: '#FFFFFF', border: '1px solid #717171' }}>
                                Cart ({cartCount})
                                <span className="material-symbols-outlined">shopping_cart</span>
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Navbar;
