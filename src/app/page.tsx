import BackgroundVideo from "@/components/BackgroundVideo";
import { Italiana , Italianno } from 'next/font/google';
import { HiOutlineMenuAlt4 } from "react-icons/hi";


const italiana = Italiana({
  weight: ['400'],
  subsets: ['latin'],
})

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
         <h1 className={`${italiana.className} text-white text-[175px] font-bold opacity-80`}>
            SUITS ARE COOL
          </h1>
          <div className="flex flex-col items-center justify-center">
          <h2 className={`${italianno.className} text-white text-[120px] font-bold`}>
            So are You...
          </h2>
          </div>
          </div>
    </div>
  );
}
