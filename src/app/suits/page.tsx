import FlowingBackground from "@/components/FlowingBackground";
import MenuIcon from "@/components/MenuIcon";
import Search from "@/components/Search";
import SuitsCardsContainer from "@/components/SuitsCardsContainer";
import { Italianno } from "next/font/google";
import { Italiana } from "next/font/google";
const italiana = Italiana({
  weight: ['400'],
  subsets: ['latin'],
})

const italianno = Italianno({
  weight: ['400'],
  subsets: ['latin'],
});


const Suits = () => {
  return (
    <div className="min-h-screen bg-white fixed inset-0 overflow-auto">

      <FlowingBackground
        texts={["Tailored & Timeless", "Elegance & Edge", "Presence & Precision", "Sharpness & Soul"]}
        opacity={0.1}
      />
            
      
              {/* Fixed MenuIcon - positioned separately */}
        <MenuIcon className="text-black" />
        
        <div className="relative z-10 w-screen">
          <div className="pt-8 px-6 lg:px-10">
           <div className="flex items-center justify-between w-full">
             {/* Left side - Suits title with left margin to avoid overlap */}
             <div className="ml-16 sm:ml-20">
               <h1 className={`${italianno.className} text-black text-4xl sm:text-4xl lg:text-5xl font-bold`}>
                 Suits
               </h1>
             </div>
             
             {/* Right side - Search component */}
             <div className="flex-shrink-0">
               <Search className="relative" />
             </div>
           </div>
          </div>

        <SuitsCardsContainer />
      </div>
    </div>
  );
};

export default Suits;