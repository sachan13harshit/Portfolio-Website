import React, { useState } from 'react';
import './RadioCard.css';

const RadioCard = ({ value, isSelected, onChange }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    onChange(value);
  };

  return (
    <div
      className={`radio-card ${isSelected ? 'selected' : ''} ${isHovered ? 'hover' : ''}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {value}
    </div>
  );
};

export default RadioCard;