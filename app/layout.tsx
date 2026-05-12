import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieConsentProvider } from "@/context/cookie-consent-context"
import { CookieBanner } from "@/components/cookie-banner"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Real UK Casino Sites | #1 Rated UK Casinos 2025 | realukcasinosites.com",
  description:
    "The UK's most trusted casino comparison platform. Independent expert reviews, verified bonuses, and UKGC-licensed casinos you can rely on. Updated daily.",
  keywords:
    "real UK casino sites, best UK casinos 2025, UKGC licensed casinos, UK casino bonuses, trusted online casinos UK, realukcasinosites",
  metadataBase: new URL("https://realukcasinosites.com"),
  openGraph: {
    title: "Real UK Casino Sites | Top Rated UK Casinos 2025",
    description: "Independent expert reviews of the UK's most trusted UKGC-licensed casinos.",
    url: "https://realukcasinosites.com",
    siteName: "RealUKCasinoSites",
    locale: "en_GB",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#fafafa",
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${playfair.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <CookieConsentProvider>
            {children}
            <CookieBanner />
          </CookieConsentProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
