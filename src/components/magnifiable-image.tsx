"use client";

import { useState, MouseEvent, useEffect } from "react";
import { createPortal } from "react-dom";
import Image, { ImageProps } from "next/image";

interface MagnifiableImageProps extends ImageProps {
  containerClassName?: string;
}

export default function MagnifiableImage({ containerClassName = "", className, ...props }: MagnifiableImageProps) {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [imgSize, setImgSize] = useState({ w: 0, h: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () =>
      setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const MAG_SIZE = 350;
  const ZOOM = 2.5;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    
    // Mouse position relative to the image container
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    setImgSize({ w: width, h: height });
    setMousePos({ x, y });

    // Center the magnifier box exactly on the cursor
    let magX = e.clientX - (MAG_SIZE / 2);
    let magY = e.clientY - (MAG_SIZE / 2);
    
    // Keep the magnifier box entirely within the viewport
    const viewportW = document.documentElement.clientWidth;
    const viewportH = document.documentElement.clientHeight;
    
    magX = Math.max(0, Math.min(viewportW - MAG_SIZE, magX));
    magY = Math.max(0, Math.min(viewportH - MAG_SIZE, magY));
    
    setCursorPosition({ x: magX, y: magY });
  };

  const srcString = typeof props.src === 'string' ? props.src : (props.src as any)?.src;

  if (isMobile) {
    return (
      <div className={`relative w-full h-full ${containerClassName}`}>
        <Image className={className} {...props} />
      </div>
    );
  }

  // Calculate inner image dimensions and position
  const innerW = imgSize.w * ZOOM;
  const innerH = imgSize.h * ZOOM;

  let innerLeft = (MAG_SIZE / 2) - (mousePos.x * ZOOM);
  let innerTop = (MAG_SIZE / 2) - (mousePos.y * ZOOM);

  // Clamp the inner image so it never reveals empty background space inside the box
  if (innerW >= MAG_SIZE) {
    innerLeft = Math.max(MAG_SIZE - innerW, Math.min(0, innerLeft));
  } else {
    innerLeft = (MAG_SIZE - innerW) / 2;
  }

  if (innerH >= MAG_SIZE) {
    innerTop = Math.max(MAG_SIZE - innerH, Math.min(0, innerTop));
  } else {
    innerTop = (MAG_SIZE - innerH) / 2;
  }

  return (
    <div
      className={`relative w-full h-full cursor-none hide-global-cursor ${containerClassName}`}
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
    >
      <Image className={className} {...props} />

      {mounted && showMagnifier && srcString && createPortal(
        <div
          className="pointer-events-none fixed z-9990 bg-white dark:bg-zinc-900 shadow-2xl border border-zinc-200/50 dark:border-zinc-800/50 rounded-xl overflow-hidden"
          style={{
            width: `${MAG_SIZE}px`,
            height: `${MAG_SIZE}px`,
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
        >
          <div
            style={{
              position: "absolute",
              width: `${innerW}px`,
              height: `${innerH}px`,
              left: `${innerLeft}px`,
              top: `${innerTop}px`,
              backgroundImage: `url(${srcString})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>,
        document.body
      )}
    </div>
  );
}
