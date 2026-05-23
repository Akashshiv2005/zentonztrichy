import React from "react";

const IconWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    className={`w-full h-full drop-shadow-sm ${className}`} 
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

export const SkinCare3D = () => (
  <IconWrapper>
    <defs>
      <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF1F2" />
        <stop offset="100%" stopColor="#FB7185" />
      </linearGradient>
    </defs>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="url(#skinGrad)" fillOpacity="0.9"/>
    <path d="M12 19l-1.1-1C6.2 13.5 3 10.7 3 7.5 3 5.3 4.7 3.5 6.9 3.5c1.3 0 2.5.6 3.4 1.6l1.7 1.9 1.7-1.9c.9-1 2.1-1.6 3.4-1.6 2.2 0 3.9 1.8 3.9 4 0 3.2-3.2 6-7.9 10.5L12 19z" fill="white" fillOpacity="0.4"/>
  </IconWrapper>
);

export const Facial3D = () => (
  <IconWrapper>
    <defs>
      <linearGradient id="facialGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E0F2FE" />
        <stop offset="100%" stopColor="#38BDF8" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="9" fill="url(#facialGrad)" fillOpacity="0.9" />
    <path d="M12 15c-2 0-3.5-1.5-3.5-3.5S10 8 12 8s3.5 1.5 3.5 3.5-1.5 3.5-3.5 3.5z" fill="white" fillOpacity="0.3" />
    <circle cx="9" cy="11" r="1.5" fill="white" />
    <circle cx="15" cy="11" r="1.5" fill="white" />
    <path d="M10 16c1 1 3 1 4 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </IconWrapper>
);

export const ManiPedi3D = () => (
  <IconWrapper>
    <defs>
      <linearGradient id="maniGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF7ED" />
        <stop offset="100%" stopColor="#FB923C" />
      </linearGradient>
    </defs>
    <path d="M18 11c-1.1 0-2 .9-2 2v3c0 1.1-.9 2-2 2s-2-.9-2-2v-3c0-1.1-.9-2-2-2s-2 .9-2 2v3c0 3.3 2.7 6 6 6s6-2.7 6-6v-3c0-1.1-.9-2-2-2z" fill="url(#maniGrad)" fillOpacity="0.9"/>
    <rect x="7" y="11" width="2" height="4" rx="1" fill="#EA580C" fillOpacity="0.6" />
    <rect x="11" y="9" width="2" height="4" rx="1" fill="#EA580C" fillOpacity="0.6" />
    <rect x="15" y="9" width="2" height="4" rx="1" fill="#EA580C" fillOpacity="0.6" />
  </IconWrapper>
);

export const HairSpa3D = () => (
  <IconWrapper>
    <defs>
      <linearGradient id="spaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F0F9FF" />
        <stop offset="100%" stopColor="#0EA5E9" />
      </linearGradient>
    </defs>
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="url(#spaGrad)" fillOpacity="0.9"/>
    <path d="M12 5l4 4a6 6 0 1 1-8 0z" fill="white" fillOpacity="0.4" />
  </IconWrapper>
);

export const Bridal3D = () => (
  <IconWrapper>
    <defs>
      <linearGradient id="crownGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FEF3C7" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
    </defs>
    <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5Z" fill="url(#crownGrad)" fillOpacity="0.9"/>
    <rect x="5" y="17" width="14" height="2" rx="1" fill="#844D16" fillOpacity="0.3" />
    <circle cx="12" cy="11" r="1.5" fill="white" fillOpacity="0.6" />
  </IconWrapper>
);

export const Nails3D = () => (
  <IconWrapper>
    <defs>
      <linearGradient id="nailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5F3FF" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
    <path d="M12 2C7 2 3 6 3 11v8c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3v-8c0-5-4-9-9-9z" fill="url(#nailGrad)" fillOpacity="0.9"/>
    <path d="M7 11c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="white" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="14" r="3" fill="white" fillOpacity="0.2" />
  </IconWrapper>
);

export const LiceRemoval3D = () => (
  <IconWrapper>
    <defs>
      <linearGradient id="liceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F0FDF4" />
        <stop offset="100%" stopColor="#10B981" />
      </linearGradient>
    </defs>
    <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" fill="url(#liceGrad)" fillOpacity="0.9"/>
    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </IconWrapper>
);
export const WartRemoval3D = () => (
  <IconWrapper>
    <defs>
      <linearGradient id="wartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFEDD5" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" fill="url(#wartGrad)" fillOpacity="0.9" />
    <path d="M15 9l-6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M16 7l.5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5-1.5-.5 1.5-.5.5-1.5z" fill="white" />
    <path d="M8 17l.3 1 .3-.3 1-.3-.3-.3-.3-1-.3 1z" fill="white" fillOpacity="0.7" />
    <circle cx="12" cy="12" r="6" stroke="white" strokeOpacity="0.1" strokeWidth="3" />
  </IconWrapper>
);

export const EarPiercing3D = () => (
  <IconWrapper>
    <defs>
      <linearGradient id="earGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FDF2F8" />
        <stop offset="100%" stopColor="#F472B6" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="9" fill="url(#earGrad)" fillOpacity="0.9" />
    <circle cx="12" cy="12" r="4" fill="white" fillOpacity="0.3" />
    <circle cx="12" cy="12" r="2" fill="white" />
    <path d="M12 8v8M8 12h8" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
  </IconWrapper>
);

