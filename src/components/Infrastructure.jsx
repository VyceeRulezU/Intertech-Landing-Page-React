import React from 'react';
import { motion } from 'framer-motion';
import InfraCard from './InfraCard';
import dotIcon from '../assets/Dot.svg';
import serverIcon from '../assets/server.svg';
import lockIcon from '../assets/lock.svg';
import folderConnectionIcon from '../assets/folder-connection.svg';
import activityIcon from '../assets/activity.svg';

const Infrastructure = () => {
    const infraData = [
        {
            title: "Fiber Network",
            subtitle: "100% fiber-optic infrastructure from our data centers directly to your location. No copper, no compromises.",
            points: [
                "Direct fiber connections to major internet exchanges",
                "Redundant network paths for maximum uptime",
                "Low-latency routing optimized for gaming and streaming"
            ],
            icon: serverIcon
        },
        {
            title: "Smart Monitoring",
            subtitle: "AI-powered network monitoring detects and resolves issues before they affect your connection.",
            points: [
                "Real-time performance analytics",
                "Proactive issue detection and resolution",
                "Automatic quality optimization"
            ],
            icon: lockIcon
        },
        {
            title: "Edge Computing",
            subtitle: "Distributed edge servers bring content closer to you for faster load times and reduced latency.",
            points: [
                "50+ edge locations nationwide",
                "Intelligent traffic routing and load balancing",
                "Built-in CDN for popular streaming services"
            ],
            icon: folderConnectionIcon
        },
        {
            title: "Enterprise Security",
            subtitle: "Military-grade encryption and advanced threat protection keep your data safe from cyber threats.",
            points: [
                "DDoS protection and firewall included",
                "Encrypted DNS and secure browsing",
                "Malware and phishing protection"
            ],
            icon: activityIcon
        }
    ];

    const revealVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="infra_section">
            <motion.div 
                className="section_content_wrapper"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={revealVariants}
            >
                <div className="section_header">
                    <h2>Cutting-Edge Infrastructure</h2>
                    <p>Our network is built on the latest technology to deliver unmatched performance and reliability.</p>
                </div>

                {/* Desktop Layout */}
                <div className="infra_cards_wrapper">
                    <div className="infra_left">
                        <InfraCard {...infraData[0]} />
                        <div className="icon_cont left_icon_cont">
                             <div className="infra_icon"><img src={infraData[0].icon} alt="Icon" /></div>
                        </div>
                        <InfraCard {...infraData[1]} />
                        <div className="icon_cont left_icon_cont">
                             <div className="infra_icon"><img src={infraData[1].icon} alt="Icon" /></div>
                        </div>
                    </div>

                    <div className="bar">
                        {[0, 1, 2, 3].map(i => (
                            <div key={i} className="dot_wrapper">
                                <img src={dotIcon} alt="Dot" />
                            </div>
                        ))}
                    </div>

                    <div className="infra_right">
                        <div className="icon_cont">
                             <div className="infra_icon"><img src={infraData[2].icon} alt="Icon" /></div>
                        </div>
                        <InfraCard {...infraData[2]} />
                        <div className="icon_cont">
                             <div className="infra_icon"><img src={infraData[3].icon} alt="Icon" /></div>
                        </div>
                        <InfraCard {...infraData[3]} />
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="infra_cards_wrapper_mobile">
                    <div className="infra_left">
                        {infraData.map((data, index) => (
                            <React.Fragment key={index}>
                                <div className="icon_cont">
                                     <div className="infra_icon"><img src={data.icon} alt="Icon" /></div>
                                </div>
                                <InfraCard {...data} />
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Infrastructure;
