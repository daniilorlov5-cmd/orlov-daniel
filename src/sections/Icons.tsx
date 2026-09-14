type P = { size?: number; className?: string }

export const IconCheck = ({ size = 18, className }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.14" />
    <path d="M7.5 12.5l3 3 6-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconArrow = ({ size = 18, className }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconTelegram = ({ size = 16, className }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
)

export const IconMail = ({ size = 16, className }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="M3.5 7l8.5 6 8.5-6" />
  </svg>
)

export const IconTrophy = ({ size = 18, className }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M8 4h8v5a4 4 0 0 1-8 0V4z" /><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4" /><path d="M12 13v3M9 20h6M10 16h4v4h-4z" />
  </svg>
)

export const IconGrant = ({ size = 18, className }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="3" y="6" width="18" height="12" rx="3" /><circle cx="12" cy="12" r="2.5" /><path d="M6.5 9.5v5M17.5 9.5v5" />
  </svg>
)

export const IconMic = ({ size = 18, className }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="9" y="3" width="6" height="11" rx="3" /><path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6" />
  </svg>
)

export const IconRocket = ({ size = 18, className }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M5 15l4 4M14 4c3 0 6 3 6 6l-8 8-6-6 8-8z" /><path d="M9 15l-4 1 1-4M15 9h.01" />
  </svg>
)
