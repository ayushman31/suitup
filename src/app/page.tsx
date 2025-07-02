import BackgroundVideo from "@/components/BackgroundVideo";
import BlurText from "@/components/BlurText";
import { TextEffect } from "@/components/text-effect";
import { Italianno } from 'next/font/google';
import { HiOutlineMenuAlt4 } from "react-icons/hi";



const italianno = Italianno({
  weight: ['400'],
  subsets: ['latin'],
})


export default function Home() {
  return (
    <div>
      
        <BackgroundVideo />

        <div className="absolute top-0 left-0 flex items-center justify-between p-4">
          <HiOutlineMenuAlt4 className="text-white text-2xl" />
        </div>
        
        <div className="absolute w-full h-full flex flex-col items-center justify-center">
        <BlurText
          text="SUITS ARE COOL"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-[175px]"
        />
        
          <div className="flex flex-col items-center justify-center">
          <TextEffect preset='fade-in-blur' delay={1.2} speedReveal={1.1} speedSegment={0.3} className={`${italianno.className} text-white text-[120px] font-bold`}>
            So are You...
          </TextEffect>
          </div>
          </div>
    </div>
  );
}
