import React from 'react';

export function StepChatIcon({ className = 'sico' }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      stroke="#B8FF1F"
      strokeWidth="4.5"
      strokeLinejoin="round"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 16h56a6 6 0 0 1 6 6v30a6 6 0 0 1-6 6H38L22 72V58h-10a6 6 0 0 1-6-6V22a6 6 0 0 1 6-6z"
        fill="rgba(184,255,31,.12)"
      />
      <circle cx="28" cy="37" r="3" fill="#B8FF1F" />
      <circle cx="40" cy="37" r="3" fill="#B8FF1F" />
      <circle cx="52" cy="37" r="3" fill="#B8FF1F" />
    </svg>
  );
}

export function StepUsersIcon({ className = 'sico' }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g stroke="#B8FF1F" strokeWidth="4.5" strokeLinecap="round">
        <circle cx="20" cy="30" r="14" fill="rgba(184,255,31,.12)" />
        <circle cx="60" cy="30" r="14" fill="rgba(184,255,31,.12)" />
        <path d="M34 30h12" strokeDasharray="1 8" />
      </g>
      <circle cx="20" cy="27.0" r="5.0" fill="#B8FF1F" />
      <path d="M11.0 40.0 a9.0 7.6 0 0 1 18.0 0Z" fill="#B8FF1F" />
      <circle cx="60" cy="27.0" r="5.0" fill="#B8FF1F" />
      <path d="M51.0 40.0 a9.0 7.6 0 0 1 18.0 0Z" fill="#B8FF1F" />
      <circle cx="40" cy="62" r="11" fill="#B8FF1F" />
      <path
        d="M34.5 62l4 4 7.5-8"
        stroke="#050505"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StepCoinsIcon({ className = 'sico' }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      stroke="#B8FF1F"
      strokeWidth="4.5"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="40" cy="60" rx="26" ry="9" fill="rgba(184,255,31,.12)" />
      <path d="M14 60v-10c0 5 12 9 26 9s26-4 26-9v10M14 50v-10c0 5 12 9 26 9s26-4 26-9v10" />
      <ellipse cx="40" cy="30" rx="26" ry="9" fill="#B8FF1F" />
      <text
        x="40"
        y="35"
        textAnchor="middle"
        fontFamily="Poppins"
        fontWeight="800"
        fontSize="14"
        fill="#050505"
        stroke="none"
      >
        %
      </text>
    </svg>
  );
}

export function CtaNetworkSvg({ className = 'ctanet' }) {
  return (
    <svg
      viewBox="0 0 520 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lg3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#050505" />
          <stop offset="1" stopColor="#050505" />
        </linearGradient>
        <filter id="gl2" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g stroke="#050505" fill="none">
        <circle cx="260" cy="148" r="62" opacity=".5" strokeWidth="2" />
        <circle cx="260" cy="148" r="110" opacity=".25" strokeWidth="2" strokeDasharray="4 8" />
        <circle cx="260" cy="148" r="160" opacity=".14" strokeWidth="2" />
      </g>
      <path d="M260 148 L92 64" stroke="#050505" strokeWidth="2.5" strokeDasharray="2 9" strokeLinecap="round" opacity=".85" />
      <path d="M260 148 L436 58" stroke="#050505" strokeWidth="2.5" strokeDasharray="2 9" strokeLinecap="round" opacity=".85" />
      <path d="M260 148 L70 226" stroke="#050505" strokeWidth="2.5" strokeDasharray="2 9" strokeLinecap="round" opacity=".85" />
      <path d="M260 148 L452 222" stroke="#050505" strokeWidth="2.5" strokeDasharray="2 9" strokeLinecap="round" opacity=".85" />
      <path d="M92 64 L34 20" stroke="#050505" strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round" opacity=".4" />
      <circle cx="34" cy="20" r="11" fill="none" stroke="#050505" strokeWidth="2" opacity=".6" />
      <circle cx="34" cy="18.1" r="3.6" fill="#050505" />
      <path d="M27.5 27.5 a6.5 5.5 0 0 1 13.0 0Z" fill="#050505" />
      <path d="M436 58 L494 24" stroke="#050505" strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round" opacity=".4" />
      <circle cx="494" cy="24" r="11" fill="none" stroke="#050505" strokeWidth="2" opacity=".6" />
      <circle cx="494" cy="22.1" r="3.6" fill="#050505" />
      <path d="M487.5 31.5 a6.5 5.5 0 0 1 13.0 0Z" fill="#050505" />
      <path d="M70 226 L24 272" stroke="#050505" strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round" opacity=".4" />
      <circle cx="24" cy="272" r="11" fill="none" stroke="#050505" strokeWidth="2" opacity=".6" />
      <circle cx="24" cy="270.1" r="3.6" fill="#050505" />
      <path d="M17.5 279.5 a6.5 5.5 0 0 1 13.0 0Z" fill="#050505" />
      <path d="M452 222 L500 270" stroke="#050505" strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round" opacity=".4" />
      <circle cx="500" cy="270" r="11" fill="none" stroke="#050505" strokeWidth="2" opacity=".6" />
      <circle cx="500" cy="268.1" r="3.6" fill="#050505" />
      <path d="M493.5 277.5 a6.5 5.5 0 0 1 13.0 0Z" fill="#050505" />
      <g filter="none">
        <circle cx="92" cy="64" r="27" fill="none" stroke="#050505" strokeWidth="3" />
        <circle cx="92" cy="59.8" r="7.8" fill="#050505" />
        <path d="M78.0 80.0 a14.0 11.8 0 0 1 28.0 0Z" fill="#050505" />
      </g>
      <g filter="none">
        <circle cx="436" cy="58" r="27" fill="none" stroke="#050505" strokeWidth="3" />
        <circle cx="436" cy="53.8" r="7.8" fill="#050505" />
        <path d="M422.0 74.0 a14.0 11.8 0 0 1 28.0 0Z" fill="#050505" />
      </g>
      <g filter="none">
        <circle cx="70" cy="226" r="27" fill="none" stroke="#050505" strokeWidth="3" />
        <circle cx="70" cy="221.8" r="7.8" fill="#050505" />
        <path d="M56.0 242.0 a14.0 11.8 0 0 1 28.0 0Z" fill="#050505" />
      </g>
      <g filter="none">
        <circle cx="452" cy="222" r="27" fill="none" stroke="#050505" strokeWidth="3" />
        <circle cx="452" cy="217.8" r="7.8" fill="#050505" />
        <path d="M438.0 238.0 a14.0 11.8 0 0 1 28.0 0Z" fill="#050505" />
      </g>
      <g filter="none">
        <circle cx="260" cy="148" r="50" fill="none" />
        <circle cx="260" cy="148" r="58" stroke="#050505" strokeWidth="2" opacity=".6" />
        <circle cx="260" cy="139.0" r="14.0" fill="#050505" />
        <path d="M235.0 175.0 a25.0 21.0 0 0 1 50.0 0Z" fill="#050505" />
      </g>
      <g transform="translate(260,214)">
        <rect x="-34" y="-12" width="68" height="24" rx="12" fill="#050505" stroke="#050505" strokeWidth="2" />
        <text y="5" textAnchor="middle" fontFamily="Poppins" fontWeight="700" fontSize="12" fill="#050505" letterSpacing="2">
          VOCÊ
        </text>
      </g>
      <g transform="translate(176,106)">
        <rect x="-22" y="-13" width="44" height="26" rx="13" fill="#050505" stroke="#050505" strokeWidth="2" />
        <text y="6" textAnchor="middle" fontFamily="Poppins" fontWeight="800" fontSize="14" fill="#050505">
          1%
        </text>
      </g>
      <g transform="translate(348,103)">
        <rect x="-22" y="-13" width="44" height="26" rx="13" fill="#050505" stroke="#050505" strokeWidth="2" />
        <text y="6" textAnchor="middle" fontFamily="Poppins" fontWeight="800" fontSize="14" fill="#050505">
          1%
        </text>
      </g>
      <g transform="translate(165,187)">
        <rect x="-22" y="-13" width="44" height="26" rx="13" fill="#050505" stroke="#050505" strokeWidth="2" />
        <text y="6" textAnchor="middle" fontFamily="Poppins" fontWeight="800" fontSize="14" fill="#050505">
          1%
        </text>
      </g>
      <g transform="translate(356,185)">
        <rect x="-22" y="-13" width="44" height="26" rx="13" fill="#050505" stroke="#050505" strokeWidth="2" />
        <text y="6" textAnchor="middle" fontFamily="Poppins" fontWeight="800" fontSize="14" fill="#050505">
          1%
        </text>
      </g>
      <g opacity="0.95">
        <circle cx="210" cy="60" r="15" fill="none" stroke="#050505" strokeWidth="2" />
        <circle cx="210" cy="60" r="10.8" fill="none" stroke="#050505" strokeWidth="1.5" opacity=".5" />
        <text x="210" y="65.4" textAnchor="middle" fontFamily="Poppins" fontWeight="800" fontSize="15.8" fill="#050505">
          $
        </text>
      </g>
      <g opacity="0.9">
        <circle cx="318" cy="262" r="13" fill="none" stroke="#050505" strokeWidth="2" />
        <circle cx="318" cy="262" r="9.4" fill="none" stroke="#050505" strokeWidth="1.5" opacity=".5" />
        <text x="318" y="266.7" textAnchor="middle" fontFamily="Poppins" fontWeight="800" fontSize="13.7" fill="#050505">
          $
        </text>
      </g>
      <g opacity="0.9">
        <circle cx="398" cy="142" r="11" fill="none" stroke="#050505" strokeWidth="2" />
        <circle cx="398" cy="142" r="7.9" fill="none" stroke="#050505" strokeWidth="1.5" opacity=".5" />
        <text x="398" y="146.0" textAnchor="middle" fontFamily="Poppins" fontWeight="800" fontSize="11.6" fill="#050505">
          %
        </text>
      </g>
      <g opacity="0.85">
        <circle cx="112" cy="150" r="11" fill="none" stroke="#050505" strokeWidth="2" />
        <circle cx="112" cy="150" r="7.9" fill="none" stroke="#050505" strokeWidth="1.5" opacity=".5" />
        <text x="112" y="154.0" textAnchor="middle" fontFamily="Poppins" fontWeight="800" fontSize="11.6" fill="#050505">
          $
        </text>
      </g>
    </svg>
  );
}
