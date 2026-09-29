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
  // Stills lifted from the film at /kite/ rather than generated separately, so
  // the page and the film show the same Cairo, the same children, the same kite.
  'noors-kite': [
    require('../../assets/illustrations/noors-kite/1.jpg'),
    require('../../assets/illustrations/noors-kite/2.jpg'),
    require('../../assets/illustrations/noors-kite/3.jpg'),
    require('../../assets/illustrations/noors-kite/4.jpg'),
  ],
  'the-colourful-wall': [
    require('../../assets/illustrations/the-colourful-wall/1.jpg'),
    require('../../assets/illustrations/the-colourful-wall/2.jpg'),
    require('../../assets/illustrations/the-colourful-wall/3.jpg'),
    require('../../assets/illustrations/the-colourful-wall/4.jpg'),
  ],
  'a-million-questions': [
    require('../../assets/illustrations/a-million-questions/1.jpg'),
    require('../../assets/illustrations/a-million-questions/2.jpg'),
    require('../../assets/illustrations/a-million-questions/3.jpg'),
    require('../../assets/illustrations/a-million-questions/4.jpg'),
  ],
  // Drawn by Gemini (Nano Banana 2 Lite) in Google AI Studio rather than by
  // Higgsfield: free on the owner's Pro account against about 26 credits a
  // story, and more specifically Cairo — satellite dishes on the neighbouring
  // roofs, minarets in the haze, geraniums on the railing. All four came out of
  // one conversation, which is what keeps the boy and his grandmother the same
  // people across the pages.
  'maleks-seed': [
    require('../../assets/illustrations/maleks-seed/1.jpg'),
    require('../../assets/illustrations/maleks-seed/2.jpg'),
    require('../../assets/illustrations/maleks-seed/3.jpg'),
    require('../../assets/illustrations/maleks-seed/4.jpg'),
  ],
  // Also Gemini, also free. Generated 16:9 because a fresh AI Studio chat
  // resets the aspect ratio, so each page is cropped to 4:3 by hand rather
  // than left to the reader to clip — the offsets follow where the children
  // actually are in each frame.
  'the-train-to-the-sea': [
    require('../../assets/illustrations/the-train-to-the-sea/1.jpg'),
    require('../../assets/illustrations/the-train-to-the-sea/2.jpg'),
    require('../../assets/illustrations/the-train-to-the-sea/3.jpg'),
    require('../../assets/illustrations/the-train-to-the-sea/4.jpg'),
  ],
};

export function illustrationFor(
  storyId: string,
  pageIndex: number
): ImageSourcePropType | undefined {
  return ILLUSTRATIONS[storyId]?.[pageIndex];
}
