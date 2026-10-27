import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <Logo height={44} />
      </div>

      <div className="footer__disclaimer">
        Programa de Indicação Five Delivery · Condições sujeitas a análise comercial
      </div>

      <div className="footer__copy">
        © Five Delivery
      </div>
    </footer>
  );
}
