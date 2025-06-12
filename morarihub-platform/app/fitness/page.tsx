import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Utensils, Dumbbell, Droplets, Pill, ShoppingBag } from "lucide-react"
import Link from "next/link"

export default function FitnessHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">Fitness Hub</h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
              Transform your health with comprehensive fitness resources, meal plans, and premium gymwear
            </p>
          </div>
        </div>
      </section>

      {/* Main Digital Product */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-600 text-white mb-4">Digital Download</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Fitness Transformation Guide</h2>
              <p className="text-xl text-gray-600 mb-8">
                Everything you need for a successful health transformation: meal plans, workout routines, hydration
                guides, and supplement recommendations.
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-3xl font-bold text-orange-600">£35</span>
                <span className="text-lg text-gray-500 line-through">£50</span>
                <Badge variant="destructive">30% OFF</Badge>
              </div>
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 mr-4">
                <Download className="w-5 h-5 mr-2" />
                Download Now
              </Button>
              <Button size="lg" variant="outline">
                Preview Content
              </Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=400"
                alt="Fitness Guide Preview"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">What's Included</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Meal Plans */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Utensils className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Meal Plans</CardTitle>
                <CardDescription>30-day structured nutrition guide</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Healthy meal prep"
                  className="rounded-lg mb-4 w-full"
                />
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Breakfast, lunch, dinner plans</li>
                  <li>• Grocery shopping lists</li>
                  <li>• Macro calculations</li>
                  <li>• Vegetarian options</li>
                </ul>
              </CardContent>
            </Card>

            {/* Workout Routines */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Dumbbell className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle>Workout Routines</CardTitle>
                <CardDescription>Progressive 30-day training program</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Workout routine"
                  className="rounded-lg mb-4 w-full"
                />
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Beginner to advanced levels</li>
                  <li>• Home & gym workouts</li>
                  <li>• Video demonstrations</li>
                  <li>• Progress tracking sheets</li>
                </ul>
              </CardContent>
            </Card>

            {/* Hydration Guide */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Droplets className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Hydration Guide</CardTitle>
                <CardDescription>Optimal water intake strategies</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Hydration tracking"
                  className="rounded-lg mb-4 w-full"
                />
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Daily water targets</li>
                  <li>• Electrolyte balance</li>
                  <li>• Hydration timing</li>
                  <li>• Tracking templates</li>
                </ul>
              </CardContent>
            </Card>

            {/* Supplements */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Pill className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Supplement Guide</CardTitle>
                <CardDescription>Evidence-based recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Supplements guide"
                  className="rounded-lg mb-4 w-full"
                />
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Essential supplements</li>
                  <li>• Timing & dosages</li>
                  <li>• Budget-friendly options</li>
                  <li>• Safety guidelines</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gym Fits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Gym Fits</h2>
            <p className="text-xl text-gray-600">Look good, feel good, perform better</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Performance Leggings", price: "£45", image: "/placeholder.svg?height=300&width=250" },
              { name: "Training Tank Top", price: "£25", image: "/placeholder.svg?height=300&width=250" },
              { name: "Athletic Shorts", price: "£30", image: "/placeholder.svg?height=300&width=250" },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-red-600">{item.price}</span>
                      <Button className="bg-red-600 hover:bg-red-700">Add to Cart</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                <ShoppingBag className="w-5 h-5 mr-2" />
                View All Gym Fits
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Transformation Stories */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Transformation Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="text-center">
                <CardContent className="pt-6">
                  <img
                    src={`/placeholder.svg?height=200&width=200`}
                    alt={`Transformation ${i}`}
                    className="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">Sarah M.</h3>
                  <p className="text-gray-600 mb-4">
                    "Lost 25 pounds in 3 months following the meal plans and workout routines. The guide made everything
                    so simple to follow!"
                  </p>
                  <Badge className="bg-orange-600">30-Day Challenge Winner</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Start Your Transformation Today</h2>
          <p className="text-xl text-red-100 mb-8">
            Join thousands who have transformed their health with our comprehensive fitness guide
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-4">
            <Download className="w-5 h-5 mr-2" />
            Get Your Guide Now
          </Button>
        </div>
      </section>
    </div>
  )
}
