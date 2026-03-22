import React from 'react';

const FAQCard = ({ question, answer, isOpen, onToggle }) => {
    return (
        <div className={`faq_card ${isOpen ? 'active' : ''}`} onClick={onToggle} tabIndex="0" onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onToggle();
            }
        }}>
            <div className={`question_cont ${isOpen ? 'question_open' : ''}`}>
                <p className="question">{question}</p>
                <span className="material-symbols-outlined chevron">keyboard_arrow_down</span>
            </div>
            <p className="answer" aria-hidden={!isOpen}>
                {answer}
            </p>
        </div>
    );
};

export default FAQCard;
