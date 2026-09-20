import { Story } from '../types';
import { STYLE } from './illustrationStyle';
import { EGYPTIAN_STORIES } from './egyptianStories';

/**
 * Starter library: two public-domain Aesop's fables plus two Egyptian stories
 * (one original bedtime story, one Juha folk tale).
 *
 * IMPORTANT — before shipping:
 *
 *  - The `ar-EG` (Egyptian colloquial) and `ar-MSA` (فصحى) text was drafted by
 *    an AI assistant. Both need a pass from a native Egyptian-Arabic speaker.
 *    The colloquial track matters most: it is what the narrator says out loud
 *    and what a child reads along with, so an unnatural phrase is heard, not
 *    just seen.
 *  - `illustration` holds the Higgsfield prompt for each page. Generated art
 *    must be reviewed by a person before `imageUri` is filled in — never
 *    auto-publish model output into a children's app.
 *
 * Style lock for every prompt in this file, so pages look like one book:
 *   soft watercolour children's book illustration, warm Egyptian palette,
 *   gentle rounded shapes, thick soft outlines, no text, no lettering.
 */


const CORE_STORIES: Story[] = [
  {
    id: 'star-on-the-nile',
    emoji: '🌙',
    color: '#5B6ABF',
    tint: '#E4E7FA',
    ageBands: ['2-4'],
    mood: 'bedtime',
    minutes: 3,
    origin: 'Original bedtime story',
    title: {
      en: 'A Star on the Nile',
      de: 'Ein Stern auf dem Nil',
      'ar-EG': 'نجمة على النيل',
      'ar-MSA': 'نَجْمَةٌ عَلى النِّيل',
    },
    pages: [
      {
        illustration: `${STYLE}. A small wooden felucca sailboat drifting on the Nile at sunset, tall date palms along the bank, the water gold and rose, a little girl and her grandfather sitting quietly on deck, wide calm composition`,
        text: {
          en: 'The sun was going to sleep behind the palm trees. The river turned gold, then pink, then soft and quiet. Nour sat with Grandpa on their little boat.',
          de: 'Die Sonne ging hinter den Palmen schlafen. Der Fluss wurde golden, dann rosa, dann ganz still. Nour saß mit Opa in ihrem kleinen Boot.',
          'ar-EG': 'الشمس كانت رايحة تنام ورا النخل. النيل بقى لونه دهبي، وبعدين وردي، وبعدين هادي أوي. نور كانت قاعدة مع جدو في المركب الصغيرة.',
          'ar-MSA': 'كانَتِ الشَّمْسُ تَذْهَبُ لِلنَّوْمِ خَلْفَ النَّخيل. صارَ النَّهْرُ ذَهَبِيًّا، ثُمَّ وَرْدِيًّا، ثُمَّ هادِئًا جِدًّا. جَلَسَتْ نور مَعَ جَدِّها في قارِبِهِما الصَّغير.',
        },
      },
      {
        illustration: `${STYLE}. Deep blue evening sky over the Nile filling with small soft stars, the little girl on the boat deck looking up and pointing, her grandfather smiling beside her, lantern glow on the wooden deck`,
        text: {
          en: 'One by one, the stars came out. Nour counted them softly. One star. Two stars. Three stars. More than she could count.',
          de: 'Einer nach dem anderen kamen die Sterne heraus. Nour zählte sie leise. Ein Stern. Zwei Sterne. Drei Sterne. Mehr, als sie zählen konnte.',
          'ar-EG': 'النجوم بدأت تطلع واحدة واحدة. نور فضلت تعدهم بصوت هادي. نجمة. نجمتين. تلات نجوم. أكتر ما هي تقدر تعد.',
          'ar-MSA': 'ظَهَرَتِ النُّجومُ واحِدَةً تِلْوَ الأُخْرى. أَخَذَتْ نور تَعُدُّها بِصَوْتٍ خافِت. نَجْمَةٌ. نَجْمَتان. ثَلاثُ نُجوم. أَكْثَرَ مِمّا تَسْتَطيعُ عَدَّهُ.',
        },
      },
      {
        illustration: `${STYLE}. Close warm view of one small bright star twinkling above the dark river, the little girl wrapped in a soft blanket gazing up with wonder, gentle reflection of the star on the water`,
        text: {
          en: 'Then one small star twinkled, just for her. "That one is yours," said Grandpa. "It stays awake so you can sleep."',
          de: 'Dann funkelte ein kleiner Stern, nur für sie. „Der gehört dir“, sagte Opa. „Er bleibt wach, damit du schlafen kannst.“',
          'ar-EG': 'وفجأة نجمة صغيرة لمعت، ليها هي بس. جدو قالها: «دي نجمتك إنتي. بتفضل صاحية عشان إنتي تنامي.»',
          'ar-MSA': 'ثُمَّ لَمَعَتْ نَجْمَةٌ صَغيرَةٌ، لَها وَحْدَها. قالَ الجَدُّ: «تِلْكَ نَجْمَتُكِ. تَبْقى ساهِرَةً لِتَنامي أَنْتِ.»',
        },
      },
      {
        illustration: `${STYLE}. The felucca rocking gently on still dark water, the little girl asleep against her grandfather, blanket tucked around her, one star glowing softly above, deeply peaceful night scene`,
        text: {
          en: 'The boat rocked slowly. Nour yawned a big yawn. Goodnight, river. Goodnight, palm trees. Goodnight, little star.',
          de: 'Das Boot schaukelte langsam. Nour gähnte ganz groß. Gute Nacht, Fluss. Gute Nacht, Palmen. Gute Nacht, kleiner Stern.',
          'ar-EG': 'المركب كانت بتتهز بالراحة. نور اتثاوبت ثواب كبير. تصبح على خير يا نيل. تصبحوا على خير يا نخل. تصبحي على خير يا نجمة صغيرة.',
          'ar-MSA': 'كانَ القارِبُ يَتَمايَلُ بِبُطْء. تَثاءَبَتْ نور تَثاؤُبًا كَبيرًا. تُصْبِحُ عَلى خَيْرٍ يا نَهْر. تُصْبِحينَ عَلى خَيْرٍ يا نَخْلَة. تُصْبِحينَ عَلى خَيْرٍ يا نَجْمَتي الصَّغيرَة.',
        },
      },
    ],
  },
  {
    id: 'tortoise-and-hare',
    emoji: '🐢',
    color: '#0FA37F',
    tint: '#DFF6EE',
    ageBands: ['2-4', '5-7'],
    mood: 'any',
    minutes: 4,
    origin: "Aesop's fable",
    title: {
      en: 'The Tortoise and the Hare',
      de: 'Die Schildkröte und der Hase',
      'ar-EG': 'السلحفاة والأرنب',
      'ar-MSA': 'السُّلَحْفاةُ وَالأَرْنَب',
    },
    pages: [
      {
        illustration: `${STYLE}. A boastful hare standing on a tree stump in a sunlit green forest clearing, laughing with his chest puffed out, other small woodland animals watching, bright cheerful daylight`,
        text: {
          en: "Once upon a time, a hare loved to boast about how fast he could run. 'No one can ever beat me!' he laughed at the other animals in the forest.",
          de: 'Es war einmal ein Hase, der gerne damit prahlte, wie schnell er laufen konnte. „Niemand kann mich jemals schlagen!“, lachte er über die anderen Tiere im Wald.',
          'ar-EG': 'من زمان كان فيه أرنب بيحب يفتخر إنه بيجري بسرعة رهيبة. كان بيضحك على كل الحيوانات في الغابة ويقولهم: «محدش يقدر يجري زيي أبدًا!»',
          'ar-MSA': 'في قَديمِ الزَّمان، كانَ هُناكَ أَرْنَبٌ يُحِبُّ التَّفاخُرَ بِسُرْعَتِهِ في الجَرْي. كانَ يَضْحَكُ عَلى بَقِيَّةِ الحَيَواناتِ في الغابَةِ وَيَقول: «لا أَحَدَ يَسْتَطيعُ التَّغَلُّبَ عَلَيَّ أَبَدًا!»',
        },
      },
      {
        illustration: `${STYLE}. A calm tortoise looking up at the laughing hare who is doubled over with laughter, forest clearing, the tortoise dignified and steady, comic contrast between the two`,
        text: {
          en: "A slow, steady tortoise heard him and said, 'I challenge you to a race.' The hare laughed so hard his tummy hurt. 'You? Racing me? This will be easy!'",
          de: 'Eine langsame, aber beharrliche Schildkröte hörte ihn und sagte: „Ich fordere dich zu einem Wettrennen heraus.“ Der Hase lachte so sehr, dass ihm der Bauch wehtat. „Du? Gegen mich rennen? Das wird ein Kinderspiel!“',
          'ar-EG': 'سمعته السلحفاة، اللي كانت بطيئة بس ثابتة، وقالتله: «أنا بتحداك في سباق جري.» الأرنب ضحك جامد لدرجة إن بطنه وجعته. قالها: «إنتي؟ تسابقيني أنا؟ ده هيبقى سهل أوي!»',
          'ar-MSA': 'سَمِعَتْهُ السُّلَحْفاةُ البَطيئَةُ الثّابِتَةُ فَقالَتْ لَهُ: «أَتَحَدّاكَ في سِباقٍ لِلْجَرْي.» ضَحِكَ الأَرْنَبُ حَتّى آلَمَهُ بَطْنُهُ وَقال: «أَنْتِ؟ تُسابِقينَني أَنا؟ سَيَكونُ هٰذا سَهْلًا جِدًّا!»',
        },
      },
      {
        illustration: `${STYLE}. The hare fast asleep curled under a leafy tree beside a woodland path, dappled afternoon sunlight, the finish line ribbon visible far in the background`,
        text: {
          en: "The race began. The hare zoomed far ahead and thought, 'I have so much time, I'll just take a little nap.' He lay under a tree and fell fast asleep.",
          de: 'Das Rennen begann. Der Hase sauste weit voraus und dachte: „Ich habe so viel Zeit, ich mache einfach ein kleines Nickerchen.“ Er legte sich unter einen Baum und schlief tief und fest ein.',
          'ar-EG': 'السباق بدأ. الأرنب جري وطار قدام بسرعة وفكر في نفسه: «معايا وقت كتير، هقعد أنام شوية بس.» نام تحت شجرة ونومه غرق فورًا.',
          'ar-MSA': 'بَدَأَ السِّباق. انْطَلَقَ الأَرْنَبُ بَعيدًا إِلى الأَمامِ وَفَكَّرَ في نَفْسِه: «لَدَيَّ وَقْتٌ كَثير، سَأَنامُ قَليلًا فَحَسْب.» اسْتَلْقى تَحْتَ شَجَرَةٍ وَغَرِقَ في النَّوْمِ سَريعًا.',
        },
      },
      {
        illustration: `${STYLE}. The tortoise crossing a ribbon finish line with a small determined smile, cheering woodland animals on both sides, the hare waking startled in the far background`,
        text: {
          en: 'The tortoise walked on, slow and steady, step by step. She passed the sleeping hare and kept going, all the way to the finish line — and won the race!',
          de: 'Die Schildkröte lief weiter, langsam und beharrlich, Schritt für Schritt. Sie ging am schlafenden Hasen vorbei und lief weiter bis zur Ziellinie — und gewann das Rennen!',
          'ar-EG': 'السلحفاة كملت مشيها، بطيء بس ثابت، خطوة خطوة. عدت جنب الأرنب وهو نايم وكملت لحد الخط النهائي... وكسبت السباق!',
          'ar-MSA': 'واصَلَتِ السُّلَحْفاةُ سَيْرَها، بَطيئًا لٰكِنْ ثابِتًا، خُطْوَةً بَعْدَ خُطْوَة. مَرَّتْ بِجانِبِ الأَرْنَبِ النّائِمِ وَتابَعَتْ حَتّى خَطِّ النِّهايَة... وَفازَتْ بِالسِّباق!',
        },
      },
      {
        illustration: `${STYLE}. Warm closing scene of the tortoise and the humbled hare sitting together as friends in the forest clearing at golden hour, gentle and kind mood`,
        text: {
          en: 'Slow and steady wins the race! Being kind and patient matters more than being the fastest.',
          de: 'Langsam und beharrlich gewinnt das Rennen! Geduld und Ausdauer sind wichtiger, als der Schnellste zu sein.',
          'ar-EG': 'اللي يمشي بهدوء وثبات هو اللي بيكسب في الآخر! الصبر أهم بكتير من إنك تكون الأسرع.',
          'ar-MSA': 'مَنْ يَسِرْ بِهُدوءٍ وَثَباتٍ يَفُزْ في النِّهايَة! الصَّبْرُ أَهَمُّ بِكَثيرٍ مِنْ أَنْ تَكونَ الأَسْرَع.',
        },
      },
    ],
  },
  {
    id: 'juha-and-the-donkey',
    emoji: '🫏',
    color: '#D97B29',
    tint: '#FDEBD8',
    ageBands: ['5-7', '8-10'],
    mood: 'daytime',
    minutes: 5,
    origin: 'Egyptian folk tale',
    title: {
      en: 'Juha, His Son and the Donkey',
      de: 'Juha, sein Sohn und der Esel',
      'ar-EG': 'جحا وابنه والحمار',
      'ar-MSA': 'جُحا وَابْنُهُ وَالحِمار',
    },
    pages: [
      {
        illustration: `${STYLE}. An Egyptian village dirt road at morning, a cheerful bearded man in a galabeya and his young son walking beside a small grey donkey, mud-brick houses and palm trees, warm sandy tones`,
        text: {
          en: 'One morning Juha and his son set off for the market, walking beside their little donkey. The road was long and the sun was warm.',
          de: 'Eines Morgens machten sich Juha und sein Sohn auf den Weg zum Markt und gingen neben ihrem kleinen Esel her. Der Weg war lang und die Sonne war warm.',
          'ar-EG': 'في يوم الصبح، جحا وابنه مشيوا على السوق، وهما ماشيين جنب حمارهم الصغير. الطريق كان طويل والشمس كانت دافية.',
          'ar-MSA': 'في صَباحِ أَحَدِ الأَيّام، خَرَجَ جُحا وَابْنُهُ إِلى السّوق، يَسيرانِ بِجانِبِ حِمارِهِما الصَّغير. كانَ الطَّريقُ طَويلًا وَالشَّمْسُ دافِئَة.',
        },
      },
      {
        illustration: `${STYLE}. A group of village women by a well pointing and laughing at the man and boy walking beside their unridden donkey, gossipy warm comic atmosphere`,
        text: {
          en: 'Some people by the well laughed. "Look at those two fools! They have a donkey and they walk!" So Juha climbed on and rode.',
          de: 'Ein paar Leute am Brunnen lachten. „Seht euch diese zwei Dummköpfe an! Sie haben einen Esel und gehen zu Fuß!“ Also stieg Juha auf und ritt.',
          'ar-EG': 'ناس كانوا واقفين عند البير ضحكوا وقالوا: «بصوا على الاتنين الغلابة دول! معاهم حمار وماشيين على رجليهم!» فجحا ركب الحمار.',
          'ar-MSA': 'ضَحِكَ بَعْضُ النّاسِ عِنْدَ البِئْرِ وَقالوا: «انْظُروا إِلى هٰذَيْنِ الأَحْمَقَيْن! مَعَهُما حِمارٌ وَهُما يَمْشِيان!» فَرَكِبَ جُحا الحِمار.',
        },
      },
      {
        illustration: `${STYLE}. The father riding the donkey while the small boy trudges tiredly behind, village elders under a shade tree frowning and shaking their heads disapprovingly`,
        text: {
          en: 'Further on, some old men frowned. "What a father! He rides while his poor little boy walks!" So Juha climbed down and the boy rode instead.',
          de: 'Weiter vorne runzelten ein paar alte Männer die Stirn. „Was für ein Vater! Er reitet, während sein armer kleiner Junge läuft!“ Also stieg Juha ab und der Junge ritt stattdessen.',
          'ar-EG': 'وهما ماشيين، ناس كبيرة في السن بصولهم بضيق وقالوا: «ده أب إزاي؟ راكب وسايب ابنه الصغير ماشي على رجليه!» فجحا نزل والولد ركب مكانه.',
          'ar-MSA': 'وَفي الطَّريق، عَبَسَ بَعْضُ الشُّيوخِ وَقالوا: «أَيُّ أَبٍ هٰذا؟ يَرْكَبُ وَيَتْرُكُ ابْنَهُ الصَّغيرَ يَمْشي!» فَنَزَلَ جُحا وَرَكِبَ الوَلَدُ مَكانَه.',
        },
      },
      {
        illustration: `${STYLE}. Both father and son squeezed together on the small donkey which looks comically weary, a crowd of villagers in a busy market street pointing with pity at the donkey`,
        text: {
          en: 'Then others tutted. "A boy riding while his father walks!" So they both rode together. And then a woman cried, "Poor donkey! Two people on one small back!"',
          de: 'Dann schnalzten andere mit der Zunge. „Ein Junge reitet, während sein Vater läuft!“ Also ritten sie beide zusammen. Und dann rief eine Frau: „Armer Esel! Zwei Leute auf einem kleinen Rücken!“',
          'ar-EG': 'وبعدين ناس تانية اتكلموا: «ولد راكب وأبوه ماشي؟!» فركبوا الاتنين مع بعض. وساعتها ست صرخت: «حرام عليكم الحمار! اتنين على ضهره الصغير ده!»',
          'ar-MSA': 'ثُمَّ تَذَمَّرَ آخَرون: «وَلَدٌ يَرْكَبُ وَأَبوهُ يَمْشي؟!» فَرَكِبا مَعًا. وَعِنْدَئِذٍ صاحَتِ امْرَأَة: «مِسْكينٌ هٰذا الحِمار! شَخْصانِ عَلى ظَهْرِهِ الصَّغير!»',
        },
      },
      {
        illustration: `${STYLE}. Absurd joyful scene of the father and son carrying the donkey on a wooden pole between them through a busy Egyptian market, everyone around roaring with laughter, bright and funny`,
        text: {
          en: 'So Juha and his son lifted the donkey and carried it! The whole market laughed and laughed. Juha laughed too, and said to his son: "You cannot please everybody. Listen kindly to all — then do what is sensible."',
          de: 'Also hoben Juha und sein Sohn den Esel hoch und trugen ihn! Der ganze Markt lachte und lachte. Juha lachte auch und sagte zu seinem Sohn: „Man kann es nicht allen recht machen. Hör allen freundlich zu — und tu dann, was vernünftig ist.“',
          'ar-EG': 'فجحا وابنه شالوا الحمار وحملوه! السوق كله فضل يضحك ويضحك. جحا ضحك هو كمان وقال لابنه: «مستحيل ترضي كل الناس. اسمع من الكل بذوق، وبعدين اعمل اللي يعقل.»',
          'ar-MSA': 'فَحَمَلَ جُحا وَابْنُهُ الحِمارَ عَلى أَكْتافِهِما! ضَحِكَ السّوقُ كُلُّهُ طَويلًا. وَضَحِكَ جُحا أَيْضًا وَقالَ لِابْنِه: «لا يُمْكِنُكَ إِرْضاءُ جَميعِ النّاس. أَنْصِتْ لِلْجَميعِ بِلُطْف، ثُمَّ افْعَلْ ما هُوَ صَواب.»',
        },
      },
    ],
  },
  {
    id: 'boy-who-cried-wolf',
    emoji: '🐺',
    color: '#7C5CFC',
    tint: '#EAE3FF',
    ageBands: ['5-7', '8-10'],
    mood: 'daytime',
    minutes: 5,
    origin: "Aesop's fable",
    title: {
      en: 'The Boy Who Cried Wolf',
      de: 'Der Hirtenjunge und der Wolf',
      'ar-EG': 'الولد اللي كان بيكدب على الديب',
      'ar-MSA': 'الرّاعي الكَذّاب',
    },
    pages: [
      {
        illustration: `${STYLE}. A young shepherd boy sitting bored on a grassy green hillside with a flock of fluffy white sheep, a small village visible in the valley below, bright open daylight`,
        text: {
          en: "A young shepherd boy watched over his village's sheep on the hill every day. It was quiet and a little boring, so one day he decided to play a trick.",
          de: 'Ein junger Hirtenjunge passte jeden Tag auf die Schafe seines Dorfes auf dem Hügel auf. Es war ruhig und ein bisschen langweilig, also beschloss er eines Tages, einen Streich zu spielen.',
          'ar-EG': 'كان فيه ولد صغير راعي بيبص على غنم القرية فوق التل كل يوم. الشغل كان هادي وممل شوية، فقرر يوم إنه يعمل مقلب.',
          'ar-MSA': 'كانَ هُناكَ راعٍ صَغيرٌ يَرْعى غَنَمَ القَرْيَةِ فَوْقَ التَّلِّ كُلَّ يَوْم. كانَ المَكانُ هادِئًا وَمُمِلًّا قَليلًا، فَقَرَّرَ ذاتَ يَوْمٍ أَنْ يَمْزَح.',
        },
      },
      {
        illustration: `${STYLE}. Villagers running up a grassy hill carrying sticks with worried faces, the shepherd boy at the top doubled over laughing, no wolf anywhere, sunny afternoon`,
        text: {
          en: "He ran down to the village shouting, 'Wolf! Wolf! A wolf is attacking the sheep!' All the villagers rushed up the hill with sticks — but there was no wolf at all. The boy laughed and laughed.",
          de: 'Er rannte ins Dorf hinunter und rief: „Wolf! Wolf! Ein Wolf greift die Schafe an!“ Alle Dorfbewohner eilten mit Stöcken den Hügel hinauf — aber da war überhaupt kein Wolf. Der Junge lachte und lachte.',
          'ar-EG': 'جري نازل للقرية وهو بيصرخ: «الديب! الديب! فيه ديب بيهجم على الغنم!» كل أهل القرية جريوا فوق التل ومعاهم عصايات، بس ملاقوش ولا ديب خالص. الولد فضل يضحك ويضحك.',
          'ar-MSA': 'رَكَضَ نازِلًا إِلى القَرْيَةِ وَهُوَ يَصيح: «ذِئْب! ذِئْب! هُناكَ ذِئْبٌ يُهاجِمُ الغَنَم!» هُرِعَ أَهْلُ القَرْيَةِ جَميعًا إِلى التَّلِّ وَمَعَهُمُ العِصِيّ، لٰكِنَّهُمْ لَمْ يَجِدوا ذِئْبًا عَلى الإِطْلاق. وَظَلَّ الوَلَدُ يَضْحَكُ وَيَضْحَك.',
        },
      },
      {
        illustration: `${STYLE}. Tired annoyed villagers walking back down the hill with folded arms and cross expressions, the boy behind them still grinning, late afternoon light`,
        text: {
          en: 'A few days later, he played the same trick again — and again the villagers came running for nothing. They started to feel annoyed and stopped trusting him.',
          de: 'Ein paar Tage später spielte er denselben Streich noch einmal — und wieder kamen die Dorfbewohner umsonst gerannt. Sie wurden langsam verärgert und vertrauten ihm nicht mehr.',
          'ar-EG': 'بعد كام يوم، عمل نفس المقلب تاني، وأهل القرية جريوا تاني من غير أي فايدة. بدأوا يزعلوا ومبقوش يصدقوه تاني.',
          'ar-MSA': 'وَبَعْدَ أَيّامٍ قَليلَة، أَعادَ المِزْحَةَ نَفْسَها، وَهُرِعَ أَهْلُ القَرْيَةِ مَرَّةً أُخْرى بِلا فائِدَة. بَدَأوا يَغْضَبونَ وَلَمْ يَعودوا يُصَدِّقونَه.',
        },
      },
      {
        illustration: `${STYLE}. A real grey wolf appearing at the edge of the hillside among scattering sheep, the shepherd boy calling out in alarm, the village below quiet and still, dusk light, tense but not frightening`,
        text: {
          en: "Then one day, a real wolf appeared! The boy shouted with all his might, 'Wolf! Wolf! Please help!' But this time, no one believed him, and no one came.",
          de: 'Dann, eines Tages, tauchte wirklich ein Wolf auf! Der Junge schrie aus voller Kraft: „Wolf! Wolf! Bitte helft mir!“ Aber diesmal glaubte ihm niemand, und niemand kam.',
          'ar-EG': 'وفي يوم فعلاً ظهر ديب حقيقي! الولد صرخ بأقصى قوته: «الديب! الديب! ساعدوني!» بس المرة دي محدش صدقه، ومحدش جه يساعده.',
          'ar-MSA': 'ثُمَّ ظَهَرَ ذاتَ يَوْمٍ ذِئْبٌ حَقيقِيّ! صاحَ الوَلَدُ بِكُلِّ قُوَّتِه: «ذِئْب! ذِئْب! أَنْقِذوني!» لٰكِنْ هٰذِهِ المَرَّةَ لَمْ يُصَدِّقْهُ أَحَد، وَلَمْ يَأْتِ أَحَد.',
        },
      },
      {
        illustration: `${STYLE}. The shepherd boy safe back in the village at golden hour, sitting thoughtfully with a kind elder beside him and the sheep gathered nearby, gentle forgiving mood`,
        text: {
          en: "Luckily, the boy and his sheep were safe in the end — but he learned an important lesson: if you tell lies, people stop believing you, even when you're telling the truth.",
          de: 'Zum Glück waren der Junge und seine Schafe am Ende sicher — aber er lernte eine wichtige Lektion: Wenn man lügt, glauben einem die Leute irgendwann nicht mehr, selbst wenn man die Wahrheit sagt.',
          'ar-EG': 'لحسن الحظ، الولد وغنمه كانوا بخير في الآخر، بس اتعلم درس مهم أوي: لو بتكدب كتير، الناس بتبطل تصدقك حتى لو قلت الحقيقة.',
          'ar-MSA': 'لِحُسْنِ الحَظّ، كانَ الوَلَدُ وَغَنَمُهُ بِخَيْرٍ في النِّهايَة، لٰكِنَّهُ تَعَلَّمَ دَرْسًا مُهِمًّا: إِذا كَذَبْتَ كَثيرًا، يَتَوَقَّفُ النّاسُ عَنْ تَصْديقِكَ حَتّى حينَ تَقولُ الحَقيقَة.',
        },
      },
    ],
  },
];

/**
 * The full library. Order here is the order stories appear on the home screen
 * before filtering; the age and bedtime/daytime filters do the real narrowing.
 */
export const STORIES: Story[] = [...CORE_STORIES, ...EGYPTIAN_STORIES];
