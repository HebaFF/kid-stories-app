import type { Ink } from '../theme';

/**
 * Which ink each story is printed in.
 *
 * Assigned by hand rather than cycled, for two reasons: the ink should suit
 * the story (the Nile bedtime tales run cobalt, the Juha comedies run black
 * line), and neighbouring plates in the list must not collide. Vermilion never
 * appears here — it owns the ground, and a vermilion plate on a vermilion
 * field would disappear.
 */
const PLATE_INK: Record<string, Ink | 'ink'> = {
  'star-on-the-nile': 'cobalt',
  'sun-boat': 'chrome',
  'cat-who-guarded': 'cobalt',
  'tortoise-and-hare': 'grass',
  'lion-and-hare': 'chrome',
  'juha-and-the-donkey': 'ink',
  'juha-and-the-nail': 'ink',
  'shipwrecked-sailor': 'cobalt',
  'boy-who-cried-wolf': 'grass',
  'clever-hassan': 'chrome',
};

const FALLBACK: (Ink | 'ink')[] = ['cobalt', 'chrome', 'grass', 'ink'];

export function plateInk(storyId: string, index: number): Ink | 'ink' {
  return PLATE_INK[storyId] ?? FALLBACK[index % FALLBACK.length];
}
