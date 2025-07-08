"use client"
import BackgroundVideo from "@/components/BackgroundVideo";
import BlurText from "@/components/BlurText";
import { TextEffect } from "@/components/text-effect";
import { Italianno } from 'next/font/google';
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import AnimatedCircles from "@/components/AnimatedCircles";
import Page from "@/components/Page";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";




const italianno = Italianno({
  weight: ['400'],
  subsets: ['latin'],
})


export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const landingRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: landingRef,
    offset: ["start start", "end start"]
  })

  const videoOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.1])

      return (
      <div ref={containerRef} className="relative">
        {/* Sticky menu icon */}
      <div className="fixed top-0 left-0 z-50 flex items-center justify-between p-10">
        <HiOutlineMenuAlt4 className="text-white text-2xl" />
      </div>

      {/* First section - Landing page content */}
      <div ref={landingRef} className="relative h-screen w-full">
        <motion.div style={{ opacity: videoOpacity }}>
          <BackgroundVideo />
        </motion.div>
        
        {/* Main text of the landing page */}
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center">
          <BlurText
            text="SUITS ARE COOL"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-[175px] opacity-80"
          />

          <div className="flex flex-col items-center justify-center">
            <TextEffect preset='fade-in-blur' delay={1.2} speedReveal={1.1} speedSegment={0.3} className={`${italianno.className} text-white text-[120px] font-bold`}>
              So are You...
            </TextEffect>
          </div>
        </div>
      </div>

      {/* Second section - Animated Circles */}
      <AnimatedCircles />

      {/* Third section - Page 1 (bottom to up) */}
      <Page 
        direction="bottom" 
        pageIndex={1} 
        totalPages={3}
        className="bg-black"
      >
        <div className="flex flex-col items-center justify-center h-full text-white p-8">
          <h1 className="text-6xl font-bold mb-8 text-center">
            Craftsmanship
          </h1>
          <p className="text-xl text-center max-w-4xl leading-relaxed opacity-90">
            Every suit is meticulously crafted with attention to detail, 
            ensuring the perfect fit and timeless elegance that speaks to your personality.
          </p>
        </div>
      </Page>

      {/* Fourth section - Page 2 (left to right) */}
      <Page 
        direction="left" 
        pageIndex={2} 
        totalPages={3}
        className="bg-black"
      >
        <div className="flex flex-col items-center justify-center h-full text-white p-8">
          <h1 className="text-6xl font-bold mb-8 text-center">
            Premium Materials
          </h1>
          <p className="text-xl text-center max-w-4xl leading-relaxed opacity-90">
            We source only the finest fabrics from around the world, 
            combining traditional techniques with modern innovation for exceptional quality.
          </p>
        </div>
      </Page>

      {/* Fifth section - Page 3 (right to left) */}
      <Page 
        direction="right" 
        pageIndex={3} 
        totalPages={3}
        className="bg-black"
      >
        <div className="flex flex-col items-center justify-center h-full text-white p-8">
          <h1 className="text-6xl font-bold mb-8 text-center">
            Personal Style
          </h1>
          <p className="text-xl text-center max-w-4xl leading-relaxed opacity-90">
            Express your unique style with our bespoke tailoring service. 
            From classic elegance to modern sophistication, we bring your vision to life.
          </p>
        </div>
      </Page>
      
    </div>
  );
}
