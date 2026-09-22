import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useVideoPlayer, VideoView } from 'expo-video';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { STORIES } from '../data/stories';
import { animationFor } from '../data/animations';
import { illustrationFor } from '../data/illustrations';
import { LANGUAGES, type LanguageCode } from '../types';
import { RULE, SPACE, TARGET, TYPE, type Ink, type Theme } from '../theme';
import { Halftone, Plate, PressBlock, Rule, Stamp } from '../design/Press';
import { IconBack, IconChevron, IconSecondPass } from '../design/icons';
import { isRTL as layoutIsRTL } from '../design/direction';
import { plateInk } from '../design/storyInk';
import { useMode } from '../ModeContext';
import { toArabicDigits } from './HomeScreen';
import type { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Story'>;

// react-native-web has no native animation driver, so transforms there must be
// driven from JS. On device the native driver keeps the drift off the JS thread.
const useNativeDriver = Platform.OS !== 'web';

// Drift tuning. One sweep takes DRIFT_MS, so the block travels 2 × DRIFT_X
// across it — roughly 8px a second, slow enough to stay calm and fast enough
// to be seen. The minimum scale must cover the translation: at scale s a frame
// of width w hides w × (s − 1) / 2 on each side.
const DRIFT_MS = 7000;
const DRIFT_SCALE_MIN = 1.14;
const DRIFT_SCALE_MAX = 1.3;
const DRIFT_X = 30;
const DRIFT_Y = 18;

export default function StoryScreen({ route, navigation }: Props) {
  const { theme, night } = useMode();
  const insets = useSafeAreaInsets();
  const story = useMemo(
    () => STORIES.find((s) => s.id === route.params.storyId)!,
    [route.params.storyId]
  );
  const storyIndex = useMemo(() => STORIES.findIndex((s) => s.id === story.id), [story.id]);
  const inkKey = plateInk(story.id, storyIndex);
  const ink = inkKey === 'ink' ? theme.ink : theme[inkKey as Ink];

  // Egyptian colloquial leads: it is the way the story is told at home.
  const [language, setLanguage] = useState<LanguageCode>('ar-EG');
  const [pageIndex, setPageIndex] = useState(0);
  const [secondPass, setSecondPass] = useState(false);

  const page = story.pages[pageIndex];
  const illustration = illustrationFor(story.id, pageIndex);
  const animation = animationFor(story.id, pageIndex);
  const languageMeta = LANGUAGES.find((l) => l.code === language)!;
  // The selected track's own direction, which is not the page's layout
  // direction: the page is always right-to-left because Arabic leads.
  const isRTL = languageMeta.rtl;
  const isArabic = language === 'ar-EG' || language === 'ar-MSA';
  const isFirstPage = pageIndex === 0;
  const isLastPage = pageIndex === story.pages.length - 1;

  const entrance = useRef(new Animated.Value(0)).current;
  const drift = useRef(new Animated.Value(0)).current;

  const player = useVideoPlayer(animation ?? null, (instance) => {
    instance.loop = true;
    instance.muted = true;
    instance.play();
  });

  // play() inside the setup callback can run before the source is ready, which
  // leaves the clip paused on its first frame. Asking again once the page's
  // clip resolves is what actually starts it.
  useEffect(() => {
    if (!animation) return;
    player.loop = true;
    player.muted = true;
    player.play();
  }, [animation, player, pageIndex]);

  useEffect(() => {
    entrance.setValue(0);
    drift.setValue(0);

    const lay = Animated.timing(entrance, {
      toValue: 1,
      duration: 520,
      easing: Easing.out(Easing.cubic),
      useNativeDriver,
    });
    // Bounded, not perpetual: the lay-down is the authored moment, and a
    // permanent Ken Burns underneath it never lets the page come to rest.
    const pan = Animated.loop(
      Animated.sequence([
        Animated.timing(drift, {
          toValue: 1,
          duration: DRIFT_MS,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver,
        }),
        Animated.timing(drift, {
          toValue: 0,
          duration: DRIFT_MS,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver,
        }),
      ]),
      { iterations: 3 }
    );

    lay.start();
    pan.start();
    return () => {
      lay.stop();
      pan.stop();
    };
  }, [pageIndex, language, entrance, drift]);

  const driftsLeft = pageIndex % 2 === 0;
  const blockStyle = {
    transform: [
      {
        scale: drift.interpolate({
          inputRange: [0, 1],
          outputRange: [DRIFT_SCALE_MIN, DRIFT_SCALE_MAX],
        }),
      },
      {
        translateX: drift.interpolate({
          inputRange: [0, 1],
          outputRange: driftsLeft ? [DRIFT_X, -DRIFT_X] : [-DRIFT_X, DRIFT_X],
        }),
      },
      {
        translateY: drift.interpolate({
          inputRange: [0, 1],
          outputRange: driftsLeft ? [DRIFT_Y, -DRIFT_Y] : [-DRIFT_Y, DRIFT_Y],
        }),
      },
    ],
  };

  // The authored moment: a fresh plate laid onto the press, settling from
  // off-register and off-square into position. One motion, on the one thing
  // that actually changes.
  const layStyle = {
    opacity: entrance,
    transform: [
      {
        translateX: entrance.interpolate({
          inputRange: [0, 1],
          outputRange: [isRTL ? -26 : 26, 0],
        }),
      },
      { translateY: entrance.interpolate({ inputRange: [0, 1], outputRange: [14, 0] }) },
      {
        rotate: entrance.interpolate({
          inputRange: [0, 1],
          outputRange: [isRTL ? '-1.4deg' : '1.4deg', '0deg'],
        }),
      },
    ],
  };

  const turn = useCallback((next: number) => {
    setPageIndex(next);
    setSecondPass(false);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.ground }]}>
      <Halftone theme={theme} pitch={7} />

      <View style={[styles.bar, { paddingTop: insets.top + SPACE.snug }]}>
        <Pressable
          onPress={() => navigation.goBack()}
          accessibilityRole="button"
          accessibilityLabel="Back to the stories"
          hitSlop={12}
          style={styles.barButton}
        >
          <IconBack size={22} color={theme.onGround} />
        </Pressable>
        <View style={styles.barTitle}>
          <Text
            numberOfLines={1}
            style={[TYPE.mastheadLatin, styles.barTitleText, { color: theme.onGround }]}
          >
            {story.title['ar-EG']}
          </Text>
        </View>
        <View style={styles.barButton} />
      </View>
      <Rule theme={theme} weight={RULE.keyline} color={theme.onGroundMuted} />

      <ScrollView
        contentContainerStyle={[styles.scroll, { paddingBottom: SPACE.band }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.column}>
        <View style={styles.trackRow}>
          {LANGUAGES.map((lang) => {
            const active = language === lang.code;
            return (
              <Pressable
                key={lang.code}
                onPress={() => setLanguage(lang.code)}
                accessibilityRole="button"
                accessibilityState={{ selected: active }}
                style={[
                  styles.track,
                  {
                    borderColor: theme.onGround,
                    backgroundColor: active ? theme.onGround : 'transparent',
                  },
                ]}
              >
                <Text
                  style={[
                    lang.rtl ? TYPE.stampAr : TYPE.stamp,
                    { color: active ? theme.ground : theme.onGround },
                  ]}
                >
                  {lang.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <Animated.View style={[styles.sheet, layStyle]}>
          <Plate theme={theme} style={styles.page}>
            <View
              style={[
                styles.block,
                illustration || animation ? styles.blockArt : styles.blockSet,
                { borderBottomColor: theme.ink },
              ]}
            >
              {animation ? (
                <VideoView
                  player={player}
                  style={styles.media}
                  contentFit="cover"
                  nativeControls={false}
                />
              ) : illustration ? (
                <>
                  <Animated.Image
                    source={illustration}
                    style={[styles.media, blockStyle]}
                    resizeMode="cover"
                  />
                  {night ? (
                    <View
                      pointerEvents="none"
                      style={[styles.nightPass, { backgroundColor: theme.ground }]}
                    />
                  ) : null}
                </>
              ) : (
                <PressBlock theme={theme} ink={ink} title={story.title['ar-EG']} scale="lead" />
              )}
            </View>

            <View style={styles.text}>
              <Text
                style={[
                  isArabic ? TYPE.storyAr : TYPE.storyEn,
                  { color: theme.inkBody },
                  isRTL && styles.rtl,
                ]}
              >
                {page.text[language]}
              </Text>

              {isArabic && secondPass ? (
                <View style={[styles.secondPass, { borderTopColor: theme.inkMuted }]}>
                  <Text style={[TYPE.storyEn, { color: theme.inkMuted }]}>{page.text.en}</Text>
                </View>
              ) : null}
            </View>
          </Plate>
        </Animated.View>

        <View style={styles.folio}>
          <Text style={[TYPE.numeral, styles.folioNumber, { color: theme.onGround }]}>
            {toArabicDigits(pageIndex + 1)}
          </Text>
          <View style={styles.folioMeta}>
            <Stamp theme={theme} label={`of ${story.pages.length}`} color={theme.onGround} />
            {isArabic ? (
              <Pressable
                onPress={() => setSecondPass((v) => !v)}
                accessibilityRole="button"
                accessibilityState={{ selected: secondPass }}
                style={[
                  styles.secondPassButton,
                  {
                    borderColor: theme.onGround,
                    backgroundColor: secondPass ? theme.onGround : 'transparent',
                  },
                ]}
              >
                <IconSecondPass size={15} color={secondPass ? theme.ground : theme.onGround} />
                <Text
                  style={[
                    TYPE.stamp,
                    styles.secondPassLabel,
                    { color: secondPass ? theme.ground : theme.onGround },
                  ]}
                >
                  ENGLISH
                </Text>
              </Pressable>
            ) : null}
          </View>
        </View>
        </View>
      </ScrollView>

      <View
        style={[
          styles.turnBarOuter,
          { borderTopColor: theme.onGroundMuted, paddingBottom: insets.bottom + SPACE.snug },
        ]}
      >
        <View style={styles.turnBar}>
        <TurnButton
          theme={theme}
          facing={layoutIsRTL() ? 'right' : 'left'}
          label="Previous page"
          disabled={isFirstPage}
          onPress={() => turn(pageIndex - 1)}
        />
        <View style={styles.pips}>
          {story.pages.map((_, i) => (
            <View
              key={i}
              style={[
                styles.pip,
                { borderColor: theme.onGround },
                i === pageIndex && { backgroundColor: theme.onGround },
              ]}
            />
          ))}
        </View>
        <TurnButton
          theme={theme}
          facing={layoutIsRTL() ? 'left' : 'right'}
          label="Next page"
          disabled={isLastPage}
          onPress={() => turn(pageIndex + 1)}
        />
        </View>
      </View>
    </View>
  );
}

function TurnButton({
  theme,
  facing,
  label,
  disabled,
  onPress,
}: {
  theme: Theme;
  facing: 'left' | 'right';
  label: string;
  disabled: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled }}
      hitSlop={10}
      style={({ pressed }) => [
        styles.turn,
        { borderColor: theme.onGround },
        disabled && styles.turnDisabled,
        pressed && !disabled && { backgroundColor: theme.groundDeep },
      ]}
    >
      <IconChevron size={22} color={theme.onGround} facing={facing} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACE.gutter,
    paddingBottom: SPACE.snug,
  },
  barButton: { width: 30, alignItems: 'flex-start' },
  barTitle: { flex: 1, alignItems: 'center' },
  barTitleText: { writingDirection: 'rtl' },

  scroll: {
    paddingHorizontal: SPACE.gutter,
    paddingTop: SPACE.base,
    alignItems: 'center',
    flexGrow: 1,
  },
  column: { width: '100%', maxWidth: 560, flex: 1 },

  trackRow: { flexDirection: 'row', gap: SPACE.tight, marginBottom: SPACE.base },
  track: {
    borderWidth: RULE.hair,
    paddingHorizontal: SPACE.base,
    minHeight: TARGET,
    minWidth: TARGET,
    alignItems: 'center',
    justifyContent: 'center',
  },

  sheet: { flex: 1, width: '100%' },
  page: { width: '100%', flex: 1 },
  block: { width: '100%', borderBottomWidth: RULE.heavy, overflow: 'hidden' },
  blockArt: { aspectRatio: 4 / 3 },
  // A block with no picture in it does not deserve the same height as one with
  // a picture: the reading column gets the difference.
  blockSet: { aspectRatio: 16 / 9 },
  // The night impression: the press ground overprinted across the block so the
  // brightest thing at bedtime is not an untreated daylight photograph.
  nightPass: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.34 },
  media: { width: '100%', height: '100%' },

  text: { padding: SPACE.base, flex: 1 },
  rtl: { writingDirection: 'rtl', textAlign: 'right' },
  secondPass: { marginTop: SPACE.base, paddingTop: SPACE.snug, borderTopWidth: RULE.hair },

  folio: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: SPACE.base,
    marginTop: SPACE.snug,
  },
  folioNumber: { includeFontPadding: false },
  folioMeta: { alignItems: 'flex-start', gap: SPACE.tight, paddingBottom: SPACE.snug },
  secondPassButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACE.tight,
    borderWidth: RULE.hair,
    paddingHorizontal: SPACE.base,
    minHeight: TARGET,
  },
  secondPassLabel: { fontWeight: '700' },

  // The turn controls belong to the page, not to the screen edge: without the
  // measure they splay to the far corners on a tablet or desktop window.
  turnBarOuter: {
    alignItems: 'center',
    paddingHorizontal: SPACE.gutter,
    paddingTop: SPACE.snug,
    borderTopWidth: RULE.keyline,
  },
  turnBar: {
    width: '100%',
    maxWidth: 560,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  turn: {
    borderWidth: RULE.keyline,
    paddingHorizontal: SPACE.wide,
    minHeight: TARGET,
    alignItems: 'center',
    justifyContent: 'center',
  },
  turnDisabled: { opacity: 0.32 },
  pips: { flexDirection: 'row', gap: SPACE.tight },
  pip: { width: 9, height: 9, borderWidth: RULE.hair },
});
