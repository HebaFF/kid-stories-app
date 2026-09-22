import { useMemo, type ReactNode } from 'react';
import { StyleSheet, Text, View, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';
import Svg, { Circle, Defs, Path, Pattern, Rect } from 'react-native-svg';
import { RULE, SPACE, TYPE, type Theme } from '../theme';

let patternSeq = 0;

/**
 * The halftone screen every printed surface in this world sits under.
 *
 * Drawn as a real SVG pattern rather than a bitmap so it stays crisp at any
 * density and costs one node instead of a tiled image. It is deliberately
 * faint: the dot should be findable when you look for it and invisible when
 * you are reading.
 */
export function Halftone({
  theme,
  pitch = 6,
  radius = 1.15,
  opacity,
  style,
}: {
  theme: Theme;
  pitch?: number;
  radius?: number;
  opacity?: number;
  style?: StyleProp<ViewStyle>;
}) {
  const id = useMemo(() => `halftone-${(patternSeq += 1)}`, []);
  return (
    <View pointerEvents="none" style={[StyleSheet.absoluteFill, style]}>
      <Svg width="100%" height="100%">
        <Defs>
          <Pattern id={id} width={pitch} height={pitch} patternUnits="userSpaceOnUse">
            <Circle cx={pitch / 2} cy={pitch / 2} r={radius} fill={theme.dot} />
          </Pattern>
        </Defs>
        <Rect
          width="100%"
          height="100%"
          fill={`url(#${id})`}
          opacity={opacity ?? theme.dotOpacity}
        />
      </Svg>
    </View>
  );
}

/**
 * A sheet of stock laid on the press ground: paper, a heavy keyline, and a
 * shadow with real offset and blur, because the plate sits *on* the page
 * rather than being part of it.
 */
export function Plate({
  theme,
  children,
  tone = 'plate',
  style,
}: {
  theme: Theme;
  children: ReactNode;
  tone?: 'plate' | 'plateAlt';
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View
      style={[
        styles.plate,
        { backgroundColor: theme[tone], borderColor: theme.ink },
        style,
      ]}
    >
      <Halftone theme={theme} />
      {children}
    </View>
  );
}

/**
 * The apparatus of a printed issue — age band, running time, provenance.
 * A stamp, not a pill: square corners, a real keyline, letter-spaced caps.
 */
export function Stamp({
  theme,
  label,
  color,
  filled = false,
  style,
}: {
  theme: Theme;
  label: string;
  color?: string;
  filled?: boolean;
  style?: StyleProp<ViewStyle>;
}) {
  const edge = color ?? theme.ink;
  return (
    <View
      style={[
        styles.stamp,
        { borderColor: edge, backgroundColor: filled ? edge : 'transparent' },
        style,
      ]}
    >
      <Text
        style={[
          TYPE.stamp,
          styles.stampText,
          { color: filled ? theme.plate : edge },
        ]}
      >
        {label.toUpperCase()}
      </Text>
    </View>
  );
}

/** A printed rule. The magazine separates with ink, not with whitespace alone. */
export function Rule({
  theme,
  weight = RULE.keyline,
  color,
  style,
}: {
  theme: Theme;
  weight?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View
      style={[{ height: weight, backgroundColor: color ?? theme.ink, width: '100%' }, style]}
    />
  );
}

/**
 * Type printed in two passes with the plates very slightly out of register —
 * a coloured impression laid down first, the black struck over it a couple of
 * pixels off. It is the single detail that makes cheap colour printing
 * unmistakable, and it costs one extra text node.
 *
 * The offset copy is hidden from assistive tech; only the black pass carries
 * the string.
 */
export function InkTitle({
  theme,
  children,
  style,
  shadowInk,
  offset,
  rtl = false,
}: {
  theme: Theme;
  children: string;
  style?: StyleProp<TextStyle>;
  shadowInk: string;
  offset?: number;
  rtl?: boolean;
}) {
  const shift = offset ?? theme.misregister;
  const direction: TextStyle = rtl
    ? { writingDirection: 'rtl', textAlign: 'right' }
    : { textAlign: 'left' };
  return (
    <View>
      <Text
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
        style={[
          style,
          direction,
          styles.offsetPass,
          { color: shadowInk, transform: [{ translateX: shift }, { translateY: shift }] },
        ]}
      >
        {children}
      </Text>
      <Text style={[style, direction]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  plate: {
    borderWidth: RULE.heavy,
    overflow: 'hidden',
    shadowColor: '#120704',
    shadowOpacity: 0.42,
    shadowRadius: 10,
    shadowOffset: { width: 3, height: 5 },
    elevation: 5,
  },
  stamp: {
    borderWidth: RULE.hair,
    paddingHorizontal: SPACE.tight,
    paddingVertical: 2,
  },
  stampText: {
    fontWeight: '600',
  },
  offsetPass: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

/**
 * The block a magazine prints when the engraver has not delivered a picture:
 * the title knocked out of the ink at display scale, inside its own ruled
 * frame, with the halftone opened up and a printer's lozenge set as a corner
 * ornament. Nine of ten stories in this library are in that state, so this is
 * the most-seen surface in the app — a flat field of colour there would make
 * the first viewport an empty rectangle rather than a plate.
 */
export function PressBlock({
  theme,
  ink,
  title,
  scale = 'grid',
}: {
  theme: Theme;
  ink: string;
  title: string;
  scale?: 'lead' | 'grid';
}) {
  const lead = scale === 'lead';
  return (
    <View style={[blockStyles.root, { backgroundColor: ink }]}>
      <Halftone theme={theme} pitch={lead ? 5 : 4} opacity={0.2} />
      <View style={[blockStyles.frame, { borderColor: theme.plate }]}>
        <Text
          numberOfLines={lead ? 3 : 4}
          style={[
            lead ? TYPE.leadTitleAr : TYPE.plateTitleAr,
            blockStyles.knockout,
            { color: theme.plate },
          ]}
        >
          {title}
        </Text>
      </View>
      <View style={blockStyles.ornament}>
        <PressLozenge size={lead ? 26 : 20} color={theme.plate} />
      </View>
    </View>
  );
}

/** The corner ornament. Drawn here so the block owns its whole composition. */
function PressLozenge({ size, color }: { size: number; color: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <Path d="M24 3 L45 24 L24 45 L3 24 Z" stroke={color} strokeWidth={2.6} fill="none" />
      <Circle cx={24} cy={24} r={3.4} fill={color} />
    </Svg>
  );
}

const blockStyles = StyleSheet.create({
  root: { flex: 1, justifyContent: 'center' },
  frame: {
    margin: SPACE.base,
    borderWidth: RULE.keyline,
    paddingVertical: SPACE.base,
    paddingHorizontal: SPACE.snug,
  },
  knockout: { textAlign: 'center', writingDirection: 'rtl' },
  ornament: { position: 'absolute', top: SPACE.tight, right: SPACE.tight },
});
