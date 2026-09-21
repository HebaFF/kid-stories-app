import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { STORIES } from '../data/stories';
import { LANGUAGES, LanguageCode } from '../types';
import { useVideoPlayer, VideoView } from 'expo-video';
import { animationFor } from '../data/animations';
import { illustrationFor } from '../data/illustrations';
import { useMode } from '../ModeContext';
import type { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Story'>;

// react-native-web has no native animation driver, so transforms there must be
// driven from JS. On device the native driver keeps the drift off the JS thread.
const useNativeDriver = Platform.OS !== 'web';

// Drift tuning. One full sweep takes DRIFT_MS, so the image travels
// 2 * DRIFT_X horizontally in that time — currently about 8px per second,
// which is slow enough to stay calm but fast enough to actually be seen.
// The minimum scale must leave enough overflow to cover the translation:
// at scale s a frame of width w hides w * (s - 1) / 2 on each side.
const DRIFT_MS = 7000;
const DRIFT_SCALE_MIN = 1.14;
const DRIFT_SCALE_MAX = 1.3;
const DRIFT_X = 30;
const DRIFT_Y = 18;

export default function StoryScreen({ route, navigation }: Props) {
  const { theme, night } = useMode();
  const story = useMemo(
    () => STORIES.find((s) => s.id === route.params.storyId)!,
    [route.params.storyId]
  );

  // Egyptian colloquial is the default track: it is the way the story would be
  // told out loud at home.
  const [language, setLanguage] = useState<LanguageCode>('ar-EG');
  const [pageIndex, setPageIndex] = useState(0);
  const [showEnglish, setShowEnglish] = useState(false);

  // Two animations run on every page: the page slides and fades in as it
  // arrives, and the illustration drifts continuously (a "Ken Burns" move).
  // The drift is what makes a still picture feel alive without the cost, wait
  // and file size of real video — but only if you can actually see it. An
  // earlier pass drifted 14px over 16 seconds, which works out at about one
  // pixel per second and reads as a completely static image.
  const entrance = useRef(new Animated.Value(0)).current;
  const drift = useRef(new Animated.Value(0)).current;

  const languageMeta = LANGUAGES.find((l) => l.code === language)!;
  const isRTL = languageMeta.rtl;
  const isArabic = language === 'ar-EG' || language === 'ar-MSA';
  const page = story.pages[pageIndex];
  const illustration = illustrationFor(story.id, pageIndex);
  const animation = animationFor(story.id, pageIndex);

  // The hook has to run on every render, so a page with no clip passes null
  // and simply renders nothing. Clips are silent and looped: five seconds is
  // shorter than a page takes to read, and a soundtrack would fight the
  // narration once that exists.
  const player = useVideoPlayer(animation ?? null, (instance) => {
    instance.loop = true;
    instance.muted = true;
    instance.play();
  });
  const isLastPage = pageIndex === story.pages.length - 1;
  const isFirstPage = pageIndex === 0;

  useEffect(() => {
    navigation.setOptions({
      title: story.title[language],
      headerStyle: { backgroundColor: theme.headerBg },
      headerTitleStyle: { color: theme.text, fontWeight: '800' },
      headerTintColor: theme.text,
    });
  }, [language, story, navigation, theme]);

  useEffect(() => {
    entrance.setValue(0);
    drift.setValue(0);

    const fadeIn = Animated.timing(entrance, {
      toValue: 1,
      duration: 520,
      easing: Easing.out(Easing.cubic),
      useNativeDriver,
    });

    // Slow enough that it reads as calm rather than as movement a child would
    // watch instead of reading. Runs out and back so it never jumps.
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
      ])
    );

    fadeIn.start();
    pan.start();
    return () => {
      fadeIn.stop();
      pan.stop();
    };
  }, [pageIndex, language, entrance, drift]);

  // The setup callback passed to useVideoPlayer runs when the player is built,
  // which can be before the source is ready — the clip then sits paused on its
  // first frame. Asking again once the page's clip is resolved is what actually
  // starts it.
  useEffect(() => {
    if (!animation) return;
    player.loop = true;
    player.muted = true;
    player.play();
  }, [animation, player, pageIndex]);

  // Alternating direction per page stops the drift looking mechanical when a
  // parent turns several pages in a row.
  const driftsLeft = pageIndex % 2 === 0;
  const imageStyle = {
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

  // Pages slide in from the side they were turned from, so a page turn reads
  // as a page turn rather than as the text simply changing.
  const entranceStyle = {
    opacity: entrance,
    transform: [
      {
        translateX: entrance.interpolate({
          inputRange: [0, 1],
          outputRange: [isRTL ? -44 : 44, 0],
        }),
      },
      { scale: entrance.interpolate({ inputRange: [0, 1], outputRange: [0.96, 1] }) },
    ],
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.languageScroll}
        contentContainerStyle={styles.languageRow}
      >
        {LANGUAGES.map((lang) => {
          const active = language === lang.code;
          return (
            <Pressable
              key={lang.code}
              style={[
                styles.langPill,
                {
                  backgroundColor: active ? lang.color : theme.pill,
                  borderColor: active ? lang.color : theme.pillBorder,
                },
              ]}
              onPress={() => setLanguage(lang.code)}
            >
              <Text style={[styles.langPillText, { color: active ? '#FFFFFF' : theme.textMuted }]}>
                {lang.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <ScrollView contentContainerStyle={styles.pageScroll}>
        <Animated.View
          style={[
            styles.pageCard,
            {
              backgroundColor: night ? theme.card : story.tint,
              borderColor: night ? theme.cardBorder : story.color,
            },
            entranceStyle,
          ]}
        >
          {animation ? (
            <View style={styles.illustrationFrame}>
              <VideoView
                player={player}
                style={styles.illustration}
                contentFit="cover"
                nativeControls={false}
              />
            </View>
          ) : illustration ? (
            <View style={styles.illustrationFrame}>
              <Animated.Image
                source={illustration}
                style={[styles.illustration, imageStyle]}
                resizeMode="cover"
              />
            </View>
          ) : page.imageUri ? (
            <View style={styles.illustrationFrame}>
              <Animated.Image
                source={{ uri: page.imageUri }}
                style={[styles.illustration, imageStyle]}
                resizeMode="cover"
              />
            </View>
          ) : (
            <Text style={styles.pageEmoji}>{story.emoji}</Text>
          )}

          <Text style={[styles.pageText, { color: theme.text }, isRTL && styles.rtlText]}>
            {page.text[language]}
          </Text>

          {/* Bilingual reading: the English sits under the Arabic rather than
              replacing it, so a child can look across from one to the other
              without losing their place. */}
          {isArabic && showEnglish && (
            <View style={[styles.translationBlock, { borderTopColor: theme.cardBorder }]}>
              <Text style={[styles.translationText, { color: theme.textMuted }]}>
                {page.text.en}
              </Text>
            </View>
          )}
        </Animated.View>

        <Text style={[styles.pageCounter, { color: theme.textMuted }]}>
          Page {pageIndex + 1} of {story.pages.length}
        </Text>
      </ScrollView>

      {isArabic && (
        <View style={styles.translateRow}>
          <Pressable
            onPress={() => setShowEnglish((value) => !value)}
            style={[
              styles.translateButton,
              {
                backgroundColor: showEnglish ? (night ? '#5B6ABF' : story.color) : theme.pill,
                borderColor: showEnglish ? (night ? '#5B6ABF' : story.color) : theme.pillBorder,
              },
            ]}
          >
            <Text
              style={[styles.translateText, { color: showEnglish ? '#FFFFFF' : theme.textMuted }]}
            >
              {showEnglish ? '🔤  Hide English' : '🔤  Show English'}
            </Text>
          </Pressable>
        </View>
      )}

      <View style={styles.dots}>
        {story.pages.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              { backgroundColor: theme.cardBorder },
              i === pageIndex && [
                styles.dotActive,
                { backgroundColor: night ? '#8B7FE8' : story.color },
              ],
            ]}
          />
        ))}
      </View>

      <View style={styles.controls}>
        <Pressable
          style={[
            styles.navButton,
            { backgroundColor: theme.pill, borderColor: theme.pillBorder },
            isFirstPage && styles.navButtonDisabled,
          ]}
          disabled={isFirstPage}
          onPress={() => setPageIndex(pageIndex - 1)}
        >
          <Text style={[styles.navButtonText, { color: theme.text }]}>◀</Text>
        </Pressable>

        <Pressable
          style={[
            styles.nextButton,
            { backgroundColor: night ? '#5B6ABF' : story.color },
            isLastPage && styles.navButtonDisabled,
          ]}
          disabled={isLastPage}
          onPress={() => setPageIndex(pageIndex + 1)}
        >
          <Text style={styles.nextButtonText}>Next page</Text>
        </Pressable>

        <Pressable
          style={[
            styles.navButton,
            { backgroundColor: theme.pill, borderColor: theme.pillBorder },
            isLastPage && styles.navButtonDisabled,
          ]}
          disabled={isLastPage}
          onPress={() => setPageIndex(pageIndex + 1)}
        >
          <Text style={[styles.navButtonText, { color: theme.text }]}>▶</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  // A horizontal ScrollView inside a flex column stretches to fill the
  // remaining height unless told not to, which would blow the pills up into
  // tall bars. flexGrow: 0 makes it hug its content.
  languageScroll: { flexGrow: 0, flexShrink: 0 },
  languageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 6,
  },
  langPill: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 999, borderWidth: 2 },
  langPillText: { fontSize: 14, fontWeight: '800' },
  pageScroll: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  // Capped so the page keeps book-like proportions on a tablet or a wide
  // browser window; without it the illustration grows until the text is pushed
  // off screen.
  pageCard: {
    width: '100%',
    maxWidth: 520,
    borderRadius: 28,
    borderWidth: 2,
    padding: 24,
    alignItems: 'center',
  },
  illustrationFrame: {
    width: '100%',
    aspectRatio: 4 / 3,
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 18,
  },
  illustration: { width: '100%', height: '100%' },
  pageEmoji: { fontSize: 52, marginBottom: 18 },
  pageText: { fontSize: 21, lineHeight: 34, textAlign: 'left', fontWeight: '500' },
  rtlText: { writingDirection: 'rtl', textAlign: 'right' },
  translationBlock: {
    marginTop: 18,
    paddingTop: 16,
    borderTopWidth: 1,
    width: '100%',
  },
  translationText: { fontSize: 16, lineHeight: 25, fontWeight: '500', textAlign: 'left' },
  pageCounter: { marginTop: 14, fontSize: 13, fontWeight: '700' },
  translateRow: { alignItems: 'center', paddingBottom: 10 },
  translateButton: { paddingHorizontal: 18, paddingVertical: 9, borderRadius: 999, borderWidth: 2 },
  translateText: { fontSize: 13, fontWeight: '800' },
  dots: { flexDirection: 'row', justifyContent: 'center', gap: 8, marginBottom: 12 },
  dot: { width: 8, height: 8, borderRadius: 4 },
  dotActive: { width: 22 },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 28,
    paddingTop: 8,
  },
  navButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  navButtonDisabled: { opacity: 0.3 },
  navButtonText: { fontSize: 18 },
  nextButton: {
    paddingHorizontal: 30,
    paddingVertical: 17,
    borderRadius: 999,
    shadowColor: '#3A2E5C',
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  nextButtonText: { fontSize: 16, fontWeight: '800', color: '#FFFFFF' },
});
