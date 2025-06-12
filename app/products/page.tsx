import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
} from "lucide-react"

export default function ProductHub() {
  const categories = [
    { name: "Tech Items", icon: Smartphone, count: 45 },
    { name: "Gym Fits", icon: Dumbbell, count: 32 },
    { name: "Productivity Tools", icon: Laptop, count: 28 },
    { name: "Audio", icon: Headphones, count: 19 },
    { name: "Wearables", icon: Watch, count: 15 },
    { name: "Gaming", icon: Gamepad2, count: 22 },
  ]

  const products = [
    {
      id: 1,
      name: "Wireless Noise-Cancelling Headphones",
      price: "£199",
      originalPrice: "£249",
      rating: 4.8,
      reviews: 124,
      image: "/placeholder.svg?height=250&width=250",
      category: "Tech Items",
      badge: "Trending",
    },
    {
      id: 2,
      name: "Smart Fitness Tracker",
      price: "£89",
      originalPrice: "£129",
      rating: 4.6,
      reviews: 89,
      image: "/placeholder.svg?height=250&width=250",
      category: "Wearables",
      badge: "New",
    },
    {
      id: 3,
      name: "Premium Yoga Mat",
      price: "£45",
      originalPrice: "£65",
      rating: 4.9,
      reviews: 156,
      image: "/placeholder.svg?height=250&width=250",
      category: "Gym Fits",
      badge: "Best Seller",
    },
    {
      id: 4,
      name: "Ergonomic Laptop Stand",
      price: "£35",
      originalPrice: "£50",
      rating: 4.7,
      reviews: 78,
      image: "/placeholder.svg?height=250&width=250",
      category: "Productivity Tools",
      badge: "Digital",
    },
    {
      id: 5,
      name: "Bluetooth Gaming Controller",
      price: "£55",
      originalPrice: "£75",
      rating: 4.5,
      reviews: 92,
      image: "/placeholder.svg?height=250&width=250",
      category: "Gaming",
      badge: "Bundle",
    },
    {
      id: 6,
      name: "Resistance Band Set",
      price: "£25",
      originalPrice: "£40",
      rating: 4.8,
      reviews: 203,
      image: "/placeholder.svg?height=250&width=250",
      category: "Gym Fits",
      badge: "Trending",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">Product Hub</h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              Discover trending tech, premium fitness gear, and productivity tools curated for success
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input placeholder="Search products..." className="pl-10 h-12" />
            </div>
            <div className="flex gap-4">
              <Select>
                <SelectTrigger className="w-48 h-12">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="tech">Tech Items</SelectItem>
                  <SelectItem value="fitness">Gym Fits</SelectItem>
                  <SelectItem value="productivity">Productivity Tools</SelectItem>
                </SelectContent>
              </Select>
              <Select>
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
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
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
            <p className="text-gray-600">{products.length} products found</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-t-lg"
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

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {product.category}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-sm text-gray-500">({product.reviews})</span>
                      </div>
                    </div>

                    <h3 className="font-semibold text-lg mb-3 line-clamp-2">{product.name}</h3>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-red-600">{product.price}</span>
                        <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      </div>
                      <Button className="bg-red-600 hover:bg-red-700">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
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
