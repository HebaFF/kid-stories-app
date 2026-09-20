/**
 * Language tracks.
 *
 * Arabic is deliberately split into two tracks rather than one:
 *  - `ar-EG` is Egyptian colloquial (عامية مصرية) — the way the story would be
 *    told out loud at home. This is the default.
 *  - `ar-MSA` is Modern Standard Arabic (فصحى) with harakat — the way Arabic
 *    children's books are written and the way kids are taught to read.
 *
 * `en` carries the English translation, shown either as its own track or
 * underneath the Arabic for bilingual reading.
 */
export type LanguageCode = 'ar-EG' | 'ar-MSA' | 'en';

/** Age bands used for filtering. Kept coarse on purpose — parents pick fast. */
export type AgeBand = '2-4' | '5-7' | '8-10';

/**
 * When a story is meant to be read. `bedtime` stories are calm and resolve
 * gently; `daytime` stories can be loud, funny or suspenseful. `any` fits both.
 */
export type StoryMood = 'bedtime' | 'daytime' | 'any';

export interface LanguageMeta {
  code: LanguageCode;
  /** Shown on the language pill, in that language's own script. */
  label: string;
  rtl: boolean;
  color: string;
}

export const LANGUAGES: LanguageMeta[] = [
  { code: 'ar-EG', label: 'مصري', rtl: true, color: '#22B573' },
  { code: 'ar-MSA', label: 'فصحى', rtl: true, color: '#0E9488' },
  { code: 'en', label: 'English', rtl: false, color: '#3B82F6' },
];

export const AGE_BANDS: AgeBand[] = ['2-4', '5-7', '8-10'];

export type LocalizedText = Record<LanguageCode, string> & {
  /**
   * German, kept from an earlier build of this app. Not offered in the language
   * picker — retained only so the translations are not lost if German is
   * wanted again later. Add `de` back to `LANGUAGES` to re-enable it.
   */
  de?: string;
};

export interface StoryPage {
  text: LocalizedText;
  /**
   * The Higgsfield prompt that produced (or will produce) this page's art.
   * Stored with the content so a page can be regenerated later in a consistent
   * style without anyone having to remember what was typed. See docs/HIGGSFIELD.md.
   */
  illustration: string;
  /**
   * Remote URL or local file URI for the generated illustration.
   * Absent until the art has been generated and human-reviewed — the reader
   * falls back to the story's emoji, so the app is fully usable without art.
   */
  imageUri?: string;
}

export interface Story {
  id: string;
  emoji: string;
  /** Main accent colour for this story's card and reader screen. */
  color: string;
  /** Lighter tint of `color`, used for card badges and the day-mode page card. */
  tint: string;
  /** Which age bands this story suits. A story may span more than one. */
  ageBands: AgeBand[];
  mood: StoryMood;
  /** Rough read-aloud length. Parents filter on this more than on age. */
  minutes: number;
  /** Where the story comes from, shown as a small credit line. */
  origin: string;
  title: LocalizedText;
  pages: StoryPage[];
}
