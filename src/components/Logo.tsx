interface LogoProps {
  size?: number
  className?: string
}

/* Логотип-орёл. Тот же рисунок, что и в favicon — один источник правды. */
function Logo({ size = 40, className }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Логотип Даниила Орлова"
    >
      <defs>
        <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7c3aed" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#logo-g)" />
      <path
        fill="#ffffff"
        d="M19 15C25 11 34 11 41 14L46 18C53 20 58 26 57.5 32C57 35 55 37 53 37.5L50 34.5L45 33.5C45 38 43.5 42 41 45L38.5 43.5L36 49L32.5 46L29.5 52L25.5 48.5L22 54L18.5 50.5L15 55C12.5 44 12.5 30 15 22C16 19 17.5 16.5 19 15Z"
      />
      <path fill="none" stroke="url(#logo-g)" strokeWidth="2.4" strokeLinecap="round" d="M44 30.5l8.5 3.2" />
      <path fill="url(#logo-g)" d="M34 17.5l12 3.2-1.8 2.4-10.5-3z" />
      <circle cx="40" cy="24.5" r="2.7" fill="url(#logo-g)" />
    </svg>
  )
}

export default Logo
