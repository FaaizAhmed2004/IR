import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/Footer"
import { ShoppingBag, Truck, Shield, Phone, Utensils, Heart, Zap } from "lucide-react"

export default function homepage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <Header />
      
      <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Express Yourself in Every Thread
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl drop-shadow-lg">
            Bold apparel that connects emotionally. Designed in Canada, shipped across the U.S. and North America.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products">
              <Button
                className="bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-300 px-8 py-6 text-lg font-semibold"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Now
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 transition-colors duration-300 px-8 py-6 text-lg bg-transparent"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Featured Products</h2>
          <p className="text-lg text-gray-600">
            Discover our top-selling products carefully selected for quality, value, and customer satisfaction.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="relative h-48 bg-gradient-to-br from-orange-100 to-orange-200">
                <Image
                  src="/kitchen_essentials.jpeg"
                  alt="Kitchen Essentials Collection"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                  FEATURED
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Kitchen Essentials</h3>
                <p className="text-gray-600 mb-4">Premium kitchen tools and accessories for home and professional use.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">$29.99</span>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="relative h-48 bg-gradient-to-br from-pink-100 to-pink-200">
                <Image
                  src="/skincare.jpeg"
                  alt="Premium Skincare Products"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                  SALE
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Skincare Collection</h3>
                <p className="text-gray-600 mb-4">Professional-grade skincare products for daily wellness routines.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">$24.99</span>
                    <span className="text-sm text-gray-500 line-through">$34.99</span>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200">
                <Image
                  src="/powerbank.jpg"
                  alt="Portable Power Solutions"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">
                  NEW
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Power Solutions</h3>
                <p className="text-gray-600 mb-4">Reliable portable power banks and charging accessories for business.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">$39.99</span>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Add to Cart
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Shop by Category</h2>
          <p className="text-lg text-gray-600">
            Browse our organized product categories to find exactly what you need for your personal and business requirements.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Kitchen & Home</h3>
              <p className="text-gray-600 text-sm mb-4">Essential tools and accessories for modern living</p>
              <Link href="/categories">
                <Button variant="outline" size="sm" className="w-full">Browse Category</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Health & Beauty</h3>
              <p className="text-gray-600 text-sm mb-4">Premium wellness and personal care products</p>
              <Link href="/categories">
                <Button variant="outline" size="sm" className="w-full">Browse Category</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Electronics</h3>
              <p className="text-gray-600 text-sm mb-4">Tech accessories and power solutions</p>
              <Link href="/categories">
                <Button variant="outline" size="sm" className="w-full">Browse Category</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Business Essentials</h3>
              <p className="text-gray-600 text-sm mb-4">Professional products for business operations</p>
              <Link href="/categories">
                <Button variant="outline" size="sm" className="w-full">Browse Category</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Our Business Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
              Professional Business Solutions
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              KJACCO creates apparel that connects emotionally, not just visually. As a family-owned business born in Ontario, 
              we believe clothing should be personal — it should make you feel something.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We've grown from a small Canadian brand to a trusted online store, delivering our signature designs across 
              the U.S. and North America. Every design is built with purpose and personality.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Fast Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium">Professional Support</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-6">
                Explore our product catalog and discover quality solutions for your needs.
              </p>
              <Link href="/products">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Browse Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Get in Touch</h2>
          <p className="text-lg text-gray-600">
            Contact KJACCO for product inquiries and support.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">KJACCO</h3>
            <div className="space-y-2 text-gray-700">
              <p className="font-medium">Khizar Javaid</p>
              <p>152 Brownridge Place</p>
              <p>Whitby, Ontario L1P 1W3</p>
              <p>
                Phone:{" "}
                <a href="tel:+12899910909" className="text-blue-600 hover:underline font-medium">
                  +1 (289) 991-0909
                </a>
              </p>
              <p className="text-sm text-gray-500 mt-4">
                support@kjacco.com
              </p>
            </div>
            <Link href="/contact">
              <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white">
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