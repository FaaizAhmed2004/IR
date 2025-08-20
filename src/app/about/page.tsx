import Header from "@/components/header"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">About THETDSSTORE LLC</h1>

        <div className="space-y-8">
          <div className="bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-4">
              THETDSSTORE LLC is dedicated to providing official IRS Department of Treasury services with the highest standards of professional excellence and government compliance. Based in Decatur, Georgia, we serve individuals and businesses with comprehensive treasury and tax solutions.
            </p>
            <p className="text-gray-300">
              Our commitment to accuracy, compliance, and professional service has made us a trusted partner for clients seeking reliable treasury services. We combine government expertise with personalized attention to deliver exceptional results for every client.
            </p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Our Services</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏛️</span>
                <div>
                  <h3 className="font-semibold text-white">Official IRS Services</h3>
                  <p className="text-gray-300">Authorized IRS Department of Treasury services with full government compliance.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-2xl">📋</span>
                <div>
                  <h3 className="font-semibold text-white">Professional Tax Solutions</h3>
                  <p className="text-gray-300">Comprehensive tax preparation, filing, and compliance services for all business types.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <h3 className="font-semibold text-white">Secure & Compliant</h3>
                  <p className="text-gray-300">All services meet the highest standards of government security and regulatory compliance.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <p className="text-white"><strong>IRS Department of the Treasury:</strong></p>
                <p className="text-gray-300">Internal Revenue Service</p>
                <p className="text-gray-300">Cincinnati, OH 45999-0023</p>
              </div>
              
              <div>
                <p className="text-white"><strong>THETDSSTORE LLC:</strong></p>
                <p className="text-gray-300">FARHAN SULTAN MBR</p>
                <p className="text-gray-300">2550 BLACKMON DR</p>
                <p className="text-gray-300">DECATUR, GA 30033</p>
              </div>
              
              <div>
                <p className="text-white"><strong>Email:</strong> <span className="text-green-400">info@IRS.com</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}