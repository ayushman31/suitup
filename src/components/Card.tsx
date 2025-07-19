"use client"
import React, { useRef, useEffect, useState, CSSProperties } from "react";
import { gsap } from "gsap";
import { Italiana } from "next/font/google";
import { Italianno } from "next/font/google";

const italiana = Italiana({
  weight: ['400'],
  subsets: ['latin'],
})

const italianno = Italianno({
  weight: ['400'],
  subsets: ['latin'],
})


interface CardProps {
  firstContent: React.ReactNode;
  secondContent: React.ReactNode;
  gridSize?: number;
  pixelColor?: string;
  animationStepDuration?: number;
  className?: string;
  style?: CSSProperties;
  aspectRatio?: string;
  name?: string;
  description?: string;
  price?: string;
}

const Card: React.FC<CardProps> = ({
  firstContent,
  secondContent,
  gridSize = 50,
  pixelColor = "currentColor",
  animationStepDuration = 0.2,
  className = "",
  style = {},
  aspectRatio = "100%",
  name,
  description,
  price,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pixelGridRef = useRef<HTMLDivElement | null>(null);
  const activeRef = useRef<HTMLDivElement | null>(null);
  const delayedCallRef = useRef<gsap.core.Tween | null>(null);

  const [isActive, setIsActive] = useState<boolean>(false);

  const isTouchDevice =
    typeof window !== "undefined" && "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    typeof window !== "undefined" ? window.matchMedia("(pointer: coarse)").matches : false;

  useEffect(() => {
    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    pixelGridEl.innerHTML = "";

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixelated-image-card__pixel");
        pixel.classList.add("absolute", "hidden");
        pixel.style.backgroundColor = pixelColor;

        const size = 100 / gridSize;
        pixel.style.width = `${size}%`;
        pixel.style.height = `${size}%`;
        pixel.style.left = `${col * size}%`;
        pixel.style.top = `${row * size}%`;

        pixelGridEl.appendChild(pixel);
      }
    }
  }, [gridSize, pixelColor]);

  const animatePixels = (activate: boolean): void => {
    setIsActive(activate);

    const pixelGridEl = pixelGridRef.current;
    const activeEl = activeRef.current;
    if (!pixelGridEl || !activeEl) return;

    const pixels = pixelGridEl.querySelectorAll<HTMLDivElement>(
      ".pixelated-image-card__pixel"
    );
    if (!pixels.length) return;

    gsap.killTweensOf(pixels);
    if (delayedCallRef.current) {
      delayedCallRef.current.kill();
    }

    gsap.set(pixels, { display: "none" });

    const totalPixels = pixels.length;
    const staggerDuration = animationStepDuration / totalPixels;

    gsap.to(pixels, {
      display: "block",
      duration: 0,
      stagger: {
        each: staggerDuration,
        from: "random",
      },
    });

    delayedCallRef.current = gsap.delayedCall(animationStepDuration, () => {
      activeEl.style.display = activate ? "block" : "none";
      activeEl.style.pointerEvents = activate ? "none" : "";
    });

    gsap.to(pixels, {
      display: "none",
      duration: 0,
      delay: animationStepDuration,
      stagger: {
        each: staggerDuration,
        from: "random",
      },
    });
  };

  const handleMouseEnter = (): void => {
    if (!isActive) animatePixels(true);
  };
  const handleMouseLeave = (): void => {
    if (isActive) animatePixels(false);
  };
  const handleClick = (): void => {
    animatePixels(!isActive);
  };

  return (
    <div
      ref={containerRef}
      className={`
        ${className}
        bg-[#222]
        text-white
        border-2
        border-white
        w-full
        max-w-full
        relative
        overflow-hidden
        flex
        flex-col
        shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]
        cursor-pointer
      `}
      style={style}
      onMouseEnter={!isTouchDevice ? handleMouseEnter : undefined}
      onMouseLeave={!isTouchDevice ? handleMouseLeave : undefined}
      onClick={isTouchDevice ? handleClick : undefined}
    >
      {/* Image/Content Section */}
      <div className="relative overflow-hidden aspect-[3/4]">
        <div style={{ paddingTop: aspectRatio }} />

        <div className="absolute inset-0 w-full h-full">{firstContent}</div>

        <div
          ref={activeRef}
          className="absolute inset-0 w-full h-full z-[2]"
          style={{ display: "none" }}
        >
          {secondContent}
        </div>

        <div
          ref={pixelGridRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-[3]"
        />
      </div>

      {/* Text Section */}
      {(name || description || price) && (
        <div className="p-4 bg-white text-black border-t-2 border-white">
          {name && (
            <h3 className={`${italiana.className} font-bold text-xl mb-2 truncate`}>{name}</h3>
          )}
          {description && (
            <p className={`${italiana.className} text-md text-gray-600 mb-2 line-clamp-2`}>{description}</p>
          )}
          {price && (
            <p className={`${italianno.className} font-bold text-4xl text-black`}>{price}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
