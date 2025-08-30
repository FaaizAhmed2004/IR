import Link from "next/link"
import { Building2, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 md:px-8 lg:px-16 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Side - Business Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-semibold text-white">The TDS Store</span>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">© 2023–2025 | Premium Products & Services</p>
              <div className="flex items-start gap-2 mt-3">
                <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                <div>
                  <p>FARHAN SULTAN - Store Manager</p>
                  <p>2550 BLACKMON DR</p>
                  <p>DECATUR, GA 30033</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <a href="mailto:support@thetdsstore.com" className="hover:text-white">support@thetdsstore.com</a>
              </div>
            </div>
          </div>

          {/* Center - Trust Signals */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Why Choose Us</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-blue-400">✅</span>
                <span>Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400">🚚</span>
                <span>Fast Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">📞</span>
                <span>24/7 Customer Support</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">🔒</span>
                <span>Secure Shopping</span>
              </div>
            </div>
          </div>

          {/* Right Side - Legal Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Legal & Support</h3>
            <nav className="flex flex-col gap-2 text-sm">
              <Link className="text-gray-400 hover:text-white" href="/about">
                About Us
              </Link>
              <Link className="text-gray-400 hover:text-white" href="/contact">
                Contact
              </Link>
              <Link className="text-gray-400 hover:text-white" href="/privacy-policy">
                Privacy Policy
              </Link>
              <Link className="text-gray-400 hover:text-white" href="/return-policy">
                Return Policy
              </Link>
              <Link className="text-gray-400 hover:text-white" href="/shipping-policy">
                Shipping Policy
              </Link>
              <Link className="text-gray-400 hover:text-white" href="/terms-conditions">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            Premium products and exceptional services provided by The TDS Store. Quality shopping solutions for modern living.
          </p>
        </div>
      </div>
    </footer>
  )
}
