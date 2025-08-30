import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/contexts/CartContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The TDS Store - Premium Products & Services",
  description:
    "Discover premium products and exceptional services at The TDS Store. Quality items and professional solutions in Decatur, GA.",
  keywords:
    "TDS Store, premium products, quality services, shopping, retail, Decatur, Georgia, online store",
  authors: [{ name: "The TDS Store" }],
  creator: "The TDS Store",
  publisher: "The TDS Store",
  robots: "index, follow",
  openGraph: {
    title: "The TDS Store - Premium Products & Services",
    description: "Discover premium products and exceptional services at The TDS Store. Quality items and professional solutions.",
    type: "website",
    locale: "en_US",
    siteName: "The TDS Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "The TDS Store - Premium Products & Services",
    description: "Discover premium products and exceptional services at The TDS Store. Quality items and professional solutions.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth light">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
