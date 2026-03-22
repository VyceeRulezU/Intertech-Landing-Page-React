import React from 'react';
import dotIcon from '../assets/Dot.svg';

const InfraCard = ({ title, subtitle, points }) => {
    return (
        <div className="infra_card">
            <p className="infra_card_title">{title}</p>
            <p className="infra_card_subtitle">{subtitle}</p>
            <div className="point_wrapper">
                {points.map((point, index) => (
                    <div key={index} className="point">
                        <div className="blue_dot">
                            <img src={dotIcon} alt="Check" />
                        </div>
                        <p>{point}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfraCard;
