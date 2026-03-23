import React from 'react';
import { motion } from 'framer-motion';
import globeVideo from '../assets/digital-globe.mp4';
import starIcon from '../assets/star_22.svg';
import avatarGroup from '../assets/avatar-group.svg';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20
            }
        }
    };

    return (
        <section className="hero_section">
            <motion.div 
                className="section_content_wrapper"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="hero_header">
                    <motion.div className="hero_chip" variants={itemVariants}>
                        <span className="new">New</span>
                        <p className="chip_txt">Introducing 10 Gbps plans — Experience the fastest fiber in the nation</p>
                        <span className="material-symbols-outlined blue_arrow">arrow_outward</span>
                    </motion.div>

                    <motion.h1 variants={itemVariants}>
                        Lightning-fast Internet for the Modern World.
                    </motion.h1>

                    <motion.p className="hero_sum" variants={itemVariants}>
                        Experience ultra-reliable fiber connectivity with speeds up to 10Gbps. Stream, game, and work without limits.
                    </motion.p>

                    <motion.div className="sub_users" variants={itemVariants}>
                        <img src={avatarGroup} alt="Subscribers" />
                        <p>Over 500 Subscribers</p>
                    </motion.div>

                    <motion.div className="hero_btns_wrapper" variants={itemVariants}>
                        <a href="#" className="hero_btn primary_btn">
                            Check Availability
                            <span className="material-symbols-outlined">arrow_outward</span>
                        </a>
                        <a href="#" className="hero_btn secondary_btn">
                            Learn More
                            <span className="material-symbols-outlined">arrow_outward</span>
                        </a>
                    </motion.div>
                </div>
            </motion.div>

            <video className="hero_gif" autoPlay muted loop playsInline>
                <source src={globeVideo} type="video/mp4" />
            </video>

            <motion.div 
                className="star"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.85, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <img src={starIcon} alt="Star" />
            </motion.div>
        </section>
    );
};

export default Hero;
