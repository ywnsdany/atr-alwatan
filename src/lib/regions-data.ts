export interface NoteGroup {
  label: string;
  labelEn: string;
  notes: string[];
  icon: string;
}

export interface Region {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  perfumeName: string;
  perfumeNameEn: string;
  notes: NoteGroup[];
  perfumeDescription: string;
  emotionalDescription: string;
  image: string;
  gradient: string;
}

export const regions: Region[] = [
  {
    id: "eastern",
    name: "الشرقية",
    subtitle: "عرق اللؤلؤ والبحر",
    description:
      "حيث تلتقي أمواج الخليج بالتاريخ العريق، تنبض المنطقة الشرقية بالحياة والتراث البحري الغني منذ آلاف السنين. من سواحل القطيف الخضراء إلى أسواق الغوص التقليدية، تروي هذه الأرض حكايات اللؤلؤ والتجارة والضيافة العربية الأصيلة.",
    perfumeName: "لُؤْلُؤ الدِّيار",
    perfumeNameEn: "Diyar Pearl",
    notes: [
      {
        label: "نوتات الافتتاحية",
        labelEn: "Top Notes",
        icon: "https://img.icons8.com/fluency/24/wind.png",
        notes: ["ملح البحر", "برغموت إيطالي", "زهر النارنج"],
      },
      {
        label: "نوتات القلب",
        labelEn: "Middle Notes",
        icon: "https://img.icons8.com/fluency/24/rose.png",
        notes: ["لبان ذكر", "ورد بلدي", "ياسمين"],
      },
      {
        label: "نوتات القاعدة",
        labelEn: "Base Notes",
        icon: "https://img.icons8.com/fluency/24/ingredients.png",
        notes: ["عنبر دافئ", "مسك أبيض", "عود خفيف"],
      },
    ],
    perfumeDescription:
      "عطر ينطلق بنسمة بحرية مالحة تمازجها حمضية البرغموت الإيطالي، ثم يتفتح قلبه على ثلاثية شرقية آسرة: لبان ذكر شفاف يغلفه الورد البلدي بأناقة، ويتثبت على الجلد بمزيج دافئ من العنبر والمسك الأبيض مع لمسة عود خفيفة لا تطغى بل تترك أثرًا ذهبيًا يدوم طويلًا.",
    emotionalDescription:
      "تغمض عينيك وتشعر بأنك على شاطئ القطيف عند الفجر، حيث يلفّ الضباب الأزرق سطح الماء ويتسلل نسيم محمّل برائحة الملح واللؤلؤ الرطب. كل نفحة تنقلك إلى سوق الغوص القديم — أصوات البحارة تتعالى والبخور يتصاعد من بيوت الشعر البحرية.",
    image: "/region-eastern.png",
    gradient: "from-amber-900/60 via-amber-800/40 to-transparent",
  },
  {
    id: "northern",
    name: "الشمالية",
    subtitle: "عرق الحصاد والخصب",
    description:
      "تمتد المنطقة الشمالية بسهولها الشاسعة وتاريخها الحضاري العريق، من آبار جرش الأثرية إلى صحراء النفود الكبرى الذهبية. أرض عاشت عليها الحضارات القديمة واحتضنت طرق التجارة والبخور عبر الجزيرة العربية.",
    perfumeName: "حِصْنُ الأَصَالَة",
    perfumeNameEn: "Fortress of Authenticity",
    notes: [
      {
        label: "نوتات الافتتاحية",
        labelEn: "Top Notes",
        icon: "https://img.icons8.com/fluency/24/wind.png",
        notes: ["هيل أخضر", "قرفة سيلانية", "زنجبيل طازج"],
      },
      {
        label: "نوتات القلب",
        labelEn: "Middle Notes",
        icon: "https://img.icons8.com/fluency/24/rose.png",
        notes: ["لبان حوجري", "أقحوان", "زهر السدر"],
      },
      {
        label: "نوتات القاعدة",
        labelEn: "Base Notes",
        icon: "https://img.icons8.com/fluency/24/ingredients.png",
        notes: ["مسك أسود", "عنبر رمادي", "جلد طبيعي"],
      },
    ],
    perfumeDescription:
      "عطر يبدأ بانفجار توابلي حارٍ يدمج الهيل الأخضر مع القرفة السيلانية والزنجبيل الطازج في فتحة جريئة لا تُنسى. يتطور ببطء نحو قلب روحاني يجمع بين اللبان الحوجري النادر وزهر السدر والعناصر العطرية، ليستقر أخيرًا على قاعدة من المسك الأسود والعنبر الرمادي مع لمسة جلد طبيعي تكسبه عمقًا وثباتًا استثنائيًا.",
    emotionalDescription:
      "يشعرك وكأنك تدخل بوابة قلعة قديمة عند حلول المساء، حيث ترتفع رائحة البخور من مشاعل الحصن وتختلط بغبار الطريق وبرودة هواء الصحراء. كل استنشاقة تحملك عبر آلاف السنين إلى عصر القوافل والتوابل والليالي الصافية تحت نجوم النفود.",
    image: "/region-northern.png",
    gradient: "from-stone-900/60 via-stone-800/40 to-transparent",
  },
  {
    id: "central",
    name: "الوسطى",
    subtitle: "عرق العاصمة والنفوذ",
    description:
      "قلب المملكة النابض، حيث يلتقي الحاضر بالماضي في لوحة فنية فريدة. من قلعة المصمك التاريخية إلى ناطحات السحاب الحديثة، تمثل المنطقة الوسطى عراقة النجد وروح التحول الكبير الذي تشهده المملكة.",
    perfumeName: "مَجْلِسُ السَّمْرَاء",
    perfumeNameEn: "The Samra Majlis",
    notes: [
      {
        label: "نوتات الافتتاحية",
        labelEn: "Top Notes",
        icon: "https://img.icons8.com/fluency/24/wind.png",
        notes: ["زعفران أصيل", "فلفل وردي", "برغموت أسود"],
      },
      {
        label: "نوتات القلب",
        labelEn: "Middle Notes",
        icon: "https://img.icons8.com/fluency/24/rose.png",
        notes: ["عود كمبودي", "ورد دمشقي", "جيري"],
      },
      {
        label: "نوتات القاعدة",
        labelEn: "Base Notes",
        icon: "https://img.icons8.com/fluency/24/ingredients.png",
        notes: ["مسك أبيض", "عنبر دافئ", "خشب الصندل"],
      },
    ],
    perfumeDescription:
      "عطر ملكي بامتياز يفتتح بأغلى زعفران في العالم يمازجه الفلفل الوردي بلمسة فاخرة، ثم ينكشف قلبه المذهل على ثلاثية العود الكمبودي والورد الدمشقي والجيري في تناغم شرقي أخّاذ. يستقر على البشرة بثلاثية ذهبية من المسك الأبيض النقي والعنبر الدافئ وخشب الصندل الكريمي.",
    emotionalDescription:
      "يمنحك شعورًا بالعزة والفخامة وكأنك جالس في مجلس نجدي عريق وسط البخور والقهوة. كل نفحة تحمل عبق التراث وأصالة الضيافة السعودية، وتذكرك بأمسيات الشتاء الباردة حيث يتلألأ العود في المبخرة والضيوف يتبادلون أحاديث السمر تحت سماء نجد الصافية.",
    image: "/region-central.png",
    gradient: "from-yellow-900/60 via-amber-900/40 to-transparent",
  },
  {
    id: "western",
    name: "الغربية",
    subtitle: "عرق الحرمين والروحانيات",
    description:
      "أرض مقدسة تحتضن أطهر البقاع على وجه الأرض، حيث يلتقي التاريخ الروحاني بالطبيعة الساحرة. من جبال الحجاز الشاهقة إلى سواحل البحر الأحمر، تمثل المنطقة الغربية جوهر الإيمان وروحانية المكان.",
    perfumeName: "طَيْبَةُ الرُّوح",
    perfumeNameEn: "Purity of the Soul",
    notes: [
      {
        label: "نوتات الافتتاحية",
        labelEn: "Top Notes",
        icon: "https://img.icons8.com/fluency/24/wind.png",
        notes: ["ورد الطائف", "زعفران مكي", "فلفل أسود"],
      },
      {
        label: "نوتات القلب",
        labelEn: "Middle Notes",
        icon: "https://img.icons8.com/fluency/24/rose.png",
        notes: ["عود يمني", "خشب الصندل", "لبان حوجري"],
      },
      {
        label: "نوتات القاعدة",
        labelEn: "Base Notes",
        icon: "https://img.icons8.com/fluency/24/ingredients.png",
        notes: ["مسك أسود", "عنبر رمادي", "صندل ملكي"],
      },
    ],
    perfumeDescription:
      "عطر يبدأ بنداء الروح من ورد الطائف الأسطوري الذي يعتبر أثمن أنواع الورد في العالم، يتمازج مع الزعفران المكي والفلفل الأسود في فتحة روحانية ساحرة. يتطور قلبه على العود اليمني وخشب الصندل واللبان الحوجري في هرم شرقي متقن، ليُختم بقاعدة عميقة من المسك الأسود والعنبر الرمادي تمنحه ثباتًا ممتدًا طوال اليوم.",
    emotionalDescription:
      "ينقلك فورًا إلى أروقة الحرم المكي عند الفجر، حيث يتسلل نسيم بارد محمّل برائحة الورد والبخور بين الحجارة القديمة. يشعرك بطمأنينة لا تُوصف وسكينة عميقة في القلب، وكأن كل قطرة منه حاملة دعوة من أطهر بقاع الأرض.",
    image: "/region-western.png",
    gradient: "from-emerald-900/60 via-emerald-800/40 to-transparent",
  },
  {
    id: "southern",
    name: "الجنوبية",
    subtitle: "عرق الجبال والخضرة",
    description:
      "جنة طبيعية خفية في جنوب الجزيرة العربية، حيث تتشابك الجبال الخضراء مع الضباب الكثيف والهواء النقي. من جبال عسير الشاهقة إلى قرية رجال ألمع التراثية، تقدم المنطقة الجنوبية لوحة فنية من الطبيعة الساحرة.",
    perfumeName: "ضَبَابُ الصُّفْرَة",
    perfumeNameEn: "Safa Mist",
    notes: [
      {
        label: "نوتات الافتتاحية",
        labelEn: "Top Notes",
        icon: "https://img.icons8.com/fluency/24/wind.png",
        notes: ["ريحان أخضر", "أوراق التين الطازجة", "ليمون أخضر"],
      },
      {
        label: "نوتات القلب",
        labelEn: "Middle Notes",
        icon: "https://img.icons8.com/fluency/24/rose.png",
        notes: ["ورد جبلي", "ياسمين متسلق", "أقحوان"],
      },
      {
        label: "نوتات القاعدة",
        labelEn: "Base Notes",
        icon: "https://img.icons8.com/fluency/24/ingredients.png",
        notes: ["مسك أبيض", "عنبر دافئ", "خشب الأرز"],
      },
    ],
    perfumeDescription:
      "عطر منعش كنسيم الجبال يفتح بحيوية الريحان الأخضر وأوراق التين الطازجة مع لمسة ليمون أخضر منعشة. يتوسع قلبه بباقة جبلية فريدة تجمع الورد الجبلي والياسمين المتسلق والأقحوان في تناغم طبيعي أخّاذ. يتثبت على الجلد بمزيج ناعم من المسك الأبيض والعنبر الدافئ وخشب الأرز ليمنحك شعورًا بالنقاء والانتعاش يدوم ساعات.",
    emotionalDescription:
      "يحملك إلى قمة جبل مكسو بالضباب حيث الهواء النقي والمناظر الخلابة تمتد حتى الأفق. كل نفحة تذكرك بأمطار الشتاء على جبال عسير ورائحة الأرض بعد المطر، وتغمر قلبك بحب الحياة وسكينة الطبيعة وشعور بالحرية لا يُضاهى.",
    image: "/region-southern.png",
    gradient: "from-green-900/60 via-green-800/40 to-transparent",
  },
];
