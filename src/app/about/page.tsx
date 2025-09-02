import Header from "@/components/header"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About The TDS Store</h1>

        <div className="space-y-8">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              The TDS Store is dedicated to providing premium products and exceptional services with the highest standards of quality and customer satisfaction. Based in Decatur, Georgia, we serve customers with a carefully curated selection of products for modern living.
            </p>
            <p className="text-gray-600">
              Our commitment to quality, value, and customer service has made us a trusted destination for shoppers seeking reliable products and professional service. We combine product expertise with personalized attention to deliver exceptional shopping experiences for every customer.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🛍️</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Premium Products</h3>
                  <p className="text-gray-600">Carefully curated selection of quality products for kitchen, beauty, tech, and lifestyle needs.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚚</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Fast Shipping</h3>
                  <p className="text-gray-600">Quick and reliable shipping to get your products to you as soon as possible.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Secure Shopping</h3>
                  <p className="text-gray-600">Safe and secure online shopping experience with trusted payment processing.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-900"><strong>The TDS Store:</strong></p>
                <p className="text-gray-600">Premium Products & Services</p>
                <p className="text-gray-600">Decatur, GA 30033</p>
              </div>
              
              <div>
                <p className="text-gray-900"><strong>Store Manager:</strong></p>
                <p className="text-gray-600">FARHAN SULTAN</p>
                <p className="text-gray-600">2550 BLACKMON DR</p>
                <p className="text-gray-600">DECATUR, GA 30033</p>
              </div>
              
              <div>
                <p className="text-gray-900"><strong>Phone:</strong> <span className="text-blue-600">+1 (404) 259-0953</span></p>
                <p className="text-gray-900"><strong>Email:</strong> <span className="text-blue-600">support@thetdsstore.com</span></p>
              </div>
              <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2023, The tds Store  was born in BLACKMON DR, Canada with one mission: to create apparel that connects emotionally, not just visually. As a family-owned business, we believe clothing should be personal — it should make you feel something.
            </p>
            <p className="text-gray-700">
              Over the past year, we've grown from a small Canadian brand to a trusted online store, delivering our signature designs across the U.S. and North America. Every design is built with purpose and personality — we don't just make clothes, we craft statements.
            </p>
          </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}