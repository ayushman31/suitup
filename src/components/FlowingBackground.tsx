import React from "react";
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

interface FlowingBackgroundProps {
  texts: string[];
  opacity: number;
}



const FlowingBackground: React.FC<FlowingBackgroundProps> = ({ texts, opacity = 1 }) => {
  if (texts.length !== 4) {
    console.warn("FlowingBackground expects exactly 4 texts.");
    return null;
  }

  return (
    <div className="absolute fixed inset-0 z-0 w-full h-full overflow-hidden">
      <div className="flex flex-col h-full m-0 p-0">
        {texts.map((text, idx) => (
          <div
            key={idx} // This key is already unique (per row)
            className="flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_#fff]"
          >
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-white">
              <div
                className={`h-full flex items-center whitespace-nowrap will-change-transform ${
                  idx % 2 === 0
                    ? "animate-[marquee_15s_linear_infinite]"
                    : "animate-[marquee-reverse_15s_linear_infinite]"
                }`}
              >
                {getRepeatedContent(text, opacity)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const getRepeatedContent = (text: string, opacity: number) => {
  // Create 20 repetitions with unique keys (0 to 19) for seamless looping
  return Array.from({ length: 20 }).map((_, i) => (
    <span
      key={i} // Unique key across all repetitions
      className={`${italianno.className}  font-normal text-[4vh] leading-[1.2] p-[1vh_2vw_0] text-[#060010]`}
      style={{ opacity }}
    >
      {text}
    </span>
  ));
};

export default FlowingBackground;
