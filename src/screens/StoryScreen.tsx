import { useEffect, useMemo, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { STORIES } from '../data/stories';
import { LANGUAGES, LanguageCode } from '../types';
import { useMode } from '../ModeContext';
import type { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Story'>;

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

  const languageMeta = LANGUAGES.find((l) => l.code === language)!;
  const isRTL = languageMeta.rtl;
  const isArabic = language === 'ar-EG' || language === 'ar-MSA';
  const page = story.pages[pageIndex];
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
        <View
          style={[
            styles.pageCard,
            {
              backgroundColor: night ? theme.card : story.tint,
              borderColor: night ? theme.cardBorder : story.color,
            },
          ]}
        >
          {page.imageUri ? (
            <Image source={{ uri: page.imageUri }} style={styles.illustration} resizeMode="cover" />
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
        </View>

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
  pageCard: { width: '100%', borderRadius: 28, borderWidth: 2, padding: 24, alignItems: 'center' },
  illustration: { width: '100%', aspectRatio: 4 / 3, borderRadius: 18, marginBottom: 18 },
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
