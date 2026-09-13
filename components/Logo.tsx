import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <img 
      src="https://i.postimg.cc/851FKPHZ/chartians-logo-(2).png" 
      alt="The Chartians - SEBI Registered Research Analyst"
      className={`${className} object-contain`}
    />
  );
};

export default Logo;