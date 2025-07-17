"use client"

import React, { createContext, useContext, useReducer, useEffect } from "react"

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
  maxQuantity: number
}

interface CartState {
  items: CartItem[]
  itemCount: number
  subtotal: number
  tax: number
  shipping: number
  total: number
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> & { quantity?: number } }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartItem[] }

const TAX_RATE = 0.13 // 13% HST for Ontario
const FREE_SHIPPING_THRESHOLD = 50
const SHIPPING_COST = 9.99

const cartReducer = (state: CartState, action: CartAction): CartState => {
  let newItems: CartItem[]

  switch (action.type) {
    case "ADD_ITEM":
      const existingItem = state.items.find(item => item.id === action.payload.id)
      
      if (existingItem) {
        const newQuantity = existingItem.quantity + (action.payload.quantity || 1)
        const maxQuantity = action.payload.maxQuantity || existingItem.maxQuantity
        
        newItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.min(newQuantity, maxQuantity) }
            : item
        )
      } else {
        newItems = [
          ...state.items,
          {
            ...action.payload,
            quantity: action.payload.quantity || 1
          }
        ]
      }
      break

    case "REMOVE_ITEM":
      newItems = state.items.filter(item => item.id !== action.payload)
      break

    case "UPDATE_QUANTITY":
      newItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(0, Math.min(action.payload.quantity, item.maxQuantity)) }
          : item
      ).filter(item => item.quantity > 0)
      break

    case "CLEAR_CART":
      newItems = []
      break

    case "LOAD_CART":
      newItems = action.payload
      break

    default:
      return state
  }

  // Calculate totals
  const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const tax = subtotal * TAX_RATE
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST
  const total = subtotal + tax + shipping

  return {
    items: newItems,
    itemCount,
    subtotal: Math.round(subtotal * 100) / 100,
    tax: Math.round(tax * 100) / 100,
    shipping: Math.round(shipping * 100) / 100,
    total: Math.round(total * 100) / 100
  }
}

const initialState: CartState = {
  items: [],
  itemCount: 0,
  subtotal: 0,
  tax: 0,
  shipping: 0,
  total: 0
}

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
} | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("kj-cart")
    if (savedCart) {
      try {
        const cartItems = JSON.parse(savedCart)
        dispatch({ type: "LOAD_CART", payload: cartItems })
      } catch (error) {
        console.error("Error loading cart from localStorage:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("kj-cart", JSON.stringify(state.items))
  }, [state.items])

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}