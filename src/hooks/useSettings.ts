import { useState, useEffect } from 'react';

export interface Settings {
  fontSize: 'md' | 'lg' | 'xl';
  rate: number;
}

const DEFAULT: Settings = { fontSize: 'md', rate: 0.9 };
const KEY = '@italk_settings';

export function useSettings() {
  const [settings, setSettings] = useState<Settings>(() => {
    try {
      const s = localStorage.getItem(KEY);
      return s ? { ...DEFAULT, ...JSON.parse(s) } : DEFAULT;
    } catch {
      return DEFAULT;
    }
  });

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(settings));
  }, [settings]);

  const update = (patch: Partial<Settings>) =>
    setSettings(prev => ({ ...prev, ...patch }));

  return { settings, update };
}
