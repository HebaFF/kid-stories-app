import { I18nManager, Platform } from 'react-native';

/**
 * Whether the surface is laid out right-to-left.
 *
 * Two traps, both of which this function exists to avoid:
 *
 * 1. `I18nManager.isRTL` is honest on native, but react-native-web implements
 *    I18nManager as a near-stub: `forceRTL` flips the CSS direction while
 *    `isRTL` keeps reporting false. So the document has to be asked too.
 * 2. It must be read at render, not at module load. This module is imported by
 *    the screens, which are imported by App, so its top level runs *before*
 *    App's body sets `document.dir` — a constant captured here would be false
 *    forever.
 *
 * Anything that branches on direction has to use this: the layout engine
 * mirrors boxes but never the artwork inside them, so a chevron that guesses
 * wrong points against its own direction of travel.
 */
export function isRTL(): boolean {
  if (I18nManager.isRTL) return true;
  return (
    Platform.OS === 'web' &&
    typeof document !== 'undefined' &&
    document.documentElement.dir === 'rtl'
  );
}
