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
            
      
      <div className="relative z-10 w-screen">
        <div className="pt-8 px-6 lg:px-10">
          <div className="grid grid-cols-3 items-center w-full bg-red-500">
            
            <div className="flex justify-start">
              <MenuIcon className="text-black" />
            </div>
            
           
            <div className="flex justify-center">
              <h1 className={`${italianno.className} text-black text-4xl lg:text-5xl font-bold`}>
                Suits
              </h1>
            </div>
            
           
            <div className="flex justify-end">
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