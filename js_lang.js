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
    links: { email: "Email", linkedin: "LinkedIn", cv_fr: "Télécharger CV (FR)", cv_en: "Télécharger CV (EN)" },
    about: {
      title: "À propos",
      content: "Dynamique analyste de données et titulaire d’une maîtrise en statistique. Expérience dans l'utilisation d'outils tels que Python, R, Power BI, Excel. Contribution à la production des rapports exploitables qui ont amélioré la prise de décision au sein de diverses organisations. Bonne connaissance des méthodes d'apprentissage automatique et capable de transformer des données complexes en insights significatifs. Prêt à contribuer à la réussite d'une entreprise avec des analyses précises et stratégiques."
    },
    skills: {
      title: "Compétences techniques",
      items: ["R","SAS","Python","Excel","STATA","SPSS","SQL","Google Chrome","Office 365","Power BI","Bash","Airflow","Jasper","Colab","Git","Procédures ETL/ELT","Méthodes d'analyse quantitatives et qualitatives"]
    },
    experience: {
      title: "Expérience professionnelle",
      jobs: [
        {
          title: "Contrôleur de projet – Levio Conseils Inc.",
          company: "Ministère de la Cybersécurité et du Numérique",
          period: "04/08/2025 – Présent",
          bullets: [
            "Accompagner le gestionnaire dans la planification et le suivi de ses tâches au quotidien.",
            "Procéder à l’analyse des données sur l’assiduité des employés.",
            "Procéder au traitement des demandes (paiement, réservation, accueil de nouveaux employés, etc.) soumis au gestionnaire.",
            "Technologies utilisées : Power BI, Word, Excel, OneNote, Microsoft Planner"
          ]
        },
        {
          title: "Participant – 15e atelier de résolution de problèmes industriels (Banque Nationale)",
          company: "Centre de recherches mathématiques et GERAD, Montréal, Canada",
          period: "02/06/2025 – 06/06/2025",
          bullets: [
            "Contribuer à améliorer le processus décisionnel de la Banque Nationale du Canada basé sur la donnée.",
            "Contribuer à créer un modèle économétrique pour estimer le volume de transactions des investisseurs canadiens.",
            "Rédiger la démarche méthodologique et présenter les résultats obtenus.",
            "Technologies utilisées : R, Canva, Overleaf"
          ]
        },
        {
          title: "Auxiliaire de recherche (Temps partiel, occasionnel)",
          company: "Université Laval, Québec, Canada",
          period: "03/2025 – 08/2025",
          bullets: [
            "Construire des pipelines de collecte des données (Bloomberg, Datastream, investing.com) et procéder au traitement de ces données.",
            "Analyser les cours des actions et modéliser l'influence des États‑Unis sur les rendements (Monte Carlo, test de Granger, etc.).",
            "Revue de littérature, validation des données et ajustements des pipelines.",
            "Présenter les résultats.",
            "Technologies utilisées : R, Python, Excel, GitHub"
          ]
        },
        {
          title: "Analyste de données (emploi étudiant)",
          company: "Ministère de la Santé et des Services Sociaux, Québec, Canada",
          period: "01/2024 – 01/2025",
          bullets: [
            "Revue de la littérature pour comprendre la banque de données MedEcho et la politique de financement axée sur le patient.",
            "Extraction, traitement/imputation et validation des variables d'intérêt pour produire des rapports (SAS, Excel).",
            "Contribuer à produire un rapport sur la politique d'hospitalisation à domicile.",
            "Technologies utilisées : SAS, Excel"
          ]
        },
        {
          title: "Statisticien — Suivi de l’exécution des projets",
          company: "Ministère de l’économie, de la planification et d'aménagement du territoire, Yaoundé, Cameroun",
          period: "03/2015 – 02/2023",
          bullets: [
            "Produire des rapports périodiques (mensuels, trimestriels, annuels) sur l'exécution des projets d'investissement public.",
            "Concevoir des outils de collecte et de traitement des données pour le suivi des projets.",
            "Organiser des conférences d'évaluation des projets et rédiger des comptes rendus.",
            "Élaborer des exposés thématiques (PowerPoint) et des guides méthodologiques.",
            "Technologies utilisées : SPSS, Excel, Power BI, R"
          ]
        }
      ]
    },
    projects: {
      title: "Projets",
      items: [
        { title: "Modélisation économétrique – Banque Nationale du Canada", desc: "Estimation du volume de transactions internationales des investisseurs canadiens à l’aide de modèles économétriques.", tags: "R • Économétrie • Présentation exécutive" },
        { title: "Analyse du risque systémique financier", desc: "Simulation Monte Carlo, test de causalité de Granger et analyse de dépendance entre marchés financiers.", tags: "Python • R • Finance" },
        { title: "Analyse des politiques de santé publique", desc: "Évaluation des politiques de financement hospitalier au Québec à partir de données administratives.", tags: "SAS • Excel • Analyse publique" }
      ]
    },
    education: {
      title: "Formation",
      items: [
        "Maîtrise en statistique (science/analyse de données) — Université Laval, Québec — 09/2023 – 04/2025",
        "Baccalauréat en probabilité et statistique — Institut Sous‑régional de Statistique et d'Économie Appliquée, Yaoundé — 09/2010 – 05/2014"
      ]
    },
    activities: {
      title: "Activités et engagements sociaux",
      items: ["Bénévole à Alliance Action Bénévole","Bénévole à Return2Work"]
    },
    contact: {
      title: "Contact",
      email: "Email : dufotsi2020@gmail.com",
      phone: "Téléphone : +1 581 459 6011",
      linkedin: "www.linkedin.com/in/ElvisFotsi"
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
    links: { email: "Email", linkedin: "LinkedIn", cv_fr: "Download CV (FR)", cv_en: "Download CV (EN)" },
    about: {
      title: "About",
      content: "Dynamic data analyst holding a master’s degree in statistics. Experienced with tools such as Python, R, Power BI and Excel. Contributed to actionable reports that improved decision-making across organizations. Good knowledge of machine learning methods and able to turn complex data into meaningful insights. Ready to contribute to a company's success with accurate, strategic analyses."
    },
    skills: {
      title: "Technical Skills",
      items: ["R","SAS","Python","Excel","STATA","SPSS","SQL","Google Chrome","Office 365","Power BI","Bash","Airflow","Jasper","Colab","Git","ETL/ELT procedures","Quantitative and qualitative analysis methods"]
    },
    experience: {
      title: "Professional Experience",
      jobs: [
        {
          title: "Project Controller – Levio Conseils Inc.",
          company: "Ministry of Cybersecurity and Digital",
          period: "04/08/2025 – Present",
          bullets: [
            "Support manager in daily planning and task follow-up.",
            "Analyze employee attendance data.",
            "Process requests (payment, booking, onboarding, etc.) submitted to the manager.",
            "Technologies used: Power BI, Word, Excel, OneNote, Microsoft Planner"
          ]
        },
        {
          title: "Participant – 15th Industrial Problem Solving Workshop (National Bank)",
          company: "Centre de recherches mathématiques and GERAD, Montréal, Canada",
          period: "02/06/2025 – 06/06/2025",
          bullets: [
            "Helped improve National Bank of Canada's data-driven decision process.",
            "Contributed to an econometric model estimating transaction volumes of Canadian investors.",
            "Wrote methodology and presented results.",
            "Technologies used: R, Canva, Overleaf"
          ]
        },
        {
          title: "Research Assistant (part-time, occasional)",
          company: "Université Laval, Québec, Canada",
          period: "03/2025 – 08/2025",
          bullets: [
            "Built data collection pipelines (Bloomberg, Datastream, investing.com) and processed data.",
            "Analyzed stock prices and modeled US influence on returns (Monte Carlo, Granger tests, etc.).",
            "Literature review, data validation and pipeline adjustments.",
            "Presented results.",
            "Technologies used: R, Python, Excel, GitHub"
          ]
        },
        {
          title: "Data Analyst (student position)",
          company: "Ministère de la Santé et des Services Sociaux, Québec, Canada",
          period: "01/2024 – 01/2025",
          bullets: [
            "Reviewed literature to understand the MedEcho database and patient-based funding policy.",
            "Extracted, processed/imputed and validated variables of interest to produce reports (SAS, Excel).",
            "Contributed to a report on home hospitalization policy.",
            "Technologies used: SAS, Excel"
          ]
        },
        {
          title: "Statistician — Project execution monitoring",
          company: "Ministry of Economy, Planning and Territorial Development, Yaoundé, Cameroon",
          period: "03/2015 – 02/2023",
          bullets: [
            "Produced periodic reports (monthly, quarterly, annual) on public investment project execution.",
            "Designed data collection and processing tools for project monitoring.",
            "Organized evaluation meetings and wrote minutes.",
            "Prepared presentations (PowerPoint) and methodological guides.",
            "Technologies used: SPSS, Excel, Power BI, R"
          ]
        }
      ]
    },
    projects: {
      title: "Projects",
      items: [
        { title: "Econometric modeling – National Bank of Canada", desc: "Estimated the volume of international transactions of Canadian investors using econometric models.", tags: "R • Econometrics • Executive presentation" },
        { title: "Financial systemic risk analysis", desc: "Monte Carlo simulation, Granger causality testing and dependence analysis between financial markets.", tags: "Python • R • Finance" },
        { title: "Public health policy analysis", desc: "Evaluation of hospital funding policies in Québec using administrative data.", tags: "SAS • Excel • Public analysis" }
      ]
    },
    education: {
      title: "Education",
      items: [
        "Master's in Statistics (Data Science) — Université Laval, Québec — 09/2023 – 04/2025",
        "Bachelor in Probability and Statistics — Institut Sous‑régional de Statistique et d'Économie Appliquée, Yaoundé — 09/2010 – 05/2014"
      ]
    },
    activities: {
      title: "Activities and volunteer work",
      items: ["Volunteer at Alliance Action Bénévole","Volunteer at Return2Work"]
    },
    contact: {
      title: "Contact",
      email: "Email: dufotsi2020@gmail.com",
      phone: "Phone: +1 581 459 6011",
      linkedin: "www.linkedin.com/in/ElvisFotsi"
    },
    footer: "© 2026 Elvis Romarick Fotsi"
  }
};

// utilitaire pour accéder à une clé imbriquée
function getByPath(obj, path) {
  return path.split('.').reduce((o, k) => (o ? o[k] : undefined), obj);
}

function renderListInto(el, listData) {
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

  if (tr.meta) {
    if (tr.meta.title) document.title = tr.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && tr.meta.description) metaDesc.setAttribute('content', tr.meta.description);
    const metaKeys = document.querySelector('meta[name="keywords"]');
    if (metaKeys && tr.meta.keywords) metaKeys.setAttribute('content', tr.meta.keywords);
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = getByPath(tr, key);
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-list]').forEach(el => {
    const listKey = el.getAttribute('data-i18n-list');
    const listData = getByPath(tr, listKey) || getByPath(tr, `${listKey}.items`);
    if (!listData) return;
    renderListInto(el, listData);
  });

  // Update CV button labels if present
  if (getByPath(tr, 'links.cv_fr')) document.querySelectorAll('#cv-fr, #cv-fr-contact').forEach(el => el.textContent = getByPath(tr, 'links.cv_fr'));
  if (getByPath(tr, 'links.cv_en')) document.querySelectorAll('#cv-en, #cv-en-contact').forEach(el => el.textContent = getByPath(tr, 'links.cv_en'));

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
