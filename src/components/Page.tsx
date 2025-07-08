import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";

interface PageProps {
  children: React.ReactNode;
  direction: "bottom" | "left" | "right";
  pageIndex: number;
  totalPages: number;
  className?: string;
}

export default function Page({ 
  children, 
  direction, 
  pageIndex, 
  totalPages, 
  className = "" 
}: PageProps) {
  const pageRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start end", "end start"]
  });

  // Animation for the current page coming in
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

  // Transform for page entry animation
  const y = useTransform(
    scrollYProgress, 
    [0.1, 0.5], 
    direction === "bottom" ? ["100%", "0%"] : ["0%", "0%"]
  );
  
  const x = useTransform(
    scrollYProgress, 
    [0.1, 0.5], 
    direction === "left" ? ["-100%", "0%"] : 
    direction === "right" ? ["100%", "0%"] : ["0%", "0%"]
  );

  // Scale and blur for when this page becomes "previous" (triggered when scrolling continues)
  const scale = useTransform(
    scrollYProgress,
    [0.5, 1],
    [1, 0.9] // Zoom out when next page comes in
  );

  const blur = useTransform(
    scrollYProgress,
    [0.5, 1],
    [0, 3] // Blur when next page comes in
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.5, 1],
    [0, 0, 1, 1] // Stay invisible until animation starts
  );

  // Z-index - higher pageIndex should be on top
  const zIndex = pageIndex + 10;

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
          zIndex
        }}
        initial={getInitialTransform()}
      >
        {children}
      </motion.div>
    </div>
  );
} 