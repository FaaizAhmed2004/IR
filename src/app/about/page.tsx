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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-gray-600 mb-4">
              At The TDS Store, we believe shopping should be more than just buying products – it should be about trust, quality, and great experiences. Since our launch, we have been proudly serving customers in the U.S. with carefully curated products designed to combine functionality, style, and durability.
            </p>
            <p className="text-gray-600 mb-4">
              Our journey began with a simple mission: to create a reliable online destination where customers can shop with confidence. Over the past year, we've grown into a trusted retailer by focusing on what matters most – quality products, excellent customer support, and timely delivery.
            </p>
            <p className="text-gray-600">
              We are committed to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Offering top-quality products that meet high standards</li>
              <li>Ensuring fast shipping and hassle-free returns</li>
              <li>Providing dedicated support for every customer</li>
            </ul>
            <p className="text-gray-600 mt-4">
              As we continue to expand, our goal remains the same: to be your trusted partner for premium products and exceptional service.
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

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}