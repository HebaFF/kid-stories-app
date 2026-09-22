import type { ImageSourcePropType } from 'react-native';

/**
 * Locally bundled illustrations, keyed by story id, in page order.
 *
 * These are `require()`d rather than loaded from a URL because Metro resolves
 * asset paths at build time — a path built from a string at runtime will not
 * bundle. It also means the art ships inside the app and works with no network,
 * which matters for bedtime, when the wi-fi is worst.
 *
 * Source files are the full-resolution Higgsfield exports, resized to 1200px
 * wide and saved as JPEG: 27MB of PNGs became 1.5MB, which is the difference
 * between an app a parent will install and one they won't.
 *
 * Add a story's art by dropping the files in assets/illustrations/<story-id>/
 * and adding one line here. Pages with no entry render a composed press block (see PressBlock) —
 * never an emoji, which this world does not use.
 */
export const ILLUSTRATIONS: Record<string, ImageSourcePropType[]> = {
  'sun-boat': [
    require('../../assets/illustrations/sun-boat/1.jpg'),
    require('../../assets/illustrations/sun-boat/2.jpg'),
    require('../../assets/illustrations/sun-boat/3.jpg'),
    require('../../assets/illustrations/sun-boat/4.jpg'),
  ],
};

export function illustrationFor(
  storyId: string,
  pageIndex: number
): ImageSourcePropType | undefined {
  return ILLUSTRATIONS[storyId]?.[pageIndex];
}
