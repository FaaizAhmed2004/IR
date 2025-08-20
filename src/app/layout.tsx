import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/contexts/CartContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "THETDSSTORE LLC - IRS Department of Treasury Services",
  description:
    "Official IRS Department of Treasury services and solutions provided by THETDSSTORE LLC. Professional tax and treasury services in Decatur, GA.",
  keywords:
    "IRS, Department of Treasury, tax services, treasury solutions, government services, Decatur, Georgia, THETDSSTORE LLC",
  authors: [{ name: "THETDSSTORE LLC" }],
  creator: "THETDSSTORE LLC",
  publisher: "THETDSSTORE LLC",
  robots: "index, follow",
  openGraph: {
    title: "THETDSSTORE LLC - IRS Treasury Services",
    description: "Official IRS Department of Treasury services and solutions. Professional tax and treasury services.",
    type: "website",
    locale: "en_US",
    siteName: "THETDSSTORE LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "THETDSSTORE LLC - IRS Treasury Services",
    description: "Official IRS Department of Treasury services and solutions. Professional tax and treasury services.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
