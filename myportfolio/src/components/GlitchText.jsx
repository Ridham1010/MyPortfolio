import React from 'react';
import './GlitchText.css';

const GlitchText = ({ text = "Ridham Shah" }) => {
  return (
    <div className="glitch-container">
      <h1 className="glitch-title" data-text={text}>
        {text}
      </h1>
    </div>
  );
};

export default GlitchText;