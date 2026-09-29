import { Story } from '../types';
import { EGYPTIAN_STORIES } from './egyptianStories';

/**
 * The library.
 *
 * It used to hold Aesop's fables, Juha, Kalila wa Dimna and two ancient
 * Egyptian tales alongside the contemporary stories. Those nine were removed
 * on 29 Sep 2026 at the owner's instruction: the verdict on them was that they
 * all felt "very old, not up to date", and a child who opens this app should
 * find Egypt as they actually live in it. They are not lost — every one of
 * them is in git history and can be brought back.
 *
 * What remains is six stories set in Egypt today. Every new story follows the
 * rules in PRODUCT.md: happy from its first line as well as its last, four
 * pages, and one plain moral said out loud at the end.
 *
 * The Arabic in all of them was drafted by an AI assistant and still needs a
 * pass from a native Egyptian speaker. That review is outstanding and must not
 * be implied as done.
 */
export const STORIES: Story[] = [...EGYPTIAN_STORIES];
