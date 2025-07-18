"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/Footer"
import { ShoppingBag, ArrowLeft,  Grid, List } from "lucide-react"

// Mock data for category-specific products
const categoryData = {
  kitchen: {
    name: "Kitchen & Home",
    description: "Essential tools and accessories for modern living and home organization",
    products: [
      {
        id: 1,
        name: "Kitchen Essentials Set",
        price: 29.99,
        originalPrice: 39.99,
        image: "/kitchen_essentials.jpeg",
        inStock: true,
        rating: 4.5,
        reviewCount: 24,
        badge: "sale"
      },
      {
        id: 5,
        name: "Home Organization Kit",
        price: 34.99,
        image: "/skincare.jpeg",
        inStock: false,
        rating: 4.4,
        reviewCount: 21,
        badge: null
      }
    ]
  },
  beauty: {
    name: "Health & Beauty",
    description: "Premium wellness and personal care products for daily routines",
    products: [
      {
        id: 2,
        name: "Premium Skincare Collection",
        price: 24.99,
        originalPrice: 34.99,
        image: "/skincare.jpeg",
        inStock: true,
        rating: 4.8,
        reviewCount: 18,
        badge: "featured"
      },
      {
        id: 6,
        name: "Wellness Essentials Bundle",
        price: 49.99,
        image: "/powerbank.jpg",
        inStock: true,
        rating: 4.7,
        reviewCount: 28,
        badge: "featured"
      }
    ]
  },
  electronics: {
    name: "Electronics",
    description: "Tech accessories and power solutions for business and personal use",
    products: [
      {
        id: 3,
        name: "Portable Power Bank",
        price: 39.99,
        image: "/powerbank.jpg",
        inStock: true,
        rating: 4.6,
        reviewCount: 32,
        badge: "new"
      }
    ]
  },
  business: {
    name: "Business Essentials",
    description: "Professional products for business operations and office needs",
    products: [
      {
        id: 4,
        name: "Professional Office Supplies",
        price: 19.99,
        image: "/kitchen_essentials.jpeg",
        inStock: true,
        rating: 4.3,
        reviewCount: 15,
        badge: null
      }
    ]
  }
}

export default function CategoryPage() {
  const params = useParams()
  const categoryId = params.category as string
  const [sortBy, setSortBy] = useState("name")
  const [viewMode, setViewMode] = useState("grid")

  const category = categoryData[categoryId as keyof typeof categoryData]

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">The category youre looking for doesnt exist.</p>
          <Link href="/categories">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Categories
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const sortedProducts = [...category.products].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "name":
      default:
        return a.name.localeCompare(b.name)
    }
  })

  const getBadgeColor = (badge: string | null) => {
    switch (badge) {
      case "sale": return "bg-red-500"
      case "featured": return "bg-green-500"
      case "new": return "bg-blue-500"
      default: return ""
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumb */}
      <section className="bg-white py-4 px-4 md:px-8 lg:px-16 border-b">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/categories" className="hover:text-blue-600">Categories</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{category.name}</span>
          </nav>
        </div>
      </section>

      {/* Category Header */}
      <section className="bg-white py-12 px-4 md:px-8 lg:px-16 border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/categories">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Categories
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{category.name}</h1>
          <p className="text-lg text-gray-600 max-w-2xl">{category.description}</p>
          <div className="mt-4 text-sm text-gray-500">
            {category.products.length} products in this category
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-8">
        {/* Toolbar */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-sm text-gray-600">
              Showing {sortedProducts.length} products
            </div>
            
            <div className="flex items-center gap-4">
              {/* Sort */}
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">Sort by:</label>
                <select
                aria-label="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="name">Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>

              {/* View Mode */}
              <div className="flex items-center gap-1 border border-gray-300 rounded-md">
                <button
                title="btn"
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${viewMode === "grid" ? "bg-blue-100 text-blue-600" : "text-gray-600"}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                title="btn2"
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${viewMode === "list" ? "bg-blue-100 text-blue-600" : "text-gray-600"}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === "grid" 
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
            : "grid-cols-1"
        }`}>
          {sortedProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  {product.badge && (
                    <div className={`absolute top-2 right-2 ${getBadgeColor(product.badge)} text-white px-2 py-1 rounded text-xs font-semibold uppercase`}>
                      {product.badge}
                    </div>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-t-lg">
                      <span className="text-white font-semibold">Out of Stock</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex text-yellow-400">
                      {"★".repeat(Math.floor(product.rating))}
                      {"☆".repeat(5 - Math.floor(product.rating))}
                    </div>
                    <span className="text-sm text-gray-500">({product.reviewCount})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-gray-900">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      disabled={!product.inStock}
                    >
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <ShoppingBag className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">There are no products in this category yet.</p>
            <Link href="/products">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Browse All Products
              </Button>
            </Link>
          </div>
        )}

        {/* Related Categories */}
        <section className="mt-16 bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Explore Other Categories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {Object.entries(categoryData)
              .filter(([id]) => id !== categoryId)
              .slice(0, 3)
              .map(([id, cat]) => (
                <Link key={id} href={`/categories/${id}`}>
                  <Card className="hover:shadow-md transition-shadow duration-300 cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <h4 className="font-semibold text-gray-900 mb-2">{cat.name}</h4>
                      <p className="text-sm text-gray-600">{cat.products.length} products</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}