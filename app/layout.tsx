import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MORARIHUB - Improve your health, wealth and a bit of stealth",
  description:
    "Career guidance, business automation, fitness transformation, and curated products all in one platform.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Redirect to landing page on first visit
  // In a real app, you'd check if this is the user's first visit
  const isFirstVisit = false // This would be determined by cookies/localStorage

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
