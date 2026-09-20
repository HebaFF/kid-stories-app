/**
 * The app can be pinned to day or night, but by default it follows the clock so
 * a parent opening it at 8pm lands straight in a calm, dark reader with bedtime
 * stories already filtered — no settings trip required.
 */
export type ModePreference = 'auto' | 'day' | 'night';

/** Night runs from 19:00 to 06:00 local time. */
export function isNightAt(date: Date = new Date()): boolean {
  const hour = date.getHours();
  return hour >= 19 || hour < 6;
}

export function resolveNight(preference: ModePreference, date: Date = new Date()): boolean {
  if (preference === 'day') return false;
  if (preference === 'night') return true;
  return isNightAt(date);
}
