"use client"

import { useCookieConsent } from "@/context/cookie-consent-context"
import Link from "next/link"
import { Cookie } from "lucide-react"

export function CookieBanner() {
  const { showBanner, acceptAll, declineAll } = useCookieConsent()

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up p-3 md:p-0">
      <div className="bg-white border border-steel border-t-0 rounded-t-2xl md:rounded-none shadow-2xl text-charcoal px-4 py-5 md:px-0 md:py-0">
        {/* Gold accent line at top */}
        <div className="h-1 bg-gold w-full rounded-t-full" />
        <div className="container mx-auto md:py-5 md:px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3 flex-1 max-w-2xl">
              <Cookie className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-[9px] font-sans font-bold tracking-[0.3em] uppercase text-gold mb-1">
                  Cookie Notice
                </p>
                <p className="text-sm text-charcoal/65 leading-relaxed">
                  We use cookies to improve your experience, serve personalised casino recommendations, and analyse site traffic. View our{" "}
                  <Link
                    href="/cookie-policy"
                    className="text-crimson hover:text-crimson/80 underline underline-offset-2 transition-colors"
                  >
                    Cookie Policy
                  </Link>{" "}
                  for full details.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={declineAll}
                className="px-5 py-2.5 text-sm font-sans font-semibold tracking-wide text-charcoal/55 border border-steel rounded-lg hover:border-charcoal/30 hover:text-charcoal transition-all duration-200"
              >
                Decline
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-2.5 text-sm font-sans font-bold tracking-wide bg-crimson text-white rounded-lg hover:bg-crimson/90 transition-all duration-200 shadow-md shadow-crimson/20"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
