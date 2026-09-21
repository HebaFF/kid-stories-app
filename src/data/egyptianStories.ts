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
export const EGYPTIAN_STORIES: Story[] = [
  {
    id: 'sun-boat',
    emoji: '🌅',
    color: '#C2703D',
    tint: '#FAE6D5',
    ageBands: ['2-4'],
    mood: 'bedtime',
    minutes: 3,
    origin: 'Ancient Egyptian myth',
    title: {
      en: "The Sun's Night Boat",
      'ar-EG': 'مركب الشمس في الليل',
      'ar-MSA': 'مَرْكَبُ الشَّمْسِ في اللَّيْل',
    },
    pages: [
      {
        illustration: `${STYLE}. A golden ancient Egyptian solar barque with a falcon prow and Eye of Horus, sailing high across a wide blue daytime sky above the Nile, green fields and distant pyramids below, the sun glowing warmly above it, calm and wondrous`,
        text: {
          en: 'All day long, the sun sails across the sky in a golden boat. It sails slowly, from one side of the sky to the other, warming the fields below.',
          'ar-EG': 'طول النهار، الشمس بتبحر في السما في مركب دهبية. بتمشي بالراحة، من ناحية للناحية التانية، وبتدفي الغيطان اللي تحت.',
          'ar-MSA': 'طَوالَ النَّهار، تُبْحِرُ الشَّمْسُ في السَّماءِ في مَرْكَبٍ ذَهَبِيّ. تَسيرُ بِبُطْء، مِنْ جِهَةٍ إِلى الجِهَةِ الأُخْرى، وَتُدَفِّئُ الحُقولَ في الأَسْفَل.',
        },
      },
      {
        illustration: `${STYLE}. The same golden Egyptian solar barque with falcon prow and Eye of Horus, seen small and distant, sinking low behind western desert hills at sunset, sky washed orange then deep violet, palm trees in silhouette along the Nile, peaceful end of day, no people in the foreground`,
        text: {
          en: 'When evening comes, the boat sails down behind the hills in the west. The sky turns orange, then pink, then a deep soft purple.',
          'ar-EG': 'ولما بييجي المغرب، المركب بتنزل ورا التلال في الغرب. السما بتبقى برتقالي، وبعدين وردي، وبعدين بنفسجي غامق وهادي.',
          'ar-MSA': 'وَحينَ يَأْتي المَساء، يَنْزِلُ المَرْكَبُ خَلْفَ التِّلالِ في الغَرْب. تُصْبِحُ السَّماءُ بُرْتُقالِيَّة، ثُمَّ وَرْدِيَّة، ثُمَّ بَنَفْسَجِيَّةً داكِنَةً هادِئَة.',
        },
      },
      {
        illustration: `${STYLE}. The same golden Egyptian solar barque gliding quietly through a deep starry blue-black underworld river beneath the sleeping land, soft glowing stars above, no people, utterly calm and dreamlike, not frightening`,
        text: {
          en: 'All night, the little boat sails quietly underneath the world, through the dark. It never stops. And up above, the stars stay awake and keep watch.',
          'ar-EG': 'وطول الليل، المركب الصغيرة بتبحر بهدوء تحت الدنيا، في الضلمة. عمرها ما بتقف. وفوق، النجوم بتفضل صاحية وبتحرس.',
          'ar-MSA': 'وَطَوالَ اللَّيْل، يُبْحِرُ المَرْكَبُ الصَّغيرُ بِهُدوءٍ تَحْتَ الأَرْض، في الظَّلام. لا يَتَوَقَّفُ أَبَدًا. وَفي الأَعْلى، تَبْقى النُّجومُ ساهِرَةً تَحْرُس.',
        },
      },
      {
        illustration: `${STYLE}. Soft pink dawn light rising over the eastern Nile horizon, the same golden Egyptian solar barque reappearing small on the horizon, and in the foreground one single small child asleep in bed beside an open window with warm dawn light falling in, only one child, reassuring and tender`,
        text: {
          en: 'And every single morning, the boat comes back up in the east. So close your eyes now. The boat is sailing, and the sun will be here when you wake up.',
          'ar-EG': 'وكل يوم الصبح، المركب بترجع تطلع من الشرق. فاقفلي عينيكي دلوقتي. المركب ماشية، والشمس هتكون هنا لما تصحي.',
          'ar-MSA': 'وَفي كُلِّ صَباح، يَعودُ المَرْكَبُ لِيَطْلُعَ مِنَ الشَّرْق. فَأَغْمِضي عَيْنَيْكِ الآن. المَرْكَبُ يُبْحِر، وَالشَّمْسُ سَتَكونُ هُنا حينَ تَسْتَيْقِظين.',
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
