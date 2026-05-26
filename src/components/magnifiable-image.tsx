"use client";

import { useState, MouseEvent, useEffect } from "react";
import { createPortal } from "react-dom";
import Image, { ImageProps } from "next/image";

interface MagnifiableImageProps extends ImageProps {
  containerClassName?: string;
}

export default function MagnifiableImage({ containerClassName = "", className, ...props }: MagnifiableImageProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const srcString = typeof props.src === 'string' ? props.src : (props.src as any)?.src;

  return (
    <div
      className={`relative w-full h-full ${containerClassName}`}
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
    >
      <Image className={className} {...props} />

      {mounted && showMagnifier && srcString && createPortal(
        <div
          className="pointer-events-none fixed z-9999 bg-zinc-100 dark:bg-zinc-900 shadow-2xl border border-zinc-200/50 dark:border-zinc-800/50 rounded-xl overflow-hidden"
          style={{
            width: "350px",
            height: "350px",
            left: `${cursorPosition.x + 15}px`,
            top: `${cursorPosition.y + 15}px`,
            backgroundImage: `url(${srcString})`,
            backgroundPosition: `${position.x}% ${position.y}%`,
            backgroundSize: "300%",
            backgroundRepeat: "no-repeat",
          }}
        />,
        document.body
      )}
    </div>
  );
}
