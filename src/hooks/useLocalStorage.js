import { useState, useEffect } from 'react';

function safeParse(defaultValue, raw) {
  if (!raw) return defaultValue;
  try {
    const parsed = JSON.parse(raw);
    return parsed ?? defaultValue;
  } catch {
    return defaultValue;
  }
}

export function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() =>
    safeParse(defaultValue, window.localStorage.getItem(key)),
  );

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Swallow errors – storage is a best-effort enhancement
    }
  }, [key, value]);

  return [value, setValue];
}


