'use client'
import { scroll } from 'motion'
import { useEffect, useRef } from 'react'
import { Italiana } from 'next/font/google';

const italiana = Italiana({
  weight: ['400'],
  subsets: ['latin'],
})

interface CircleData {
  text?: string
  image?: string
}

interface AnimatedCirclesProps {
  circleData?: CircleData[]
}

export default function AnimatedCircles({ 
  circleData = [
    { text: "Suits" },
    { text: "Polos" },
    { text: "Shirts" }
  ]
}: AnimatedCirclesProps) {
  const circleRefs = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return

    const finalPositions = [
      { finalAngle: -Math.PI / 2 },               // Circle 0 (NFT) - Top vertex 
      { finalAngle: 5 * Math.PI / 6 },            // Circle 1 (LUNAR) - Bottom left (150°)
      { finalAngle: Math.PI / 6 },                // Circle 2 (EARTH) - Bottom right (30°)
    ]

    // Animate circles
    circleRefs.current.forEach((circle, index) => {
      if (!circle || !containerRef.current) return
      scroll(
        (progress: number) => {
          // Move in a spiral: start from center, rotate once while expanding
          const angle = progress * Math.PI + finalPositions[index].finalAngle
          const radius = 280 * progress // distance from center grows with scroll - reduced to prevent horizontal scroll

          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius

          circle.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
          
          // Show content only after circles have moved some distance (30% progress)
          const contentElement = circle.querySelector('.circle-content') as HTMLElement
          if (contentElement) {
            contentElement.style.opacity = progress > 0.3 ? '1' : '0'
          }
        },
        {
          target: containerRef.current,
          offset: ["0.3 1", "0.5 0.1"],
        }
      )
    })
  }, [])

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <div className="relative w-full h-full">
          {/* Circles */}
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) {
                  circleRefs.current[i] = el
                }
              }}
              className="absolute left-1/2 top-1/2 w-52 h-52 border-2 border-dotted border-white rounded-full flex items-center justify-center"
            >
              <div className="circle-content transition-opacity duration-500">
                {circleData[i]?.image ? (
                  <img 
                    src={circleData[i].image} 
                    alt="" 
                    className="w-32 h-32 object-cover rounded-full"
                  />
                ) : (
                  <span className={`${italiana.className} text-white text-center font-medium px-4 text-5xl`}>
                    {circleData[i]?.text || ''}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
