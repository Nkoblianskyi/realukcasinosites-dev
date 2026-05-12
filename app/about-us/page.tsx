import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Shield, Search, FileText, RefreshCw, Users, Award } from "lucide-react"

export const metadata = {
  title: "About Us | RealUKCasinoSites.com — Independent UK Casino Reviews",
  description:
    "Learn who we are, how we review UK casinos, and our commitment to helping British players find safe, UKGC-licensed sites they can truly trust.",
}

const pillars = [
  {
    icon: <Shield className="w-5 h-5 text-crimson" aria-hidden="true" />,
    title: "UKGC Licensed Only",
    body: "Every casino we feature holds a current UK Gambling Commission licence. No exceptions — unlicensed operators never appear on this platform.",
  },
  {
    icon: <Search className="w-5 h-5 text-crimson" aria-hidden="true" />,
    title: "Hands-On Testing",
    body: "Our analysts deposit real money, claim real bonuses, and test withdrawals before publishing a single review. No shortcuts.",
  },
  {
    icon: <FileText className="w-5 h-5 text-crimson" aria-hidden="true" />,
    title: "Transparent Criteria",
    body: "We publish every scoring dimension openly. Rankings are earned against objective criteria — never influenced by commercial arrangements.",
  },
  {
    icon: <RefreshCw className="w-5 h-5 text-crimson" aria-hidden="true" />,
    title: "Continuously Updated",
    body: "Casinos change — we reassess every listed operator on a rolling schedule and remove platforms that no longer meet our standards.",
  },
  {
    icon: <Users className="w-5 h-5 text-crimson" aria-hidden="true" />,
    title: "UK Player Focus",
    body: "GBP accounts, UK payment methods, Sterling bonuses, and UKGC-mandated responsible gambling tools are mandatory requirements.",
  },
  {
    icon: <Award className="w-5 h-5 text-crimson" aria-hidden="true" />,
    title: "Editorial Independence",
    body: "Affiliate income funds our operation but never dictates our scores. We have removed high-paying partners for failing quality checks.",
  },
]

const criteria = [
  { title: "UKGC Licence", desc: "Current status, compliance history, and active enforcement actions" },
  { title: "Financial Security", desc: "Player fund segregation, SSL encryption, and fraud prevention" },
  { title: "Welcome Bonus", desc: "Genuine value, realistic wagering requirements, and transparent T&Cs" },
  { title: "Game Library", desc: "Variety, RTP audits, certified providers, and live dealer quality" },
  { title: "Payment Methods", desc: "UK-accepted options, processing times, and fee transparency" },
  { title: "Mobile Experience", desc: "App quality, full game access, and account management on mobile" },
  { title: "Customer Support", desc: "Response speed, live chat availability, and quality of resolution" },
  { title: "Responsible Gambling", desc: "Tools accessibility, self-exclusion, BeGambleAware and GamCare links" },
]

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* ── HERO ── */}
      <section className="relative pt-[70px] md:pt-[88px] overflow-hidden min-h-[420px] md:min-h-[500px] flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-hero.jpg"
            alt="RealUKCasinoSites editorial team reviewing casino data"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-charcoal/55" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(350,72%,42%,0.35) 0%, transparent 60%)" }} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px] z-20 bg-gold/70" />

        <div className="relative z-10 container mx-auto px-4 pb-12 md:pb-16">
          <p className="inline-block text-[9px] font-sans font-bold tracking-[0.4em] uppercase text-gold bg-black/30 backdrop-blur-sm border border-gold/30 px-3 py-1.5 rounded-full mb-4">
            Who We Are
          </p>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4 text-balance max-w-2xl leading-tight">
            The UK&apos;s Most Rigorous<br />
            <span className="text-gold">Casino Review</span> Platform
          </h1>
          <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl text-pretty">
            We cut through the marketing noise so British players always land on a casino that is genuinely safe, fairly run, and worth their time.
          </p>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-[9px] font-sans font-bold tracking-[0.4em] uppercase text-gold mb-3">Our Mission</p>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-charcoal mb-3 text-balance">
              Clarity in a Crowded Market
            </h2>
            <div className="h-[3px] w-10 bg-crimson rounded-full mb-6" />
            <div className="grid md:grid-cols-2 gap-6 text-sm text-charcoal/65 leading-relaxed">
              <p>
                The UK gambling market is saturated with operators making identical promises. Our specialist team exists to separate genuinely trustworthy casinos from those that only appear so on the surface. We have been independently reviewing UKGC-licensed casinos since the early days of British online gambling regulation.
              </p>
              <p>
                Whether you play slots, live blackjack, roulette, or progressive jackpots, our platform matches you with operators that deliver real value, verified licences, and dependable service — backed by hands-on testing, not press releases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[9px] font-sans font-bold tracking-[0.4em] uppercase text-gold mb-3">Our Standards</p>
              <h2 className="font-display font-bold text-2xl md:text-4xl text-charcoal mb-3 text-balance">
                What Sets Us Apart
              </h2>
              <div className="h-[3px] w-10 bg-crimson rounded-full mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-steel p-6 hover:border-gold/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-crimson/8 flex items-center justify-center mb-4">
                    {p.icon}
                  </div>
                  <h3 className="font-display font-bold text-base text-charcoal mb-2">{p.title}</h3>
                  <p className="text-sm text-charcoal/60 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-[9px] font-sans font-bold tracking-[0.4em] uppercase text-gold mb-3">Our Process</p>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-charcoal mb-3 text-balance">
              How We Review Every Casino
            </h2>
            <div className="h-[3px] w-10 bg-crimson rounded-full mb-8" />
            <p className="text-sm text-charcoal/65 leading-relaxed mb-8">
              Every casino recommendation is backed by a comprehensive assessment across eight core dimensions — developed by analysts with combined decades of UK gambling industry experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {criteria.map(({ title, desc }, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-xl border border-steel bg-secondary hover:border-gold/40 transition-colors duration-200"
                >
                  <div className="w-7 h-7 rounded-full bg-crimson flex items-center justify-center text-white text-[11px] font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-sans font-bold text-sm text-charcoal mb-0.5">{title}</p>
                    <p className="text-xs text-charcoal/55 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FUNDING ── */}
      <section className="py-14 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border border-steel border-t-4 border-t-crimson p-8 md:p-10 shadow-sm">
              <p className="text-[9px] font-sans font-bold tracking-[0.4em] uppercase text-gold mb-3">
                How We Are Funded
              </p>
              <h3 className="font-display font-bold text-2xl text-charcoal mb-4">
                Free for All UK Players. Always.
              </h3>
              <div className="h-[2px] w-8 bg-gold rounded-full mb-6" />
              <div className="grid md:grid-cols-2 gap-6 text-sm text-charcoal/65 leading-relaxed">
                <p>
                  This platform is entirely free to use. We earn affiliate commissions when you register with featured casinos through our referral links — at no extra cost to you whatsoever. This model allows us to operate independently without paywalls, subscriptions, or restricted content.
                </p>
                <p>
                  Our commercial relationships never compromise editorial integrity. Casino rankings are determined solely by objective performance against our published criteria. We have declined — and removed — operators who failed our standards, regardless of commission potential.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-steel flex flex-col sm:flex-row sm:items-center gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-crimson text-white text-xs font-sans font-bold tracking-[0.18em] uppercase px-5 py-3 rounded-full hover:bg-crimson/85 transition-colors duration-200"
                >
                  Browse Our Casino Reviews
                </Link>
                <Link
                  href="/responsible-gaming"
                  className="text-xs font-sans font-semibold text-charcoal/55 hover:text-crimson transition-colors duration-200 tracking-wide"
                >
                  Responsible Gaming Policy &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
