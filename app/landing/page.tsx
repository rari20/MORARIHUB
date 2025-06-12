"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  const [isAnimating, setIsAnimating] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsAnimating(false)
    }, 3000)

    const timer2 = setTimeout(() => {
      setShowContent(true)
    }, 3500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  const handleEnter = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center overflow-hidden">
      {/* 3D Animation Container */}
      <div className="relative perspective-1000">
        {/* 3D Text Animation */}
        <div
          className={`transform-gpu transition-all duration-3000 ease-out ${
            isAnimating
              ? "scale-50 rotate-y-180 opacity-0 translate-z-[-200px]"
              : "scale-100 rotate-y-0 opacity-100 translate-z-0"
          }`}
          style={{
            transformStyle: "preserve-3d",
            animation: isAnimating ? "float 2s ease-in-out infinite" : "none",
          }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white text-center tracking-wider">
            <span className="inline-block transform hover:scale-110 transition-transform duration-300">M</span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-75">O</span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-150">
              R
            </span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-225">
              A
            </span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-300">
              R
            </span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-375">
              I
            </span>
            <span className="text-blue-300 mx-4">•</span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-450">
              H
            </span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-525">
              U
            </span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-600">
              B
            </span>
          </h1>
        </div>

        {/* Slogan and Enter Button */}
        <div
          className={`text-center mt-8 transition-all duration-1000 ${
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xl md:text-2xl text-blue-200 mb-8 font-light">
            Improve your health, wealth and a bit of stealth
          </p>
          <Button
            onClick={handleEnter}
            size="lg"
            className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-12 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Enter MORARIHUB
          </Button>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-300 rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .rotate-y-0 {
          transform: rotateY(0deg);
        }
        .translate-z-0 {
          transform: translateZ(0px);
        }
        .translate-z-[-200px] {
          transform: translateZ(-200px);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateY(0deg); }
          50% { transform: translateY(-20px) rotateY(10deg); }
        }
      `}</style>
    </div>
  )
}
