"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, TrendingUp, Shield } from "lucide-react"
import { bettingSites } from "@/data/betting-sites"

const rankLabels = [
  { label: "#1 Best Casino", hot: true },
  { label: "#2 Recommended", hot: false },
  { label: "#3 Top Rated", hot: false },
  { label: "#4 Popular Choice", hot: false },
  { label: "#5 Trusted Pick", hot: false },
  { label: "#6 Editor's Choice", hot: false },
]

function StarRating({ rating, size = "md" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const raw = (rating / 10) * 5
  const stepped = Math.round(raw / 0.2) * 0.2
  const normalized = Math.min(5, Math.max(0, stepped))
  const starSize = size === "lg" ? "w-5 h-5" : size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 10`}>
      {[...Array(5)].map((_, i) => {
        const fill = Math.min(Math.max(normalized - i, 0), 1) * 100
        return (
          <span key={i} className={`relative inline-block ${starSize}`}>
            <Star className={`${starSize} text-steel`} fill="currentColor" />
            {fill > 0 && (
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill}%` }}>
                <Star className={`${starSize} text-gold`} fill="currentColor" />
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}

export function BettingSitesList() {
  return (
    <section className="py-8 md:py-14 bg-secondary">
      <div className="container mx-auto px-3 md:px-4 max-w-5xl">

        {/* Cards */}
        <div className="flex flex-col gap-4 md:gap-5">
          {bettingSites.map((site, index) => {
            const rank = rankLabels[index] ?? { label: `#${index + 1}`, hot: false }
            const isTop = index === 0

            return (
              <div
                key={site.id}
                className={`relative bg-white rounded-2xl border overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-in-up ${
                  isTop ? "border-gold ring-1 ring-gold/30" : "border-steel"
                }`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Top accent bar */}
                <div className={`h-1 w-full ${isTop ? "bg-gold" : "bg-crimson/40"}`} />

                {/* Rank badge */}
                <div className="absolute top-3 left-0 z-10">
                  <div
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-[9px] font-sans font-bold tracking-[0.18em] uppercase rounded-r-full
                      ${isTop ? "bg-gold text-white" : "bg-crimson text-white"}`}
                  >
                    {rank.hot && <TrendingUp className="w-3 h-3" aria-hidden="true" />}
                    {rank.label}
                  </div>
                </div>

                {/* ── DESKTOP LAYOUT ── */}
                <div className="hidden md:flex items-stretch min-h-[120px]">

                  {/* Logo */}
                  <div className="w-52 flex-shrink-0 bg-white flex items-center justify-center p-6 border-r border-steel">
                    <Image
                      src={site.logo}
                      alt={`${site.name} logo`}
                      width={180}
                      height={68}
                      className="object-contain max-h-16 w-auto"
                    />
                  </div>

                  {/* Welcome offer */}
                  <div className="flex-1 flex flex-col items-center justify-center px-6 py-4 border-r border-steel gap-1.5">
                    <p className="text-[9px] font-sans font-semibold tracking-[0.25em] uppercase text-charcoal/45">Welcome Offer</p>
                    <p className="font-display font-bold text-2xl text-crimson text-center leading-tight">{site.bonus}</p>
                    <p className="text-xs text-charcoal/60 font-sans font-medium text-center leading-snug">{site.welcomeOffer}</p>
                  </div>

                  {/* Score */}
                  <div className="w-48 flex-shrink-0 flex flex-col items-center justify-center px-5 py-4 border-r border-steel gap-2">
                    <span className="font-display font-bold text-4xl text-charcoal leading-none">{site.score.toFixed(1)}</span>
                    <StarRating rating={site.score} size="lg" />
                    <span className="text-[10px] text-charcoal/45 font-sans">{site.reviews.toLocaleString()} reviews</span>
                  </div>

                  {/* CTA */}
                  <div className="w-48 flex-shrink-0 flex flex-col items-center justify-center px-5 py-4 gap-3">
                    <Link
                      href={site.link}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className={`w-full flex items-center justify-center py-3 text-sm font-sans font-bold tracking-wide rounded-xl transition-all
                        ${isTop
                          ? "bg-crimson text-white hover:bg-crimson/90 animate-pulse-red shadow-lg shadow-crimson/20"
                          : "bg-secondary text-crimson border border-crimson hover:bg-crimson hover:text-white"
                        }`}
                    >
                      Claim Bonus
                    </Link>
                    <div className="flex items-center gap-1">
                      <Shield className="w-3 h-3 text-gold" aria-hidden="true" />
                      <span className="text-[9px] text-charcoal/40 font-sans">UKGC Verified</span>
                    </div>
                  </div>

                </div>

                {/* DESKTOP terms bar */}
                <div className="hidden md:flex items-center justify-center w-full bg-secondary/60 border-t border-steel px-6 py-2 rounded-b-2xl">
                  <p className="text-[10px] text-charcoal/40 font-sans text-center leading-relaxed">
                    18+ New customers only. T&amp;Cs Apply. BeGambleAware.org | Gamble responsibly.
                  </p>
                </div>

                {/* ── MOBILE LAYOUT ── */}
                <div className="md:hidden flex flex-col">

                  {/* Row 1 — Logo + Bonus */}
                  <div className="flex items-stretch border-b border-steel min-h-[80px]">
                    <div className="w-[42%] bg-white flex items-center justify-center px-4 py-4 border-r border-steel">
                      <Image
                        src={site.logo}
                        alt={`${site.name} logo`}
                        width={150}
                        height={56}
                        className="object-contain max-h-14 w-full"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center px-4 py-3 gap-0.5">
                      <p className="text-[9px] font-sans font-semibold tracking-widest uppercase text-charcoal/45">Welcome Offer</p>
                      <p className="font-display font-bold text-lg text-crimson leading-snug text-center">{site.bonus}</p>
                      <p className="text-[9px] text-charcoal/55 font-sans font-medium text-center leading-tight">{site.welcomeOffer}</p>
                    </div>
                  </div>

                  {/* Row 2 — Score + CTA */}
                  <div className="flex items-stretch border-b border-steel min-h-[64px]">
                    <div className="flex-1 flex items-center justify-center gap-3 px-4 py-3">
                      <span className="font-display font-bold text-3xl text-charcoal leading-none">{site.score.toFixed(1)}</span>
                      <div className="flex flex-col items-start gap-1">
                        <StarRating rating={site.score} size="md" />
                        <span className="text-[9px] text-charcoal/45 font-sans">{site.reviews.toLocaleString()} reviews</span>
                      </div>
                    </div>
                    <Link
                      href={site.link}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className={`flex items-center justify-center px-6 text-sm font-sans font-bold tracking-wide border-l border-steel
                        ${isTop ? "bg-crimson text-white" : "bg-secondary text-crimson"}`}
                    >
                      Claim
                    </Link>
                  </div>

                  {/* Mobile terms */}
                  <div className="w-full bg-secondary/60 border-t border-steel px-4 py-2 rounded-b-2xl">
                    <p className="text-[10px] text-charcoal/40 font-sans text-center leading-relaxed">
                      18+ New customers only. T&amp;Cs Apply. BeGambleAware.org
                    </p>
                  </div>

                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-[10px] text-charcoal/35 mt-10 font-sans leading-relaxed max-w-2xl mx-auto">
          All casinos listed hold valid UKGC licences. Rankings reflect independent editorial assessment. We may earn commission via affiliate links at no cost to you. 18+ only.
        </p>
      </div>
    </section>
  )
}
