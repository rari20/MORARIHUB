"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, FileText, Star, Users, Clock, CheckCircle } from "lucide-react"

export default function ConsultationHub() {
  const [selectedSession, setSelectedSession] = useState<string | null>(null)

  const handleBooking = (sessionType: string) => {
    setSelectedSession(sessionType)
    // Calendly integration would go here
    window.open("https://calendly.com/morarihub", "_blank")
  }

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
              <div className="space-y-6">
                {/* 30-Minute Session */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Clock className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">30-Minute Consultation</h3>
                        <p className="text-gray-600 mb-4">Quick career guidance session</p>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            Career assessment
                          </li>
                          <li className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            Goal setting
                          </li>
                          <li className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            Action plan
                          </li>
                        </ul>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-blue-600">£50</span>
                          <Button onClick={() => handleBooking("30-min")} className="bg-blue-600 hover:bg-blue-700">
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 60-Minute Session */}
                <Card className="hover:shadow-lg transition-shadow border-yellow-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-yellow-100 rounded-lg">
                        <Users className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="text-xl font-semibold">60-Minute Deep Dive</h3>
                          <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                            Popular
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">Comprehensive career strategy session</p>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            In-depth career analysis
                          </li>
                          <li className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            Personalized roadmap
                          </li>
                          <li className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            Follow-up resources
                          </li>
                          <li className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            Email support (7 days)
                          </li>
                        </ul>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-yellow-600">£90</span>
                          <Button onClick={() => handleBooking("60-min")} className="bg-yellow-600 hover:bg-yellow-700">
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Calendly Integration Notice */}
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Booking will open Calendly in a new window for easy scheduling
                  </p>
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
                    <div className="mb-4">
                      <img
                        src="/placeholder.svg?height=150&width=200"
                        alt="CV Review Guide"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
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
                    <div className="mb-4">
                      <img
                        src="/placeholder.svg?height=150&width=200"
                        alt="Breaking into Tech eBook"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
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
                    <div className="mb-4">
                      <img
                        src="/placeholder.svg?height=150&width=200"
                        alt="Investing Masterclass"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
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
            {[
              {
                name: "Sarah Johnson",
                role: "Software Developer",
                content:
                  "The consultation session was incredibly valuable. I got clear direction for my career path and landed my dream job within 3 months!",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Product Manager",
                content:
                  "The CV Review Guide transformed my resume. I started getting interview calls immediately after implementing the suggestions.",
                rating: 5,
              },
              {
                name: "Emma Williams",
                role: "Data Analyst",
                content:
                  "Breaking into Tech eBook was exactly what I needed. The step-by-step approach made the transition smooth and successful.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <Card key={i} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
