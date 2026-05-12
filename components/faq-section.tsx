"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      id: "faq-1",
      question: "How does RealUKCasinoSites select and rank casinos?",
      answer:
        "Our independent editorial team evaluates every casino on 12 criteria: UKGC licence validity, financial security, welcome bonus value, wagering requirements, game library depth, certified software providers, mobile performance, deposit and withdrawal speed, customer support response time, responsible gambling tools, interface quality, and player feedback. No casino pays to appear in our rankings — position is earned solely on merit.",
    },
    {
      id: "faq-2",
      question: "Are all listed casino sites legal and safe in the UK?",
      answer:
        "Yes — without exception. Every casino featured on realukcasinosites.com holds a current UK Gambling Commission licence. UKGC-licensed operators must segregate player funds, submit to regular compliance audits, enforce strict age verification, and provide mandatory responsible gambling tools. Your money and personal data are protected by law.",
    },
    {
      id: "faq-3",
      question: "What types of welcome bonuses do UK casinos offer?",
      answer:
        "UK casinos offer matched deposit bonuses (e.g. 100% up to £200), free spins on designated slots, no-deposit bonuses, and cashback deals. Every offer carries wagering requirements — the number of times you must play through the bonus before withdrawing. We display these requirements clearly. A smaller bonus with fair terms consistently outperforms a large bonus with punishing restrictions.",
    },
    {
      id: "faq-4",
      question: "How do I claim a casino welcome bonus through this site?",
      answer:
        "Step 1: Click the Claim Bonus button beside your chosen casino. Step 2: Register a new account with accurate personal details. Step 3: Make a qualifying deposit using an eligible payment method. Step 4: Opt in or enter a promotional code if required — some bonuses activate automatically. Always read the specific terms before depositing. Bonus offers are subject to change without notice.",
    },
    {
      id: "faq-5",
      question: "What payment methods do UK real casino sites accept?",
      answer:
        "Top UK casinos accept Visa and Mastercard debit cards, PayPal, Skrill, Neteller, bank transfers, Paysafecard, Apple Pay, and Google Pay. Credit cards are banned for gambling transactions in the UK under UKGC regulations. E-wallet withdrawals are typically the fastest, often completed within hours. Debit card withdrawals usually take 1–3 business days.",
    },
    {
      id: "faq-6",
      question: "Can I play at these casinos on my mobile?",
      answer:
        "Yes. All casinos we recommend offer full mobile experiences via dedicated iOS and Android apps or responsive mobile browsers. Our team tests each casino specifically on mobile — evaluating game selection, live dealer availability, account management, and withdrawal processing on smartphones. We will not recommend a casino that delivers a degraded mobile experience.",
    },
    {
      id: "faq-7",
      question: "What is the UK Gambling Commission and why does it matter?",
      answer:
        "The UK Gambling Commission (UKGC) is the government body that licences and regulates all gambling operators serving UK players. It enforces strict rules on fair play, anti-money laundering, player fund protection, and responsible gambling. Every UKGC-licensed casino undergoes regular compliance audits and must meet minimum technical standards. A valid UKGC licence is the single most important indicator of a legitimate and safe UK casino.",
    },
    {
      id: "faq-8",
      question: "How do I gamble responsibly and where can I get help?",
      answer:
        "Set strict deposit limits before you play. Never chase losses. Treat gambling as entertainment, not income. Use the responsible gambling tools available at every UKGC-licensed casino — deposit limits, session time alerts, cool-off periods, and self-exclusion. If you need help: BeGambleAware.org (0808 8020 133), GamCare.org.uk, or GamStop.co.uk to self-exclude from all UK licensed gambling sites simultaneously. When the fun stops — stop.",
    },
  ]

  return (
    <section className="py-12 md:py-20 bg-secondary border-t border-steel">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[10px] font-sans font-bold tracking-[0.35em] uppercase text-gold mb-3">
            FAQ
          </p>
          <h2 className="font-display font-bold text-2xl md:text-4xl text-charcoal mb-3 text-balance">
            Frequently Asked Questions
          </h2>
          <div className="h-[3px] w-14 bg-crimson rounded-full mx-auto my-4" />
          <p className="text-sm text-charcoal/55 max-w-xl mx-auto leading-relaxed">
            Honest answers about UK casino sites, bonuses, and player protection.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-white border border-steel rounded-xl px-5 overflow-hidden data-[state=open]:border-gold/40 data-[state=open]:shadow-sm transition-all duration-200"
              >
                <AccordionTrigger className="text-left font-sans font-semibold text-sm md:text-base text-charcoal py-4 hover:text-crimson transition-colors duration-200 gap-3 [&>svg]:text-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-charcoal/60 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
