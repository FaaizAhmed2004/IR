import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/Footer"
import { ShoppingBag, Truck, Shield, Phone, Utensils, Heart, Zap } from "lucide-react"

export default function homepage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Header />
      
      <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            The TDS Store
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl drop-shadow-lg">
            Discover premium products and exceptional services at The TDS Store. Quality items and professional solutions in Decatur, Georgia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products">
              <Button
                className="bg-white text-blue-700 hover:bg-blue-50 transition-colors duration-300 px-8 py-6 text-lg font-semibold"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Now
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-700 transition-colors duration-300 px-8 py-6 text-lg bg-transparent"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Featured Products</h2>
          <p className="text-lg text-gray-600">
            Discover our premium collection of quality products designed for modern living and professional needs.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200">
                <Image
                  src="/kitchen_essentials.jpeg"
                  alt="Kitchen Essentials Collection"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  FEATURED
                </div>
              </div>
              <div className="p-6 bg-white border border-gray-200">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Kitchen Essentials</h3>
                <p className="text-gray-600 mb-4">Premium kitchen tools and essentials for modern cooking and food preparation.</p>
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
              <div className="relative h-48 bg-gradient-to-br from-purple-100 to-purple-200">
                <Image
                  src="/skincare.jpeg"
                  alt="Skincare Collection"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  NEW
                </div>
              </div>
              <div className="p-6 bg-white border border-gray-200">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Skincare Collection</h3>
                <p className="text-gray-600 mb-4">Premium skincare products for healthy and radiant skin care routines.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">$49.99</span>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Add to Cart
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
                  alt="Tech Accessories"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  POPULAR
                </div>
              </div>
              <div className="p-6 bg-white border border-gray-200">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Tech Accessories</h3>
                <p className="text-gray-600 mb-4">Essential tech accessories including power banks, cables, and mobile accessories.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">$19.99</span>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Product Categories</h2>
          <p className="text-lg text-gray-600">
            Browse our organized product categories to find exactly what you need for your lifestyle and professional requirements.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <CardContent className="p-6 text-center bg-gray-50 border border-gray-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Kitchen & Dining</h3>
              <p className="text-gray-600 text-sm mb-4">Premium kitchen tools and dining essentials</p>
              <Link href="/categories">
                <Button variant="outline" size="sm" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">Browse Products</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <CardContent className="p-6 text-center bg-gray-50 border border-gray-200">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Health & Beauty</h3>
              <p className="text-gray-600 text-sm mb-4">Premium skincare and wellness products</p>
              <Link href="/categories">
                <Button variant="outline" size="sm" className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">Browse Products</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <CardContent className="p-6 text-center bg-gray-50 border border-gray-200">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Electronics</h3>
              <p className="text-gray-600 text-sm mb-4">Latest tech gadgets and electronic accessories</p>
              <Link href="/categories">
                <Button variant="outline" size="sm" className="w-full border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white">Browse Products</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <CardContent className="p-6 text-center bg-gray-50 border border-gray-200">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Lifestyle</h3>
              <p className="text-gray-600 text-sm mb-4">Premium lifestyle products for modern living</p>
              <Link href="/categories">
                <Button variant="outline" size="sm" className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white">Browse Products</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Our Store Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
              Welcome to The TDS Store
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              The TDS Store offers premium products and exceptional services with a focus on quality 
              and customer satisfaction. Based in Decatur, Georgia, we serve customers with reliable products and solutions.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our products are carefully selected to meet the highest standards of quality and value. 
              We provide comprehensive shopping solutions for individuals and businesses alike.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Fast Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">24/7 Support</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg border border-gray-200">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Shop?</h3>
              <p className="text-gray-600 mb-6">
                Explore our premium collection of products and find exactly what you need.
              </p>
              <Link href="/products">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Contact Information</h2>
          <p className="text-lg text-gray-600">
            Get in touch with The TDS Store for product inquiries and customer support.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">The TDS Store</h3>
            <h4 className="text-xl font-medium text-gray-700">Premium Products & Services</h4>
            <p className="text-lg text-gray-600">Decatur, GA 30033</p>
            <div className="space-y-2 text-gray-600 mt-6">
              <h5 className="text-lg font-semibold text-gray-900">Store Information</h5>
              <p className="font-medium">FARHAN SULTAN - Store Manager</p>
              <p>2550 BLACKMON DR</p>
              <p>DECATUR, GA 30033</p>
              <p className="mt-3">
                Email:{" "}
                <a href="mailto:support@thetdsstore.com" className="text-blue-600 hover:underline font-medium">
                  support@thetdsstore.com
                </a>
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