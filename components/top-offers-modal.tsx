"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ArrowRight, Star, Crown } from "lucide-react"
import { bettingSites } from "@/data/betting-sites"

function StarRating({ rating }: { rating: number }) {
  const stepped = Math.round(((rating / 10) * 5) / 0.2) * 0.2
  const normalized = Math.min(5, Math.max(0, stepped))
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 10`}>
      {[...Array(5)].map((_, i) => {
        const fill = Math.min(Math.max(normalized - i, 0), 1) * 100
        return (
          <span key={i} className="relative inline-block w-5 h-5">
            <Star className="w-5 h-5 text-steel" fill="currentColor" />
            {fill > 0 && (
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill}%` }}>
                <Star className="w-5 h-5 text-gold" fill="currentColor" />
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}

export function TopOffersModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const topSite = bettingSites[0]

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (!mounted) return
    const timer = setTimeout(() => setIsOpen(true), 8000)
    return () => clearTimeout(timer)
  }, [mounted])

  if (!isOpen || !mounted) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in p-4"
      onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false) }}
    >
      <div className="relative w-full max-w-sm bg-white rounded-2xl overflow-hidden animate-scale-in shadow-2xl border border-gold/40">
        {/* Crimson + Gold accent bars */}
        <div className="h-1 w-full bg-crimson" />
        <div className="h-[3px] w-full bg-gold" />

        {/* Header */}
        <div className="bg-secondary px-6 py-4 flex items-center justify-between border-b border-steel">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-crimson/10 border border-crimson/20 rounded-full flex items-center justify-center">
              <Crown className="w-4 h-4 text-crimson" aria-hidden="true" />
            </div>
            <div>
              <p className="text-[9px] font-sans font-bold tracking-[0.3em] uppercase text-gold">
                Exclusive Offer
              </p>
              <h2 className="font-display font-bold text-lg text-charcoal leading-tight">
                UK&apos;s #1 Rated Casino
              </h2>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-charcoal/40 hover:text-crimson transition-colors duration-200 p-1 rounded-full hover:bg-crimson/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 flex flex-col items-center gap-5">
          {/* Logo */}
          <div className="w-full bg-white rounded-xl border border-steel flex items-center justify-center p-6 h-28 shadow-sm">
            <Image
              src={topSite.logo || "/placeholder.svg"}
              alt={`${topSite.name} logo`}
              width={240}
              height={90}
              className="object-contain max-h-full w-full"
            />
          </div>

          {/* Score */}
          <div className="flex flex-col items-center gap-1.5">
            <p className="font-display font-bold text-4xl text-charcoal leading-none">{topSite.score.toFixed(1)}</p>
            <StarRating rating={topSite.score} />
            <p className="text-xs text-charcoal/45 font-sans">{topSite.reviews.toLocaleString()} verified reviews</p>
          </div>

          {/* Bonus block */}
          <div className="w-full border border-gold/30 border-l-4 border-l-gold bg-gold/5 rounded-xl px-5 py-4 text-center">
            <p className="text-[9px] font-sans font-bold tracking-[0.25em] uppercase text-gold mb-1">
              Welcome Bonus
            </p>
            <p className="font-display font-bold text-2xl text-crimson">{topSite.bonus}</p>
            <p className="text-xs text-charcoal/55 font-sans mt-1">{topSite.welcomeOffer}</p>
          </div>

          {/* CTA */}
          <Link
            href={topSite.link}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="w-full flex items-center justify-center gap-2 bg-crimson text-white py-3.5 text-sm font-sans font-bold tracking-wide rounded-xl hover:bg-crimson/90 transition-colors duration-200 shadow-lg shadow-crimson/20"
          >
            Claim Bonus Now
            <ArrowRight className="w-4 h-4" />
          </Link>

        </div>

        {/* Terms bar */}
        <div className="w-full bg-secondary border-t border-steel px-6 py-2.5">
          <p className="text-[10px] text-charcoal/40 font-sans text-center leading-relaxed">
            18+ | New customers only | T&amp;Cs apply | BeGambleAware.org | Gamble responsibly
          </p>
        </div>

      </div>
    </div>
  )
}
