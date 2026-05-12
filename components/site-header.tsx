"use client"

import Link from "next/link"

function RealUKLogo({ className }: { className?: string }) {
  const red = "hsl(350,72%,42%)"
  const gold = "hsl(42,82%,46%)"
  const dark = "#1a1a2e"
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Dark circle background */}
      <circle cx="28" cy="28" r="28" fill={dark} />

      {/* Roulette wheel outer ring */}
      <circle cx="28" cy="28" r="22" stroke={gold} strokeWidth="2" fill="none" />
      {/* Roulette wheel inner ring */}
      <circle cx="28" cy="28" r="15" stroke={gold} strokeWidth="1" fill="none" />
      {/* Wheel centre hub */}
      <circle cx="28" cy="28" r="4" fill={gold} />
      <circle cx="28" cy="28" r="2" fill={dark} />

      {/* Roulette spokes */}
      {[0, 30, 60, 90, 120, 150].map((deg) => {
        const rad = (deg * Math.PI) / 180
        const x1 = 28 + 6 * Math.cos(rad)
        const y1 = 28 + 6 * Math.sin(rad)
        const x2 = 28 + 14 * Math.cos(rad)
        const y2 = 28 + 14 * Math.sin(rad)
        const x3 = 28 - 6 * Math.cos(rad)
        const y3 = 28 - 6 * Math.sin(rad)
        const x4 = 28 - 14 * Math.cos(rad)
        const y4 = 28 - 14 * Math.sin(rad)
        return (
          <g key={deg}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={gold} strokeWidth="1" opacity="0.7" />
            <line x1={x3} y1={y3} x2={x4} y2={y4} stroke={gold} strokeWidth="1" opacity="0.7" />
          </g>
        )
      })}

      {/* Red pocket at top */}
      <path
        d="M26 6.5 A22 22 0 0 1 30 6.5 L29 13.2 A15 15 0 0 0 27 13.2 Z"
        fill={red}
      />

      {/* Playing card — ace of spades, top-left corner */}
      <rect x="4" y="4" width="14" height="18" rx="2" fill="white" stroke={gold} strokeWidth="0.8" />
      {/* Spade symbol */}
      <path d="M11 9 C11 9 8 12 8 14 C8 15.1 8.9 16 10 16 C10 16 9.5 17 9 17.5 L13 17.5 C12.5 17 12 16 12 16 C13.1 16 14 15.1 14 14 C14 12 11 9 11 9Z" fill={dark} />
      {/* A letter */}
      <text x="6" y="10.5" fontFamily="serif" fontSize="5" fontWeight="bold" fill={dark}>A</text>

      {/* Playing card — king, bottom-right corner (rotated) */}
      <rect x="38" y="34" width="14" height="18" rx="2" fill="white" stroke={gold} strokeWidth="0.8" />
      {/* Heart symbol */}
      <path d="M45 39 C45 39 43 37 41.5 38.5 C40 40 41.5 42 45 44 C48.5 42 50 40 48.5 38.5 C47 37 45 39 45 39Z" fill={red} />
      {/* K letter */}
      <text x="40" y="47" fontFamily="serif" fontSize="5" fontWeight="bold" fill={dark}>K</text>
    </svg>
  )
}

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-sm">
      {/* Crimson top accent bar */}
      <div className="h-1 w-full bg-crimson" />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center gap-3.5 group"
            aria-label="RealUKCasinoSites — Home"
          >
            <RealUKLogo className="w-12 h-12 shrink-0 transition-transform duration-300 group-hover:scale-105 drop-shadow-sm" />
            <div className="flex flex-col leading-none select-none">
              <div className="flex items-baseline gap-0 font-display font-bold tracking-tight leading-none">
                <span className="text-crimson text-2xl md:text-3xl">Real</span>
                <span className="text-charcoal text-2xl md:text-3xl">UK</span>
                <span className="text-charcoal text-2xl md:text-3xl">Casino</span>
                <span className="text-gold text-2xl md:text-3xl">Sites</span>
              </div>
              <span className="font-sans font-semibold text-[9px] tracking-[0.38em] uppercase text-charcoal/40 mt-[3px]">
                Britain&apos;s Trusted Casino Reviews
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Gold bottom rule */}
      <div className="h-[2px] w-full bg-gold/40" />
    </header>
  )
}
