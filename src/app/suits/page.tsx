import Card from "@/components/Card";
import MenuIcon from "@/components/MenuIcon";
import Search from "@/components/Search";
import { Italianno } from "next/font/google";


const italianno = Italianno({
  weight: ['400'],
  subsets: ['latin'],
});


const Suits = () => {
  return (
    <div className="min-h-screen bg-white fixed inset-0 overflow-auto">
      {/* Updated: Better spacing to prevent overlap */}
      <div className="pt-8 px-6 lg:px-10">
        <div className="flex items-center w-full justify-between">
          <MenuIcon className="text-black flex-shrink-0" />
          <h1 className={`${italianno.className} text-black text-2xl lg:text-3xl font-bold flex-grow text-center`}>Suits</h1>
          <div className="flex-shrink-0">
            <Search className="relative" />
          </div>
        </div>
      </div>

      {/* Card container - moved down with adjusted spacing */}
      <div className="px-6 lg:px-10 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
          <Card 
            firstContent={<img src="https://cdn.suitsupply.com/image/upload/b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,w_2600/b_rgb:efefef,c_pad,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/suits/default/P7043_29.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            secondContent={<img src="https://cdn.suitsupply.com/image/upload/ar_10:21,b_rgb:efefef,bo_200px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,h_1728,w_1440,f_auto,q_auto,fl_progressive/products/suits/default/Summer/P7043_51.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            name="Navy Relaxed Fit Roma Suit"
            description="Summer Pure Wool by Delfino, Italy"
            price="$929"
          />
          <Card 
            firstContent={<img src="https://cdn.suitsupply.com/image/upload/b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,w_2600/b_rgb:efefef,c_pad,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/suits/default/P7042_29.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            secondContent={<img src="https://cdn.suitsupply.com/image/upload/ar_10:21,b_rgb:efefef,bo_200px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/suits/default/Summer/P7042_52.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            name="Dark Brown Relaxed Fit Roma Suit"
            description="Summer Pure Wool by Delfino, Italy"
            price="$929"
          />
          <Card 
            firstContent={<img src="https://cdn.suitsupply.com/image/upload/b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,w_2600/b_rgb:efefef,c_pad,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/suits/default/P7063_29.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            secondContent={<img src="https://cdn.suitsupply.com/image/upload/ar_10:21,b_rgb:efefef,bo_200px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/suits/default/Summer/P7063_51.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            name="Mid Brown Tailored Fit Milano Suit"
            description="Summer Cotton Linen by Emmetex, Italy"
            price="$799"
          />
          <Card 
            firstContent={<img src="https://cdn.suitsupply.com/image/upload/b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,w_2600/b_rgb:efefef,c_pad,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/suits/default/P7053_29.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            secondContent={<img src="https://cdn.suitsupply.com/image/upload/ar_10:21,b_rgb:efefef,bo_200px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/suits/default/Summer/P7053_51.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            name="Light Yellow Tailored Fit Milano Suit"
            description="All Season Wool Mohair by Vitale Barberis Canonico, Italy"
            price="$929"
          />
          <Card 
            firstContent={<img src="https://cdn.suitsupply.com/image/upload/b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,w_2600/b_rgb:efefef,c_pad,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/Mix_Match/default/C7062-S_29.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            secondContent={<img src="https://cdn.suitsupply.com/image/upload/ar_10:21,b_rgb:efefef,bo_200px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/Mix_Match/default/Summer/C7062-S_1.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            name="Light Taupe Tailored Fit Havana Suit"
            description="Summer Linen Cotton by Di Sondrio, Italy"
            price="$798"
          />
          <Card 
            firstContent={<img src="https://cdn.suitsupply.com/image/upload/b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,w_2600/b_rgb:efefef,c_pad,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/suits/default/P7060_29.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            secondContent={<img src="https://cdn.suitsupply.com/image/upload/ar_10:21,b_rgb:efefef,bo_200px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/suits/default/Summer/P7060_51.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            name="Mid Brown Tailored Fit Milano Suit"
            description="Summer Pure Linen by Beste, Italy"
            price="$799"
          />
          <Card 
            firstContent={<img src="https://cdn.suitsupply.com/image/upload/b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,w_2600/b_rgb:efefef,c_pad,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/suits/default/P7006_29.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            secondContent={<img src="https://cdn.suitsupply.com/image/upload/ar_10:21,b_rgb:efefef,bo_200px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/suits/default/Summer/P7006_51.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            name="Light Blue Tailored Fit Havana Suit"
            description="Summer Wool Silk Linen by E.Thomas, Italy"
            price="$959"
          />
          <Card 
            firstContent={<img src="https://cdn.suitsupply.com/image/upload/b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,w_2600/b_rgb:efefef,c_pad,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/suits/default/P7012_29.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            secondContent={<img src="https://cdn.suitsupply.com/image/upload/ar_10:21,b_rgb:efefef,bo_200px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/suits/default/Summer/P7012_1.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            name="Green Tailored Fit Havana Suit"
            description="Summer Wool Silk Linen by E.Thomas, Italy"
            price="$959"
          />
          <Card 
            firstContent={<img src="https://cdn.suitsupply.com/image/upload/b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,w_2600/b_rgb:efefef,c_pad,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/Suits/default/P6901_29.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            secondContent={<img src="https://cdn.suitsupply.com/image/upload/ar_10:21,b_rgb:efefef,bo_200px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/Suits/default/Winter/P6901_1.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            name="Navy Relaxed Fit Roma Suit"
            description="All Season Wrinkle-Free 4-Ply Wool by Rogna, Italy"
            price="$929"
          />
          <Card 
            firstContent={<img src="https://cdn.suitsupply.com/image/upload/b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,w_2600/b_rgb:efefef,c_pad,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/suits/default/P6940_29.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            secondContent={<img src="https://cdn.suitsupply.com/image/upload/ar_10:21,b_rgb:efefef,bo_200px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/suits/default/Winter/P6940_1.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            name="Mid Grey Checked Tailored Fit Milano Suit"
            description="Winter Wool Cashmere by E.Thomas, Italy"
            price="$959"
          />
          
          
        </div>
      </div>
    </div>
  );
};

export default Suits;