import React from 'react';
import footerLogo from '../assets/Footer Logo.svg';
import socialIcons from '../assets/Social Icons.svg';
import xIcon from '../assets/X.svg';
import discordIcon from '../assets/Discord.svg';
import linkedinIcon from '../assets/Linkedin.svg';
import footerMoon from '../assets/footermoon6.svg';

const Footer = () => {
    return (
        <section className="footer_section">
            <div className="section_content_wrapper">
                <div className="footer_top">
                    <div className="footer_logo_sum">
                        <div className="footer_logo">
                            <img src={footerLogo} alt="Footer Logo" />
                        </div>
                        <p className="footer_sum">Ultra-fast fiber internet for homes and businesses. Experience the future of connectivity.</p>
                    </div>

                    <div className="footer_link_wrapper">
                        <div className="footer_link_cont">
                            <p className="link_title">Products</p>
                            <div className="footer_links">
                                <a className="footer_link" href="#">Residential</a>
                                <a className="footer_link" href="#">Business</a>
                                <a className="footer_link" href="#">Enterprise</a>
                                <a className="footer_link" href="#">Add-ons</a>
                            </div>
                        </div>

                        <div className="footer_link_cont">
                            <p className="link_title">Support</p>
                            <div className="footer_links">
                                <a className="footer_link" href="#">Help Center</a>
                                <a className="footer_link" href="#">Contact Us</a>
                                <a className="footer_link" href="#">Coverage Map</a>
                                <a className="footer_link" href="#">Service Status</a>
                            </div>
                        </div>

                        <div className="footer_link_cont">
                            <p className="link_title">Company</p>
                            <div className="footer_links">
                                <a className="footer_link" href="#">About Us</a>
                                <a className="footer_link" href="#">Careers</a>
                                <a className="footer_link" href="#">Press</a>
                                <a className="footer_link" href="#">Partners</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer_bottom">
                    <p className="rights">© 2025 InterTech. All rights reserved.</p>
                    <div className="socials">
                        <img src={socialIcons} alt="Facebook" />
                        <img src={xIcon} alt="X" />
                        <img src={discordIcon} alt="Discord" />
                        <img src={linkedinIcon} alt="Linkedin" />
                    </div>
                </div>
            </div>

            <div className="footer_img">
                <img src={footerMoon} alt="Moon" />
            </div>
        </section>
    );
};

export default Footer;
