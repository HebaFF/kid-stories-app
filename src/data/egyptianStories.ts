import { Story } from '../types';
import { STYLE } from './illustrationStyle';

/**
 * Egyptian collection.
 *
 * Every story here is drawn from material that is out of copyright:
 *
 *  - **Ancient Egyptian tales and myths** (the Middle Kingdom "Shipwrecked
 *    Sailor", the solar barque of Ra, the household cats of Bastet). These are
 *    three to four thousand years old.
 *  - **Juha (جحا)** — the Egyptian trickster of oral folk tradition.
 *  - **Kalila wa Dimna (كليلة ودمنة)** — Ibn al-Muqaffaʿ, 8th century.
 *  - **Egyptian folk-hero tales** in the الشاطر حسن tradition.
 *
 * IMPORTANT — the underlying tale being public domain does *not* make a modern
 * retelling of it free to copy. A specific published version, a translation, or
 * a website's wording is its author's. Every word below is therefore an
 * original retelling written for this app from the traditional plot. Keep it
 * that way when adding stories: take the plot, write your own words.
 *
 * As with all content in this app, the Arabic was drafted by an AI assistant
 * and needs a native Egyptian speaker's review before it reaches a child.
 */
const PASTEL =
  "pastel flat 2D children's illustration, soft warm palette, simple rounded shapes, " +
  'flat colour with gentle shading, present-day Cairo, no text, no lettering';

export const EGYPTIAN_STORIES: Story[] = [
  {
    /**
     * Second story set in Egypt today. Written here rather than by Higgsfield,
     * against the rules PRODUCT.md records: happy in its opening as well as its
     * ending, nobody poor or bored or in trouble at any point, four pages, and
     * a moral said plainly in the last line. Its subject is deliberately not
     * [[noors-kite]]'s — that one is about sharing a thing you already have,
     * this one is about adding something of your own.
     *
     * Art pending: the four prompts below are written for the same pastel film
     * look as طيارة نور so the two sit together in the library.
     */
    id: 'the-colourful-wall',
    emoji: '🎨',
    color: '#F2B01E',
    tint: '#FBEFD2',
    ageBands: ['2-4', '5-7'],
    mood: 'any',
    minutes: 3,
    origin: 'Original, set in Egypt today',
    title: {
      en: 'The Colourful Wall',
      'ar-EG': 'الحيطة الملونة',
      'ar-MSA': 'الجِدارُ المُلَوَّن',
    },
    pages: [
      {
        illustration: `${PASTEL}. A cheerful girl in a modern Cairo bedroom packing paintbrushes and colourful paint pots into a bag, morning sunlight through the window, plants on the sill, apartment buildings outside, excited and bright`,
        text: {
          en: 'Layla woke up before the alarm, because today was the day the whole street was going to paint the big wall together. She packed her brushes and every colour she owned, and she could not stop smiling.',
          'ar-EG': 'ليلى صحيت قبل المنبه، عشان النهارده الشارع كله هيلون الحيطة الكبيرة مع بعض. حطت الفرش وكل الألوان اللي عندها في الشنطة، وفضلت مبتسمة طول الوقت.',
          'ar-MSA': 'اسْتَيْقَظَتْ لَيْلى قَبْلَ المُنَبِّه، لِأَنَّ الشّارِعَ كُلَّهُ سَيُلَوِّنُ اليَوْمَ الجِدارَ الكَبيرَ مَعًا. وَضَعَتْ فُرَشَها وَكُلَّ أَلْوانِها في الحَقيبَة، وَلَمْ تَتَوَقَّفْ عَنِ الابْتِسام.',
        },
      },
      {
        illustration: `${PASTEL}. A wide friendly street scene in present-day Cairo, neighbours and children of all ages gathered along a long pale wall with buckets of paint and brushes, laughing and waving, balconies and trees above, bright morning`,
        text: {
          en: 'She ran down with her brother Omar, and the whole street was already there — neighbours, friends, grandmothers, little ones. Everybody had a brush, and everybody was laughing.',
          'ar-EG': 'نزلت هي وأخوها عمر، ولقت الشارع كله موجود — الجيران والأصحاب والستات الكبيرة والعيال الصغيرة. كل واحد ماسك فرشة، وكلهم بيضحكوا.',
          'ar-MSA': 'نَزَلَتْ مَعَ أَخيها عُمَر، فَوَجَدَتِ الشّارِعَ كُلَّهُ هُناك — الجيرانُ وَالأَصْدِقاءُ وَالجَدّاتُ وَالصِّغار. كُلُّ واحِدٍ يُمْسِكُ فُرْشاةً، وَالجَميعُ يَضْحَكون.',
        },
      },
      {
        illustration: `${PASTEL}. Close warm view of children painting a mural on a wall together — a yellow sun, green palm trees, a small white felucca boat, birds — paint on their hands and cheeks, everyone delighted, sunny day`,
        text: {
          en: 'Omar painted a big yellow sun. Layla painted palm trees. A little boy painted a felucca with a sail, and a grandmother painted birds above it. Every single person put something of their own on the wall.',
          'ar-EG': 'عمر رسم شمس صفرا كبيرة. وليلى رسمت نخل. وواحد ولد صغير رسم فلوكة بشراع، وتيتة رسمت عصافير فوقيها. كل واحد حط على الحيطة حاجة من عنده.',
          'ar-MSA': 'رَسَمَ عُمَرُ شَمْسًا صَفْراءَ كَبيرَة. وَرَسَمَتْ لَيْلى نَخيلًا. وَرَسَمَ وَلَدٌ صَغيرٌ فَلوكَةً بِشِراع، وَرَسَمَتْ جَدَّةٌ عَصافيرَ فَوْقَها. كُلُّ واحِدٍ وَضَعَ عَلى الجِدارِ شَيْئًا مِنْ عِنْدِه.',
        },
      },
      {
        illustration: `${PASTEL}. The finished mural at golden hour — a long wall covered in a bright painted scene of sun, palms, a felucca and birds — the whole neighbourhood standing in front of it smiling and clapping, warm evening light over Cairo`,
        text: {
          en: 'By evening the plain wall had become the most beautiful thing on the street, and everyone stood back and clapped. Layla looked at it and said: "When everybody adds their own colour, the whole place turns beautiful."',
          'ar-EG': 'ولما جه بالليل، الحيطة السادة بقت أحلى حاجة في الشارع، والكل وقف يتفرج ويصقف. ليلى بصت عليها وقالت: «لما كل واحد يحط لونه، الحتة كلها بتبقى أحلى.»',
          'ar-MSA': 'وَعِنْدَ المَساء، صارَ الجِدارُ السّادَةُ أَجْمَلَ شَيْءٍ في الشّارِع، وَوَقَفَ الجَميعُ يُشاهِدونَ وَيُصَفِّقون. نَظَرَتْ لَيْلى إِلَيْهِ وَقالَتْ: «حينَ يَضَعُ كُلُّ واحِدٍ لَوْنَهُ، يُصْبِحُ المَكانُ كُلُّهُ أَجْمَل.»',
        },
      },
    ],
  },
  {
    /**
     * Written and illustrated by Higgsfield from a brief, then edited here.
     * It is the first story in the library set in Egypt as a child sees it
     * now — a flat with a balcony, a street of apartment blocks, a park —
     * rather than in folk or ancient material, and the first that is happy
     * in its opening as well as its ending. Both are rules PRODUCT.md now
     * records. The art is lifted from the film at /kite/ on the web build,
     * so the page and the film are the same world, which is why these four
     * prompts carry the pastel style rather than the watercolour STYLE lock.
     */
    id: 'noors-kite',
    emoji: '🪁',
    color: '#2F7D52',
    tint: '#DFEFE5',
    ageBands: ['2-4', '5-7'],
    // 'any', not 'daytime'. The app opens on the bedtime shelf after 19:00, so
    // a daytime-only story is invisible exactly when a parent is most likely to
    // be looking. This one ends at sunset with everyone calm and happy, so it
    // belongs on both shelves rather than being hidden by the clock.
    mood: 'any',
    minutes: 3,
    origin: 'Original, set in Egypt today',
    title: {
      en: "Nour's Kite",
      'ar-EG': 'طيارة نور',
      'ar-MSA': 'طائِرَةُ نور الوَرَقِيَّة',
    },
    pages: [
      {
        illustration: `${PASTEL}. A happy girl on a sunny apartment balcony holding a bright rainbow paper kite, potted plants and flowers along the railing, modern Cairo buildings behind her, morning light`,
        text: {
          en: 'It was morning in Cairo. Nour woke up happy and ran straight out to the balcony — and there was a bright paper kite, shining in the sun, waiting for her.',
          'ar-EG': 'الصبح في القاهرة، نور صحيت مبسوطة وجريت على طول عالبلكونة. لقيت طيارة ورق ملونة بتلمع في الشمس، مستنياها.',
          'ar-MSA': 'في الصَّباحِ بِالقاهِرَة، اسْتَيْقَظَتْ نور سَعيدَةً وَجَرَتْ فَوْرًا إِلى الشُّرْفَة. وَجَدَتْ طائِرَةً وَرَقِيَّةً مُلَوَّنَةً تَلْمَعُ في الشَّمْسِ في انْتِظارِها.',
        },
      },
      {
        illustration: `${PASTEL}. A laughing girl and a boy walking together past modern Cairo apartment blocks with balconies and green trees, the rainbow kite tucked under her arm, bright blue sky`,
        text: {
          en: 'She called her friend Youssef from the window. They laughed, ran down the stairs together, and set off for the green park, happy with their whole day.',
          'ar-EG': 'نادت على صاحبها يوسف من الشباك. ضحكوا ونزلوا سوا، وراحوا جري عالجنينة الخضرا، فرحانين بيومهم.',
          'ar-MSA': 'نادَتْ صَديقَها يوسُف مِنَ النّافِذَة. ضَحِكا وَنَزَلا مَعًا، وَانْطَلَقا يَرْكُضانِ إِلى الحَديقَةِ الخَضْراء، سَعيدَيْنِ بِيَوْمِهِما.',
        },
      },
      {
        illustration: `${PASTEL}. A boy clapping and a girl holding the kite string, both looking up delighted at a rainbow kite high in a blue sky above pastel apartment buildings and white clouds`,
        text: {
          en: 'Youssef held the string and Nour lifted the kite. A little breeze came along and carried it up, up into the blue sky — higher than all the buildings.',
          'ar-EG': 'يوسف مسك الخيط ونور رفعت الطيارة. جت نسمة هوا وطلّعتها فوق في السما الزرقا، أعلى من العمارات كلها.',
          'ar-MSA': 'أَمْسَكَ يوسُفُ الخَيْطَ وَرَفَعَتْ نورُ الطّائِرَة. جاءَتْ نَسْمَةُ هَواءٍ فَحَمَلَتْها عالِيًا في السَّماءِ الزَّرْقاء، أَعْلى مِنَ العِماراتِ كُلِّها.',
        },
      },
      {
        illustration: `${PASTEL}. A large circle of smiling children of all ages gathered together in a sunny green park, one boy reaching up to the rainbow kite above them, trees and pastel buildings behind, warm afternoon light`,
        text: {
          en: 'All the children came running to watch. Nour passed the string around, one by one, and taught every single one of them how to fly it. By sunset they were all still laughing, and Nour said: "Playing is nicest when we share it and enjoy it together."',
          'ar-EG': 'كل الأطفال جريوا يتفرجوا. نور دارت الخيط عليهم واحد واحد، وعلّمت كل واحد فيهم يطيّرها. ولحد المغرب كانوا لسه بيضحكوا، ونور قالت: «اللعب أحلى لما نتشارك ونفرح مع بعض.»',
          'ar-MSA': 'جاءَ كُلُّ الأَطْفالِ يَرْكُضونَ لِيُشاهِدوا. أَدارَتْ نورُ الخَيْطَ عَلَيْهِمْ واحِدًا واحِدًا، وَعَلَّمَتْ كُلَّ واحِدٍ مِنْهُمْ كَيْفَ يُطَيِّرُها. وَحَتّى المَغْرِبِ ظَلّوا يَضْحَكون، وَقالَتْ نور: «اللَّعِبُ أَجْمَلُ حينَ نَتَشارَكُهُ وَنَفْرَحُ مَعًا.»',
        },
      },
    ],
  },
  {
    id: 'day-at-the-museum',
    emoji: '🏛️',
    color: '#1B4D9B',
    tint: '#DDE6F5',
    ageBands: ['5-7', '8-10'],
    mood: 'daytime',
    minutes: 4,
    origin: 'Original, set in Egypt today',
    title: {
      en: 'A Day at the Big Museum',
      'ar-EG': 'يوم في المتحف الكبير',
      'ar-MSA': 'يَوْمٌ في المَتْحَفِ الكَبير',
    },
    pages: [
      {
        illustration: `${STYLE}. A bright modern school bus on the road to Giza filled with happy Egyptian children in school uniform singing and clapping together, one boy with his face happily pressed to the window pointing at palm trees, sunshine, balloons of colour, the pyramids ahead on the horizon, joyful and full of energy`,
        text: {
          en: 'The bus to Giza was full of singing. The whole class clapped along, and Adam sat with his face against the window counting palm trees, because today was the day of the Big Museum and he could not wait.',
          'ar-EG': 'الأتوبيس وهو رايح الجيزة كان مليان غنا. الفصل كله بيصقف مع بعض، وآدم قاعد لازق بوشه في الشباك بيعدّ النخل، عشان النهارده يوم المتحف الكبير وهو مش مستني.',
          'ar-MSA': 'كانَتِ الحافِلَةُ في طَريقِها إِلى الجيزَةِ مَمْلوءَةً بِالغِناء. كانَ الفَصْلُ كُلُّهُ يُصَفِّقُ مَعًا، وَآدَمُ جالِسٌ يُلْصِقُ وَجْهَهُ بِالنّافِذَةِ يَعُدُّ النَّخيل، لِأَنَّ اليَوْمَ يَوْمُ المَتْحَفِ الكَبير، وَهُوَ لا يَكادُ يَنْتَظِر.',
        },
      },
      {
        illustration: `${STYLE}. The vast sunlit interior of the Grand Egyptian Museum, a colossal stone king rising above a grand staircase, delighted school children running and pointing with wide eyes and huge smiles, gold gleaming everywhere, light pouring through enormous windows, wonder and excitement`,
        text: {
          en: 'Inside, everything was enormous. A stone king taller than a house. Gold shining in every direction. Adam ran from one wonder to the next with his eyes as wide as they would go, and his friends kept shouting, "Come and see this one!"',
          'ar-EG': 'جوه، كل حاجة كانت ضخمة. ملك من حجر أطول من بيت. ودهب بيلمع في كل ناحية. آدم كان بيجري من عجيبة للتانية وعينيه مفتوحة على الآخر، وأصحابه مش بطالين نداء: «تعالى شوف ده!»',
          'ar-MSA': 'في الدّاخِل، كانَ كُلُّ شَيْءٍ ضَخْمًا. مَلِكٌ مِنْ حَجَرٍ أَطْوَلُ مِنْ بَيْت. وَذَهَبٌ يَلْمَعُ في كُلِّ اتِّجاه. كانَ آدَمُ يَرْكُضُ مِنْ عَجيبَةٍ إِلى أُخْرى وَعَيْناهُ مُتَّسِعَتانِ إِلى أَقْصاهُما، وَأَصْدِقاؤُهُ يُنادونَهُ بِلا تَوَقُّف: «تَعالَ انْظُرْ إِلى هٰذا!»',
        },
      },
      {
        illustration: `${STYLE}. Close warm view of a smiling boy crouched at a low glass case, his face lit with delight, looking at a small worn linen ball and a little carved wooden animal inside, the grand golden museum hall glowing softly behind him`,
        text: {
          en: 'Then he spotted a little case right at his own eye level. Inside was a ball — sewn from linen, gone soft on one side from being played with. The card said: a toy, three thousand years old. Adam grinned an enormous grin. Someone exactly his size had thrown that ball, and caught it, and dropped it, and laughed.',
          'ar-EG': 'وبعدين لمح فاترينة صغيرة قدام عينيه بالظبط. جواها كورة — متخيطة من كتان، وناحية منها بقت نعمة من كتر اللعب. الكارت مكتوب عليه: لعبة، عمرها تلات آلاف سنة. آدم ابتسم ابتسامة كبيرة أوي. فيه حد قدّه بالظبط رمى الكورة دي، ولقفها، ووقّعها، وضحك.',
          'ar-MSA': 'ثُمَّ لَمَحَ خِزانَةً صَغيرَةً أَمامَ عَيْنَيْهِ تَمامًا. في داخِلِها كُرَة — مَخيطَةٌ مِنَ الكَتّان، وَقَدْ نَعُمَ أَحَدُ جَوانِبِها مِنْ كَثْرَةِ اللَّعِب. وَعَلى البِطاقَة: لُعْبَة، عُمْرُها ثَلاثَةُ آلافِ عام. ابْتَسَمَ آدَمُ ابْتِسامَةً عَريضَة. أَحَدٌ في مِثْلِ حَجْمِهِ تَمامًا رَمى هٰذِهِ الكُرَةَ وَالْتَقَطَها وَأَوْقَعَها وَضَحِك.',
        },
      },
      {
        illustration: `${STYLE}. The school bus heading home in golden afternoon light, children singing and laughing together, one happy boy standing up telling the others an animated story with his hands, everyone turned toward him grinning, warm sunset over Cairo through the windows`,
        text: {
          en: 'He asked the guide a hundred questions and she laughed and answered every one. On the bus home the class sang the whole way, and Adam told everybody about the ball. Three thousand years ago there was a child exactly like you, playing and laughing. We are all much closer to one another than we think.',
          'ar-EG': 'سأل المرشدة ميت سؤال، وهي ضحكت وجاوبته على كلهم. وفي الأتوبيس وهما راجعين، الفصل غنى طول الطريق، وآدم فضل يحكي لكل حد عن الكورة. من تلات آلاف سنة كان فيه طفل زيك بالظبط بيلعب وبيضحك. إحنا مش بعاد عن بعض قد ما إحنا فاكرين.',
          'ar-MSA': 'سَأَلَ المُرْشِدَةَ مِئَةَ سُؤال، فَضَحِكَتْ وَأَجابَتْ عَنْها كُلِّها. وَفي الحافِلَةِ عائِدين، غَنّى الفَصْلُ طَوالَ الطَّريق، وَظَلَّ آدَمُ يَحْكي لِلْجَميعِ عَنِ الكُرَة. مُنْذُ ثَلاثَةِ آلافِ عامٍ كانَ هُناكَ طِفْلٌ مِثْلُكَ تَمامًا يَلْعَبُ وَيَضْحَك. نَحْنُ أَقْرَبُ إِلى بَعْضِنا مِمّا نَظُنّ.',
        },
      },
    ],
  },
  {
    id: 'cat-who-guarded',
    emoji: '🐈',
    color: '#6B7FA8',
    tint: '#E5EAF4',
    ageBands: ['2-4', '5-7'],
    mood: 'bedtime',
    minutes: 4,
    origin: 'Ancient Egyptian tradition',
    title: {
      en: 'The Cat Who Guarded the House',
      'ar-EG': 'القطة اللي حرست البيت',
      'ar-MSA': 'القِطَّةُ الَّتي حَرَسَتِ البَيْت',
    },
    pages: [
      {
        illustration: `${STYLE}. A warm mud-brick Egyptian home at dusk with a sleek cat sitting proudly in the doorway, lamplight inside, jars of grain stacked along the wall, ancient Egyptian domestic setting`,
        text: {
          en: 'Long ago in Egypt, almost every house had a cat. Not just to play with — cats had a job, and it was an important one.',
          'ar-EG': 'من زمان أوي في مصر، كل بيت تقريبًا كان فيه قطة. مش بس عشان نلعب معاها — القطط كان ليها شغلانة، وشغلانة مهمة كمان.',
          'ar-MSA': 'مُنْذُ زَمَنٍ بَعيدٍ في مِصْر، كانَ في كُلِّ بَيْتٍ تَقْريبًا قِطَّة. لَيْسَ لِلَّعِبِ فَحَسْب — كانَ لِلْقِطَطِ عَمَل، وَعَمَلٌ مُهِمٌّ أَيْضًا.',
        },
      },
      {
        illustration: `${STYLE}. Night interior of the mud-brick home, the family asleep on low beds under linen, the cat awake walking silently along the wall with alert ears, moonlight through a small window`,
        text: {
          en: 'At night, when the whole family was fast asleep, the cat stayed awake. She walked softly around the house, round and round, her ears listening to everything.',
          'ar-EG': 'بالليل، لما العيلة كلها تكون نايمة، القطة كانت تفضل صاحية. كانت تلف في البيت بخفة، لفة ورا لفة، وودانها سامعة كل حاجة.',
          'ar-MSA': 'في اللَّيْل، حينَ تَنامُ العائِلَةُ كُلُّها، كانَتِ القِطَّةُ تَبْقى مُسْتَيْقِظَة. كانَتْ تَطوفُ في البَيْتِ بِخِفَّة، جَوْلَةً بَعْدَ جَوْلَة، وَأُذُناها تَسْمَعانِ كُلَّ شَيْء.',
        },
      },
      {
        illustration: `${STYLE}. The brave cat facing a small snake near the grain jars in the dark, back arched, protective and confident, the sleeping family undisturbed in the background, tense but gentle not scary`,
        text: {
          en: 'If a mouse crept near the grain, or a snake slid in from the garden, the cat chased it away. Nobody woke up. Nobody even knew.',
          'ar-EG': 'ولو فار قرّب من القمح، أو تعبان دخل من الجنينة، القطة كانت تطرده بره. محدش كان يصحى. ولا حتى حد كان يعرف.',
          'ar-MSA': 'وَإِذا اقْتَرَبَ فَأْرٌ مِنَ القَمْح، أَوْ تَسَلَّلَ ثُعْبانٌ مِنَ الحَديقَة، كانَتِ القِطَّةُ تَطْرُدُهُ بَعيدًا. لَمْ يَكُنْ أَحَدٌ يَسْتَيْقِظ. وَلَمْ يَكُنْ أَحَدٌ يَعْلَم.',
        },
      },
      {
        illustration: `${STYLE}. Soft golden morning light, the cat curled asleep in the warm doorway, a small child crouching to stroke her gently, grain jars safe and full behind them, deeply peaceful`,
        text: {
          en: 'In the morning, the family found everything safe and sound — and the cat curled up asleep in the warm doorway. Sleep now. Someone is always watching over you too.',
          'ar-EG': 'الصبح، العيلة كانت تلاقي كل حاجة سليمة وبخير — والقطة نايمة متكورة في عتبة الباب الدافية. نامي دلوقتي. فيه دايمًا حد بيحرسك إنتي كمان.',
          'ar-MSA': 'في الصَّباح، كانَتِ العائِلَةُ تَجِدُ كُلَّ شَيْءٍ سَليمًا — وَالقِطَّةَ نائِمَةً مُتَكَوِّرَةً عِنْدَ عَتَبَةِ البابِ الدّافِئَة. نامي الآن. هُناكَ دائِمًا مَنْ يَحْرُسُكِ أَنْتِ أَيْضًا.',
        },
      },
    ],
  },
  {
    id: 'shipwrecked-sailor',
    emoji: '🏝️',
    color: '#1E9E8A',
    tint: '#DCF3EF',
    ageBands: ['5-7', '8-10'],
    mood: 'daytime',
    minutes: 6,
    origin: 'Ancient Egyptian tale, c. 1900 BCE',
    title: {
      en: 'The Shipwrecked Sailor',
      'ar-EG': 'الملاح الغريق',
      'ar-MSA': 'المَلّاحُ الغَريق',
    },
    pages: [
      {
        illustration: `${STYLE}. A wooden ancient Egyptian sailing ship on a bright open sea, crew working the ropes, a young sailor at the bow looking ahead with excitement, big adventurous sky`,
        text: {
          en: 'A young sailor set out on a fine ship, down along the great sea. The crew sang, the sail was full of wind, and he had never been so happy.',
          'ar-EG': 'ملاح صغير سافر في مركب حلوة، نازل في البحر الكبير. البحارة كانوا بيغنوا، والشراع مليان هوا، وهو عمره ما كان مبسوط كده.',
          'ar-MSA': 'أَبْحَرَ مَلّاحٌ شابٌّ في سَفينَةٍ جَميلَة، نازِلًا في البَحْرِ الكَبير. كانَ البَحّارَةُ يُغَنّون، وَالشِّراعُ مَمْلوءٌ بِالرّيح، وَلَمْ يَكُنْ سَعيدًا هٰكَذا مِنْ قَبْل.',
        },
      },
      {
        illustration: `${STYLE}. A dramatic but not terrifying storm at sea, tall rolling waves and dark clouds, the small ship tilting, rendered softly in watercolour so it reads as exciting rather than frightening`,
        text: {
          en: 'Then the sky went dark. A great storm came, the waves rose as high as walls, and the ship broke apart. Everything went black.',
          'ar-EG': 'وبعدين السما ضلمت. عاصفة كبيرة جت، والموج طلع عالي زي الحيطان، والمركب اتكسرت. وكل حاجة بقت سودا.',
          'ar-MSA': 'ثُمَّ أَظْلَمَتِ السَّماء. جاءَتْ عاصِفَةٌ كَبيرَة، وَارْتَفَعَتِ الأَمْواجُ كَالجُدْران، وَتَحَطَّمَتِ السَّفينَة. وَأَصْبَحَ كُلُّ شَيْءٍ مُظْلِمًا.',
        },
      },
      {
        illustration: `${STYLE}. A lush green island with fig trees, date palms, birds and a clear stream, the young sailor sitting alone on the sand looking small and uncertain, beautiful but lonely`,
        text: {
          en: 'He woke up on an island. There were figs and dates, birds and fresh water — everything he could need. But he was all alone, and he was afraid.',
          'ar-EG': 'صحي لقى نفسه على جزيرة. كان فيها تين وبلح، وعصافير وميّة حلوة — كل حاجة ممكن يحتاجها. بس كان لوحده، وكان خايف.',
          'ar-MSA': 'اسْتَيْقَظَ فَوَجَدَ نَفْسَهُ عَلى جَزيرَة. كانَ فيها تينٌ وَتَمْر، وَطُيورٌ وَماءٌ عَذْب — كُلُّ ما قَدْ يَحْتاجُه. لٰكِنَّهُ كانَ وَحيدًا، وَكانَ خائِفًا.',
        },
      },
      {
        illustration: `${STYLE}. An enormous kind golden serpent with a long braided beard rising gently among the trees, its expression warm and grandfatherly, the tiny sailor bowing below, awe rather than fear`,
        text: {
          en: 'Then the ground shook. A huge golden serpent rose up between the trees, taller than the palms. The sailor bowed low, trembling — but the serpent spoke softly.',
          'ar-EG': 'وفجأة الأرض اهتزت. تعبان ضخم دهبي طلع من بين الشجر، أطول من النخل. الملاح انحنى وهو بيرتعش — بس التعبان اتكلم بصوت هادي.',
          'ar-MSA': 'ثُمَّ اهْتَزَّتِ الأَرْض. ارْتَفَعَ ثُعْبانٌ ذَهَبِيٌّ ضَخْمٌ بَيْنَ الأَشْجار، أَطْوَلُ مِنَ النَّخيل. انْحَنى المَلّاحُ وَهُوَ يَرْتَجِف — لٰكِنَّ الثُّعْبانَ تَكَلَّمَ بِصَوْتٍ هادِئ.',
        },
      },
      {
        illustration: `${STYLE}. The great serpent gently seeing the sailor off as a rescue ship arrives at the shore, gifts of spices and precious wood stacked on the sand, warm golden farewell light`,
        text: {
          en: '"Do not be afraid, little one," he said. "I lost my family once too, and I know what it is to be alone. A ship will come for you. Until then, you are safe with me." And it did. And he went home.',
          'ar-EG': 'قاله: «متخافش يا صغير. أنا كمان ضيعت أهلي مرة، وعارف يعني إيه تبقى لوحدك. هتيجي مركب تاخدك. ولحد ما تيجي، إنت في أمان معايا.» وفعلاً جت. ورجع بيته.',
          'ar-MSA': 'قالَ لَه: «لا تَخَفْ أَيُّها الصَّغير. لَقَدْ فَقَدْتُ أَهْلي مَرَّةً أَنا أَيْضًا، وَأَعْرِفُ مَعْنى أَنْ تَكونَ وَحيدًا. سَتَأْتي سَفينَةٌ تَأْخُذُك. وَحَتّى تَأْتي، أَنْتَ في أَمانٍ مَعي.» وَجاءَتْ فِعْلًا. وَعادَ إِلى بَيْتِه.',
        },
      },
    ],
  },
  {
    id: 'juha-and-the-nail',
    emoji: '🔨',
    color: '#D97B29',
    tint: '#FDEBD8',
    ageBands: ['5-7', '8-10'],
    mood: 'daytime',
    minutes: 4,
    origin: 'Egyptian folk tale',
    title: {
      en: "Juha's Nail",
      'ar-EG': 'مسمار جحا',
      'ar-MSA': 'مِسْمارُ جُحا',
    },
    pages: [
      {
        illustration: `${STYLE}. Juha, a cheerful bearded man in a galabeya, shaking hands with a well-dressed buyer outside a small mud-brick house, a single iron nail visible in the wall behind them, sunny village street`,
        text: {
          en: 'Juha needed money, so he sold his house. But he added one small line to the agreement: "The nail in the wall stays mine."',
          'ar-EG': 'جحا كان محتاج فلوس، فباع بيته. بس زوّد سطر صغير في الاتفاق: «المسمار اللي في الحيطة يفضل بتاعي.»',
          'ar-MSA': 'احْتاجَ جُحا إِلى المال، فَباعَ بَيْتَه. لٰكِنَّهُ أَضافَ سَطْرًا صَغيرًا إِلى الاتِّفاق: «المِسْمارُ الَّذي في الجِدارِ يَبْقى لي.»',
        },
      },
      {
        illustration: `${STYLE}. The buyer laughing and waving a hand dismissively while signing a paper, Juha smiling knowingly to himself, the nail prominent on the wall behind, warm comic tone`,
        text: {
          en: 'The buyer laughed. "One nail? Fine, keep your nail!" He thought it was the silliest thing he had ever heard.',
          'ar-EG': 'المشتري ضحك وقال: «مسمار واحد؟ خلاص، خد مسمارك!» كان فاكر إنها أسخف حاجة سمعها في حياته.',
          'ar-MSA': 'ضَحِكَ المُشْتَري وَقال: «مِسْمارٌ واحِد؟ حَسَنًا، خُذْ مِسْمارَك!» ظَنَّ أَنَّها أَسْخَفُ ما سَمِعَ في حَياتِه.',
        },
      },
      {
        illustration: `${STYLE}. Juha sitting comfortably inside the house drinking tea and hanging his coat on the nail, the new owner standing behind him looking increasingly exasperated, family dinner on the floor`,
        text: {
          en: 'The next morning, Juha knocked. "I came to see my nail." He came in, sat down, drank tea, and left. Then he came at dinner. Then at night. Then he hung his coat on it. Then he brought friends.',
          'ar-EG': 'تاني يوم الصبح، جحا خبط الباب: «جاي أشوف مسماري.» دخل، قعد، شرب شاي، ومشي. وبعدين جه على العشا. وبعدين بالليل. وبعدين علّق معطفه عليه. وبعدين جاب أصحابه.',
          'ar-MSA': 'في صَباحِ اليَوْمِ التّالي، طَرَقَ جُحا البابَ وَقال: «جِئْتُ لِأَرى مِسْماري.» دَخَلَ وَجَلَسَ وَشَرِبَ الشّايَ ثُمَّ انْصَرَف. ثُمَّ جاءَ عَلى العَشاء. ثُمَّ في اللَّيْل. ثُمَّ عَلَّقَ مِعْطَفَهُ عَلَيْه. ثُمَّ أَحْضَرَ أَصْدِقاءَه.',
        },
      },
      {
        illustration: `${STYLE}. The exhausted buyer handing the house key back to a grinning Juha in the sunny village street, neighbours watching and laughing warmly, the nail still in the wall`,
        text: {
          en: 'After a week the buyer gave up and begged Juha to take the house back. Juha smiled. "Always read the whole agreement," he said. "The smallest line can hold the biggest door."',
          'ar-EG': 'بعد أسبوع، المشتري استسلم ورجا جحا ياخد البيت تاني. جحا ابتسم وقال: «اقرا الاتفاق كله دايمًا. أصغر سطر ممكن يمسك أكبر باب.»',
          'ar-MSA': 'بَعْدَ أُسْبوع، اسْتَسْلَمَ المُشْتَري وَرَجا جُحا أَنْ يَسْتَرِدَّ البَيْت. ابْتَسَمَ جُحا وَقال: «اقْرَأِ الاتِّفاقَ كُلَّهُ دائِمًا. أَصْغَرُ سَطْرٍ قَدْ يُمْسِكُ أَكْبَرَ باب.»',
        },
      },
    ],
  },
  {
    id: 'lion-and-hare',
    emoji: '🦁',
    color: '#E0A32E',
    tint: '#FCF0D6',
    ageBands: ['5-7'],
    mood: 'any',
    minutes: 4,
    origin: 'Kalila wa Dimna',
    title: {
      en: 'The Lion and the Clever Hare',
      'ar-EG': 'الأسد والأرنب الشاطر',
      'ar-MSA': 'الأَسَدُ وَالأَرْنَبُ الذَّكِيّ',
    },
    pages: [
      {
        illustration: `${STYLE}. A large proud lion standing on a rock in a lush forest, smaller animals gathered anxiously below looking up at him, dappled green light`,
        text: {
          en: 'There was once a lion who took whatever he wanted. All the animals of the forest were frightened of him.',
          'ar-EG': 'كان فيه أسد بياخد أي حاجة هو عايزها. وكل حيوانات الغابة كانوا خايفين منه.',
          'ar-MSA': 'كانَ هُناكَ أَسَدٌ يَأْخُذُ كُلَّ ما يُريد. وَكانَتْ كُلُّ حَيَواناتِ الغابَةِ تَخافُ مِنْه.',
        },
      },
      {
        illustration: `${STYLE}. A small brown hare with bright intelligent eyes standing alone on a forest path, the other animals watching him go from behind the trees, brave small figure`,
        text: {
          en: 'So they made a bargain: one animal would visit him each day, if he stopped chasing all the rest. One day, it was the little hare’s turn.',
          'ar-EG': 'فعملوا معاه اتفاق: كل يوم حيوان واحد يروحله، بشرط إنه يبطل يجري ورا الباقيين. وفي يوم، جه دور الأرنب الصغير.',
          'ar-MSA': 'فَعَقَدوا مَعَهُ اتِّفاقًا: يَذْهَبُ إِلَيْهِ حَيَوانٌ واحِدٌ كُلَّ يَوْم، بِشَرْطِ أَنْ يَكُفَّ عَنْ مُطارَدَةِ البَقِيَّة. وَذاتَ يَوْم، جاءَ دَوْرُ الأَرْنَبِ الصَّغير.',
        },
      },
      {
        illustration: `${STYLE}. The tiny hare standing calmly before the enormous angry roaring lion, comically small but completely composed, forest clearing`,
        text: {
          en: 'The hare walked very slowly and arrived very late. The lion roared, "Why are you late?" The hare said, "I am sorry. Another lion stopped me. He says he is the king here, not you."',
          'ar-EG': 'الأرنب مشي بالراحة أوي ووصل متأخر أوي. الأسد زأر وقاله: «إنت اتأخرت ليه؟» الأرنب قاله: «أنا آسف. أسد تاني وقفني. بيقول إنه هو الملك هنا، مش إنت.»',
          'ar-MSA': 'مَشى الأَرْنَبُ بِبُطْءٍ شَديدٍ وَوَصَلَ مُتَأَخِّرًا جِدًّا. زَأَرَ الأَسَدُ وَقال: «لِماذا تَأَخَّرْت؟» قالَ الأَرْنَب: «أَعْتَذِر. أَوْقَفَني أَسَدٌ آخَر. يَقولُ إِنَّهُ هُوَ المَلِكُ هُنا، لا أَنْت.»',
        },
      },
      {
        illustration: `${STYLE}. The lion peering down into an old stone well at his own reflection, roaring at it, the small hare watching calmly from a safe distance, other forest animals peeking happily from the trees`,
        text: {
          en: 'The furious lion followed the hare to an old stone well. He looked down — and there was another lion staring back! He roared, and the roar came echoing back at him. He leapt in with a great splash, climbed out soaked and ashamed, and never troubled the forest again. Being clever is stronger than being strong.',
          'ar-EG': 'الأسد اتجنن وتبع الأرنب لحد بير قديم من حجر. بص تحت — ولقى أسد تاني بيبصله! زأر، والزئير رجعله صدى. نط جوه بخبطة كبيرة، وطلع مبلول ومكسوف، وعمره ما ضايق الغابة تاني. إن تكون شاطر أقوى من إنك تكون قوي.',
          'ar-MSA': 'غَضِبَ الأَسَدُ وَتَبِعَ الأَرْنَبَ إِلى بِئْرٍ حَجَرِيَّةٍ قَديمَة. نَظَرَ إِلى الأَسْفَل — فَوَجَدَ أَسَدًا آخَرَ يُحَدِّقُ فيه! زَأَرَ، فَعادَ إِلَيْهِ الزَّئيرُ صَدًى. قَفَزَ إِلى الدّاخِلِ بِضَجَّةٍ كَبيرَة، وَخَرَجَ مُبْتَلًّا خَجِلًا، وَلَمْ يُزْعِجِ الغابَةَ بَعْدَها أَبَدًا. أَنْ تَكونَ ذَكِيًّا أَقْوى مِنْ أَنْ تَكونَ قَوِيًّا.',
        },
      },
    ],
  },
  {
    id: 'clever-hassan',
    emoji: '👑',
    color: '#9A4FBF',
    tint: '#F0E2FA',
    ageBands: ['8-10'],
    mood: 'daytime',
    minutes: 5,
    origin: 'Egyptian folk tale',
    title: {
      en: "Clever Hassan and the Sultan's Question",
      'ar-EG': 'الشاطر حسن وسؤال السلطان',
      'ar-MSA': 'الشّاطِرُ حَسَنٌ وَسُؤالُ السُّلْطان',
    },
    pages: [
      {
        illustration: `${STYLE}. A poor but bright-eyed boy in a patched galabeya working in a green field beside the Nile near Upper Egypt, a town crier announcing news to villagers in the background`,
        text: {
          en: 'Hassan was a poor boy from a village by the Nile. He had patched clothes, a quick mind and a kind heart. One day the Sultan announced a question — and whoever answered it would become his advisor.',
          'ar-EG': 'حسن كان ولد فقير من قرية على النيل. هدومه مرقعة، وعقله سريع، وقلبه طيب. وفي يوم، السلطان أعلن سؤال — واللي يجاوب عليه هيبقى مستشاره.',
          'ar-MSA': 'كانَ حَسَنٌ وَلَدًا فَقيرًا مِنْ قَرْيَةٍ عَلى النّيل. ثِيابُهُ مُرَقَّعَة، وَعَقْلُهُ سَريع، وَقَلْبُهُ طَيِّب. وَذاتَ يَوْم، أَعْلَنَ السُّلْطانُ سُؤالًا — وَمَنْ يُجِبْ عَنْهُ يُصْبِحْ مُسْتَشارَه.',
        },
      },
      {
        illustration: `${STYLE}. A grand palace hall with a seated sultan, a long queue of richly dressed men in fine silk robes waiting their turn, ornate columns and cushions, impressive and busy`,
        text: {
          en: 'Rich men came from every city in fine silk. The Sultan asked them all the same thing: "What is the heaviest thing a person can carry?"',
          'ar-EG': 'ناس غنية جت من كل مدينة لابسة حرير. والسلطان سأل كل واحد فيهم نفس السؤال: «إيه أتقل حاجة ممكن الإنسان يشيلها؟»',
          'ar-MSA': 'جاءَ الأَغْنِياءُ مِنْ كُلِّ مَدينَةٍ في ثِيابِ الحَرير. وَسَأَلَ السُّلْطانُ كُلَّ واحِدٍ مِنْهُمُ السُّؤالَ نَفْسَه: «ما أَثْقَلُ شَيْءٍ يَحْمِلُهُ الإِنْسان؟»',
        },
      },
      {
        illustration: `${STYLE}. The small boy in his patched galabeya stepping forward alone in the vast palace hall, courtiers covering their mouths laughing, the boy calm and unbothered`,
        text: {
          en: '"A great stone," said one. "A chest of gold," said another. "A full-grown camel," said a third. The Sultan shook his head at every one. Then Hassan walked in, in his patched galabeya, and the whole hall laughed.',
          'ar-EG': 'واحد قال: «حجر كبير.» والتاني قال: «صندوق دهب.» والتالت قال: «جمل كبير.» والسلطان كان بيهز راسه بالنفي لكل واحد. وبعدين حسن دخل بجلابيته المرقعة، والقاعة كلها ضحكت.',
          'ar-MSA': 'قالَ أَحَدُهُم: «حَجَرٌ كَبير.» وَقالَ الثّاني: «صُنْدوقٌ مِنْ ذَهَب.» وَقالَ الثّالِث: «جَمَلٌ ضَخْم.» وَكانَ السُّلْطانُ يَهُزُّ رَأْسَهُ نافِيًا لِكُلِّ واحِد. ثُمَّ دَخَلَ حَسَنٌ بِجِلْبابِهِ المُرَقَّع، فَضَحِكَتِ القاعَةُ كُلُّها.',
        },
      },
      {
        illustration: `${STYLE}. Close warm view of the boy speaking earnestly and the sultan leaning forward on his cushioned seat, genuinely listening, the laughing courtiers now silent, lamplight`,
        text: {
          en: '"The heaviest thing," said Hassan, "is a promise you did not keep." The hall went quiet. "Why?" asked the Sultan. "Because a stone you can put down. Gold you can spend. A camel walks on its own legs. But a broken promise, you carry everywhere — and every day it gets a little heavier."',
          'ar-EG': 'حسن قال: «أتقل حاجة هي وعد مقطعتوش.» القاعة سكتت. السلطان سأله: «ليه؟» قاله: «لأن الحجر تقدر تحطه. والدهب تقدر تصرفه. والجمل بيمشي على رجليه. إنما الوعد اللي مكملتوش، بتشيله معاك في كل مكان — وكل يوم بيتقل شوية.»',
          'ar-MSA': 'قالَ حَسَن: «أَثْقَلُ شَيْءٍ هُوَ وَعْدٌ لَمْ تَفِ بِه.» صَمَتَتِ القاعَة. سَأَلَهُ السُّلْطان: «وَلِماذا؟» قال: «لِأَنَّ الحَجَرَ تَسْتَطيعُ أَنْ تَضَعَه. وَالذَّهَبَ تَسْتَطيعُ أَنْ تُنْفِقَه. وَالجَمَلَ يَمْشي عَلى قَدَمَيْه. أَمّا الوَعْدُ الَّذي لَمْ تُنَفِّذْه، فَتَحْمِلُهُ مَعَكَ في كُلِّ مَكان — وَيَزْدادُ ثِقَلًا قَليلًا كُلَّ يَوْم.»',
        },
      },
      {
        illustration: `${STYLE}. Hassan, now dressed a little better but still modest, riding a donkey back into his green Nile village, neighbours and children running out to greet him joyfully, golden hour`,
        text: {
          en: 'The Sultan made him his advisor that very day. And Hassan kept his first promise straight away: every month, he went home to his village — because he knew exactly how heavy it would be if he did not.',
          'ar-EG': 'السلطان عيّنه مستشاره في نفس اليوم. وحسن نفّذ أول وعد ليه على طول: كل شهر كان يرجع قريته — عشان هو عارف كويس هيكون تقيل قد إيه لو معملش كده.',
          'ar-MSA': 'عَيَّنَهُ السُّلْطانُ مُسْتَشارَهُ في اليَوْمِ نَفْسِه. وَوَفى حَسَنٌ بِأَوَّلِ وَعْدٍ لَهُ فَوْرًا: كانَ يَعودُ إِلى قَرْيَتِهِ كُلَّ شَهْر — لِأَنَّهُ يَعْرِفُ تَمامًا كَمْ سَيَكونُ ثَقيلًا لَوْ لَمْ يَفْعَل.',
        },
      },
    ],
  },
];
