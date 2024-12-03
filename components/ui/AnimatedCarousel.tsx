'use client'

import React, { useState, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface AnimatedCarouselProps {
  children: ReactNode[];
}

export default function AnimatedCarousel({ children }: AnimatedCarouselProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const handlePrev = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length)
  }

  const handleNext = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length)
  }

  const getSlidePercentage = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 33.33; // Large screens: 3 cards
      if (window.innerWidth >= 768) return 50; // Medium screens: 2 cards
      return 100; // Small screens: 1 card
    }
    return 100; // Default to 1 card for SSR
  }

  return (
    <div className="w-full mx-auto relative">
      <div className="absolute right-[20px] -translate-x-1/ -top-6 gap-5 flex space-x-2 mb-4 z-10">
        <button
          onClick={handlePrev}
          className="p-4 bg-slate-300 text-primary-foreground shadow-md hover:bg-primary/90 transition-colors"
          aria-label="Previous item"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={handleNext}
          className="p-4 bg-slate-300 text-primary-foreground shadow-md hover:bg-primary/90 transition-colors"
          aria-label="Next item"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="overflow-hidden py-14">
        <motion.div
          className="flex justify-between gap-6 lg:gap-4"
          animate={{
            x: `calc(-${currentIndex * getSlidePercentage()}% - ${currentIndex * (window.innerWidth >= 1024 ? 1 : 1.5)}rem)`
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {React.Children.map(children, (child, index) => (
            <motion.div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0">
              {child}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {React.Children.map(children, (_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-primary' : 'bg-primary/30'}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to item ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
