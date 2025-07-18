"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/Footer"
import { ShoppingBag, ArrowLeft, Plus, Minus, Star, Truck, Shield, RotateCcw } from "lucide-react"

// Product type definition
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number; // Make this optional
  images: string[];
  category: string;
  inStock: boolean;
  stockQuantity: number;
  rating: number;
  reviewCount: number;
  badge: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
}

// Mock product data
const productData: Record<string, Product> = {
  "1": {
    id: 1,
    name: "Kitchen Essentials Set",
    price: 29.99,
    originalPrice: 39.99,
    images: ["/kitchen_essentials.jpeg", "/skincare.jpeg", "/powerbank.jpg"],
    category: "Kitchen & Home",
    inStock: true,
    stockQuantity: 15,
    rating: 4.5,
    reviewCount: 24,
    badge: "sale",
    description: "Complete kitchen essentials set featuring premium quality tools and accessories designed for both home cooks and professional chefs. This comprehensive collection includes everything you need to create culinary masterpieces.",
    features: [
      "Premium stainless steel construction",
      "Ergonomic handles for comfortable grip",
      "Dishwasher safe for easy cleaning",
      "Professional-grade quality",
      "Complete 12-piece set"
    ],
    specifications: {
      "Material": "Stainless Steel",
      "Weight": "2.5 lbs",
      "Dimensions": "12\" x 8\" x 4\"",
      "Care": "Dishwasher Safe",
      "Warranty": "2 Years"
    }
  },
  "2": {
    id: 2,
    name: "Premium Skincare Collection",
    price: 24.99,
    originalPrice: 34.99,
    images: ["/skincare.jpeg", "/kitchen_essentials.jpeg", "/powerbank.jpg"],
    category: "Health & Beauty",
    inStock: true,
    stockQuantity: 8,
    rating: 4.8,
    reviewCount: 18,
    badge: "featured",
    description: "Professional-grade skincare collection formulated with natural ingredients to nourish and protect your skin. Perfect for daily wellness routines and suitable for all skin types.",
    features: [
      "Natural and organic ingredients",
      "Suitable for all skin types",
      "Dermatologist tested",
      "Cruelty-free formulation",
      "Complete 5-step routine"
    ],
    specifications: {
      "Volume": "50ml each",
      "Ingredients": "Natural & Organic",
      "Skin Type": "All Types",
      "Shelf Life": "24 months",
      "Origin": "Made in Canada"
    }
  },
  "3": {
    id: 3,
    name: "Portable Power Bank",
    price: 39.99,
    images: ["/powerbank.jpg", "/kitchen_essentials.jpeg", "/skincare.jpeg"],
    category: "Electronics",
    inStock: true,
    stockQuantity: 25,
    rating: 4.6,
    reviewCount: 32,
    badge: "new",
    description: "High-capacity portable power bank with fast charging technology. Perfect for business professionals and travelers who need reliable power on the go.",
    features: [
      "20,000mAh high capacity",
      "Fast charging technology",
      "Multiple device compatibility",
      "LED power indicator",
      "Compact and lightweight design"
    ],
    specifications: {
      "Capacity": "20,000mAh",
      "Input": "USB-C, Micro USB",
      "Output": "2x USB-A, 1x USB-C",
      "Weight": "1.2 lbs",
      "Dimensions": "6\" x 3\" x 1\""
    }
  }
}

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.id as string
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const product = productData[productId as keyof typeof productData]

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link href="/products">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const getBadgeColor = (badge: string | null) => {
    switch (badge) {
      case "sale": return "bg-red-500"
      case "featured": return "bg-green-500"
      case "new": return "bg-blue-500"
      default: return ""
    }
  }

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1 && newQuantity <= product.stockQuantity) {
      setQuantity(newQuantity)
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
            <Link href="/products" className="hover:text-blue-600">Products</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-white rounded-lg overflow-hidden shadow-sm">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
              {product.badge && (
                <div className={`absolute top-4 right-4 ${getBadgeColor(product.badge)} text-white px-3 py-1 rounded text-sm font-semibold uppercase`}>
                  {product.badge}
                </div>
              )}
            </div>

            {/* Image Thumbnails */}
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${selectedImage === index ? "border-blue-500" : "border-gray-200"
                    }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-blue-600 font-medium">{product.category}</span>
                {product.badge && (
                  <span className={`${getBadgeColor(product.badge)} text-white px-2 py-1 rounded text-xs font-semibold uppercase`}>
                    {product.badge}
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-current" : ""}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`} />
              <span className={`font-medium ${product.inStock ? "text-green-700" : "text-red-700"}`}>
                {product.inStock ? `In Stock (${product.stockQuantity} available)` : "Out of Stock"}
              </span>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium text-gray-700">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    title="button2"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    title="button"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= product.stockQuantity}
                    className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3"
                  disabled={!product.inStock}
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </Button>
                <Button variant="outline" className="px-6">
                  ♡
                </Button>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Truck className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">Free Shipping</div>
                <div className="text-xs text-gray-600">On orders over $50</div>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">Quality Guarantee</div>
                <div className="text-xs text-gray-600">100% satisfaction</div>
              </div>
              <div className="text-center">
                <RotateCcw className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">Easy Returns</div>
                <div className="text-xs text-gray-600">30-day policy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="border-b">
              <nav className="flex">
                <button className="px-6 py-4 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
                  Specifications
                </button>
                <button className="px-6 py-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                  Reviews ({product.reviewCount})
                </button>
                <button className="px-6 py-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                  Shipping & Returns
                </button>
              </nav>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">{key}:</span>
                    <span className="text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(productData)
              .filter(p => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <Link href={`/products/${relatedProduct.id}`}>
                      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                        <Image
                          src={relatedProduct.images[0]}
                          alt={relatedProduct.name}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-gray-900">${relatedProduct.price}</span>
                          <div className="flex text-yellow-400">
                            {"★".repeat(Math.floor(relatedProduct.rating))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}