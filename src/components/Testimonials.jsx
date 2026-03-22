import React from 'react';
import TestimonialCard from './TestimonialCard';
import ratingsIcon from '../assets/Ratings.svg';
import quoteIcon from '../assets/quote-down.svg';
import avatarIcon from '../assets/animoji.svg';

const Testimonials = () => {
    const testimonial = {
        ratings: ratingsIcon,
        quote: quoteIcon,
        sum: "We run a cafe with 20+ devices connected. Our old ISP couldn't handle it. With Intertech, everything runs smoothly and our customers love the free WiFi.",
        avatar: avatarIcon,
        name: "Aisha Ahmed",
        role: "Frontend Engineer"
    };

    const testimonials = Array(6).fill(testimonial);

    return (
        <section className="testimonial_section">
            <div className="section_content_wrapper">
                <div className="section_header">
                    <h2>What Our Customers Say</h2>
                    <p>Don't just take our word for it. Hear from the thousands of people who've made the switch.</p>
                </div>

                <div className="test_cards_wrapper">
                    <div className="test_card_top">
                        {testimonials.map((test, index) => (
                            <TestimonialCard key={index} {...test} />
                        ))}
                    </div>
                    <div className="test_card_bot">
                        {testimonials.map((test, index) => (
                            <TestimonialCard key={index} {...test} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
