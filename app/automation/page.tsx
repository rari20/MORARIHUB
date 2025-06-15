import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Phone, Share2, Star, CheckCircle } from "lucide-react"

export default function AutomationHub() {
  const services = [
    {
      icon: Phone,
      title: "Missed Call → Text Back",
      description: "Automatically send personalized text messages to missed calls",
      features: ["Instant response", "Custom templates", "Lead capture"],
      basicPrice: "£99",
      premiumPrice: "£199",
      color: "blue",
    },
    {
      icon: MessageSquare,
      title: "Web Chat Automation",
      description: "AI-powered chatbot for your website visitors",
      features: ["24/7 availability", "Lead qualification", "FAQ automation"],
      basicPrice: "£149",
      premiumPrice: "£299",
      color: "purple",
    },
    {
      icon: Share2,
      title: "Social Media Auto-Posting",
      description: "Schedule and automate your social media content",
      features: ["Multi-platform", "Content calendar", "Analytics"],
      basicPrice: "£79",
      premiumPrice: "£159",
      color: "green",
    },
    {
      icon: Star,
      title: "Instant Review Request",
      description: "Automated review collection system",
      features: ["Email automation", "SMS follow-up", "Review management"],
      basicPrice: "£89",
      premiumPrice: "£179",
      color: "yellow",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">Automation Hub</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Transform your business with cutting-edge automation tools designed for service providers
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Automation Services</h2>
            <p className="text-xl text-gray-600">Choose from our productized automation solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-${service.color}-100`}>
                        <IconComponent className={`w-8 h-8 text-${service.color}-600`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Features */}
                      <div className="space-y-2">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Pricing */}
                      <div className="flex space-x-4 pt-4">
                        <div className="flex-1">
                          <Badge variant="outline" className="mb-2">
                            Basic
                          </Badge>
                          <div className="text-2xl font-bold text-gray-900">{service.basicPrice}</div>
                          <Button className="w-full mt-2" variant="outline">
                            Choose Basic
                          </Button>
                        </div>
                        <div className="flex-1">
                          <Badge className="mb-2 bg-purple-600">Premium</Badge>
                          <div className="text-2xl font-bold text-purple-600">{service.premiumPrice}</div>
                          <Button className="w-full mt-2 bg-purple-600 hover:bg-purple-700">Choose Premium</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">See how our automation tools transformed businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Local Restaurant",
                metric: "300% increase in bookings",
                description: "Automated missed call follow-up system",
              },
              {
                title: "Fitness Studio",
                metric: "50% reduction in admin time",
                description: "Web chat automation for class bookings",
              },
              {
                title: "Consulting Firm",
                metric: "200% more reviews",
                description: "Automated review request system",
              },
            ].map((study, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-2">{study.metric}</div>
                  <p className="text-gray-600">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Business?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our automation tools and transform your operations today
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4">
            Schedule Free Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}
