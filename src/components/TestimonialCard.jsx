import React from 'react';

const TestimonialCard = ({ ratings, quote, sum, avatar, name, role }) => {
    return (
        <div className="test_card">
            <div className="ratings">
                <img src={ratings} alt="ratings" />
            </div>
            <div className="quote">
                <img src={quote} alt="quote" />
            </div>
            <p className="test_sum">{sum}</p>
            <div className="user_wrapper">
                <div className="avatar">
                    <img src={avatar} alt="avatar" />
                </div>
                <div className="user_details">
                    <p className="user_name">{name}</p>
                    <p className="user_role">{role}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
