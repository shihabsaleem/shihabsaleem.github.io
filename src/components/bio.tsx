import React from "react";
import { useState, useEffect } from "react";
import Dp from "@/components/dp";
import Infos from "@/components/info";
import Contact from "@/components/contact";

function useIsSmall() {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const check = () => setIsSmall(window.innerWidth < 640); // Tailwind 'sm' breakpoint

    if (typeof window !== "undefined") {
      check();
      window.addEventListener("resize", check);
      return () => window.removeEventListener("resize", check);
    }

    // if window is undefined (SSR), keep default false
    return undefined;
  }, []);

  return isSmall;
}

const Bio = () => {
  // <-- FIX: call the hook so `isSmall` is defined
  const isSmall = useIsSmall();

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-4/12 border-2 rounded-3xl border-gray-200 dark:border-gray-800">
        <Dp />
      </div>

      <div className="w-full lg:w-8/12 border-2 border-gray-200 dark:border-gray-800 p-6 rounded-3xl space-y-4 flex flex-col justify-between">
        <Infos />
        {/* pass undefined when not small so child can decide default layout */}
        <Contact layout={isSmall ? "column" : undefined} />
      </div>
    </div>
  );
};

export default Bio;
