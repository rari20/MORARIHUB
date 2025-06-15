"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
  Search,
  Filter,
  Star,
  ShoppingCart,
  Smartphone,
  Headphones,
  Watch,
  Dumbbell,
  Laptop,
  Gamepad2,
  Download,
  Gift,
} from "lucide-react"

export default function ProductHub() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("trending")
  const [emailForEbook, setEmailForEbook] = useState("")
  const [showEbookDialog, setShowEbookDialog] = useState(false)

  const categories = [
    { name: "Tech Items", icon: Smartphone, count: 45, id: "tech" },
    { name: "Gym Fits", icon: Dumbbell, count: 32, id: "fitness" },
    { name: "Productivity Tools", icon: Laptop, count: 28, id: "productivity" },
    { name: "Audio", icon: Headphones, count: 19, id: "audio" },
    { name: "Wearables", icon: Watch, count: 15, id: "wearables" },
    { name: "Gaming", icon: Gamepad2, count: 22, id: "gaming" },
  ]

  const products = [
    {
      id: 1,
      name: "Wireless Noise-Cancelling Headphones",
      price: "£199",
      originalPrice: "£249",
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=250&h=250&fit=crop",
      category: "audio",
      badge: "Trending",
      inStock: true,
    },
    {
      id: 2,
      name: "Smart Fitness Tracker",
      price: "£89",
      originalPrice: "£129",
      rating: 4.6,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=250&h=250&fit=crop",
      category: "wearables",
      badge: "New",
      inStock: true,
    },
    {
      id: 3,
      name: "Premium Yoga Mat",
      price: "£45",
      originalPrice: "£65",
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=250&h=250&fit=crop",
      category: "fitness",
      badge: "Best Seller",
      inStock: true,
    },
    {
      id: 4,
      name: "Ergonomic Laptop Stand",
      price: "£35",
      originalPrice: "£50",
      rating: 4.7,
      reviews: 78,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=250&h=250&fit=crop",
      category: "productivity",
      badge: "Digital",
      inStock: true,
    },
    {
      id: 5,
      name: "Bluetooth Gaming Controller",
      price: "£55",
      originalPrice: "£75",
      rating: 4.5,
      reviews: 92,
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=250&h=250&fit=crop",
      category: "gaming",
      badge: "Bundle",
      inStock: true,
    },
    {
      id: 6,
      name: "Resistance Band Set",
      price: "£25",
      originalPrice: "£40",
      rating: 4.8,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=250&h=250&fit=crop",
      category: "fitness",
      badge: "Trending",
      inStock: true,
    },
    {
      id: 7,
      name: "Mechanical Keyboard",
      price: "£120",
      originalPrice: "£150",
      rating: 4.9,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=250&h=250&fit=crop",
      category: "tech",
      badge: "New",
      inStock: true,
    },
    {
      id: 8,
      name: "Wireless Charging Pad",
      price: "£30",
      originalPrice: "£45",
      rating: 4.4,
      reviews: 134,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=250&h=250&fit=crop",
      category: "tech",
      badge: "Trending",
      inStock: true,
    },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return Number.parseInt(a.price.replace("£", "")) - Number.parseInt(b.price.replace("£", ""))
      case "price-high":
        return Number.parseInt(b.price.replace("£", "")) - Number.parseInt(a.price.replace("£", ""))
      case "rating":
        return b.rating - a.rating
      case "new":
        return b.id - a.id
      default:
        return 0
    }
  })

  const handleEbookDownload = (e: React.FormEvent) => {
    e.preventDefault()
    if (emailForEbook) {
      // Handle email submission for free ebook
      console.log("Email submitted for ebook:", emailForEbook)
      setShowEbookDialog(false)
      setEmailForEbook("")
      // Show success message or trigger download
    }
  }

  const handleAddToCart = (productId: number) => {
    console.log("Added to cart:", productId)
    // Handle add to cart functionality
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">Product Hub</h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto mb-8">
              Discover trending tech, premium fitness gear, and productivity tools curated for success
            </p>

            {/* Free Ebook CTA */}
            <Dialog open={showEbookDialog} onOpenChange={setShowEbookDialog}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 font-semibold px-8 py-4">
                  <Gift className="w-5 h-5 mr-2" />
                  Get Free Productivity Ebook
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Download Your Free Ebook</DialogTitle>
                  <DialogDescription>
                    Get our exclusive "10 Productivity Hacks for Success" ebook delivered to your inbox instantly.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleEbookDownload} className="space-y-4">
                  <div>
                    <Label htmlFor="ebook-email">Email Address</Label>
                    <Input
                      id="ebook-email"
                      type="email"
                      placeholder="your@email.com"
                      value={emailForEbook}
                      onChange={(e) => setEmailForEbook(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    <Download className="w-4 h-4 mr-2" />
                    Download Free Ebook
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search products..."
                className="pl-10 h-12"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 h-12">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="tech">Tech Items</SelectItem>
                  <SelectItem value="fitness">Gym Fits</SelectItem>
                  <SelectItem value="productivity">Productivity Tools</SelectItem>
                  <SelectItem value="audio">Audio</SelectItem>
                  <SelectItem value="wearables">Wearables</SelectItem>
                  <SelectItem value="gaming">Gaming</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 h-12">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="trending">Trending</SelectItem>
                  <SelectItem value="new">New Arrivals</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="h-12">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={index}
                  className={`hover:shadow-lg transition-shadow cursor-pointer ${
                    selectedCategory === category.id ? "ring-2 ring-red-500" : ""
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                    <p className="text-xs text-gray-500">{category.count} items</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
            <p className="text-gray-600">{sortedProducts.length} products found</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                      loading="lazy"
                    />
                    <Badge
                      className={`absolute top-3 left-3 ${
                        product.badge === "Trending"
                          ? "bg-red-600"
                          : product.badge === "New"
                            ? "bg-green-600"
                            : product.badge === "Best Seller"
                              ? "bg-yellow-600"
                              : product.badge === "Digital"
                                ? "bg-purple-600"
                                : "bg-blue-600"
                      }`}
                    >
                      {product.badge}
                    </Badge>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {categories.find((cat) => cat.id === product.category)?.name}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-sm text-gray-500">({product.reviews})</span>
                      </div>
                    </div>

                    <h3 className="font-semibold text-sm mb-3 line-clamp-2">{product.name}</h3>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-red-600">{product.price}</span>
                        <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      </div>
                    </div>

                    <Button
                      onClick={() => handleAddToCart(product.id)}
                      className="w-full bg-red-600 hover:bg-red-700 text-sm"
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
              Load More Products
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get notified about new products, exclusive deals, and trending items
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input placeholder="Enter your email" className="flex-1 h-12 bg-white text-gray-900" />
            <Button className="bg-red-600 hover:bg-red-700 h-12 px-8">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
