"use client"

import { useState, useEffect } from "react"
import { X, Info } from "lucide-react"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted || !isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden animate-scale-in shadow-2xl border border-steel">
        {/* Gold top bar */}
        <div className="h-1 w-full bg-gold" />

        {/* Header */}
        <div className="bg-secondary px-6 py-4 flex items-center justify-between border-b border-steel">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 flex items-center justify-center rounded-full border border-gold/40 bg-gold/10">
              <Info className="w-5 h-5 text-gold" aria-hidden="true" />
            </div>
            <h2 className="font-display font-bold text-xl text-charcoal">Advertiser Disclosure</h2>
          </div>
          <button
            onClick={onClose}
            className="text-charcoal/40 hover:text-gold transition-colors duration-200 p-1 rounded-full hover:bg-gold/10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-4">
          <div className="border-l-4 border-gold pl-4 bg-gold/5 py-3 pr-3 rounded-r-xl">
            <p className="text-sm font-sans font-semibold text-charcoal leading-snug">
              realukcasinosites.com is a free, independent comparison platform helping UK players identify trusted UKGC-licensed casinos.
            </p>
          </div>

          <div className="space-y-3 border-t border-steel pt-4">
            <p className="text-sm text-charcoal/60 leading-relaxed">
              We maintain affiliate relationships with featured casinos and may earn a commission when you register through our links. This happens at no extra cost to you and never influences our editorial rankings or review scores — those are determined solely by our independent assessment criteria.
            </p>
            <p className="text-sm text-charcoal/60 leading-relaxed">
              All featured casinos hold valid UK Gambling Commission licences. Unlicensed operators will never appear on this platform.
            </p>
            <div className="bg-secondary border border-steel rounded-xl p-3">
              <p className="text-xs text-charcoal/45 leading-relaxed">
                Bonus offers, terms, and availability change frequently. Always verify current terms directly on the operator&apos;s website before claiming. 18+ only. Gamble responsibly —{" "}
                <strong className="text-charcoal">BeGambleAware.org</strong>
              </p>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={onClose}
              className="px-7 py-3 bg-white border-2 border-gold text-gold text-sm font-sans font-bold tracking-wide rounded-xl hover:bg-gold hover:text-white transition-all duration-200"
            >
              Understood
            </button>
          </div>
        </div>

        <div className="h-[3px] bg-gold/30" />
      </div>
    </div>
  )
}
