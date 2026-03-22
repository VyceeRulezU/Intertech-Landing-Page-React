import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import Counter from './Counter';

// Import logos
import logo1 from '../assets/Comp_logo1.svg';
import logo2 from '../assets/Comp_logo2.svg';
import logo3 from '../assets/Comp_logo3.svg';
import logo4 from '../assets/Comp_logo4.svg';
import logo5 from '../assets/Comp_logo5.svg';
import logo6 from '../assets/Comp_logo6.svg';
import logo7 from '../assets/Comp_logo7.svg';

// Import feature icons
import usersIcon from '../assets/users.svg';
import buildingsIcon from '../assets/buildings.svg';
import awardIcon from '../assets/award.svg';
import mapPinIcon from '../assets/map-pin.svg';

const Trust = () => {
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

    const features = [
        { icon: usersIcon, title: "500k", subtitle: "Satisfied Customers" },
        { icon: buildingsIcon, title: "25k", subtitle: "Businesses Serviced" },
        { icon: awardIcon, title: "15+", subtitle: "Industry Award" },
        { icon: mapPinIcon, title: "250k", subtitle: "Cities Served" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section className="trust_section">
            <motion.div 
                className="section_content_wrapper"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <motion.p className="trust_sum" variants={itemVariants}>
                    Trusted by thousands of businesses worldwide
                </motion.p>

                <motion.div className="trust_logos_wrapper" variants={itemVariants}>
                    <div className="logos_track scrolling">
                        {[...logos, ...logos].map((logo, index) => (
                            <img key={index} src={logo} alt={`Company Logo ${index + 1}`} />
                        ))}
                    </div>
                </motion.div>

                <motion.div className="feat" variants={containerVariants}>
                    {features.map((feat, index) => (
                        <motion.div key={index} variants={itemVariants} className="feat_card_container">
                            <div className="feat_card">
                                <div className="feat_card_icon">
                                    <img src={feat.icon} alt={feat.title} />
                                </div>
                                <p className="feat_title">
                                    <Counter value={feat.title} />
                                </p>
                                <p className="feat_subtitle">{feat.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Trust;
