import { useMemo, useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { STORIES } from '../data/stories';
import { illustrationFor } from '../data/illustrations';
import { AGE_BANDS, type AgeBand, type Story, type StoryMood } from '../types';
import { RULE, SPACE, TARGET, TYPE, type Ink, type Theme } from '../theme';
import { Halftone, InkTitle, Plate, PressBlock, Rule, Stamp } from '../design/Press';
import { IconClock, IconMoon, IconSun, PressMark } from '../design/icons';
import { plateInk } from '../design/storyInk';
import { useMode } from '../ModeContext';
import type { ModePreference } from '../services/timeOfDay';
import type { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
type MoodFilter = StoryMood | 'all';

/**
 * Arabic-Indic numerals. An Egyptian magazine sets its page numbers and its
 * ages in ٠١٢٣, and rendering them in Latin digits is the small tell that a
 * layout was built for English and translated afterwards.
 */
const ARABIC_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
export function toArabicDigits(value: string | number): string {
  return String(value).replace(/\d/g, (d) => ARABIC_DIGITS[Number(d)]);
}

const MODES: { value: ModePreference; label: string }[] = [
  { value: 'auto', label: 'auto' },
  { value: 'day', label: 'day' },
  { value: 'night', label: 'night' },
];

const AGE_LABELS: Record<AgeBand | 'all', string> = {
  all: 'كل الأعمار',
  '2-4': toArabicDigits('2-4'),
  '5-7': toArabicDigits('5-7'),
  '8-10': toArabicDigits('8-10'),
};

const MOOD_LABELS: Record<MoodFilter, string> = {
  bedtime: 'قبل النوم',
  daytime: 'بالنهار',
  any: 'أي وقت',
  all: 'كل الحكايات',
};

export default function HomeScreen({ navigation }: Props) {
  const { theme, night, preference, setPreference } = useMode();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  // A magazine opens wider on a bigger sheet: past this the grid runs three-up
  // inside a broader measure rather than centring a phone column in empty ink.
  const spread = width >= 900;
  const [age, setAge] = useState<AgeBand | 'all'>('all');
  const [moodOverride, setMoodOverride] = useState<MoodFilter | null>(null);
  const mood: MoodFilter = moodOverride ?? (night ? 'bedtime' : 'daytime');

  const stories = useMemo(
    () =>
      STORIES.filter((story) => {
        const ageOk = age === 'all' || story.ageBands.includes(age);
        const moodOk = mood === 'all' || story.mood === mood || story.mood === 'any';
        return ageOk && moodOk;
      }),
    [age, mood]
  );

  const [lead, ...rest] = stories;

  return (
    <View style={[styles.container, { backgroundColor: theme.ground }]}>
      <Halftone theme={theme} pitch={7} />
      <ScrollView
        contentContainerStyle={[
          styles.scroll,
          { paddingTop: insets.top + SPACE.base, paddingBottom: insets.bottom + SPACE.band },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.column, spread && styles.columnSpread]}>
        <Masthead theme={theme} count={stories.length} />

        <View style={styles.apparatus}>
          <StampRow>
            {MODES.map((option) => {
              const active = preference === option.value;
              const Icon =
                option.value === 'day' ? IconSun : option.value === 'night' ? IconMoon : IconClock;
              return (
                <Pressable
                  key={option.value}
                  onPress={() => setPreference(option.value)}
                  accessibilityRole="button"
                  accessibilityLabel={`${option.label} issue`}
                  accessibilityState={{ selected: active }}
                  style={[
                    styles.iconStamp,
                    {
                      borderColor: theme.onGround,
                      backgroundColor: active ? theme.onGround : 'transparent',
                    },
                  ]}
                >
                  <Icon size={17} color={active ? theme.ground : theme.onGround} />
                </Pressable>
              );
            })}

            <View style={styles.apparatusGap} />

            {(['all', ...AGE_BANDS] as (AgeBand | 'all')[]).map((band) => (
              <FilterStamp
                key={band}
                theme={theme}
                label={AGE_LABELS[band]}
                arabic
                active={age === band}
                onPress={() => setAge(band)}
              />
            ))}
          </StampRow>

          <StampRow>
            {(['bedtime', 'daytime', 'all'] as MoodFilter[]).map((value) => (
              <FilterStamp
                key={value}
                theme={theme}
                label={MOOD_LABELS[value]}
                arabic
                active={mood === value}
                onPress={() => setMoodOverride(value)}
              />
            ))}
          </StampRow>
        </View>

        {lead ? (
          <>
            <StoryPlate
              theme={theme}
              night={night}
              story={lead}
              index={0}
              lead
              onPress={() => navigation.navigate('Story', { storyId: lead.id })}
            />
            <View style={styles.grid}>
              {rest.map((story, i) => (
                <StoryPlate
                  key={story.id}
                  theme={theme}
                  night={night}
                  story={story}
                  index={i + 1}
                  onPress={() => navigation.navigate('Story', { storyId: story.id })}
                  style={spread ? styles.gridItemSpread : styles.gridItem}
                />
              ))}
            </View>
          </>
        ) : (
          <View style={styles.empty}>
            <PressMark size={44} color={theme.onGroundMuted} />
            <Text style={[TYPE.storyAr, styles.emptyText, { color: theme.onGround }]}>
              مفيش حكايات بالمواصفات دي.
            </Text>
            <Pressable onPress={() => setMoodOverride('all')} accessibilityRole="button">
              <Text style={[TYPE.stamp, { color: theme.onGroundMuted }]}>
                {'SHOW EVERY STORY'}
              </Text>
            </Pressable>
          </View>
        )}
        </View>
      </ScrollView>
    </View>
  );
}

function Masthead({ theme, count }: { theme: Theme; count: number }) {
  return (
    <View style={[styles.masthead, { backgroundColor: theme.groundDeep }]}>
      <Halftone theme={theme} pitch={5} />
      <InkTitle
        theme={theme}
        rtl
        shadowInk={theme.chrome}
        style={[TYPE.masthead, { color: theme.onGround }]}
      >
        حكايات مصرية
      </InkTitle>
      <Rule theme={theme} weight={RULE.heavy} color={theme.onGround} style={styles.mastheadRule} />
      <View style={styles.mastheadFoot}>
        <Text style={[TYPE.stamp, styles.mastheadLatin, { color: theme.onGround }]}>
          EGYPTIAN STORIES
        </Text>
        <Text style={[TYPE.stamp, styles.mastheadLatin, { color: theme.onGround }]}>
          {toArabicDigits(count)} حكاية
        </Text>
      </View>
    </View>
  );
}

function StampRow({ children }: { children: React.ReactNode }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.stampScroll}
      contentContainerStyle={styles.stampRow}
    >
      {children}
    </ScrollView>
  );
}

function FilterStamp({
  theme,
  label,
  active,
  onPress,
  arabic = false,
}: {
  theme: Theme;
  label: string;
  active: boolean;
  onPress: () => void;
  arabic?: boolean;
}) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
      style={[
        styles.filterStamp,
        {
          borderColor: theme.onGround,
          backgroundColor: active ? theme.onGround : 'transparent',
        },
      ]}
    >
      <Text
        style={[
          arabic ? TYPE.stampAr : TYPE.stamp,
          { color: active ? theme.ground : theme.onGround },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

function StoryPlate({
  theme,
  night,
  story,
  index,
  onPress,
  lead = false,
  style,
}: {
  theme: Theme;
  night: boolean;
  story: Story;
  index: number;
  onPress: () => void;
  lead?: boolean;
  style?: StyleProp<ViewStyle>;
}) {
  const inkKey = plateInk(story.id, index);
  const ink = inkKey === 'ink' ? theme.ink : theme[inkKey as Ink];
  const art = illustrationFor(story.id, 0);

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${story.title.en}. ${story.ageBands.join(', ')}. ${story.minutes} minutes.`}
      style={({ pressed }) => [style, pressed && styles.pressed]}
    >
      <Plate theme={theme} style={lead ? styles.leadPlate : styles.plate}>
        <View style={[styles.block, { aspectRatio: lead ? 16 / 10 : 4 / 3, borderBottomColor: theme.ink }]}>
          {art ? (
            <>
              <Image source={art} style={styles.art} resizeMode="cover" />
              {night ? (
                <View
                  pointerEvents="none"
                  style={[styles.nightPass, { backgroundColor: theme.ground }]}
                />
              ) : null}
            </>
          ) : (
            <PressBlock
              theme={theme}
              ink={ink}
              title={story.title['ar-EG']}
              scale={lead ? 'lead' : 'grid'}
            />
          )}
        </View>

        <View style={[styles.plateBody, lead && styles.leadBody]}>
          {art ? (
            <InkTitle
              theme={theme}
              rtl
              shadowInk={ink}
              offset={lead ? 2.5 : 2}
              style={[lead ? TYPE.leadTitleAr : TYPE.plateTitleAr, { color: theme.ink }]}
            >
              {story.title['ar-EG']}
            </InkTitle>
          ) : null}
          <Text
            style={[
              lead ? TYPE.leadTitleEn : TYPE.plateTitleEn,
              styles.titleEn,
              { color: theme.inkBody },
            ]}
            numberOfLines={2}
          >
            {story.title.en}
          </Text>

          <View style={styles.plateStamps}>
            <Stamp theme={theme} label={story.ageBands.join(' · ')} color={ink} />
            <Stamp
              theme={theme}
              label={`${story.minutes} min`}
              color={theme.ink}
              filled={!lead ? false : true}
            />
          </View>
          <Text style={[TYPE.stamp, styles.origin, { color: theme.inkMuted }]} numberOfLines={1}>
            {story.origin.toUpperCase()}
          </Text>
        </View>
      </Plate>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { paddingHorizontal: SPACE.gutter, alignItems: 'center' },
  // The page has a measure. A magazine plate that grows to fill a desktop
  // window is a different composition, not a larger one.
  column: { width: '100%', maxWidth: 560 },
  columnSpread: { maxWidth: 1040 },

  masthead: {
    marginBottom: SPACE.base,
    paddingHorizontal: SPACE.base,
    paddingTop: SPACE.snug,
    paddingBottom: SPACE.snug,
    overflow: 'hidden',
  },
  mastheadRule: { marginTop: SPACE.tight },
  mastheadFoot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SPACE.tight,
  },
  mastheadLatin: { fontWeight: '700' },

  apparatus: { gap: SPACE.tight, marginBottom: SPACE.wide },
  apparatusGap: { width: SPACE.snug },
  stampScroll: { flexGrow: 0 },
  stampRow: { flexDirection: 'row', alignItems: 'center', gap: SPACE.tight, paddingVertical: 2 },
  filterStamp: {
    borderWidth: RULE.hair,
    paddingHorizontal: SPACE.base,
    minHeight: TARGET,
    minWidth: TARGET,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStamp: {
    borderWidth: RULE.hair,
    paddingHorizontal: SPACE.snug,
    minHeight: TARGET,
    minWidth: TARGET,
    alignItems: 'center',
    justifyContent: 'center',
  },

  plate: { flex: 1 },
  leadPlate: { marginBottom: SPACE.gutter },
  pressed: { opacity: 0.86 },

  block: { width: '100%', borderBottomWidth: RULE.heavy },
  art: { width: '100%', height: '100%' },
  // The night impression, matching the reader: the press ground overprinted so
  // a daylight block is not the brightest thing on a bedtime screen.
  nightPass: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.34 },

  plateBody: { padding: SPACE.snug, gap: SPACE.hair },
  leadBody: { padding: SPACE.base },
  titleEn: { marginTop: SPACE.hair, textAlign: 'right' },
  plateStamps: {
    flexDirection: 'row',
    gap: SPACE.tight,
    marginTop: SPACE.tight,
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  origin: { marginTop: SPACE.tight, fontWeight: '600', textAlign: 'right' },

  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: SPACE.gutter },
  gridItem: { width: '47%', flexGrow: 1 },
  gridItemSpread: { width: '31%', flexGrow: 1 },

  empty: { alignItems: 'center', gap: SPACE.base, paddingVertical: SPACE.band * 2 },
  emptyText: { textAlign: 'center', writingDirection: 'rtl' },
});
