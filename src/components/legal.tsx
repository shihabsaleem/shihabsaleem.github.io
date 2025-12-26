import Link from "next/link";
import React from "react";

const LegalLinks = () => (
  <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-12 flex justify-center md:justify-between items-center flex-wrap gap-4">
    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
    <Link
        href="/privacy"
        className="hover:text-red-500 transition-colors"
      >
        Privacy Policy
      </Link>
    </div>
    <p className="text-xs text-gray-500 dark:text-gray-500">
      © {new Date().getFullYear()} Shihab Saleem. All rights reserved.
    </p>
  </div>
);

export default LegalLinks;