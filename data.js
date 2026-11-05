// Q Islamic Academy - Official Verified Curriculum Data
const ACADEMY_DATA = {
  name: {
    en: "Q ISLAMIC ACADEMY",
    ur: "کیو اسلامک اکیڈمی"
  },
  phone: "+92 311 8284694",
  phoneRaw: "923118284694",
  whatsappUrl: "https://wa.me/923118284694",
  slogan: {
    en: "Learn, Understand & Practice Islam",
    ur: "قرآن سیکھیں، سمجھیں اور اپنی دنیا و آخرت سنواریں"
  },
  subSlogan: {
    en: "ACADEMY PROFILE & COURSE GUIDE",
    ur: "قرآن و اسلامی تعلیمات - اکیڈمی پروفائل اور کورس گائیڈ"
  },
  mission: {
    en: "To make the teachings of the Qur'an and Sunnah easy and accessible for everyone, and to create opportunities for all students to gain authentic Islamic knowledge.",
    ur: "قرآن و سنت کی تعلیم کو آسان بنانا اور ہر طالب علم کے لیے دینی علم کے حصول میں سہولت پیدا کرنا۔"
  },
  socials: {
    youtube: "https://youtube.com/@qislamicacademy1",
    facebook: "https://facebook.com/QIslamicAcademy",
    tiktok: "https://tiktok.com/@qislamicadedmy",
    whatsapp: "https://wa.me/923118284694"
  },

  // 10 Academy Features (Pages 3 & 4 of PDF)
  features: [
    {
      id: "01",
      icon: "fa-regular fa-clock",
      titleEn: "Flexible Class Timings",
      titleUr: "اپنی سہولت کے مطابق کلاس کے اوقات",
      descEn: "Choose class timings according to your personal convenience and daily routine.",
      descUr: "اپنی ذاتی سہولت اور مصروفیات کے مطابق کلاس کے اوقات منتخب کرنے کی مکمل سہولت۔"
    },
    {
      id: "02",
      icon: "fa-solid fa-users",
      titleEn: "Male & Female Teachers",
      titleUr: "مرد اور خواتین اساتذہ کی دستیابی",
      descEn: "Both qualified male and female certified teachers are available for students.",
      descUr: "طلبہ و طالبات کے لیے باحجاب و تجربہ کار مرد اور خواتین اساتذہ کی باقاعدہ دستیابی۔"
    },
    {
      id: "03",
      icon: "fa-solid fa-chalkboard-user",
      titleEn: "Qualified & Experienced Teachers",
      titleUr: "قابل اور تجربہ کار اساتذہ",
      descEn: "Learn from highly qualified Islamic scholars and certified tutors.",
      descUr: "سند یافتہ اور باصلاحیت اساتذہ کے زیرِ نگرانی بہترین اور معیاری تعلیم۔"
    },
    {
      id: "04",
      icon: "fa-solid fa-book-open-reader",
      titleEn: "Easy & Effective Teaching Method",
      titleUr: "آسان، مؤثر اور منظم تدریسی طریقہ کار",
      descEn: "Simple, structured and effective teaching approach for quick learning.",
      descUr: "آسان، مؤثر اور منظم تدریسی طریقہ جس سے سبق فوراً ذہن نشین اور یاد ہو جائے۔"
    },
    {
      id: "05",
      icon: "fa-regular fa-calendar-check",
      titleEn: "Short-Duration Courses (30 Days)",
      titleUr: "مختصر دورانیہ کے 30 روزہ کورسز",
      descEn: "Most of our specialized courses are designed to be completed in 30 days.",
      descUr: "زیادہ تر خصوصی کورسز صرف 30 دن اور 30 اسباق میں مکمل کروائے جاتے ہیں۔"
    },
    {
      id: "06",
      icon: "fa-solid fa-coins",
      titleEn: "Reasonable Course Fees",
      titleUr: "مناسب اور معقول ہدیہ",
      descEn: "High-quality Islamic education at affordable and subsidized fees.",
      descUr: "انتہائی مناسب اور معقول ہدیہ تاکہ ہر گھر اور فرد تک دینی علم بآسانی پہنچ سکے۔"
    },
    {
      id: "07",
      icon: "fa-solid fa-laptop-code",
      titleEn: "Online Learning from Home",
      titleUr: "گھر بیٹھے آن لائن تعلیم کی سہولت",
      descEn: "Learn from the comfort and safety of your home through live 1-on-1 sessions.",
      descUr: "دنیا کے کسی بھی ملک سے اپنے گھر بیٹھے آرام و اطمینان کے ساتھ آن لائن کلاسز۔"
    },
    {
      id: "08",
      icon: "fa-solid fa-user-check",
      titleEn: "Personal Attention to Students",
      titleUr: "طلبہ کی انفرادی پیش رفت پر توجہ",
      descEn: "Individual guidance and regular feedback to ensure superior progress.",
      descUr: "ہر طالب علم کی تعلیمی ضروریات اور روزانہ کے اسباق پر خصوصی اور انفرادی توجہ۔"
    },
    {
      id: "09",
      icon: "fa-solid fa-hands-holding-child",
      titleEn: "Group Classes for Women",
      titleUr: "صرف خواتین کے لیے مخصوص گروپ کلاسز",
      descEn: "Special dedicated group classes are available for sisters only.",
      descUr: "مکمل شرعی پردے اور باحجاب ماحول میں صرف بہنوں اور بچیوں کے لیے کلاسز۔"
    },
    {
      id: "10",
      icon: "fa-solid fa-people-roof",
      titleEn: "Classes for Children & Adults",
      titleUr: "بچوں اور بڑوں کے لیے علیحدہ کلاسز",
      descEn: "Separate classes for children and adults according to age and level.",
      descUr: "بچوں اور بڑوں کے لیے ان کی عمر، صلاحیت اور فہم کے مطابق مخصوص تدریسی نظام۔"
    }
  ],

  // 10 Featured Courses (3 Ongoing Regular + 7 Thirty-Day Intensive)
  // Images mapped exactly per user request!
  courses: [
    {
      id: 1,
      isOngoing: true, // 1st Ongoing Course
      image: "assets/boy-reading-quran.png", // User requested photo: child with prayer cap reading Holy Quran on Rehal
      icon: "fa-book-quran",
      category: "quran",
      badgeEn: "Regular",
      badgeUr: "مستقل کورس",
      durationEn: "Self-Paced",
      durationUr: "طلبہ کی رفتار پر",
      titleEn: "Easy Qur'an Reading Course",
      titleUr: "آسان ناظرہ قرآن کورس",
      introEn: "This course is designed to teach students to read the Qur'an with correct pronunciation, basic Tajweed rules and fluency. Along with Qur'an reading, we focus on Islamic learning and character building, especially for children.",
      introUr: "اس کورس میں طلبہ کو قرآن کریم تجوید کے ساتھ درست تلفظ اور بنیادی قواعد کے مطابق پڑھنا سکھایا جاتا ہے، ساتھ ہی بچوں کی بنیادی دینی تعلیم اور اخلاقی تربیت پر بھی خصوصی توجہ دی جاتی ہے۔",
      topicsEn: [
        "Recognition and correct pronunciation of Arabic letters (Makharij)",
        "Short vowels (Fathah, Kasrah, Dammah) and Sukoon",
        "Rules of Tajweed (basic to advanced foundations)",
        "Practice of joining letters and reading words correctly",
        "Reading the Qur'an with Tajweed and fluency",
        "Basic Islamic Studies: 6 Kalimas, 40 Masnoon Duas, 40 Ahadith",
        "Complete method of Namaz, Wuzu and Ghusl",
        "Islamic manners and character building"
      ],
      topicsUr: [
        "حروفِ تہجی کی پہچان اور درست مخارج سے ادائیگی",
        "حرکات، زیر، زبر، پیش اور سکون کی باقاعدہ مشق",
        "تجوید کے اصول و قواعد کی بنیادی و تفصیلی تعلیم",
        "حروف کو ملا کر پڑھنے اور الفاظ کی ادائیگی کی مشق",
        "تجوید کے ساتھ قرآن مجید کی روانی سے تلاوت",
        "چھ کلمے اور چالیس مسنون دعاؤں کا حفظ و فہم",
        "چالیس مختصر احادیث مبارکہ کا حفظ",
        "نماز پڑھنے کا مکمل طریقہ، وضو، غسل اور بنیادی اسلامی آداب"
      ],
      verse: {
        arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
        transEn: "“The best among you are those who learn the Qur'an and teach it to others.” (Sahih al-Bukhari: 5027)",
        transUr: "”تم میں سب سے بہتر وہ ہے جو قرآن سیکھے اور دوسروں کو سکھائے۔“ (صحیح البخاری، حدیث: 5027)"
      }
    },
    {
      id: 2,
      isOngoing: true, // 2nd Ongoing Course
      image: "assets/boy-quran.png", // Child with headphones reciting and memorizing
      icon: "fa-brain",
      category: "quran",
      badgeEn: "Regular",
      badgeUr: "مستقل کورس",
      durationEn: "Daily Revision",
      durationUr: "روزانہ دہرائی",
      titleEn: "Easy Qur'an Memorisation Course",
      titleUr: "آسان حفظ قرآن کورس",
      introEn: "This course is designed to help students memorize the Holy Qur'an with proper guidance, regular practice and revision. Along with memorization, we focus on correct pronunciation, Tajweed and Islamic character building.",
      introUr: "اس کورس کا مقصد طلبہ کو قرآن کریم حفظ کرنے میں منظم رہنمائی فراہم کرنا ہے، تاکہ وہ درست تلفظ اور تجوید کے ساتھ قرآن مجید کو یاد کریں اور یاد کیے گئے سبق کو پختہ کرنے کے ساتھ ساتھ دینی و اخلاقی تربیت بھی حاصل کریں۔",
      topicsEn: [
        "Structured memorization method with step-by-step guidance",
        "Regular revision system (Muraja'ah) to strengthen what you have learned",
        "Techniques for strong retention without forgetting",
        "Qur'an recitation with proper Tajweed and melodious voice",
        "Daily routine and practice guidance for consistent habit",
        "Islamic values, character building and Dua during the journey of Hifz"
      ],
      topicsUr: [
        "نئے سبق یاد کرنے کا منظم، آسان اور پائیدار طریقہ",
        "سابقہ اسباق کی دہرائی (مراجعہ) کا روزانہ شیڈول",
        "یاد کیے ہوئے قرآن کو کبھی نہ بھولنے کے مجرب طریقے",
        "تجوید اور درست تلفظ کے ساتھ تلاوت کی مشق",
        "آن لائن ماہر اساتذہ کی روزانہ رہنمائی اور نگرانی",
        "بچوں کی دینی و اخلاقی تربیت اور قرآن سے محبت و عمل کا جذبہ"
      ],
      verse: {
        arabic: "يُقَالُ لِصَاحِبِ الْقُرْآنِ: اقْرَأْ وَارْتَقِ وَرَتِّلْ كَمَا كُنْتَ تَرَتَّلُ فِي الدُّنْيَا، فَإِنَّ مَنْزِلَتَكَ عِنْدَ آخِرِ آيَةٍ تَقْرَؤُهَا",
        transEn: "“It will be said to the companion of the Qur'an: Read, and rise in ranks, and recite with measured and beautiful recitation... for your rank will be at the last verse that you recite.” (Jami' at-Tirmidhi: 2914)",
        transUr: "”قرآن والے سے کہا جائے گا: پڑھتے جاؤ اور درجات پر چڑھتے جاؤ، اور اسی طرح ترتیل سے پڑھو جیسے تم دنیا میں پڑھا کرتے تھے؛ پس تمہارا مقام وہ ہوگا جہاں تم آخری آیت پڑھو گے۔“ (جامع الترمذی: 2914)"
      }
    },
    {
      id: 3,
      isOngoing: false, // 1st 30-Day Course
      image: "assets/card-1.jpg",
      icon: "fa-certificate",
      category: "tajweed",
      badgeEn: "30-Day Course",
      badgeUr: "30 روزہ کورس",
      durationEn: "30 Lessons",
      durationUr: "30 اسباق",
      titleEn: "Easy Tajweed Course",
      titleUr: "آسان تجوید کورس",
      introEn: "This course is designed to teach students the recitation of the Holy Qur'an according to the rules of Tajweed, so that they can pronounce each letter from its correct articulation point with proper characteristics, beautifully and fluently.",
      introUr: "اس کورس کا مقصد طلبہ کو قرآن کریم کی تلاوت تجوید کے اصولوں کے مطابق سکھانا ہے، تاکہ وہ حروف کو ان کے صحیح مخارج اور صفات کے ساتھ ادا کر سکیں اور قرآن مجید کو درست، خوبصورت اور رواں انداز میں پڑھ سکیں۔",
      topicsEn: [
        "Pronunciation points & characteristics of Arabic letters (Makharij & Sifaat)",
        "Correct pronunciation & resolving common recitation errors",
        "Rules of Noon Sakinah and Tanween (Izhar, Idgham, Iqlab, Ikhfa)",
        "Rules of Meem Sakinah (Izhar Shafawi, Idgham Shafawi, Ikhfa Shafawi)",
        "Rules of Ghunna, Madd and their primary varieties",
        "Rules of Qalqalah, Tafkheem and Tarqeeq (Heavy and light letters)",
        "Rules of Waqf (stopping) and Ibtida (starting)",
        "Practical application and fluent recitation of the Holy Qur'an"
      ],
      topicsUr: [
        "حروفِ تہجی کے مخارج اور صفاتِ لازمہ و عارضہ",
        "حروف کی درست ادائیگی اور تلفظ کی عملی اصلاح",
        "نون ساکن اور تنوین کے قواعد (اظہار، ادغام، اقلاب، اخفاء)",
        "میم ساکن کے تمام قواعد و احکام",
        "غنہ اور مد کی اقسام اور بنیادی احکام",
        "قلقلہ اور تفخیم و ترقیق (موٹے اور باریک حروف) کے قواعد",
        "وقف و ابتدا کے اصول اور علاماتِ اوقاف",
        "قرآن مجید کی درست اور باقاعدہ رواں تلاوت کی مشق"
      ],
      verse: {
        arabic: "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا",
        transEn: "“And recite the Qur'an with measured recitation (with Tajweed).” (Surah Al-Muzzammil: 4)",
        transUr: "”اور قرآن کو خوب ٹھہر ٹھہر کر (تجوید کے ساتھ) پڑھو۔“ (سورۃ المزمل، آیت: 4)"
      }
    },
    {
      id: 4,
      isOngoing: false, // 2nd 30-Day Course
      image: "assets/card-4.jpg",
      icon: "fa-microphone-lines",
      category: "tajweed",
      badgeEn: "30-Day Course",
      badgeUr: "30 روزہ کورس",
      durationEn: "30 Lessons",
      durationUr: "30 اسباق",
      titleEn: "Easy 8 Lahjaat & Maqamaat Course",
      titleUr: "آسان 8 لہجات ومقامات کورس",
      introEn: "This course introduces students to the well-known vocal maqamat and tones used in the recitation of the Holy Qur'an, so that they can learn to recite with proper Tajweed, beautiful voice, and meaningful, soulful expression.",
      introUr: "اس کورس میں طلبہ کو قرآن کریم کی تلاوت کے معروف صوتی مقامات اور لہجوں کی مشق کروائی جاتی ہے، تاکہ وہ تجوید کے اصولوں کی پابندی کرتے ہوئے خوبصورت، مؤثر اور دلنشین انداز میں تلاوت کرنا سیکھیں۔",
      topicsEn: [
        "Introduction to the 8 Famous Maqamaat: Bayati, Hijaz, Nahawand, Rast, Saba, Ajam, Kurd, Sikah",
        "Voice modulation, pitch control and vocal aesthetics in recitation",
        "Recitation maintaining strict Tajweed rules while applying melody",
        "Breathing techniques and vocal stamina control",
        "Practical training on selected verses in different maqamaat",
        "Developing a smooth, confident and expressive recitation style"
      ],
      topicsUr: [
        "آٹھ معروف مقامات کا تعارف اور عملی مشق: بیات، حجاز، نہاوند، راست، صبا، عجم، کُرد، سیکاہ",
        "آواز کے اتار چڑھاؤ اور صوتی حسن کی خصوصی تربیت",
        "تجوید کے اصولوں کے مطابق دلنشین اندازِ تلاوت",
        "مختلف آیات پر مناسب اور پُراثر لہجے کی مشق",
        "آواز پر کنٹرول اور سانس کی درست تقسیم کے اصول",
        "مختلف مقامات میں پراعتماد اور خوبصورت تلاوت کی مشق"
      ],
      verse: {
        arabic: "زَيِّنُوا الْقُرْآنَ بِأَصْوَاتِكُمْ",
        transEn: "“Beautify the Qur'an with your voices.” (Sunan Abi Dawood: 1468)",
        transUr: "”اپنی آوازوں سے قرآن کریم کو زینت دو۔“ (سنن ابی داود، حدیث: 1468)"
      }
    },
    {
      id: 5,
      isOngoing: true, // 3rd Ongoing Course
      image: "assets/card-5.jpg",
      icon: "fa-book-open",
      category: "quran",
      badgeEn: "Regular",
      badgeUr: "مستقل کورس",
      durationEn: "Deep Study",
      durationUr: "تفصیلی مطالعہ",
      titleEn: "Easy Qur'an Tafsir Course",
      titleUr: "آسان تفسیر القرآن کورس",
      introEn: "The Holy Qur'an is the guidance from Allah for all of humanity. In this course, students will learn the easy meaning of Qur'anic verses, their basic explanation, and key messages to apply them in daily life.",
      introUr: "قرآن کریم اللہ تعالیٰ کی طرف سے انسانیت کے لیے ہدایت کا سرچشمہ ہے۔ اس کورس میں طلبہ کو قرآن کریم کی آیات کا آسان مفہوم، بنیادی تشریح اور پیغام سمجھنے میں مدد دی جاتی ہے، تاکہ وہ قرآن کی تعلیمات کو اپنی روزمرہ زندگی میں اپنانے کی کوشش کر سکیں۔",
      topicsEn: [
        "Easy translation and meaning of Qur'anic verses",
        "Understanding the main message and key themes of the verses",
        "Introduction to Surahs and their historical background",
        "Qur'anic teachings and their practical application in contemporary life",
        "Guidance from the Qur'an on morals, character, and daily matters",
        "Easy explanation (Tafseer) of selected profound verses",
        "Developing the habit of reflection (Tadabbur) upon Allah's words"
      ],
      topicsUr: [
        "قرآن کریم کی آیات کا آسان اور سلیس ترجمہ و مفہوم",
        "آیات کے بنیادی پیغام اور مرکزی موضوعات کا فہم",
        "سورتوں کے تعارف اور اہم مضامین کا جامع مطالعہ",
        "قرآن کریم کی تعلیمات اور عملی زندگی میں ان کا نفاذ",
        "اخلاق، کردار اور معاملات سے متعلق قرآنی رہنمائی",
        "منتخب آیات کی آسان، عام فہم اور دلنشین تشریح",
        "قرآن کریم سے تدبر اور نصیحت حاصل کرنے کا شعور"
      ],
      verse: {
        arabic: "أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ",
        transEn: "“Do they not then reflect upon the Qur'an?” (Surah An-Nisa: 82)",
        transUr: "”کیا وہ قرآن میں غور و فکر نہیں کرتے؟“ (سورۃ النساء، آیت: 82)"
      }
    },
    {
      id: 6,
      isOngoing: false, // 3rd 30-Day Course
      image: "assets/student-books.jpg", // Student with books and notebooks studying Arabic language grammar
      icon: "fa-language",
      category: "arabic",
      badgeEn: "30-Day Course",
      badgeUr: "30 روزہ کورس",
      durationEn: "30 Lessons",
      durationUr: "30 اسباق",
      titleEn: "Easy Qur'anic Arabic Grammar Course",
      titleUr: "آسان قرآنی عربی گرامر کورس",
      introEn: "Arabic is the language of the Qur'an and Islamic sciences. In this course, students will learn Arabic in a simple and practical way to understand basic Arabic words, daily sentences, and comprehend the Qur'an directly.",
      introUr: "عربی زبان قرآن کریم اور اسلامی علوم کی اہم زبان ہے۔ اس کورس میں طلبہ کو آسان اور عملی انداز میں عربی زبان سکھائی جائے گی، تاکہ وہ بنیادی عربی الفاظ، روزمرہ جملوں اور عام گفتگو کو سمجھنے اور استعمال کرنے کی صلاحیت پیدا کر سکیں۔",
      topicsEn: [
        "Arabic letters and correct pronunciation",
        "Commonly used Arabic words in the Qur'an",
        "Basic Arabic sentence structure and syntax",
        "Nouns, verbs and particles (Ism, Fi'l, Harf)",
        "Masculine and feminine forms (Mudhakar & Mu'annath)",
        "Singular, dual and plural forms (Wahid, Tathniyah, Jam')",
        "Pronouns and demonstrative pronouns (Dhamair & Asma Isharah)",
        "Asking questions and giving answers in Arabic",
        "Everyday Arabic conversation practice and reading simple texts"
      ],
      topicsUr: [
        "عربی حروف اور ان کے درست تلفظ کی مشق",
        "قرآن کریم میں کثرت سے استعمال ہونے والے عربی الفاظ",
        "بنیادی عربی جملوں کی بناوٹ اور ساخت",
        "اسم، فعل اور حرف کی آسان پہچان اور قواعد",
        "مذکر اور مؤنث کے استعمال کے اصول",
        "واحد، تثنیہ اور جمع کے صیغوں کی پہچان",
        "ضمائر اور اسمائے اشارہ کا درست استعمال",
        "عربی میں سوال پوچھنے اور جواب دینے کے طریقے",
        "روزمرہ عربی مکالمے اور آسان قرآنی عبارات فہمی"
      ],
      verse: {
        arabic: "إِنَّا أَنْزَلْنَاهُ قُرْآنًا عَرَبِيًّا لَعَلَّكُمْ تَعْقِلُونَ",
        transEn: "“And indeed, We have sent it down as an Arabic Qur'an so that you may understand.” (Surah Yusuf: 2)",
        transUr: "”اور بے شک ہم نے اسے عربی قرآن بنا کر نازل کیا ہے تاکہ تم سمجھو۔“ (سورۃ یوسف، آیت: 2)"
      }
    },
    {
      id: 7,
      isOngoing: false, // 4th 30-Day Course
      image: "assets/adult-quran-student.jpg", // Dignified adult student reflecting upon the Holy Qur'an
      icon: "fa-envelope-open-text",
      category: "islamic",
      badgeEn: "30-Day Course",
      badgeUr: "30 روزہ کورس",
      durationEn: "30 Lessons",
      durationUr: "30 اسباق",
      titleEn: "Easy Message of the Qur'an Course",
      titleUr: "آسان پیغام قرآن کورس",
      introEn: "When Allah addresses us: 'O you who have believed!', shouldn't we know what He wants from us? In just 30 structured lessons, discover the direct commands, prohibitions, and guidance given to believers in the Holy Qur'an.",
      introUr: "اللہ تعالیٰ کے ایمان والوں کے لیے پیغامات، ہدایات اور نصیحتیں۔ صرف 30 دن اور 30 اسباق پر مشتمل کورس، جس میں قرآن مجید میں اہل ایمان کے لیے دیے گئے احکامات اور زندگی گزارنے کا لائحہ عمل آسان انداز میں سمجھایا گیا ہے۔",
      topicsEn: [
        "What does Allah want from believers in the Qur'an? (Study of 'Ya Ayyuhallazina Aamanu')",
        "What commands has Allah given directly to believers?",
        "What has Allah forbidden us from and cautioned against?",
        "What timeless advice has Allah given to strengthen our souls?",
        "Guidance for faith, worship, noble character and daily life",
        "How to apply these divine teachings in modern lifestyle effortlessly"
      ],
      topicsUr: [
        "اللہ تعالیٰ نے ایمان والوں کو کیا خطاب کیا ہے؟ (89 بار 'یا ایہا الذین آمنوا' کا مطالعہ)",
        "قرآن مجید میں اہل ایمان کے لیے کیا بنیادی احکامات دیے گئے؟",
        "کن برائیوں اور گناہوں سے سختی سے منع فرمایا گیا ہے؟",
        "اہل ایمان کے لیے کون سی مبارک نصیحتیں بیان کی گئی ہیں؟",
        "اللہ تعالیٰ اپنے مومن بندوں سے کیسا کردار چاہتا ہے؟",
        "قرآنی پیغامات کے مطابق اپنی اور اپنے اہلِ خانہ کی زندگی سنوارنا"
      ],
      verse: {
        arabic: "كِتَابٌ أَنْزَلْنَاهُ إِلَيْكَ مُبَارَكٌ لِيَدَّبَّرُوا آيَاتِهِ",
        transEn: "“This is a blessed Book which We have sent down to you, so that they may reflect upon its verses.” (Surah Sad: 29)",
        transUr: "”یہ ایک بابرکت کتاب ہے جو ہم نے آپ کی طرف نازل کی ہے تاکہ لوگ اس کی آیات میں غور و فکر کریں۔“ (سورۃ ص، آیت: 29)"
      }
    },
    {
      id: 8,
      isOngoing: false, // 5th 30-Day Course
      image: "assets/course-madinah.jpg", // Masjid an-Nabawi / Madinah Munawwarah for Seerah course
      icon: "fa-mosque",
      category: "islamic",
      badgeEn: "30-Day Course",
      badgeUr: "30 روزہ کورس",
      durationEn: "30 Lessons",
      durationUr: "30 اسباق",
      titleEn: "Easy Seerah of the Prophet ﷺ Course",
      titleUr: "آسان سیرت النبی ﷺ کورس",
      introEn: "Discover the blessed life of Prophet Muhammad ﷺ in an easy, structured way across 30 lessons covering the 4 pivotal eras: 40 years before prophethood, 13 years in Makkah, 10 years in Madinah, and 63 years in total.",
      introUr: "حضور اکرم ﷺ کی مبارک زندگی کا آسان، منظم اور مکمل مطالعہ صرف 30 اسباق میں۔ سیرت نبوی کے چار اہم ادوار: اعلان نبوت سے پہلے 40 سال، مکہ مکرمہ میں 13 سال، مدینہ منورہ میں 10 سال، حیاتِ مبارکہ 63 سال کا جدید اور دلنشین مطالعہ۔",
      topicsEn: [
        "Birth, blessed childhood and early life of the Messenger of Allah ﷺ",
        "Life before prophethood (The upright character & Hilf al-Fudul)",
        "Dawah in Makkah, facing persecution, boycotts and challenges",
        "The glorious Hijrah to Madinah and foundational community building",
        "Noble character, mercy, daily habits and conduct of the Prophet ﷺ",
        "How to apply the blessed Sunnah in our personal and family lives"
      ],
      topicsUr: [
        "ولادت با سعادت اور ابتدائی حیاتِ مبارکہ کے اہم واقعات",
        "اعلانِ نبوت سے پہلے کے حالات اور صادق و امین کا بے داغ کردار",
        "مکہ مکرمہ میں دعوتِ اسلام اور آزمائشوں کا پرعزم مقابلہ",
        "ہجرتِ مدینہ منورہ، مواخات اور ریاستِ مدینہ کا قیام",
        "رسول اللہ ﷺ کے اعلیٰ اخلاق، شفقت، رحمت اور حسنِ معاملات",
        "سیرتِ نبوی ﷺ کو عملی زندگی میں اپنانے کا آسان طریقہ"
      ],
      verse: {
        arabic: "لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ",
        transEn: "“Indeed, in the Messenger of Allah you have an excellent example.” (Surah Al-Ahzab: 21)",
        transUr: "”یقیناً تمہارے لیے اللہ کے رسول ﷺ کی زندگی میں بہترین نمونہ ہے۔“ (سورۃ الاحزاب، آیت: 21)"
      }
    },
    {
      id: 9,
      isOngoing: false, // 6th 30-Day Course
      image: "assets/course-kaaba.jpg", // Holy Kaaba / Masjid al-Haram for Khatm-e-Nubuwwat
      icon: "fa-shield-halved",
      category: "islamic",
      badgeEn: "30-Day Course",
      badgeUr: "30 روزہ کورس",
      durationEn: "30 Lessons",
      durationUr: "30 اسباق",
      titleEn: "Easy Finality of Prophethood Course",
      titleUr: "آسان ختم نبوت کورس",
      introEn: "An essential course for every Muslim to understand, preserve and strengthen the foundational belief in the Finality of Prophethood (Khatm-e-Nubuwwat) based on the authoritative textbook and authentic Islamic heritage.",
      introUr: "ہر شعبہ زندگی سے وابستہ ہر مسلمان کے لیے انتہائی ضروری علم۔ مستند کتاب کی بنیاد پر 30 اسباق، جس میں عقیدہ ختم نبوت، قرآنی دلائل، احادیث مبارکہ، اجماعِ امت اور تاریخِ تحفظ ختم نبوت کو مدلل انداز میں بیان کیا گیا ہے۔",
      topicsEn: [
        "The fundamental concept and paramount importance of Khatm-e-Nubuwwat",
        "Decisive evidence from the Qur'an, Hadith, and scholarly consensus (Ijma')",
        "Important historical events related to Khatm-e-Nubuwwat (1953 & 1974 movements)",
        "Detailed examination and refutation of false claims and modernist deviations",
        "The legal, constitutional and judicial status in Pakistan & Islamic jurisprudence",
        "Allama Iqbal's philosophical perspective on the Finality of Prophethood",
        "How to respond to contemporary doubts and protect our youth's faith"
      ],
      topicsUr: [
        "عقیدہ ختم نبوت قرآن، سنت اور اجماعِ امت کی مستند روشنی میں",
        "ختم نبوت سے متعلق اہم تاریخی واقعات اور اکابرین کی عظیم قربانیاں",
        "تحریک ختم نبوت 1953ء اور 1974ء کی تاریخی رُوداد اور آئینی فیصلہ",
        "قادیانی عقائد کا اسلام اور دیگر مذاہب کے ساتھ تحقیقی موازنہ",
        "قادیانیت کی پہچان اور ان کے اعتراضات کے مسکت علمی جوابات",
        "قانون اور دستورِ پاکستان کی نظر میں قادیانیت کی قانونی حیثیت",
        "علامہ اقبال کا نظریہ ختم نبوت اور نئی نسل کے عقائد کا تحفظ"
      ],
      verse: {
        arabic: "وَلَٰكِنْ رَسُولَ اللَّهِ وَخَاتَمَ النَّبِيِّينَ",
        transEn: "“Rather, [he is] the Messenger of Allah and the Seal of the Prophets.” (Surah Al-Ahzab: 40)",
        transUr: "”بلکہ آپ اللہ کے رسول اور تمام نبیوں کے خاتم (آخری نبی) ہیں۔“ (سورۃ الاحزاب، آیت: 40)"
      }
    },
    {
      id: 10,
      isOngoing: false, // 7th 30-Day Course
      image: "assets/card-8.jpg", // Hadith study and manuscript book photo
      icon: "fa-book-bookmark",
      category: "hadith",
      badgeEn: "30-Day Course",
      badgeUr: "30 روزہ کورس",
      durationEn: "30 Lessons",
      durationUr: "30 اسباق",
      titleEn: "Easy Collection of Hadith Course",
      titleUr: "آسان مجموعہ احادیث کورس",
      introEn: "Learn the profound teachings and wisdom of Prophet Muhammad ﷺ for a better and more meaningful life. A structured 30-lesson course based on selected authentic Ahadith touching every aspect of daily life.",
      introUr: "نبی کریم ﷺ کی تعلیمات سے اپنی زندگی سنواریں۔ مستند کتاب کی بنیاد پر 30 اسباق پر مشتمل کورس جس میں عقائد، عبادات، اخلاق، معاشرت اور روزمرہ زندگی کے لیے رسول اللہ ﷺ کی زریں تعلیمات کو آسان فہم انداز میں پیش کیا گیا ہے۔",
      topicsEn: [
        "Selected Ahadith Mubarakah and their easy understanding",
        "The correct methodology of reading, verifying and appreciating Hadith",
        "Beliefs and 'Aqeedah strengthened through authentic Prophetic narrations",
        "Ibaadat and religious duties refined according to the Sunnah",
        "Noble character and high moral values inspired by Hadith",
        "Rights of family, parents, children, relatives, neighbours and society",
        "Practical lessons and day-to-day manners for spiritual elevation"
      ],
      topicsUr: [
        "منتخب احادیث مبارکہ کا آسان، عام فہم اور دلنشین ترجمہ و تشریح",
        "حدیث مبارکہ پڑھنے، سمجھنے اور یاد کرنے کا مستند طریقہ",
        "ایمان اور عقائد سے متعلق بنیادی اور اہم احادیث",
        "عبادات، نماز، روزہ اور پاکیزگی سے متعلق مسنون ہدایات",
        "اخلاقِ حسنہ، سچائی، دیانت اور روزمرہ زندگی کے سنہری آداب",
        "والدین، اولاد، رشتہ داروں اور پڑوسیوں کے حقوق کی ادائیگی",
        "احادیث نبویہ کے ذریعے اپنی دنیا اور آخرت کو سنوارنا"
      ],
      verse: {
        arabic: "مَنْ يُطِعِ الرَّسُولَ فَقَدْ أَطَاعَ اللَّهَ",
        transEn: "“Whoever obeys the Messenger has indeed obeyed Allah.” (Surah An-Nisa: 80)",
        transUr: "”جس نے رسول کی اطاعت کی، اس نے یقیناً اللہ کی اطاعت کی۔“ (سورۃ النساء، آیت: 80)"
      }
    }
  ],

  // 8 Maqamaat details with world-famous Imams & Qaris (Sudais, Shuraim, Alafasy, Abdul Basit, Minshawi, Muaiqly, Mustafa Ismail, Dossary)
  maqamaat: [
    {
      num: "01",
      nameEn: "Bayati",
      nameUr: "بیات",
      descEn: "Foundation Tone • Heartfelt",
      descUr: "بنیادی و دلنشین صوتی مقام",
      qariEn: "Sheikh Abdul Basit Abdul Samad",
      qariUr: "شیخ عبدالباسط عبدالصمد",
      qariTitleEn: "Legendary Egyptian Master Reciter",
      qariTitleUr: "مصر کے عظیم و شہرہ آفاق قاری",
      image: "assets/qaris/abdulbasit.jpg",
      audioUrl: "assets/recitation.mp3"
    },
    {
      num: "02",
      nameEn: "Hijaz",
      nameUr: "حجاز",
      descEn: "Spiritual & Deep • Sacred Mecca",
      descUr: "روحانی و عمیق حجازی لحن",
      qariEn: "Sheikh Saud Al-Shuraim",
      qariUr: "شیخ سعود الشریم",
      qariTitleEn: "Former Imam & Khateeb, Masjid al-Haram",
      qariTitleUr: "سابق امام و خطیب مسجد الحرام، مکہ مکرمہ",
      image: "assets/qaris/shuraim.jpg",
      audioUrl: "assets/recitation.mp3"
    },
    {
      num: "03",
      nameEn: "Nahawand",
      nameUr: "نہاوند",
      descEn: "Emotional & Tender Melodic Flow",
      descUr: "رقت انگیز و پُرسوز لہجہ",
      qariEn: "Sheikh Muhammad Siddiq Al-Minshawi",
      qariUr: "شیخ محمد صدیق المنشاوی",
      qariTitleEn: "The Emotional Weeping Voice of Egypt",
      qariTitleUr: "صوتِ باکیہ (رقت انگیز قرآنی لحن)",
      image: "assets/qaris/minshawi.jpg",
      audioUrl: "assets/recitation.mp3"
    },
    {
      num: "04",
      nameEn: "Rast",
      nameUr: "راست",
      descEn: "Majestic, Grand & Authoritative",
      descUr: "پرجلال و باوقار انداز",
      qariEn: "Sheikh Abdul Rahman Al-Sudais",
      qariUr: "امامِ کعبہ شیخ عبدالرحمن السدیس",
      qariTitleEn: "Chief Imam & Khateeb, Masjid al-Haram",
      qariTitleUr: "امام و خطیب مسجد الحرام، مکہ مکرمہ",
      image: "assets/qaris/sudais.jpg",
      audioUrl: "assets/recitation.mp3"
    },
    {
      num: "05",
      nameEn: "Saba",
      nameUr: "صبا",
      descEn: "Touching, Sorrowful & Devout",
      descUr: "درد بھرا، خشوع و خضوع کا مقام",
      qariEn: "Sheikh Mustafa Ismail",
      qariUr: "شیخ مصطفیٰ اسماعیل",
      qariTitleEn: "Shaykh al-Maqari (Master of Egyptian Qaris)",
      qariTitleUr: "شیخ المقاری (استاد القراء المصریہ)",
      image: "assets/qaris/mustafa.jpg",
      audioUrl: "assets/recitation.mp3"
    },
    {
      num: "06",
      nameEn: "Ajam",
      nameUr: "عجم",
      descEn: "Joyful, Bright & Optimistic",
      descUr: "روشن و خوشگوار قرآنی انداز",
      qariEn: "Sheikh Maher Al-Muaiqly",
      qariUr: "امامِ کعبہ شیخ ماھر المعیقلی",
      qariTitleEn: "Imam & Khateeb, Masjid al-Haram",
      qariTitleUr: "امام و خطیب مسجد الحرام، مکہ مکرمہ",
      image: "assets/qaris/muaiqly.jpg",
      audioUrl: "assets/recitation.mp3"
    },
    {
      num: "07",
      nameEn: "Kurd",
      nameUr: "کُرد",
      descEn: "Soulful, Modern & Serene",
      descUr: "مسحور کن و پرسکون لحن",
      qariEn: "Sheikh Mishary Rashid Alafasy",
      qariUr: "شیخ مشاری راشد العفاسی",
      qariTitleEn: "World-Renowned Kuwaiti Reciter & Imam",
      qariTitleUr: "کویت کے عالمی شہرت یافتہ قاری و امام",
      image: "assets/qaris/alafasy.jpg",
      audioUrl: "assets/recitation.mp3"
    },
    {
      num: "08",
      nameEn: "Sikah",
      nameUr: "سیکاہ",
      descEn: "Classic Sacred Oriental Tone",
      descUr: "قدیم و پرکشش مقدس مقام",
      qariEn: "Sheikh Yasser Al-Dossary",
      qariUr: "امامِ کعبہ شیخ یاسر الدوسری",
      qariTitleEn: "Imam & Khateeb, Masjid al-Haram",
      qariTitleUr: "امام و خطیب مسجد الحرام، مکہ مکرمہ",
      image: "assets/qaris/dossary.jpg",
      audioUrl: "assets/recitation.mp3"
    }
  ],

  // Qualified Teachers & Reciters
  teachers: [
    {
      id: "t1",
      nameEn: "Maulana Qari Hameedullah Qureshi",
      nameUr: "مولانا قاری حمید اللہ قریشی",
      roleEn: "Founder & Head Instructor",
      roleUr: "اکیڈمی کے بانی و نگرانِ تدریس",
      qualificationEn: "Fazil Dars-e-Nizami, Hafiz-ul-Qur'an, Certified Qari (Ijazah in Hafs 'an Asim), 5-Year Arabic Diploma",
      qualificationUr: "فاضل درسِ نظامی، حافظِ قرآن، سند یافتہ قاری و ماہر لہجات، 5 سالہ عربی ڈپلومہ",
      specialtyEn: "Noorani Qaida, Advanced Tajweed, 8 Maqamaat Recitation, Tafseer-ul-Qur'an",
      specialtyUr: "نورانی قاعدہ، تجوید و ترتیل، 8 صوتی مقامات، تفسیر القرآن",
      experienceEn: "10+ Years Teaching Experience in Pakistan & Internationally",
      experienceUr: "10 سال سے زائد کا ملکی و بین الاقوامی تدریسی تجربہ",
      bioEn: "Maulana Qari Hameedullah Qureshi personally oversees the educational quality and teaches live 1-on-1 sessions. Having completed comprehensive Islamic scholarship and traditional Qira'at certifications from renowned institutes, he focuses on authentic articulation (Makharij), vocal melody, and spiritual character building.",
      bioUr: "اکیڈمی کے بانی اور تعلیمی امور کے سربراہ ہیں۔ انہوں نے مستند دینی اداروں سے حفظِ قرآن، علمِ تجوید و قرات، مکمل 5 سالہ عربی زبان کورس اور درسِ نظامی مکمل کیا ہے۔ آپ بذاتِ خود طلبہ کو 1-on-1 لائیو کلاسز میں تجوید، درست تلفظ اور فہمِ دین کی تدریس فراہم کرتے ہیں۔",
      image: "assets/qari-hameedullah.png",
      featured: true,
      languagesEn: "Urdu, Arabic, English",
      languagesUr: "اردو، عربی، انگلش"
    },
    {
      id: "t2",
      nameEn: "Qari Abdul Rahman Al-Madani",
      nameUr: "قاری عبد الرحمن المدنی",
      roleEn: "Senior Tajweed & Hifz Tutor",
      roleUr: "سینئر استاد برائے حفظ و تجوید",
      qualificationEn: "Sanad Qira'at 'Asharah, Hafiz-ul-Qur'an, Islamic University Alumnus",
      qualificationUr: "سند قراءاتِ عشرہ، حافظِ قرآن، جامعہ اسلامیہ گریجویٹ",
      specialtyEn: "Qur'an Memorization (Hifz), Daily Revision (Muraja'ah), Sifaat-e-Huroof",
      specialtyUr: "حفظِ قرآن، مراجعہ، مخارج و صفات",
      experienceEn: "8+ Years Online Teaching Experience",
      experienceUr: "8 سالہ آن لائن تدریسی تجربہ",
      bioEn: "Specializes in guiding children and adults through full and partial Qur'an memorization with scientific revision schedules that guarantee long-term retention.",
      bioUr: "بچوں اور بڑوں کو حفظِ قرآن کی جدید اور پائیدار تکنیکوں کے ساتھ تعلیم دیتے ہیں تاکہ یاد کیا گیا قرآن کبھی نہ بھولے۔",
      image: "assets/adult-scholar-study.jpg",
      featured: true,
      languagesEn: "Urdu, Arabic, English",
      languagesUr: "اردو، عربی، انگلش"
    },
    {
      id: "t3",
      nameEn: "Ustadha Maryam Siddiqa",
      nameUr: "استاذہ مریم صدیقہ",
      roleEn: "Head of Sisters & Children Department",
      roleUr: "نگرانِ شعبہ خواتین و اطفال (باحجاب عالمہ)",
      qualificationEn: "Certified Alimah (Dars-e-Nizami), Hafiza, Early Childhood Islamic Pedagogy",
      qualificationUr: "سند یافتہ عالمہ، حافظہ، اسلامک چائلڈ پیڈاگوجی سرٹیفائیڈ",
      specialtyEn: "Sisters 1-on-1 Classes in Complete Purdah, Kids Noorani Qaida, Masnoon Duas & Namaz",
      specialtyUr: "مکمل شرعی پردے میں بہنوں کی کلاسز، بچوں کا قاعدہ، نماز و دعائیں",
      experienceEn: "7+ Years Dedicated Sisters Teaching",
      experienceUr: "7 سالہ تدریسی تجربہ برائے خواتین",
      bioEn: "Leads our dedicated female faculty offering strict privacy and respectful 1-on-1 classes for sisters, young girls, and toddlers. Patient, nurturing, and expert in phonetics.",
      bioUr: "بہنوں اور بچیوں کے لیے مکمل شرعی پردے اور محفوظ ماحول میں انفرادی کلاسز کی نگران ہیں۔ بچوں کی تربیت اور نرم مزاجی کے ساتھ تلفظ سکھانے میں خاص مہارت رکھتی ہیں۔",
      image: "assets/girl-arabic.jpg",
      featured: true,
      languagesEn: "Urdu, English",
      languagesUr: "اردو، انگلش"
    },
    {
      id: "t4",
      nameEn: "Qari Bilal Tariq",
      nameUr: "قاری بلال طارق",
      roleEn: "Instructor of Arabic Grammar & Hadith",
      roleUr: "استاد برائے قرآنی عربی گرامر و حدیث",
      qualificationEn: "MA Islamic Studies, Fazil Arabic & Hadith, Certified Qari",
      qualificationUr: "ایم اے اسلامیات، فاضل عربی و حدیث، سند یافتہ قاری",
      specialtyEn: "Qur'anic Arabic Morphology (Sarf), Syntax (Nahw), Forty Hadith, Seerah",
      specialtyUr: "قرآنی عربی نحو و صرف، چالیس احادیث، سیرت النبی ﷺ",
      experienceEn: "6+ Years Teaching Online",
      experienceUr: "6 سالہ تدریسی تجربہ",
      bioEn: "Known for demystifying Arabic grammar and making Quranic vocabulary accessible and intuitive within 30 daily lessons.",
      bioUr: "قرآنی عربی گرامر اور احادیث کے مفہوم کو آسان ترین اسلوب میں 30 اسباق کے اندر ذہن نشین کروانے کے ماہر ہیں۔",
      image: "assets/student-books.jpg",
      featured: false,
      languagesEn: "Urdu, English, Arabic",
      languagesUr: "اردو، انگلش، عربی"
    },
    {
      id: "t5",
      nameEn: "Ustadha Ayesha Noor",
      nameUr: "استاذہ عائشہ نور",
      roleEn: "Tajweed & Recitation Specialist for Sisters",
      roleUr: "ماہرِ تجوید و ترتیل برائے طالبات (حافظہ و قاریہ)",
      qualificationEn: "Certified Qaria & Hafiza, Tajweed al-Jazariyyah Sanad",
      qualificationUr: "سند یافتہ قاریہ و حافظہ، سند جزریہ فی التجوید",
      specialtyEn: "Fluent Tajweed, Resolving Recitation Errors, Sisters Group Classes",
      specialtyUr: "روانی سے تجوید، لحنِ جلی و خفی کی اصلاح، بہنوں کی گروپ کلاسز",
      experienceEn: "5+ Years Teaching Experience",
      experienceUr: "5 سالہ تدریسی تجربہ",
      bioEn: "Specializes in helping adult sisters correct their recitation of Surah Al-Fatihah, daily Surahs, and Namaz recitations in private, comfortable sessions.",
      bioUr: "بالغ بہنوں اور گھریلو خواتین کے لیے تجوید کی اصلاح، نماز کی درستی اور مسنون اذکار کی پروقار تدریس فراہم کرتی ہیں۔",
      image: "assets/girl-arabic.jpg",
      featured: false,
      languagesEn: "Urdu, English",
      languagesUr: "اردو، انگلش"
    }
  ],

  // 8 Verified Regional Centers & Global Coordination Desks
  centers: [
    {
      id: "c1",
      nameEn: "Central Academic & Admissions HQ (Karachi)",
      nameUr: "مرکزی تعلیمی و داخلہ ہیڈ کوارٹر (کراچی)",
      cityEn: "Karachi, Pakistan",
      cityUr: "کراچی، پاکستان",
      addressEn: "University Road / Gulshan-e-Iqbal, Karachi, Sindh, Pakistan",
      addressUr: "یونیورسٹی روڈ / گلشن اقبال، کراچی، پاکستان",
      phone: "+92 311 8284694",
      whatsapp: "923118284694",
      email: "admissions@qislamicacademy.com",
      hoursEn: "24/7 Global Live Scheduling Desk",
      hoursUr: "24 گھنٹے عالمی کوآرڈینیشن ڈیسک",
      roleEn: "Central Academic Directorate, teacher vetting, syllabus monitoring & global student scheduling.",
      roleUr: "مرکزی انتظامیہ، اساتذہ کی تعیناتی، نصاب کی نگرانی اور بین الاقوامی ٹائم ٹیبل کا مرکزی دفتر۔",
      isHeadquarters: true,
      mapUrl: "https://maps.google.com/?q=Karachi,Pakistan"
    },
    {
      id: "c2",
      nameEn: "Punjab Regional Center (Lahore)",
      nameUr: "پنجاب ریجنل مرکز (لاہور)",
      cityEn: "Lahore, Pakistan",
      cityUr: "لاہور، پاکستان",
      addressEn: "Model Town / Ferozepur Road, Lahore, Punjab, Pakistan",
      addressUr: "ماڈل ٹاؤن / فیروز پور روڈ، لاہور، پاکستان",
      phone: "+92 311 8284694",
      whatsapp: "923118284694",
      email: "lahore@qislamicacademy.com",
      hoursEn: "Mon - Sat: 8:00 AM - 10:00 PM PKT",
      hoursUr: "پیر تا ہفتہ: صبح 8 تا رات 10 بجے",
      roleEn: "Student evaluation desk, parent guidance and regional teacher coordination.",
      roleUr: "طلبہ کی تشخیصی کلاسز اور علاقائی اساتذہ کی نگرانی۔",
      isHeadquarters: false,
      mapUrl: "https://maps.google.com/?q=Lahore,Pakistan"
    },
    {
      id: "c3",
      nameEn: "KPK & Peshawar Regional Center",
      nameUr: "خیبر پختونخوا و پشاور مرکز (Peshawar)",
      cityEn: "Peshawar, Khyber Pakhtunkhwa",
      cityUr: "پشاور، خیبر پختونخوا",
      addressEn: "University Road / Hayatabad / Saddar, Peshawar, KP, Pakistan",
      addressUr: "یونیورسٹی روڈ / حیات آباد / صدر، پشاور، خیبر پختونخوا",
      phone: "+92 311 8284694",
      whatsapp: "923118284694",
      email: "peshawar@qislamicacademy.com",
      hoursEn: "Mon - Sun: 8:00 AM - 10:00 PM PKT",
      hoursUr: "روزانہ: صبح 8 تا رات 10 بجے",
      roleEn: "KPK regional admissions, certified Pashto/Urdu/English teachers, and student coordination.",
      roleUr: "پشاور و کے پی کے کے طلبہ کے داخلے، امتحانات اور پشتو، اردو و انگلش اساتذہ کی باقاعدہ کوآرڈینیشن۔",
      isHeadquarters: false,
      mapUrl: "https://maps.google.com/?q=Peshawar,Pakistan"
    },
    {
      id: "c3b",
      nameEn: "Federal Capital Center (Islamabad & Rawalpindi)",
      nameUr: "وفاقی دارالحکومت مرکز (اسلام آباد و راولپنڈی)",
      cityEn: "Islamabad, Pakistan",
      cityUr: "اسلام آباد، پاکستان",
      addressEn: "Blue Area / Sector F-8, Islamabad, Pakistan",
      addressUr: "بلیو ایریا / سیکٹر ایف 8، اسلام آباد، پاکستان",
      phone: "+92 311 8284694",
      whatsapp: "923118284694",
      email: "islamabad@qislamicacademy.com",
      hoursEn: "Mon - Sun: 9:00 AM - 9:00 PM PKT",
      hoursUr: "روزانہ: صبح 9 تا رات 9 بجے",
      roleEn: "Academic accreditation, certificate issuance and overseas family coordination.",
      roleUr: "اسناد کی تصدیق، امتحانات اور اوورسیز فیملیز کی رہنمائی۔",
      isHeadquarters: false,
      mapUrl: "https://maps.google.com/?q=Islamabad,Pakistan"
    },
    {
      id: "c4",
      nameEn: "United Kingdom (UK) Support Desk",
      nameUr: "برطانیہ سپورٹ ڈیسک (لندن و برمنگھم)",
      cityEn: "London & Birmingham, UK",
      cityUr: "لندن و برمنگھم، یو کے",
      addressEn: "Whitechapel, London E1 / Sparkbrook, Birmingham B11 (UK Virtual Desk)",
      addressUr: "لندن و برمنگھم، برطانیہ (ورچوئل ڈیسک برائے والدین)",
      phone: "+92 311 8284694",
      whatsapp: "923118284694",
      email: "uk@qislamicacademy.com",
      hoursEn: "Daily: 8:00 AM - 10:00 PM GMT",
      hoursUr: "برطانوی وقت: صبح 8 تا رات 10 بجے",
      roleEn: "Dedicated GMT time-slot coordination, British school curriculum alignment, and UK parent support.",
      roleUr: "برطانوی ٹائم زون کے مطابق اسکول کے بعد کلاسز اور والدین سے براہِ راست رابطہ۔",
      isHeadquarters: false,
      mapUrl: "https://maps.google.com/?q=London,UK"
    },
    {
      id: "c5",
      nameEn: "North America (USA) Support Desk",
      nameUr: "شمالی امریکہ سپورٹ ڈیسک (نیویارک و ہیوسٹن)",
      cityEn: "New York & Houston, USA",
      cityUr: "نیویارک و ہیوسٹن، امریکہ",
      addressEn: "Brooklyn, New York / Sugar Land, Texas (USA Virtual Desk)",
      addressUr: "نیویارک و ٹیکساس، امریکہ (اوورسیز ڈیسک)",
      phone: "+92 311 8284694",
      whatsapp: "923118284694",
      email: "usa@qislamicacademy.com",
      hoursEn: "Daily: 7:00 AM - 11:00 PM EST / CST",
      hoursUr: "امریکی وقت (EST/CST): صبح 7 تا رات 11 بجے",
      roleEn: "EST/CST/PST scheduling, weekend Islamic school support, and American accent Tajweed coaching.",
      roleUr: "امریکی ٹائم زونز کے مطابق شام اور ویک اینڈ کلاسز کی باقاعدہ تنظیم۔",
      isHeadquarters: false,
      mapUrl: "https://maps.google.com/?q=New+York,USA"
    },
    {
      id: "c6",
      nameEn: "Canada Regional Support Desk",
      nameUr: "کینیڈا ریجنل ڈیسک (ٹورنٹو و کیلگری)",
      cityEn: "Toronto & Calgary, Canada",
      cityUr: "ٹورنٹو و کیلگری، کینیڈا",
      addressEn: "Mississauga, Ontario / Calgary, Alberta (Canada Virtual Desk)",
      addressUr: "ٹورنٹو و کیلگری، کینیڈا (ورچوئل ڈیسک)",
      phone: "+92 311 8284694",
      whatsapp: "923118284694",
      email: "canada@qislamicacademy.com",
      hoursEn: "Daily: 7:00 AM - 10:00 PM EST / MST",
      hoursUr: "کینیڈین وقت: صبح 7 تا رات 10 بجے",
      roleEn: "Bilingual English/Urdu student support, winter flexible hours, and family Hifz retention.",
      roleUr: "کینیڈا میں مقیم فیملیز کے بچوں کے لیے انگریزی و اردو میں تدریس۔",
      isHeadquarters: false,
      mapUrl: "https://maps.google.com/?q=Toronto,Canada"
    },
    {
      id: "c7",
      nameEn: "Middle East & Gulf Support Desk",
      nameUr: "مشرقِ وسطیٰ و خلیج ڈیسک (دبئی و ریاض)",
      cityEn: "Dubai, UAE & Riyadh, KSA",
      cityUr: "دبئی، متحدہ عرب امارات",
      addressEn: "Deira / Business Bay, Dubai, UAE (Gulf Regional Office)",
      addressUr: "دبئی، متحدہ عرب امارات (خلیجی ممالک کا رابطہ مرکز)",
      phone: "+92 311 8284694",
      whatsapp: "923118284694",
      email: "gulf@qislamicacademy.com",
      hoursEn: "Daily: 8:00 AM - 11:00 PM GST",
      hoursUr: "خلیجی وقت: صبح 8 تا رات 11 بجے",
      roleEn: "GST time-slot management, Friday-Saturday weekend slots, and Arabic immersion assistance.",
      roleUr: "خلیجی ممالک کے رہائشی پاکستانی و غیر ملکی طلبہ کے لیے لچکدار اوقات۔",
      isHeadquarters: false,
      mapUrl: "https://maps.google.com/?q=Dubai,UAE"
    },
    {
      id: "c8",
      nameEn: "Australia & Pacific Support Desk",
      nameUr: "آسٹریلیا و بحرالکاہل ڈیسک (سڈنی و میلبورن)",
      cityEn: "Sydney & Melbourne, Australia",
      cityUr: "سڈنی و میلبورن، آسٹریلیا",
      addressEn: "Lakemba, Sydney / Broadmeadows, Melbourne (Australia Desk)",
      addressUr: "سڈنی و میلبورن، آسٹریلیا (اوورسیز ڈیسک)",
      phone: "+92 311 8284694",
      whatsapp: "923118284694",
      email: "australia@qislamicacademy.com",
      hoursEn: "Daily: 6:00 AM - 9:00 PM AEST",
      hoursUr: "آسٹریلین وقت (AEST): صبح 6 تا رات 9 بجے",
      roleEn: "AEST timezone alignment, morning school prep sessions, and early Quran foundational classes.",
      roleUr: "آسٹریلیا اور نیوزی لینڈ کے طلبہ کے لیے صبح اور شام کے خصوصی اوقات۔",
      isHeadquarters: false,
      mapUrl: "https://maps.google.com/?q=Sydney,Australia"
    }
  ],

  // Public Teaching Video & Audio Demonstrations
  gallery: [
    {
      id: "v1",
      type: "video",
      titleEn: "Tajweed Articulation: Noon Sakinah & Tanween Masterclass",
      titleUr: "علمِ تجوید: نون ساکن اور تنوین کے چار قواعد کی عملی مشق",
      descEn: "Live demonstration showing the exact tongue positioning and Ghunna duration for Izhar, Idgham, Iqlab and Ikhfa.",
      descUr: "استاد محترم کی طرف سے نون ساکن و تنوین کے قواعد کی درست مخارج اور غنہ کی مقدار کے ساتھ براہِ راست تفہیم۔",
      category: "tajweed",
      categoryLabelEn: "Tajweed Mastery",
      categoryLabelUr: "علمِ تجوید",
      teacherEn: "Maulana Qari Hameedullah Qureshi",
      teacherUr: "مولانا قاری حمید اللہ قریشی",
      duration: "12:45",
      date: "2026-10-15",
      thumbnail: "assets/c4_tajweed.jpg",
      videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
      featured: true
    },
    {
      id: "v2",
      type: "video",
      titleEn: "1-on-1 Noorani Qaida Class Demonstration with a Child",
      titleUr: "بچے کے ساتھ 1-on-1 نورانی قاعدہ کی لائیو کلاس کا عملی نمونہ",
      descEn: "See how our teachers patiently correct pronunciation of complex letters like 'Dhad', 'Qaf', and 'Ayn' in real-time.",
      descUr: "دیکھیے کہ کس طرح اکیڈمی کے اساتذہ بچوں کو محبت اور نرمی سے مشکل حروف کی درست ادائیگی کرواتے ہیں۔",
      category: "qaida",
      categoryLabelEn: "Noorani Qaida",
      categoryLabelUr: "نورانی قاعدہ",
      teacherEn: "Maulana Qari Hameedullah Qureshi",
      teacherUr: "مولانا قاری حمید اللہ قریشی",
      duration: "08:30",
      date: "2026-10-18",
      thumbnail: "assets/boy-reading-quran.png",
      videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
      featured: true
    },
    {
      id: "v3",
      type: "video",
      titleEn: "Recitation in Maqam Bayati & Maqam Hijaz with Vocal Techniques",
      titleUr: "مقام بیات اور مقام حجاز میں تلاوتِ قرآن اور صوتی کنٹرول کی تربیت",
      descEn: "Learn the foundational vocal aesthetic of Maqam Bayati and how to transition gracefully into the spiritual depth of Hijaz.",
      descUr: "آٹھ لہجات و مقامات کورس کے تحت مقام بیات اور حجاز میں خوبصورت لہجے کے ساتھ ترتیل کا عملی سبق۔",
      category: "maqamaat",
      categoryLabelEn: "8 Maqamaat",
      categoryLabelUr: "8 مقامات و لہجات",
      teacherEn: "Maulana Qari Hameedullah Qureshi",
      teacherUr: "مولانا قاری حمید اللہ قریشی",
      duration: "15:20",
      date: "2026-10-20",
      thumbnail: "assets/c5_maqamaat.jpg",
      videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
      featured: true
    },
    {
      id: "v4",
      type: "video",
      titleEn: "Arabic Grammar Essentials: Identifying Ism, Fi'l & Harf",
      titleUr: "قرآنی عربی گرامر: اسم، فعل اور حرف کی آسان پہچان",
      descEn: "A 14-minute structured lesson breaking down Quranic sentence structure for beginners without confusing terminology.",
      descUr: "قرآنی الفاظ کی ساخت اور عربی جملوں کو 30 روزہ کورس کے تحت آسان فہم انداز میں سمجھنے کا سبق۔",
      category: "arabic",
      categoryLabelEn: "Arabic Grammar",
      categoryLabelUr: "عربی گرامر",
      teacherEn: "Qari Bilal Tariq",
      teacherUr: "قاری بلال طارق",
      duration: "14:10",
      date: "2026-10-22",
      thumbnail: "assets/c6_arabic.jpg",
      videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
      featured: false
    },
    {
      id: "v5",
      type: "video",
      titleEn: "Sisters & Kids Class: 40 Masnoon Duas with Daily Pronunciation",
      titleUr: "بہنوں اور بچوں کے لیے: مسنون دعائیں درست تلفظ و فہم کے ساتھ",
      descEn: "Dedicated female instructor demonstrating morning and evening supplications and daily Islamic etiquette.",
      descUr: "باحجاب معلمہ کی زیرِ نگرانی روزمرہ زندگی کی مسنون دعائیں اور بنیادی اسلامی آداب کا مشقی سبق۔",
      category: "kids",
      categoryLabelEn: "Kids & Sisters",
      categoryLabelUr: "بچے و خواتین",
      teacherEn: "Ustadha Maryam Siddiqa",
      teacherUr: "استاذہ مریم صدیقہ",
      duration: "10:15",
      date: "2026-10-24",
      thumbnail: "assets/girl-arabic.jpg",
      videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
      featured: false
    },
    {
      id: "v6",
      type: "video",
      titleEn: "Surah Al-Fatiha Recitation Correction & Common Phonetic Pitfalls",
      titleUr: "سورۃ الفاتحہ کی درست تلاوت اور عام صوتی غلطیوں کا ازالہ",
      descEn: "Critical analysis of letters Ta, Ha, Ayn, and Dhad in Surah Al-Fatiha ensuring your Namaz recitation is fully valid.",
      descUr: "نماز کی صحت کے لیے سورۃ الفاتحہ کے مخارج، صفات اور اعراب کی حرف بہ حرف تفصیلی اصلاح۔",
      category: "tajweed",
      categoryLabelEn: "Tajweed Mastery",
      categoryLabelUr: "علمِ تجوید",
      teacherEn: "Maulana Qari Hameedullah Qureshi",
      teacherUr: "مولانا قاری حمید اللہ قریشی",
      duration: "11:50",
      date: "2026-10-26",
      thumbnail: "assets/c3_tajweed.jpg",
      videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
      featured: false
    },
    {
      id: "a1",
      type: "audio",
      titleEn: "Surah Ar-Rahman (Maqam Bayati & Nahawand Recitation)",
      titleUr: "تلاوت سورۃ الرحمٰن (مقام بیات و نہاوند)",
      descEn: "Soulful studio recitation showcasing measured Tarteel, perfect Makharij and breathing technique.",
      descUr: "پُرسوز و دلنشین تلاوتِ قرآن مع ترتیل و تجوید۔",
      category: "recitation",
      categoryLabelEn: "Qur'an Recitation",
      categoryLabelUr: "تلاوتِ قرآن",
      teacherEn: "Maulana Qari Hameedullah Qureshi",
      teacherUr: "مولانا قاری حمید اللہ قریشی",
      duration: "03:42",
      date: "2026-10-20",
      audioUrl: "assets/recitation.mp3",
      featured: true
    },
    {
      id: "a2",
      type: "audio",
      titleEn: "Surah Al-Mulk (Tarteel & Tajweed Demonstration)",
      titleUr: "تلاوت سورۃ الملک (ترتیل و تجوید کا عملی نمونہ)",
      descEn: "Demonstration of Waqf, Ibtida, and moderate speed Tarteel ideal for student practice.",
      descUr: "وقف و ابتدا کے قواعد اور معتدل رفتار کے ساتھ تلاوتِ سورۃ الملک۔",
      category: "recitation",
      categoryLabelEn: "Qur'an Recitation",
      categoryLabelUr: "تلاوتِ قرآن",
      teacherEn: "Maulana Qari Hameedullah Qureshi",
      teacherUr: "مولانا قاری حمید اللہ قریشی",
      duration: "04:15",
      date: "2026-10-22",
      audioUrl: "assets/recitation.mp3",
      featured: true
    }
  ],

  // Teaching Methodology Details
  teachingMethod: {
    steps: [
      {
        step: "01",
        titleEn: "Daily New Lesson (Sabaq)",
        titleUr: "۱۔ روزانہ نیا سبق (سبق)",
        descEn: "Teacher recites 1-on-1 while highlighting the screen. The student repeats until articulation (Makhraj) and vowel rules are 100% accurate.",
        descUr: "استاد محترم اسکرین پر پوائنٹر سے رہنمائی کرتے ہوئے خود پڑھتے ہیں اور طالب علم سے اس وقت تک دہرائی کرواتے ہیں جب تک تلفظ 100 فیصد درست نہ ہو جائے۔",
        icon: "fa-book-open-reader"
      },
      {
        step: "02",
        titleEn: "Recent Revision (Sabqi)",
        titleUr: "۲۔ قریبی اسباق کی دہرائی (سبقی)",
        descEn: "Before concluding, the student recites the last 4 to 8 days' lessons to ensure seamless continuity and eliminate forgetting.",
        descUr: "نیا سبق پکا کرنے کے لیے پچھلے 4 سے 8 دنوں کے اسباق روزانہ سنے جاتے ہیں تاکہ طالب علم پچھلا سبق نہ بھولے۔",
        icon: "fa-repeat"
      },
      {
        step: "03",
        titleEn: "Cumulative Retention (Manzil / Daur)",
        titleUr: "۳۔ مجموعی دہرائی (منزل / دور)",
        descEn: "For Hifz and Nazira students, a dedicated portion of previous Juz / Paras is recited daily on a cyclical schedule.",
        descUr: "پچھلے تمام مکمل شدہ پارے اور اسباق ایک باقاعدہ روٹیشن کے تحت دہرائے جاتے ہیں تاکہ مکمل قرآن کریم ہمیشہ یاد رہے۔",
        icon: "fa-layer-group"
      },
      {
        step: "04",
        titleEn: "Islamic Etiquette & Duas (Tarbiyah)",
        titleUr: "۴۔ مسنون دعائیں و اخلاقی تربیت (تربیت)",
        descEn: "Every session concludes with 5 minutes of Masnoon Duas, 6 Kalimas, Namaz practical steps, and moral Islamic manners.",
        descUr: "ہر کلاس کے اختتام پر 5 منٹ مسنون دعائیں، نماز کی درستی، چھ کلمے اور اخلاقی تربیت کے لیے مخصوص کیے جاتے ہیں۔",
        icon: "fa-heart"
      }
    ]
  },

  // 10 Countries for Global Classes
  countries: [
    { nameEn: "UK", nameUr: "برطانیہ", flag: "assets/flag-uk.png" },
    { nameEn: "USA", nameUr: "امریکہ", flag: "assets/flag-usa.png" },
    { nameEn: "UAE", nameUr: "متحدہ عرب امارات", flag: "assets/flag-uae.png" },
    { nameEn: "Australia", nameUr: "آسٹریلیا", flag: "assets/flag-australia.png" },
    { nameEn: "Canada", nameUr: "کینیڈا", flag: "assets/flag-canada.png" },
    { nameEn: "New Zealand", nameUr: "نیوزی لینڈ", flag: "assets/flag-new-zealand.png" },
    { nameEn: "Netherlands", nameUr: "نیدرلینڈز", flag: "assets/flag-netherlands.png" },
    { nameEn: "Spain", nameUr: "اسپین", flag: "assets/flag-spain.png" },
    { nameEn: "France", nameUr: "فرانس", flag: "assets/flag-france.png" },
    { nameEn: "Italy", nameUr: "اٹلی", flag: "assets/flag-italy.png" }
  ],

  // Testimonials
  testimonials: [
    {
      nameEn: "Tariq Mahmood",
      nameUr: "طارق محمود",
      locationEn: "United Kingdom (UK)",
      locationUr: "برطانیہ (یو کے)",
      rating: 5,
      reviewEn: "Alhamdulillah, my two children completed the Easy Qur'an Reading Course with Q Islamic Academy. The teacher was extremely patient, punctual and knowledgeable. Their Tajweed has improved drastically!",
      reviewUr: "الحمدللہ، میرے دو بچوں نے کیو اسلامک اکیڈمی سے آسان ناظرہ قرآن کورس مکمل کیا۔ استاد محترم انتہائی شفیق اور باقاعدہ ہیں۔ بچوں کی تجوید میں حیرت انگیز بہتری آئی ہے۔"
    },
    {
      nameEn: "Fatima Zahra",
      nameUr: "فاطمہ زہرا",
      locationEn: "Canada",
      locationUr: "کینیڈا",
      rating: 5,
      reviewEn: "I joined the Sisters Group Class for the Easy Message of the Qur'an Course. It was eye-opening! In 30 days, I learned the direct commands of Allah for believers. The female teacher was wonderful.",
      reviewUr: "میں نے بہنوں کی مخصوص گروپ کلاس میں آسان پیغام قرآن کورس کیا۔ صرف 30 دنوں میں قرآن کے احکامات کو اتنی خوبصورتی سے سمجھایا گیا کہ زندگی بدل گئی۔ بہت شکریہ!"
    },
    {
      nameEn: "Muhammad Usman",
      nameUr: "محمد عثمان",
      locationEn: "United States (USA)",
      locationUr: "امریکہ (یو ایس اے)",
      rating: 5,
      reviewEn: "The 8 Lahjaat & Maqamaat course is unique and unmatched online. Learning Maqam Bayati, Hijaz and Rast from certified Qaris was a blessing. Highly recommend Q Islamic Academy!",
      reviewUr: "آٹھ لہجات و مقامات کا کورس واقعی لاجواب ہے۔ قاری صاحب نے نہایت مہارت سے بیات، حجاز اور راست لہجوں کی عملی مشق کروائی۔ آن لائن ایسی معیاری تعلیم نایاب ہے۔"
    }
  ],

  // FAQs
  faqs: [
    {
      qEn: "How do I start with a Free Trial class?",
      qUr: "مفت ٹرائل کلاس حاصل کرنے کا کیا طریقہ ہے؟",
      aEn: "Simply click on the 'Book Free Trial' button or message us directly on WhatsApp at +92 311 8284694. We will coordinate a time that fits your schedule and assign a certified teacher for your evaluation session.",
      aUr: "آپ بس 'مفت ٹرائل کلاس' کے بٹن پر کلک کریں یا براہِ راست واٹس ایپ نمبر 8284694 311 92+ پر رابطہ کریں۔ ہم آپ کی سہولت کے مطابق وقت طے کر کے مفت تشخیصی کلاس فراہم کریں گے۔"
    },
    {
      qEn: "What is the duration to complete the courses?",
      qUr: "کورسز مکمل کرنے کی مدت کیا ہے؟",
      aEn: "Q Islamic Academy offers 10 comprehensive courses, with the opportunity to complete most courses in approximately 30 daily lessons (around 30 days). Core programs like Quran Reading and Memorisation continue flexibly according to each student's pace.",
      aUr: "کیو اسلامک اکیڈمی میں کل 10 جامع کورسز کروائے جاتے ہیں، جن میں زیادہ تر کورسز تقریباً 30 دن اور 30 اسباق میں مکمل کرنے کا بہترین موقع فراہم کیا جاتا ہے۔ جبکہ ناظرہ اور حفظ جیسے بنیادی قرآنی کورسز طالب علم کی سہولت اور رفتار کے مطابق جاری رہتے ہیں۔"
    },
    {
      qEn: "Are female teachers available for sisters and girls?",
      qUr: "کیا بچیوں اور خواتین کے لیے معلمات (خواتین اساتذہ) دستیاب ہیں؟",
      aEn: "Yes! We have highly qualified and certified female teachers (Alimat and Hafizat) for our sisters and young girls, ensuring complete privacy, comfort and dedicated group classes.",
      aUr: "جی ہاں! ہماری اکیڈمی میں بچیوں اور خواتین کے لیے مکمل شرعی پردے اور باحجاب ماحول کے ساتھ سند یافتہ عالمات اور حافظات معلمات موجود ہیں۔"
    },
    {
      qEn: "Can I choose my own flexible class timings?",
      qUr: "کیا کلاس کے اوقات اپنی سہولت کے مطابق منتخب کیے جا سکتے ہیں؟",
      aEn: "Yes, our teachers are available 24/7 across multiple time zones (UK, USA, Canada, Europe, Middle East, Australia, Pakistan). You can choose any slot convenient for you.",
      aUr: "جی بالکل! چونکہ ہمارے طلبہ پوری دنیا سے ہیں، اس لیے کلاس کے اوقات چوبیس گھنٹے آپ کی سہولت اور ٹائم زون کے مطابق طے کیے جاتے ہیں۔"
    },
    {
      qEn: "What are the course fees and payment methods?",
      qUr: "کورس کی فیس اور ادائیگی کے طریقے کیا ہیں؟",
      aEn: "We maintain highly reasonable and subsidized fees so that authentic Islamic education remains accessible to all. Fees can be paid conveniently via Bank Transfer, EasyPaisa, JazzCash, or International remit.",
      aUr: "ہماری فیس انتہائی مناسب اور معقول ہے تاکہ ہر فرد دینی علم سے مستفید ہو سکے۔ فیس بینک اکاؤنٹ، ایزی پیسہ، جاز کیش یا انٹرنیشنل ٹرانسفر کے ذریعے باآسانی ادا کی جا سکتی ہے۔"
    }
  ],

  // Interactive AI Assistant Knowledge Base
  qaBot: [
    {
      keywords: ["کورس", "کورسز", "courses", "course"],
      answerUr: "کیو اسلامک اکیڈمی میں کل 10 جامع اسلامی کورسز کروائے جاتے ہیں، جن میں زیادہ تر کورسز تقریباً 30 دن میں مکمل کرنے کا سنہری موقع حاصل ہے! مزید تفصیلات یا ۳ روزہ مفت ٹرائل کے لیے ہم سے واٹس ایپ پر رابطہ فرمائیں۔",
      answerEn: "Q Islamic Academy offers 10 comprehensive Islamic courses, with the opportunity to complete most courses in approximately 30 days! Contact us on WhatsApp for details and 3 days free trial."
    },
    {
      keywords: ["فیس", "ہدیہ", "fee", "fees", "cost", "price"],
      answerUr: "ہماری فیس انتہائی مناسب اور معقول رکھی گئی ہے تاکہ ہر گھر تک دینی تعلیم بآسانی پہنچ سکے۔ ادائیگی بینک، ایزی پیسہ، جاز کیش یا انٹرنیشنل ٹرانسفر سے ممکن ہے۔ تفصیلات کے لیے واٹس ایپ پر رابطہ فرمائیں۔",
      answerEn: "Our fee structure is highly affordable and subsidized. Payments can be made via Bank Transfer, EasyPaisa, JazzCash, or International remit. Contact us on WhatsApp for exact details."
    },
    {
      keywords: ["خواتین", "بہن", "عورت", "female", "sister", "woman"],
      answerUr: "جی ہاں! بچیوں اور خواتین کے لیے باحجاب اور سند یافتہ معلمات (عالمات و حافظات) موجود ہیں، اور مکمل شرعی پردے کے ماحول میں انفرادی یا گروپ کلاسز فراہم کی جاتی ہیں۔",
      answerEn: "Yes! We have qualified and certified female scholars (Alimat & Hafizat) providing dedicated classes for sisters and girls in complete privacy."
    },
    {
      keywords: ["وقت", "اوقات", "ٹائم", "timing", "time", "schedule"],
      answerUr: "کلاسز کے اوقات 24 گھنٹے آپ کی سہولت کے مطابق دستیاب ہیں۔ آپ دنیا کے کسی بھی ملک سے اپنے ٹائم زون کے مطابق وقت منتخب کر سکتے ہیں۔",
      answerEn: "Classes are available 24/7. You can choose any schedule that fits your daily routine and local time zone."
    },
    {
      keywords: ["ٹرائل", "مفت", "trial", "free", "demo"],
      answerUr: "آپ بالکل مفت 1-on-1 ٹرائل کلاس لے سکتے ہیں۔ ٹاپ پر موجود 'مفت ٹرائل حاصل کریں' بٹن پر کلک کریں یا براہِ راست واٹس ایپ پر +92 311 8284694 پر میسج بھیجیں۔",
      answerEn: "You can book a 100% Free 1-on-1 evaluation class! Click 'Book Free Trial' or message us on WhatsApp at +92 311 8284694."
    }
  ],
  // Default Sample Inquiries for Admin Inbox
  initialInquiries: [
    {
      id: "inq-101",
      date: "2026-10-26 14:30",
      type: "Free 3-Day Trial",
      name: "Hamza Tariq",
      father: "Tariq Mahmood",
      gender: "Male",
      age: "11",
      country: "United Kingdom",
      city: "Birmingham",
      phone: "+44 7911 123456",
      email: "tariq.fam@example.co.uk",
      course: "1. Easy Qur'an Reading Course",
      teacher: "Male Scholar (Certified Qari)",
      timing: "Evening (4 PM - 8 PM GMT)",
      days: "5 Days a Week (Mon - Fri)",
      notes: "Looking for beginner Noorani Qaida lessons with patient teacher.",
      status: "New"
    },
    {
      id: "inq-102",
      date: "2026-10-25 18:15",
      type: "Regular Admission",
      name: "Ayesha Imran",
      father: "Imran Khan",
      gender: "Female",
      age: "16",
      country: "Canada",
      city: "Mississauga",
      phone: "+1 647 555 0192",
      email: "imran.ayesha@example.ca",
      course: "3. Easy Tajweed Course",
      teacher: "Female Tutor (Certified Alima in Purdah)",
      timing: "Afternoon (12 PM - 4 PM EST)",
      days: "3 Days a Week (Alternate Days)",
      notes: "Sisters 1-on-1 class requested in complete privacy.",
      status: "Contacted"
    },
    {
      id: "inq-103",
      date: "2026-10-24 11:20",
      type: "Free 3-Day Trial",
      name: "Zayd Farooq",
      father: "Farooq Ahmed",
      gender: "Male",
      age: "9",
      country: "United States",
      city: "Dallas, TX",
      phone: "+1 214 555 8891",
      email: "farooq.z@example.com",
      course: "2. Easy Qur'an Memorisation Course",
      teacher: "Male Scholar (Certified Qari)",
      timing: "Morning Weekend (8 AM - 12 PM CST)",
      days: "Weekend Only (Sat & Sun)",
      notes: "Completed 2 Paras, wants to continue structured Hifz program.",
      status: "Enrolled"
    }
  ]
};

// Global Store Helper with LocalStorage Persistence
const Q_STORE = {
  get: function(key, fallback) {
    try {
      const data = localStorage.getItem('q_academy_' + key);
      return data ? JSON.parse(data) : fallback;
    } catch(e) {
      return fallback;
    }
  },
  set: function(key, value) {
    try {
      localStorage.setItem('q_academy_' + key, JSON.stringify(value));
    } catch(e) {
      console.error('Storage error', e);
    }
  },
  getCourses: function() {
    return this.get('courses', ACADEMY_DATA.courses);
  },
  getTeachers: function() {
    return this.get('teachers', ACADEMY_DATA.teachers);
  },
  getCenters: function() {
    return this.get('centers', ACADEMY_DATA.centers);
  },
  getGallery: function() {
    return this.get('gallery', ACADEMY_DATA.gallery);
  },
  getInquiries: function() {
    return this.get('inquiries', ACADEMY_DATA.initialInquiries);
  },
  addInquiry: function(inq) {
    const list = this.getInquiries();
    inq.id = 'inq-' + Date.now().toString().slice(-4);
    inq.date = new Date().toISOString().replace('T', ' ').slice(0, 16);
    inq.status = 'New';
    list.unshift(inq);
    this.set('inquiries', list);
    return inq;
  }
};

if (typeof window !== 'undefined') {
  window.ACADEMY_DATA = ACADEMY_DATA;
  window.Q_STORE = Q_STORE;
}
if (typeof module !== 'undefined') {
  module.exports = { ACADEMY_DATA, Q_STORE };
}
