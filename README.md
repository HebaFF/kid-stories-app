# Story Time

A kids' **reading** app: Egyptian Arabic and English stories, filtered by age
and by whether it is bedtime or daytime.

No audio yet — this is deliberate. Voice-over comes later, from Higgsfield
Audio. See [docs/HIGGSFIELD.md](docs/HIGGSFIELD.md).

## Running it

```bash
npm run web      # or: npm run ios / npm run android
```

For the iOS Simulator, Xcode needs to be the selected developer directory
(one-time, needs your password):

```bash
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```

## What's here

**Expo (React Native) app, TypeScript, SDK 57.** iOS, Android and web from one
codebase. Ten stories, seven of them Egyptian.

### Two Arabic tracks, plus English

Egyptian Arabic is a *spoken* dialect — Arabic children's books are written in
فصحى. Rather than pick one, each story carries both:

- **`ar-EG` — Egyptian colloquial.** The way the story would be told out loud at
  home. This is the default.
- **`ar-MSA` — Modern Standard Arabic** with harakat. The way kids are taught to
  read at school.
- **`en` — English**, as its own track *or* shown underneath the Arabic.

### Bilingual reading

On either Arabic track, **Show English** reveals the English translation
beneath the Arabic rather than replacing it, so a child can look across from one
to the other without losing their place.

### Age and time-of-day filtering

- **Age bands:** 2–4, 5–7, 8–10. A story may span more than one.
- **Mode:** Auto / Day / Night. On Auto the clock decides (night is 19:00–06:00)
  and re-checks every minute, so an app left open through the evening switches
  itself over.
- **When:** the story list follows the mode — at 8pm you get bedtime stories
  without asking — but a parent can override it to Daytime or All stories.
- **Length in minutes** is on every card, because "how long until sleep" is how
  parents actually choose.
- Night mode is warm and low-contrast rather than stark black, for reading in a
  dark room.

### Illustrations, and how they move

**مركب الشمس في الليل / The Sun's Night Boat is fully illustrated** — four
Higgsfield watercolours bundled in `assets/illustrations/sun-boat/`. The other
nine stories fall back to their emoji until their art is generated, so the app
is fully usable either way.

The pages animate without any video. Each illustration drifts slowly — a gentle
scale and pan over 16 seconds, out and back, alternating direction per page —
and each page fades and rises as it arrives. On a still watercolour it reads as
the picture breathing.

That is a choice, not a limitation: a still costs 6.5 credits and a 5-second
video clip costs about 45, and four JPEGs weigh 1.5MB where four clips would be
tens of megabytes. A looping video is also something a child *watches*; a slow
drift is something they read past, which is what a bedtime story wants.

Each page stores the Higgsfield prompt that produced its art, so any page can
be regenerated later in the same style. Credit costs, the style lock, character
consistency and the review gate are in
**[docs/HIGGSFIELD.md](docs/HIGGSFIELD.md)**.

## Stories

Ten stories, in `src/data/`.

| Story | Ages | When | Length | Source |
|---|---|---|---|---|
| نجمة على النيل / A Star on the Nile | 2–4 | Bedtime | 3 min | Original |
| مركب الشمس في الليل / The Sun's Night Boat | 2–4 | Bedtime | 3 min | Ancient Egyptian myth |
| القطة اللي حرست البيت / The Cat Who Guarded the House | 2–4, 5–7 | Bedtime | 4 min | Ancient Egyptian tradition |
| السلحفاة والأرنب / The Tortoise and the Hare | 2–4, 5–7 | Any | 4 min | Aesop |
| الأسد والأرنب الشاطر / The Lion and the Clever Hare | 5–7 | Any | 4 min | Kalila wa Dimna |
| جحا وابنه والحمار / Juha, His Son and the Donkey | 5–7, 8–10 | Daytime | 5 min | Egyptian folk tale |
| مسمار جحا / Juha's Nail | 5–7, 8–10 | Daytime | 4 min | Egyptian folk tale |
| الملاح الغريق / The Shipwrecked Sailor | 5–7, 8–10 | Daytime | 6 min | Ancient Egyptian, c. 1900 BCE |
| الراعي الكذاب / The Boy Who Cried Wolf | 5–7, 8–10 | Daytime | 5 min | Aesop |
| الشاطر حسن وسؤال السلطان / Clever Hassan | 8–10 | Daytime | 5 min | Egyptian folk tale |

Seven of the ten are Egyptian — ancient tales, Juha, Kalila wa Dimna and the
folk-hero tradition. That is the point of the app, not decoration.

### On copyright

Everything here is built on material that is out of copyright: tales that are
centuries or millennia old.

**But a public-domain tale does not make somebody's retelling of it free to
copy.** A specific published version, a translation, or a website's wording
belongs to its author. So every word in this app is an original retelling
written from the traditional plot.

Keep that rule when adding stories: **take the plot, write your own words.**

- `src/data/stories.ts` — the general collection
- `src/data/egyptianStories.ts` — the Egyptian collection
- `src/data/illustrationStyle.ts` — the shared art style both use

Adding a story means copying one block and changing the text. No other file
needs touching.

## Before this goes in front of children

- **The Arabic was drafted by an AI assistant and needs a native Egyptian
  speaker's review** — the colloquial track above all.
- **Every generated illustration needs human review before `imageUri` is set.**
  Never auto-publish model output into a children's app.
- Full checklist at the end of [docs/HIGGSFIELD.md](docs/HIGGSFIELD.md).

## Notes

- German translations from an earlier build are kept in the story data as an
  optional `de` field, but German is not offered in the language picker. Add it
  back to `LANGUAGES` in `src/types.ts` to re-enable it.
- `expo-speech` and `expo-audio` are still installed, unused for now, ready for
  when audio is added.

## Next steps

- Native-speaker pass on the Arabic.
- Generate illustrations for one story end-to-end as a pipeline dry run.
- Test one page of Higgsfield Arabic audio and decide word- vs sentence-level
  highlighting.
- Offline download-for-later — essential for bedtime, where wi-fi is worst.
- Tap-a-single-word-for-English, rather than the whole-page toggle.
- Parent zone behind a gate: screen-time limits, progress, downloads.
- More Egyptian cultural content (جحا, Ramadan and Eid stories, Nubian and
  Alexandrian settings) — this is the real differentiator.
