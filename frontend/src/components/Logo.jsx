import React from 'react';

const Logo = ({ className = "", size = 48 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-testid="logo-svg"
    >
      {/* Top horizontal bar with right vertical */}
      <path 
        d="M10 10 L90 10 L90 30 L30 30 L30 25 L10 25 Z" 
        fill="#FFFFFF"
      />
      
      {/* Top diagonal bar */}
      <path 
        d="M10 25 L30 25 L75 70 L55 70 Z" 
        fill="#FFFFFF"
      />
      
      {/* Cloud decorations on top diagonal */}
      <g fill="#050505">
        <circle cx="35" cy="38" r="5" />
        <circle cx="42" cy="42" r="4" />
        <circle cx="48" cy="47" r="5" />
        <circle cx="55" cy="52" r="4" />
        <circle cx="61" cy="56" r="5" />
      </g>
      
      {/* Middle diagonal bar */}
      <path 
        d="M25 45 L45 45 L90 90 L70 90 Z" 
        fill="#FFFFFF"
      />
      
      {/* Cloud decorations on middle diagonal */}
      <g fill="#050505">
        <circle cx="48" cy="55" r="4" />
        <circle cx="55" cy="60" r="5" />
        <circle cx="62" cy="66" r="4" />
        <circle cx="68" cy="71" r="5" />
        <circle cx="75" cy="77" r="4" />
      </g>
      
      {/* Bottom horizontal bar with left vertical */}
      <path 
        d="M10 70 L10 90 L70 90 L70 70 L30 70 L30 75 L10 75 Z" 
        fill="#FFFFFF"
      />
      
      {/* Left vertical connector */}
      <path 
        d="M10 25 L10 75 L30 75 L30 45 L25 45 L25 25 Z" 
        fill="#FFFFFF"
      />
      
      {/* Cloud at bottom left */}
      <g fill="#050505">
        <circle cx="18" cy="80" r="4" />
        <circle cx="25" cy="78" r="5" />
      </g>
    </svg>
  );
};

export default Logo;
