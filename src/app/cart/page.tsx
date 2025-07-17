"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/Footer"
import { useCart } from "@/contexts/CartContext"
import { ShoppingBag, Plus, Minus, Trash2, ArrowLeft, Truck, Shield } from "lucide-react"

export default function CartPage() {
  const { state, dispatch } = useCart()

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 py-16">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-12 w-12 text-gray-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-lg text-gray-600 mb-8">
              Looks like you haven&apos;t added any products to your cart yet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Start Shopping
                </Button>
              </Link>
              <Link href="/categories">
                <Button variant="outline" className="px-8 py-3">
                  Browse Categories
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <section className="bg-white py-8 px-4 md:px-8 lg:px-16 border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/products">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Button>
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-2">{state.itemCount} items in your cart</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Cart Items</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={clearCart}
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Clear Cart
              </Button>
            </div>

            {state.items.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative w-full sm:w-32 h-32 bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 p-4">
                      <div className="flex flex-col sm:flex-row justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            ${item.price.toFixed(2)} each
                          </p>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-gray-700">Qty:</span>
                            <div className="flex items-center border border-gray-300 rounded-md">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                                className="p-1 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="px-3 py-1 font-medium min-w-[3rem] text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                disabled={item.quantity >= item.maxQuantity}
                                className="p-1 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                            <span className="text-xs text-gray-500">
                              (Max: {item.maxQuantity})
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end justify-between mt-4 sm:mt-0">
                          <div className="text-lg font-bold text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50 mt-2"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({state.itemCount} items)</span>
                    <span>${state.subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (HST 13%)</span>
                    <span>${state.tax.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>
                      {state.shipping === 0 ? (
                        <span className="text-green-600 font-medium">FREE</span>
                      ) : (
                        `$${state.shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  
                  {state.subtotal < 50 && (
                    <div className="text-sm text-blue-600 bg-blue-50 p-2 rounded">
                      Add ${(50 - state.subtotal).toFixed(2)} more for free shipping!
                    </div>
                  )}
                  
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold text-gray-900">
                      <span>Total</span>
                      <span>${state.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-6 py-3">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Proceed to Checkout
                </Button>
                
                <p className="text-xs text-gray-500 text-center mt-3">
                  Secure checkout powered by industry-standard encryption
                </p>
              </CardContent>
            </Card>

            {/* Trust Signals */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Why Shop With Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Truck className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">Free Shipping</div>
                      <div className="text-xs text-gray-600">On orders over $50</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">Secure Payment</div>
                      <div className="text-xs text-gray-600">Your data is protected</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Quality Guarantee</div>
                      <div className="text-xs text-gray-600">100% satisfaction promise</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact for Orders */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Need Help with Your Order?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Contact us for assistance with bulk orders or custom requests.
                </p>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">
                    Contact Us
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}