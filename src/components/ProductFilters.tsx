"use client"

import { Search, Filter } from "lucide-react"

interface Category {
  id: string
  name: string
  count: number
}

interface ProductFiltersProps {
  categories: Category[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

export default function ProductFilters({
  categories,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange
}: ProductFiltersProps) {
  return (
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
          onChange={(e) => onSearchChange(e.target.value)}
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
              onClick={() => onCategoryChange(category.id)}
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
  )
}