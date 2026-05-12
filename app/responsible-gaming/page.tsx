import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Phone, ExternalLink, AlertTriangle, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Responsible Gaming | RealUKCasinoSites.com",
  description:
    "Player welfare is our priority. Access UKGC-mandated tools, recognise problem gambling warning signs, and find free UK support services.",
}

const tools = [
  {
    title: "Deposit Limits",
    body: "Set daily, weekly, or monthly spend caps directly in your casino account. UKGC regulations require all licensed operators to offer these limits — and to enforce reductions immediately.",
  },
  {
    title: "Reality Checks",
    body: "Mandatory session alerts remind you how long you have been playing. These prompts are required on all UKGC-licensed platforms to help you maintain perspective during play.",
  },
  {
    title: "Cool-Off Periods",
    body: "Feeling the urge to overspend? Request a time-out of 24 hours to six weeks. Your account suspends immediately — no betting, no marketing contact throughout.",
  },
  {
    title: "Self-Exclusion",
    body: "Exclude yourself for a minimum of six months. Licensed casinos must honour exclusion requests within 24 hours and permanently cease all marketing to excluded players.",
  },
  {
    title: "GamStop Self-Exclusion",
    body: "GamStop lets you self-exclude from all UKGC-licensed gambling sites simultaneously with a single registration. Inclusion is mandatory for all UK licence holders.",
  },
  {
    title: "Account History",
    body: "Review your full deposit, withdrawal, and session history at any time. Transparency about your own activity is one of the most powerful responsible gambling tools available.",
  },
]

const warningSigns = [
  "Spending more money on gambling than you can afford to lose",
  "Gambling to escape stress, anxiety, or personal problems",
  "Chasing losses by increasing bet sizes to try to recover",
  "Lying to family or friends about the extent of your gambling",
  "Neglecting work, health, or family responsibilities to gamble",
  "Borrowing money or selling possessions to fund gambling",
  "Feeling anxious, irritable, or restless when unable to gamble",
  "Repeatedly failing in attempts to cut back or stop gambling",
]

const organisations = [
  {
    name: "BeGambleAware",
    description: "Free, confidential advice and the National Gambling Helpline: 0808 8020 133 — available 24/7.",
    href: "https://www.begambleaware.org/",
    logo: "/gamble-aware.png",
    accent: "crimson",
  },
  {
    name: "GamCare",
    description: "The UK's leading provider of free information, support, and counselling for anyone affected by problem gambling.",
    href: "https://www.gamcare.org.uk/",
    logo: "/gamcare.png",
    accent: "gold",
  },
  {
    name: "GamStop",
    description: "Instantly self-exclude from all UKGC-licensed gambling websites and apps in the UK with a single registration.",
    href: "https://www.gamstop.co.uk/",
    logo: "/gamstop.svg",
    accent: "crimson",
  },
  {
    name: "Gambling Therapy",
    description: "Free global online support and counselling service for people affected by problem gambling anywhere in the world.",
    href: "https://www.gamblingtherapy.org/",
    logo: "/gordon.png",
    accent: "gold",
  },
]

export default function ResponsibleGaming() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* ── HERO ── */}
      <section className="relative pt-[70px] md:pt-[88px] overflow-hidden min-h-[420px] md:min-h-[480px] flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src="/rg-hero.jpg"
            alt="A calm, supportive environment representing responsible gambling awareness"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-charcoal/50" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)" }} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px] z-20 bg-gold/70" />

        <div className="relative z-10 container mx-auto px-4 pb-12 md:pb-16">
          <p className="inline-block text-[9px] font-sans font-bold tracking-[0.4em] uppercase text-gold bg-black/30 backdrop-blur-sm border border-gold/30 px-3 py-1.5 rounded-full mb-4">
            Player Welfare
          </p>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4 text-balance max-w-2xl leading-tight">
            Gambling Should Always<br />
            <span className="text-gold">Stay Fun</span>
          </h1>
          <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl text-pretty">
            We take player welfare seriously. Every casino we recommend is UKGC-licensed and required by law to provide robust safeguards.
          </p>
        </div>
      </section>

      {/* ── EMERGENCY CALLOUT ── */}
      <section className="bg-crimson py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-white shrink-0" aria-hidden="true" />
              <div>
                <p className="text-white/70 text-[10px] font-sans tracking-widest uppercase">Free 24/7 Helpline</p>
                <a href="tel:08088020133" className="text-white font-display font-bold text-xl hover:text-white/85 transition-colors">
                  0808 802 0133
                </a>
              </div>
            </div>
            <div className="h-px sm:h-8 w-16 sm:w-px bg-white/20" />
            <p className="text-white/80 text-xs leading-relaxed text-center sm:text-left max-w-sm">
              National Gambling Helpline — BeGambleAware. Free from all UK landlines and mobiles.
            </p>
            <Link
              href="https://www.begambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[10px] font-sans font-bold tracking-widest uppercase text-white border border-white/40 hover:border-white hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-200 whitespace-nowrap"
            >
              Get Help <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── COMMITMENT ── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-[9px] font-sans font-bold tracking-[0.4em] uppercase text-gold mb-3">Our Commitment</p>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-charcoal mb-3 text-balance">
              Gambling in Control
            </h2>
            <div className="h-[3px] w-10 bg-crimson rounded-full mb-6" />
            <div className="grid md:grid-cols-2 gap-6 text-sm text-charcoal/65 leading-relaxed">
              <p>
                Gambling is a legal and legitimate form of entertainment for millions of UK adults. For some, it becomes problematic — and the consequences can be severe. We take our responsibility seriously. We actively encourage every visitor to gamble strictly within their means, using the tools available, and for entertainment only.
              </p>
              <p>
                We exclusively feature UKGC-licensed casinos. Every operator on this platform is legally required to provide comprehensive responsible gambling tools, verify player ages, honour self-exclusion requests, and display helpline information prominently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOOLS GRID ── */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[9px] font-sans font-bold tracking-[0.4em] uppercase text-gold mb-3">Safeguards</p>
              <h2 className="font-display font-bold text-2xl md:text-4xl text-charcoal mb-3 text-balance">
                Responsible Gambling Tools
              </h2>
              <div className="h-[3px] w-10 bg-crimson rounded-full mx-auto mb-3" />
              <p className="text-sm text-charcoal/60 max-w-lg mx-auto">
                All UKGC-licensed casinos must provide these tools. Use them proactively, not reactively.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tools.map((tool, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-steel border-t-4 border-t-gold p-6 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-8 h-[3px] bg-gold rounded-full mb-4" />
                  <h3 className="font-display font-bold text-base text-charcoal mb-2">{tool.title}</h3>
                  <p className="text-sm text-charcoal/60 leading-relaxed">{tool.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WARNING SIGNS ── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-crimson/8 flex items-center justify-center shrink-0 mt-1">
                <AlertTriangle className="w-5 h-5 text-crimson" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[9px] font-sans font-bold tracking-[0.4em] uppercase text-gold mb-2">Awareness</p>
                <h2 className="font-display font-bold text-2xl md:text-4xl text-charcoal text-balance">
                  Warning Signs of Problem Gambling
                </h2>
              </div>
            </div>
            <div className="h-[3px] w-10 bg-crimson rounded-full mb-6" />
            <p className="text-sm text-charcoal/65 leading-relaxed mb-7">
              Recognising the signs early is the most critical step toward getting help. Seek support immediately if you identify with any of the following:
            </p>
            <ul className="space-y-3">
              {warningSigns.map((sign, i) => (
                <li key={i} className="flex items-start gap-3 bg-secondary rounded-xl border border-steel px-4 py-3">
                  <CheckCircle className="w-4 h-4 text-crimson mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-sm text-charcoal/70 leading-relaxed">{sign}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── SUPPORT ORGANISATIONS ── */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-[9px] font-sans font-bold tracking-[0.4em] uppercase text-gold mb-3">Support</p>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-charcoal mb-3 text-balance">
              Free Help Is Available
            </h2>
            <div className="h-[3px] w-10 bg-crimson rounded-full mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {organisations.map((org) => (
                <Link
                  key={org.name}
                  href={org.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl border border-steel hover:border-gold/50 hover:shadow-md transition-all duration-200 p-6 flex flex-col gap-4 group"
                >
                  <Image
                    src={org.logo}
                    alt={org.name}
                    width={120}
                    height={36}
                    className="object-contain h-8 w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-200"
                  />
                  <div>
                    <p className="font-display font-bold text-sm text-charcoal mb-1 group-hover:text-crimson transition-colors duration-200">
                      {org.name}
                    </p>
                    <p className="text-xs text-charcoal/55 leading-relaxed">{org.description}</p>
                  </div>
                  <span className="text-[9px] font-sans font-bold tracking-widest uppercase text-gold group-hover:text-crimson transition-colors duration-200 flex items-center gap-1">
                    Visit Website <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
