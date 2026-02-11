import React from 'react';

const Logo = ({ className = "", size = 48 }) => {
  // Scale factor based on size (design is 100x100)
  const scale = size / 100;
  
  return (
    <svg 
      width={size} 
      height={size * 1.1} 
      viewBox="0 0 100 110" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-testid="logo-svg"
    >
      {/* Top horizontal bar */}
      <rect x="10" y="5" width="80" height="20" fill="#FFFFFF"/>
      
      {/* Right vertical from top bar */}
      <rect x="70" y="5" width="20" height="30" fill="#FFFFFF"/>
      
      {/* Left vertical connector */}
      <rect x="10" y="5" width="20" height="65" fill="#FFFFFF"/>
      
      {/* Upper diagonal bar */}
      <polygon 
        points="10,25 30,25 80,75 60,75" 
        fill="#FFFFFF"
      />
      
      {/* Cloud decorations on upper diagonal - cutouts */}
      <g fill="#050505">
        <ellipse cx="32" cy="35" rx="6" ry="5"/>
        <ellipse cx="42" cy="42" rx="5" ry="4"/>
        <ellipse cx="38" cy="38" rx="4" ry="5"/>
        <ellipse cx="50" cy="50" rx="6" ry="5"/>
        <ellipse cx="46" cy="46" rx="4" ry="4"/>
        <ellipse cx="58" cy="58" rx="5" ry="4"/>
        <ellipse cx="54" cy="54" rx="4" ry="5"/>
        <ellipse cx="65" cy="65" rx="5" ry="4"/>
        <ellipse cx="70" cy="70" rx="4" ry="4"/>
      </g>
      
      {/* Lower diagonal bar */}
      <polygon 
        points="20,40 40,40 90,90 70,90" 
        fill="#FFFFFF"
      />
      
      {/* Cloud decorations on lower diagonal - cutouts */}
      <g fill="#050505">
        <ellipse cx="42" cy="50" rx="5" ry="4"/>
        <ellipse cx="48" cy="55" rx="6" ry="5"/>
        <ellipse cx="45" cy="52" rx="4" ry="4"/>
        <ellipse cx="55" cy="60" rx="5" ry="4"/>
        <ellipse cx="60" cy="65" rx="6" ry="5"/>
        <ellipse cx="57" cy="62" rx="4" ry="4"/>
        <ellipse cx="68" cy="73" rx="5" ry="4"/>
        <ellipse cx="72" cy="77" rx="5" ry="5"/>
        <ellipse cx="78" cy="82" rx="4" ry="4"/>
      </g>
      
      {/* Bottom horizontal bar */}
      <rect x="10" y="85" width="80" height="20" fill="#FFFFFF"/>
      
      {/* Bottom left vertical extension */}
      <rect x="10" y="65" width="20" height="40" fill="#FFFFFF"/>
      
      {/* Cloud decoration at bottom left corner */}
      <g fill="#050505">
        <ellipse cx="20" cy="92" rx="5" ry="4"/>
        <ellipse cx="26" cy="95" rx="4" ry="4"/>
        <ellipse cx="15" cy="96" rx="4" ry="3"/>
      </g>
    </svg>
  );
};

export default Logo;
