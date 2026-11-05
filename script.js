// State Management
let currentLang = 'ur'; // Default pure Urdu
let currentTheme = 'light';
let currentCategory = 'all';
let currentSlide = 0;
let slideInterval = null;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Theme setup
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    setTheme('dark');
  } else {
    setTheme('light');
  }

  // Language setup
  const urlParams = new URLSearchParams(window.location.search);
  const paramLang = urlParams.get('lang');
  const savedLang = (paramLang === 'en' || paramLang === 'ur') ? paramLang : (localStorage.getItem('lang') || 'ur');
  setLanguage(savedLang);

  // Render components
  renderCourses();
  renderMaqamaat();
  renderFeatures();
  renderCountries();
  renderTestimonials();
  renderFaqs();

  // Initialize hero slides & background slideshow
  initHeroCarousel();
  initHeroBackgrounds();

  // Preview only courses if specified in URL query
  if (urlParams.get('only_courses') === 'true') {
    document.querySelectorAll('section').forEach(s => {
      if (s.id !== 'courses') s.remove();
    });
  } else if (urlParams.get('scroll')) {
    setTimeout(() => {
      const el = document.getElementById(urlParams.get('scroll'));
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    }, 150);
  }
});

// =================================================================
// HERO FULLSCREEN BACKGROUND SLIDESHOW (LIKE QURAN-EDU.COM)
// =================================================================
let heroBgIndex = 0;
const heroBgs = [
  'assets/hero-quran-bg.jpg',
  'assets/hero-madinah-bg.jpg',
  'assets/course-kaaba.jpg'
];

function initHeroBackgrounds() {
  setInterval(() => {
    heroBgIndex = (heroBgIndex + 1) % heroBgs.length;
    const l1 = document.getElementById('heroBgLayer1');
    const l2 = document.getElementById('heroBgLayer2');
    if (l1 && l2) {
      if (l1.classList.contains('active')) {
        l2.style.backgroundImage = `url('${heroBgs[heroBgIndex]}')`;
        l2.classList.add('active');
        l1.classList.remove('active');
      } else {
        l1.style.backgroundImage = `url('${heroBgs[heroBgIndex]}')`;
        l1.classList.add('active');
        l2.classList.remove('active');
      }
    }
  }, 6500);
}

// =================================================================
// AUTHENTIC QURAN RECITATION AUDIO PLAYER (ZERO ERROR 153)
// =================================================================
let quranAudio = null;
let isAudioPlaying = false;

function toggleQuranAudio() {
  const icon = document.getElementById('audioPlayIcon');
  const wave = document.getElementById('audioWave');

  if (!quranAudio) {
    quranAudio = new Audio('assets/recitation.mp3');
    quranAudio.addEventListener('ended', () => {
      isAudioPlaying = false;
      if (icon) icon.className = 'fa-solid fa-play text-xl ml-1';
      if (wave) wave.classList.remove('playing');
    });
    quranAudio.addEventListener('timeupdate', () => {
      const bar = document.getElementById('audioProgressBar');
      const timeDisplay = document.getElementById('audioCurrentTime');
      if (bar && quranAudio.duration) {
        bar.style.width = ((quranAudio.currentTime / quranAudio.duration) * 100) + '%';
      }
      if (timeDisplay) {
        const mins = Math.floor(quranAudio.currentTime / 60);
        const secs = Math.floor(quranAudio.currentTime % 60);
        timeDisplay.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
      }
    });
  }

  if (isAudioPlaying) {
    quranAudio.pause();
    isAudioPlaying = false;
    if (icon) icon.className = 'fa-solid fa-play text-xl ml-1';
    if (wave) wave.classList.remove('playing');
  } else {
    quranAudio.play().then(() => {
      isAudioPlaying = true;
      if (icon) icon.className = 'fa-solid fa-pause text-xl';
      if (wave) wave.classList.add('playing');
    }).catch(err => {
      console.log('Audio playback:', err);
    });
  }
}

// =================================================================
// THEME SWITCHER (DARK / LIGHT MODE)
// =================================================================
function toggleTheme() {
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
}

function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('theme', theme);
  const root = document.documentElement;
  const icon = document.getElementById('themeIcon');
  const label = document.getElementById('themeLabel');

  if (theme === 'dark') {
    root.classList.add('dark');
    if (icon) icon.className = 'fa-solid fa-sun text-amber-300 text-sm';
    if (label) label.textContent = currentLang === 'ur' ? 'لائٹ موڈ' : 'Light';
  } else {
    root.classList.remove('dark');
    if (icon) icon.className = 'fa-solid fa-moon text-slate-700 text-sm';
    if (label) label.textContent = currentLang === 'ur' ? 'ڈارک موڈ' : 'Dark';
  }
}

// =================================================================
// 100% PURE LANGUAGE TOGGLE (NO MIXING OF URDU & ENGLISH)
// =================================================================
function toggleLanguage() {
  const newLang = currentLang === 'ur' ? 'en' : 'ur';
  setLanguage(newLang);
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  localStorage.setItem('language', lang); // sync for both keys

  const html = document.documentElement;
  const body = document.body;
  const label = document.getElementById('langLabel');
  const themeLabel = document.getElementById('themeLabel');

  if (lang === 'ur') {
    html.setAttribute('lang', 'ur');
    html.setAttribute('dir', 'rtl');
    body.classList.add('lang-ur');
    if (label) label.textContent = 'English';
    if (themeLabel) themeLabel.textContent = currentTheme === 'dark' ? 'لائٹ موڈ' : 'ڈارک موڈ';
  } else {
    html.setAttribute('lang', 'en');
    html.setAttribute('dir', 'ltr');
    body.classList.remove('lang-ur');
    if (label) label.textContent = 'اردو';
    if (themeLabel) themeLabel.textContent = currentTheme === 'dark' ? 'Light' : 'Dark';
  }

  // Re-render all dynamic data
  renderCourses();
  renderMaqamaat();
  renderFeatures();
  renderCountries();
  renderTestimonials();
  renderFaqs();

  // Update in-page modal form placeholders and options
  updateModalFormLanguage(lang);
}

function updateModalFormLanguage(lang) {
  const isUrdu = lang === 'ur';
  const sName = document.getElementById('studentName');
  const fName = document.getElementById('fatherName');
  const sAge = document.getElementById('studentAge');
  const sCountry = document.getElementById('studentCountry');
  const sCity = document.getElementById('studentCity');
  const sPhone = document.getElementById('studentPhone');
  const sNotes = document.getElementById('additionalNotes');

  if (sName) sName.placeholder = isUrdu ? 'مثلاً: محمد احمد / فاطمہ' : 'e.g. Ahmad / Ayesha';
  if (fName) fName.placeholder = isUrdu ? 'مثلاً: محمد طارق' : 'e.g. Muhammad Tariq';
  if (sAge) sAge.placeholder = isUrdu ? 'مثلاً: 12 سال / Years' : 'e.g. 12 Years';
  if (sCountry) sCountry.placeholder = isUrdu ? 'مثلاً: پاکستان، یوکے، کینیڈا، امریکہ' : 'e.g. Pakistan, UK, USA, UAE...';
  if (sCity) sCity.placeholder = isUrdu ? 'مثلاً: کراچی، لاہور، لندن' : 'e.g. London, Karachi, New York...';
  if (sPhone) sPhone.placeholder = '+92 311 8284694';
  if (sNotes) sNotes.placeholder = isUrdu ? 'کوئی خاص وقت یا پیغام...' : 'Any special time slot or questions...';

  // Update gender options
  const gender = document.getElementById('studentGender');
  if (gender && gender.options.length >= 2) {
    gender.options[0].text = isUrdu ? 'میل (Male / لڑکا / مرد)' : 'Male (Boy / Brother)';
    gender.options[1].text = isUrdu ? 'فی میل (Female / لڑکی / خاتون)' : 'Female (Girl / Sister)';
  }

  // Update teacher options
  const teacher = document.getElementById('teacherPref');
  if (teacher && teacher.options.length >= 3) {
    teacher.options[0].text = isUrdu ? 'معلم (Male Scholar / قاری صاحب)' : 'Male Scholar (Certified Qari)';
    teacher.options[1].text = isUrdu ? 'معلمہ (Female Tutor / باحجاب عالمہ/حافظہ)' : 'Female Tutor (Certified Alima / Hafiza)';
    teacher.options[2].text = isUrdu ? 'کوئی بھی مستند استاد (Any Qualified Tutor)' : 'Any Qualified Scholar (Flexible)';
  }

  // Update timing options
  const timing = document.getElementById('preferredTiming');
  if (timing && timing.options.length >= 5) {
    timing.options[0].text = isUrdu ? 'صبح (Morning 8 AM - 12 PM)' : 'Morning (8:00 AM - 12:00 PM)';
    timing.options[1].text = isUrdu ? 'دوپہر (Afternoon 12 PM - 4 PM)' : 'Afternoon (12:00 PM - 4:00 PM)';
    timing.options[2].text = isUrdu ? 'شام (Evening 4 PM - 8 PM)' : 'Evening (4:00 PM - 8:00 PM)';
    timing.options[3].text = isUrdu ? 'رات (Night 8 PM - 12 AM)' : 'Night (8:00 PM - 12:00 AM)';
    timing.options[4].text = isUrdu ? 'کسی بھی وقت (Flexible 24/7)' : 'Any Flexible Time (24/7 Available)';
  }
}

// =================================================================
// HERO CAROUSEL SLIDES (FROSTED GLASS EFFECT)
// =================================================================
function initHeroCarousel() {
  if (slideInterval) clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % 3;
    showSlide(currentSlide);
  }, 6500);
}

function setHeroSlide(idx) {
  currentSlide = idx;
  showSlide(idx);
  initHeroCarousel();
}

function prevHeroSlide() {
  currentSlide = (currentSlide - 1 + 3) % 3;
  showSlide(currentSlide);
  initHeroCarousel();
}

function nextHeroSlide() {
  currentSlide = (currentSlide + 1) % 3;
  showSlide(currentSlide);
  initHeroCarousel();
}

function showSlide(idx) {
  for (let i = 0; i < 3; i++) {
    const slide = document.getElementById(`heroSlide${i + 1}`);
    const dot = document.getElementById(`slideDot${i}`);
    if (slide) {
      if (i === idx) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    }
    if (dot) {
      if (i === idx) {
        dot.className = 'size-2.5 rounded-full bg-teal-600 dark:bg-gold-400 transition-all scale-125';
      } else {
        dot.className = 'size-2 rounded-full bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 transition-all';
      }
    }
  }
}

// =================================================================
// RENDER 10 COMPACT COURSES (CLEAN, MODERN & "SEE MORE" ENABLED)
// =================================================================
function renderCourses() {
  const container = document.getElementById('coursesGrid');
  if (!container) return;

  const isUrdu = currentLang === 'ur';

  // Category Filtering
  let filtered = ACADEMY_DATA.courses;
  if (currentCategory === 'ongoing') {
    filtered = ACADEMY_DATA.courses.filter(c => c.isOngoing);
  } else if (currentCategory === '30days') {
    filtered = ACADEMY_DATA.courses.filter(c => !c.isOngoing);
  } else if (currentCategory === 'tajweed') {
    filtered = ACADEMY_DATA.courses.filter(c => c.category === 'tajweed');
  } else if (currentCategory === 'islamic') {
    filtered = ACADEMY_DATA.courses.filter(c => c.category === 'islamic' || c.category === 'hadith');
  }

  const courseCardsHtml = filtered.map(course => {
    const title = isUrdu ? course.titleUr : course.titleEn;
    const badge = isUrdu ? course.badgeUr : course.badgeEn;
    const duration = isUrdu ? course.durationUr : course.durationEn;
    const intro = isUrdu ? course.introUr : course.introEn;

    // Distinct badge colors for Ongoing vs 30-Day
    const badgeStyle = course.isOngoing
      ? 'bg-gold-500/20 text-gold-700 dark:text-gold-300 border-gold-400/40'
      : 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-400/40';

    return `
      <div class="course-card-compact shadow-sm hover:shadow-xl transition-all duration-300 group rounded-2xl overflow-hidden bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
        <div>
          <!-- Clean Course Photo (Mobile Optimized Height) -->
          <div class="course-arch-frame-compact overflow-hidden relative">
            <img src="${course.image}" alt="${title}" class="w-full h-36 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
          </div>

          <!-- Card Body Content -->
          <div class="p-3.5 sm:p-4">
            <!-- Badges Row -->
            <div class="flex items-center justify-between gap-1.5 mb-2">
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-bold border ${badgeStyle} shrink-0 whitespace-nowrap">
                <i class="fa-solid ${course.isOngoing ? 'fa-infinity' : 'fa-calendar-day'} text-[9px]"></i>
                <span class="badge-text">${badge}</span>
              </span>

              <span class="text-[11px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md shrink-0 whitespace-nowrap">
                <i class="fa-regular fa-clock text-[9px] mr-1"></i> ${duration}
              </span>
            </div>

            <!-- Title -->
            <h3 class="card-title text-sm sm:text-lg font-bold text-navy-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-gold-400 transition-colors leading-snug mb-1.5">
              ${title}
            </h3>

            <!-- Short Introduction (Compact on mobile to avoid long cards) -->
            <p class="body-text text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-1 line-clamp-2 sm:line-clamp-none">
              ${intro}
            </p>
          </div>
        </div>

        <!-- Action Bar: See More Button & WhatsApp Enroll Button -->
        <div class="p-3 sm:p-4 pt-2 pb-3 sm:pb-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
          <button onclick="openCourseDetails(${course.id})" class="inline-flex items-center gap-1 text-teal-600 dark:text-gold-400 hover:text-teal-700 dark:hover:text-gold-300 font-bold text-xs sm:text-sm transition-all cursor-pointer">
            <span>${isUrdu ? 'تفصیلات دیکھیں' : 'See Details'}</span>
            <i class="fa-solid ${isUrdu ? 'fa-arrow-left' : 'fa-arrow-right'} text-[10px]"></i>
          </button>
          
          <a href="https://wa.me/923118284694?text=${encodeURIComponent(isUrdu ? `السلام علیکم! میں کیو اسلامک اکیڈمی کے کورس نمبر ${course.id} (${course.titleUr}) میں داخلہ لینا چاہتا ہوں۔` : `Assalam-o-Alaikum! I want to enroll in Course ${course.id}: ${course.titleEn}`)}" target="_blank" class="py-1 px-2.5 sm:py-1.5 sm:px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-sm transition-all" title="Enroll on WhatsApp">
            <i class="fa-brands fa-whatsapp text-xs sm:text-sm"></i>
            <span>${isUrdu ? 'داخلہ لیں' : 'Enroll'}</span>
          </a>
        </div>
      </div>
    `;
  }).join('');

  // Special Highlight Showcase Banner to fill the remaining 2 columns in 4-column layout
  let promoBannerHtml = '';
  if (currentCategory === 'all') {
    promoBannerHtml = `
      <div class="col-span-1 sm:col-span-2 rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-950 via-navy-900 to-navy-950 text-white border border-emerald-500/40 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row justify-between group">
        <!-- Image with Arch Frame -->
        <div class="w-full md:w-5/12 relative overflow-hidden h-44 sm:h-52 md:h-auto min-h-[200px]">
          <img src="assets/girl-arabic.jpg" alt="${isUrdu ? 'بچوں کے لیے آن لائن قرآن کلاسز' : 'Online Quran Classes for Kids'}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-navy-950/80 via-transparent to-transparent"></div>
          <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-gold-500 text-navy-950 text-xs font-bold shadow-md flex items-center gap-1.5">
            <i class="fa-solid fa-gift"></i>
            <span>${isUrdu ? 'مفت ۳ روزہ ٹرائل' : 'Free 3-Day Trial'}</span>
          </span>
        </div>

        <!-- Content Details -->
        <div class="w-full md:w-7/12 p-3.5 sm:p-5 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-gold-500/20 text-gold-400 border border-gold-500/40">
                <i class="fa-solid fa-crown text-[10px]"></i>
                <span>${isUrdu ? 'خصوصی پیشکش برائے بچے و خواتین' : 'Special Offer for Kids & Sisters'}</span>
              </span>
            </div>

            <h3 class="card-title text-sm sm:text-lg font-bold text-white mb-1.5 leading-snug">
              ${isUrdu ? 'بچوں اور خواتین کے لیے آن لائن کلاسز' : 'Online Classes for Children & Sisters'}
            </h3>

            <p class="body-text text-xs sm:text-sm text-slate-300 leading-relaxed mb-2.5">
              ${isUrdu ? 'گھر بیٹھے اپنے بچوں کو سند یافتہ معلمین اور باحجاب معلمات سے ۱-آن-۱ لائیو کلاسز کے ذریعے قرآن و سنت کی بہترین تعلیم دلوائیں۔' : 'Personalized 1-on-1 online classes with certified male scholars & dedicated female tutors in purdah from the comfort of your home.'}
            </p>

            <!-- 4 Quick Checkmarks -->
            <div class="grid grid-cols-2 gap-1.5 text-[11px] sm:text-xs text-slate-200 mb-2.5">
              <div class="flex items-center gap-1.5">
                <i class="fa-solid fa-circle-check text-emerald-400 text-xs shrink-0"></i>
                <span>${isUrdu ? '۳ دن کا مفت ٹرائل' : '3-Day Free Trial'}</span>
              </div>
              <div class="flex items-center gap-1.5">
                <i class="fa-solid fa-circle-check text-emerald-400 text-xs shrink-0"></i>
                <span>${isUrdu ? 'لچکدار اوقات (24/7)' : 'Flexible Times (24/7)'}</span>
              </div>
              <div class="flex items-center gap-1.5">
                <i class="fa-solid fa-circle-check text-emerald-400 text-xs shrink-0"></i>
                <span>${isUrdu ? 'باحجاب معلمات' : 'Female Tutors in Purdah'}</span>
              </div>
              <div class="flex items-center gap-1.5">
                <i class="fa-solid fa-circle-check text-emerald-400 text-xs shrink-0"></i>
                <span>${isUrdu ? 'انفرادی توجہ و رہنمائی' : 'Focused Attention'}</span>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="pt-2.5 border-t border-slate-700/60 flex items-center justify-between gap-2">
            <a href="admission.html" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all">
              <i class="fa-solid fa-file-signature text-xs"></i>
              <span>${isUrdu ? 'آن لائن داخلہ فارم' : 'Admission Form'}</span>
            </a>
            
            <a href="https://wa.me/923118284694?text=${encodeURIComponent(isUrdu ? 'السلام علیکم! میں بچوں کے لیے ۳ دن کے مفت ٹرائل کے بارے میں معلومات لینا چاہتا ہوں۔' : 'Assalam-o-Alaikum! I want to enroll my child in the 3-day free trial.')}" target="_blank" class="py-1.5 px-3 rounded-lg bg-emerald-700/60 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 border border-emerald-500/40 transition-all">
              <i class="fa-brands fa-whatsapp text-sm"></i>
              <span>${isUrdu ? 'مفت ٹرائل لیں' : 'Book Free Trial'}</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  container.innerHTML = courseCardsHtml + promoBannerHtml;
}

// Filter Tab Click Handler
function filterCourses(category, btn) {
  currentCategory = category;
  document.querySelectorAll('.course-filter-btn').forEach(b => {
    b.classList.remove('bg-navy-800', 'dark:bg-teal-600', 'text-white');
    b.classList.add('bg-white', 'dark:bg-navy-900', 'text-slate-700', 'dark:text-slate-300');
  });
  if (btn) {
    btn.classList.add('bg-navy-800', 'dark:bg-teal-600', 'text-white');
    btn.classList.remove('bg-white', 'dark:bg-navy-900', 'text-slate-700', 'dark:text-slate-300');
  }
  renderCourses();
}

// =================================================================
// RENDER 8 MAQAMAAT CARDS (FEATURING FAMOUS IMAMS & QARIS)
// =================================================================
function renderMaqamaat() {
  const container = document.getElementById('maqamaatGrid');
  if (!container) return;

  const isUrdu = currentLang === 'ur';

  container.innerHTML = ACADEMY_DATA.maqamaat.map(m => {
    const maqamName = isUrdu ? m.nameUr : m.nameEn;
    const qariName = isUrdu ? m.qariUr : m.qariEn;
    const qariTitle = isUrdu ? m.qariTitleUr : m.qariTitleEn;
    const desc = isUrdu ? m.descUr : m.descEn;

    return `
      <div class="p-3 sm:p-5 rounded-2xl bg-gradient-to-b from-navy-800/90 to-navy-950 border border-slate-700/80 hover:border-gold-500/80 transition-all duration-300 hover:-translate-y-1 group shadow-lg flex flex-col justify-between text-center relative overflow-hidden">
        
        <!-- Top Badge: Maqam Number -->
        <div class="flex items-center justify-between mb-3">
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-gold-500/20 text-gold-300 border border-gold-500/30">
            <i class="fa-solid fa-microphone-lines text-[9px]"></i>
            <span>${isUrdu ? 'مقام' : 'Maqam'} ${m.num}</span>
          </span>
          <span class="text-[11px] font-mono text-slate-400">8 Lahjaat</span>
        </div>

        <!-- Qari Authentic Portrait Photo with Gold Frame -->
        <div class="relative mx-auto mb-3">
          <div class="size-20 sm:size-24 rounded-full p-1 bg-gradient-to-tr from-gold-500 via-emerald-500 to-amber-400 shadow-xl group-hover:scale-105 transition-transform duration-300">
            <img src="${m.image}" alt="${qariName}" class="w-full h-full object-cover rounded-full bg-slate-900">
          </div>
          <span class="absolute bottom-0 right-0 size-6 rounded-full bg-forest-900 text-gold-400 border border-gold-400 text-[10px] flex items-center justify-center shadow-md">
            <i class="fa-solid fa-check"></i>
          </span>
        </div>

        <!-- Maqam & Qari Details -->
        <div>
          <h3 class="font-extrabold text-base sm:text-lg text-white group-hover:text-gold-400 transition-colors">
            ${isUrdu ? 'مقام ' + maqamName : 'Maqam ' + maqamName}
          </h3>
          <div class="text-xs sm:text-sm font-bold text-gold-300/95 mt-1">
            ${qariName}
          </div>
          <div class="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
            ${qariTitle}
          </div>
          <p class="text-xs text-slate-300/90 mt-2 line-clamp-2 leading-relaxed">
            ${desc}
          </p>
        </div>

        <!-- Audio Demo Action Button -->
        <div class="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-center gap-2">
          <button onclick="playAudioDemo('${m.audioUrl}', 'Maqam ${m.nameEn} - ${m.qariEn}')" class="w-full py-2 px-3 rounded-xl bg-forest-800 hover:bg-forest-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer border border-gold-500/30 hover:border-gold-400">
            <i class="fa-solid fa-play text-[10px] text-gold-400"></i>
            <span>${isUrdu ? 'تلاوت سنیں' : 'Listen Demo'}</span>
          </button>
        </div>

      </div>
    `;
  }).join('');
}

// =================================================================
// RENDER 10 FEATURES
// =================================================================
function renderFeatures() {
  const container = document.getElementById('featuresGrid');
  if (!container) return;

  const isUrdu = currentLang === 'ur';

  container.innerHTML = ACADEMY_DATA.features.map(f => `
    <div class="p-3 sm:p-5 rounded-2xl sm:rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-lg hover:border-teal-500 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2 sm:mb-3">
          <div class="size-8 sm:size-11 rounded-xl sm:rounded-2xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center text-sm sm:text-lg">
            <i class="${f.icon}"></i>
          </div>
          <span class="text-[10px] sm:text-xs font-bold text-slate-400 font-mono">${f.id}</span>
        </div>
        <h4 class="font-bold text-navy-900 dark:text-white text-xs sm:text-base mb-1 sm:mb-2 leading-snug">
          ${isUrdu ? f.titleUr : f.titleEn}
        </h4>
        <p class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3 sm:line-clamp-none">
          ${isUrdu ? f.descUr : f.descEn}
        </p>
      </div>
    </div>
  `).join('');
}

// =================================================================
// RENDER COUNTRY FLAGS STRIP (LIKE AL-FURQAN SCREENSHOT)
// =================================================================
function renderCountries() {
  const container = document.getElementById('countriesGrid');
  if (!container) return;

  const isUrdu = currentLang === 'ur';

  container.innerHTML = ACADEMY_DATA.countries.map(c => `
    <div class="p-1.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 flex flex-col items-center justify-center hover:shadow-sm transition-all">
      <img src="${c.flag}" alt="${c.nameEn}" class="size-7 sm:size-9 rounded-full object-cover mb-1 sm:mb-2 border border-slate-200 dark:border-slate-700">
      <span class="text-[10px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 truncate w-full">${isUrdu ? c.nameUr : c.nameEn}</span>
    </div>
  `).join('');
}

// =================================================================
// RENDER TESTIMONIALS
// =================================================================
function renderTestimonials() {
  const container = document.getElementById('testimonialsGrid');
  if (!container) return;

  const isUrdu = currentLang === 'ur';

  container.innerHTML = ACADEMY_DATA.testimonials.map(t => `
    <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div>
        <!-- Turquoise Quote Icon like Al-Furqan -->
        <div class="flex items-center justify-between mb-3">
          <i class="fa-solid fa-quote-left text-2xl text-teal-600 dark:text-gold-400 opacity-80 group-hover:scale-110 transition-transform"></i>
          <div class="flex text-amber-400 gap-1 text-xs">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </div>
        </div>
        <p class="body-text text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6 italic">
          “${isUrdu ? t.reviewUr : t.reviewEn}”
        </p>
      </div>
      <div class="flex items-center gap-3.5 pt-4 border-t border-slate-100 dark:border-slate-800">
        <div class="size-11 rounded-full bg-gradient-to-tr from-navy-800 to-teal-600 text-gold-400 dark:text-white font-bold flex items-center justify-center text-sm shadow-xs shrink-0">
          ${t.nameEn.split(' ').map(n=>n[0]).join('')}
        </div>
        <div>
          <div class="font-bold text-sm sm:text-base text-navy-900 dark:text-white leading-tight">
            ${isUrdu ? t.nameUr : t.nameEn}
          </div>
          <div class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1.5">
            <i class="fa-solid fa-location-dot text-teal-600 dark:text-gold-400 text-[11px]"></i>
            <span>${isUrdu ? t.locationUr : t.locationEn}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// =================================================================
// RENDER FAQS ACCORDION
// =================================================================
function renderFaqs() {
  const container = document.getElementById('faqList');
  if (!container) return;

  const isUrdu = currentLang === 'ur';

  container.innerHTML = ACADEMY_DATA.faqs.map((faq, idx) => `
    <div class="border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-navy-900 overflow-hidden shadow-xs">
      <button onclick="toggleFaq(${idx})" class="w-full text-start p-5 flex items-center justify-between gap-4 font-bold text-navy-900 dark:text-white text-sm sm:text-base hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
        <span class="leading-snug">${isUrdu ? faq.qUr : faq.qEn}</span>
        <i id="faqIcon-${idx}" class="fa-solid fa-chevron-down text-xs text-slate-400 transition-transform"></i>
      </button>
      <div id="faqAnswer-${idx}" class="hidden p-5 pt-2 body-text text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-navy-950/40">
        ${isUrdu ? faq.aUr : faq.aEn}
      </div>
    </div>
  `).join('');
}

function toggleFaq(idx) {
  const ans = document.getElementById(`faqAnswer-${idx}`);
  const icon = document.getElementById(`faqIcon-${idx}`);
  if (ans.classList.contains('hidden')) {
    ans.classList.remove('hidden');
    icon.classList.add('rotate-180');
  } else {
    ans.classList.add('hidden');
    icon.classList.remove('rotate-180');
  }
}

// =================================================================
// COURSE DETAILS MODAL VIEW (100% RELIABLE DISPLAY)
// =================================================================
function openCourseDetails(courseId) {
  const course = ACADEMY_DATA.courses.find(c => c.id === courseId);
  if (!course) return;

  const isUrdu = currentLang === 'ur';
  const modal = document.getElementById('courseModal');
  const content = document.getElementById('modalContent');
  if (!modal || !content) return;

  // Crucial fix: define intro properly so no ReferenceError occurs!
  const intro = isUrdu ? course.introUr : course.introEn;
  const title = isUrdu ? course.titleUr : course.titleEn;
  const badge = isUrdu ? course.badgeUr : course.badgeEn;
  const duration = isUrdu ? course.durationUr : course.durationEn;

  const topicsList = (isUrdu ? course.topicsUr : course.topicsEn).map(t => `
    <li class="flex items-start gap-3 text-sm sm:text-base text-slate-700 dark:text-slate-200 py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
      <i class="fa-solid fa-circle-check text-emerald-500 mt-1 shrink-0 text-sm"></i>
      <span class="leading-relaxed">${t}</span>
    </li>
  `).join('');

  content.innerHTML = `
    <!-- Modal Header with Image -->
    <div class="relative rounded-2xl overflow-hidden h-48 mb-5 bg-slate-100 dark:bg-slate-800">
      <img src="${course.image}" alt="${title}" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>
      <div class="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-bold ${course.isOngoing ? 'bg-gold-500 text-navy-950' : 'bg-emerald-600 text-white'}">
          <i class="fa-solid ${course.isOngoing ? 'fa-infinity' : 'fa-calendar-day'}"></i>
          <span>${badge}</span>
        </span>
        <span class="text-xs sm:text-sm font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-md">
          ${duration}
        </span>
      </div>
    </div>

    <h2 class="card-title text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white leading-snug mb-3">
      ${title}
    </h2>

    <!-- Introduction -->
    <div class="p-4 rounded-2xl bg-slate-50 dark:bg-navy-950/70 border border-slate-200 dark:border-slate-800 body-text text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed mb-5">
      ${intro}
    </div>

    <!-- Topics list -->
    <div class="mb-5">
      <h4 class="font-bold text-navy-900 dark:text-white text-sm sm:text-base mb-3 flex items-center gap-2">
        <i class="fa-solid fa-book-open text-teal-600 dark:text-gold-400"></i>
        <span>${isUrdu ? 'اس کورس میں آپ کیا سیکھیں گے؟' : 'What Will You Learn In This Course?'}</span>
      </h4>
      <ul class="bg-white dark:bg-navy-950 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 space-y-1">
        ${topicsList}
      </ul>
    </div>

    <!-- Quran Verse / Hadith Card -->
    <div class="ayat-container rounded-2xl p-4 text-center mb-6">
      <p class="font-arabic text-lg text-gold-700 dark:text-gold-400 font-bold mb-1">${course.verse.arabic}</p>
      <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic">
        ${isUrdu ? course.verse.transUr : course.verse.transEn}
      </p>
    </div>

    <!-- Action buttons -->
    <div class="flex flex-col sm:flex-row gap-2.5 pt-3 border-t border-slate-100 dark:border-slate-800">
      <a href="admission.html?course=${course.id}" class="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all">
        <i class="fa-solid fa-file-signature text-base"></i>
        <span>${isUrdu ? 'داخلہ فارم پر کریں' : 'Fill Admission Form'}</span>
      </a>

      <button onclick="closeCourseModal(); openTrialModal();" class="py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-navy-950 font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-1.5">
        <i class="fa-solid fa-calendar-check text-sm"></i>
        <span>${isUrdu ? 'مفت ٹرائل بک کریں' : 'Book Free Trial'}</span>
      </button>

      <a href="https://wa.me/923118284694?text=${encodeURIComponent(isUrdu ? `السلام علیکم! میں کیو اسلامک اکیڈمی کے کورس نمبر ${course.id} (${course.titleUr}) کے بارے میں مزید معلومات اور داخلہ چاہتا ہوں۔` : `Assalam-o-Alaikum! I want information and admission in Course ${course.id}: ${course.titleEn}`)}" target="_blank" class="py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all">
        <i class="fa-brands fa-whatsapp text-emerald-500 text-base"></i>
        <span>${isUrdu ? 'واٹس ایپ رابطہ' : 'WhatsApp'}</span>
      </a>
    </div>
  `;

  modal.style.display = 'flex';
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeCourseModal() {
  const modal = document.getElementById('courseModal');
  if (modal) {
    modal.style.display = 'none';
    modal.classList.add('hidden');
  }
  document.body.style.overflow = '';
}

// =================================================================
// FREE TRIAL & ADMISSION MODAL & WHATSAPP INTEGRATION
// =================================================================
function openTrialModal() {
  const modal = document.getElementById('trialModal');
  if (modal) {
    modal.style.display = 'flex';
    modal.classList.remove('hidden');
  }
  document.body.style.overflow = 'hidden';
}

function closeTrialModal() {
  const modal = document.getElementById('trialModal');
  if (modal) {
    modal.style.display = 'none';
    modal.classList.add('hidden');
  }
  document.body.style.overflow = '';
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('hidden');
}

function submitTrialForm(e) {
  e.preventDefault();
  const admissionType = document.querySelector('input[name="modalAdmissionType"]:checked')?.value || 'مفت ۳ روزہ ٹرائل';
  const name = document.getElementById('studentName')?.value || '';
  const father = document.getElementById('fatherName')?.value || '';
  const gender = document.getElementById('studentGender')?.value || '';
  const age = document.getElementById('studentAge')?.value || '';
  const country = document.getElementById('studentCountry')?.value || '';
  const city = document.getElementById('studentCity')?.value || '';
  const phone = document.getElementById('studentPhone')?.value || '';
  const course = document.getElementById('courseSelect')?.value || '';
  const teacher = document.getElementById('teacherPref')?.value || '';
  const timing = document.getElementById('preferredTiming')?.value || '';
  const notes = document.getElementById('additionalNotes')?.value || 'کوئی اضافی پیغام نہیں';

  const isUrdu = currentLang === 'ur';

  let msg = '';
  if (isUrdu) {
    msg = `السلام علیکم ورحمۃ اللہ وبرکاتہ!
کیو اسلامک اکیڈمی (Q Islamic Academy)
───────────────────────
📋 *درخواست برائے داخلہ و ٹرائل رجسٹریشن*
───────────────────────
📌 *داخلے کی نوعیت:* ${admissionType}
👤 *طالب علم کا نام:* ${name}
👨‍👦 *والد یا سرپرست کا نام:* ${father}
⚧ *جنس:* ${gender}
🎂 *عمر:* ${age}
🌍 *ملک:* ${country}
🏙️ *شہر:* ${city}
📱 *واٹس ایپ نمبر:* ${phone}

📚 *مطلوبہ کورس:* ${course}
🎓 *استاد کا انتخاب:* ${teacher}
⏰ *پسندیدہ وقت:* ${timing}
📝 *اضافی نوٹ / پیغام:* ${notes}
───────────────────────
براہِ کرم کلاس شیڈول کر کے جلد از جلد واٹس ایپ پر رابطہ فرمائیں۔ جزاکم اللہ خیرا!`;
  } else {
    msg = `Assalam-o-Alaikum Wa Rahmatullahi Wa Barakatuh!
Q Islamic Academy - Admission & Trial Request
───────────────────────
📋 *ONLINE ADMISSION FORM*
───────────────────────
📌 *Admission Type:* ${admissionType}
👤 *Student Name:* ${name}
👨‍👦 *Father/Guardian Name:* ${father}
⚧ *Gender:* ${gender}
🎂 *Age:* ${age}
🌍 *Country:* ${country}
🏙️ *City:* ${city}
📱 *WhatsApp Number:* ${phone}

📚 *Desired Course:* ${course}
🎓 *Teacher Preference:* ${teacher}
⏰ *Preferred Time Slot:* ${timing}
📝 *Additional Note:* ${notes}
───────────────────────
Please schedule my session and contact me on WhatsApp. JazakAllah Khair!`;
  }

  const url = `https://wa.me/923118284694?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
  closeTrialModal();
}

// Ensure all handlers are attached to window for guaranteed inline onclick execution
window.openCourseDetails = openCourseDetails;
window.closeCourseModal = closeCourseModal;
window.openTrialModal = openTrialModal;
window.closeTrialModal = closeTrialModal;
window.submitTrialForm = submitTrialForm;
window.toggleMobileMenu = toggleMobileMenu;

// =================================================================
// INTERACTIVE AI CHATBOT WIDGET
// =================================================================
function toggleChatWidget() {
  const box = document.getElementById('chatWidgetBox');
  const icon = document.getElementById('chatWidgetIcon');
  if (!box) return;

  const isHidden = box.classList.contains('hidden');
  if (isHidden) {
    box.classList.remove('hidden');
    if (icon) {
      icon.className = 'fa-solid fa-xmark text-lg';
    }
    const input = document.getElementById('chatInput');
    if (input) setTimeout(() => input.focus(), 100);
  } else {
    box.classList.add('hidden');
    if (icon) {
      icon.className = 'fa-solid fa-comment-dots text-lg';
    }
  }
}

function sendQuickQuestion(topic) {
  let userTextUr = '';
  let userTextEn = '';

  switch (topic) {
    case 'courses':
      userTextUr = 'اکیڈمی کے تمام کورسز کی تفصیل بتائیں';
      userTextEn = 'Tell me about all available courses in the academy';
      break;
    case 'timing':
      userTextUr = 'کلاسز کے اوقات اور شیڈول کیا ہیں؟';
      userTextEn = 'What are the class timings and schedule?';
      break;
    case 'female':
      userTextUr = 'کیا بچیوں اور خواتین کے لیے معلمات موجود ہیں؟';
      userTextEn = 'Do you have female teachers for sisters and girls?';
      break;
    case 'trial':
      userTextUr = 'مفت ٹرائل کلاس کے لیے کیا طریقہ کار ہے؟';
      userTextEn = 'How can I register for a free trial class?';
      break;
    default:
      userTextUr = topic;
      userTextEn = topic;
  }

  const userQuestion = currentLang === 'ur' ? userTextUr : userTextEn;
  appendChatMessage(userQuestion, 'user');

  setTimeout(() => {
    botReply(topic);
  }, 400);
}

function handleChatSubmit(e) {
  if (e && e.preventDefault) e.preventDefault();
  const input = document.getElementById('chatInput');
  if (!input) return;

  const query = input.value.trim();
  if (!query) return;

  appendChatMessage(query, 'user');
  input.value = '';

  setTimeout(() => {
    botReply(query);
  }, 450);
}

function appendChatMessage(text, sender) {
  const container = document.getElementById('chatMessages');
  if (!container) return;

  const isUser = sender === 'user';

  const div = document.createElement('div');
  div.className = `flex items-start gap-2 ${isUser ? 'flex-row-reverse' : ''}`;

  if (isUser) {
    div.innerHTML = `
      <div class="size-7 rounded-full bg-navy-800 dark:bg-slate-700 text-gold-400 flex items-center justify-center text-xs shrink-0 mt-0.5">
        <i class="fa-solid fa-user"></i>
      </div>
      <div class="bg-teal-600 text-white p-3 rounded-2xl rounded-tl-none text-xs sm:text-sm max-w-[85%] leading-relaxed shadow-xs">
        ${escapeHtml(text)}
      </div>
    `;
  } else {
    div.innerHTML = `
      <div class="size-7 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs shrink-0 mt-0.5">
        <i class="fa-solid fa-robot"></i>
      </div>
      <div class="bg-white dark:bg-navy-800 p-3 rounded-2xl rounded-tr-none border border-slate-200 dark:border-slate-700 shadow-xs max-w-[85%] text-slate-700 dark:text-slate-200 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
        ${text}
      </div>
    `;
  }

  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function botReply(query) {
  const isUrdu = currentLang === 'ur';
  const lowerQuery = (query || '').toLowerCase();

  // Search knowledge base
  let match = null;
  if (window.ACADEMY_DATA && ACADEMY_DATA.qaBot) {
    for (const item of ACADEMY_DATA.qaBot) {
      if (item.keywords.some(k => lowerQuery.includes(k.toLowerCase()))) {
        match = item;
        break;
      }
    }
  }

  let answer = '';
  if (match) {
    answer = isUrdu ? match.answerUr : match.answerEn;
  } else {
    answer = isUrdu
      ? `آپ کے سوال کے حوالے سے فوری اور مکمل رہنمائی کے لیے ہمارے واٹس ایپ پر ایڈمن سے رابطہ فرمائیں:\n\n📱 <a href="https://wa.me/923118284694" target="_blank" class="text-teal-600 dark:text-teal-400 font-bold underline">0311-8284694 پر میسج بھیجیں</a>`
      : `For immediate assistance regarding your question, please connect directly with our admissions coordinator on WhatsApp:\n\n📱 <a href="https://wa.me/923118284694" target="_blank" class="text-teal-600 dark:text-teal-400 font-bold underline">Message +92 311 8284694</a>`;
  }

  appendChatMessage(answer, 'bot');
}

function escapeHtml(string) {
  const entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return String(string).replace(/[&<>"']/g, s => entityMap[s]);
}
