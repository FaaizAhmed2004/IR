import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/Footer"
import { ShoppingBag, Truck, Shield, Phone, Utensils, Heart, Zap } from "lucide-react"

export default function homepage() {
  return (
    <div className="min-h-screen bg-green-50 text-gray-800 flex flex-col">
      <Header />
      
      <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden bg-gradient-to-r from-green-700 to-green-900">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            IRS Department of Treasury
          </h1>
          <p className="text-lg md:text-xl text-green-100 mb-8 max-w-2xl drop-shadow-lg">
            Official treasury services and tax solutions provided by THETDSSTORE LLC. Professional government services in Decatur, Georgia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products">
              <Button
                className="bg-white text-green-700 hover:bg-green-50 transition-colors duration-300 px-8 py-6 text-lg font-semibold"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                View Services
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-700 transition-colors duration-300 px-8 py-6 text-lg bg-transparent"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Featured Services</h2>
          <p className="text-lg text-gray-600">
            Discover our comprehensive treasury and tax services designed for professional government compliance.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="relative h-48 bg-gradient-to-br from-green-100 to-green-200">
                <Image
                  src="/kitchen_essentials.jpeg"
                  alt="Treasury Services Collection"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  FEATURED
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Treasury Services</h3>
                <p className="text-gray-600 mb-4">Professional treasury and tax compliance services for individuals and businesses.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">Contact</span>
                  <Button className="bg-green-700 hover:bg-green-800 text-white">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Learn More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="relative h-48 bg-gradient-to-br from-green-100 to-green-200">
                <Image
                  src="/skincare.jpeg"
                  alt="Tax Compliance Services"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  AVAILABLE
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Tax Compliance</h3>
                <p className="text-gray-600 mb-4">Comprehensive tax compliance and filing services for all business types.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">Available</span>
                  </div>
                  <Button className="bg-green-700 hover:bg-green-800 text-white">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Learn More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="relative h-48 bg-gradient-to-br from-green-100 to-green-200">
                <Image
                  src="/powerbank.jpg"
                  alt="Government Solutions"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  CERTIFIED
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Government Solutions</h3>
                <p className="text-gray-600 mb-4">Official government compliance and regulatory services for businesses.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">Contact</span>
                  <Button className="bg-green-700 hover:bg-green-800 text-white">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Learn More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Service Categories</h2>
          <p className="text-lg text-gray-600">
            Browse our organized service categories to find exactly what you need for your treasury and tax requirements.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Tax Filing</h3>
              <p className="text-gray-600 text-sm mb-4">Professional tax filing and preparation services</p>
              <Link href="/categories">
                <Button variant="outline" size="sm" className="w-full border-green-700 text-green-700 hover:bg-green-700 hover:text-white">Browse Services</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Treasury Services</h3>
              <p className="text-gray-600 text-sm mb-4">Comprehensive treasury and financial compliance services</p>
              <Link href="/categories">
                <Button variant="outline" size="sm" className="w-full border-green-700 text-green-700 hover:bg-green-700 hover:text-white">Browse Services</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Compliance</h3>
              <p className="text-gray-600 text-sm mb-4">Government compliance and regulatory assistance</p>
              <Link href="/categories">
                <Button variant="outline" size="sm" className="w-full border-green-700 text-green-700 hover:bg-green-700 hover:text-white">Browse Services</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Business Services</h3>
              <p className="text-gray-600 text-sm mb-4">Professional business tax and treasury operations</p>
              <Link href="/categories">
                <Button variant="outline" size="sm" className="w-full border-green-700 text-green-700 hover:bg-green-700 hover:text-white">Browse Services</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Our Services Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
              IRS Department of Treasury Services
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              THETDSSTORE LLC provides official IRS Department of Treasury services with professional expertise 
              and government compliance. Based in Decatur, Georgia, we serve clients with reliable treasury solutions.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our services are designed to meet the highest standards of government compliance and professional 
              excellence. We provide comprehensive treasury and tax services for individuals and businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-green-700" />
                <span className="text-sm font-medium">Fast Processing</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Government Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-green-800" />
                <span className="text-sm font-medium">Professional Support</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
            <div className="text-center">
              <div className="w-24 h-24 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Treasury Services?</h3>
              <p className="text-gray-600 mb-6">
                Contact us for professional IRS Department of Treasury services and solutions.
              </p>
              <Link href="/products">
                <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-green-100">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Contact Information</h2>
          <p className="text-lg text-gray-600">
            Contact THETDSSTORE LLC for IRS Department of Treasury services and support.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">IRS DEPARTMENT OF THE TREASURY</h3>
            <h4 className="text-xl font-medium text-gray-800">INTERNAL REVENUE SERVICE</h4>
            <p className="text-lg text-gray-700">CINCINNATI OH 45999-0023</p>
            <div className="space-y-2 text-gray-700 mt-6">
              <h5 className="text-lg font-semibold">THETDSSTORE LLC</h5>
              <p className="font-medium">FARHAN SULTAN MBR</p>
              <p>2550 BLACKMON DR</p>
              <p>DECATUR, GA 30033</p>
              <p className="mt-3">
                Email:{" "}
                <a href="mailto:info@IRS.com" className="text-green-700 hover:underline font-medium">
                  info@IRS.com
                </a>
              </p>
            </div>
            <Link href="/contact">
              <Button className="mt-6 bg-green-700 hover:bg-green-800 text-white">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  )
}