/**
 * Two themes, because a bedtime story app that glows bright white at 8pm is
 * working against the parent using it. Night mode is not just "dark" — it is
 * warm and low-contrast-on-purpose, and it also slows the narration down
 * (see `narrationRate`) so the story winds down instead of racing.
 */
export interface Theme {
  key: 'day' | 'night';
  bg: string;
  headerBg: string;
  card: string;
  cardBorder: string;
  text: string;
  textMuted: string;
  /** Background behind the word currently being spoken during read-along. */
  highlightBg: string;
  highlightText: string;
  pill: string;
  pillBorder: string;
  statusBar: 'light' | 'dark';
}

export const dayTheme: Theme = {
  key: 'day',
  bg: '#FDF6FF',
  headerBg: '#FDF6FF',
  card: '#FFFFFF',
  cardBorder: '#E7DEF2',
  text: '#241C33',
  textMuted: '#8B7FA3',
  highlightBg: '#FFE27A',
  highlightText: '#241C33',
  pill: '#FFFFFF',
  pillBorder: '#E7DEF2',
  statusBar: 'dark',
};

export const nightTheme: Theme = {
  key: 'night',
  bg: '#141026',
  headerBg: '#141026',
  card: '#221B3D',
  cardBorder: '#342A57',
  text: '#EDE7FF',
  textMuted: '#9C92C4',
  // Muted amber rather than the day-mode yellow: still clearly readable as
  // "this is the word now", without a bright flash in a dark room.
  highlightBg: '#4A3B6B',
  highlightText: '#FFD79A',
  pill: '#221B3D',
  pillBorder: '#342A57',
  statusBar: 'light',
};

export function themeFor(night: boolean): Theme {
  return night ? nightTheme : dayTheme;
}
