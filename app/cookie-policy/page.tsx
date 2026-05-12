import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Settings, BarChart2, Wrench, Target } from "lucide-react"

export const metadata = {
  title: "Cookie Policy | RealUKCasinoSites.com",
  description:
    "How realukcasinosites.com uses cookies and tracking technologies — and exactly how to manage your preferences.",
}

const lastUpdated = "2026"

const cookieTypes = [
  {
    icon: <Wrench className="w-4 h-4 text-crimson" aria-hidden="true" />,
    title: "Strictly Necessary",
    badge: "Cannot be disabled",
    badgeColor: "bg-crimson/10 text-crimson",
    body: "Essential for site functionality. These activate when you set preferences, complete forms, or navigate the site. Without them, certain services cannot be delivered.",
  },
  {
    icon: <BarChart2 className="w-4 h-4 text-gold" aria-hidden="true" />,
    title: "Performance & Analytics",
    badge: "Anonymised",
    badgeColor: "bg-gold/15 text-yellow-700",
    body: "Collect anonymised data on how visitors use the site — page views, traffic sources, and popular content. Used solely to improve user experience and site performance.",
  },
  {
    icon: <Settings className="w-4 h-4 text-charcoal" aria-hidden="true" />,
    title: "Functional",
    badge: "Optional",
    badgeColor: "bg-steel text-charcoal/60",
    body: "Enable enhanced features like region preferences and personalised display settings. Declining these may limit certain non-essential site functionality.",
  },
  {
    icon: <Target className="w-4 h-4 text-gold" aria-hidden="true" />,
    title: "Targeting & Advertising",
    badge: "Optional",
    badgeColor: "bg-steel text-charcoal/60",
    body: "Set by advertising partners to measure campaign performance and display relevant content. These do not store directly identifiable personal information.",
  },
]

const sections = [
  {
    title: "1. What Are Cookies?",
    body: "Cookies are small text files placed on your device when you visit a website. They allow sites to function efficiently, remember your preferences, and provide owners with anonymised analytics data. Each cookie may contain a unique identifier and information about your device interactions with the site.",
  },
  {
    title: "2. First-Party vs Third-Party Cookies",
    body: "First-party cookies are set directly by realukcasinosites.com for site functionality and internal analytics. Third-party cookies are set by external services — including Google Analytics, social platforms, and advertising networks — each governed by their own independent privacy policies.",
  },
  {
    title: "3. Managing Your Cookie Preferences",
    items: [
      ["Cookie Banner", "On your first visit, our consent banner lets you accept or decline non-essential cookies. You can update preferences at any time via the Cookie Policy link in our footer."],
      ["Browser Settings", "Most browsers allow you to view, delete, and block cookies through their privacy settings. Blocking all cookies may impair website functionality."],
      ["Advertising Opt-Out", "To opt out of interest-based advertising, visit the Digital Advertising Alliance at youronlinechoices.com/uk."],
    ],
  },
  {
    title: "4. Third-Party Services",
    body: "We use cookies from the following services: Google Analytics (anonymised traffic analysis), social media platforms (content sharing integration), advertising networks (campaign measurement), and affiliate partners (referral and commission tracking).",
  },
  {
    title: "5. Cookie Lifespan",
    body: "Session cookies are deleted automatically when you close your browser. Persistent cookies remain on your device for a defined period — ranging from days to up to two years — or until you manually delete them via browser settings.",
  },
  {
    title: "6. Policy Updates",
    body: "This Cookie Policy may be updated periodically to reflect regulatory or technical changes. We will notify users of significant changes by updating the effective date at the top of this page.",
  },
  {
    title: "7. Contact",
    body: "Questions about our cookie practices? Contact us at cookies@realukcasinosites.com. For broader data rights enquiries, see our Privacy Policy.",
  },
]

export default function CookiePolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* ── HERO ── */}
      <section className="relative pt-[70px] md:pt-[88px] overflow-hidden min-h-[380px] md:min-h-[440px] flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cookie-hero.jpg"
            alt="Digital privacy and cookie transparency concept"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-charcoal/60" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)" }} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px] z-20 bg-gold/70" />

        <div className="relative z-10 container mx-auto px-4 pb-12 md:pb-14">
          <p className="inline-block text-[9px] font-sans font-bold tracking-[0.4em] uppercase text-gold bg-black/30 backdrop-blur-sm border border-gold/30 px-3 py-1.5 rounded-full mb-4">
            Legal &amp; Compliance
          </p>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-3 text-balance max-w-2xl leading-tight">
            Cookie <span className="text-gold">Policy</span>
          </h1>
          <p className="text-white/75 text-sm leading-relaxed max-w-xl mb-3">
            We believe in complete transparency about how we use tracking technologies on this site.
          </p>
          <p className="text-white/45 text-[10px] font-sans tracking-[0.3em] uppercase">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* ── INTRO CALLOUT ── */}
      <section className="bg-white border-b border-steel">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto border-l-4 border-gold bg-gold/5 pl-5 pr-4 py-4 rounded-r-2xl">
            <p className="text-sm text-charcoal/70 leading-relaxed">
              This Cookie Policy explains how <strong className="text-charcoal">realukcasinosites.com</strong> uses cookies and similar tracking technologies — in compliance with the <strong className="text-charcoal">Privacy and Electronic Communications Regulations (PECR)</strong> and <strong className="text-charcoal">UK GDPR</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ── COOKIE TYPES ── */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-[9px] font-sans font-bold tracking-[0.4em] uppercase text-gold mb-3">Section 2</p>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-charcoal mb-3">
              Types of Cookies We Use
            </h2>
            <div className="h-[3px] w-8 bg-crimson rounded-full mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cookieTypes.map((ct, i) => (
                <div key={i} className="bg-white rounded-2xl border border-steel p-6 hover:shadow-md hover:border-gold/40 transition-all duration-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center">
                      {ct.icon}
                    </div>
                    <span className={`text-[9px] font-sans font-bold tracking-[0.25em] uppercase px-2.5 py-1 rounded-full ${ct.badgeColor}`}>
                      {ct.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base text-charcoal mb-2">{ct.title}</h3>
                  <p className="text-sm text-charcoal/60 leading-relaxed">{ct.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── POLICY SECTIONS ── */}
      <section className="py-12 md:py-16 bg-white flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display font-bold text-lg md:text-xl text-charcoal mb-2">{section.title}</h2>
                <div className="h-px bg-steel mb-4" />
                {section.body && (
                  <p className="text-sm text-charcoal/65 leading-relaxed">{section.body}</p>
                )}
                {section.items && (
                  <ul className="space-y-3">
                    {section.items.map(([title, desc]) => (
                      <li key={title} className="flex gap-3 border-l-4 border-steel pl-4 rounded-r-lg py-1">
                        <span className="font-sans font-bold text-sm text-charcoal whitespace-nowrap">{title}:</span>
                        <span className="text-sm text-charcoal/65 leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Contact card */}
            <div className="bg-secondary rounded-2xl border border-steel p-6 md:p-8">
              <p className="text-[9px] font-sans font-bold tracking-[0.4em] uppercase text-gold mb-2">Get in Touch</p>
              <h3 className="font-display font-bold text-xl text-charcoal mb-3">Cookie Enquiries</h3>
              <p className="text-sm text-charcoal/60 leading-relaxed mb-4">
                Questions about how we use cookies or how to manage your preferences? Our team is happy to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="mailto:cookies@realukcasinosites.com"
                  className="inline-flex items-center gap-2 bg-crimson text-white text-xs font-sans font-bold tracking-[0.18em] uppercase px-5 py-3 rounded-full hover:bg-crimson/85 transition-colors duration-200"
                >
                  cookies@realukcasinosites.com
                </Link>
                <Link
                  href="/privacy-policy"
                  className="inline-flex items-center text-xs font-sans font-semibold text-charcoal/55 hover:text-crimson transition-colors duration-200 px-2"
                >
                  View Privacy Policy &rarr;
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
