"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function GlobalCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const [activeCursor, setActiveCursor] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            // Instantly follow with inner dot (micro-smoothing)
            if (dotRef.current) {
                gsap.to(dotRef.current, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.05,
                });
            }
            // Trail fluidly with outer ring
            if (ringRef.current) {
                gsap.to(ringRef.current, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.6,
                    ease: "power3.out",
                });
            }
        };

        // Setup listeners
        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    useEffect(() => {
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Activate cursor scaling if hovering interactable elements
            const isClickable =
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.closest("a") !== null ||
                target.closest("button") !== null ||
                target.closest(".cursor-pointer") !== null ||
                target.classList.contains("cursor-pointer") ||
                target.closest('[data-cursor="hover"]') !== null ||
                target.closest('[role="button"]') !== null;

            if (isClickable) {
                setActiveCursor(true);
            } else {
                setActiveCursor(false);
            }
        };

        window.addEventListener("mouseover", handleMouseOver);
        return () => window.removeEventListener("mouseover", handleMouseOver);
    }, [pathname]);

    return (
        <>
            {/* Trailing Ring */}
            <div
                ref={ringRef}
                className="hidden md:flex items-center justify-center fixed top-0 left-0 w-10 h-10 rounded-full z-[9998] pointer-events-none"
                style={{ marginLeft: "-20px", marginTop: "-20px" }}
            >
                <div
                    className={`w-full h-full rounded-full transition-all duration-[400ms] ease-out ${activeCursor
                            ? "scale-[2.5] bg-transparent border-[0.5px] border-red-600/30 backdrop-blur-[.3px]"
                            : "scale-100 bg-transparent border border-black/20 dark:border-white/20"
                        }`}
                />
            </div>

            {/* Primary Dot */}
            <div
                ref={dotRef}
                className="hidden md:flex items-center justify-center fixed top-0 left-0 w-2 h-2 rounded-full z-[9999] pointer-events-none"
                style={{ marginLeft: "-4px", marginTop: "-4px" }}
            >
                <div
                    className={`w-full h-full rounded-full transition-all duration-[400ms] ease-out ${activeCursor
                            ? "scale-0 opacity-0 bg-red-600"
                            : "scale-100 opacity-100 bg-red-600"
                        }`}
                />
            </div>
        </>
    );
}
