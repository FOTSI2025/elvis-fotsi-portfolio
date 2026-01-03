// Traductions FR / EN pour tout le site (contenu du CV, éducation étendue et projets catégorisés)
const translations = {
  fr: {
    meta: { title: "Elvis Romarick Fotsi | Analyste de données & Statisticien", description: "...", keywords: "..." },
    header: { name: "Elvis Romarick Fotsi", subtitle: "Analyste de données | Statisticien", location: "Québec, Canada" },
    links: { email: "Email", linkedin: "LinkedIn", cv_fr: "Télécharger CV (FR)", cv_en: "Télécharger CV (EN)" },
    about: { title: "À propos", content: "Dynamique analyste de données..." },
    skills: { title: "Compétences techniques", items: ["R","SAS","Python","Excel","STATA","SPSS","SQL","Google Chrome","Office 365","Power BI","Bash","Airflow","Jasper","Colab","Git","Procédures ETL/ELT","Méthodes d'analyse quantitatives et qualitatives"] },
    experience: { title: "Expérience professionnelle", jobs: [ /* unchanged jobs as before */ ] },
    projects: {
      title: "Projets",
      titles: {
        visualization: "Visualisation",
        ml: "Machine Learning",
        automation: "Automatisation",
        other: "Autres"
      },
      categories: {
        visualization: [
          { title: "Modélisation économétrique – Banque Nationale du Canada", desc: "Estimation du volume de transactions internationales des investisseurs canadiens à l’aide de modèles économétriques.", tags: "R • Économétrie • Présentation exécutive" }
        ],
        ml: [
          { title: "Analyse du risque systémique financier", desc: "Simulation Monte Carlo, test de causalité de Granger et analyse de dépendance entre marchés financiers.", tags: "Python • R • Finance" }
        ],
        automation: [
          { title: "Pipelines de collecte et traitement", desc: "Construction de pipelines pour Bloomberg, Datastream, investing.com ; traitements automatisés.", tags: "Python • Bash • Airflow" }
        ],
        other: [
          { title: "Analyse des politiques de santé publique", desc: "Évaluation des politiques de financement hospitalier au Québec à partir de données administratives.", tags: "SAS • Excel • Analyse publique" }
        ]
      }
    },
    education: {
      title: "Formation",
      items: [
        "Maîtrise en statistique (science/analyse de données) — Université Laval, Québec — 09/2023 – 04/2025",
        "Baccalauréat en probabilité et statistique — Institut Sous‑régional de Statistique et d'Économie Appliquée, Yaoundé — 09/2010 – 05/2014",
        "Formation 1",
        "Formation 2",
        "Formation 3",
        "Formation 4",
        "Formation 5",
        "Formation 6",
        "Formation 7",
        "Formation 8",
        "Formation 9",
        "Formation 10"
      ]
    },
    activities: { title: "Activités et engagements sociaux", items: ["Bénévole à Alliance Action Bénévole","Bénévole à Return2Work"] },
    contact: { title: "Contact", email: "Email : dufotsi2020@gmail.com", phone: "Téléphone : +1 581 459 6011", linkedin: "www.linkedin.com/in/ElvisFotsi" },
    footer: "© 2026 Elvis Romarick Fotsi"
  },
  en: {
    meta: { title: "Elvis Romarick Fotsi | Data Analyst & Statistician", description: "...", keywords: "..." },
    header: { name: "Elvis Romarick Fotsi", subtitle: "Data Analyst | Statistician", location: "Québec, Canada" },
    links: { email: "Email", linkedin: "LinkedIn", cv_fr: "Download CV (FR)", cv_en: "Download CV (EN)" },
    about: { title: "About", content: "Dynamic data analyst holding a master’s degree in statistics..." },
    skills: { title: "Technical Skills", items: ["R","SAS","Python","Excel","STATA","SPSS","SQL","Google Chrome","Office 365","Power BI","Bash","Airflow","Jasper","Colab","Git","ETL/ELT procedures","Quantitative and qualitative analysis methods"] },
    experience: { title: "Professional Experience", jobs: [ /* unchanged jobs as before */ ] },
    projects: {
      title: "Projects",
      titles: {
        visualization: "Visualization",
        ml: "Machine Learning",
        automation: "Automation",
        other: "Other"
      },
      categories: {
        visualization: [
          { title: "Econometric modeling – National Bank of Canada", desc: "Estimated the volume of international transactions of Canadian investors using econometric models.", tags: "R • Econometrics • Executive presentation" }
        ],
        ml: [
          { title: "Financial systemic risk analysis", desc: "Monte Carlo simulation, Granger causality testing and dependence analysis between financial markets.", tags: "Python • R • Finance" }
        ],
        automation: [
          { title: "Data collection & processing pipelines", desc: "Built and automated pipelines for Bloomberg, Datastream, investing.com.", tags: "Python • Bash • Airflow" }
        ],
        other: [
          { title: "Public health policy analysis", desc: "Evaluation of hospital funding policies in Québec using administrative data.", tags: "SAS • Excel • Public analysis" }
        ]
      }
    },
    education: {
      title: "Education",
      items: [
        "Master's in Statistics (Data Science) — Université Laval, Québec — 09/2023 – 04/2025",
        "Bachelor in Probability and Statistics — Institut Sous‑régional de Statistique et d'Économie Appliquée, Yaoundé — 09/2010 – 05/2014",
        "Education 1",
        "Education 2",
        "Education 3",
        "Education 4",
        "Education 5",
        "Education 6",
        "Education 7",
        "Education 8",
        "Education 9",
        "Education 10"
      ]
    },
    activities: { title: "Activities and volunteer work", items: ["Volunteer at Alliance Action Bénévole","Volunteer at Return2Work"] },
    contact: { title: "Contact", email: "Email: dufotsi2020@gmail.com", phone: "Phone: +1 581 459 6011", linkedin: "www.linkedin.com/in/ElvisFotsi" },
    footer: "© 2026 Elvis Romarick Fotsi"
  }
};

// helper utilities and rendering functions
function getByPath(obj, path) { return path.split('.').reduce((o,k)=> (o? o[k]: undefined), obj); }

function renderListInto(el, listData, tr) {
  // If listData is an array -> render like before
  if (Array.isArray(listData)) {
    if (el.tagName.toLowerCase() === 'ul' || el.tagName.toLowerCase() === 'ol') {
      el.innerHTML = '';
      listData.forEach(it => {
        const li = document.createElement('li');
        li.textContent = (typeof it === 'string') ? it : (it.title || JSON.stringify(it));
        el.appendChild(li);
      });
      return;
    } else {
      // container for complex items
      el.innerHTML = '';
      listData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        if (item.title) { const h3 = document.createElement('h3'); h3.textContent = item.title; card.appendChild(h3); }
        if (item.company || item.period) { const span = document.createElement('span'); span.textContent = [item.company || '', item.period || ''].filter(Boolean).join(' | '); card.appendChild(span); }
        if (item.desc) { const p = document.createElement('p'); p.textContent = item.desc; card.appendChild(p); }
        if (Array.isArray(item.bullets)) { const ul = document.createElement('ul'); item.bullets.forEach(b => { const li=document.createElement('li'); li.textContent=b; ul.appendChild(li); }); card.appendChild(ul); }
        if (item.tags) { const t = document.createElement('span'); t.className = 'tags'; t.textContent = item.tags; card.appendChild(t); }
        el.appendChild(card);
      });
      return;
    }
  }

  // If listData is an object -> treat as categories (projects)
  if (listData && typeof listData === 'object') {
    el.innerHTML = '';
    // titles for categories should be in tr (passed by caller)
    const categoryTitles = (tr && tr.titles) ? tr.titles : {};
    Object.keys(listData).forEach(catKey => {
      const catItems = listData[catKey];
      const catTitle = categoryTitles[catKey] || catKey;
      const catHeader = document.createElement('h3');
      catHeader.textContent = catTitle;
      el.appendChild(catHeader);

      // render each project inside this category
      if (Array.isArray(catItems)) {
        catItems.forEach(item => {
          const card = document.createElement('div');
          card.className = 'card';
          if (item.title) { const h4 = document.createElement('h4'); h4.textContent = item.title; card.appendChild(h4); }
          if (item.desc) { const p = document.createElement('p'); p.textContent = item.desc; card.appendChild(p); }
          if (item.tags) { const t = document.createElement('span'); t.className = 'tags'; t.textContent = item.tags; card.appendChild(t); }
          el.appendChild(card);
        });
      }
    });
    return;
  }
}

function translatePage(lang) {
  const tr = translations[lang] || translations['fr'];
  document.documentElement.lang = lang;

  if (tr.meta && tr.meta.title) document.title = tr.meta.title;
  const metaDesc = document.querySelector('meta[name=\"description\"]');
  if (metaDesc && tr.meta && tr.meta.description) metaDesc.setAttribute('content', tr.meta.description);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = getByPath(tr, key);
    if (val !== undefined) el.textContent = val;
  });

  // lists / dynamic content
  document.querySelectorAll('[data-i18n-list]').forEach(el => {
    const listKey = el.getAttribute('data-i18n-list'); // e.g. "education.items" or "projects"
    const listData = getByPath(tr, listKey) || getByPath(tr, `${listKey}.items`) || getByPath(tr, listKey);
    if (!listData) return;
    // pass tr sub-object if available (for projects titles)
    const trSub = getByPath(tr, listKey) || tr[listKey];
    renderListInto(el, listData, trSub);
  });

  // Update CV button labels
  if (getByPath(tr,'links.cv_fr')) document.querySelectorAll('#cv-fr,#cv-fr-contact').forEach(el=> el.textContent = getByPath(tr,'links.cv_fr'));
  if (getByPath(tr,'links.cv_en')) document.querySelectorAll('#cv-en,#cv-en-contact').forEach(el=> el.textContent = getByPath(tr,'links.cv_en'));

  localStorage.setItem('site-lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('site-lang') || 'fr';
  translatePage(saved);

  const btnFr = document.getElementById('btn-fr'); const btnEn = document.getElementById('btn-en');
  if (btnFr) btnFr.addEventListener('click', () => translatePage('fr'));
  if (btnEn) btnEn.addEventListener('click', () => translatePage('en'));
});
