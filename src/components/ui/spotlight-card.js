import React from 'react';

const SpotlightCard = ({ children, className = '' }) => {
  return (
    <div className={`rounded-xl p-4 bg-gradient-to-br from-gray-800/30 to-black/20 backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
};

export default SpotlightCard;
