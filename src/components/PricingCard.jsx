import React from 'react';
import checkIcon from '../assets/check-square.svg';
import pricingCardLogo from '../assets/Pricing Card Logo.svg';

const PricingCard = ({ popular, type, price, data, features, isPremium }) => {
    return (
        <div className={`pricing_card ${isPremium ? 'premium_card' : 'basic_card'}`}>
            <div className="pricing_card_header">
                {popular && <p className="popular">Most Popular</p>}
                <p className="price_type">{type}</p>
                <p className="price_amount">{price}</p>
                <p className="data">{data}</p>
            </div>

            <div className="sub_feat_wrapper">
                {features.map((feat, index) => (
                    <div key={index} className="sub_feat">
                        <div className="chkbx">
                            <img src={checkIcon} alt="check" />
                        </div>
                        <p className="sub_sum">{feat}</p>
                    </div>
                ))}
            </div>

            <div className="pricing_button_wrapper">
                <a className={`pricing_cta ${isPremium ? 'premium_btn' : 'basic_btn'}`} href="#">
                    Get Started
                    <span className="material-symbols-outlined">arrow_outward</span>
                </a>
            </div>

            <div className="pricing_card_logo">
                <img src={pricingCardLogo} alt="Logo" />
            </div>
        </div>
    );
};

export default PricingCard;
