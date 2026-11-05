// Q Islamic Academy - Universal Application Script
// Supports Multi-Page Routing, Language & Theme Engine, Modals, Media Playback & LocalStorage Sync

let currentLang = localStorage.getItem('lang') || 'en';
let currentTheme = localStorage.getItem('theme') || 'light';
let activeAudio = null;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  highlightActiveNav();
  initQuranAudioPlayer();
});

// =================================================================
// 1. THEME ENGINE (LIGHT / DARK)
// =================================================================
function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  setTheme(saved);
}

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
// 2. LANGUAGE ENGINE (ENGLISH PRIMARY / URDU EXTENSIBLE)
// =================================================================
function initLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const paramLang = urlParams.get('lang');
  const saved = paramLang || localStorage.getItem('lang') || 'en';
  setLanguage(saved);
}

function toggleLanguage() {
  const next = currentLang === 'en' ? 'ur' : 'en';
  setLanguage(next);
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  localStorage.setItem('language', lang);

  const root = document.documentElement;
  const body = document.body;
  const label = document.getElementById('langLabel');

  if (lang === 'ur') {
    root.setAttribute('lang', 'ur');
    root.setAttribute('dir', 'rtl');
    body.classList.remove('lang-en');
    body.classList.add('lang-ur');
    if (label) label.textContent = 'English';
  } else {
    root.setAttribute('lang', 'en');
    root.setAttribute('dir', 'ltr');
    body.classList.remove('lang-ur');
    body.classList.add('lang-en');
    if (label) label.textContent = 'اردو';
  }

  // Refresh dynamic text on current page if function defined
  if (typeof renderCurrentPageDynamicContent === 'function') {
    renderCurrentPageDynamicContent(lang === 'ur');
  }
}

// =================================================================
// 3. NAVIGATION & MOBILE DRAWER
// =================================================================
function highlightActiveNav() {
  const path = window.location.pathname;
  let filename = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
  if (filename === '') filename = 'index.html';

  const navLinks = document.querySelectorAll('.nav-link-item');
  navLinks.forEach(link => {
    const target = link.getAttribute('data-page');
    if (target === filename || (filename === 'index.html' && target === 'home')) {
      link.classList.add('text-emerald-600', 'dark:text-emerald-400', 'font-black', 'border-b-2', 'border-emerald-600', 'dark:border-emerald-400');
    }
  });
}

function toggleMobileMenu() {
  const drawer = document.getElementById('mobileNavDrawer');
  if (drawer) {
    drawer.classList.toggle('hidden');
    document.body.style.overflow = drawer.classList.contains('hidden') ? '' : 'hidden';
  }
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobileNavDrawer');
  if (drawer) {
    drawer.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// =================================================================
// 4. COURSE DETAILS MODAL
// =================================================================
function openCourseDetails(courseId) {
  const courses = window.Q_STORE ? window.Q_STORE.getCourses() : ACADEMY_DATA.courses;
  const course = courses.find(c => c.id === Number(courseId) || c.id === courseId);
  if (!course) return;

  const modal = document.getElementById('courseModal');
  const body = document.getElementById('courseModalBody');
  if (!modal || !body) return;

  const isUrdu = currentLang === 'ur';
  const title = isUrdu ? course.titleUr : course.titleEn;
  const intro = isUrdu ? course.introUr : course.introEn;
  const badge = isUrdu ? course.badgeUr : course.badgeEn;
  const duration = isUrdu ? course.durationUr : course.durationEn;
  const topics = isUrdu ? course.topicsUr : course.topicsEn;

  body.innerHTML = `
    <div class="relative rounded-2xl overflow-hidden h-48 sm:h-56 mb-5 bg-slate-900 border border-slate-700">
      <img src="${course.image}" alt="${title}" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>
      <div class="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${course.isOngoing ? 'bg-amber-500 text-navy-950' : 'bg-emerald-600 text-white'}">
          <i class="fa-solid ${course.isOngoing ? 'fa-infinity' : 'fa-calendar-check'} text-[10px]"></i>
          ${badge}
        </span>
        <span class="text-xs bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20 font-mono">
          ${duration}
        </span>
      </div>
    </div>

    <h3 class="text-xl sm:text-2xl font-extrabold text-navy-950 dark:text-white mb-2">${title}</h3>
    <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">${intro}</p>

    <div class="bg-slate-50 dark:bg-navy-900/60 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 mb-6">
      <h4 class="font-bold text-navy-900 dark:text-white text-sm sm:text-base mb-3 flex items-center gap-2">
        <i class="fa-solid fa-list-check text-emerald-600 dark:text-emerald-400"></i>
        <span>${isUrdu ? 'نصاب اور اسباق کی تفصیل:' : 'Key Topics & Curriculum Structure:'}</span>
      </h4>
      <ul class="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
        ${topics.map(t => `<li class="flex items-start gap-2"><i class="fa-solid fa-check text-emerald-500 mt-0.5 shrink-0 text-[11px]"></i> <span>${t}</span></li>`).join('')}
      </ul>
    </div>

    ${course.verse ? `
      <div class="bg-gold-500/10 dark:bg-gold-500/5 border border-gold-500/30 rounded-2xl p-4 text-center mb-6">
        <div class="font-arabic text-xl sm:text-2xl text-gold-700 dark:text-gold-300 font-bold mb-1">${course.verse.arabic}</div>
        <div class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic">“${isUrdu ? course.verse.transUr : course.verse.transEn}”</div>
      </div>
    ` : ''}

    <div class="flex flex-col sm:flex-row items-center gap-3 pt-2">
      <a href="admission.html?course=${course.id}" class="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all">
        <i class="fa-solid fa-file-signature"></i>
        <span>${isUrdu ? 'اس کورس میں داخلہ لیں' : 'Enroll in This Course'}</span>
      </a>
      <a href="https://wa.me/923118284694?text=${encodeURIComponent(isUrdu ? `السلام علیکم! میں کیو اسلامک اکیڈمی کے کورس نمبر ${course.id} (${course.titleUr}) کے متعلق معلومات حاصل کرنا چاہتا ہوں۔` : `Assalam-o-Alaikum! I want information regarding Course ${course.id}: ${course.titleEn}`)}" target="_blank" class="w-full sm:w-auto py-3 px-5 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all">
        <i class="fa-brands fa-whatsapp text-base"></i>
        <span>${isUrdu ? 'واٹس ایپ پر رابطہ' : 'Ask on WhatsApp'}</span>
      </a>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeCourseModal() {
  const modal = document.getElementById('courseModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// =================================================================
// 5. VIDEO DEMO MODAL PLAYER
// =================================================================
function openVideoModal(videoUrl, title) {
  const modal = document.getElementById('videoPlayerModal');
  const iframe = document.getElementById('videoModalIframe');
  const titleEl = document.getElementById('videoModalTitle');

  if (!modal || !iframe) return;

  if (titleEl) titleEl.textContent = title || 'Teaching Demonstration';

  // Embed URL conversion if required
  let embedUrl = videoUrl;
  if (videoUrl.includes('youtube.com/watch?v=')) {
    const vId = videoUrl.split('v=')[1].split('&')[0];
    embedUrl = `https://www.youtube.com/embed/${vId}?autoplay=1`;
  } else if (!embedUrl.includes('autoplay=1')) {
    embedUrl += (embedUrl.includes('?') ? '&' : '?') + 'autoplay=1';
  }

  iframe.src = embedUrl;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  const modal = document.getElementById('videoPlayerModal');
  const iframe = document.getElementById('videoModalIframe');
  if (iframe) iframe.src = '';
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// =================================================================
// 6. QUICK TRIAL MODAL
// =================================================================
function openTrialModal(courseId) {
  const modal = document.getElementById('trialModal');
  if (!modal) {
    window.location.href = 'admission.html' + (courseId ? `?course=${courseId}` : '');
    return;
  }
  if (courseId) {
    const sel = document.getElementById('modalCourseSelect');
    if (sel) sel.value = courseId;
  }
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeTrialModal() {
  const modal = document.getElementById('trialModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function handleModalTrialSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('modalStudentName')?.value.trim();
  const phone = document.getElementById('modalStudentPhone')?.value.trim();
  const course = document.getElementById('modalCourseSelect')?.value;
  const timing = document.getElementById('modalTiming')?.value;

  if (!name || !phone) return;

  // Save to Store
  if (window.Q_STORE) {
    window.Q_STORE.addInquiry({
      type: "Free 3-Day Trial",
      name: name,
      father: "N/A",
      gender: "Not specified",
      age: "N/A",
      country: "Global",
      city: "Online",
      phone: phone,
      email: "N/A",
      course: course || "Core Quran Program",
      teacher: "Any Qualified Scholar",
      timing: timing || "Flexible",
      days: "5 Days a Week",
      notes: "Quick Modal Application"
    });
  }

  const isUrdu = currentLang === 'ur';
  const text = isUrdu
    ? `السلام علیکم! میں کیو اسلامک اکیڈمی میں ۳ روزہ مفت ٹرائل حاصل کرنا چاہتا ہوں۔\n👤 نام: ${name}\n📱 واٹس ایپ: ${phone}\n📚 کورس: ${course}\n⏰ پسندیدہ وقت: ${timing}`
    : `Assalam-o-Alaikum! I want to book a Free 3-Day Trial at Q Islamic Academy.\nName: ${name}\nWhatsApp: ${phone}\nCourse: ${course}\nPreferred Timing: ${timing}`;

  closeTrialModal();
  window.open(`https://wa.me/923118284694?text=${encodeURIComponent(text)}`, '_blank');
}

// =================================================================
// 7. GLOBAL QURAN AUDIO PLAYER
// =================================================================
function initQuranAudioPlayer() {
  const audioEl = document.getElementById('globalQuranAudio');
  if (!audioEl) return;
  activeAudio = audioEl;
}

function playAudioDemo(src, btnEl) {
  if (!activeAudio) {
    activeAudio = new Audio(src);
  } else {
    activeAudio.src = src;
  }

  if (activeAudio.paused) {
    activeAudio.play().then(() => {
      if (btnEl) btnEl.innerHTML = '<i class="fa-solid fa-pause text-emerald-400"></i>';
    }).catch(err => console.log('Audio autoplay:', err));
  } else {
    activeAudio.pause();
    if (btnEl) btnEl.innerHTML = '<i class="fa-solid fa-play text-emerald-400"></i>';
  }
}

// Window attachments for inline triggers
window.toggleTheme = toggleTheme;
window.setTheme = setTheme;
window.toggleLanguage = toggleLanguage;
window.setLanguage = setLanguage;
window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.openCourseDetails = openCourseDetails;
window.closeCourseModal = closeCourseModal;
window.openVideoModal = openVideoModal;
window.closeVideoModal = closeVideoModal;
window.openTrialModal = openTrialModal;
window.closeTrialModal = closeTrialModal;
window.handleModalTrialSubmit = handleModalTrialSubmit;
window.playAudioDemo = playAudioDemo;
