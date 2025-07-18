import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/Footer"
import { Utensils, Heart, Zap, ShoppingBag, ArrowRight } from "lucide-react"

const categories = [
  {
    id: "kitchen",
    name: "Kitchen & Home",
    description: "Essential tools and accessories for modern living and home organization",
    icon: Utensils,
    color: "orange",
    productCount: 24,
    image: "/kitchen_essentials.jpeg",
    featured: ["Kitchen Essentials Set", "Home Organization Kit", "Storage Solutions"]
  },
  {
    id: "beauty",
    name: "Health & Beauty",
    description: "Premium wellness and personal care products for daily routines",
    icon: Heart,
    color: "pink",
    productCount: 18,
    image: "/skincare.jpeg",
    featured: ["Premium Skincare Collection", "Wellness Essentials Bundle", "Personal Care Kit"]
  },
  {
    id: "electronics",
    name: "Electronics",
    description: "Tech accessories and power solutions for business and personal use",
    icon: Zap,
    color: "blue",
    productCount: 15,
    image: "/powerbank.jpg",
    featured: ["Portable Power Bank", "Charging Accessories", "Tech Solutions"]
  },
  {
    id: "business",
    name: "Business Essentials",
    description: "Professional products for business operations and office needs",
    icon: ShoppingBag,
    color: "green",
    productCount: 12,
    image: "/kitchen_essentials.jpeg", // Placeholder
    featured: ["Professional Office Supplies", "Business Tools", "Organizational Products"]
  }
]

const getColorClasses = (color: string) => {
  const colorMap = {
    orange: {
      bg: "bg-orange-100",
      icon: "text-orange-600",
      button: "bg-orange-600 hover:bg-orange-700"
    },
    pink: {
      bg: "bg-pink-100",
      icon: "text-pink-600",
      button: "bg-pink-600 hover:bg-pink-700"
    },
    blue: {
      bg: "bg-blue-100",
      icon: "text-blue-600",
      button: "bg-blue-600 hover:bg-blue-700"
    },
    green: {
      bg: "bg-green-100",
      icon: "text-green-600",
      button: "bg-green-600 hover:bg-green-700"
    }
  }
  return colorMap[color as keyof typeof colorMap] || colorMap.blue
}

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <section className="bg-white py-12 px-4 md:px-8 lg:px-16 border-b">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Product Categories</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our organized product categories to find exactly what you need for your personal and business requirements.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => {
              const IconComponent = category.icon
              const colors = getColorClasses(category.color)
              
              return (
                <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                      <div className="absolute top-4 left-4">
                        <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center`}>
                          <IconComponent className={`h-6 w-6 ${colors.icon}`} />
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                        <span className="text-sm font-medium text-gray-700">{category.productCount} products</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h3>
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Featured Products:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {category.featured.map((product, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-gray-400 rounded-full" />
                              {product}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex gap-3">
                        <Link href={`/products?category=${category.id}`} className="flex-1">
                          <Button className={`w-full ${colors.button} text-white`}>
                            Browse Category
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                        <Link href={`/categories/${category.id}`}>
                          <Button variant="outline" className="px-4">
                            View All
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">69+</div>
              <div className="text-gray-600">Total Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">4</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">Fast</div>
              <div className="text-gray-600">Shipping</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cant Find What You are Looking For?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Contact us for custom product requests or bulk orders. We're here to help with your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3">
                Contact Us
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}