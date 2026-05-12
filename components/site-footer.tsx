"use client"

import Link from "next/link"
import Image from "next/image"

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
      <circle cx="28" cy="28" r="28" fill={dark} />
      <circle cx="28" cy="28" r="22" stroke={gold} strokeWidth="2" fill="none" />
      <circle cx="28" cy="28" r="15" stroke={gold} strokeWidth="1" fill="none" />
      <circle cx="28" cy="28" r="4" fill={gold} />
      <circle cx="28" cy="28" r="2" fill={dark} />
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
      <path d="M26 6.5 A22 22 0 0 1 30 6.5 L29 13.2 A15 15 0 0 0 27 13.2 Z" fill={red} />
      <rect x="4" y="4" width="14" height="18" rx="2" fill="white" stroke={gold} strokeWidth="0.8" />
      <path d="M11 9 C11 9 8 12 8 14 C8 15.1 8.9 16 10 16 C10 16 9.5 17 9 17.5 L13 17.5 C12.5 17 12 16 12 16 C13.1 16 14 15.1 14 14 C14 12 11 9 11 9Z" fill={dark} />
      <text x="6" y="10.5" fontFamily="serif" fontSize="5" fontWeight="bold" fill={dark}>A</text>
      <rect x="38" y="34" width="14" height="18" rx="2" fill="white" stroke={gold} strokeWidth="0.8" />
      <path d="M45 39 C45 39 43 37 41.5 38.5 C40 40 41.5 42 45 44 C48.5 42 50 40 48.5 38.5 C47 37 45 39 45 39Z" fill={red} />
      <text x="40" y="47" fontFamily="serif" fontSize="5" fontWeight="bold" fill={dark}>K</text>
    </svg>
  )
}

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Responsible Gaming", href: "/responsible-gaming" },
]

const PARTNER_LOGOS = [
  { src: "/gamble-aware.png", alt: "BeGambleAware", href: "https://www.begambleaware.org/" },
  { src: "/gamcare.png", alt: "GamCare", href: "https://www.gamcare.org.uk/" },
  { src: "/gordon.png", alt: "Gambling Therapy", href: "https://www.gamblingtherapy.org/" },
  { src: "/Gambling_Commission_logo.png", alt: "UK Gambling Commission", href: "https://www.gamblingcommission.gov.uk/" },
  { src: "/gamstop.svg", alt: "GamStop", href: "https://www.gamstop.co.uk/" },
]

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-foreground border-t border-steel">
      {/* Top accent */}
      <div className="h-1 w-full bg-crimson" />
      <div className="h-[2px] w-full bg-gold/50" />

      <div className="container mx-auto px-4 pt-10 pb-0">

        {/* ── Row 1: Brand + Nav (2 columns) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-steel">

          {/* LEFT — Brand + description + helpline */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <RealUKLogo className="w-10 h-10 shrink-0 transition-transform duration-300 group-hover:scale-105" />
              <div className="flex flex-col leading-none select-none">
                <div className="flex items-baseline font-display font-bold leading-none">
                  <span className="text-crimson text-lg">Real</span>
                  <span className="text-charcoal text-lg">UK</span>
                  <span className="text-charcoal text-lg">Casino</span>
                  <span className="text-gold text-lg">Sites</span>
                </div>
                <span className="font-sans font-medium text-[9px] tracking-[0.35em] uppercase text-charcoal/40 mt-1">
                  Britain&apos;s Trusted Casino Reviews
                </span>
              </div>
            </Link>

            <p className="text-xs text-charcoal/55 leading-relaxed max-w-sm">
              Britain&apos;s most rigorous casino comparison platform. Every site independently verified against UKGC licensing standards before we recommend it.
            </p>

            <div>
              <p className="text-[9px] font-sans font-bold tracking-[0.28em] uppercase text-charcoal/35 mb-0.5">
                National Gambling Helpline
              </p>
              <a
                href="tel:08088020133"
                className="font-display font-bold text-xl text-crimson hover:text-crimson/75 transition-colors duration-200"
              >
                0808 802 0133
              </a>
              <p className="text-[10px] text-charcoal/35 mt-0.5">Free — available 24/7</p>
            </div>
          </div>

          {/* RIGHT — Navigation */}
          <div className="flex flex-col gap-2">
            <h3 className="text-[9px] font-sans font-bold tracking-[0.35em] uppercase text-gold mb-2 flex items-center gap-2">
              <span className="w-3 h-px bg-gold inline-block" />
              Navigation
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-charcoal/60 hover:text-crimson transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/50 group-hover:bg-crimson transition-colors duration-200 shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Row 2: Safe Gambling message + logos in one horizontal row ── */}
        <div className="py-5 border-b border-steel flex flex-col sm:flex-row items-center gap-4">

          {/* Warning text */}
          <div className="shrink-0 sm:max-w-[260px]">
            <p className="text-[10px] font-sans font-bold tracking-[0.22em] uppercase text-crimson mb-1">
              When the fun stops — STOP.
            </p>
            <p className="text-[10px] text-charcoal/50 leading-relaxed">
              18+ only. All sites UKGC licensed. Gamble responsibly.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px self-stretch bg-steel shrink-0" />

          {/* Logos row */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 flex-1">
            {PARTNER_LOGOS.map((logo) => (
              <Link
                key={logo.alt}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                title={logo.alt}
                className="flex items-center justify-center bg-black rounded-md px-3 py-2 opacity-70 hover:opacity-100 transition-opacity duration-200"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={90}
                  height={30}
                  className="object-contain h-5 w-auto"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* ── Row 3: Legal disclaimer ── */}
        <div className="py-7 border-b border-steel">
          <p className="text-[11px] text-charcoal/45 leading-relaxed text-center max-w-3xl mx-auto">
            <strong className="text-charcoal/60">realukcasinosites.com</strong> is an independent comparison and
            information service. We may earn commission when you register via our affiliate links, at no extra cost
            to you. All casinos listed hold valid UKGC licences. Bonus availability, terms, and wagering requirements
            vary by operator and may change without notice. 18+ only. T&amp;Cs apply. Gamble responsibly.
          </p>
        </div>

        {/* ── Row 4: Copyright bar ── */}
        <div className="py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-charcoal/45 font-medium">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-crimson font-semibold">realukcasinosites.com</span>{" "}
            &mdash; All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[10px] font-sans tracking-widest uppercase text-gold font-bold">
              UKGC Licensed
            </span>
            <span className="h-3.5 w-px bg-steel" />
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border-2 border-crimson text-crimson text-[10px] font-bold leading-none">
              18+
            </span>
            <span className="h-3.5 w-px bg-steel" />
            <Link
              href="https://www.begambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-charcoal/45 hover:text-crimson transition-colors duration-200 font-semibold"
            >
              BeGambleAware.org
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
