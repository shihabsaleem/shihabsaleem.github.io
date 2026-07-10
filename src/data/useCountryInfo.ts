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
    console.log('[LOCALIZATION DEBUG] === START ===');
    // 1. Check URL parameters directly in the browser
    const params = new URLSearchParams(window.location.search);
    const urlCountry = params.get('country');
    console.log('[LOCALIZATION DEBUG] URL Parameter ?country=', urlCountry);

    if (urlCountry) {
      console.log('[LOCALIZATION DEBUG] Forcing URL override to:', urlCountry);
      document.cookie = `x-country=${urlCountry}; path=/; max-age=3600`;
      setInfo(getInfoByCountry(urlCountry));
      return;
    }

    // 2. Read the cookie set by our proxy
    const rawCookie = getCookie('x-country');
    console.log('[LOCALIZATION DEBUG] Cookie x-country =', rawCookie);
    
    // 3. Bulletproof Fallback
    if (!rawCookie || rawCookie === 'IN') {
      console.log('[LOCALIZATION DEBUG] Cookie is IN or missing. Fetching from IP API...');
      fetch('https://get.geojs.io/v1/ip/country.json')
        .then(res => {
          console.log('[LOCALIZATION DEBUG] IP API Response Status:', res.status);
          return res.json();
        })
        .then(data => {
          console.log('[LOCALIZATION DEBUG] IP API Data:', data);
          if (data && data.country) {
            const realCountry = data.country; // e.g. "AE", "US", "IN"
            console.log('[LOCALIZATION DEBUG] Updating cookie and UI to:', realCountry);
            document.cookie = `x-country=${realCountry}; path=/; max-age=3600`;
            setInfo(getInfoByCountry(realCountry));
          } else {
            console.log('[LOCALIZATION DEBUG] API returned invalid data, falling back to IN');
            setInfo(getInfoByCountry('IN'));
          }
        })
        .catch((err) => {
          console.error('[LOCALIZATION DEBUG] IP API Fetch Error:', err);
          setInfo(getInfoByCountry(rawCookie || 'IN')); // ultimate fallback
        });
    } else {
      console.log('[LOCALIZATION DEBUG] Using existing cookie value:', rawCookie);
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
