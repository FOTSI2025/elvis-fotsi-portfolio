// Traductions FR / EN pour tout le site
const translations = {
  fr: {
    meta: {
      title: "Elvis Romarick Fotsi | Analyste de données & Statisticien",
      description: "Analyste de données, statisticien et professionnel en science des données basé au Québec, Canada. Expert en Python, R, Power BI, SAS, SQL.",
      keywords: "Analyste de données, Statisticien, Data Science, Python, R, Power BI, Québec"
    },
    header: {
      name: "Elvis Romarick Fotsi",
      subtitle: "Analyste de données | Statisticien",
      location: "Québec, Canada"
    },
    links: { email: "Email", linkedin: "LinkedIn" },
    about: {
      title: "À propos",
      content: "Analyste de données dynamique titulaire d’une maîtrise en statistique, avec une solide expérience en Python, R, Power BI, SAS et Excel. Spécialisé dans la transformation de données complexes en informations exploitables pour la prise de décision."
    },
    skills: {
      title: "Compétences techniques",
      items: ["Python","R","SAS","SQL","Power BI","Excel","SPSS","ETL / ELT","Git / GitHub","Économétrie","Bases du Machine Learning"]
    },
    experience: {
      title: "Expérience professionnelle",
      jobs: [
        {
          title: "Contrôleur de projet – Levio Conseils",
          company: "Ministère de la Cybersécurité et du Numérique",
          period: "2025–Présent",
          bullets: ["Analyse des données d’assiduité des employés","Tableaux de bord Power BI","Appui à la planification stratégique"]
        },
        {
          title: "Analyste de données – MSSS Québec",
          company: "MSSS Québec",
          period: "2024–2025",
          bullets: ["Analyse de la base MedEcho","Financement axé sur le patient","Traitement, imputation et validation des données"]
        }
      ]
    },
    projects: {
      title: "Projets",
      items: [
        { title: "📊 Modélisation économétrique – Banque Nationale du Canada", desc: "Estimation du volume de transactions internationales des investisseurs canadiens à l’aide de modèles économétriques.", tags: "R • Économétrie • Présentation exécutive" },
        { title: "📈 Analyse du risque systémique financier", desc: "Simulation Monte Carlo, test de causalité de Granger et analyse de dépendance entre marchés financiers.", tags: "Python • R • Finance" },
        { title: "🏥 Analyse des politiques de santé publique", desc: "Évaluation des politiques de financement hospitalier au Québec à partir de données administratives.", tags: "SAS • Excel • Analyse publique" }
      ]
    },
    education: {
      title: "Formation",
      items: [
        "Maîtrise en statistique (Data Science) — Université Laval, Québec — 2025",
        "Baccalauréat en probabilité et statistique — ISSEA, Cameroun"
      ]
    },
    contact: {
      title: "Contact",
      email: "Email : dufotsi2020@gmail.com",
      phone: "Téléphone : +1 581 459 6011"
    },
    footer: "© 2026 Elvis Romarick Fotsi"
  },

  en: {
    meta: {
      title: "Elvis Romarick Fotsi | Data Analyst & Statistician",
      description: "Data analyst, statistician and data science professional based in Québec, Canada. Expert in Python, R, Power BI, SAS, SQL.",
      keywords: "Data Analyst, Statistician, Data Science, Python, R, Power BI, Québec"
    },
    header: {
      name: "Elvis Romarick Fotsi",
      subtitle: "Data Analyst | Statistician",
      location: "Québec, Canada"
    },
    links: { email: "Email", linkedin: "LinkedIn" },
    about: {
      title: "About",
      content: "Dynamic data analyst with a master’s degree in statistics, experienced in Python, R, Power BI, SAS, and Excel. Specialized in transforming complex data into actionable insights to support decision-making."
    },
    skills: {
      title: "Technical Skills",
      items: ["Python","R","SAS","SQL","Power BI","Excel","SPSS","ETL / ELT","Git / GitHub","Econometrics","Machine Learning basics"]
    },
    experience: {
      title: "Professional Experience",
      jobs: [
        {
          title: "Project Controller – Levio Consulting",
          company: "Ministry of Cybersecurity and Digital",
          period: "2025–Present",
          bullets: ["Employee attendance data analysis","Power BI dashboards","Support for strategic planning"]
        },
        {
          title: "Data Analyst – MSSS Québec",
          company: "MSSS Québec",
          period: "2024–2025",
          bullets: ["MedEcho database analysis","Patient-based funding","Data processing, imputation and validation"]
        }
      ]
    },
    projects: {
      title: "Projects",
      items: [
        { title: "📊 Econometric modeling – National Bank of Canada", desc: "Estimated the volume of international transactions of Canadian investors using econometric models.", tags: "R • Econometrics • Executive presentation" },
        { title: "📈 Financial systemic risk analysis", desc: "Monte Carlo simulation, Granger causality testing and dependence analysis between financial markets.", tags: "Python • R • Finance" },
        { title: "🏥 Public health policy analysis", desc: "Evaluation of hospital funding policies in Québec using administrative data.", tags: "SAS • Excel • Public analysis" }
      ]
    },
    education: {
      title: "Education",
      items: [
        "Master’s in Statistics (Data Science) — Université Laval, Québec — 2025",
        "Bachelor in Probability and Statistics — ISSEA, Cameroon"
      ]
    },
    contact: {
      title: "Contact",
      email: "Email: dufotsi2020@gmail.com",
      phone: "Phone: +1 581 459 6011"
    },
    footer: "© 2026 Elvis Romarick Fotsi"
  }
};

// utilitaire pour accéder à une clé imbriquée
function getByPath(obj, path) {
  return path.split('.').reduce((o, k) => (o ? o[k] : undefined), obj);
}

function renderListInto(el, listData) {
  // Accept multiple shapes: array, object with .items, object-of-strings
  let items = [];
  if (Array.isArray(listData)) items = listData;
  else if (listData && Array.isArray(listData.items)) items = listData.items;
  else if (listData && typeof listData === 'object') items = Object.values(listData);

  if (el.tagName.toLowerCase() === 'ul' || el.tagName.toLowerCase() === 'ol') {
    el.innerHTML = '';
    items.forEach(it => {
      const li = document.createElement('li');
      li.textContent = (typeof it === 'string') ? it : (it.title || JSON.stringify(it));
      el.appendChild(li);
    });
    return;
  }

  // containers for complex cards (jobs, projects, education)
  el.innerHTML = '';
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    if (item.title) {
      const h3 = document.createElement('h3');
      h3.textContent = item.title;
      card.appendChild(h3);
    }
    if (item.company || item.period) {
      const span = document.createElement('span');
      span.textContent = [item.company || '', item.period || ''].filter(Boolean).join(' | ');
      card.appendChild(span);
    }
    if (item.desc) {
      const p = document.createElement('p');
      p.textContent = item.desc;
      card.appendChild(p);
    }
    if (Array.isArray(item.bullets)) {
      const ul = document.createElement('ul');
      item.bullets.forEach(b => {
        const li = document.createElement('li');
        li.textContent = b;
        ul.appendChild(li);
      });
      card.appendChild(ul);
    }
    if (item.tags) {
      const t = document.createElement('span');
      t.className = 'tags';
      t.textContent = item.tags;
      card.appendChild(t);
    }
    el.appendChild(card);
  });
}

function translatePage(lang) {
  const tr = translations[lang] || translations['fr'];
  document.documentElement.lang = lang;

  // meta & title
  if (tr.meta) {
    if (tr.meta.title) document.title = tr.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && tr.meta.description) metaDesc.setAttribute('content', tr.meta.description);
    const metaKeys = document.querySelector('meta[name="keywords"]');
    if (metaKeys && tr.meta.keywords) metaKeys.setAttribute('content', tr.meta.keywords);
  }

  // simples remplacements textuels
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = getByPath(tr, key);
    if (val !== undefined) el.textContent = val;
  });

  // listes / contenus dynamiques
  document.querySelectorAll('[data-i18n-list]').forEach(el => {
    const listKey = el.getAttribute('data-i18n-list');
    const listData = getByPath(tr, listKey) || getByPath(tr, `${listKey}.items`);
    if (!listData) return;
    renderListInto(el, listData);
  });

  localStorage.setItem('site-lang', lang);
}

// wiring des boutons
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('site-lang') || 'fr';
  translatePage(saved);

  const btnFr = document.getElementById('btn-fr');
  const btnEn = document.getElementById('btn-en');
  if (btnFr) btnFr.addEventListener('click', () => translatePage('fr'));
  if (btnEn) btnEn.addEventListener('click', () => translatePage('en'));
});
