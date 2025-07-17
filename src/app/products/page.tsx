"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/Footer"
import { ShoppingBag, Filter, Grid, List, Search } from "lucide-react"

// Mock product data
const products = [
  {
    id: 1,
    name: "Kitchen Essentials Set",
    price: 29.99,
    originalPrice: 39.99,
    image: "/kitchen_essentials.jpeg",
    category: "kitchen",
    inStock: true,
    rating: 4.5,
    reviewCount: 24,
    badge: "sale"
  },
  {
    id: 2,
    name: "Premium Skincare Collection",
    price: 24.99,
    originalPrice: 34.99,
    image: "/skincare.jpeg",
    category: "beauty",
    inStock: true,
    rating: 4.8,
    reviewCount: 18,
    badge: "featured"
  },
  {
    id: 3,
    name: "Portable Power Bank",
    price: 39.99,
    image: "/powerbank.jpg",
    category: "electronics",
    inStock: true,
    rating: 4.6,
    reviewCount: 32,
    badge: "new"
  },
  {
    id: 4,
    name: "Professional Office Supplies",
    price: 19.99,
    image: "/kitchen_essentials.jpeg", // Placeholder
    category: "business",
    inStock: true,
    rating: 4.3,
    reviewCount: 15,
    badge: null
  },
  {
    id: 5,
    name: "Home Organization Kit",
    price: 34.99,
    image: "/skincare.jpeg", // Placeholder
    category: "kitchen",
    inStock: false,
    rating: 4.4,
    reviewCount: 21,
    badge: null
  },
  {
    id: 6,
    name: "Wellness Essentials Bundle",
    price: 49.99,
    image: "/powerbank.jpg", // Placeholder
    category: "beauty",
    inStock: true,
    rating: 4.7,
    reviewCount: 28,
    badge: "featured"
  }
]

const categories = [
  { id: "all", name: "All Products", count: products.length },
  { id: "kitchen", name: "Kitchen & Home", count: products.filter(p => p.category === "kitchen").length },
  { id: "beauty", name: "Health & Beauty", count: products.filter(p => p.category === "beauty").length },
  { id: "electronics", name: "Electronics", count: products.filter(p => p.category === "electronics").length },
  { id: "business", name: "Business Essentials", count: products.filter(p => p.category === "business").length }
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const [viewMode, setViewMode] = useState("grid")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = products
    .filter(product => {
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
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
      
      {/* Page Header */}
      <section className="bg-white py-12 px-4 md:px-8 lg:px-16 border-b">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Discover our complete collection of quality products designed to meet your personal and business needs.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <aside className="lg:w-64 space-y-6">
            {/* Search */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Search className="h-4 w-4" />
                Search Products
              </h3>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Categories */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      selectedCategory === category.id
                        ? "bg-blue-100 text-blue-700 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span className="text-sm text-gray-500">({category.count})</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Under $25</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>$25 - $50</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Over $50</span>
                </label>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Availability</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>In Stock</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Out of Stock</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="text-sm text-gray-600">
                  Showing {filteredProducts.length} of {products.length} products
                </div>
                
                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-700">Sort by:</label>
                    <select
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
                      onClick={() => setViewMode("grid")}
                      className={`p-2 ${viewMode === "grid" ? "bg-blue-100 text-blue-600" : "text-gray-600"}`}
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                    <button
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
              {filteredProducts.map((product) => (
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

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-2">
                <Button variant="outline" disabled>Previous</Button>
                <Button className="bg-blue-600 text-white">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}