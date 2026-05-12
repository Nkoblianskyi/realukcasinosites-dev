"use client"

import { useState, useEffect } from "react"
import { X, ShieldAlert } from "lucide-react"

interface AgeRestrictionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AgeRestrictionModal({ isOpen, onClose }: AgeRestrictionModalProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted || !isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden animate-scale-in shadow-2xl border border-steel">
        {/* Crimson top bar */}
        <div className="h-1 w-full bg-crimson" />

        {/* Header */}
        <div className="bg-secondary px-6 py-4 flex items-center justify-between border-b border-steel">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 flex items-center justify-center rounded-full border-2 border-crimson bg-crimson/10">
              <span className="font-display font-bold text-base text-crimson">18+</span>
            </div>
            <h2 className="font-display font-bold text-xl text-charcoal">Age Verification</h2>
          </div>
          <button
            onClick={onClose}
            className="text-charcoal/40 hover:text-crimson transition-colors duration-200 p-1 rounded-full hover:bg-crimson/10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-4">
          <div className="flex items-start gap-3 border-l-4 border-crimson pl-4 bg-crimson/5 py-3 pr-3 rounded-r-xl">
            <ShieldAlert className="w-5 h-5 text-crimson mt-0.5 flex-shrink-0" aria-hidden="true" />
            <p className="text-sm font-sans font-semibold text-charcoal leading-snug">
              This website is strictly intended for adults aged 18 or over. By accessing this site, you confirm you are legally permitted to engage with gambling content in the United Kingdom.
            </p>
          </div>

          <div className="space-y-3 border-t border-steel pt-4">
            <p className="text-sm text-charcoal/60 leading-relaxed">
              Every casino listed on realukcasinosites.com holds a current UK Gambling Commission licence, guaranteeing the highest standards of player protection, fair play, and responsible gambling compliance.
            </p>
            <p className="text-sm text-charcoal/60 leading-relaxed">
              Gambling is entertainment, not a source of income. Never wager funds you cannot afford to lose. Set limits before you play.
            </p>
            <div className="bg-secondary border border-steel rounded-xl p-3">
              <p className="text-xs text-charcoal/50 leading-relaxed">
                Need support? Contact{" "}
                <strong className="text-charcoal">BeGambleAware.org</strong>, <strong className="text-charcoal">GamCare.org.uk</strong>, or the National Gambling Helpline:{" "}
                <strong className="text-crimson">0808 8020 133</strong>
              </p>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={onClose}
              className="px-7 py-3 bg-crimson text-white text-sm font-sans font-bold tracking-wide rounded-xl hover:bg-crimson/90 transition-colors duration-200 shadow-lg shadow-crimson/20"
            >
              I Confirm — I Am 18+
            </button>
          </div>
        </div>

        <div className="h-[3px] bg-gold/40" />
      </div>
    </div>
  )
}
