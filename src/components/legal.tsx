import Link from "next/link";
import React from "react";

const LegalLinks = () => (
  <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-[0.2em] text-gray-500 dark:text-gray-600">
    <a
      href="/privacy"
      className="hover:text-black dark:hover:text-white transition-colors"
    >
      Privacy Policy
    </a>
    
    <p> © {new Date().getFullYear()} Shihab Saleem. All rights reserved.</p>
  </div>
);

export default LegalLinks;
