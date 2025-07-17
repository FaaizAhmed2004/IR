import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KJ Accounting & Tax Professional Corporation",
  description:
    "Accounting & Tax Professional Corporation",
  keywords:
    "daily use products, home essentials, personal care, kitchen products, lifestyle items, Atlanta Georgia, The Design Scratch LLC",
  authors: [{ name: "KJ Accounting & Tax Professional Corporation" }],
  creator: "The Design Scratch LLC",
  publisher: "The Design Scratch LLC",
  robots: "index, follow",
  openGraph: {
    title: "The Design Scratch LLC - Premium Daily Use Products",
    description: "High-quality daily essentials for modern living. Based in Atlanta, Georgia.",
    type: "website",
    locale: "en_US",
    siteName: "The Design Scratch LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Design Scratch LLC - Premium Daily Use Products",
    description: "High-quality daily essentials for modern living. Based in Atlanta, Georgia.",
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
