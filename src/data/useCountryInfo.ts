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
    const country = getCookie('x-country') ?? 'IN';
    setInfo(getInfoByCountry(country));
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
