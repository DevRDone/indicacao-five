import React, { useEffect, useRef, useState } from 'react';
import { EARNINGS_DATA, RULES_DATA } from '../config';

export default function EarningsAndRules() {
  const chartRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="sec sec--earnings" id="ganhos">
      <div className="sec__container">
        <div className="earn" id="regras">
          {/* Left Card: Chart */}
          <div className="card3d reveal-card" ref={chartRef}>
            <div className="eyebrow">QUANTO MAIS INDICA, MAIS GANHA</div>
            <h3 className="card-title">Ganho mensal com 1%</h3>

            <div className="bars-container">
              <div className="bars">
                {EARNINGS_DATA.map((item, idx) => (
                  <div
                    key={idx}
                    className="stack"
                    style={{
                      height: animated ? item.height : '0%'
                    }}
                  >
                    <span>{item.value}</span>
                    <i>{item.clients}</i>
                  </div>
                ))}
              </div>
            </div>

            <p className="chart-note">
              *Exemplo ilustrativo considerando fatura média de R$ 30 mil por cliente.
            </p>
          </div>

          {/* Right Card: Rules */}
          <div className="card3d reveal-card">
            <div className="eyebrow">REGRAS</div>
            <h3 className="card-title rules-title">Fica combinado assim</h3>

            <div className="faq">
              {RULES_DATA.map((rule, idx) => (
                <div key={idx} className="rule-row">
                  <span className="rule-text">{rule.text}</span>
                  {rule.badge ? (
                    <span className="badge1">{rule.badge}</span>
                  ) : (
                    <span className="symbol-lime">{rule.symbol}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
