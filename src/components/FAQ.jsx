import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FAQCard from './FAQCard';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What makes fiber internet better than cable or DSL?",
            answer: "Fiber-optic internet uses light signals through glass fibers, offering significantly faster speeds (up to 10Gbps), lower latency, more reliable connections, and symmetrical upload/download speeds. Unlike cable or DSL, fiber performance doesn't degrade with distance or number of users."
        },
        {
            question: "Is there a contract or can I cancel anytime?",
            answer: "We offer completely contract-free service. You can cancel at any time without penalties or fees. We believe our service quality speaks for itself - no need to lock you in with contracts."
        },
        {
            question: "How long does installation take?",
            answer: "Professional installation typically takes 2-4 hours. Our technicians will run the fiber line to your location, install the equipment, and ensure everything is working perfectly. In most cases, you can schedule installation within 3-5 business days of ordering."
        },
        {
            question: "Are there any data caps or throttling?",
            answer: "Absolutely not. We offer truly unlimited data with no caps, throttling, or slowdowns. Stream, game, download, and upload as much as you want, 24/7, without any restrictions."
        },
        {
            question: "What equipment is included?",
            answer: "All plans include a high-performance WiFi 6 router at no extra cost. Performance and Ultimate plans include upgraded routers with extended range. All equipment is professionally installed and maintained by our team."
        }
    ];

    const revealVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section className="faq_section" id="faqs">
            <motion.div 
                className="section_content_wrapper"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={revealVariants}
            >
                <div className="faq_container">
                    <div className="faq_section_header">
                        <h2>Frequently Asked Questions</h2>
                        <p>Everything you need to know about Intertech</p>
                    </div>

                    <div className="faq_card_wrapper">
                        {faqs.map((faq, index) => (
                            <FAQCard 
                                key={index} 
                                question={faq.question} 
                                answer={faq.answer} 
                                isOpen={activeIndex === index}
                                onToggle={() => toggleFAQ(index)}
                            />
                        ))}

                        <p className="have_questions">Still have questions?</p>
                        <a className="support-link" href="#">Contact Support</a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default FAQ;
