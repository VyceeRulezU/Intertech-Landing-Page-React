import React from 'react';
import ctaMoon from '../assets/CTA Moon.svg';

const CTA = () => {
    return (
        <section className="cta_section">
            <div className="cta_content_wrapper">
                <div className="section_header">
                    <h2>Ready to Experience Internet at Light Speed?</h2>
                    <p>Join 500,000+ happy customers who've made the switch to fiber. Get your first month for just $1 when you sign up today.</p>

                    <div className="hero_btns_wrapper">
                        <a href="#" className="hero_btn primary_btn">
                            Check Availability
                            <span className="material-symbols-outlined">arrow_outward</span>
                        </a>
                        <a href="#" className="hero_btn secondary_btn">
                            Learn More
                            <span className="material-symbols-outlined">arrow_outward</span>
                        </a>
                    </div>
                </div>

                <div className="cta_img">
                    <img src={ctaMoon} alt="Moon" />
                </div>
            </div>
        </section>
    );
};

export default CTA;
