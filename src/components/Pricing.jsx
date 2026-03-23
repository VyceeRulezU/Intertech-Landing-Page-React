import React from 'react';
import { motion } from 'framer-motion';
import PricingCard from './PricingCard';

const Pricing = () => {
    const plans = [
        {
            type: "Essential",
            price: "₦4,900/mo",
            data: "500 mb",
            features: [
                "Download speeds up to 500 Mbps",
                "Upload speeds up to 100 Mbps",
                "Unlimited data",
                "Free installation",
                "Basic security suite",
                "24/7 customer support"
            ],
            isPremium: false
        },
        {
            popular: true,
            type: "Performance",
            price: "₦4,900/mo",
            data: "2 Gbps",
            features: [
                "Download speeds up to 2 Gbps",
                "Upload speeds up to 1 Gpbs",
                "Unlimited data",
                "Free installation & router",
                "Advanced security suite",
                "24/7 customer support",
                "Priority support"
            ],
            isPremium: true
        },
        {
            type: "Essential",
            price: "₦14,900/mo",
            data: "10 Gbps",
            features: [
                "Download speeds up to 10 Gbps",
                "Upload speeds up to 5 Gbps",
                "Unlimited data",
                "Free installation & premium router",
                "Enterprise security suite",
                "Dedicated support line",
                "Static IP included",
                "Network monitoring dashboard"
            ],
            isPremium: false
        }
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
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section className="pricing_section" id="pricing">
            <motion.div 
                className="section_content_wrapper"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <motion.div className="section_header" variants={itemVariants}>
                    <h2>Simple, Transparent Pricing</h2>
                    <p>No hidden fees. No contracts. Cancel anytime.</p>
                </motion.div>

                <motion.div className="priing_card_wrapper" variants={containerVariants}>
                    {plans.map((plan, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <PricingCard {...plan} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Pricing;
