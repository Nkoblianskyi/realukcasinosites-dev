export interface BettingSite {
  id: string
  name: string
  logo: string
  score: number
  bonus: string
  welcomeOffer: string
  terms: string
  features: string[]
  paymentMethods: string[]
  link: string
  reviews: number
}

const defaultTerms =
  "18+ | New customers only | T&Cs apply | BeGambleAware.org | Wagering requirements apply | Please gamble responsibly"

const rawSites: Omit<BettingSite, "score">[] = [
  {
    id: "midnite",
    name: "Midnite Casino",
    logo: "/midnite.webp",
    bonus: "100 Free Spins",
    welcomeOffer: "Wager £20 and Get 100 Free Spins",
    terms: defaultTerms,
    features: ["Instant Withdrawals", "Exclusive Game Library", "Provably Fair"],
    paymentMethods: ["Visa", "Mastercard", "Skrill", "Neteller"],
    link: "https://www.midnite.com/",
    reviews: 7284,
  },
  {
    id: "betfred",
    name: "Betfred Casino",
    logo: "/betfred.webp",
    bonus: "200 Free Spins",
    welcomeOffer: "Stake £10 and Get 200 Free Spins",
    terms: defaultTerms,
    features: ["Same-Day Payouts", "Live Casino Tables", "500+ Slots"],
    paymentMethods: ["Visa", "Mastercard", "PayPal", "Bank Transfer"],
    link: "https://www.betfred.com/",
    reviews: 7062,
  },
  {
    id: "betvictor",
    name: "BetVictor Casino",
    logo: "/betvictor.webp",
    bonus: "£20 Bonus + 50 Free Spins",
    welcomeOffer: "Deposit £10 and Get £20 Casino Bonus + 50 Free Spins",
    terms: defaultTerms,
    features: ["Premium Slots", "Live Roulette & Blackjack", "VIP Loyalty Tier"],
    paymentMethods: ["Visa", "Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.betvictor.com/",
    reviews: 8157,
  },
  {
    id: "boylesports",
    name: "BoyleSports Casino",
    logo: "/boylesports.webp",
    bonus: "£50 Casino Bonus",
    welcomeOffer: "Bet £10 and Get £50 Casino Bonus",
    terms: defaultTerms,
    features: ["UKGC Licensed", "Live Dealer Tables", "1,000+ Slot Titles"],
    paymentMethods: ["Visa", "Mastercard", "PayPal", "Bank Transfer"],
    link: "https://boylesports.com",
    reviews: 8051,
  },
  {
    id: "ladbrokes",
    name: "Ladbrokes Casino",
    logo: "/ladbrokes.webp",
    bonus: "100 Free Spins",
    welcomeOffer: "Play £10 on Slots and Get 100 Free Spins",
    terms: defaultTerms,
    features: ["Live Casino", "Mega Jackpot Slots", "Exclusive VIP Programme"],
    paymentMethods: ["Visa", "Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.ladbrokes.com/",
    reviews: 8472,
  },
]

export const bettingSites: BettingSite[] = rawSites.map((site, index) => ({
  ...site,
  score: Math.round((9.8 - index * 0.1) * 10) / 10,
}))
