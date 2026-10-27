import React from 'react';
import { STEPS_DATA } from '../config';
import { StepChatIcon, StepUsersIcon, StepCoinsIcon } from './Icons';

export default function HowItWorks() {
  const getIcon = (type) => {
    switch (type) {
      case 'chat':
        return <StepChatIcon />;
      case 'users':
        return <StepUsersIcon />;
      case 'coins':
        return <StepCoinsIcon />;
      default:
        return null;
    }
  };

  return (
    <section className="sec" id="como-indicar">
      <div className="sec__container">
        <div className="eyebrow">PASSO A PASSO</div>
        <h2>Como indicar</h2>
        <p className="lead">Tudo pelo WhatsApp, sem burocracia.</p>

        <div className="steps">
          {STEPS_DATA.map((step, idx) => (
            <div key={idx} className="step reveal-card">
              {getIcon(step.icon)}
              <div className="n grad">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
