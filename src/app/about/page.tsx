import Header from "@/components/header"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About KJACCO</h1>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2023, KJACCO was born in Ontario, Canada with one mission: to create apparel that connects emotionally, not just visually. As a family-owned business, we believe clothing should be personal — it should make you feel something.
            </p>
            <p className="text-gray-700">
              Over the past year, we've grown from a small Canadian brand to a trusted online store, delivering our signature designs across the U.S. and North America. Every design is built with purpose and personality — we don't just make clothes, we craft statements.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Makes Us Different</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎨</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Emotional Design</h3>
                  <p className="text-gray-700">We create more than graphics — we design moods.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-2xl">🇨🇦</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Canada-Based, U.S. Focused</h3>
                  <p className="text-gray-700">Designed and fulfilled from Canada, serving U.S. customers with fast, secure shipping.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧍</span>
                <div>
                  <h3 className="font-semibold text-gray-900">People-First Approach</h3>
                  <p className="text-gray-700">We keep our community at the center of every collection.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Information</h2>
            <div className="space-y-2">
              <p><strong>Business Address:</strong></p>
              <p>Khizar Javaid</p>
              <p>152 Brownridge Place</p>
              <p>Whitby, Ontario, Canada</p>
              <p>Postal Code: L1P 1W3</p>
              <p><strong>Phone:</strong> +1 (289) 991-0909</p>
              <p><strong>Email:</strong> support@kjacco.com (Launching soon)</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}