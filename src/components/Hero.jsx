import React from 'react';
import Navbar from './Navbar';
import { getWhatsAppUrl } from '../config';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__glow"></div>
        <div className="hero__dots"></div>
        <div className="ring ring--a"></div>
        <div className="ring ring--b"></div>
      </div>

      <Navbar />

      <div className="hero__inner">
        <div className="hero__content">
          <div className="chip">
            <b></b>
            <span>PROGRAMA DE INDICAÇÃO · FIVE DELIVERY</span>
          </div>

          <h1>
            <span className="grad block-text">INDIQUE</span>
            <span className="nowrap-text">
              E GANHE <span className="grad">1%</span>
            </span>
          </h1>

          <p className="sub">
            de toda fatura paga pelos clientes que você indicar para a Five Delivery.
          </p>

          <p className="sub2">
            Indicou 1, 5, 20 clientes? Você ganha sobre tudo que eles pagarem de logística.
          </p>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--hero"
          >
            Quero indicar agora →
          </a>
        </div>

        {/* Empty column for grid balance */}
        <div className="hero__spacer" aria-hidden="true"></div>
      </div>

      <div className="hero__visual">
        <div className="hero__aura"></div>
        <div className="hero__float">
          <img
            className="hero__char"
            src="/img/personagem-caixa.png"
            alt="Personagem Five segurando a caixa Five Delivery"
          />
        </div>
      </div>

      <div className="hero__fade" aria-hidden="true"></div>
    </section>
  );
}
