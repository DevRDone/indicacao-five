import React from 'react';
import { getWhatsAppUrl } from '../config';
import { CtaNetworkSvg } from './Icons';

export default function CtaBanner() {
  return (
    <section className="cta-wrapper">
      <div className="cta reveal-card">
        <CtaNetworkSvg />
        <div className="cta__content">
          <h2>
            Indique hoje e comece<br />
            a ganhar 1%
          </h2>
          <p>Aproveite junto com a Black Friday: até 20% OFF para quem você indicar.</p>
        </div>

        <div className="cta__action">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--cta"
          >
            Indicar pelo WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
