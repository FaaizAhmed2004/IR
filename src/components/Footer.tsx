import Link from "next/link"
import { Building2, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Business Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-semibold">KJ Accounting & Tax Services LLC</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span>152 Brownridge Place, Whitby, Ontario L1P1W3</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <a href="tel:+12899910909" className="hover:text-white">+1 (289) 991-0909</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span>Serving Oshawa, Whitby, and Ontario</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2 text-sm">
              <Link className="text-gray-400 hover:text-white" href="/products">
                Products
              </Link>
              <Link className="text-gray-400 hover:text-white" href="/categories">
                Categories
              </Link>
              <Link className="text-gray-400 hover:text-white" href="/about">
                About Us
              </Link>
              <Link className="text-gray-400 hover:text-white" href="/contact">
                Contact
              </Link>
            </nav>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <nav className="flex flex-col gap-2 text-sm">
              <Link className="text-gray-400 hover:text-white" href="/privacy-policy">
                Privacy Policy
              </Link>
              <Link className="text-gray-400 hover:text-white" href="/terms-conditions">
                Terms & Conditions
              </Link>
              <Link className="text-gray-400 hover:text-white" href="/shipping-policy">
                Shipping Policy
              </Link>
              <Link className="text-gray-400 hover:text-white" href="/return-policy">
                Return Policy
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© 2025 KJ Accounting & Tax Services LLC. All rights reserved.</p>
          <div className="text-xs text-gray-500">
            <span>Business Registration: [Registration Number] | Tax ID: [Tax ID Number]</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
