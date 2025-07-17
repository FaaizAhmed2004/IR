import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/contexts/CartContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KJ Accounting & Tax Services LLC - Professional Business Solutions",
  description:
    "Professional business solutions and quality products from KJ Accounting & Tax Services LLC. Serving Oshawa, Whitby, and Ontario with reliable products and exceptional service.",
  keywords:
    "business products, professional solutions, quality goods, business services, Oshawa, Whitby, Ontario, KJ Accounting Tax Services LLC",
  authors: [{ name: "KJ Accounting & Tax Services LLC" }],
  creator: "KJ Accounting & Tax Services LLC",
  publisher: "KJ Accounting & Tax Services LLC",
  robots: "index, follow",
  openGraph: {
    title: "KJ - Quality Products & Professional Solutions",
    description: "Professional business solutions and quality products. Serving Oshawa, Whitby, and Ontario.",
    type: "website",
    locale: "en_US",
    siteName: "KJ",
  },
  twitter: {
    card: "summary_large_image",
    title: "KJ - Quality Products & Professional Solutions",
    description: "Professional business solutions and quality products. Serving Oshawa, Whitby, and Ontario.",
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
