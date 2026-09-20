import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { ModePreference, resolveNight } from './services/timeOfDay';
import { Theme, themeFor } from './theme';

interface ModeValue {
  preference: ModePreference;
  setPreference: (next: ModePreference) => void;
  night: boolean;
  theme: Theme;
}

const ModeContext = createContext<ModeValue | null>(null);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreference] = useState<ModePreference>('auto');
  const [night, setNight] = useState(() => resolveNight('auto'));

  useEffect(() => {
    setNight(resolveNight(preference));
    if (preference !== 'auto') return;
    // On 'auto' the clock decides, so re-check periodically — otherwise an app
    // left open through 19:00 would stay in day mode all evening.
    const timer = setInterval(() => setNight(resolveNight('auto')), 60_000);
    return () => clearInterval(timer);
  }, [preference]);

  const value = useMemo<ModeValue>(
    () => ({ preference, setPreference, night, theme: themeFor(night) }),
    [preference, night]
  );

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
}

export function useMode(): ModeValue {
  const value = useContext(ModeContext);
  if (!value) throw new Error('useMode must be used inside <ModeProvider>');
  return value;
}
