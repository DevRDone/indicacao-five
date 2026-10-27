import React, { useState } from 'react';
import Logo from './Logo';
import { getWhatsAppUrl } from '../config';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (!targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="nav-container">
      <nav className="nav" aria-label="Navegação Principal">
        <a href="#" onClick={(e) => handleNavClick(e, null)} className="nav__brand" aria-label="Five Delivery">
          <Logo height={52} />
        </a>

        <ul className="nav__links desktop-only">
          <li className="on">
            <a href="#" onClick={(e) => handleNavClick(e, null)}>
              Programa de Indicação
            </a>
          </li>
          <li>
            <a href="#como-indicar" onClick={(e) => handleNavClick(e, 'como-indicar')}>
              Como indicar
            </a>
          </li>
          <li>
            <a href="#ganhos" onClick={(e) => handleNavClick(e, 'ganhos')}>
              Ganhos
            </a>
          </li>
          <li>
            <a href="#regras" onClick={(e) => handleNavClick(e, 'regras')}>
              Regras
            </a>
          </li>
        </ul>

        <div className="nav__actions">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--nav desktop-only"
          >
            Falar no WhatsApp
          </a>

          <button
            className={`nav__hamburger mobile-only ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="nav__mobile-panel mobile-only" role="dialog" aria-modal="true">
          <ul className="nav__mobile-links">
            <li className="on">
              <a href="#" onClick={(e) => handleNavClick(e, null)}>
                Programa de Indicação
              </a>
            </li>
            <li>
              <a href="#como-indicar" onClick={(e) => handleNavClick(e, 'como-indicar')}>
                Como indicar
              </a>
            </li>
            <li>
              <a href="#ganhos" onClick={(e) => handleNavClick(e, 'ganhos')}>
                Ganhos
              </a>
            </li>
            <li>
              <a href="#regras" onClick={(e) => handleNavClick(e, 'regras')}>
                Regras
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
