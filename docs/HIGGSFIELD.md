# Content pipeline: illustrations and narration

Both the art and the audio for a story are **generated once, reviewed by a
person, and committed**. Nothing in this pipeline runs while a child is using
the app. That is a deliberate decision and it drives everything below.

Why it matters:

- **Cost.** A story's pages never change. Re-generating identical art or
  re-synthesising identical sentences on every read is a recurring bill for a
  byte-identical file.
- **Safety.** Model output must never reach a child unreviewed. A human gate is
  only possible if generation happens before shipping.
- **Offline.** Bedrooms have bad wi-fi and parents use airplane mode. Baked-in
  assets work with no network.
- **Secrets.** API keys cannot live in a mobile bundle — anyone can extract them
  from the app binary.

---

## 1. Illustrations (Higgsfield)

### Credit budget

Higgsfield charges per generation, and the gap between stills and video is
large enough to decide the art direction for you:

| Output | Approx. credits | What a 5-page story costs |
|---|---|---|
| Still image | ~2 | ~10 credits |
| 5s 1080p video clip | ~45 | ~225 credits |

On a Starter plan (270 credits/month, ~$19):

- **Stills:** roughly **27 five-page stories a month**. Comfortable.
- **Video:** barely **one** story a month. Not viable as the default.

So: **stills for every story.** Reserve video for a small number of hero
stories or a store trailer, and budget them as a separate, deliberate spend.

Note that Starter is the one tier with no annual discount — pay monthly.
Credits do not roll over, so generate in batches near the start of a cycle
rather than letting an allocation expire.

### Style lock

Every prompt in `src/data/stories.ts` is built from one shared `STYLE`
constant:

> soft watercolour children's book illustration, warm Egyptian palette, gentle
> rounded shapes, thick soft outlines, no text, no lettering

Keep it in every prompt. Without it, pages drift into different styles and the
story stops looking like one book. `no text, no lettering` matters especially:
image models produce garbled pseudo-Arabic that looks alarming to a parent.

### Character consistency

This is the part that will cost you the most time. The same child must look
like the same child on page 4 as on page 1.

1. Generate a **character sheet** first — one image of the character alone,
   front and three-quarter view, plain background.
2. Approve it, then feed it as a **character/style reference** for every page
   of that story.
3. Describe the character the same way in every prompt (same age, same hair,
   same clothing colour). Do not paraphrase between pages.
4. Generate all pages of a story **in one sitting**, with the same reference.
   Coming back a month later tends to drift.

### Workflow

1. Write the story text first. The prompt describes a scene the text already
   establishes — not the other way round.
2. Copy the page's `illustration` prompt from `src/data/stories.ts`.
3. Generate in Higgsfield with the story's character reference attached.
4. **Review every image as a person.** Check: no text artefacts, no extra or
   malformed limbs, culturally appropriate dress and setting, nothing
   frightening for the target age band. Reject and regenerate freely — a
   regeneration costs ~2 credits, a bad image in a children's app costs trust.
5. Export at roughly 4:3 (the reader renders `aspectRatio: 4/3`).
6. Host the file and set `imageUri` on that page.

Until `imageUri` is set the reader falls back to the story's emoji, so the app
stays fully usable while art is still in progress. There is no half-broken
state to manage.

### Keeping prompts with the content

`illustration` lives next to the page text on purpose. A year from now, when a
page needs regenerating in a consistent style, nobody has to remember what was
originally typed into Higgsfield — it is in the repo.

---

## 2. Narration — deferred

**The app has no audio right now.** It is a reading app: Arabic and English
text, filters, illustrations. That is deliberate, not unfinished.

When voice-over is added, it comes from **Higgsfield Audio / Speak**, which
covers 74+ languages including Arabic, supports voice cloning, and exports
**MP3 and WAV**. That export is the important part — the same pre-render rule
as the illustrations applies:

> Generate once, review, commit the file. Never synthesise while a child is
> reading.

Because it exports plain audio files, Higgsfield fits this app with no extra
vendor, no API key in the bundle, and no per-read cost. One subscription
covers both the art and the voice.

### Two things to settle before generating a full story

1. **Does the Egyptian accent actually sound Egyptian?** Higgsfield lists
   Arabic and advertises dialect-specific intonation for several languages, but
   Egyptian Arabic specifically is unconfirmed. Generate one page and listen for
   whether "بقى" and "أوي" land naturally or are read like a news bulletin.
   Azure's `ar-EG-SalmaNeural` / `ar-EG-ShakirNeural` remain a fallback if not.
2. **Voice cloning is probably the better answer anyway.** Recording a real
   Egyptian narrator for a few minutes (with their consent) and cloning that
   voice will beat any generic TTS for a children's app.

Keep one voice per story and generate all its pages in one sitting — the same
consistency rule as the character reference for illustrations.

### Word-level highlighting

An exported MP3 does not say *when* each word is spoken, so highlighting the
word currently being read needs timings from somewhere:

- Sentence- or page-level highlighting needs no timings at all.
- Word-level needs either timing data from the generator or a forced-alignment
  pass (e.g. Whisper) over the finished audio.

Worth deciding once, when the first real audio file exists.

### Audio credit cost

Higgsfield does not publish an audio credit table. Check what one page actually
costs inside your own account before budgeting a full library.

## 3. Review checklist before a story ships

- [ ] Egyptian colloquial text read aloud by a native speaker and corrected
- [ ] MSA text checked for school-appropriate vocabulary and harakat
- [ ] English and German translations checked against the Arabic, not each other
- [ ] Every illustration reviewed by a person
- [ ] Age band and mood sanity-checked by someone with a child that age
- [ ] Story timed out loud; `minutes` reflects the real read-aloud length
