/**
 * Looping video clips, keyed by story id, in page order.
 *
 * These are the Higgsfield "Create Video" renders of the stills in
 * `illustrations.ts` — five seconds each, 4:3, silent, and played on a loop
 * behind the story text. A page with no clip falls back to its still image,
 * which drifts instead; a page with neither falls back to the story emoji.
 *
 * `null` marks a page that has art but no clip yet, so the array stays aligned
 * with page numbers and gaps are obvious.
 *
 * Size is the binding constraint here, not credits. A five-second 4:3 clip is
 * around 3.4MB against 370KB for the still it came from — roughly ten times
 * the weight. Four clips is fine to bundle; all forty-five pages would be
 * 150MB or so, which is past what belongs inside an app download. Beyond a
 * handful of stories these need hosting and streaming, and that means bedtime
 * needs a working connection.
 */
export const ANIMATIONS: Record<string, (number | null)[]> = {
  // Cut straight out of the film at /kite/, cropped to 4:3 above its caption
  // strip so no burnt-in text comes with them. Eight seconds each, silent, and
  // they loop — the page moves because it is the film, not because a still is
  // being panned across. About 750KB a clip against 45KB for its poster.
  'noors-kite': [
    require('../../assets/illustrations/noors-kite/1.mp4'),
    require('../../assets/illustrations/noors-kite/2.mp4'),
    require('../../assets/illustrations/noors-kite/3.mp4'),
    require('../../assets/illustrations/noors-kite/4.mp4'),
  ],
  'the-colourful-wall': [
    require('../../assets/illustrations/the-colourful-wall/1.mp4'),
    require('../../assets/illustrations/the-colourful-wall/2.mp4'),
    require('../../assets/illustrations/the-colourful-wall/3.mp4'),
    require('../../assets/illustrations/the-colourful-wall/4.mp4'),
  ],
};

export function animationFor(storyId: string, pageIndex: number): number | undefined {
  return ANIMATIONS[storyId]?.[pageIndex] ?? undefined;
}
