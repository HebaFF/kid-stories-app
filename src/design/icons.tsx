import Svg, { Circle, Line, Path, Rect } from 'react-native-svg';
import { isRTL } from './direction';

/**
 * Icons drawn for this press: one stroke weight, butt caps, mitre joins — the
 * blunt pen of a comic keyline rather than a rounded UI icon set. Nothing here
 * is a glyph or an emoji; each shape is authored so it sits inside the world
 * instead of importing another one.
 */

interface IconProps {
  size?: number;
  color: string;
  /** Overrides the family stroke weight only where a size demands it. */
  weight?: number;
}

const STROKE = 2.4;

export function IconBack({ size = 24, color, weight = STROKE }: IconProps) {
  // Back points the way you came. On a right-to-left page that is rightwards,
  // and the layout engine mirrors boxes but never the artwork inside them.
  const rtl = isRTL();
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Line x1={21} y1={12} x2={5} y2={12} stroke={color} strokeWidth={weight} />
      <Path
        d={rtl ? 'M15 5 L22 12 L15 19' : 'M11 5 L4 12 L11 19'}
        stroke={color}
        strokeWidth={weight}
        fill="none"
      />
    </Svg>
  );
}

export function IconChevron({
  size = 24,
  color,
  weight = STROKE,
  facing = 'right',
}: IconProps & { facing?: 'left' | 'right' }) {
  const d = facing === 'right' ? 'M9 4 L17 12 L9 20' : 'M15 4 L7 12 L15 20';
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d={d} stroke={color} strokeWidth={weight} fill="none" />
    </Svg>
  );
}

/** Midday sun — the daytime issue. */
export function IconSun({ size = 18, color, weight = STROKE }: IconProps) {
  const rays = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx={12} cy={12} r={4.6} stroke={color} strokeWidth={weight} fill="none" />
      {rays.map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <Line
            key={deg}
            x1={12 + Math.cos(rad) * 7.6}
            y1={12 + Math.sin(rad) * 7.6}
            x2={12 + Math.cos(rad) * 10.2}
            y2={12 + Math.sin(rad) * 10.2}
            stroke={color}
            strokeWidth={weight}
          />
        );
      })}
    </Svg>
  );
}

/** Crescent — the bedtime issue. Cut as a shape, not a glyph. */
export function IconMoon({ size = 18, color, weight = STROKE }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18.4 15.2A8.2 8.2 0 0 1 8.8 5.6a8.2 8.2 0 1 0 9.6 9.6Z"
        stroke={color}
        strokeWidth={weight}
        fill="none"
      />
    </Svg>
  );
}

/** A press clock: the issue that follows the hour on its own. */
export function IconClock({ size = 18, color, weight = STROKE }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx={12} cy={12} r={8.6} stroke={color} strokeWidth={weight} fill="none" />
      <Path d="M12 7 L12 12 L16 14" stroke={color} strokeWidth={weight} fill="none" />
    </Svg>
  );
}

/**
 * Two stacked sheets — the English impression laid under the Arabic one.
 * Reads as "the same page, twice" rather than as a globe or a language glyph.
 */
export function IconSecondPass({ size = 18, color, weight = STROKE }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect x={3.2} y={6.4} width={13} height={14} stroke={color} strokeWidth={weight} fill="none" />
      <Path d="M7.8 3.4 H20.8 V17.2" stroke={color} strokeWidth={weight} fill="none" />
      <Line x1={6.6} y1={11.4} x2={12.8} y2={11.4} stroke={color} strokeWidth={weight} />
      <Line x1={6.6} y1={15.2} x2={12.8} y2={15.2} stroke={color} strokeWidth={weight} />
    </Svg>
  );
}

/**
 * The press ornament used where a plate has no illustration yet: a printer's
 * lozenge, the mark a magazine sets when a block is still at the engraver.
 */
export function PressMark({ size = 40, color, weight = STROKE }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <Path d="M24 3 L45 24 L24 45 L3 24 Z" stroke={color} strokeWidth={weight} fill="none" />
      <Path d="M24 13 L35 24 L24 35 L13 24 Z" stroke={color} strokeWidth={weight} fill="none" />
      <Circle cx={24} cy={24} r={3.4} fill={color} />
    </Svg>
  );
}
