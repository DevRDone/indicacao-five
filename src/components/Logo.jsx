import React from 'react';

export default function Logo({ height = 50, className = '' }) {
  return (
    <div
      className={`logo logo-brand ${className}`.trim()}
      style={{ '--logo-h': `${height}px` }}
      role="img"
      aria-label="Five Delivery"
    >
      <div className="logo-brand__text">
        <span className="logo-brand__five">FIVE</span>
        <span className="logo-brand__delivery">DELIVERY</span>
      </div>
    </div>
  );
}
