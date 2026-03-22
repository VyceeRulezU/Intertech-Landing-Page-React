import React from 'react';

const PerfCard = ({ icon, title, sum }) => {
    return (
        <div className="perf_card">
            <div className="perf_card_icon">
                <img src={icon} alt={title} />
            </div>
            <p className="perf_card_title">{title}</p>
            <p className="perf_card_sum">{sum}</p>
        </div>
    );
};

export default PerfCard;
