import { useMemo, useState } from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { STORIES } from '../data/stories';
import { AGE_BANDS, AgeBand, StoryMood } from '../types';
import { useMode } from '../ModeContext';
import type { ModePreference } from '../services/timeOfDay';
import type { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

type MoodFilter = StoryMood | 'all';

const MODE_OPTIONS: { value: ModePreference; label: string }[] = [
  { value: 'auto', label: 'Auto' },
  { value: 'day', label: '☀️ Day' },
  { value: 'night', label: '🌙 Night' },
];

export default function HomeScreen({ navigation }: Props) {
  const { theme, night, preference, setPreference } = useMode();
  const [age, setAge] = useState<AgeBand | 'all'>('all');
  // The mood filter is not stored: it follows day/night unless the parent
  // overrides it for this visit. At 8pm you want bedtime stories without
  // having to ask for them.
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

  const moodOptions: { value: MoodFilter; label: string }[] = [
    { value: 'bedtime', label: '🌙 Bedtime' },
    { value: 'daytime', label: '☀️ Daytime' },
    { value: 'all', label: 'All stories' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      <View style={styles.hero}>
        <Text style={[styles.kicker, { color: night ? '#9C8BE0' : '#B173F5' }]}>
          {night ? 'BEDTIME' : 'STORY TIME'}
        </Text>
        <Text style={[styles.header, { color: theme.text }]}>
          {night ? 'Time to wind\ndown 🌙' : 'What shall we\nread today? 🌈'}
        </Text>
      </View>

      <View style={styles.filters}>
        <FilterRow label="Mode">
          {MODE_OPTIONS.map((option) => (
            <Chip
              key={option.value}
              label={option.label}
              active={preference === option.value}
              onPress={() => setPreference(option.value)}
            />
          ))}
        </FilterRow>

        <FilterRow label="Age">
          <Chip label="All ages" active={age === 'all'} onPress={() => setAge('all')} />
          {AGE_BANDS.map((band) => (
            <Chip key={band} label={band} active={age === band} onPress={() => setAge(band)} />
          ))}
        </FilterRow>

        <FilterRow label="When">
          {moodOptions.map((option) => (
            <Chip
              key={option.value}
              label={option.label}
              active={mood === option.value}
              onPress={() => setMoodOverride(option.value)}
            />
          ))}
        </FilterRow>
      </View>

      <FlatList
        data={stories}
        keyExtractor={(story) => story.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={[styles.empty, { color: theme.textMuted }]}>
            No stories match these filters yet. Try “All stories”.
          </Text>
        }
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [
              styles.card,
              { backgroundColor: theme.card, borderColor: night ? theme.cardBorder : item.color },
              pressed && styles.cardPressed,
            ]}
            onPress={() => navigation.navigate('Story', { storyId: item.id })}
          >
            <View style={[styles.badge, { backgroundColor: night ? theme.bg : item.tint }]}>
              <Text style={styles.badgeEmoji}>{item.emoji}</Text>
            </View>
            <View style={styles.cardBody}>
              <Text style={[styles.cardTitle, { color: theme.text }]}>{item.title.en}</Text>
              <Text style={[styles.cardArabic, { color: theme.textMuted }]}>
                {item.title['ar-EG']}
              </Text>
              <View style={styles.cardMetaRow}>
                <View style={[styles.tag, { backgroundColor: night ? theme.bg : item.tint }]}>
                  <Text style={[styles.tagText, { color: night ? theme.textMuted : item.color }]}>
                    {item.ageBands.join(' · ')}
                  </Text>
                </View>
                <View style={[styles.tag, { backgroundColor: night ? theme.bg : item.tint }]}>
                  <Text style={[styles.tagText, { color: night ? theme.textMuted : item.color }]}>
                    {item.minutes} min
                  </Text>
                </View>
                <Text style={[styles.origin, { color: theme.textMuted }]}>{item.origin}</Text>
              </View>
            </View>
            <Text style={[styles.chevron, { color: night ? theme.textMuted : item.color }]}>›</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  const { theme } = useMode();
  return (
    <View style={styles.filterRow}>
      <Text style={[styles.filterLabel, { color: theme.textMuted }]}>{label}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipRow}>
        {children}
      </ScrollView>
    </View>
  );
}

function Chip({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  const { theme, night } = useMode();
  const activeBg = night ? '#5B6ABF' : '#7C5CFC';
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.chip,
        { backgroundColor: active ? activeBg : theme.pill, borderColor: active ? activeBg : theme.pillBorder },
      ]}
    >
      <Text style={[styles.chipText, { color: active ? '#FFFFFF' : theme.textMuted }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  hero: { paddingHorizontal: 24, paddingTop: 28, paddingBottom: 14 },
  kicker: { fontSize: 13, fontWeight: '800', letterSpacing: 2, marginBottom: 6 },
  header: { fontSize: 30, lineHeight: 36, fontWeight: '800' },
  filters: { paddingBottom: 6, gap: 8 },
  filterRow: { gap: 4 },
  filterLabel: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    paddingHorizontal: 24,
  },
  chipRow: { paddingHorizontal: 20, gap: 8, paddingVertical: 2 },
  chip: { paddingHorizontal: 14, paddingVertical: 7, borderRadius: 999, borderWidth: 2 },
  chipText: { fontSize: 13, fontWeight: '800' },
  list: { paddingHorizontal: 20, paddingBottom: 24, paddingTop: 12, gap: 14 },
  empty: { textAlign: 'center', paddingTop: 40, fontSize: 15, fontWeight: '600' },
  card: {
    borderRadius: 24,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    borderWidth: 2,
    shadowColor: '#3A2E5C',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  cardPressed: { opacity: 0.8, transform: [{ scale: 0.99 }] },
  badge: { width: 64, height: 64, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  badgeEmoji: { fontSize: 34 },
  cardBody: { flex: 1, gap: 4 },
  cardTitle: { fontSize: 18, fontWeight: '800' },
  // Kept left-aligned so it sits directly under the English title. Arabic
  // letter shaping is automatic and does not depend on writingDirection.
  cardArabic: { fontSize: 14, fontWeight: '600', textAlign: 'left' },
  cardMetaRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 4, flexWrap: 'wrap' },
  tag: { paddingHorizontal: 10, paddingVertical: 3, borderRadius: 999 },
  tagText: { fontSize: 11, fontWeight: '800', letterSpacing: 0.3 },
  origin: { fontSize: 11, fontWeight: '600' },
  chevron: { fontSize: 28, fontWeight: '800' },
});
