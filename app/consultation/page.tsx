import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, FileText, Star, Users } from "lucide-react"

export default function ConsultationHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-yellow-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">Consultation Hub</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Get personalized career guidance and access premium digital resources to accelerate your professional
              growth
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Booking Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Book Your Session</h2>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Calendar className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="text-xl font-semibold">30-Minute Consultation</h3>
                      <p className="text-gray-600">Quick career guidance session</p>
                      <p className="text-2xl font-bold text-blue-600">£50</p>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    Book 30-Min Session
                  </Button>
                </div>

                <div className="border-t border-gray-200 my-6"></div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Users className="w-8 h-8 text-yellow-600" />
                    <div>
                      <h3 className="text-xl font-semibold">60-Minute Deep Dive</h3>
                      <p className="text-gray-600">Comprehensive career strategy session</p>
                      <p className="text-2xl font-bold text-yellow-600">£90</p>
                    </div>
                  </div>
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700" size="lg">
                    Book 60-Min Session
                  </Button>
                </div>

                {/* Calendly Placeholder */}
                <div className="mt-8 p-6 bg-gray-50 rounded-lg text-center">
                  <p className="text-gray-600">Calendly booking widget will be embedded here</p>
                </div>
              </div>
            </div>

            {/* Digital Products */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Digital Guides</h2>
              <div className="space-y-6">
                {/* CV Review Guide */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <FileText className="w-8 h-8 text-blue-600" />
                      <div>
                        <CardTitle>CV Review Guide</CardTitle>
                        <CardDescription>Complete guide to crafting winning CVs</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">£25</span>
                      <Button className="bg-blue-600 hover:bg-blue-700">Add to Cart</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Breaking into Tech eBook */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <FileText className="w-8 h-8 text-purple-600" />
                      <div>
                        <CardTitle>Breaking into Tech eBook</CardTitle>
                        <CardDescription>Your roadmap to a successful tech career</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-purple-600">£25</span>
                      <Button className="bg-purple-600 hover:bg-purple-700">Add to Cart</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Investing Masterclass */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Star className="w-8 h-8 text-yellow-600" />
                      <div>
                        <CardTitle>Investing Masterclass</CardTitle>
                        <CardDescription>Expert-led investment strategies course</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-yellow-600">£25</span>
                      <Button className="bg-yellow-600 hover:bg-yellow-700">Add to Cart</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "The consultation session was incredibly valuable. I got clear direction for my career path."
                  </p>
                  <p className="font-semibold">Client {i}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
