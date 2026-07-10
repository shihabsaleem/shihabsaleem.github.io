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
    // 1. Check URL parameters directly in the browser
    const params = new URLSearchParams(window.location.search);
    const urlCountry = params.get('country');

    if (urlCountry) {
      // Force URL override
      document.cookie = `x-country=${urlCountry}; path=/; max-age=3600`;
      setInfo(getInfoByCountry(urlCountry));
      return;
    }

    // 2. Read the cookie set by our proxy
    const rawCookie = getCookie('x-country');
    
    // 3. Bulletproof Fallback: If cookie is missing OR it fell back to default 'IN', 
    // double-check with a free reliable client-side API just in case Vercel headers failed.
    if (!rawCookie || rawCookie === 'IN') {
      fetch('https://get.geojs.io/v1/ip/country.json')
        .then(res => res.json())
        .then(data => {
          if (data && data.country) {
            const realCountry = data.country; // e.g. "AE", "US", "IN"
            document.cookie = `x-country=${realCountry}; path=/; max-age=3600`;
            setInfo(getInfoByCountry(realCountry));
          } else {
            setInfo(getInfoByCountry('IN'));
          }
        })
        .catch(() => {
          setInfo(getInfoByCountry(rawCookie || 'IN')); // ultimate fallback
        });
    } else {
      // We have a valid non-default cookie (e.g. 'AE'), use it immediately
      setInfo(getInfoByCountry(rawCookie));
    }
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
