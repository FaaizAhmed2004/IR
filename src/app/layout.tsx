import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Design Scratch LLC - Professional Digital Solutions",
  description:
    "Premium web development and e-commerce solutions. Licensed and insured business helping companies establish credibility and get approval for online operations.",
  keywords: "web development, e-commerce, business credibility, online store approval, professional website design",
  authors: [{ name: "The Design Scratch LLC" }],
  creator: "The Design Scratch LLC",
  publisher: "The Design Scratch LLC",
  robots: "index, follow",
  openGraph: {
    title: "The Design Scratch LLC - Professional Digital Solutions",
    description: "Premium web development and e-commerce solutions for modern businesses.",
    type: "website",
    locale: "en_US",
    siteName: "The Design Scratch LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Design Scratch LLC - Professional Digital Solutions",
    description: "Premium web development and e-commerce solutions for modern businesses.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
