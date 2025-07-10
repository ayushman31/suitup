"use client"
import { useRef, useState } from "react";
import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "motion/react";
import { Italiana } from "next/font/google";
import { Italianno } from "next/font/google";
import { useRouter } from "next/navigation";

const italiana = Italiana({
  weight: ["400"],
  subsets: ["latin"],
});

const italianno = Italianno({
  weight: ["400"],
  subsets: ["latin"],
});

interface PageProps {
  children?: React.ReactNode;
  direction: "bottom" | "left" | "right";
  pageIndex: number;
  totalPages: number;
  className?: string;

  image?: string;
  imageAlt?: string;
  heading?: string;
  tagline?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  imagePosition?: "left" | "right";
}

export default function Page({
  children,
  direction,
  pageIndex,
  totalPages,
  className = "",

  image,
  imageAlt = "",
  heading,
  tagline,
  buttonText,
  onButtonClick,
  imagePosition = "left",
}: PageProps) {
  const pageRef = useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start end", "end start"],
  });

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      router.push("/suits"); // Replace with your target route
    }, 1000);
  };

  const getInitialTransform = () => {
    switch (direction) {
      case "bottom":
        return { y: "100%", x: 0 };
      case "left":
        return { y: 0, x: "-100%" };
      case "right":
        return { y: 0, x: "100%" };
      default:
        return { y: 0, x: 0 };
    }
  };

  const y = useTransform(
    scrollYProgress,
    [0.1, 0.5],
    direction === "bottom" ? ["100%", "0%"] : ["0%", "0%"]
  );

  const x = useTransform(
    scrollYProgress,
    [0.1, 0.5],
    direction === "left"
      ? ["-100%", "0%"]
      : direction === "right"
      ? ["100%", "0%"]
      : ["0%", "0%"]
  );

  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.9]);
  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 3]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.5, 1],
    [1, 1, 1, 0]
  );

  const zIndex = pageIndex + 10;

  const renderTwoColumnContent = () => {
    if (!image || !heading) return children;

    const imageSection = (
      <motion.div
        className="w-full h-full relative overflow-hidden flex items-center justify-center"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={image}
          alt={imageAlt}
          className="w-3/4 h-3/4 object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>
    );

    const contentSection = (
      <motion.div
        className="flex flex-col justify-center h-full p-12 lg:p-16"
        initial={{ opacity: 0, x: imagePosition === "left" ? 50 : -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className={`${italiana.className} text-white text-5xl lg:text-7xl font-bold mb-6 leading-tight`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {heading}
        </motion.h1>

        {tagline && (
          <motion.p
            className="text-white/90 text-lg lg:text-xl leading-relaxed mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {tagline}
          </motion.p>
        )}

        {buttonText && (
          <>
            <AnimatePresence>
              {!clicked && (
                <motion.button
                  onClick={handleClick}
                  className={`self-start px-8 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider relative z-20`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  {buttonText}
                </motion.button>
              )}
            </AnimatePresence>

            {clicked && (
              <motion.div
                className="fixed top-0 left-0 bg-black z-50"
                initial={{
                  width: "8rem",
                  height: "4rem",
                  borderRadius: "0.5rem",
                  top: "50%",
                  left: "50%",
                  x: "-50%",
                  y: "-50%",
                }}
                animate={{
                  width: "100vw",
                  height: "100vh",
                  borderRadius: "0rem",
                  x: "-50%",
                  y: "-50%",
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            )}
          </>
        )}
      </motion.div>
    );

    return (
      <div className="h-full w-full flex">
        {imagePosition === "left" ? (
          <>
            <div className="w-1/2 h-full">{imageSection}</div>
            <div className="w-1/2 h-full bg-black">{contentSection}</div>
          </>
        ) : (
          <>
            <div className="w-1/2 h-full bg-black">{contentSection}</div>
            <div className="w-1/2 h-full">{imageSection}</div>
          </>
        )}
      </div>
    );
  };

  return (
    <div ref={pageRef} className="h-screen w-full relative overflow-hidden">
      <motion.div
        className={`fixed inset-0 h-screen w-full ${className}`}
        style={{
          x,
          y,
          scale,
          filter: `blur(${blur}px)`,
          opacity,
          zIndex,
        }}
        initial={getInitialTransform()}
      >
        {renderTwoColumnContent()}
      </motion.div>
    </div>
  );
}
