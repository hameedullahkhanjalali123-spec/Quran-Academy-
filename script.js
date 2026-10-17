/**
 * AL-QURAISHI QURAN ACADEMY - SCRIPT.JS
 * Multilingual Engine (Urdu & English), Dark/Light Mode,
 * Sidebar Navigation (سائیڈ پٹی), WhatsApp Direct Automation, 
 * Trial Form Handler, Modals & UI Interactions
 */

// Academy Official Contact Numbers (Verified from Official Logo)
const ACADEMY_CONTACTS = {
  primary: {
    raw: "03127529905",
    international: "923127529905",
    formatted: "0312-7529905"
  },
  secondary: {
    raw: "03218261906",
    international: "923218261906",
    formatted: "0321-8261906"
  }
};

// Complete Translation Dictionary (Urdu & English)
const translations = {
  ur: {
    // Header & Navigation
    academyName: "قریشی آن لائن قرآن اکیڈمی",
    academySubtitle: "آن لائن قرآن و عربی درسگاہ",
    sidebarMenuTitle: "اکیڈمی مینو",
    sidebarCoursesTitle: "ہمارے کورسز",
    navHome: "صفحہ اول",
    navAbout: "استاد کا تعارف",
    navCourses: "ہمارے کورسز",
    navFeatures: "خصوصیات",
    navProcess: "طریقہ کار",
    navTrial: "فری ٹرائل",
    navContact: "رابطہ کریں",
    btnFreeTrialHeader: "3 دن کا فری ٹرائل",
    themeToggleLight: "لائٹ موڈ",
    themeToggleDark: "ڈارک موڈ",
    langToggle: "English",
    sidebarToggleBtn: "مینو",

    // Hero Section
    heroBadge: "داخلہ جاری ہے • 100% آن لائن کلاسز",
    heroTitle: "قریشی آن لائن قرآن اکیڈمی",
    heroTagline: "بچوں اور بڑوں کے لیے آن لائن قرآن و عربی کی بااعتماد درسگاہ",
    heroTrialBanner: "تین دن کی فری ٹرائل کلاسز بالکل مفت! بغیر کسی فیس کے معیار پرکھیں۔",
    btnHeroTrial: "تین دن کا ٹرائل لیں",
    btnHeroWhatsApp: "واٹس ایپ پر رابطہ کریں",
    heroFeat1: "100% ون آن ون لائیو کلاسز",
    heroFeat2: "مستند سند یافتہ قاری صاحب",
    heroFeat3: "لچکدار اور آسان اوقات",
    heroCardName: "مولانا قاری حمید اللہ قریشی",
    heroCardRole: "بانی و ہیڈ انسٹرکٹر (مستند عالم و قاری)",
    heroCardExperience: "10+ سالہ تدریسی تجربہ",
    floatingStat1: "1-on-1 ذاتی توجہ",
    floatingStat2: "3 دن فری کلاسز",

    // Stats Bar
    stat1Num: "100%",
    stat1Label: "ذاتی ون آن ون توجہ",
    stat2Num: "6+",
    stat2Label: "جامع اسلامی کورسز",
    stat3Num: "3 دن",
    stat3Label: "مفت ٹرائل کلاسز",
    stat4Num: "24/7",
    stat4Label: "لچکدار انٹرنیشنل اوقات",

    // About Teacher Section
    aboutSubtitle: "استاد محترم کا تعارف",
    aboutTitle: "مولانا قاری حمید اللہ قریشی",
    aboutRole: "اکیڈمی کے بانی و نگرانِ تدریس",
    aboutBio: "اکیڈمی کے تمام تعلیمی امور اور تدریس کے فرائض سرانجام خود مولانا قاری حمید اللہ قریشی دیتے ہیں۔ انہوں نے باقاعدہ مستند اداروں سے قرآن پاک کا حفظِ مجید، علمِ تجوید و قرات، مکمل پانچ سالہ عربی کورس، اور درس نظامی (فہمِ دین کا مستند نصاب) کی تعلیم مکمل کی ہے۔ ذاتی توجہ اور درست مخارج کے ساتھ تعلیم کی ضمانت دی جاتی ہے۔",
    guaranteeText: "درست مخارج اور 100% ذاتی توجہ کی مکمل ضمانت",
    cred1Title: "حفظِ قرآن مجید",
    cred1Desc: "مستند دینی ادارے سے مکمل حفظ کلامِ الٰہی مع سند",
    cred2Title: "علمِ تجوید و قرات",
    cred2Desc: "درست مخارج، لحن اور حفص عن عاصم کے اصول",
    cred3Title: "مکمل 5 سالہ عربی کورس",
    cred3Desc: "قرآنی عربی، نحو و صرف اور زبان دانی میں مکمل مہارت",
    cred4Title: "درسِ نظامی (فہمِ دین)",
    cred4Desc: "شریعت و علومِ اسلامیہ کا جامع اور مستند نصاب",

    // Courses Section
    coursesSubtitle: "مستند اور منظم نصاب",
    coursesTitle: "ہمارے نمایاں کورسز",
    coursesDesc: "ہر عمر کے طلباء اور خواتین و حضرات کے لیے بنیادی قاعدہ سے لے کر ترجمہ و عربی تک کے خصوصی کورسز۔",
    btnEnrollCourse: "داخلہ / فری ٹرائل لیں",
    courseTrialNotice: "3 دن کا فری ٹرائل دستیاب",

    c1Title: "نورانی قاعدہ",
    c1Desc: "بچوں اور ابتدائی سیکھنے والوں کے لیے عربی حروف، حرکات اور مخارج کی درست بنیاد۔ بنیادی تلفظ کے ساتھ روانی سے پڑھنے کی مکمل رہنمائی۔",
    c1Tag1: "بچوں کے لیے بہترین",
    c1Tag2: "درست تلفظ",
    c1Tag3: "بنیادی تجوید",

    c2Title: "قرآن مجید ناظرہ",
    c2Desc: "قرآن پاک کو دیکھ کر درست تلفظ، روانی اور ترتیل کے ساتھ پڑھنے کی جامع اور منظم تدریس۔ تجویدی قواعد پر خصوصی مشق۔",
    c2Tag1: "مکمل روانی",
    c2Tag2: "حفظِ تسلسل",
    c2Tag3: "ترتیل کے ساتھ",

    c3Title: "تجوید القران",
    c3Desc: "قرآن مجید کے مخارج، صفات، غنہ، اخفاء، ادغام اور مدات کے تفصیلی قواعد کے ساتھ تلاوت کی خوبصورتی کا اعلیٰ کورس۔",
    c3Tag1: "درست مخارج",
    c3Tag2: "قواعدِ تجوید",
    c3Tag3: "خوبصورت لحن",

    c4Title: "مکمل عربی زبان کورس",
    c4Desc: "قرآنی اور جدید عربی گرائمر (نحو و صرف)، ذخیرہ الفاظ، جملہ سازی اور عربی بول چال کا مکمل 5 سالہ نصاب پر مبنی کورس۔",
    c4Tag1: "نحو و صرف",
    c4Tag2: "قرآنی عربی",
    c4Tag3: "عربی گفتگو",

    c5Title: "روزمرہ کی دعائیں اور مسنون اعمال",
    c5Desc: "صبح و شام کی مسنون دعائیں، نماز کی درست ادائیگی، مسنون طریقے، اخلاقیات اور اسلامی آدابِ زندگی کا خوبصورت تربیتی کورس۔",
    c5Tag1: "مسنون دعائیں",
    c5Tag2: "نماز کی اصلاح",
    c5Tag3: "اخلاق و آداب",

    c6Title: "قرآن پاک ترجمہ و تفسیر",
    c6Desc: "کلام الٰہی کا لفظ بہ لفظ ترجمہ، پس منظرِ نزول، اور آسان فہم تشریح تاکہ قرآن کے پیغامات کو دل اور زندگی میں اتارا جا سکے۔",
    c6Tag1: "لفظ بہ لفظ ترجمہ",
    c6Tag2: "فہمِ دین",
    c6Tag3: "آسان تفسیر",

    // Why Choose Us Section
    featuresSubtitle: "اکیڈمی کا امتیاز",
    featuresTitle: "ہمیں کیوں منتخب کریں؟",
    featuresDesc: "ہماری اکیڈمی جدید ترین آن لائن ذرائع سے روایتی اور مستند اسلامی تعلیمات آپ کے گھر تک پہنچاتی ہے۔",

    f1Title: "براہِ راست ذاتی توجہ",
    f1Desc: "اکیڈمی کے بانی اور ماہر قاری صاحب خود براہِ راست پڑھاتے ہیں، کسی ناتجربہ کار اسسٹنٹ کے حوالے نہیں کیا جاتا۔",

    f2Title: "3 دن کا فری ٹرائل",
    f2Desc: "پہلے تین دن بالکل مفت کلاسز لیں، تدریس کا طریقہ اور معیار پرکھیں، مکمل تسلی کے بعد باقاعدہ داخلہ لیں۔",

    f3Title: "بچوں اور بڑوں کے لیے آسان اوقات",
    f3Desc: "طلباء، ملازمت پیشہ افراد اور خواتین کے لیے ان کے شیڈول کے عین مطابق صبح، شام یا رات کی کلاسز۔",

    f4Title: "گھر بیٹھے باسانی سیکھنے کا ماحول",
    f4Desc: "محفوظ، پرسکون اور باحیا ماحول میں اپنے گھر سے انٹرنیٹ کے ذریعے ون آن ون آن لائن کلاسز حاصل کریں۔",

    f5Title: "اوورسیز طلباء کے لیے بین الاقوامی سہولت",
    f5Desc: "پاکستان، برطانیہ (UK)، امریکہ، کینیڈا، یورپ اور خلیجی ممالک کے تمام ٹائم زونز کے مطابق سہولت۔",

    f6Title: "جدید ملٹی میڈیا سکرین شیئرنگ",
    f6Desc: "ڈیجیٹل قرآن پاک، تصویری مخارج چارٹس، اور ہائی ڈیفینیشن آڈیو وڈیو کلاسز کے ساتھ دلکش اندازِ تدریس۔",

    // Admission Process Section
    processSubtitle: "آسان اور شفاف طریقہ",
    processTitle: "داخلہ اور پڑھائی کا طریقہ کار",
    processDesc: "صرف 3 آسان اور فوری مراحل میں اپنے یا اپنے بچوں کے لیے قرآنی تعلیم کا آغاز کریں۔",

    p1Title: "واٹس ایپ پر رابطہ کریں",
    p1Desc: "دیے گئے بٹن یا نمبر پر کلک کر کے واٹس ایپ پر میسج بھیجیں یا فری ٹرائل کا فارم پُر کریں۔",

    p2Title: "اپنے لیے مناسب وقت چنیں",
    p2Desc: "استاد محترم کے ساتھ باہمی گفتگو کے بعد اپنی سہولت کے مطابق کلاس کے دن اور وقت کا تعین کریں۔",

    p3Title: "3 دن کا فری ٹرائل اور داخلہ کنفرم کریں",
    p3Desc: "پہلے تین دن براہ راست لائیو کلاس پڑھیں، مکمل مطمئن ہونے کے بعد مستقل داخلہ کنفرم کریں۔",

    // Free Trial Form Section
    trialBoxTitle: "ابھی 3 دن کا فری ٹرائل حاصل کریں",
    trialBoxDesc: "بغیر کسی پیشگی فیس یا رجسٹریشن فیس کے ہمارے مستند استاد سے براہ راست آن لائن کلاس کا تجربہ کریں۔",
    trialPerk1: "کوئی ایڈوانس فیس یا کریڈٹ کارڈ کی ضرورت نہیں",
    trialPerk2: "انفرادی 1-on-1 لائیو سیشن",
    trialPerk3: "اپنے مطلوبہ کورس کا براہ راست انتخاب",
    trialPerk4: "تین دن کے بعد داخلے کا مکمل آزادانہ فیصلہ",
    trialQuickCallTitle: "براہِ راست فون / واٹس ایپ کال:",

    formLabelName: "طالب علم کا نام *",
    formPlaceholderName: "مثلاً: علی احمد / عائشہ خان",
    formLabelAge: "عمر / کیٹیگری *",
    formOptChild: "بچہ (Kid)",
    formOptAdult: "بالغ / بڑا (Adult)",
    formLabelCourse: "مطلوبہ کورس منتخب کریں *",
    formLabelTiming: "مناسب وقت *",
    formOptMorning: "صبح کے اوقات (Morning)",
    formOptAfternoon: "دوپہر کے اوقات (Afternoon)",
    formOptEvening: "شام کے اوقات (Evening)",
    formOptNight: "رات کے اوقات (Night)",
    formLabelPhone: "واٹس ایپ یا موبائل نمبر *",
    formPlaceholderPhone: "مثلاً: 03127529905",
    formLabelCity: "شہر / ملک *",
    formPlaceholderCity: "مثلاً: لاہور، پاکستان یا لندن، UK",
    btnFormSubmit: "فری ٹرائل کا اندراج کریں (WhatsApp)",
    formNote: "فارم سبمٹ کرنے پر فوری واٹس ایپ میسج تیار ہو جائے گا اور استاد محترم سے براہِ راست رابطہ ہو جائے گا۔",

    // FAQ Section
    faqSubtitle: "عام پوچھے جانے والے سوالات",
    faqTitle: "کیا آپ کے ذہن میں یہ سوالات ہیں؟",
    faqDesc: "آن لائن کلاسز اور اکیڈمی کے حوالے سے اکثر پوچھے جانے والے سوالات کے تفصیلی جوابات۔",

    faq1Q: "آن لائن کلاسز کس ایپلیکیشن پر ہوتی ہیں؟",
    faq1A: "کلاسز زوم (Zoom)، گوگل میٹ (Google Meet)، اسکائپ (Skype) یا واٹس ایپ ویڈیو کال پر منعقد کی جاتی ہیں، جہاں سکرین شیئر کر کے طالب علم کو ڈیجیٹل مصحف اور قاعدہ دکھایا جاتا ہے۔",

    faq2Q: "کیا یہ کلاسز گروپ میں ہوتی ہیں یا انفرادی؟",
    faq2A: "ہماری تمام تر کلاسز 100% انفرادی (One-on-One) ہوتی ہیں۔ استاد محترم پورا وقت صرف ایک ہی طالب علم کو دیتے ہیں تاکہ درست مخارج اور مکمل توجہ برقرار رہے۔",

    faq3Q: "کیا بیرونِ ملک (Overseas) کے طلباء داخلہ لے سکتے ہیں؟",
    faq3A: "جی بالکل! ہمارے پاس پاکستان کے علاوہ برطانیہ، امریکہ، کینیڈا، یورپ، آسٹریلیا اور خلیجی ممالک (سعودی عرب، یو اے ای) سے بھی طلباء زیرِ تعلیم ہیں، اور ہم ہر ملک کے ٹائم زون کے مطابق وقت فراہم کرتے ہیں۔",

    faq4Q: "3 دن کے فری ٹرائل کے بعد داخلے کا کیا طریقہ ہے؟",
    faq4A: "ٹرائل کی 3 کلاسز کے دوران آپ استاد محترم کا پڑھانے کا انداز اور توجہ ملاحظہ کرتے ہیں۔ اگر آپ 100% مطمئن ہوں تو انتہائی مناسب ماہانہ ہدیہ طے کر کے باقاعدہ کلاسز جاری رکھی جاتی ہیں۔",

    faq5Q: "اگر کسی دن کلاس رہ جائے تو کیا متبادل وقت مل سکتا ہے؟",
    faq5A: "جی ہاں! پیشگی اطلاع دینے پر استاد محترم باہمی سہولت سے متبادل وقت یا میک اپ کلاس شیڈول کر دیتے ہیں۔",

    // Contact Section
    contactSubtitle: "ہم سے رابطہ کریں",
    contactTitle: "ہمہ وقت آپ کی خدمت میں حاضر",
    contactDesc: "فری ٹرائل، کورسز کی تفصیلات یا کسی بھی سوال کے لیے براہ راست کال یا واٹس ایپ میسج کریں۔",
    contactCardLabel1: "ہیڈ آفس و واٹس ایپ 1",
    contactCardLabel2: "رابطہ نمبر و واٹس ایپ 2",
    btnChatWa: "واٹس ایپ چیٹ",
    btnCopyNum: "نمبر کاپی کریں",
    numCopied: "نمبر کاپی ہو گیا!",

    // WhatsApp Modal
    waModalTitle: "واٹس ایپ پر رابطہ کا انتخاب کریں",
    waModalDesc: "براہ کرم جس نمبر پر بات کرنا چاہتے ہیں اس پر کلک کریں:",
    waOption1: "مولانا قاری حمید اللہ قریشی (لائن 1)",
    waOption2: "اکیڈمی داخلہ ہیلپ لائن (لائن 2)",

    // Footer
    footerAboutText: "قریشی آن لائن قرآن اکیڈمی بچوں، بچیوں اور بڑوں کے لیے تجوید، حفظ، عربی اور ناظرہ قرآن کی مستند و بااعتماد آن لائن درسگاہ ہے۔",
    footerQuickLinks: "اہم لنکس",
    footerCoursesHead: "کورسز کی فہرست",
    footerContactHead: "رابطہ کی تفصیلات",
    footerCopy: "© 2026 قریشی آن لائن قرآن اکیڈمی۔ جملہ حقوق محفوظ ہیں۔",
    footerDeveloperNote: "بااعتماد اسلامی تعلیم گھر بیٹھے",

    // Floating CTA
    floatingWaText: "آن لائن رابطہ کریں"
  },

  en: {
    // Header & Navigation
    academyName: "Qureshi Online Quran Academy",
    academySubtitle: "Online Quran & Arabic Learning",
    sidebarMenuTitle: "Academy Menu",
    sidebarCoursesTitle: "Featured Courses",
    navHome: "Home",
    navAbout: "About Founder",
    navCourses: "Courses",
    navFeatures: "Why Us",
    navProcess: "How It Works",
    navTrial: "Free Trial",
    navContact: "Contact",
    btnFreeTrialHeader: "3-Day Free Trial",
    themeToggleLight: "Light Mode",
    themeToggleDark: "Dark Mode",
    langToggle: "اردو",
    sidebarToggleBtn: "Menu",

    // Hero Section
    heroBadge: "Admissions Open • 100% Online Classes",
    heroTitle: "Qureshi Online Quran Academy",
    heroTagline: "Trusted Online Quran & Arabic Learning for Kids and Adults",
    heroTrialBanner: "3 Days Free Trial Classes Available! Experience our quality with zero fees.",
    btnHeroTrial: "Book 3-Day Free Trial",
    btnHeroWhatsApp: "WhatsApp Us",
    heroFeat1: "100% 1-on-1 Live Sessions",
    heroFeat2: "Certified & Authentic Qari",
    heroFeat3: "Flexible Global Timings",
    heroCardName: "Maulana Qari Hameedullah Qureshi",
    heroCardRole: "Founder & Lead Quran Instructor",
    heroCardExperience: "10+ Years Teaching Experience",
    floatingStat1: "1-on-1 Attention",
    floatingStat2: "3 Days Free Trial",

    // Stats Bar
    stat1Num: "100%",
    stat1Label: "Personalized 1-on-1 Focus",
    stat2Num: "6+",
    stat2Label: "Comprehensive Courses",
    stat3Num: "3 Days",
    stat3Label: "Free Trial Sessions",
    stat4Num: "24/7",
    stat4Label: "Flexible Global Slots",

    // About Teacher Section
    aboutSubtitle: "About The Founder & Teacher",
    aboutTitle: "Maulana Qari Hameedullah Qureshi",
    aboutRole: "Academy Founder & Head of Instruction",
    aboutBio: "All educational and teaching responsibilities of the academy are directly supervised and conducted by Maulana Qari Hameedullah Qureshi himself. He has graduated from prestigious authentic Islamic institutions, completing Hifz-ul-Quran (memorization), the science of Tajweed & Qira'at, an extensive 5-year Arabic language program, and the classical Dars-e-Nizami (comprehensive Islamic scholarship curriculum). Personalized one-on-one attention and accurate pronunciation (Makharij) are guaranteed.",
    guaranteeText: "Guaranteed Correct Makharij & 100% Personal Attention",
    cred1Title: "Hifz-ul-Quran",
    cred1Desc: "Certified Hafiz from recognized Islamic institutions",
    cred2Title: "Tajweed & Qira'at",
    cred2Desc: "Mastery of phonetics, articulation points & Hafs recitation",
    cred3Title: "Complete 5-Year Arabic Course",
    cred3Desc: "In-depth Quranic Arabic, Nahw (syntax) & Sarf (morphology)",
    cred4Title: "Dars-e-Nizami (Islamic Scholarship)",
    cred4Desc: "Rigorous formal qualification in authentic Islamic theology",

    // Courses Section
    coursesSubtitle: "Authentic & Structured Curriculum",
    coursesTitle: "Our Featured Courses",
    coursesDesc: "Tailored programs from foundational Qaida to advanced Quranic Tafseer and Arabic language for all ages.",
    btnEnrollCourse: "Enroll / Book Free Trial",
    courseTrialNotice: "3 Days Free Trial Available",

    c1Title: "Noorani Qaida",
    c1Desc: "Essential foundation for kids and beginners to master Arabic alphabets, vowels, and phonetics with accurate Makharij and confidence.",
    c1Tag1: "Kid Friendly",
    c1Tag2: "Accurate Phonetics",
    c1Tag3: "Basic Tajweed",

    c2Title: "Quran Nazra",
    c2Desc: "Comprehensive and structured recitation of the Holy Quran with fluency, rhythm, and accurate articulation from the Mushaf.",
    c2Tag1: "Fluent Recitation",
    c2Tag2: "Continuous Practice",
    c2Tag3: "Tarteel Guidance",

    c3Title: "Tajweed-ul-Quran",
    c3Desc: "Advanced rules of Tajweed including articulation points, characteristics of letters, Ghunna, Ikhfa, Idgham, and Madd for melodious recitation.",
    c3Tag1: "Correct Makharij",
    c3Tag2: "Tajweed Rules",
    c3Tag3: "Melodious Tone",

    c4Title: "Complete Arabic Language Course",
    c4Desc: "Master Quranic and Classical Arabic grammar (Nahw & Sarf), vocabulary, sentence structure, and spoken comprehension based on a 5-year curriculum.",
    c4Tag1: "Nahw & Sarf",
    c4Tag2: "Quranic Arabic",
    c4Tag3: "Spoken Arabic",

    c5Title: "Daily Duas & Islamic Manners",
    c5Desc: "Daily prophetic supplications (Masnoon Duas), proper Salah method, Islamic etiquette, and character building with meaningful translation.",
    c5Tag1: "Prophetic Duas",
    c5Tag2: "Salah Perfection",
    c5Tag3: "Islamic Etiquettes",

    c6Title: "Quran Translation & Tafseer",
    c6Desc: "Word-by-word Quranic translation, context of revelations (Asbab al-Nuzul), and lucid explanation to understand Allah's message deeply.",
    c6Tag1: "Word-by-Word",
    c6Tag2: "Deep Understanding",
    c6Tag3: "Lucid Tafseer",

    // Why Choose Us Section
    featuresSubtitle: "Our Key Distinction",
    featuresTitle: "Why Choose Our Academy?",
    featuresDesc: "Combining traditional Islamic authenticity with modern interactive digital learning in your home.",

    f1Title: "Direct Personal Attention",
    f1Desc: "The academy founder and expert Qari teaches students directly with full dedication, never outsourcing to junior tutors.",

    f2Title: "3-Day Free Trial",
    f2Desc: "Take 3 complimentary trial sessions to experience our teaching quality firsthand before any commitment.",

    f3Title: "Flexible Timings for Kids & Adults",
    f3Desc: "Tailored schedules for school children, busy working professionals, and homemakers in morning, evening, or night slots.",

    f4Title: "Comfortable Home Learning",
    f4Desc: "Safe, respectful, and focused 1-on-1 virtual sessions right from the comfort and privacy of your home.",

    f5Title: "Worldwide Availability for Overseas Students",
    f5Desc: "Convenient time slots arranged for Pakistani and international families across UK, USA, Canada, Europe, & the Gulf.",

    f6Title: "Modern Screen Sharing & Multi-Media",
    f6Desc: "Interactive digital Mushaf, visual phonetics charts, and crystal-clear audio-video sessions for engaging learning.",

    // Admission Process Section
    processSubtitle: "Simple & Transparent Steps",
    processTitle: "Admission & Learning Process",
    processDesc: "Start your or your children's Quranic journey in just 3 quick and easy steps.",

    p1Title: "Contact Us on WhatsApp",
    p1Desc: "Reach out via our WhatsApp buttons or fill the quick trial form with your details.",

    p2Title: "Choose Your Preferred Timing",
    p2Desc: "Consult directly with the Qari Sahib to lock in a class schedule that matches your daily routine.",

    p3Title: "3-Day Free Trial & Confirmation",
    p3Desc: "Experience 3 days of live 1-on-1 classes, evaluate the teaching, and confirm your admission with complete peace of mind.",

    // Free Trial Form Section
    trialBoxTitle: "Book Your 3-Day Free Trial Now",
    trialBoxDesc: "Experience live online Quran learning with our authentic teacher without any upfront fee or registration charges.",
    trialPerk1: "No advance fee or credit card required",
    trialPerk2: "Personalized 1-on-1 live session",
    trialPerk3: "Direct choice of your desired course",
    trialPerk4: "100% freedom to decide after trial",
    trialQuickCallTitle: "Direct Phone / WhatsApp Call:",

    formLabelName: "Student Full Name *",
    formPlaceholderName: "e.g. Ali Ahmed / Aisha Khan",
    formLabelAge: "Age / Category *",
    formOptChild: "Kid / Child",
    formOptAdult: "Adult",
    formLabelCourse: "Select Desired Course *",
    formLabelTiming: "Preferred Timing *",
    formOptMorning: "Morning Hours",
    formOptAfternoon: "Afternoon Hours",
    formOptEvening: "Evening Hours",
    formOptNight: "Night Hours",
    formLabelPhone: "WhatsApp / Mobile Number *",
    formPlaceholderPhone: "e.g. 0312 7529905",
    formLabelCity: "City & Country *",
    formPlaceholderCity: "e.g. Lahore, Pakistan or London, UK",
    btnFormSubmit: "Submit Free Trial Request (WhatsApp)",
    formNote: "Submitting opens a pre-composed WhatsApp message directly with our teacher for instant confirmation.",

    // FAQ Section
    faqSubtitle: "Frequently Asked Questions",
    faqTitle: "Common Questions Answered",
    faqDesc: "Everything you need to know about our online classes, trial procedure, and methodology.",

    faq1Q: "Which software/application is used for classes?",
    faq1A: "Classes are held on Zoom, Google Meet, Skype, or WhatsApp video call. We use high-quality screen sharing to display the digital Quran and Tajweed rules directly to the student.",

    faq2Q: "Are classes conducted in groups or individually?",
    faq2A: "All classes are strictly 100% individual (One-on-One). The instructor dedicates the full class duration exclusively to one student for maximum focus.",

    faq3Q: "Can overseas students living abroad join?",
    faq3A: "Yes, absolutely! We currently teach students from the UK, USA, Canada, Europe, Australia, and the Gulf region, adjusting our schedules to your specific timezone.",

    faq4Q: "What happens after the 3-day free trial?",
    faq4A: "During the 3 trial sessions, you evaluate our teacher's attentiveness and quality. If you are 100% satisfied, an affordable monthly fee is agreed upon to continue regular classes.",

    faq5Q: "What if a student misses a scheduled class?",
    faq5A: "With prior notice, our instructor readily accommodates a reschedule or makeup session at a mutually convenient time.",

    // Contact Section
    contactSubtitle: "Get In Touch",
    contactTitle: "We Are Always Here To Help",
    contactDesc: "Feel free to call or WhatsApp us directly for trial bookings, course inquiries, or counseling.",
    contactCardLabel1: "Head Office & WhatsApp 1",
    contactCardLabel2: "Contact Line & WhatsApp 2",
    btnChatWa: "Chat on WhatsApp",
    btnCopyNum: "Copy Number",
    numCopied: "Number Copied!",

    // WhatsApp Modal
    waModalTitle: "Select WhatsApp Number",
    waModalDesc: "Choose which line you would like to connect with directly:",
    waOption1: "Maulana Qari Hameedullah Qureshi (Line 1)",
    waOption2: "Academy Admissions Desk (Line 2)",

    // Footer
    footerAboutText: "Qureshi Online Quran Academy is a trusted online institution offering Tajweed, Nazra, Hifz, and Arabic language instruction for children and adults worldwide.",
    footerQuickLinks: "Quick Links",
    footerCoursesHead: "Offered Courses",
    footerContactHead: "Contact Info",
    footerCopy: "© 2026 Qureshi Online Quran Academy. All Rights Reserved.",
    footerDeveloperNote: "Trusted Islamic Education from Home",

    // Floating CTA
    floatingWaText: "Chat on WhatsApp"
  }
};

// Current Application State
let currentLang = localStorage.getItem("alquraishi_lang") || "ur";
let currentTheme = localStorage.getItem("alquraishi_theme") || "light";

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initStickyHeader();
  initSidebar();
  initTrialForm();
  initFaqAccordion();
  initModals();
  initBackToTop();
  bindCourseEnrollButtons();
});

/* ==========================================================================
   THEME SWITCHER (Dark / Light)
   ========================================================================== */
function initTheme() {
  if (!localStorage.getItem("alquraishi_theme")) {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      currentTheme = "dark";
    } else {
      currentTheme = "light";
    }
  }

  applyTheme(currentTheme);

  const themeToggleBtn = document.getElementById("themeToggleBtn");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      currentTheme = currentTheme === "light" ? "dark" : "light";
      applyTheme(currentTheme);
      localStorage.setItem("alquraishi_theme", currentTheme);
      showToast(currentLang === "ur" ? "تھیم تبدیل ہو گئی" : "Theme toggled");
    });
  }

  const sidebarThemeBtn = document.getElementById("sidebarThemeBtn");
  if (sidebarThemeBtn) {
    sidebarThemeBtn.addEventListener("click", () => {
      currentTheme = currentTheme === "light" ? "dark" : "light";
      applyTheme(currentTheme);
      localStorage.setItem("alquraishi_theme", currentTheme);
      showToast(currentLang === "ur" ? "تھیم تبدیل ہو گئی" : "Theme toggled");
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const themeIcon = document.getElementById("themeIcon");
  const themeText = document.getElementById("themeText");
  const sidebarThemeIcon = document.getElementById("sidebarThemeIcon");
  const sidebarThemeText = document.getElementById("sidebarThemeText");

  const iconClass = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  const textVal = theme === "dark" 
    ? (translations[currentLang].themeToggleLight || "Light Mode") 
    : (translations[currentLang].themeToggleDark || "Dark Mode");

  if (themeIcon) themeIcon.className = iconClass;
  if (themeText) themeText.textContent = textVal;
  if (sidebarThemeIcon) sidebarThemeIcon.className = iconClass;
  if (sidebarThemeText) sidebarThemeText.textContent = textVal;
}

/* ==========================================================================
   LANGUAGE SWITCHER (Urdu / English)
   ========================================================================== */
function initLanguage() {
  applyLanguage(currentLang);

  const langToggleBtn = document.getElementById("langToggleBtn");
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      currentLang = currentLang === "ur" ? "en" : "ur";
      localStorage.setItem("alquraishi_lang", currentLang);
      applyLanguage(currentLang);
      showToast(currentLang === "ur" ? "اردو زبان منتخب کی گئی" : "English language selected");
    });
  }

  const sidebarLangBtn = document.getElementById("sidebarLangBtn");
  if (sidebarLangBtn) {
    sidebarLangBtn.addEventListener("click", () => {
      currentLang = currentLang === "ur" ? "en" : "ur";
      localStorage.setItem("alquraishi_lang", currentLang);
      applyLanguage(currentLang);
      showToast(currentLang === "ur" ? "اردو زبان منتخب کی گئی" : "English language selected");
    });
  }
}

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  // Set HTML direction and lang
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ur" ? "rtl" : "ltr");

  // Update elements with data-i18n
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update placeholders
  const placeholderElements = document.querySelectorAll("[data-i18n-ph]");
  placeholderElements.forEach(el => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key]) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  // Update Lang toggle button text
  const langText = document.getElementById("langText");
  if (langText) {
    langText.textContent = lang === "ur" ? "English" : "اردو";
  }
  const sidebarLangText = document.getElementById("sidebarLangText");
  if (sidebarLangText) {
    sidebarLangText.textContent = lang === "ur" ? "English" : "اردو";
  }

  // Update theme toggle text
  applyTheme(currentTheme);
}

/* ==========================================================================
   STICKY HEADER & ACTIVE SCROLL SPY
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector(".site-header");
  const navLinks = document.querySelectorAll(".sidebar-link, .nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Scroll spy
    let currentSectionId = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (currentSectionId && link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });
}

/* ==========================================================================
   SIDEBAR NAVIGATION (سائیڈ پٹی)
   ========================================================================== */
function initSidebar() {
  const sidebarToggleBtn = document.getElementById("sidebarToggleBtn");
  const sidebarCloseBtn = document.getElementById("sidebarCloseBtn");
  const appSidebar = document.getElementById("appSidebar");
  const sidebarBackdrop = document.getElementById("sidebarBackdrop");
  const sidebarLinks = document.querySelectorAll(".sidebar-link, .sidebar-course-item");

  function openSidebar() {
    if (appSidebar) appSidebar.classList.add("open");
    if (sidebarBackdrop) sidebarBackdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeSidebar() {
    if (appSidebar) appSidebar.classList.remove("open");
    if (sidebarBackdrop) sidebarBackdrop.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (sidebarToggleBtn) {
    sidebarToggleBtn.addEventListener("click", openSidebar);
  }

  if (sidebarCloseBtn) {
    sidebarCloseBtn.addEventListener("click", closeSidebar);
  }

  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener("click", closeSidebar);
  }

  // Close sidebar on link click
  sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
      closeSidebar();
    });
  });

  // ESC key closes sidebar
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeSidebar();
    }
  });
}

/* ==========================================================================
   TRIAL ADMISSION FORM -> DIRECT WHATSAPP AUTOMATION
   ========================================================================== */
function initTrialForm() {
  const trialForm = document.getElementById("freeTrialForm");
  if (!trialForm) return;

  trialForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("studentName")?.value.trim() || "";
    const ageCategory = document.getElementById("studentAge")?.value || "";
    const course = document.getElementById("selectedCourse")?.value || "";
    const timing = document.getElementById("preferredTiming")?.value || "";
    const phone = document.getElementById("studentPhone")?.value.trim() || "";
    const city = document.getElementById("studentCity")?.value.trim() || "";

    if (!name || !phone) {
      showToast(currentLang === "ur" ? "براہ کرم تمام ضروری خانے پُر کریں!" : "Please fill in the required fields!", "error");
      return;
    }

    // Construct formatted WhatsApp message
    let message = "";
    if (currentLang === "ur") {
      message = `*السلام علیکم ورحمۃ اللہ وبرکاتہ!*
*قریشی آن لائن قرآن اکیڈمی - 3 دن کے فری ٹرائل کی درخواست:*
-------------------------------------
👤 *طالب علم کا نام:* ${name}
👶/🧔 *کیٹیگری:* ${ageCategory}
📖 *مطلوبہ کورس:* ${course}
⏰ *مناسب وقت:* ${timing}
📱 *موبائل / واٹس ایپ:* ${phone}
📍 *شہر / ملک:* ${city}
-------------------------------------
*استاد محترم:* مولانا قاری حمید اللہ قریشی
*نوٹ:* براہ کرم فری ٹرائل کلاس کا وقت اور تصدیق فرمائیں۔ شکریہ!`;
    } else {
      message = `*Assalamu Alaikum wa Rahmatullah!*
*Qureshi Online Quran Academy - 3-Day Free Trial Request:*
-------------------------------------
👤 *Student Name:* ${name}
👶/🧔 *Category:* ${ageCategory}
📖 *Selected Course:* ${course}
⏰ *Preferred Timing:* ${timing}
📱 *Contact / WhatsApp:* ${phone}
📍 *City / Country:* ${city}
-------------------------------------
*Instructor:* Maulana Qari Hameedullah Qureshi
*Note:* Kindly share trial session timing and confirmation. Thank you!`;
    }

    // Send to primary WhatsApp number: 0312-7529905
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${ACADEMY_CONTACTS.primary.international}?text=${encodedMessage}`;

    showToast(currentLang === "ur" ? "واٹس ایپ کھولا جا رہا ہے..." : "Opening WhatsApp...", "success");

    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 600);
  });
}

/* ==========================================================================
   COURSE CARDS DIRECT ENROLL BUTTONS
   ========================================================================== */
function bindCourseEnrollButtons() {
  const courseButtons = document.querySelectorAll(".btn-course-enroll, .sidebar-course-item");
  const courseSelect = document.getElementById("selectedCourse");

  courseButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const courseName = btn.getAttribute("data-course");
      if (courseSelect && courseName) {
        courseSelect.value = courseName;
      }
      
      // Smooth scroll to trial form
      const trialSection = document.getElementById("trial");
      if (trialSection) {
        trialSection.scrollIntoView({ behavior: "smooth" });
        const nameInput = document.getElementById("studentName");
        if (nameInput) {
          setTimeout(() => nameInput.focus(), 500);
        }
      }
    });
  });
}

/* ==========================================================================
   FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const trigger = item.querySelector(".faq-trigger");
    if (trigger) {
      trigger.addEventListener("click", () => {
        const isOpen = item.classList.contains("active");

        // Close all other items
        faqItems.forEach(other => other.classList.remove("active"));

        if (!isOpen) {
          item.classList.add("active");
        }
      });
    }
  });
}

/* ==========================================================================
   WHATSAPP SELECTOR MODAL & DIRECT ACTIONS
   ========================================================================== */
function initModals() {
  const waModal = document.getElementById("waModal");
  const openModalBtns = document.querySelectorAll(".open-wa-modal");
  const closeModalBtns = document.querySelectorAll(".close-modal");

  openModalBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (waModal) waModal.classList.add("open");
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (waModal) waModal.classList.remove("open");
    });
  });

  if (waModal) {
    waModal.addEventListener("click", (e) => {
      if (e.target === waModal) {
        waModal.classList.remove("open");
      }
    });
  }
}

// Direct WhatsApp helper
function openWhatsApp(numberType, customText = "") {
  // Line 1: 0312-7529905, Line 2: 0321-8261906
  const num = numberType === 'secondary' 
    ? ACADEMY_CONTACTS.secondary.international 
    : ACADEMY_CONTACTS.primary.international;

  let msg = customText;
  if (!msg) {
    msg = currentLang === "ur"
      ? "السلام علیکم ورحمۃ اللہ وبرکاتہ! مجھے قریشی آن لائن قرآن اکیڈمی کے 3 دن کے فری ٹرائل اور مولانا قاری حمید اللہ قریشی صاحب کی کلاسز کے بارے میں معلومات حاصل کرنی ہیں۔"
      : "Assalamu Alaikum! I would like to inquire about Qureshi Online Quran Academy courses and Maulana Qari Hameedullah Qureshi's classes.";
  }

  const url = `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

// Copy phone number to clipboard with visual toast
function copyPhoneNumber(numberStr) {
  navigator.clipboard.writeText(numberStr).then(() => {
    const msg = currentLang === "ur" ? `${numberStr} کاپی ہو گیا!` : `${numberStr} copied to clipboard!`;
    showToast(msg, "success");
  }).catch(() => {
    showToast("کاپی کرنے میں خرابی", "error");
  });
}

/* ==========================================================================
   BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* ==========================================================================
   TOAST NOTIFICATION ENGINE
   ========================================================================== */
let toastTimeout;
function showToast(message, type = "normal") {
  let toast = document.getElementById("toastNotice");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastNotice";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }

  clearTimeout(toastTimeout);

  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
  toast.className = `toast-notice show ${type === "success" ? "success" : ""}`;

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}
