# Narration

How the Egyptian Arabic voice-over for these stories is made, and what has
gone wrong so far.

## The tools, and what they cost

| | What it does | Cost |
|---|---|---|
| Higgsfield **Explainer** | writes, draws and narrates a whole film | ~200 credits a minute |
| Higgsfield **Audio** (ElevenLabs v3) | narration only | ~2 credits a minute |
| Higgsfield **Image** (GPT Image 2) | one illustration | 6.5 credits |
| Higgsfield **Video** (Kling 3.0) | animates one still, 5s | 10 credits |

Explainer is for a showpiece. Everything else is cheap enough to iterate on.
A four-page story with its own art and narration costs about 28 credits; the
same story as an Explainer film costs 200.

## Voice

**Soraya**, in Higgsfield Audio. Explainer's own voice list is English-named
with no language filter, and its narration came out wrong for that reason —
re-narrating with Soraya and dropping the audio onto the finished picture is
both cheaper and better. Higgsfield Audio's list is the same one; Soraya is
the voice to look for.

## Write the narration script with harakat

The displayed `ar-EG` text stays unvowelled, the way Egyptian is normally
written. The narration script is a **separate, vocalised** copy of the same
words. Without harakat the model guesses the vowels, and it guesses wrong on
exactly the words a child would notice.

The owner listened to طيارة نور and named the words that came out wrong.
Every one of them is a case of the model reading an Egyptian word as if it
were فصحى. Vowelise these, and anything shaped like them:

| Written | Came out as | Should be |
|---|---|---|
| ولاقت | وَلاقَتْ | وِلاقِتْ |
| ملونة | مُلَوَّنَة | مِلَوِّنَة |
| طالعت | طالَعَتْ | طالْعِتْ |
| عالي | عالٍ | عالي |
| علّمت | عَلَّمَتْ | عَلِّمِتْ |
| يطيّروها | يُطَيِّرُوها | يْطَيَّروها |
| نتشارك | نَتَشارَكْ | نِتْشارِك |
| على نفس واحد | عَلى نَفْس واحِد ("one self") | عَلى نَفَس واحِد ("in one breath") |

The pattern is the same every time: فصحى puts a fatha where Egyptian puts a
kasra or a sukun. عَلَّمَتْ against عَلِّمِتْ, طالَعَتْ against طالْعِتْ.

Others worth vowelising for the same reason: كِدَه، لِيه، عَشان، المَيَّة،
جِدُّو، الفَرَّان، السِّكَّة، الجِنِينَة، بِيِنْفُخ، بِيْساعْدوا، بِتِسْأَليه.

## Words to write in Egyptian, not فصحى

Separately from pronunciation, the owner caught a word that was simply the
wrong one. This is about the script, not the voice, and it matters more:
vowels can be fixed by re-narrating, but a فصحى word in the text is wrong on
the page too.

| Wrong (فصحى) | Right (مصري) | |
|---|---|---|
| بيصفقوا | بيصقفوا | to clap |

Higgsfield wrote بيصفقوا into طيارة نور when it was inventing its own Arabic.
Both stories written here use يصقف correctly. **Anything Higgsfield writes in
Arabic needs reading for فصحى creeping in**, which is a second reason to
supply the script rather than let it write one.

Put a direction tag on the first line — `[حكاية للأطفال، لهجة مصرية عامية،
صوت دافي وهادي وفرحان]`. ElevenLabs v3 treats a bracketed line as direction
rather than reading it aloud.

**Open question:** the specific words the owner heard go wrong in
الحيطة الملونة have not been named yet. When they are, add them to the table
above rather than fixing them once and forgetting.

## Fitting narration to a finished film

Both films are 60s and their captions fall into even blocks. Cut the new
reading at its paragraph pauses (`silencedetect=noise=-30dB:d=0.30` finds
them reliably — the paragraph breaks are the longest gaps), then fit each
paragraph to its own block. Stretch with `atempo` only if a paragraph runs
long; under about 10% is inaudible, and for الحيطة الملونة nothing needed
stretching at all.

## Subtitles: hand Higgsfield finished Arabic

Explainer's caption renderer cannot shape Arabic **it has written itself** —
طيارة نور came back with every line unjoined and reversed, and there is no
way to turn captions off after generating. Supplying the Arabic sentences
verbatim in the prompt fixed it completely: الحيطة الملونة rendered shaped,
joined and right-to-left with no repair needed.

Keep subtitles **on** even so. They are the only way to read back what the
narration actually said.

If captions do come back broken, they are recoverable rather than lost: the
renderer reverses the codepoint order, so reading the glyphs off the frames
and reversing them restores the script exactly. That is how طيارة نور was
repaired — the recovered lines were re-set with `arabic-reshaper` and
`python-bidi`, drawn onto matching cards and composited back at the original
timings.
