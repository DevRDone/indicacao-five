import React, { useEffect } from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import EarningsAndRules from './components/EarningsAndRules';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Intersection observer for subtle reveal animations
    const revealElements = document.querySelectorAll('.reveal-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      {/* Background ambient glows and rings outside hero */}
      <div className="global-bg" aria-hidden="true">
        <div className="glow glow--section"></div>
        <div className="ring ring--side"></div>
      </div>

      <Hero />
      <HowItWorks />
      <EarningsAndRules />
      <CtaBanner />
      <Footer />
    </div>
  );
}
