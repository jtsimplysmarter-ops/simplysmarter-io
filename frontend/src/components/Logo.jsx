import React from 'react';

const Logo = ({ className = "", size = 56 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-testid="logo-svg"
    >
      {/* S-Shape Frame */}
      {/* Top horizontal */}
      <path d="M10 10 H100 V28 H28 V10 Z" fill="#FFFFFF"/>
      
      {/* Right vertical from top */}
      <path d="M82 10 H100 V45 H82 V10 Z" fill="#FFFFFF"/>
      
      {/* Left vertical full */}
      <path d="M10 10 H28 V110 H10 V10 Z" fill="#FFFFFF"/>
      
      {/* Bottom horizontal */}
      <path d="M10 92 H100 V110 H10 V92 Z" fill="#FFFFFF"/>
      
      {/* Upper diagonal band */}
      <path 
        d="M10 28 L28 28 L82 82 L64 82 Z" 
        fill="#FFFFFF"
      />
      
      {/* Cloud cutouts on upper diagonal */}
      <g fill="#050505">
        {/* Row of cloud shapes */}
        <path d="M28 36 Q32 32 36 36 Q40 32 44 36 Q44 42 40 44 Q36 48 32 44 Q28 42 28 36 Z"/>
        <path d="M42 48 Q46 44 50 48 Q54 44 58 48 Q58 54 54 56 Q50 60 46 56 Q42 54 42 48 Z"/>
        <path d="M56 60 Q60 56 64 60 Q68 56 72 60 Q72 66 68 68 Q64 72 60 68 Q56 66 56 60 Z"/>
      </g>
      
      {/* Lower diagonal band */}
      <path 
        d="M28 45 L46 45 L100 99 L82 99 Z" 
        fill="#FFFFFF"
      />
      
      {/* Cloud cutouts on lower diagonal */}
      <g fill="#050505">
        <path d="M46 55 Q50 51 54 55 Q58 51 62 55 Q62 61 58 63 Q54 67 50 63 Q46 61 46 55 Z"/>
        <path d="M60 67 Q64 63 68 67 Q72 63 76 67 Q76 73 72 75 Q68 79 64 75 Q60 73 60 67 Z"/>
        <path d="M74 79 Q78 75 82 79 Q86 75 90 79 Q90 85 86 87 Q82 91 78 87 Q74 85 74 79 Z"/>
      </g>
      
      {/* Cloud at bottom left */}
      <g fill="#050505">
        <path d="M14 96 Q18 92 22 96 Q26 92 30 96 Q30 102 26 104 Q22 108 18 104 Q14 102 14 96 Z"/>
      </g>
    </svg>
  );
};

export default Logo;
