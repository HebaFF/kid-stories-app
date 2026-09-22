---
name: حكايات مصرية / Egyptian Stories
description: A Cairo newsstand comic, printed in spot inks on cheap paper, holding the stories parents now read to their own children.
colors:
  ground: "#C8321E"
  ground-deep: "#A82715"
  plate: "#F5ECD8"
  plate-alt: "#EADFC6"
  ink: "#17120F"
  ink-body: "#241B15"
  ink-muted: "#6E5A48"
  on-ground: "#FBF3E2"
  on-ground-muted: "#FAE4D8"
  cobalt: "#1B4D9B"
  chrome: "#F2B01E"
  grass: "#2F7D52"
  vermilion: "#C8321E"
  night-ground: "#52150F"
  night-ground-deep: "#3A0D08"
  night-plate: "#463527"
  night-plate-alt: "#3B2C20"
  night-ink: "#F6ECD8"
  night-ink-body: "#EDE0C8"
  night-ink-muted: "#CBB694"
  night-on-ground: "#F7E4CE"
  night-on-ground-muted: "#E0C3B0"
  night-cobalt: "#5E84D0"
  night-chrome: "#D8A032"
  night-grass: "#4F9770"
  night-vermilion: "#D95238"
typography:
  masthead:
    fontFamily: "Lalezar"
    fontSize: "52px"
    lineHeight: "58px"
  lead-title-ar:
    fontFamily: "Lalezar"
    fontSize: "40px"
    lineHeight: "56px"
  lead-title-en:
    fontFamily: "Lalezar"
    fontSize: "26px"
    lineHeight: "32px"
  plate-title-ar:
    fontFamily: "Lalezar"
    fontSize: "30px"
    lineHeight: "42px"
  plate-title-en:
    fontFamily: "Lalezar"
    fontSize: "21px"
    lineHeight: "27px"
  masthead-latin:
    fontFamily: "Lalezar"
    fontSize: "19px"
    lineHeight: "24px"
  numeral:
    fontFamily: "Lalezar"
    fontSize: "64px"
    lineHeight: "64px"
  story-ar:
    fontFamily: "NotoNaskhArabic"
    fontSize: "23px"
    lineHeight: "44px"
  story-en:
    fontFamily: "Archivo"
    fontSize: "18px"
    lineHeight: "30px"
  stamp:
    fontFamily: "Archivo"
    fontSize: "10.5px"
    fontWeight: 600
    letterSpacing: "1.1px"
  stamp-ar:
    fontFamily: "NotoNaskhArabic"
    fontSize: "12px"
rounded:
  square: "0px"
spacing:
  hair: "2px"
  tight: "6px"
  snug: "10px"
  base: "16px"
  gutter: "18px"
  wide: "24px"
  band: "32px"
components:
  plate:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink-body}"
    rounded: "{rounded.square}"
    padding: "10px"
  plate-lead:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink-body}"
    rounded: "{rounded.square}"
    padding: "16px"
  stamp:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.stamp}"
    rounded: "{rounded.square}"
    padding: "2px 6px"
  stamp-filled:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.plate}"
    typography: "{typography.stamp}"
    rounded: "{rounded.square}"
    padding: "2px 6px"
  filter-stamp:
    backgroundColor: "transparent"
    textColor: "{colors.on-ground}"
    typography: "{typography.stamp-ar}"
    rounded: "{rounded.square}"
    padding: "0 16px"
    height: "46px"
  filter-stamp-active:
    backgroundColor: "{colors.on-ground}"
    textColor: "{colors.ground}"
    typography: "{typography.stamp-ar}"
    rounded: "{rounded.square}"
    padding: "0 16px"
    height: "46px"
  turn-button:
    backgroundColor: "transparent"
    textColor: "{colors.on-ground}"
    rounded: "{rounded.square}"
    padding: "0 24px"
    height: "46px"
  turn-button-pressed:
    backgroundColor: "{colors.ground-deep}"
    textColor: "{colors.on-ground}"
    rounded: "{rounded.square}"
    padding: "0 24px"
    height: "46px"
  masthead:
    backgroundColor: "{colors.ground-deep}"
    textColor: "{colors.on-ground}"
    typography: "{typography.masthead}"
    rounded: "{rounded.square}"
    padding: "10px 16px"
---

# Design System: حكايات مصرية / Egyptian Stories

## Overview

**Creative North Star: "The Newsstand Press"**

This is a Cairo children's magazine of the 1960s–80s — Samir, Mickey — printed in a handful of spot inks on cheap paper, with visible halftone and sloppy registration. The screen is the press bed, not a page: the ink owns the ground, and paper only ever appears as *plates* laid on top of it, edged in a heavy keyline and carrying a real cast shadow. Two worlds are refused by name: the rounded-card kids' app with its pills and bubbles, and its opposite, the cream-and-pastel bedtime minimal.

Density is editorial rather than airy. Material separates with printed ink — rules, keylines, halftone, letter-spaced caps — before it separates with whitespace. Every surface sits under a faint dot screen (~10% opacity, 4–7px pitch) that is findable when you look for it and invisible while reading. Display type is struck twice, a coloured impression laid down first and the black struck over it two pixels off-register, which is the one detail that makes cheap colour printing unmistakable.

Two registers exist, and night is not day dimmed. The press changes inks: the ground goes from press vermilion to oxblood, paper plates become kraft board, and paper white never appears after dark. Arabic leads throughout — the whole surface hangs from the right spine regardless of which language track the reader selects.

**Key Characteristics:**
- Committed colour: press ink owns roughly a third of every screen; paper is a laid object, never the field.
- Halftone under everything printed.
- Square cuts only — zero radius anywhere in the build.
- Misregistration by 2px on display type, as a device, not an accident.
- Two ink registers (day / night), not one palette at two brightnesses.
- RTL as structure, Arabic-Indic numerals as default.

## Colors

A four-ink press bed: one committed ground plus three spot inks, with the paper stock as the only light field.

### Primary
- **Press Vermilion** (`{colors.ground}`): The ground of every screen. It is the field the whole app sits on, not an accent. Its deeper run (`{colors.ground-deep}`) prints the masthead band and pressed-state fills.
- **Midnight Vermilion** (`{colors.night-ground}`): The same ink run at midnight density. Chromatic, never near-black — a ground at luminance 0.007 would be the day palette dimmed, which this world refuses.

### Secondary
The other inks on the bed, assigned per story so neighbouring plates never collide. Vermilion is deliberately excluded from plate assignment: it owns the ground, and a vermilion plate on a vermilion field disappears.
- **Cobalt** (`{colors.cobalt}` / night `{colors.night-cobalt}`): The Nile and bedtime tales.
- **Chrome Yellow** (`{colors.chrome}` / night `{colors.night-chrome}`): Sun and trickster tales; also the misregistered impression under the masthead.
- **Grass** (`{colors.grass}` / night `{colors.night-grass}`): Fable and animal tales.
- **Line Black** (`{colors.ink}`): A valid plate ink in its own right — the Juha comedies run as black line.

### Neutral
- **Newsprint Cream** (`{colors.plate}`) and **Second Stock** (`{colors.plate-alt}`): The paper a story is printed on. Appears only as a plate laid on the ground.
- **Kraft Board** (`{colors.night-plate}` / `{colors.night-plate-alt}`): The night stock. Replaces paper entirely after dark.
- **Line Black / Reading Ink / Muted Ink** (`{colors.ink}`, `{colors.ink-body}`, `{colors.ink-muted}`): Keylines, long-form reading text, and the secondary voice. The muted step is tinted from the stock, never grey.
- **On-Ground Cream** (`{colors.on-ground}` / `{colors.on-ground-muted}`): Type and keylines printed directly onto the coloured ground.

### Named Rules
**The Committed Ground Rule.** The press ink owns the screen. Paper never becomes the background; it appears only as a plate laid on the ink, edged in a heavy keyline. A cream page with coloured trim is the default this world exists to refuse.

**The Changed Ink Rule.** Night is a different press run, not a dimmer. The ground moves to oxblood, plates move to kraft board, and paper white never appears at night — a sheet of white paper in a dark bedroom is a defect.

**The Overprint Rule.** Artwork rendered at night is overprinted with the press ground at 0.34 opacity, so a daylight image is never the brightest object on a bedtime screen.

## Typography

**Display Font:** Lalezar (self-hosted, single weight, Arabic and Latin)
**Body Font:** Noto Naskh Arabic (Arabic reading text), Archivo (Latin reading text)
**Label Font:** Archivo (stamped apparatus, letter-spaced caps)

**Character:** One display face with a point of view and two workhorses underneath it. Lalezar has the blunt, slightly irregular weight of a hand-cut masthead; Noto Naskh keeps letterforms unambiguous for an emerging reader and sets harakat cleanly for the فصحى track; Archivo carries Latin and every small stamped label.

### Hierarchy
- **Masthead** (`{typography.masthead}`): حكايات مصرية on the contents page, struck twice with a chrome impression 2px off-register.
- **Numeral** (`{typography.numeral}`): The reader's folio number, set in Arabic-Indic digits.
- **Lead Title** (`{typography.lead-title-ar}` / `{typography.lead-title-en}`): The full-width lead plate.
- **Plate Title** (`{typography.plate-title-ar}` / `{typography.plate-title-en}`): Grid plates and knocked-out press blocks.
- **Story Body, Arabic** (`{typography.story-ar}`): Long reading text. The generous leading (44px on 23px) is the reading measure this app exists for.
- **Story Body, Latin** (`{typography.story-en}`): The English track and the second-pass crib.
- **Stamp** (`{typography.stamp}` / `{typography.stamp-ar}`): All apparatus — age bands, minutes, provenance, track labels. Latin stamps are always uppercased.

### Named Rules
**The One Voice Rule.** Lalezar is the only display face, day and night, Arabic and Latin. Reading text never uses it, and no second display face is ever introduced.

**The Second Impression Rule.** Display titles print in two passes: a coloured ink laid down first, the black struck over it by `misregister` (2px; 2.5px on the lead plate). The offset pass is hidden from assistive technology — only the black pass carries the string.

**The Arabic Numeral Rule.** Counts, ages and page numbers set in Arabic-Indic digits (٠١٢٣…). Latin digits are the tell of a layout built for English and translated afterwards.

## Layout

A single measure, centred on the press ground: the reading column is capped at **560px** and padded by the gutter (18px) on both sides. Beyond **900px viewport width** the column opens to 1040px and the story grid runs three-up (31% items) rather than two-up (47%) — a magazine opens wider on a bigger sheet rather than centring a phone column in empty ink. *This spread breakpoint is implemented but has not been verified visually; treat its exact numbers as provisional.*

Spacing runs on one rhythm for the whole magazine (`{spacing.hair}` 2 → `{spacing.band}` 32), with `{spacing.gutter}` 18 reserved for page edges and grid gaps. Vertical order on the contents page is fixed: masthead band, apparatus stamp rows, full-width lead plate, then the paired grid. Stamp rows scroll horizontally rather than wrapping. The reader keeps its turn controls inside the same 560px measure rather than at the screen edges, so they do not splay to the corners on a tablet.

**The Right Spine Rule.** The page is laid out right-to-left always, regardless of the selected language track — Arabic leads, so the whole surface hangs from the right spine, not just the Arabic text nodes. Direction must be read at render time (`isRTL()`), never captured at module load, and on web the document's `dir` must be consulted because react-native-web's `I18nManager.isRTL` lies.

**The Minimum Target Rule.** Every interactive element carries a minimum height of 46px (`TARGET`). The audience starts at two years old; the square cut keeps its shape and grows a minHeight rather than softening into a larger pill.

## Elevation & Depth

Depth is physical and printed, not atmospheric. Exactly one element in the system lifts: the **plate**, which casts a real blurred drop shadow (`0 5px 10px` at 3px x-offset, `#120704` at 0.42, elevation 5) because a sheet of stock sits *on* the press bed rather than being part of it. Everything else is flat and separates with ink: heavy keylines, printed rules, and the halftone screen.

### Shadow Vocabulary
- **Laid Plate** (`shadowColor #120704, opacity 0.42, radius 10, offset 3px/5px, elevation 5`): The only shadow in the system. Applies to plates and nothing else.

### Named Rules
**The One Lift Rule.** Only plates cast shadows. Stamps, rules, icons, filters and the masthead are flat against the ground; giving any of them elevation turns the press bed into a UI surface.

**The Halftone Rule.** Every printed surface sits under the dot screen — the ground at 7px pitch, the masthead at 5px, plates at the theme default (6px), press blocks opened up to 4–5px at 0.2 opacity. The dot is drawn as a real SVG pattern, never a bitmap tile.

## Shapes

Square, everywhere. Radius is zero on every surface in the build: plates, stamps, filters, turn buttons, pips, the masthead band. The form language is the cut edge of a printed block.

Edges carry weight instead of curvature, on a three-step keyline scale: **hair** (1px) for stamps, filters, pips and internal dividers; **keyline** (2px) for printed rules, press-block frames and turn buttons; **heavy** (3.5px) for plate borders, the masthead rule and the line under an illustration block. Image blocks are fixed by aspect ratio rather than by height — 16:10 for the lead plate, 4:3 for grid plates and illustrated reader blocks, 16:9 where there is no picture, so the reading column gets the difference. The recurring ornament is a printer's lozenge (a diamond with a centre dot), set at the corner of every press block.

## Components

### Plate
The signature surface: a sheet of stock laid on the press ground.
- **Corner Style:** Square (0px).
- **Background:** Newsprint cream (kraft board at night), with the halftone screen over it.
- **Border:** Heavy keyline, 3.5px, in line black.
- **Shadow:** The Laid Plate shadow — the only elevation in the system.
- **Internal Padding:** 10px on grid plates, 16px on the lead plate and the reader page.
- **Structure:** Image block on top, separated from the body by a 3.5px rule, then title, stamps, and provenance.

### Stamps
The apparatus of a printed issue — age band, running time, provenance, page count. A stamp, not a pill.
- **Style:** Square, 1px keyline in the plate's assigned ink or line black, 6px/2px padding, letter-spaced Archivo caps (1.1px tracking, weight 600).
- **Filled variant:** Border colour becomes the fill, label knocks out in plate cream.

### Filter Stamps
The same stamp language grown to a touch target.
- **Style:** Square, 1px keyline in on-ground cream, 16px horizontal padding, 46px minimum height and width.
- **Selected:** Fill flips to on-ground cream with the label in the ground ink. Unselected is fully transparent — the press ground shows through.
- **Icon variant:** Identical box at 10px padding, carrying a 17px authored SVG icon instead of a label.

### Turn Controls
The reader's page-turn pair, inside the page measure.
- **Style:** Square, 2px keyline in on-ground cream, 24px horizontal padding, 46px minimum height, transparent fill.
- **Pressed:** Fills with the deeper ground run.
- **Disabled:** Drops to 0.32 opacity.
- **Direction:** Chevron facing is computed from the render-time layout direction, because the layout engine mirrors boxes but never the artwork inside them.
- **Between them:** A row of 9×9 square pips, 1px keyline, filled solid on the current page.

### Masthead
- **Style:** A full-width band in the deeper ground run, 5px halftone, display title struck twice with a chrome impression 2px off-register, over a 3.5px heavy rule.
- **Foot:** Two letter-spaced Archivo caps lines, ranged to the two edges — the Latin title and the story count in Arabic-Indic digits.

### Press Block
The block a magazine prints when the engraver has not delivered a picture, and the most-seen surface in the app — nine of ten stories are in that state.
- **Style:** A flood of the story's assigned ink, halftone opened up to 0.2, the Arabic title knocked out in plate cream at display scale inside a 2px ruled frame (16px margin), with a printer's lozenge set at the top corner.
- **Scales:** `lead` (5px pitch, lead title, 3 lines, 26px lozenge) and `grid` (4px pitch, plate title, 4 lines, 20px lozenge).

### Icons
Authored SVGs drawn for this press: one stroke weight (2.4), butt caps, mitre joins — the blunt pen of a comic keyline. Back, chevron, sun, moon, clock, second-pass sheets, and the press mark. Nothing in the set is a glyph, an icon font, or an emoji.

### Motion
One authored moment plus one bounded exception.
- **The plate laying down:** On every page turn and track change, the reader's plate fades in from off-register and off-square — 26px translate along the spine, 14px down, 1.4° rotation, over 520ms on `Easing.out(Easing.cubic)`. Direction-aware: the offsets mirror with the text direction.
- **Artwork drift:** Illustrations only, a slow scale-and-pan (1.14→1.3, ±30px x, ±18px y) over 7000ms per sweep, `Easing.inOut(Easing.ease)`, capped at **3 iterations**. Bounded, not perpetual: a permanent Ken Burns never lets the page come to rest.

## Do's and Don'ts

### Do:
- **Do** let the press ink own the ground and put paper on it as a plate with a 3.5px keyline.
- **Do** keep every corner square (0px radius) and let keyline weight carry the hierarchy (1 / 2 / 3.5px).
- **Do** put the halftone screen under every printed surface.
- **Do** strike display titles twice, the coloured impression 2px off-register under the black, and hide the offset pass from assistive tech.
- **Do** set counts, ages and page numbers in Arabic-Indic digits.
- **Do** lay out right-to-left always, and read direction at render time via `isRTL()`.
- **Do** give every interactive element a 46px minimum height without softening its shape.
- **Do** change inks for night — oxblood ground, kraft board plates — and overprint artwork at 0.34.
- **Do** draw new icons in the family: 2.4 stroke, butt caps, mitre joins, authored paths.

### Don't:
- **Don't** make paper the background or the ground a trim colour.
- **Don't** use rounded corners, pills, or capsule chips anywhere.
- **Don't** print vermilion as a plate ink — it owns the ground and would disappear on it.
- **Don't** use white, or any paper-value light, at night.
- **Don't** add a second display face, or set reading text in Lalezar.
- **Don't** add shadows to anything but plates; separate with ink, not with elevation.
- **Don't** use emoji, icon fonts, or imported icon-set glyphs.
- **Don't** let motion run unbounded — the drift stops after 3 iterations and the plate comes to rest.
- **Don't** let the reading column exceed its measure (560px, 1040px on a spread) by growing plates to fill a desktop window.
