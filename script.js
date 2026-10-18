// ===== آیات کا ڈیٹا =====
// mood: "happy" = خوشی/شکر/امید، "sad" = غم/تسلی
// نئی آیت جوڑنے کے لیے بس ایک نئی لائن اسی طرح لکھ دیں۔
const AYAT = [
  // --- خوشی اور شکر ---
  { mood: "happy", ar: "لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ", ur: "اگر تم شکر کرو گے تو میں تمہیں اور زیادہ دوں گا۔", ref: "سورۃ ابراہیم 14:7" },
  { mood: "happy", ar: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ", ur: "سن لو! اللہ کے ذکر سے دلوں کو اطمینان ملتا ہے۔", ref: "سورۃ الرعد 13:28" },
  { mood: "happy", ar: "وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ", ur: "اور عنقریب تمہارا رب تمہیں اتنا دے گا کہ تم راضی ہو جاؤ گے۔", ref: "سورۃ الضحیٰ 93:5" },
  { mood: "happy", ar: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ", ur: "پھر تم اپنے رب کی کون کون سی نعمتوں کو جھٹلاؤ گے؟", ref: "سورۃ الرحمٰن 55:13" },
  { mood: "happy", ar: "فَاذْكُرُونِي أَذْكُرْكُمْ", ur: "تم مجھے یاد کرو، میں تمہیں یاد رکھوں گا۔", ref: "سورۃ البقرہ 2:152" },
  { mood: "happy", ar: "قُلْ بِفَضْلِ اللَّهِ وَبِرَحْمَتِهِ فَبِذَٰلِكَ فَلْيَفْرَحُوا", ur: "کہہ دو: اللہ کے فضل اور اس کی رحمت پر انہیں خوش ہونا چاہیے۔", ref: "سورۃ یونس 10:58" },
  { mood: "happy", ar: "فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ", ur: "میں قریب ہوں، پکارنے والے کی پکار کا جواب دیتا ہوں جب وہ مجھے پکارے۔", ref: "سورۃ البقرہ 2:186" },
  { mood: "happy", ar: "ادْعُونِي أَسْتَجِبْ لَكُمْ", ur: "مجھے پکارو، میں تمہاری دعا قبول کروں گا۔", ref: "سورۃ غافر 40:60" },

  // --- غم اور تسلی ---
  { mood: "sad", ar: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا", ur: "بے شک مشکل کے ساتھ آسانی ہے۔", ref: "سورۃ الانشراح 94:5" },
  { mood: "sad", ar: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا", ur: "اللہ کسی جان پر اس کی طاقت سے زیادہ بوجھ نہیں ڈالتا۔", ref: "سورۃ البقرہ 2:286" },
  { mood: "sad", ar: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا", ur: "اور ہمت نہ ہارو اور غم نہ کرو۔", ref: "سورۃ آل عمران 3:139" },
  { mood: "sad", ar: "لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا", ur: "غم نہ کر، بے شک اللہ ہمارے ساتھ ہے۔", ref: "سورۃ التوبہ 9:40" },
  { mood: "sad", ar: "لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ", ur: "اللہ کی رحمت سے مایوس نہ ہو۔", ref: "سورۃ الزمر 39:53" },
  { mood: "sad", ar: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ", ur: "تمہارے رب نے نہ تمہیں چھوڑا اور نہ وہ ناراض ہوا۔", ref: "سورۃ الضحیٰ 93:3" },
  { mood: "sad", ar: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ", ur: "بے شک اللہ صبر کرنے والوں کے ساتھ ہے۔", ref: "سورۃ البقرہ 2:153" },
  { mood: "sad", ar: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ", ur: "اور جو اللہ پر بھروسہ کرے تو وہ اسے کافی ہے۔", ref: "سورۃ الطلاق 65:3" },
  { mood: "sad", ar: "وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ", ur: "ہو سکتا ہے تم کسی چیز کو ناپسند کرو اور وہی تمہارے لیے بہتر ہو۔", ref: "سورۃ البقرہ 2:216" }
];

// ===== عناصر =====
const $ = (id) => document.getElementById(id);
const card = $("ayahCard"), jar = $("jar");
let mood = "happy";
let last = -1;

// کیفیت کا انتخاب
document.querySelectorAll(".mood").forEach((b) => {
  b.addEventListener("click", () => {
    document.querySelectorAll(".mood").forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    mood = b.dataset.mood;
  });
});

// پرچی نکالنا
function drawAyah() {
  const pool = AYAT.filter((a) => mood === "all" || a.mood === mood);
  let i;
  do { i = Math.floor(Math.random() * pool.length); }
  while (pool.length > 1 && pool[i] === AYAT[last]);
  const a = pool[i];
  last = AYAT.indexOf(a);

  jar.classList.remove("shake");
  void jar.getBoundingClientRect(); // animation دوبارہ چلانے کے لیے
  jar.classList.add("shake");

  setTimeout(() => {
    $("ayahAr").textContent = a.ar;
    $("ayahUr").textContent = a.ur;
    $("ayahRef").textContent = a.ref;
    $("waBtn").href = "https://wa.me/?text=" + encodeURIComponent(`${a.ar}\n${a.ur}\n(${a.ref})\n\nhttps://zainabfatima89.github.io/noor-e-hidayat/`);
    card.hidden = false;
    card.style.animation = "none"; void card.offsetWidth; card.style.animation = "";
    card.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 600);
}
$("jarBtn").addEventListener("click", drawAyah);
$("againBtn").addEventListener("click", drawAyah);

// کاپی
$("copyBtn").addEventListener("click", async () => {
  const text = `${$("ayahAr").textContent}\n${$("ayahUr").textContent}\n(${$("ayahRef").textContent})`;
  try { await navigator.clipboard.writeText(text); $("copyBtn").textContent = "کاپی ہو گیا ✓"; }
  catch { $("copyBtn").textContent = "کاپی نہیں ہوا"; }
  setTimeout(() => ($("copyBtn").textContent = "کاپی کریں"), 1800);
});

// موبائل مینو
const menuBtn = $("menuBtn"), nav = $("nav");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));

// سال
$("year").textContent = new Date().getFullYear();

// ===== آج کی آیت (ہر دن ایک ہی آیت، تاریخ کے حساب سے) =====
function todayKey() {
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
function todayAyah() {
  const d = new Date();
  const dayNumber = Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);
  return AYAT[dayNumber % AYAT.length];
}
const t = todayAyah();
$("todayAr").textContent = t.ar;
$("todayUr").textContent = t.ur;
$("todayRef").textContent = t.ref;
$("todayDate").textContent = new Date().toLocaleDateString("ur-PK", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

// ===== روزانہ یاد دہانی =====
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch {} },
  del(k) { try { localStorage.removeItem(k); } catch {} }
};
const remStatus = $("remStatus");

function showReminder() {
  const a = todayAyah();
  const body = a.ur + " (" + a.ref + ")";
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification("آج کی آیت: " + a.ar, { body, icon: "favicon.svg" });
  }
  store.set("lastShown", todayKey());
  showBanner();
}

// ===== سائٹ کے اندر پاپ اپ ریمائنڈر =====
function showBanner() {
  const a = todayAyah();
  $("bAr").textContent = a.ar;
  $("bUr").textContent = a.ur;
  $("bRef").textContent = a.ref;
  $("dailyBanner").hidden = false;
}
$("bannerClose").addEventListener("click", () => {
  $("dailyBanner").hidden = true;
  store.set("bannerSeen", todayKey());
});
// روز کی پہلی وزٹ پر خود بخود دکھائیں
if (store.get("bannerSeen") !== todayKey()) showBanner();

function checkReminder() {
  const time = store.get("remTime");
  if (!time || store.get("lastShown") === todayKey()) return;
  const now = new Date();
  const [h, m] = time.split(":").map(Number);
  if (now.getHours() > h || (now.getHours() === h && now.getMinutes() >= m)) showReminder();
}

function refreshStatus() {
  const time = store.get("remTime");
  remStatus.textContent = time ? "یاد دہانی چالو ہے: روزانہ " + time + " بجے" : "یاد دہانی بند ہے";
  if (time) $("remTime").value = time;
}

$("remOn").addEventListener("click", async () => {
  if (!("Notification" in window)) {
    remStatus.textContent = "آپ کا براؤزر نوٹیفکیشن سپورٹ نہیں کرتا۔";
    return;
  }
  const perm = await Notification.requestPermission();
  if (perm !== "granted") {
    remStatus.textContent = "نوٹیفکیشن کی اجازت نہیں ملی۔ براؤزر کی سیٹنگ میں اجازت دیں۔";
    return;
  }
  store.set("remTime", $("remTime").value);
  store.del("lastShown");
  refreshStatus();
  checkReminder();
});

$("remOff").addEventListener("click", () => {
  store.del("remTime");
  store.del("lastShown");
  refreshStatus();
});

refreshStatus();
checkReminder();
setInterval(checkReminder, 30000);
