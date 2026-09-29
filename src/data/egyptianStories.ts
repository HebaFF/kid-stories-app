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
     * Fourth contemporary story, and the first with a boy as its lead — the
     * owner asked for new characters and names rather than more of نور and
     * ليلى, and for مالك specifically. Its moral is the one none of the other
     * three carries: that some good things are slow, and waiting for them is
     * part of the pleasure rather than a cost.
     *
     * The waiting pages are written carefully. A child who plants something
     * and sees nothing could easily read as disappointed, which PRODUCT.md
     * forbids — so مالك enjoys the waiting itself, counts the days and talks
     * to the pot, and nothing in the story treats the delay as a problem.
     */
    id: 'maleks-seed',
    emoji: '🌱',
    color: '#2F7D52',
    tint: '#DFEFE5',
    ageBands: ['2-4', '5-7'],
    mood: 'any',
    minutes: 3,
    origin: 'Original, set in Egypt today',
    title: {
      en: "Malek's Seed",
      'ar-EG': 'مالك والبذرة',
      'ar-MSA': 'مالِك وَالبَذْرَة',
    },
    pages: [
      {
        illustration: `${PASTEL}. A happy Egyptian boy of about six in a green t-shirt on a sunny apartment balcony in present-day Cairo, holding a small clay pot of soil while his smiling grandmother in a soft headscarf hands him a few seeds, potted plants along the railing, morning light`,
        text: {
          en: 'Grandma Samia gave Malek a little clay pot, some soil and three small seeds. He put the pot in the sunniest corner of the balcony, exactly where she showed him, and he could not stop looking at it.',
          'ar-EG': 'تيتة سامية دّت مالك قصرية صغيرة وشوية طين وتلات بذور. حط القصرية في أحلى ركن شمس في البلكونة، بالظبط زي ما قالتله، وفضل يبص عليها.',
          'ar-MSA': 'أَعْطَتْ تيتة سامْيَة مالِكًا أَصيصًا صَغيرًا وَبَعْضَ التُّرابِ وَثَلاثَ بَذْرات. وَضَعَ الأَصيصَ في أَكْثَرِ رُكْنٍ مُشْمِسٍ في الشُّرْفَة، تَمامًا كَما أَرَتْهُ، وَظَلَّ يَنْظُرُ إِلَيْه.',
        },
      },
      {
        illustration: `${PASTEL}. The same boy kneeling cheerfully beside the little pot on the balcony with a small watering can, singing, morning sunlight, a chalk tally of days drawn on a small board beside him, plants and Cairo buildings behind`,
        text: {
          en: 'Every morning he gave it a little water and counted another day out loud. One. Two. Three. Nothing had come up yet, and that was fine — Malek liked the counting, and he sang to the pot while he waited.',
          'ar-EG': 'كل يوم الصبح كان يسقيها شوية مية ويعد يوم جديد بصوت عالي. واحد. اتنين. تلاتة. لسه ما طلعش حاجة، وعادي خالص — مالك كان مبسوط بالعد، وكان بيغني للقصرية وهو مستني.',
          'ar-MSA': 'كُلَّ صَباحٍ كانَ يَسْقيها قَليلًا مِنَ الماءِ وَيَعُدُّ يَوْمًا جَديدًا بِصَوْتٍ عال. واحِد. اثْنان. ثَلاثَة. لَمْ يَطْلُعْ شَيْءٌ بَعْد، وَلا بَأْسَ أَبَدًا — كانَ مالِكٌ سَعيدًا بِالعَدّ، وَكانَ يُغَنّي لِلْأَصيصِ وَهُوَ يَنْتَظِر.',
        },
      },
      {
        illustration: `${PASTEL}. Close warm view of the delighted boy crouching with wide eyes and a huge smile in front of the pot, where one tiny bright green shoot has appeared, his hands cupped around it, bright morning sun on the balcony`,
        text: {
          en: 'Then one morning there it was: a tiny green leaf, no bigger than his thumbnail, standing up in the middle of the soil. Malek shouted so happily that Grandma Samia came out laughing to see it too.',
          'ar-EG': 'وفي يوم الصبح، لقاها: ورقة خضرا صغيرة قد ظفره، واقفة في نص الطين. مالك زعق من الفرحة، وتيتة سامية خرجت وهي بتضحك عشان تشوفها هي كمان.',
          'ar-MSA': 'وَذاتَ صَباحٍ وَجَدَها: وَرَقَةٌ خَضْراءُ صَغيرَةٌ بِحَجْمِ ظُفْرِه، واقِفَةٌ في وَسَطِ التُّراب. صاحَ مالِكٌ مِنَ الفَرَح، وَخَرَجَتْ تيتة سامْيَة ضاحِكَةً لِتَراها هِيَ أَيْضًا.',
        },
      },
      {
        illustration: `${PASTEL}. The balcony now full of green leafy basil plants in pots, the happy boy handing a small bunch of basil over the railing to a smiling neighbour, his grandmother beside him, warm golden afternoon light over Cairo rooftops`,
        text: {
          en: 'By the end of the month the balcony smelled of basil. Malek tied up little bunches and gave one to every neighbour on the stairs. Grandma Samia said: "Whatever we look after and wait for grows, and then it makes everybody happy."',
          'ar-EG': 'وآخر الشهر البلكونة كلها ريحتها ريحان. مالك ربط باقات صغيرة ووزعها على كل الجيران في السلم. تيتة سامية قالت: «اللي نهتم بيه ونستنى عليه، بيكبر ويفرّح الكل.»',
          'ar-MSA': 'وَفي آخِرِ الشَّهْرِ صارَتِ الشُّرْفَةُ كُلُّها تَفوحُ بِالرَّيْحان. رَبَطَ مالِكٌ باقاتٍ صَغيرَةً وَوَزَّعَها عَلى كُلِّ الجيرانِ في السُّلَّم. قالَتْ تيتة سامْيَة: «ما نَعْتَني بِهِ وَنَنْتَظِرُهُ يَكْبُر، ثُمَّ يُفَرِّحُ الجَميع.»',
        },
      },
    ],
  },
  {
    /**
     * Fifth contemporary story, with a third set of characters again. Its
     * moral is about the world being larger and better than a child has seen
     * yet — the opposite direction from [[maleks-seed]], which is about
     * something small and close.
     */
    id: 'the-train-to-the-sea',
    emoji: '🚆',
    color: '#1B4D9B',
    tint: '#DDE6F5',
    ageBands: ['2-4', '5-7'],
    mood: 'any',
    minutes: 3,
    origin: 'Original, set in Egypt today',
    title: {
      en: 'The Train to the Sea',
      'ar-EG': 'القطر اللي رايح البحر',
      'ar-MSA': 'القِطارُ الذّاهِبُ إِلى البَحْر',
    },
    pages: [
      {
        illustration: `${PASTEL}. A bright modern Egyptian railway platform in the early morning, a delighted girl of about seven and her younger brother holding their parents' hands, a long blue and white train waiting, sunlight through the station roof`,
        text: {
          en: 'Habiba and her little brother Ziad were at the station before the sun was properly up, because today the whole family was taking the train all the way to the sea. Ziad had never seen the sea at all.',
          'ar-EG': 'حبيبة وأخوها الصغير زياد كانوا في المحطة والشمس لسه بتطلع، عشان النهارده العيلة كلها هتركب القطر لحد البحر. وزياد عمره ما شاف البحر قبل كده.',
          'ar-MSA': 'كانَتْ حَبيبَة وَأَخوها الصَّغيرُ زِياد في المَحَطَّةِ وَالشَّمْسُ لَمْ تَطْلُعْ بَعْد، لِأَنَّ العائِلَةَ كُلَّها سَتَرْكَبُ القِطارَ اليَوْمَ إِلى البَحْر. وَزِيادٌ لَمْ يَرَ البَحْرَ قَطُّ مِنْ قَبْل.',
        },
      },
      {
        illustration: `${PASTEL}. Inside a sunny train carriage, two cheerful children kneeling on the seat looking out of a big window at green fields, palm trees and canals sliding past, their parents smiling behind them`,
        text: {
          en: 'The train ran past green fields and rows of palm trees and little canals shining in the sun. Habiba and Ziad counted everything they saw out of the window — fourteen donkeys, nine boats, more palm trees than they could keep up with.',
          'ar-EG': 'القطر كان بيعدي على غيطان خضرا ونخل مصفوف وترع بتلمع في الشمس. حبيبة وزياد فضلوا يعدوا كل حاجة من الشباك — أربعتاشر حمار، وتسع مراكب، ونخل أكتر ما هما يلحقوا.',
          'ar-MSA': 'كانَ القِطارُ يَمُرُّ بِحُقولٍ خَضْراءَ وَصُفوفٍ مِنَ النَّخيلِ وَتُرَعٍ تَلْمَعُ في الشَّمْس. وَظَلَّتْ حَبيبَة وَزِياد يَعُدّانِ كُلَّ شَيْءٍ مِنَ النّافِذَة: أَرْبَعَةَ عَشَرَ حِمارًا، وَتِسْعَ مَراكِب، وَنَخيلًا أَكْثَرَ مِمّا يَسْتَطيعانِ مُلاحَقَتَه.',
        },
      },
      {
        illustration: `${PASTEL}. Two children running joyfully along a sunny Alexandria corniche with the wide blue Mediterranean opening in front of them, white buildings and palm trees behind, gulls in the sky, parents walking happily behind`,
        text: {
          en: 'Then the houses opened up — and there it was. Blue all the way to the sky, further than Ziad could see. He stopped dead, then ran straight at it laughing, with Habiba right behind him.',
          'ar-EG': 'وفجأة البيوت فتحت — وطلع قدامهم. أزرق لحد السما، أبعد ما عين زياد توصل. وقف مكانه لحظة، وبعدين جري ناحيته وهو بيضحك، وحبيبة وراه على طول.',
          'ar-MSA': 'ثُمَّ انْفَرَجَتِ البُيوت — وَإِذا بِهِ أَمامَهُما. أَزْرَقُ حَتّى السَّماء، أَبْعَدَ مِمّا تَصِلُ إِلَيْهِ عَيْنُ زِياد. وَقَفَ لَحْظَةً، ثُمَّ رَكَضَ نَحْوَهُ ضاحِكًا، وَحَبيبَة خَلْفَهُ مُباشَرَة.',
        },
      },
      {
        illustration: `${PASTEL}. Golden evening light on the beach, two happy children sitting on the sand with a small pile of shells between them, their parents beside them, the calm sea and a pink and gold sky behind`,
        text: {
          en: 'They paddled, and collected shells, and ate ice cream with sand on their feet. On the way home Ziad held his shells very carefully and said: "The world is full of beautiful things, and they are just waiting for us to come and see them."',
          'ar-EG': 'خاضوا في المية، ولموا صدف، وأكلوا آيس كريم والرملة في رجليهم. وفي طريق الرجوع زياد كان ماسك الصدف براحة وقال: «الدنيا مليانة حاجات حلوة، ومستنيانا بس نيجي نشوفها.»',
          'ar-MSA': 'خاضا في الماء، وَجَمَعا الأَصْداف، وَأَكَلا المُثَلَّجاتِ وَالرَّمْلُ في أَقْدامِهِما. وَفي طَريقِ العَوْدَةِ كانَ زِيادٌ يُمْسِكُ أَصْدافَهُ بِرِفْقٍ وَقال: «الدُّنْيا مَمْلوءَةٌ بِأَشْياءَ جَميلَة، وَهِيَ تَنْتَظِرُنا فَقَطْ لِنَأْتِيَ وَنَراها.»',
        },
      },
    ],
  },
  {
    /**
     * Third story set in Egypt today. Its moral is deliberately not the one
     * [[noors-kite]] or [[the-colourful-wall]] carries — those are both about
     * what you give to other people, this one is about wanting to know. The
     * grandfather never says "don't ask"; the whole story is adults being
     * pleased to be asked, which is the point.
     */
    id: 'a-million-questions',
    emoji: '❓',
    color: '#1B4D9B',
    tint: '#DDE6F5',
    ageBands: ['2-4', '5-7'],
    mood: 'any',
    minutes: 3,
    origin: 'Original, set in Egypt today',
    title: {
      en: 'A Million Questions',
      'ar-EG': 'مليون سؤال',
      'ar-MSA': 'مِلْيونُ سُؤال',
    },
    pages: [
      {
        illustration: `${PASTEL}. A delighted little girl and her smiling grandfather at a warm neighbourhood bakery in present-day Cairo, the baker laughing and opening a bright oven full of puffing round bread, morning light, modern street outside`,
        text: {
          en: "Salma went out with Grandpa Hassan to fetch the bread, happy the whole way. At the bakery she asked, \"Why does the bread puff up like that?\" The baker laughed and opened the oven so she could see it happen.",
          'ar-EG': 'سلمى نزلت مع جدو حسن يجيبوا العيش، وهي فرحانة بالمشوار. وعند الفرن سألت: «ليه العيش بينفخ كده؟» الفران ضحك وفتح لها الفرن عشان تشوفه وهو بينفخ.',
          'ar-MSA': 'نَزَلَتْ سَلْمى مَعَ جَدِّها حَسَن لِيُحْضِرا الخُبْز، وَهِيَ سَعيدَةٌ طَوالَ الطَّريق. وَعِنْدَ المَخْبَزِ سَأَلَتْ: «لِماذا يَنْتَفِخُ الخُبْزُ هٰكَذا؟» ضَحِكَ الخَبّازُ وَفَتَحَ لَها الفُرْنَ لِتَرى.',
        },
      },
      {
        illustration: `${PASTEL}. A girl and her grandfather sitting on a bench in a sunny green Cairo park, both looking up and pointing at a neat line of birds flying across a blue sky, trees and apartment balconies behind them`,
        text: {
          en: "In the park she saw birds flying one behind another in a long line. \"Why do they fly like that?\" she asked. Grandpa said, \"Because the one in front breaks the wind for the ones behind. They are helping each other.\"",
          'ar-EG': 'وفي الجنينة شافت عصافير طايرة ورا بعض في خط طويل. سألت: «ليه طايرين كده؟» جدو قال لها: «عشان اللي قدام بيكسر الهوا عن اللي وراه. بيساعدوا بعض.»',
          'ar-MSA': 'وَفي الحَديقَةِ رَأَتْ عَصافيرَ تَطيرُ واحِدًا خَلْفَ الآخَرِ في صَفٍّ طَويل. سَأَلَتْ: «لِماذا تَطيرُ هٰكَذا؟» قالَ جَدُّها: «لِأَنَّ الَّذي في المُقَدِّمَةِ يَكْسِرُ الهَواءَ عَمَّنْ خَلْفَه. إِنَّها تُساعِدُ بَعْضَها.»',
        },
      },
      {
        illustration: `${PASTEL}. A cheerful old fisherman in a small wooden boat on the Nile showing a delighted girl and her grandfather the moving water, palm trees and modern Cairo buildings along the bank, bright afternoon`,
        text: {
          en: "By the Nile she asked Uncle Sayed the fisherman, \"Why does the water always go the same way?\" He smiled and said, \"Because the river is on its way to the sea. It has been walking there a very long time.\"",
          'ar-EG': 'وعالنيل سألت عم سيد الصياد: «ليه الميه ماشية في اتجاه واحد؟» ابتسم وقال لها: «عشان النهر رايح للبحر. وماشي في السكة دي من زمان أوي.»',
          'ar-MSA': 'وَعِنْدَ النّيلِ سَأَلَتْ عَمَّ سَيِّد الصَّيّاد: «لِماذا يَسيرُ الماءُ في اتِّجاهٍ واحِد؟» ابْتَسَمَ وَقالَ لَها: «لِأَنَّ النَّهْرَ ذاهِبٌ إِلى البَحْر. وَهُوَ يَسيرُ في هٰذا الطَّريقِ مُنْذُ زَمَنٍ بَعيد.»',
        },
      },
      {
        illustration: `${PASTEL}. A warm modern Cairo living room in golden evening light, a happy girl telling her smiling mother, father and grandfather everything she learned, her hands up as she talks, everyone delighted and listening`,
        text: {
          en: "At home she told Mama and Baba everything she had found out that day, all in one breath. Grandpa smiled and said: \"Every question you ask opens a new door for you.\"",
          'ar-EG': 'رجعت البيت وحكت لماما وبابا كل حاجة عرفتها النهارده، على نفس واحد. جدو ابتسم وقال: «كل سؤال بتسأليه بيفتح لك باب جديد.»',
          'ar-MSA': 'عادَتْ إِلى البَيْتِ وَحَكَتْ لِأُمِّها وَأَبيها كُلَّ ما عَرَفَتْهُ في ذٰلِكَ اليَوْم، في نَفَسٍ واحِد. ابْتَسَمَ جَدُّها وَقال: «كُلُّ سُؤالٍ تَسْأَلينَهُ يَفْتَحُ لَكِ بابًا جَديدًا.»',
        },
      },
    ],
  },
  {
    /**
     * Second story set in Egypt today. Written here rather than by Higgsfield,
     * against the rules PRODUCT.md records: happy in its opening as well as its
     * ending, nobody poor or bored or in trouble at any point, four pages, and
     * a moral said plainly in the last line. Its subject is deliberately not
     * [[noors-kite]]'s — that one is about sharing a thing you already have,
     * this one is about adding something of your own.
     *
     * Higgsfield drew and narrated it from these four sentences supplied
     * verbatim, which is also what finally fixed its Arabic captions: handed
     * finished Arabic rather than asked to produce it, its renderer shapes and
     * orders the text correctly. The stills and clips are cut from that film.
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
];
