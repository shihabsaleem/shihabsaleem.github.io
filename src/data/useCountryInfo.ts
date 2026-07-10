'use client';

import { useState, useEffect } from 'react';
import { getInfoByCountry } from './getInfo';
import defaultData from './asset.js';

const defaultInfo = defaultData.info[0];

/**
 * Reads the `x-country` cookie set by middleware and returns the
 * correct `info` object for that country. Falls back to default (India)
 * if the cookie is absent (e.g. during local development).
 */
export function useCountryInfo() {
  const [info, setInfo] = useState(defaultInfo);

  useEffect(() => {
    // 1. Check URL parameters directly in the browser (bypasses any proxy/caching issues)
    const params = new URLSearchParams(window.location.search);
    const urlCountry = params.get('country');

    // 2. Read the cookie
    const rawCookie = getCookie('x-country');
    console.log('[DEBUG] URL:', urlCountry, '| Cookie:', rawCookie);
    
    // 3. Prioritize URL > Cookie > Default
    const country = urlCountry || rawCookie || 'IN';
    console.log('[DEBUG] Using country code:', country);
    
    // Auto-fix the cookie client-side if the proxy failed to set it
    if (urlCountry && rawCookie !== urlCountry) {
      document.cookie = `x-country=${urlCountry}; path=/; max-age=3600`;
    }

    const newInfo = getInfoByCountry(country);
    setInfo(newInfo);
  }, []);

  return info;
}

/** Lightweight cookie reader — no extra npm package needed. */
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.split('=')[1]) : null;
}
