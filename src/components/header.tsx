"use client"

import Link from "next/link"
import { Building2, ShoppingCart, Search } from "lucide-react"
import { useCart } from "@/contexts/CartContext"

export default function Header() {
  const { state } = useCart()

  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-8 lg:px-16 border-b border-gray-700 bg-gray-900">
      <Link className="flex items-center gap-2" href="/">
        <Building2 className="h-6 w-6 text-green-400" />
        <span className="text-lg font-semibold text-white">THETDSSTORE LLC</span>
      </Link>
      <nav className="hidden md:flex gap-6">
        <Link className="text-gray-300 hover:text-green-400" href="/">
          Home
        </Link>
        <Link className="text-gray-300 hover:text-green-400" href="/products">
          Services
        </Link>
        <Link className="text-gray-300 hover:text-green-400" href="/categories">
          Categories
        </Link>
        <Link className="text-gray-300 hover:text-green-400" href="/about">
          About
        </Link>
        <Link className="text-gray-300 hover:text-green-400" href="/contact">
          Contact
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Search className="h-5 w-5 text-gray-300 cursor-pointer hover:text-green-400" />
        <Link href="/cart" className="relative">
          <ShoppingCart className="h-5 w-5 text-gray-300 cursor-pointer hover:text-green-400" />
          {state.itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {state.itemCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  )
}
