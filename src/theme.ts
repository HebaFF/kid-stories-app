/**
 * THE EGYPTIAN CHILDREN'S MAGAZINE
 *
 * The world is a Cairo newsstand comic of the 1960s-80s — Samir, Mickey —
 * printed in a handful of spot inks on cheap paper with visible halftone and
 * sloppy registration. The magazine those parents read as children, now
 * holding the stories they read to their own.
 *
 * Colour is Committed, not accented: the press ink owns the ground and holds
 * roughly a third of every screen. Paper appears as *plates* laid on that
 * ground, never as the ground itself — a cream page with coloured trim is the
 * default this world exists to refuse.
 *
 * Night is not the day palette dimmed. The press changes inks: the ground goes
 * to oxblood, the plates to board, and the paper white never appears, because a
 * sheet of white paper in a dark bedroom is a defect.
 */

export type ModeKey = 'day' | 'night';

export interface Theme {
  key: ModeKey;

  /** The press ink that owns the screen. */
  ground: string;
  /** Deeper field of the ground, for the masthead band and footers. */
  groundDeep: string;

  /** Paper stock a story is printed on, laid over the ground. */
  plate: string;
  /** Second stock, for plates that need to sit back. */
  plateAlt: string;

  /** Line black — keylines, rules, body text on plate. */
  ink: string;
  /** Ink at reading weight for long text. */
  inkBody: string;
  /** Ink dropped to a secondary voice. Tinted from the stock, never grey. */
  inkMuted: string;

  /** Type printed directly on the coloured ground. */
  onGround: string;
  onGroundMuted: string;

  /** The other inks on the press bed. */
  cobalt: string;
  chrome: string;
  grass: string;
  vermilion: string;

  /** Halftone dot colour and how strongly it prints. */
  dot: string;
  dotOpacity: number;

  /** Misregistration offset, in px. Zero would mean a perfect press. */
  misregister: number;

  statusBar: 'light' | 'dark';
}

/** Inks that exist on this press. Story plates are assigned one each. */
export const INKS = ['vermilion', 'cobalt', 'chrome', 'grass'] as const;
export type Ink = (typeof INKS)[number];

const dayTheme: Theme = {
  key: 'day',
  ground: '#C8321E',
  groundDeep: '#A82715',
  plate: '#F5ECD8',
  plateAlt: '#EADFC6',
  ink: '#17120F',
  inkBody: '#241B15',
  inkMuted: '#6E5A48',
  onGround: '#FBF3E2',
  onGroundMuted: '#FAE4D8',
  cobalt: '#1B4D9B',
  chrome: '#F2B01E',
  grass: '#2F7D52',
  vermilion: '#C8321E',
  dot: '#17120F',
  dotOpacity: 0.1,
  misregister: 2,
  statusBar: 'light',
};

const nightTheme: Theme = {
  key: 'night',
  // Chromatic, not near-black: the night ground is the same vermilion run at
  // midnight density, so the ink still owns its third of the screen. A ground
  // at luminance 0.007 is the day palette dimmed, which this world refuses.
  ground: '#52150F',
  groundDeep: '#3A0D08',
  // Kraft board rather than paper. Paper white never appears at night.
  plate: '#463527',
  plateAlt: '#3B2C20',
  ink: '#F6ECD8',
  inkBody: '#EDE0C8',
  inkMuted: '#CBB694',
  onGround: '#F7E4CE',
  onGroundMuted: '#E0C3B0',
  cobalt: '#5E84D0',
  chrome: '#D8A032',
  grass: '#4F9770',
  vermilion: '#D95238',
  dot: '#F7E4CE',
  dotOpacity: 0.09,
  misregister: 2,
  statusBar: 'light',
};

export function themeFor(night: boolean): Theme {
  return night ? nightTheme : dayTheme;
}

export function inkColor(theme: Theme, ink: Ink): string {
  return theme[ink];
}

/**
 * Type. One display face with a point of view, two workhorses underneath it.
 *
 * Lalezar is a single-weight Arabic-and-Latin display face with the blunt,
 * slightly irregular character of a hand-cut masthead — it is the voice of the
 * cover. Noto Naskh carries Arabic reading text because its letterforms stay
 * unambiguous for an emerging reader and it sets harakat cleanly, which the
 * فصحى track needs. Archivo carries Latin reading text and the small stamped
 * apparatus.
 */
export const FONTS = {
  display: 'Lalezar',
  arabic: 'NotoNaskhArabic',
  latin: 'Archivo',
} as const;

export const TYPE = {
  masthead: { fontFamily: FONTS.display, fontSize: 52, lineHeight: 58 },
  mastheadLatin: { fontFamily: FONTS.display, fontSize: 19, lineHeight: 24 },
  plateTitleAr: { fontFamily: FONTS.display, fontSize: 30, lineHeight: 42 },
  plateTitleEn: { fontFamily: FONTS.display, fontSize: 21, lineHeight: 27 },
  leadTitleAr: { fontFamily: FONTS.display, fontSize: 40, lineHeight: 56 },
  leadTitleEn: { fontFamily: FONTS.display, fontSize: 26, lineHeight: 32 },
  storyAr: { fontFamily: FONTS.arabic, fontSize: 23, lineHeight: 44 },
  storyEn: { fontFamily: FONTS.latin, fontSize: 18, lineHeight: 30 },
  stamp: { fontFamily: FONTS.latin, fontSize: 10.5, letterSpacing: 1.1 },
  stampAr: { fontFamily: FONTS.arabic, fontSize: 12 },
  numeral: { fontFamily: FONTS.display, fontSize: 64, lineHeight: 64 },
} as const;

/** One spacing rhythm for the whole magazine. */
export const SPACE = {
  hair: 2,
  tight: 6,
  snug: 10,
  base: 16,
  wide: 24,
  gutter: 18,
  band: 32,
} as const;

/**
 * Minimum interactive height. iOS asks 44pt and Android 48dp; the audience
 * starts at two years old, so the square cut keeps its shape and grows a
 * minHeight rather than softening into a larger pill.
 */
export const TARGET = 46;

/** Keyline weights. A printed plate has a real edge. */
export const RULE = { hair: 1, keyline: 2, heavy: 3.5 } as const;
