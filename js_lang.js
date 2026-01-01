let currentLang = "fr";

function switchLang() {
  currentLang = currentLang === "fr" ? "en" : "fr";

  document.querySelectorAll("[data-fr]").forEach(el => {
    el.textContent = el.dataset[currentLang];
  });

  document.documentElement.lang = currentLang;
}

switchLang();
