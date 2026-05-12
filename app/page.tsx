"use client"

import { useState } from "react"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BettingSitesList } from "@/components/betting-sites-list"
import { TopOffersModal } from "@/components/top-offers-modal"
import { AgeRestrictionModal } from "@/components/age-restriction-modal"
import { AdvertiserInfoModal } from "@/components/advertiser-info-modal"
import { FaqSection } from "@/components/faq-section"
import { Shield, Award, Clock, CheckCircle2, Star } from "lucide-react"

export default function Home() {
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false)
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)

  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <div className="pt-[68px] md:pt-[88px]">

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="flex flex-col">

          {/* Image background block — full width, all screens */}
          <div className="relative h-[220px] md:h-[356px] w-full overflow-hidden">

            {/* Background image — fills the entire block */}
            <Image
              src="/casino-hero.jpg"
              alt="Luxury UK casino — roulette wheel, playing cards and poker chips with London skyline"
              fill
              className="object-cover object-center"
              priority
            />

            {/* Dark overlay for text readability on all screens */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Bottom fade to charcoal bar */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Content — centred over image */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center gap-2 md:gap-3">

              {/* Eyebrow */}
              <p className="text-[9px] font-sans font-bold tracking-[0.32em] uppercase text-white/70">
                UK&apos;s #1 Casino Comparison Site
              </p>

              {/* Headline */}
              <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-[2.4rem] leading-tight text-white text-balance drop-shadow-sm">
                Find Your Perfect{" "}
                <span className="text-gold">Real UK</span>{" "}
                Casino
              </h1>

              {/* Sub — hidden on mobile to fit 220px */}
              <p className="hidden md:block text-sm text-white/75 leading-relaxed max-w-md text-pretty">
                Independent expert reviews of every UKGC-licensed casino — bonuses, games, withdrawals and player safety verified.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-1.5">
                {[
                  { icon: <Shield className="w-2.5 h-2.5" aria-hidden="true" />, label: "UKGC Licensed", variant: "red" },
                  { icon: <Award className="w-2.5 h-2.5" aria-hidden="true" />, label: "Verified Bonuses", variant: "dark" },
                  { icon: <Star className="w-2.5 h-2.5" fill="currentColor" aria-hidden="true" />, label: "Expert Reviewed", variant: "dark" },
                  { icon: <CheckCircle2 className="w-2.5 h-2.5" aria-hidden="true" />, label: "Safe & Trusted", variant: "red" },
                ].map((b) => (
                  <span
                    key={b.label}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-sans font-semibold whitespace-nowrap
                      ${b.variant === "red"
                        ? "bg-crimson text-white"
                        : "bg-white/15 text-white backdrop-blur-sm border border-white/20 [&_svg]:text-gold"
                      }`}
                  >
                    {b.icon}
                    {b.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Full-width disclaimer bar */}
          <div className="bg-charcoal">
            {/* Mobile: two stacked rows */}
            <div className="sm:hidden px-4 py-2 flex flex-col items-center gap-1">
              <div className="flex items-center gap-1.5">
                <Clock className="w-2.5 h-2.5 text-gold" aria-hidden="true" />
                <span className="text-[9px] font-sans text-white/55">
                  Ratings updated:{" "}
                  <span className="text-white font-semibold">{currentDate}</span>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => setIsAdvertiserModalOpen(true)}
                  className="text-[9px] font-sans text-gold hover:text-white underline underline-offset-2 transition-colors"
                >
                  Advertiser Disclosure
                </button>
                <span className="text-white/20 select-none text-xs">|</span>
                <button
                  onClick={() => setIsAgeModalOpen(true)}
                  className="text-[9px] font-sans text-gold hover:text-white underline underline-offset-2 transition-colors"
                >
                  Age Verification
                </button>
              </div>
            </div>
            {/* Desktop: single row */}
            <div className="hidden sm:flex container mx-auto px-4 h-8 items-center justify-between gap-4">
              <div className="flex items-center gap-1.5 shrink-0">
                <Clock className="w-2.5 h-2.5 text-gold" aria-hidden="true" />
                <span className="text-[9px] font-sans text-white/55">
                  Ratings updated:{" "}
                  <span className="text-white font-semibold">{currentDate}</span>
                </span>
              </div>
              <p className="text-[9px] font-sans text-white/40 text-center flex-1">
                18+ only. Gamble responsibly.{" "}
                <span className="text-white/60">BeGambleAware.org</span>
              </p>
              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  onClick={() => setIsAdvertiserModalOpen(true)}
                  className="text-[9px] font-sans text-gold hover:text-white underline underline-offset-2 transition-colors whitespace-nowrap"
                >
                  Advertiser Disclosure
                </button>
                <span className="text-white/20 select-none text-xs">|</span>
                <button
                  onClick={() => setIsAgeModalOpen(true)}
                  className="text-[9px] font-sans text-gold hover:text-white underline underline-offset-2 transition-colors whitespace-nowrap"
                >
                  Age Verification
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── CASINO LIST ──────────────────────────────────── */}
        <div id="casino-sites">
          <BettingSitesList />
        </div>

        {/* ── EDITORIAL GUIDE ──────────────────────────────── */}
        <section className="py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">

              {/* Header */}
              <div className="text-center mb-10 md:mb-16">
                <p className="text-[10px] font-sans font-bold tracking-[0.35em] uppercase text-gold mb-3">
                  Editorial Guide
                </p>
                <h2 className="font-display font-bold text-2xl md:text-4xl text-charcoal mb-3 text-balance">
                  How to Choose a Real UK Casino
                </h2>
                <div className="w-14 h-[3px] bg-crimson mx-auto rounded-full my-4" />
                <p className="text-sm text-charcoal/55 leading-relaxed max-w-xl mx-auto">
                  Your complete guide to selecting a safe, UKGC-licensed casino — updated {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}.
                </p>
              </div>

              {/* Article sections */}
              <article className="space-y-6 md:space-y-10">
                {[
                  {
                    title: "UK Casino Regulation — What You Must Know",
                    body: [
                      "The UK Gambling Commission (UKGC) enforces some of the strictest gambling regulations in the world. Every casino legally serving UK customers must hold a current UKGC licence — without exception. Licensed operators must segregate player funds, implement age verification, and offer robust responsible gambling tools.",
                      "Verifying a casino's UKGC licence is your first and most critical step. A valid licence guarantees the operator has passed rigorous financial, technical, and integrity checks. Our team verifies each casino's licence before it appears on realukcasinosites.com.",
                    ],
                    highlight: false,
                  },
                  {
                    title: "Reading Casino Welcome Bonuses Critically",
                    body: [
                      "Welcome bonuses attract players but must be scrutinised. Wagering requirements — the number of times you must play through a bonus before withdrawing — are the most important metric. A £200 bonus with 40x wagering requires £8,000 in bets. Understand what you are accepting before claiming any offer.",
                      "UK casinos are prohibited from targeting bonuses at vulnerable players. All offers must comply with UKGC advertising standards. We disclose wagering requirements and key terms for every bonus featured on this platform.",
                    ],
                    highlight: true,
                  },
                  {
                    title: "Game Libraries and Certified Providers",
                    body: [
                      "The quality and diversity of games determines the long-term value of any casino. Top-tier operators partner with certified software studios — Evolution Gaming for live tables, NetEnt and Microgaming for slots, and Playtech for a full spectrum of titles. All reputable providers submit their RNG algorithms to independent auditors.",
                      "Look for casinos offering a minimum of 500 slots, dedicated live casino floors, and progressive jackpot networks. Exclusive titles and daily new releases signal a serious operator committed to player experience.",
                    ],
                    highlight: false,
                  },
                  {
                    title: "Banking Security and Withdrawal Speed",
                    body: [
                      "UK casinos must not accept credit cards since the UKGC's 2020 ban. Accepted methods include debit cards (Visa, Mastercard), e-wallets (PayPal, Skrill, Neteller), bank transfers, and digital wallets (Apple Pay, Google Pay). Always verify deposit and withdrawal fees before committing.",
                      "Withdrawal speed is a key trust indicator. The fastest UK casinos process e-wallet withdrawals within 4 hours. Debit card payments typically complete in 1–3 business days. Any casino taking longer than 5 business days without explanation should be treated with caution.",
                    ],
                    highlight: false,
                  },
                  {
                    title: "Mobile Casino Standards",
                    body: [
                      "Over 70% of UK casino traffic now originates from mobile devices. A premium casino must deliver a full desktop experience on smartphones — including live dealer tables, account management, and bonus claims — without degradation in performance or security.",
                      "Dedicated iOS and Android apps are preferred over browser-based solutions for speed and biometric security. Our testing team specifically evaluates mobile performance on devices across the UK's most common mobile platforms.",
                    ],
                    highlight: true,
                  },
                  {
                    title: "Responsible Gambling: Know Your Limits",
                    body: [
                      "Every UKGC-licensed casino must provide accessible responsible gambling tools: deposit limits, session time alerts, cooling-off periods, and self-exclusion. These tools protect you. Use them proactively, not reactively.",
                      "If gambling is causing distress, contact BeGambleAware (0808 8020 133), GamCare, or register with GamStop to self-exclude from all UK licensed gambling sites simultaneously. There is no shame in asking for help. The best operators make support options prominent, not hidden.",
                    ],
                    highlight: false,
                  },
                ].map((section, i) => (
                  <div
                    key={i}
                    className={`pl-5 md:pl-7 ${
                      section.highlight
                        ? "border-l-4 border-gold rounded-l-sm bg-gold/5 py-4 pr-4 -ml-px"
                        : "border-l-4 border-steel"
                    }`}
                  >
                    <h3 className="font-display font-bold text-base md:text-xl text-charcoal mb-3">
                      {section.title}
                    </h3>
                    {section.body.map((p, j) => (
                      <p key={j} className="text-sm text-charcoal/60 leading-relaxed mb-2 last:mb-0">
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
              </article>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────── */}
        <div id="faq-section">
          <FaqSection />
        </div>
      </div>

      <TopOffersModal />
      <AgeRestrictionModal isOpen={isAgeModalOpen} onClose={() => setIsAgeModalOpen(false)} />
      <AdvertiserInfoModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <SiteFooter />
    </main>
  )
}
