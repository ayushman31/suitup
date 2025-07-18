import Card from "@/components/Card";
import MenuIcon from "@/components/MenuIcon";
import { Italianno } from "next/font/google";


const italianno = Italianno({
  weight: ['400'],
  subsets: ['latin'],
});


const Suits = () => {
  return (
    <div className="min-h-screen bg-white fixed inset-0 overflow-auto">
      
      <MenuIcon className="text-black" />
      
      {/* pt-24 accounts for MenuIcon's fixed positioning + padding */}
      <div className="pt-20 m-10">
        <div className="container lg:mx-10 lg:px-4 md:mx-10 sm:mx-20  px-4 ">
          <h1 className={`${italianno.className} text-black text-3xl font-bold`}>Suits</h1>
        </div>


        {/* card container - responsive grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10 max-w-7xl mx-auto">
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
            price="$929"
          />
          <Card 
            firstContent={<img src="https://cdn.suitsupply.com/image/upload/b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,w_2600/b_rgb:efefef,c_pad,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/suits/default/P7043_29.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            secondContent={<img src="https://cdn.suitsupply.com/image/upload/ar_10:21,b_rgb:efefef,bo_200px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,h_1728,w_1440,f_auto,q_auto,fl_progressive/products/suits/default/Summer/P7043_51.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            name="Navy Relaxed Fit Roma Suit"
            description="Summer Pure Wool by Delfino, Italy"
            price="$929"
          />
          <Card 
            firstContent={<img src="https://cdn.suitsupply.com/image/upload/b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,w_2600/b_rgb:efefef,c_pad,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/suits/default/P7043_29.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            secondContent={<img src="https://cdn.suitsupply.com/image/upload/ar_10:21,b_rgb:efefef,bo_200px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,h_1728,w_1440,f_auto,q_auto,fl_progressive/products/suits/default/Summer/P7043_51.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            name="Navy Relaxed Fit Roma Suit"
            description="Summer Pure Wool by Delfino, Italy"
            price="$929"
          />
          <Card 
            firstContent={<img src="https://cdn.suitsupply.com/image/upload/b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,w_2600/b_rgb:efefef,c_pad,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/suits/default/P7043_29.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            secondContent={<img src="https://cdn.suitsupply.com/image/upload/ar_10:21,b_rgb:efefef,bo_200px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,h_1728,w_1440,f_auto,q_auto,fl_progressive/products/suits/default/Summer/P7043_51.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            name="Navy Relaxed Fit Roma Suit"
            description="Summer Pure Wool by Delfino, Italy"
            price="$929"
          />
          <Card 
            firstContent={<img src="https://cdn.suitsupply.com/image/upload/b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,w_2600/b_rgb:efefef,c_pad,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/suits/default/P7043_29.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            secondContent={<img src="https://cdn.suitsupply.com/image/upload/ar_10:21,b_rgb:efefef,bo_200px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,h_1728,w_1440,f_auto,q_auto,fl_progressive/products/suits/default/Summer/P7043_51.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            name="Navy Relaxed Fit Roma Suit"
            description="Summer Pure Wool by Delfino, Italy"
            price="$929"
          />
          <Card 
            firstContent={<img src="https://cdn.suitsupply.com/image/upload/b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,w_2600/b_rgb:efefef,c_pad,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/suits/default/P7043_29.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            secondContent={<img src="https://cdn.suitsupply.com/image/upload/ar_10:21,b_rgb:efefef,bo_200px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,h_1728,w_1440,f_auto,q_auto,fl_progressive/products/suits/default/Summer/P7043_51.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            name="Navy Relaxed Fit Roma Suit"
            description="Summer Pure Wool by Delfino, Italy"
            price="$929"
          />
          <Card 
            firstContent={<img src="https://cdn.suitsupply.com/image/upload/b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,w_2600/b_rgb:efefef,c_pad,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/suits/default/P7043_29.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            secondContent={<img src="https://cdn.suitsupply.com/image/upload/ar_10:21,b_rgb:efefef,bo_200px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,h_1728,w_1440,f_auto,q_auto,fl_progressive/products/suits/default/Summer/P7043_51.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            name="Navy Relaxed Fit Roma Suit"
            description="Summer Pure Wool by Delfino, Italy"
            price="$929"
          />
          <Card 
            firstContent={<img src="https://cdn.suitsupply.com/image/upload/b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,w_2600/b_rgb:efefef,c_pad,dpr_1,w_768,h_922,f_auto,q_auto,fl_progressive/products/suits/default/P7043_29.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            secondContent={<img src="https://cdn.suitsupply.com/image/upload/ar_10:21,b_rgb:efefef,bo_200px_solid_rgb:efefef,c_pad,g_north,w_2600/b_rgb:efefef,c_lfill,g_north,dpr_1,h_1728,w_1440,f_auto,q_auto,fl_progressive/products/suits/default/Summer/P7043_51.jpg" alt="Classic Black Suit" className="w-full h-full object-cover" />} 
            name="Navy Relaxed Fit Roma Suit"
            description="Summer Pure Wool by Delfino, Italy"
            price="$929"
          />
          
          
        </div>
      </div>
    </div>
  );
};

export default Suits;