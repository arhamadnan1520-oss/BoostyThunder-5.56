const steamProducts = [
  { title: "Marvel's Spider-Man 2", price: 1000, genre: "Action", app: "2651280" },
  { title: "Spider-Man: Miles Morales", price: 1000, genre: "Action", app: "1817190" },
  { title: "Silent Hill 2", price: 780, genre: "Horror", app: "2124490" },
  { title: "Wallpaper Engine", price: 230, genre: "Customization", app: "431960" },
  { title: "The Last of Us Part I", price: 900, genre: "Adventure", app: "1888930" },
  { title: "Call of Duty: Modern Warfare II", price: 300, genre: "Action", app: "1962663" },
  { title: "Grand Theft Auto V Enhanced", price: 1300, genre: "Action", app: "3240220" },
  { title: "Grand Theft Auto V Legacy", price: 2000, genre: "Action", app: "271590" },
  { title: "Forza Horizon 4", price: 700, genre: "Racing", app: "1293830" },
  { title: "Elden Ring", price: 500, genre: "RPG", app: "1245620" },
  { title: "Hitman: World of Assassination", price: 700, genre: "Action", app: "1659040" },
  { title: "The Forest", price: 900, genre: "Survival", app: "242760" },
  { title: "Cyberpunk 2077", price: 2000, genre: "RPG", app: "1091500" },
  { title: "Forza Horizon 5", price: 900, genre: "Racing", app: "1551360" },
  { title: "God of War Ragnarök", price: 2600, genre: "Action", app: "2322010" },
  { title: "Red Dead Redemption 2", price: 2000, genre: "Adventure", app: "1174180" },
  { title: "Assetto Corsa", price: 400, genre: "Racing", app: "244210" },
  { title: "007 First Light", price: 2000, genre: "Action", app: "" },
  { title: "Crimson Desert", price: 3000, genre: "Action RPG", app: "" },
  { title: "Euro Truck Simulator 2", price: 2600, genre: "Simulation", app: "227300" },
  { title: "Forza Horizon 6", price: 4000, genre: "Racing", app: "" },
  { title: "Ghost of Tsushima", price: 4000, genre: "Adventure", app: "2215430" },
  { title: "Resident Evil Requiem", price: 4500, genre: "Horror", app: "" },
  { title: "Assassin's Creed IV: Black Flag", price: 780, genre: "Adventure", app: "242050" },
  { title: "Assassin's Creed Shadows", price: 5500, genre: "Action RPG", app: "3159330" },
  { title: "The Last of Us Part II Remastered", price: 3000, genre: "Adventure", app: "2531310" },
  { title: "Hogwarts Legacy", price: 4600, genre: "Adventure", app: "990080" },
  { title: "Mecha Chameleon", price: 500, genre: "Action", app: "" },
  { title: "Assassin's Creed Unity", price: 5000, genre: "Action", app: "289650" },
  { title: "Sekiro: Shadows Die Twice", price: null, genre: "Action", app: "814380" },
  { title: "Sons of the Forest", price: null, genre: "Survival", app: "1326470" }
];

const ps5Products = [
  { title: "Mortal Shell", price: 5000, listPrice: 3500, genre: "Action RPG", app: "1110910", description: "Please contact the seller to confirm the purchase method and the exact game version before ordering.", note: "Confirm compatibility and any account or console implications before purchasing. No setup can be guaranteed to have zero impact." },
  { title: "FC 27", price: 3500, listPrice: 2400, genre: "Sports · Limited offer", app: "", description: "This listing is not the full FIFA 27 release. The seller describes included modes as similar to FIFA features, including multiplayer Seasons. Confirm the exact game version and included features before purchasing.", note: "Ask the seller to confirm precisely which modes, online features, and version are included." },
  { title: "Call of Duty: Modern Warfare II", price: 6000, listPrice: 4700, genre: "Action", app: "1962663", description: "Please contact the seller to confirm the purchase method and the exact game version before ordering.", note: "Confirm the setup method, compatibility, and any account or console implications before purchasing. No setup can be guaranteed to have zero impact." }
];

const translations = {
  en: { more: "More...", home: "Home", steam: "Steam games", ps5: "PS5 games", signOut: "Sign out", choose: "Choose your platform", consolePicks: "Console picks · Prices in PKR", pcPicks: "PC picks · Prices in PKR", askFirst: "Questions? Contact the seller before purchase.", steamTitle: "Steam <span>games</span>", steamIntro: "Browse the collection. Contact us for availability and purchase details.", ps5Title: "PlayStation <span>5</span>", ps5Intro: "Limited selections, with details confirmed directly by the seller.", sort: "Sort", important: "IMPORTANT INFORMATION", steamRule: "Please use your own Steam account and follow Steam's official sharing features and rules. Read the product information carefully and contact us if you have questions.", interested: "Please contact us if you are interested:", checkBefore: "BEFORE YOU PURCHASE", ps5Rule: "Please confirm the game version, purchase method, compatibility, and any account or console implications with the seller. No setup can be guaranteed to have zero impact.", troubleshooting: "Troubleshooting", whatsapp: "WhatsApp", delivery: "DELIVERY", deliveryText: "We only deliver DVDs in Karachi, Pakistan.", payment: "PAYMENT", paymentText: "Payment accepted through Meezan Bank, Bank AL Habib, and Bank Alfalah. Meezan Bank is preferred.", settings: "SETTINGS", language: "Language", bubbleSpeed: "Bubble speed", directToSeller: "DIRECT TO THE SELLER", alwaysAvailable: "Available 24/7", twelveHours: "Available 12 hours a day", supportDesk: "SUPPORT DESK", problem: "PROBLEM", emailBox: "EMAIL BOX", emailNote: "Submitting opens your email app with the message addressed to our support email.", submitProblem: "Submit problem", viewDetails: "View details", contactToBuy: "SELECT WHATSAPP NUMBER TO BUY", askPrice: "Ask for price" },
  ur: { more: "مزید...", home: "ہوم", steam: "اسٹیم گیمز", ps5: "PS5 گیمز", signOut: "سائن آؤٹ", choose: "اپنا پلیٹ فارم منتخب کریں", consolePicks: "کنسول گیمز · قیمت پاکستانی روپے میں", pcPicks: "پی سی گیمز · قیمت پاکستانی روپے میں", askFirst: "سوالات کے لیے خریدنے سے پہلے رابطہ کریں۔", steamIntro: "گیمز دیکھیں۔ دستیابی اور خریداری کی تفصیل کے لیے رابطہ کریں۔", ps5Intro: "محدود گیمز؛ تفصیلات براہ راست فروخت کنندہ سے تصدیق کریں۔", sort: "ترتیب", important: "اہم معلومات", steamRule: "اپنا Steam اکاؤنٹ استعمال کریں اور Steam کے سرکاری شیئرنگ اصولوں پر عمل کریں۔ خریدنے سے پہلے معلومات پڑھیں اور سوالات کے لیے رابطہ کریں۔", interested: "دلچسپی ہو تو رابطہ کریں:", checkBefore: "خریدنے سے پہلے", ps5Rule: "گیم ورژن، خریداری کا طریقہ، مطابقت، اور اکاؤنٹ یا کنسول پر اثرات فروخت کنندہ سے تصدیق کریں۔", troubleshooting: "مسئلہ حل کریں", whatsapp: "واٹس ایپ", delivery: "ڈیلیوری", deliveryText: "ڈی وی ڈی صرف کراچی، پاکستان میں ڈیلیور ہوتی ہیں۔", payment: "ادائیگی", paymentText: "میزان بینک، بینک الحبیب اور بینک الفلاح میں ادائیگی دستیاب ہے۔ میزان بینک ترجیحی ہے۔", settings: "ترتیبات", language: "زبان", bubbleSpeed: "بلبلوں کی رفتار", directToSeller: "فروخت کنندہ سے براہ راست", alwaysAvailable: "24/7 دستیاب", twelveHours: "روزانہ 12 گھنٹے دستیاب", supportDesk: "مدد", problem: "مسئلہ", emailBox: "ای میل", emailNote: "جمع کرنے سے آپ کی ای میل ایپ میں پیغام کھلے گا۔", submitProblem: "مسئلہ بھیجیں", viewDetails: "تفصیل دیکھیں", contactToBuy: "خریدنے کے لیے واٹس ایپ منتخب کریں", askPrice: "قیمت معلوم کریں" },
  zh: { more: "更多...", home: "首页", steam: "Steam 游戏", ps5: "PS5 游戏", signOut: "退出登录", choose: "选择您的游戏平台", consolePicks: "主机精选 · 价格以 PKR 计", pcPicks: "电脑精选 · 价格以 PKR 计", askFirst: "购买前有疑问？请联系卖家。", steamIntro: "浏览游戏。请联系卖家确认库存和购买详情。", ps5Intro: "精选主机游戏，购买详情请直接向卖家确认。", sort: "排序", important: "重要信息", steamRule: "请使用您自己的 Steam 账户，并遵守 Steam 官方共享功能和规则。请仔细阅读商品信息，如有疑问请联系我们。", interested: "感兴趣请联系我们：", checkBefore: "购买前须知", ps5Rule: "购买前请与卖家确认游戏版本、购买方式、兼容性及账户或主机影响。无法保证设置完全没有影响。", troubleshooting: "故障排除", whatsapp: "WhatsApp", delivery: "配送", deliveryText: "DVD 仅在巴基斯坦卡拉奇配送。", payment: "付款", paymentText: "接受 Meezan Bank、Bank AL Habib 和 Bank Alfalah 付款，优先使用 Meezan Bank。", settings: "设置", language: "语言", bubbleSpeed: "气泡速度", directToSeller: "直接联系卖家", alwaysAvailable: "全天候服务", twelveHours: "每天服务 12 小时", supportDesk: "客服支持", problem: "问题", emailBox: "电子邮箱", emailNote: "提交后将打开您的邮件应用，并填写客服邮箱。", submitProblem: "提交问题", viewDetails: "查看详情", contactToBuy: "选择 WhatsApp 号码购买", askPrice: "询价" }
};

const localCoverPaths = {
  "Resident Evil Requiem": "images/resident-evil-requiem.jpg",
  "Mecha Chameleon": "images/meccha-chameleon.jpg",
  "Forza Horizon 6": "images/forza-horizon-6.jpg",
  "007 First Light": "images/007-first-light.jpg",
  "FC 27": "images/fc-27.jpg",
  "Crimson Desert": "images/crimson-desert.jpg"
};

const imageUrl = (product) => localCoverPaths[product.title]
  || (product.app
    ? `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${product.app}/library_600x900_2x.jpg`
    : "");

const authView = document.querySelector("#auth-view");
const storeView = document.querySelector("#store-view");
const authForm = document.querySelector("#auth-form");
const authName = document.querySelector("#auth-name");
const authEmail = document.querySelector("#auth-email");
const authPassword = document.querySelector("#auth-password");
const authError = document.querySelector("#auth-error");
const moreDialog = document.querySelector("#more-dialog");
const whatsappDialog = document.querySelector("#whatsapp-dialog");
const troubleDialog = document.querySelector("#trouble-dialog");
const productDialog = document.querySelector("#product-dialog");
let authMode = "signup";
let currentRoute = "hub";
let searchTerm = "";
let bubbleSpeed = 1;
let toastTimeout;

function showAuth() {
  authView.hidden = false;
  storeView.hidden = true;
  document.querySelector(".trouble-launch").hidden = true;
  document.querySelector(".whatsapp-launch").hidden = true;
}

function showStore() {
  authView.hidden = true;
  storeView.hidden = false;
  document.querySelector(".trouble-launch").hidden = false;
  document.querySelector(".whatsapp-launch").hidden = false;
  setRoute(window.location.hash.slice(2) || "hub", false);
  if (window.lucide) window.lucide.createIcons();
}

function setAuthMode(mode) {
  authMode = mode;
  const isSignup = mode === "signup";
  document.querySelector("#name-field").hidden = !isSignup;
  document.querySelector("#auth-title").innerHTML = isSignup ? "Create your<br /><span>player account.</span>" : "Welcome<br /><span>back, player.</span>";
  document.querySelector("#auth-submit-label").textContent = isSignup ? "Create account" : "Sign in";
  document.querySelector("#auth-switch-copy").textContent = isSignup ? "Already have an account?" : "New to THUNDERDEAL?";
  document.querySelector("#auth-switch").textContent = isSignup ? "Sign in" : "Create account";
  authPassword.autocomplete = isSignup ? "new-password" : "current-password";
  authError.textContent = "";
}

function getAccounts() {
  try { return JSON.parse(localStorage.getItem("thunderdeal.accounts") || "[]"); } catch { return []; }
}

async function hashPassword(password) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(password));
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  authError.textContent = "";
  if (!authForm.reportValidity()) return;
  const email = authEmail.value.trim().toLowerCase();
  const accounts = getAccounts();
  const passwordHash = await hashPassword(authPassword.value);
  if (authMode === "signup") {
    if (authPassword.value.length < 8) { authError.textContent = "Use at least 8 characters for the password."; return; }
    if (accounts.some((account) => account.email === email)) { authError.textContent = "An account with this email already exists. Please sign in."; return; }
    const account = { name: authName.value.trim(), email, passwordHash };
    localStorage.setItem("thunderdeal.accounts", JSON.stringify([...accounts, account]));
    localStorage.setItem("thunderdeal.session", JSON.stringify({ name: account.name, email: account.email }));
  } else {
    const account = accounts.find((item) => item.email === email && item.passwordHash === passwordHash);
    if (!account) { authError.textContent = "Email or password is incorrect for this browser's preview account."; return; }
    localStorage.setItem("thunderdeal.session", JSON.stringify({ name: account.name, email: account.email }));
  }
  authPassword.value = "";
  showStore();
});

document.querySelector("#auth-switch").addEventListener("click", () => setAuthMode(authMode === "signup" ? "signin" : "signup"));
document.querySelector("#signout").addEventListener("click", () => {
  localStorage.removeItem("thunderdeal.session");
  window.location.hash = "";
  showAuth();
});

function money(product) { return product.price == null ? "Ask for price" : `${product.price.toLocaleString("en-US")} PKR`; }

function fallbackStyle(product) {
  const genre = product.genre.toLowerCase();
  if (genre.includes("racing")) return "racing";
  if (genre.includes("horror")) return "horror";
  if (genre.includes("sport")) return "sport";
  if (genre.includes("rpg")) return "fantasy";
  return "action";
}

function cardTemplate(product, platform) {
  const ps5 = platform === "ps5";
  const fitArtwork = ["007 First Light", "Crimson Desert", "Mecha Chameleon", "FC 27"].includes(product.title);
  const price = money(product);
  const source = imageUrl(product);
  const art = source ? `<img src="${source}" alt="${product.title} cover" loading="lazy" onerror="this.style.display='none'" />` : "";
  return `<article class="product-card">
    <div class="poster ${fitArtwork ? "poster-fit" : ""}"><div class="poster-fallback fallback-${fallbackStyle(product)}"><i data-lucide="${ps5 ? "gamepad-2" : "joystick"}"></i></div>${art}<div class="poster-content"><span class="poster-platform ${ps5 ? "ps5-tag" : ""}"><i data-lucide="${ps5 ? "gamepad-2" : "monitor-play"}"></i>${ps5 ? "PLAYSTATION 5" : "STEAM"}</span><h2 class="poster-title">${product.title}</h2><span class="poster-genre">${product.genre}</span></div></div>
    <div class="product-info"><div class="product-price"><span>${price}</span>${product.genre.includes("Limited") ? "<small>LIMITED OFFER</small>" : ""}</div><button class="detail-button" type="button" data-product="${product.title}" data-platform="${platform}"><span data-i18n="viewDetails">View details</span><i data-lucide="arrow-up-right"></i></button></div>
  </article>`;
}

function visibleProducts(list) {
  if (!searchTerm) return [...list];
  return list.filter((product) => `${product.title} ${product.genre}`.toLowerCase().includes(searchTerm));
}

function sortProducts(list, selectId) {
  const sort = document.querySelector(`#${selectId}`).value;
  if (sort === "price-low") list.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
  if (sort === "price-high") list.sort((a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity));
  if (sort === "title") list.sort((a, b) => a.title.localeCompare(b.title));
  return list;
}

function renderCatalog(platform) {
  const isSteam = platform === "steam";
  const base = isSteam ? steamProducts : ps5Products;
  document.querySelector(`#${platform}-total`).textContent = String(base.length).padStart(2, "0");
  const list = sortProducts(visibleProducts(base), `${platform}-sort`);
  const container = document.querySelector(`#${platform}-products`);
  container.innerHTML = list.length ? list.map((product) => cardTemplate(product, platform)).join("") : '<div class="empty-results">No games found. Try another search.</div>';
  document.querySelector(`#${platform}-result-count`).textContent = `${String(list.length).padStart(2, "0")} ${list.length === 1 ? "title" : "titles"}`;
  if (window.lucide) window.lucide.createIcons();
}

function setRoute(route, scroll = true) {
  const valid = ["hub", "steam", "ps5"].includes(route) ? route : "hub";
  currentRoute = valid;
  document.querySelectorAll("[data-page]").forEach((page) => { page.hidden = page.dataset.page !== valid; });
  document.querySelectorAll("[data-route]").forEach((link) => link.classList.toggle("is-active", link.dataset.route === valid));
  if (valid === "steam" || valid === "ps5") renderCatalog(valid);
  if (scroll) window.scrollTo({ top: 0, behavior: "smooth" });
  if (window.lucide) window.lucide.createIcons();
}

document.addEventListener("click", (event) => {
  const routeLink = event.target.closest('a[href^="#/"]');
  if (routeLink) {
    const nextRoute = routeLink.getAttribute("href").slice(2);
    if (["hub", "steam", "ps5"].includes(nextRoute)) setRoute(nextRoute);
  }
  const detailButton = event.target.closest(".detail-button");
  if (detailButton) openProduct(detailButton.dataset.product, detailButton.dataset.platform);
  if (event.target.closest("[data-open-whatsapp]")) whatsappDialog.showModal();
});

window.addEventListener("hashchange", () => {
  const session = localStorage.getItem("thunderdeal.session");
  if (session) setRoute(window.location.hash.slice(2));
});

document.querySelectorAll("#steam-sort, #ps5-sort").forEach((select) => select.addEventListener("change", () => renderCatalog(select.id.startsWith("steam") ? "steam" : "ps5")));
document.querySelector("#game-search").addEventListener("input", (event) => {
  searchTerm = event.target.value.trim().toLowerCase();
  if (currentRoute === "steam" || currentRoute === "ps5") renderCatalog(currentRoute);
});
document.querySelector("#game-search").addEventListener("keydown", (event) => { if (event.key === "Enter" && currentRoute === "hub") setRoute("steam"); });

function getProduct(title, platform) {
  const products = platform === "ps5" ? ps5Products : steamProducts;
  return products.find((product) => product.title === title);
}

function openProduct(title, platform) {
  const product = getProduct(title, platform);
  if (!product) return;
  const isPs5 = platform === "ps5";
  const image = imageUrl(product);
  const detailArt = image ? `<img src="${image}" alt="${product.title} cover" onerror="this.style.display='none'" />` : `<div class="detail-art-fallback"><i data-lucide="${isPs5 ? "gamepad-2" : "joystick"}"></i>${product.title}</div>`;
  const important = isPs5
    ? `<div class="detail-warning"><strong>PLEASE CONFIRM BEFORE PURCHASING</strong><p>${product.note}</p></div>`
    : `<div class="detail-warning"><strong>IMPORTANT INFORMATION</strong><p>Please use your own Steam account and follow Steam's official sharing features and rules. Read the product information carefully and contact us if you have questions.</p></div>`;
  const description = product.description ? `<p>${product.description}</p>` : `<p>Curated ${product.genre.toLowerCase()} pick. Please contact the seller to confirm availability and purchase details.</p>`;
  document.querySelector("#product-detail").innerHTML = `<div class="detail-art">${detailArt}</div><div class="detail-content"><span class="detail-platform">${isPs5 ? "PLAYSTATION 5" : "STEAM · USE YOUR OWN ACCOUNT"}</span><h2 id="product-title">${product.title}</h2>${description}<div class="detail-price">${money(product)}${product.genre.includes("Limited") ? " <span>LIMITED OFFER</span>" : ""}</div>${important}<p class="number-prompt">${translations[document.body.dataset.language || "en"].contactToBuy}</p><div class="detail-contact"><a href="https://wa.me/923126674991?text=${encodeURIComponent(`Hi, I'm interested in ${product.title}.`)}" target="_blank" rel="noopener noreferrer">+92 312 6674991 · 24/7</a><a href="https://wa.me/923453152433?text=${encodeURIComponent(`Hi, I'm interested in ${product.title}.`)}" target="_blank" rel="noopener noreferrer">+92 345 3152433 · 12/7</a></div></div>`;
  productDialog.showModal();
  if (window.lucide) window.lucide.createIcons();
}

document.querySelectorAll("[data-close-dialog]").forEach((button) => button.addEventListener("click", () => button.closest("dialog").close()));
document.querySelector("#more-open").addEventListener("click", () => moreDialog.showModal());
document.querySelector("#whatsapp-open").addEventListener("click", () => whatsappDialog.showModal());
document.querySelector("#trouble-open").addEventListener("click", () => troubleDialog.showModal());

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 3500);
}

document.querySelector("#trouble-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#trouble-email").value.trim();
  const problem = document.querySelector("#problem-text").value.trim();
  if (!email || !problem) return;
  const subject = encodeURIComponent("THUNDERDEAL 2.5 troubleshooting request");
  const body = encodeURIComponent(`From: ${email}\n\nProblem:\n${problem}`);
  window.location.href = `mailto:arhamadnan1520@gmail.com?subject=${subject}&body=${body}`;
  document.querySelector("#trouble-hint").textContent = "Your email app should open with the support request. If it did not, email arhamadnan1520@gmail.com directly.";
});

function applyLanguage(language) {
  const selected = translations[language] ? language : "en";
  document.body.dataset.language = selected;
  document.documentElement.lang = selected;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translated = translations[selected][element.dataset.i18n];
    if (translated) element.innerHTML = translated;
  });
  document.querySelector("#language-select").value = selected;
  localStorage.setItem("thunderdeal.language", selected);
  if (selected === "ur") document.documentElement.dir = "rtl";
  else document.documentElement.dir = "ltr";
  if (window.lucide) window.lucide.createIcons();
}

document.querySelector("#language-select").addEventListener("change", (event) => applyLanguage(event.target.value));
document.querySelector("#bubble-speed").addEventListener("input", (event) => {
  bubbleSpeed = Number(event.target.value);
  document.querySelector("#speed-value").value = `${bubbleSpeed.toFixed(1)}×`;
  localStorage.setItem("thunderdeal.bubbleSpeed", String(bubbleSpeed));
});

const bubbleCanvas = document.querySelector("#bubble-field");
const bubbleContext = bubbleCanvas.getContext("2d");
const pointerGlow = document.querySelector(".pointer-glow");
let width = 0;
let height = 0;
let cursor = { x: -1000, y: -1000, active: false };
let bubbles = [];
let lastSpawn = 0;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function resizeCanvas() {
  const scale = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  bubbleCanvas.width = width * scale;
  bubbleCanvas.height = height * scale;
  bubbleContext.setTransform(scale, 0, 0, scale, 0, 0);
  if (bubbles.length === 0) {
    bubbles = Array.from({ length: Math.min(42, Math.round(width / 24)) }, () => createBubble(Math.random() * width, Math.random() * height, false));
  }
}

function createBubble(x, y, nearPointer) {
  const radius = nearPointer ? 2 + Math.random() * 8 : 2 + Math.random() * 7;
  return { x, y, radius, drift: (Math.random() - .5) * .35, rise: .12 + Math.random() * .43, alpha: .09 + Math.random() * .26, phase: Math.random() * Math.PI * 2, life: nearPointer ? 340 + Math.random() * 260 : Infinity };
}

function drawBubbles() {
  bubbleContext.clearRect(0, 0, width, height);
  const active = cursor.active;
  for (let index = bubbles.length - 1; index >= 0; index -= 1) {
    const bubble = bubbles[index];
    const distance = Math.hypot(bubble.x - cursor.x, bubble.y - cursor.y);
    const attracted = active && distance < 190;
    const boost = attracted ? (1 - distance / 190) * .5 : 0;
    bubble.y -= (bubble.rise + boost) * (reducedMotion ? 0 : bubbleSpeed);
    bubble.x += bubble.drift * (1 + boost * 3);
    bubble.phase += .012;
    bubble.life -= 1;
    if (bubble.y < -20 || bubble.life <= 0) {
      if (bubble.life === Infinity) { bubbles[index] = createBubble(Math.random() * width, height + 12, false); continue; }
      bubbles.splice(index, 1);
      continue;
    }
    const proximity = attracted ? 1 + boost * 2 : 1;
    const radius = bubble.radius * proximity;
    const alpha = bubble.alpha * (attracted ? 1 + boost : 1);
    const gradient = bubbleContext.createRadialGradient(bubble.x - radius * .35, bubble.y - radius * .4, .2, bubble.x, bubble.y, radius);
    gradient.addColorStop(0, `rgba(255, 113, 142, ${Math.min(.62, alpha + .24)})`);
    gradient.addColorStop(.28, `rgba(191, 36, 68, ${Math.min(.65, alpha + .12)})`);
    gradient.addColorStop(1, `rgba(79, 10, 28, ${alpha})`);
    bubbleContext.beginPath();
    bubbleContext.fillStyle = gradient;
    bubbleContext.arc(bubble.x, bubble.y, radius, 0, Math.PI * 2);
    bubbleContext.fill();
  }
  if (active && performance.now() - lastSpawn > 100 && bubbles.length < 120) {
    for (let index = 0; index < 3; index += 1) bubbles.push(createBubble(cursor.x + (Math.random() - .5) * 145, cursor.y + (Math.random() - .5) * 130, true));
    lastSpawn = performance.now();
  }
  if (!reducedMotion) requestAnimationFrame(drawBubbles);
}

window.addEventListener("resize", resizeCanvas);
window.addEventListener("pointermove", (event) => {
  cursor = { x: event.clientX, y: event.clientY, active: true };
  pointerGlow.style.left = `${event.clientX}px`;
  pointerGlow.style.top = `${event.clientY}px`;
  pointerGlow.style.opacity = "1";
});
window.addEventListener("pointerleave", () => { cursor.active = false; pointerGlow.style.opacity = ".25"; });
resizeCanvas();
drawBubbles();

document.querySelector("#language-select").value = localStorage.getItem("thunderdeal.language") || "en";
applyLanguage(document.querySelector("#language-select").value);
const storedSpeed = Number(localStorage.getItem("thunderdeal.bubbleSpeed"));
if (storedSpeed) {
  bubbleSpeed = storedSpeed;
  document.querySelector("#bubble-speed").value = String(storedSpeed);
  document.querySelector("#speed-value").value = `${storedSpeed.toFixed(1)}×`;
}

if (window.lucide) window.lucide.createIcons();
if (localStorage.getItem("thunderdeal.session")) showStore();
else showAuth();