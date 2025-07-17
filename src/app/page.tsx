import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Star, Award, Zap, Shield, Globe, Package, Users, Clock } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">KJ</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Accounting & Tax Professional Corporation</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors">
                Products
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Premium Daily Essentials</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Quality Products for
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Everyday Living
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The Design Scratch LLC brings you carefully curated daily use products that combine functionality,
              quality, and style. From home essentials to personal care items, we make everyday living better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Browse Products <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Products Sold</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">About Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Partner for Daily Essentials
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The Design Scratch LLC is a registered Limited Liability Company based in Atlanta, Georgia, specializing
                in high-quality daily use products. We are committed to providing reliable, functional, and stylish
                solutions for everyday needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Registered LLC in Georgia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Quality Assured Products</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Fast & Reliable Shipping</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Customer-First Approach</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about-us.jpg"
                  alt="The Design Scratch LLC - About Us"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 p-8 flex flex-col justify-center text-white">
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-blue-100 mb-6">
                    To enhance everyday living by providing premium quality daily use products that combine
                    functionality, durability, and aesthetic appeal at affordable prices.
                  </p>
                  <div className="flex items-center space-x-4">
                    <Award className="h-8 w-8 text-yellow-300" />
                    <div>
                      <div className="font-semibold">Quality Guarantee</div>
                      <div className="text-sm text-blue-100">30-Day Return Policy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Our Products</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Daily Essentials Collection</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our carefully curated selection of daily use products designed to make your life easier and more
              comfortable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Home & Kitchen</CardTitle>
                <CardDescription>
                  Essential kitchen tools, storage solutions, and home organization products for daily convenience.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Kitchen utensils & gadgets</li>
                  <li>• Storage containers</li>
                  <li>• Cleaning supplies</li>
                  <li>• Organization tools</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Personal Care</CardTitle>
                <CardDescription>
                  Quality personal care items and wellness products for your daily self-care routine.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Skincare essentials</li>
                  <li>• Hair care products</li>
                  <li>• Wellness accessories</li>
                  <li>• Travel-size items</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Lifestyle & Convenience</CardTitle>
                <CardDescription>
                  Modern lifestyle products that save time and add convenience to your daily activities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Tech accessories</li>
                  <li>• Travel essentials</li>
                  <li>• Fitness accessories</li>
                  <li>• Office supplies</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive services to ensure you have the best shopping experience with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Fast Shipping</CardTitle>
                <CardDescription>
                  Quick and reliable delivery across the United States with tracking information provided.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 2-3 day shipping available</li>
                  <li>• Real-time tracking</li>
                  <li>• Secure packaging</li>
                  <li>• Free shipping over $50</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Quality Guarantee</CardTitle>
                <CardDescription>
                  All products come with our quality guarantee and hassle-free return policy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 30-day return policy</li>
                  <li>• Quality inspection</li>
                  <li>• Warranty coverage</li>
                  <li>• Customer satisfaction</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Customer Support</CardTitle>
                <CardDescription>
                  Dedicated customer service team ready to help with any questions or concerns.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 24/7 email support</li>
                  <li>• Live chat assistance</li>
                  <li>• Phone support</li>
                  <li>• FAQ resources</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">Featured Products</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Best Sellers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Check out our most popular daily use products loved by customers nationwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Premium Kitchen Set",
                price: "$49.99",
                category: "Kitchen",
                image: "/images/products/kitchen-set.jpeg",
              },
              {
                name: "Skincare Essentials Kit",
                price: "$34.99",
                category: "Personal Care",
                image: "/images/products/skincare-kit.jpeg",
              },
              {
                name: "Home Organization Bundle",
                price: "$29.99",
                category: "Home",
                image: "/images/products/home-organization.jpeg",
              },
              {
                name: "Travel Convenience Pack",
                price: "$24.99",
                category: "Travel",
                image: "/images/products/travel-pack.jpeg",
              },
            ].map((product, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={250}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button variant="secondary" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{product.category}</Badge>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-100">Our Gallery</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Product Showcase</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a closer look at our premium daily use products in action. Quality you can see and trust.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "Premium Kitchen Utensils", category: "Kitchen", image: "/images/gallery/kitchen-unteils.jpeg" },
              {
                name: "Skincare Collection",
                category: "Personal Care",
                image: "/images/gallery/skincare-collection.jpeg",
              },
              { name: "Cleaning Supplies", category: "Home", image: "/images/gallery/cleaning-supplies.jpeg"},
              { name: "Wellness Products", category: "Personal Care", image: "/images/gallery/wellness-products.jpeg"},
              { name: "Tech Accessories", category: "Lifestyle", image: "/images/gallery/tech-accessories.jpeg" },
              { name: "Storage Solutions", category: "Home", image: "/images/gallery/storage-solution.jpeg" },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-sm mb-1">{item.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Customer Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "Atlanta, GA",
                content:
                  "Amazing quality products! The kitchen set I ordered has made cooking so much easier. Fast shipping and excellent customer service.",
              },
              {
                name: "Michael Chen",
                location: "Decatur, GA",
                content:
                  "Love the personal care kit! Everything arrived perfectly packaged and the quality exceeded my expectations. Will definitely order again.",
              },
              {
                name: "Emily Rodriguez",
                location: "Georgia",
                content:
                  "The Design Scratch LLC has become my go-to for daily essentials. Reliable products, fair prices, and great customer support.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.content}</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-16 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Have questions about our products or need assistance? We are here to help you find the perfect daily
              essentials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" variant="secondary">
                Contact Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Browse Catalog
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">Email</div>
                <div className="text-blue-100">furqan1431@gmail.com</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Business Hours</div>
                <div className="text-blue-100">
                  Mon-Fri: 9AM-6PM EST
                  <br />
                  Sat-Sun: 10AM-4PM EST
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Address</div>
                <div className="text-blue-100">
               152 Brownridge Place Whitby Ontario L1P1W3
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">KJ</span>
                </div>
                <span className="text-xl font-bold">Accounting & Tax Professional Corporation</span>
              </div>
              <p className="text-gray-400 mb-4">Premium daily use products for modern living.</p>
              <div className="text-sm text-gray-400">
                <p>152 Brownridge Place Whitby Ontario L1P1W3</p>
                <p className="mt-2">+12899910909</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Home & Kitchen</li>
                <li>Personal Care</li>
                <li>Lifestyle Products</li>
                <li>New Arrivals</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Story</li>
                <li>Customer Reviews</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Shipping Info</li>
                <li>Returns & Exchanges</li>
                <li>Size Guide</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024  KJ Accounting & Tax Professional Corporation</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
