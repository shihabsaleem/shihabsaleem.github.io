import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import data from "@/data/asset";

const skills = data.skills;

const Skill: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const occupiedSpaces = useRef<Array<any>>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) setIsVisible(true);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const container = containerRef.current;
    const skillElements = skillsRef.current.filter(Boolean) as HTMLElement[];
    if (!container || skillElements.length === 0) return;

    // reduce gaps: smaller padding/spacing
    const padding = 4;
    const gap = 4; // gap used for fallback grid

    // Reset occupied spaces
    occupiedSpaces.current = new Array(skillElements.length).fill(null);

    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;

    const rectsOverlap = (a: any, b: any) => {
      if (!a || !b) return false;
      return !(
        a.right <= b.left ||
        a.left >= b.right ||
        a.bottom <= b.top ||
        a.top >= b.bottom
      );
    };

    const clamp = (val: number, min: number, max: number) =>
      Math.max(min, Math.min(val, max));

    // tighter packing algorithm: more attempts and denser fallback grid
    const placeAll = () => {
      for (let i = 0; i < skillElements.length; i++) {
        const el = skillElements[i];
        const r = el.getBoundingClientRect();
        const w = r.width;
        const h = r.height;

        let placed = false;
        for (let attempt = 0; attempt < 600 && !placed; attempt++) {
          const x =
            Math.random() * (containerWidth - w - padding * 2) + padding;
          const y =
            Math.random() * (containerHeight - h - padding * 2) + padding;

          const newRect = {
            left: x,
            top: y,
            right: x + w,
            bottom: y + h,
            width: w,
            height: h,
          };

          let collision = false;
          for (let j = 0; j < i; j++) {
            const occ = occupiedSpaces.current[j];
            if (rectsOverlap(newRect, occ)) {
              collision = true;
              break;
            }
          }

          if (!collision) {
            occupiedSpaces.current[i] = newRect;
            placed = true;
          }
        }

        if (!placed) {
          // denser fallback scanning
          let slotFound = false;
          const cols = Math.max(
            1,
            Math.floor((containerWidth - padding * 2) / (w + gap))
          );
          for (
            let yy = padding;
            yy <= containerHeight - h - padding && !slotFound;
            yy += h + gap
          ) {
            for (
              let xx = padding;
              xx <= containerWidth - w - padding && !slotFound;
              xx += w + gap
            ) {
              const newRect = {
                left: xx,
                top: yy,
                right: xx + w,
                bottom: yy + h,
                width: w,
                height: h,
              };
              let collision = false;
              for (let j = 0; j < i; j++) {
                const occ = occupiedSpaces.current[j];
                if (rectsOverlap(newRect, occ)) {
                  collision = true;
                  break;
                }
              }
              if (!collision) {
                occupiedSpaces.current[i] = newRect;
                slotFound = true;
              }
            }
          }

          if (!slotFound) {
            // last resort: compact packing left-to-right, top-to-bottom
            const x = padding + (i % cols) * (w + gap);
            const y = padding + Math.floor(i / cols) * (h + gap);
            occupiedSpaces.current[i] = {
              left: x,
              top: y,
              right: x + w,
              bottom: y + h,
              width: w,
              height: h,
            };
          }
        }
      }
    };

    placeAll();

    // quickSetters for perf
    const quickSetters = skillElements.map((el) => ({
      setX: gsap.quickSetter(el, "x", "px"),
      setY: gsap.quickSetter(el, "y", "px"),
    }));

    // set elements immediately to positions
    skillElements.forEach((skill, index) => {
      const target = occupiedSpaces.current[index];
      const x = target.left;
      const y = target.top;
      gsap.set(skill, {
        x,
        y,
        rotation: Math.random() * 10 - 5,
        willChange: "transform",
      });
    });

    // repulsion: on mousemove, push nearby items away smoothly
    let mouse = { x: -1000, y: -1000 };
    const radius = 100;
    const strength = 50;

    const velocities = skillElements.map(() => ({ vx: 0, vy: 0 }));

    let rafId: number | null = null;

    const repelLoop = () => {
      // smooth physics-based repulsion
      const damping = 0.85;
      const returnForce = 0.08;

      for (let i = 0; i < skillElements.length; i++) {
        const el = skillElements[i];
        const rect = occupiedSpaces.current[i];
        if (!rect || !el) continue;

        const cx = (rect.left + rect.right) / 2;
        const cy = (rect.top + rect.bottom) / 2;
        const dx = cx - mouse.x;
        const dy = cy - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Store original position for return force
        const targetRect = occupiedSpaces.current[i];
        const originalX = targetRect.left;
        const originalY = targetRect.top;

        // Apply repulsion force
        if (dist < radius && dist > 0) {
          const nx = dx / dist;
          const ny = dy / dist;
          const force = (1 - dist / radius) * strength;
          velocities[i].vx += nx * force * 0.3;
          velocities[i].vy += ny * force * 0.3;
        }

        // Apply return force (spring back to original position)
        const currentX =
          parseFloat(gsap.getProperty(el, "x") as string) || rect.left;
        const currentY =
          parseFloat(gsap.getProperty(el, "y") as string) || rect.top;
        velocities[i].vx += (originalX - currentX) * returnForce;
        velocities[i].vy += (originalY - currentY) * returnForce;

        // Apply damping
        velocities[i].vx *= damping;
        velocities[i].vy *= damping;

        // Update position
        const newX = clamp(
          currentX + velocities[i].vx,
          0,
          containerWidth - rect.width
        );
        const newY = clamp(
          currentY + velocities[i].vy,
          0,
          containerHeight - rect.height
        );

        quickSetters[i].setX(newX);
        quickSetters[i].setY(newY);
      }

      // minimal overlap resolution: small nudge pass
      for (let a = 0; a < skillElements.length; a++) {
        for (let b = a + 1; b < skillElements.length; b++) {
          const ra = occupiedSpaces.current[a];
          const rb = occupiedSpaces.current[b];
          if (!ra || !rb) continue;

          const aX =
            parseFloat(gsap.getProperty(skillElements[a], "x") as string) ||
            ra.left;
          const aY =
            parseFloat(gsap.getProperty(skillElements[a], "y") as string) ||
            ra.top;
          const bX =
            parseFloat(gsap.getProperty(skillElements[b], "x") as string) ||
            rb.left;
          const bY =
            parseFloat(gsap.getProperty(skillElements[b], "y") as string) ||
            rb.top;

          const aRect = {
            left: aX,
            top: aY,
            right: aX + ra.width,
            bottom: aY + ra.height,
          };
          const bRect = {
            left: bX,
            top: bY,
            right: bX + rb.width,
            bottom: bY + rb.height,
          };

          if (rectsOverlap(aRect, bRect)) {
            const ax = (aRect.left + aRect.right) / 2;
            const ay = (aRect.top + aRect.bottom) / 2;
            const bx = (bRect.left + bRect.right) / 2;
            const by = (bRect.top + bRect.bottom) / 2;
            let vx = ax - bx;
            let vy = ay - by;
            const d = Math.sqrt(vx * vx + vy * vy) || 1;
            vx /= d;
            vy /= d;

            const separationForce = 0.5;
            velocities[a].vx += vx * separationForce;
            velocities[a].vy += vy * separationForce;
            velocities[b].vx -= vx * separationForce;
            velocities[b].vy -= vy * separationForce;
          }
        }
      }

      rafId = requestAnimationFrame(repelLoop);
    };

    const onMouseMove = (e: MouseEvent) => {
      const containerRectNow = container.getBoundingClientRect();
      mouse.x = clamp(e.clientX - containerRectNow.left, 0, containerWidth);
      mouse.y = clamp(e.clientY - containerRectNow.top, 0, containerHeight);
      if (!rafId) rafId = requestAnimationFrame(repelLoop);
    };

    const onMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);

    // cleanup
    return () => {
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
      gsap.killTweensOf(skillElements);
    };
  }, [isVisible]);

  return (
    <div className="p-8 w-full">
      <h2 className="text-2xl font-light mb-6 pb-4 border-b border-gray-200 dark:border-gray-800">
        Skill Set
      </h2>
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden  rounded-lg"
        style={{ height: "400px" }}
      >
        {skills.map((skill, index) => (
          <span
            key={
              skill /* prefer a stable unique key instead of index when possible */
            }
            ref={(el) => {
              skillsRef.current[index] = el;
            }} // <- changed: no returned value
            className="absolute border-2 border-gray-200 dark:border-gray-800 px-4 py-2 rounded-full text-sm bg-white dark:bg-gray-950 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-800 dark:hover:text-white transition-colors duration-300 shadow-md select-none"
          >
            <span className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1 before:w-2 before:h-2 before:bg-red-500 before:rounded-full"></span>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skill;
