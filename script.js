// Toggle menu bahasa 🌐
const langBtn = document.getElementById("langBtn");
const langMenu = document.getElementById("langMenu");

function toggleLangMenu() {
  langMenu.classList.toggle("active");
}

document.addEventListener("click", (e) => {
  if (!langMenu.contains(e.target) && e.target !== langBtn) {
    langMenu.classList.remove("active");
  }
});

// 🔤 Data terjemahan
const translations = {
  id: {
    gamesIPlay: "Aku Main",
    iSell: "Aku Jual",
    donation: "Dukung Aku",
    findMe: "Cari Aku",
    flag: "🇮🇩"
  },
  en: {
    gamesIPlay: "Games I Play",
    iSell: "I Sell",
    donation: "Support Me",
    findMe: "Find Me",
    flag: "🇬🇧"
  },
  mn: {
    gamesIPlay: "Game nan Ambo Mainkan",
    iSell: "Ambo Jua",
    donation: "Donasi",
    findMe: "Cari Ambo",
    flag: "🥥"
  },
  my: {
    gamesIPlay: "Permainan Saya",
    iSell: "Saya Jual",
    donation: "Sumbangan",
    findMe: "Temui Saya",
    flag: "🌺"
  },
  jw: {
    gamesIPlay: "Game sing Tak Main",
    iSell: "Aku Dodol",
    donation: "Sumbang Aku",
    findMe: "Golek Aku",
    flag: "🦜"
  },
};

// 🔁 Fungsi ubah bahasa
function switchLanguage(lang) {
  const texts = translations[lang] || translations.id;
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (texts[key]) {
      el.textContent = texts[key];
    }
  });
  updateLangIcon(lang);
  langMenu.classList.remove("active");
}

// 🌐 Ganti emoji bendera
function updateLangIcon(lang) {
  const flag = translations[lang].flag;
  langBtn.textContent = flag + " 🌐";
}

// Set default ke Indonesia
switchLanguage("id");
