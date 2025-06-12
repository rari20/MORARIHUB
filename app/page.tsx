import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Cog, Dumbbell, ShoppingBag } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Logo/Title */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight">MORARIHUB</h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-2xl mx-auto leading-relaxed mb-2">
            Improve your health, wealth and a bit of stealth
          </p>
          <p className="text-lg text-blue-300 max-w-2xl mx-auto">
            Empowering individuals and entrepreneurs through career guidance, business automation, fitness
            transformation, and curated products
          </p>
        </div>

        {/* Hub Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
          {/* Consultation Hub */}
          <Link href="/consultation" className="group">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-800 to-yellow-600 p-8 h-64 flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-yellow-600/90"></div>
              <div className="relative z-10">
                <Brain className="w-12 h-12 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Consultation Hub</h3>
                <p className="text-gray-200 text-sm">1-on-1 coaching & digital career guides</p>
              </div>
              <div className="relative z-10 flex items-center text-white group-hover:translate-x-2 transition-transform">
                <span className="font-semibold">Explore</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </div>
          </Link>

          {/* Automation Hub */}
          <Link href="/automation" className="group">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-8 h-64 flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90"></div>
              <div className="relative z-10">
                <Cog className="w-12 h-12 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Automation Hub</h3>
                <p className="text-gray-200 text-sm">Tech automation tools for service providers</p>
              </div>
              <div className="relative z-10 flex items-center text-white group-hover:translate-x-2 transition-transform">
                <span className="font-semibold">Explore</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </div>
          </Link>

          {/* Fitness Hub */}
          <Link href="/fitness" className="group">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 p-8 h-64 flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 to-red-600/90"></div>
              <div className="relative z-10">
                <Dumbbell className="w-12 h-12 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Fitness Hub</h3>
                <p className="text-gray-200 text-sm">Digital health transformation resources</p>
              </div>
              <div className="relative z-10 flex items-center text-white group-hover:translate-x-2 transition-transform">
                <span className="font-semibold">Explore</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </div>
          </Link>

          {/* Product Hub */}
          <Link href="/products" className="group">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-600 to-black p-8 h-64 flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/90 to-black/90"></div>
              <div className="relative z-10">
                <ShoppingBag className="w-12 h-12 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Product Hub</h3>
                <p className="text-gray-200 text-sm">Curated marketplace for trending tech & gear</p>
              </div>
              <div className="relative z-10 flex items-center text-white group-hover:translate-x-2 transition-transform">
                <span className="font-semibold">Explore</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Link href="/auth/register">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-4 text-lg rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get Started Today
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
