import React from 'react';
import { motion } from 'framer-motion';
import PerfCard from './PerfCard';
import zapIcon from '../assets/zap.svg';
import cpuIcon from '../assets/cpu.svg';
import shieldIcon from '../assets/shield.svg';
import speedometerIcon from '../assets/speedometer.svg';
import headphonesIcon from '../assets/headphones.svg';
import globeIcon from '../assets/globe.svg';

const Performance = () => {
    const perfData = [
        {
            icon: zapIcon,
            title: "Ultra-Fast Speeds",
            sum: "Up to 10Gbps fiber connectivity for seamless streaming, gaming, and downloads. Experience the internet at its full potential."
        },
        {
            icon: cpuIcon,
            title: "Smart Technology",
            sum: "AI-powered network optimization and automatic failover. Your connection stays fast and reliable."
        },
        {
            icon: shieldIcon,
            title: "Advanced Security",
            sum: "Built-in DDoS protection, firewall, and encrypted connections. Your data stays safe and secure at all times."
        },
        {
            icon: speedometerIcon,
            title: "Low Latency",
            sum: "Sub-5ms latency for gaming and real-time applications. Perfect for competitive gaming and video calls."
        },
        {
            icon: headphonesIcon,
            title: "24/7 Support",
            sum: "Expert technical support available around the clock. Get help whenever you need it, day or night."
        },
        {
            icon: globeIcon,
            title: "Global Network",
            sum: "Connected to major internet exchanges worldwide. Optimized routing for the best performance anywhere."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="perf_section">
            <motion.div 
                className="section_content_wrapper"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <motion.div className="section_header" variants={itemVariants}>
                    <h2>Built for Performance. Ready for Anything.</h2>
                    <p>Enterprise-grade infrastructure meets residential pricing. Get the connectivity your digital life demands.</p>
                </motion.div>

                <div className="perf_card_wrapper">
                    {perfData.map((data, index) => (
                        <PerfCard key={index} {...data} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Performance;
