"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/contexts/CartContext"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  inStock: boolean
  rating: number
  reviewCount: number
  badge?: string | null
}

interface ProductGridProps {
  products: Product[]
  viewMode?: "grid" | "list"
}

export default function ProductGrid({ products, viewMode = "grid" }: ProductGridProps) {
  const { dispatch } = useCart()

  const getBadgeColor = (badge: string | null) => {
    switch (badge) {
      case "sale": return "bg-red-500"
      case "featured": return "bg-green-500"
      case "new": return "bg-blue-500"
      default: return ""
    }
  }

  const handleAddToCart = (product: Product) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        maxQuantity: 10 // Default max quantity
      }
    })
  }

  return (
    <div className={`grid gap-6 ${
      viewMode === "grid" 
        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
        : "grid-cols-1"
    }`}>
      {products.map((product) => (
        <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-0">
            <Link href={`/products/${product.id}`}>
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 cursor-pointer">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
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
            </Link>
            <div className="p-4">
              <Link href={`/products/${product.id}`}>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 hover:text-blue-600 cursor-pointer">
                  {product.name}
                </h3>
              </Link>
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
                  onClick={() => handleAddToCart(product)}
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
  )
}