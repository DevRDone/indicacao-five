import React from 'react';

export default function Logo({ height = 56, className = '' }) {
  return (
    <img
      src="/img/logo-five.png"
      alt="Five Delivery"
      className={`logo ${className}`.trim()}
      style={{
        height: `${height}px`,
        width: `${height}px`,
        objectFit: 'contain',
        display: 'block'
      }}
    />
  );
}
