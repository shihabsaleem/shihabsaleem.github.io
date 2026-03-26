"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { IoCloseOutline, IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface LightboxProps {
  images: { src: string; alt: string }[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, currentIndex, onClose, onNavigate }: LightboxProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

  const goNext = useCallback(() => {
    if (hasNext) {
      gsap.to(imageRef.current, { x: -30, opacity: 0, duration: 0.2, ease: "power2.in", onComplete: () => {
        onNavigate(currentIndex + 1);
        requestAnimationFrame(() => {
          gsap.fromTo(imageRef.current, { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" });
        });
      }});
    }
  }, [hasNext, currentIndex, onNavigate]);

  const goPrev = useCallback(() => {
    if (hasPrev) {
      gsap.to(imageRef.current, { x: 30, opacity: 0, duration: 0.2, ease: "power2.in", onComplete: () => {
        onNavigate(currentIndex - 1);
        requestAnimationFrame(() => {
          gsap.fromTo(imageRef.current, { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" });
        });
      }});
    }
  }, [hasPrev, currentIndex, onNavigate]);


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" });
      gsap.fromTo(imageRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "expo.out", delay: 0.1 });
    });

    document.body.style.overflow = "hidden";

    return () => {
      ctx.revert();
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, goNext, goPrev]);

  const handleClose = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    gsap.to(imageRef.current, { scale: 0.9, opacity: 0, duration: 0.3, ease: "power2.in" });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, ease: "power2.in", onComplete: onClose });
  };

  const current = images[currentIndex];

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-12 cursor-zoom-out"
      onClick={() => handleClose()}
    >
      {/* Close */}
      <button
        onClick={(e) => handleClose(e)}
        className="absolute top-8 right-8 text-white/70 hover:text-white text-4xl transition-all duration-300 z-[110] hover:rotate-90"
      >
        <IoCloseOutline />
      </button>

      {/* Prev */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white text-2xl transition-all duration-300 backdrop-blur-sm cursor-pointer"
        >
          <IoChevronBackOutline />
        </button>
      )}

      {/* Next */}
      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white text-2xl transition-all duration-300 backdrop-blur-sm cursor-pointer"
        >
          <IoChevronForwardOutline />
        </button>
      )}

      {/* Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[110] text-white/50 text-xs font-mono tracking-widest">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Image */}
      <div
        ref={imageRef}
        className="relative w-full h-full flex items-center justify-center pointer-events-none"
      >
        <div className="relative max-w-full max-h-full pointer-events-auto cursor-default" onClick={(e) => e.stopPropagation()}>
          <Image
            src={current.src}
            alt={current.alt}
            width={1920}
            height={1080}
            className="object-contain max-h-[85vh] w-auto rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            quality={100}
            priority
          />
        </div>
      </div>
    </div>
  );
}
