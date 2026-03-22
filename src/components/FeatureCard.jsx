import React from 'react';

const FeatureCard = ({ icon, title, subtitle }) => {
    return (
        <div className="feat_card">
            <div className="feat_card_icon">
                <img src={icon} alt={title} />
            </div>
            <p className="feat_title">{title}</p>
            <p className="feat_subtitle">{subtitle}</p>
        </div>
    );
};

export default FeatureCard;
