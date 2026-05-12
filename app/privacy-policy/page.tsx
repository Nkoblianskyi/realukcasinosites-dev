import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Lock, Eye, Trash2, Download, ShieldCheck } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | RealUKCasinoSites.com",
  description:
    "How realukcasinosites.com collects, uses, and protects your personal data in full compliance with UK GDPR and the Data Protection Act 2018.",
}

const lastUpdated = "2026"

const rights = [
  { icon: <Eye className="w-4 h-4 text-crimson" />, title: "Right of Access", desc: "Request a copy of any personal data we hold about you." },
  { icon: <Lock className="w-4 h-4 text-crimson" />, title: "Right to Rectification", desc: "Correct inaccurate or incomplete personal information." },
  { icon: <Trash2 className="w-4 h-4 text-crimson" />, title: "Right to Erasure", desc: "Request deletion of your personal data from our systems." },
  { icon: <Download className="w-4 h-4 text-crimson" />, title: "Right to Portability", desc: "Receive your data in a structured, machine-readable format." },
  { icon: <ShieldCheck className="w-4 h-4 text-crimson" />, title: "Right to Object", desc: "Object to processing based on legitimate interests or direct marketing." },
]

const sections = [
  {
    title: "1. Information We Collect",
    items: [
      ["Personal Identifiers", "When you contact us or subscribe to updates, we may collect your name, email address, and any information you voluntarily provide."],
      ["Usage Data", "We automatically collect anonymised data about your interactions — pages viewed, time on site, referral source, browser type, device, and anonymised IP address."],
      ["Cookies", "We use cookies and similar tracking technologies. See our Cookie Policy for full details on types, purposes, and how to manage them."],
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: "We use collected data to operate and maintain this site; improve user experience; send relevant updates (with your explicit consent); respond to enquiries; analyse traffic and usage patterns; comply with legal obligations; and detect and prevent fraud and security threats.",
  },
  {
    title: "3. Legal Basis for Processing",
    items: [
      ["Consent", "Where you have given explicit permission — for example, newsletter subscriptions or optional analytics."],
      ["Legitimate Interests", "Where processing is necessary for our editorial and commercial operations and does not override your fundamental rights."],
      ["Legal Obligation", "Where required by UK law, including the Data Protection Act 2018 and ICO guidance."],
    ],
  },
  {
    title: "4. Information Sharing",
    body: "We never sell your personal data. We share information only with trusted service providers under strict confidentiality agreements; UK legal authorities when legally required; and in a business transfer scenario, subject to equivalent data protection standards.",
  },
  {
    title: "5. Data Security",
    body: "We implement industry-standard technical and organisational safeguards: SSL/TLS encryption, access controls, secure hosting infrastructure, and routine security audits. No internet transmission is 100% guaranteed secure — we apply best-practice measures consistently throughout.",
  },
  {
    title: "6. Data Retention",
    body: "We retain personal data only as long as necessary to fulfil the purposes described in this policy or as required by UK law. Data no longer needed is securely deleted or anonymised per our internal retention schedule.",
  },
  {
    title: "7. Third-Party Links",
    body: "Our site links to external casino operators and third-party services. We are not responsible for the privacy practices of those external sites. Review each operator's policy before submitting personal information.",
  },
  {
    title: "8. Children's Privacy",
    body: "This platform is strictly for adults aged 18 and over. We do not knowingly collect personal data from individuals under 18. If you believe we hold data from a minor, contact us immediately and we will delete it without delay.",
  },
  {
    title: "9. Policy Updates",
    body: "This Privacy Policy may be updated periodically to reflect changes in law, technology, or our practices. We will notify users of material changes by posting the revised policy on this page with an updated effective date.",
  },
  {
    title: "10. Contact & Complaints",
    body: "To exercise your data rights or raise a privacy concern, email us at privacy@realukcasinosites.com. You may also lodge a complaint with the UK Information Commissioner's Office (ICO) at ico.org.uk.",
  },
]

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* ── HERO ── */}
      <section className="relative pt-[70px] md:pt-[88px] overflow-hidden min-h-[380px] md:min-h-[440px] flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src="/privacy-hero.jpg"
            alt="Data security and privacy protection"
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
            Data &amp; Privacy
          </p>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-3 text-balance max-w-2xl leading-tight">
            Privacy <span className="text-gold">Policy</span>
          </h1>
          <p className="text-white/75 text-sm leading-relaxed max-w-xl mb-3">
            Your data is handled with strict care and full UK GDPR compliance. We collect only what is necessary, protect it rigorously, and never sell it.
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
              At <strong className="text-charcoal">realukcasinosites.com</strong>, your privacy is protected. This Privacy Policy explains how we collect, use, store, and safeguard your personal information in full compliance with <strong className="text-charcoal">UK GDPR</strong> and the <strong className="text-charcoal">Data Protection Act 2018</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ── YOUR RIGHTS HIGHLIGHT ── */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-[9px] font-sans font-bold tracking-[0.4em] uppercase text-gold mb-3">UK GDPR</p>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-charcoal mb-3">Your Data Rights</h2>
            <div className="h-[3px] w-8 bg-crimson rounded-full mb-7" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {rights.map((r, i) => (
                <div key={i} className="bg-white rounded-xl border border-steel p-4 flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-crimson/8 flex items-center justify-center shrink-0">
                    {r.icon}
                  </div>
                  <div>
                    <p className="font-sans font-bold text-xs text-charcoal mb-0.5">{r.title}</p>
                    <p className="text-xs text-charcoal/55 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
              <div className="bg-white rounded-xl border border-steel p-4 flex gap-3 sm:col-span-2 lg:col-span-1">
                <div className="w-8 h-8 rounded-lg bg-crimson/8 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-crimson" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-sans font-bold text-xs text-charcoal mb-0.5">Right to Withdraw Consent</p>
                  <p className="text-xs text-charcoal/55 leading-relaxed">Withdraw previously given consent at any time without detriment.</p>
                </div>
              </div>
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
              <h3 className="font-display font-bold text-xl text-charcoal mb-3">Privacy Enquiries</h3>
              <p className="text-sm text-charcoal/60 leading-relaxed mb-4">
                To exercise any of your data rights or raise a privacy concern, contact our privacy team. We aim to respond within 30 days as required under UK GDPR.
              </p>
              <Link
                href="mailto:privacy@realukcasinosites.com"
                className="inline-flex items-center gap-2 bg-crimson text-white text-xs font-sans font-bold tracking-[0.18em] uppercase px-5 py-3 rounded-full hover:bg-crimson/85 transition-colors duration-200"
              >
                privacy@realukcasinosites.com
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
