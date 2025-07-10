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
import MenuIcon from "@/components/MenuIcon";

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
        {/* menu icon */}
      <MenuIcon />

      {/* landing page */}
      <div ref={landingRef} className="relative h-screen w-full">
        <motion.div style={{ opacity: videoOpacity }}>
          <BackgroundVideo />
        </motion.div>
        
        {/* main text of the landing page */}
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

      {/* animated circles */}
      <AnimatedCircles />

      
      <Page 
        direction="bottom" 
        pageIndex={1} 
        totalPages={3}
        className="bg-black"
        image="https://cdn.suitsupply.com/image/upload/f_auto,h_2363,q_auto,w_2300/suitsupply/homepage/ss25/week22/02-2_desktop_half_2560x2630.jpg"
        imageAlt="Elegant gentleman in a perfectly tailored suit"
        heading="Suits"
        tagline="You can’t put a price on a good suit."
        buttonText="I wanna suit up !"
        imagePosition="left"
        onButtonClick={() => console.log('Explore Collection clicked')}
      />

      <Page 
        direction="left" 
        pageIndex={2} 
        totalPages={3}
        className="bg-black"
        image="https://cdn.suitsupply.com/image/upload/f_auto,h_1541,q_auto,w_3000/suitsupply/homepage/ss25/week22/03_desktop_5120x2630.jpg"
        imageAlt="Premium fabric textures and materials"
        heading="Polos"
        tagline="Where collar meets character. Tailored for those who lead quietly."
        buttonText="Get smarter !"
        imagePosition="right"
        onButtonClick={() => console.log('View Fabrics clicked')}
      />

      <Page 
        direction="right" 
        pageIndex={3} 
        totalPages={3}
        className="bg-black"
        image="https://cdn.suitsupply.com/image/upload/f_auto,h_1229,q_auto,w_768/suitsupply/homepage/ss25/week22/04_mobile_1300x2080-2.jpg"
        imageAlt="Bespoke tailoring and personal styling"
        heading="Linen Shirts"
        tagline="Lightweight. Heavy on style. City heat, countryside ease."
        buttonText="Get elegant !"
        imagePosition="left"
        onButtonClick={() => console.log('Book Consultation clicked')}
      />
      
    </div>
  );
}
