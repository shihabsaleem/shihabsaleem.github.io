"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already responded
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (choice: "accepted" | "declined") => {
    localStorage.setItem("cookie-consent", choice);
    setIsVisible(false);

    // Refresh page to trigger/block Google Analytics logic
    window.location.reload();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:max-w-md">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl shadow-2xl shadow-zinc-900/10 transition-colors duration-500">
        <div className="flex items-start gap-4">
          <div className="w-2 h-2 bg-red-600 rounded-full mt-2 animate-pulse" />
          <div className="flex-1">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white mb-2">
              Privacy Preference
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              I use Google Analytics to understand how you interact with my
              work. You can read more in the{" "}
              <Link
                href="/privacy-policy"
                className="text-zinc-900 dark:text-white underline underline-offset-4 hover:text-red-600 transition-colors"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => handleConsent("accepted")}
                className="flex-1 px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white transition-all"
              >
                Accept
              </button>
              <button
                onClick={() => handleConsent("declined")}
                className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 text-zinc-500 text-[10px] font-bold uppercase tracking-widest rounded-lg hover:border-zinc-900 dark:hover:border-zinc-100 transition-all"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
