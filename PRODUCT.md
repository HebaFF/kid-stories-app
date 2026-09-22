# Product

<!-- impeccable:product-schema 1 -->

## Platform

adaptive

Ships from one Expo codebase to iOS, Android and the web, and all three are
treated as first-class. One design language across all of them rather than a
per-OS look; native affordances (back gesture, safe areas, system text scaling)
must still be respected.

## Users

Egyptian families, both in Egypt and in the diaspora, confirmed as equally
important.

- **Parent, at bedtime.** Holding a phone in a dark room, often one-handed,
  often with a child leaning on them. Wants to choose something quickly and
  then stop operating the device.
- **Parent, during the day.** Wants something to occupy or teach a child that
  is theirs culturally, not dubbed foreign content.
- **Child, 2–10.** Sometimes reading, sometimes being read to, sometimes just
  looking at the pictures. Reading ability varies enormously across the range.
- **Diaspora parents specifically** are watching their children lose Arabic.
  The bilingual pairing is the mechanism that addresses this, not a nicety.

## Product Purpose

Egyptian children's stories a family can read together, in the dialect actually
spoken at home. Success is a parent reaching for it at bedtime instead of
YouTube, and a child abroad keeping a language they were otherwise losing.

## Positioning

Two things a neighbouring product cannot truthfully copy:

1. **Egyptian colloquial Arabic (عامية مصرية) as a first-class written track**,
   not Modern Standard Arabic with an Egyptian accent bolted on. Each story
   carries both, so the same book serves "the way we talk at home" and "the way
   you'll read it at school".
2. **Egyptian cultural source material.** Ancient Egyptian tales, Juha, Kalila
   wa Dimna, folk-hero stories. Disney and Khan Academy Kids cannot offer an
   Egyptian parent their own inheritance.

## Operating Context

- Bedtime is the primary scene: dark room, low light, quiet, often the last
  thing before sleep. Anything loud, bright or attention-grabbing works against
  the job.
- Connectivity is worst exactly when the app is most used — bedrooms, aeroplane
  mode. Content should not assume a working connection.
- Choosing is done under time pressure ("how long until sleep"), which is why
  read-aloud length is a first-class filter alongside age.
- **`netlify.app` is blocked from Egyptian networks** (verified 22 Sep 2026 on
  two independent sites). Hosting decisions must account for what is actually
  reachable from Egypt. Currently served from GitHub Pages, which is reachable.

## Capabilities and Constraints

**Confirmed functionality**
- Ten stories: seven Egyptian (ancient tales, Juha ×2, Kalila wa Dimna, folk
  hero, original bedtime), three Aesop.
- Three language tracks per story: `ar-EG` colloquial (default), `ar-MSA` with
  harakat, `en`. German retained in the data but not offered.
- "Show English" reveals the translation beneath the Arabic rather than
  replacing it, so a child can look across without losing their place.
- Filters: age bands 2–4 / 5–7 / 8–10; bedtime / daytime / all; read-aloud
  minutes shown per story.
- Day/night mode, Auto by the clock (night 19:00–06:00), re-checked each minute.
- Page art: a looping video clip where one exists, otherwise a still that drifts
  slowly, otherwise the story emoji. Currently one story is illustrated.

**Technical constraints**
- Expo SDK 57, React Native 0.86, TypeScript, React Navigation. Web build via
  react-native-web, exported static and served from a subpath.
- Arabic must render right-to-left with correct letter shaping. Per-word
  rendering is safe (Arabic never joins across spaces); per-letter is not.
- Asset weight is the binding constraint on video, not cost: a 5s clip is
  ~3.4MB against ~370KB for its still. The full library as video would be
  ~150MB, past what belongs in an app download.
- No audio at present. Narration is deliberately deferred.

**Explicitly undecided**
- Whether the full library gets video (needs hosting/streaming) or stills only.
- Whether narration is pre-rendered TTS or a cloned human voice.

## Brand Commitments

- Name in use: **حكايات مصرية / Story Time**. Not formally settled.
- The Arabic is the product, not a translation layer. It leads.
- Illustration style already established and binding across the library:
  soft watercolour children's-book illustration, warm Egyptian palette, gentle
  rounded shapes, thick soft outlines, **no text or lettering inside artwork**.

## Evidence on Hand

- Ten complete stories, three language tracks each: `src/data/stories.ts`,
  `src/data/egyptianStories.ts`.
- Four finished watercolour illustrations plus one 5s animated clip for
  *مركب الشمس في الليل*: `assets/illustrations/sun-boat/`.
- Per-page generation prompts stored with the content, so art can be
  regenerated consistently.
- Live at https://hebaff.github.io/kid-stories-app/ ; source at
  github.com/HebaFF/kid-stories-app.

**Absences future work must not fabricate:** there are no users yet, no
reviews, no downloads, no press, no awards. The Arabic has **not** been
reviewed by a native Egyptian speaker — that review is outstanding and must
not be implied as done.

## Product Principles

1. **Bedtime is the design case.** The dark, quiet, one-handed, half-asleep
   scene wins over the showcase screenshot when they conflict.
2. **Arabic leads.** It is the reason the product exists; it is never the
   secondary column or the afterthought in a layout built for English.
3. **The pictures are the product for a two-year-old.** A child who cannot read
   should still get a complete story.
4. **Choosing must be faster than scrolling YouTube**, or the parent goes back
   to YouTube.
5. **Cultural specificity over generic warmth.** The Nile, the palms, the
   barque, Juha — specific beats pleasant.

## Accessibility & Inclusion

- Right-to-left correctness is a functional requirement, not a nicety.
- Story text must stay legible for an emerging reader: generous size, generous
  line height, high contrast against its surface.
- Night mode must be genuinely low-glare — a bright surface in a dark bedroom
  is a defect, not a style choice.
- Target audience includes children who cannot yet read at all; no flow may
  depend on reading to be usable.
