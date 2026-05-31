const MISSIONS_SOCLE = [
  { id: "SOC-01", type: "socle", points: 50, title: "Identité visuelle", category: "Visuel", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/IFF- Identité visuelle de la cellule.pdf" },
  { id: "SOC-02", type: "socle", points: 50, title: "Charte éditoriale", category: "Rédaction", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/charte_edito_aurora.pdf" },
  { id: "SOC-03", type: "socle", points: 75, title: "Site vitrine du CCA", category: "Web", status: "done" },
  { id: "SOC-04", type: "socle", points: 50, title: "Communiqué de lancement", category: "Rédaction", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/communique-lancement-iff.pdf" },
  { id: "SOC-05", type: "socle", points: 75, title: "Kit réseaux sociaux", category: "Visuel", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/Kit réseaux sociaux.pdf" },
  { id: "SOC-06", type: "socle", points: 100, title: "Stratégie de communication", category: "Rédaction", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/STRATÉGIE DE COMMUNICATION.pdf" },
  { id: "SOC-07", type: "socle", points: 75, title: "Présentation de l'équipage", category: "Visuel", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/carte_d_identiter_spacial_alien.pdf" }
];

const TIMELINE_EVENTS = [
  {
    id: "EVT-01",
    date: "29/05 19:31",
    tag: "Découverte",
    tagColor: "discovery",
    title: "Premier contact visuel",
    transmission: `CCA, ici Laurent. On vient de terminer le premier 
    survol basse altitude de la zone Alpha. Les images arrivent. 
    C'est... c'est vraiment autre chose de le voir de près. 
    La vallée d'Aurelia est immense. On distingue ce qui ressemble 
    à des formations rocheuses stratifiées. Patel est comme un gosse 
    devant un sapin de Noël.`,
    missions: [
      { id: "EVT01-A", points: 75, title: "Communiqué Premières images", category: "Rédaction", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/communique_presse_images_iff.pdf" },
      { id: "EVT01-B", points: 75, title: "Visuel réseaux sociaux", category: "Visuel", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/Visuel réseaux sociaux « Premier contact » .pdf" },
      { id: "EVT01-C", points: 75, title: "Galerie photo sur le site", category: "Web", status: "done", link: "index.html#gallery" }
    ]
  },
  {
    id: "EVT-02",
    date: "29/05 22:00",
    tag: "Information",
    tagColor: "info",
    title: "Incident technique mineur",
    transmission: `Défaillance capteur thermique module 3. 
    Diagnostic en cours. Impact mission : négligeable. 
    Réparation estimée : 4h. Rien de grave, c'est un capteur 
    redondant. Davis et moi on s'en occupe.`,
    missions: [
      { id: "EVT02-A", points: 50, title: "Note de briefing interne", category: "Rédaction", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/notice-brief-interne.pdf" },
      { id: "EVT02-B", points: 75, title: "Journal de bord technique", category: "Web", status: "done", link: "index.html" },
      { id: "EVT02-C", points: 75, title: "Infographie Odyssey IV", category: "Visuel", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/Infographie _ anatomie de l_Odyssey IV.jpg" }
    ]
  },
  {
    id: "EVT-03",
    date: "30/05 00:30",
    tag: "Émotion",
    tagColor: "emotion",
    title: "Message personnel viral",
    transmission: `Maman, Papa... Je sais que vous recevrez ça dans 
    20 minutes. Aujourd'hui ça fait exactement 2 ans que je suis 
    partie de la maison. La Terre me manque. Vous me manquez. 
    Mais quand je regarde par le hublot et que je vois cette planète 
    qu'aucun humain n'a jamais vue de si près... je sais pourquoi 
    je suis là. Je vous aime.`,
    note: "Message viral. Forte émotion publique. Opportunité humaine.",
    missions: [
      { id: "EVT03-A", points: 75, title: "Message officiel CCA", category: "Rédaction", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/message-accompagnement-iff.pdf" },
      { id: "EVT03-B", points: 75, title: "Visuel citation spatiale", category: "Visuel", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/Visuel citation spatiale/" },
      { id: "EVT03-C", points: 100, title: "Séquence émotion capsule", category: "Vidéo", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/Séquence émotion.mp4" }
    ]
  },
  {
    id: "EVT-04",
    date: "30/05 03:00",
    tag: "Alerte",
    tagColor: "alert",
    glitch: true,
    title: "Tempête solaire",
    transmission: `Tempête solaire de classe M4 détectée. 
    Impact communications dans 45 minutes. Durée estimée : 6-8h. 
    Débit réduit à 10%. Protocole COM-DEGRAD activé. 
    On passe en mode économie de bande passante.`,
    missions: [
      { id: "EVT04-A", points: 75, title: "Communiqué alerte publique", category: "Rédaction", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/communique-alerte-tempete-solaire.pdf" },
      { id: "EVT04-B", points: 75, title: "Visuel alerte tempête", category: "Visuel", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/visuel d_alert tempete.pdf" },
      { id: "EVT04-C", points: 150, title: "Mode dégradé glitch", category: "Web", status: "done", link: "crisis-terminal.html" },
      { id: "EVT04-D", points: 125, title: "Transmission dégradée", category: "Vidéo", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/Transmission dégradée.mp4" }
    ]
  },
  {
    id: "EVT-05",
    date: "30/05 06:00",
    tag: "Respiration",
    tagColor: "breath",
    title: "Point d'étape - fin de nuit",
    transmission: `Tempête solaire en décroissance, signal se stabilise. 
    L'équipage va bien. Le capteur est réparé. Première EVA de 
    reconnaissance sur le site Delta prévue cet après-midi. 
    Laurent et Wong sont impatients. Bonne matinée, la Terre.`,
    missions: []
  },
  {
    id: "EVT-06",
    date: "30/05 08:47",
    tag: "Mystère",
    tagColor: "mystery",
    title: "Signal anormal - log automatique",
    transmission: `Détection signal électromagnétique anormal. 
    Source : Vallée d'Aurelia, secteur 7. Durée : 3 min 42s. 
    Fréquence : non répertoriée dans les bases de données connues. 
    Équipage informé.`,
    missions: [
      { id: "EVT06-A", points: 100, title: "Rapport anomalie classifié", category: "Rédaction", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/rapport-anomalie.pdf" },
      { id: "EVT06-B", points: 100, title: "Cartographie du signal", category: "Visuel", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/Cartographie du signal.pdf" },
      { id: "EVT06-C", points: 100, title: "Système alerte site web", category: "Web", status: "done", link: "signal.html" }
    ]
  },
  {
    id: "EVT-07",
    date: "30/05 10:01",
    tag: "Mystère",
    tagColor: "mystery",
    title: "Briefing confidentiel - le signal",
    transmission: `Ce matin, nos systèmes ont capté un signal anormal 
    en provenance de la vallée d'Aurelia, secteur 7. Fréquence inconnue, 
    durée 3 min 42s. Le Dr. Patel demande une EVA d'investigation 
    d'urgence. La fréquence est trop régulière pour être du bruit. 
    Il FAUT qu'on aille voir.`,
    missions: [
      { id: "EVT07-A", points: 75, title: "Note synthèse confidentielle", category: "Rédaction", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/note-interne-signal-etrange.pdf" },
      { id: "EVT07-B", points: 75, title: "Éléments langage médias", category: "Rédaction", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/faq_anti_sensationnalisme_iff.pdf" },
      { id: "EVT07-C", points: 75, title: "Visualisation données signal", category: "Visuel", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/Visualisation des données du signal.pdf" }
    ]
  },
  {
    id: "EVT-08",
    date: "30/05 11:33",
    tag: "Information",
    tagColor: "info",
    title: "EVA en direct - secteur 7",
    transmission: `CCA, Laurent et Wong en approche du secteur 7. 
    Visibilité correcte. Sol stable. 
    C'est une formation cristalline. Jamais vu ça. 
    Elle est translucide, haute d'environ 3 mètres, 
    et elle pulse. Faiblement, mais de manière régulière.`,
    missions: [
      { id: "EVT08-A", points: 75, title: "Fil actualité en direct", category: "Rédaction", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/fil-actu-EVA.pdf" },
      { id: "EVT08-B", points: 75, title: "Visuel EVA en cours", category: "Visuel", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/Visuel « EVA en cours ».jpg" },
      { id: "EVT08-C", points: 100, title: "Page suivi EVA direct", category: "Web", status: "done", link: "eva-tracking.html" }
    ]
  },
  {
    id: "EVT-09",
    date: "30/05 16:01",
    tag: "Information",
    tagColor: "nova",
    title: "Découverte confirmée - Protocole NOVA",
    classified: true,
    transmission: `Structure cristalline bioluminescente. 3,2 mètres. 
    Cycle lumineux de 47 secondes. Signal ce matin venait de là. 
    Ce n'est pas un artefact. Ce n'est pas un bug. 
    PROTOCOLE NOVA activé. 
    VOCABULAIRE INTERDIT : vie, extraterrestre, alien, organisme. 
    AUTORISÉ : phénomène naturel inexpliqué, structure d'origine 
    inconnue, anomalie géologique active.`,
    missions: [
      { id: "EVT09-A", points: 125, title: "Communiqué découverte", category: "Rédaction", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/communiqué-nova-bilingue.pdf" },
      { id: "EVT09-B", points: 100, title: "Vulgarisation scientifique", category: "Rédaction", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/note-vulgarisation.pdf" },
      { id: "EVT09-C", points: 125, title: "Représentation artistique", category: "Visuel", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/Représentation artistique de la structure.pdf" },
      { id: "EVT09-D", points: 150, title: "Section découverte site", category: "Web", status: "done", link: "nova-discovery.html" },
      { id: "EVT09-E", points: 150, title: "Capsule vidéo découverte", category: "Vidéo", status: "done" }
    ]
  },
  {
    id: "EVT-10",
    date: "30/05 19:00",
    tag: "Information",
    tagColor: "alert",
    title: "Manipulation et désinformation",
    transmission: `ALERTE : Cellule identifiée comme ayant manipulé 
    les systèmes de scoring. 3600 CM frauduleux injectés. 
    Hashtag #AuroraAlien en tendance mondiale. 
    Ripley : Ce n'est pas des petits hommes verts. 
    Restez factuel, restez intègre. On compte sur vous.`,
    missions: [
      { id: "EVT10-A", points: 100, title: "Analyse manipulation", category: "Rédaction", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/analyse-stratégique/note-analyse-strategique.pdf" },
      { id: "EVT10-B", points: 100, title: "Kit réponse désinformation", category: "Rédaction", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/faq-fact_checking.pdf" },
      { id: "EVT10-C", points: 125, title: "Visuels anti-désinformation", category: "Visuel", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/Visuels anti-désinformation/" }
    ]
  },
  {
    id: "EVT-11",
    date: "30/05 22:00",
    tag: "Alerte",
    tagColor: "crisis",
    glitch: true,
    title: "Crise médiatique totale",
    transmission: `Situation critique. #AuroraAlien repris par 
    4 médias TV nationaux. Mère du Dr. Silva harcelée à son domicile. 
    Deepfake vidéo en circulation. Appels au standard : +2000%. 
    Réponse coordonnée immédiate tous canaux nécessaire.`,
    missions: [
      { id: "EVT11-A", points: 125, title: "Démenti officiel CCA", category: "Rédaction", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/dementi-aurora_alien.pdf" },
      { id: "EVT11-B", points: 75, title: "Message soutien familles", category: "Rédaction", status: "done" },
      { id: "EVT11-C", points: 150, title: "Preuve de vie équipage", category: "Vidéo", status: "en-cours" },
      { id: "EVT11-D", points: 150, title: "Centre de crise en ligne", category: "Web", status: "done", link: "crisis-terminal.html" }
    ]
  },
  {
    id: "EVT-12",
    date: "31/05 01:00",
    tag: "Respiration",
    tagColor: "breath",
    title: "Accalmie - la crise retombe",
    transmission: `Les familles ont été rassurées. Ma mère m'a envoyé 
    un message, elle va bien. Merci pour votre réactivité. 
    Ça rappelle qu'on est loin... et qu'on compte sur vous là-bas. 
    Restez vigilants.`,
    missions: []
  },
  {
    id: "EVT-13",
    date: "31/05 08:49",
    tag: "Information",
    tagColor: "info",
    title: "Tension interne - log confidentiel",
    classified: true,
    transmission: `Altercation verbale entre Dr. Patel et Lt. Laurent. 
    Sujet : priorité EVA secteur 7 vs protocoles sécurité. 
    Intervention Cdt. Ripley. Situation stabilisée. 
    Fatigue accumulée, stress post-crise.`,
    missions: []
  },
  {
    id: "EVT-CONTACT",
    date: "31/05 09:00",
    tag: "PREMIER CONTACT",
    tagColor: "contact",
    glitch: false,
    highlight: true,
    title: "Le signal retour",
    transmission: `LOG AUTOMATIQUE - ALERTE MAXIMALE. 
    La structure cristalline a modifié son cycle : 47s → 4,7s. 
    Champ électromagnétique décuplé. Le spectre contient une séquence 
    structurée qui se répète. Le Dr. Patel est en larmes. 
    Ripley : Quelque chose a répondu. 
    C'est à vous de décider ce que l'humanité dit en retour. 
    Répondez.`,
    missions: [
      { id: "CONTACT-A", points: 150, title: "Le message de la Terre", category: "Vidéo", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/Message_Terre_Livrables/" },
      { id: "CONTACT-B", points: 100, title: "Premier contact - visuel iconique", category: "Visuel", status: "done", link: "assets/aurora_iff_rendu/aurora_iff/Premier contact_1.png" }
    ]
  }
];

const EXISTING_PAGES = [
  {
    id: "index",
    title: "Site Principal AURORA",
    description: "Page d'accueil du CCA — hub de toutes les missions",
    link: "index.html",
    icon: "🌌",
    missions: ["SOC-03"]
  },
  {
    id: "nova",
    title: "Nova Discovery",
    description: "Section dédiée à la découverte de la structure cristalline",
    link: "nova-discovery.html",
    icon: "✨",
    missions: ["EVT09-D"]
  },
  {
    id: "signal",
    title: "Signal Mystérieux",
    description: "Système d'alerte — signal anormal secteur 7",
    link: "signal.html",
    icon: "📡",
    missions: ["EVT06-C"]
  },
  {
    id: "crisis",
    title: "Terminal de Crise",
    description: "Interface glitch — mode dégradé tempête solaire & crise médiatique",
    link: "crisis-terminal.html",
    icon: "⚠️",
    missions: ["EVT04-C", "EVT11-D"]
  },
  {
    id: "eva",
    title: "Suivi EVA",
    description: "Page de suivi en direct de l'EVA secteur 7",
    link: "eva-tracking.html",
    icon: "🧑‍🚀",
    missions: ["EVT08-C"]
  }
];

const GALLERY_ITEMS = [
  {
    src: "assets/Visuel citation spatiale.png",
    title: "Visuel citation spatiale",
    meta: "30.05.2079 · Cupola"
  },
  {
    src: "assets/Visuel citation spatiale_2.png",
    title: "Visuel citation spatiale 2",
    meta: "30.05.2079 · Cupola"
  },
  {
    src: "assets/nano1.png",
    title: "Première lumière",
    meta: "14.03.2079 · Surface nord, Zone A-7"
  },
  {
    src: "assets/nano2.png",
    title: "Depuis l’orbite basse",
    meta: "11.03.2079 · Orbite 340 km"
  },
  {
    src: "assets/nano3.png",
    title: "Le sol de l’autre monde",
    meta: "15.03.2079 · Site d’atterrissage Omega"
  },
  {
    src: "assets/Fichier 4.png",
    title: "Archive visuelle 04",
    meta: "Fichier brut CCA"
  },
  {
    src: "assets/Fichier 5.png",
    title: "Archive visuelle 05",
    meta: "Fichier brut CCA"
  },
  {
    src: "assets/Fichier 6.png",
    title: "Archive visuelle 06",
    meta: "Fichier brut CCA"
  }
];

const DOM = {
  loadingScreen: document.getElementById("loadingScreen"),
  loadingCopy: document.getElementById("loadingCopy"),
  loadingBarFill: document.getElementById("loadingBarFill"),
  loadingPercent: document.getElementById("loadingPercent"),
  menuToggle: document.getElementById("menuToggle"),
  primaryNav: document.getElementById("primaryNav"),
  cursorLayer: document.getElementById("cursorLayer"),
  heroClock: document.getElementById("heroClock"),
  timelineFilters: document.getElementById("timelineFilters"),
  timelineGrid: document.getElementById("timelineGrid"),
  productionsGrid: document.getElementById("productionsGrid"),
  feedFilters: document.getElementById("feedFilters"),
  feedList: document.getElementById("feedList"),
  galleryGrid: document.getElementById("galleryGrid"),
  scoreBars: document.getElementById("scoreBars"),
  scoreTotalCm: document.getElementById("scoreTotalCm"),
  scoreDone: document.getElementById("scoreDone"),
  scoreRate: document.getElementById("scoreRate"),
  statTotalCm: document.getElementById("statTotalCm"),
  statDone: document.getElementById("statDone"),
  lightbox: document.getElementById("lightbox"),
  lightboxClose: document.getElementById("lightboxClose"),
  lightboxPrev: document.getElementById("lightboxPrev"),
  lightboxNext: document.getElementById("lightboxNext"),
  lightboxImage: document.getElementById("lightboxImage"),
  lightboxTitle: document.getElementById("lightboxTitle"),
  lightboxMeta: document.getElementById("lightboxMeta"),
  starCanvas: document.getElementById("starCanvas")
};

const ALL_MISSIONS = [
  ...MISSIONS_SOCLE,
  ...TIMELINE_EVENTS.flatMap((event) => event.missions || [])
];

const CATEGORY_ORDER = ["Web", "Visuel", "Rédaction", "Vidéo"];
const TIMELINE_FILTERS = new Set(["all", "discovery", "alert", "mystery", "contact"]);
const FEED_FILTERS = new Set(["all", "crew", "alerts", "mystery"]);

let activeTimelineFilter = "all";
let activeFeedFilter = "all";
let lightboxIndex = 0;
let starAnimationFrame = 0;
let cursorX = window.innerWidth / 2;
let cursorY = window.innerHeight / 2;
let targetCursorX = cursorX;
let targetCursorY = cursorY;
let revealObserver = null;

function computeTotalCM() {
  let total = 0;
  [...MISSIONS_SOCLE, ...TIMELINE_EVENTS.flatMap((event) => event.missions || [])]
    .filter((mission) => mission.status === "done")
    .forEach((mission) => {
      total += mission.points;
    });
  return total;
}

function getCompletedCount() {
  return ALL_MISSIONS.filter((mission) => mission.status === "done").length;
}

function getStatusIcon(status) {
  if (status === "done") {
    return "✓";
  }
  if (status === "voir") {
    return "◎";
  }
  if (status === "en-cours") {
    return "◉";
  }
  return "•";
}

function getStatusClass(status) {
  if (status === "done") {
    return "status-done";
  }
  if (status === "voir") {
    return "status-see";
  }
  if (status === "en-cours") {
    return "status-progress";
  }
  return "status-see";
}

function getTimelineGroup(event) {
  if (event.id === "EVT-CONTACT") {
    return "contact";
  }
  if (event.tagColor === "discovery") {
    return "discovery";
  }
  if (event.tagColor === "alert" || event.tagColor === "crisis") {
    return "alert";
  }
  if (event.tagColor === "mystery" || event.tagColor === "nova") {
    return "mystery";
  }
  return "crew";
}

function formatExcerpt(text, length = 180) {
  const compact = text.replace(/\s+/g, " ").trim();
  if (compact.length <= length) {
    return compact;
  }
  return `${compact.slice(0, length).trim()}…`;
}

function assetPath(path) {
  return encodeURI(path);
}

function animateNumber(element, target, duration = 1600) {
  if (!element) {
    return;
  }

  const startValue = Number(element.textContent.replace(/[^0-9.-]/g, "")) || 0;
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(startValue + (target - startValue) * eased);
    element.textContent = value.toLocaleString("fr-FR");

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

function updateScores() {
  const totalCm = computeTotalCM();
  const completedCount = getCompletedCount();
  const completionRate = Math.round((completedCount / ALL_MISSIONS.length) * 100);

  if (DOM.statTotalCm) {
    DOM.statTotalCm.dataset.target = String(totalCm);
    animateNumber(DOM.statTotalCm, totalCm);
  }
  if (DOM.scoreTotalCm) {
    DOM.scoreTotalCm.dataset.target = String(totalCm);
    animateNumber(DOM.scoreTotalCm, totalCm);
  }

  if (DOM.statDone) {
    DOM.statDone.dataset.target = String(completedCount);
    animateNumber(DOM.statDone, completedCount);
  }
  if (DOM.scoreDone) {
    DOM.scoreDone.dataset.target = String(completedCount);
    animateNumber(DOM.scoreDone, completedCount);
  }

  if (DOM.scoreRate) {
    DOM.scoreRate.textContent = `${completionRate}%`;
  }

  if (DOM.scoreBars) {
    const categoryTotals = CATEGORY_ORDER.map((category) => {
      const donePoints = ALL_MISSIONS.filter((mission) => mission.category === category && mission.status === "done")
        .reduce((sum, mission) => sum + mission.points, 0);
      return { category, donePoints };
    });
    const totalCategoryPoints = categoryTotals.reduce((sum, item) => sum + item.donePoints, 0) || 1;

    DOM.scoreBars.innerHTML = categoryTotals.map((item) => {
      const percentage = Math.round((item.donePoints / totalCategoryPoints) * 100);
      return `
        <article class="score-bar">
          <div class="score-bar-head">
            <strong>${item.category}</strong>
            <span class="score-meta">${item.donePoints} CM</span>
          </div>
          <div class="score-bar-track" aria-hidden="true">
            <span class="score-bar-fill" style="width:${percentage}%"></span>
          </div>
        </article>
      `;
    }).join("");
  }
}

function renderTimeline(filter = "all") {
  activeTimelineFilter = filter;
  if (!DOM.timelineGrid) {
    return;
  }

  const visibleEvents = TIMELINE_EVENTS.filter((event) => {
    if (filter === "all") {
      return true;
    }
    return getTimelineGroup(event) === filter;
  });

  DOM.timelineGrid.innerHTML = visibleEvents.map((event) => {
    const missions = (event.missions || []).map((mission) => {
      const statusClass = getStatusClass(mission.status);
      const statusIcon = getStatusIcon(mission.status);
      const linkStart = mission.link ? `<a href="${assetPath(mission.link)}" class="mission-badge ${statusClass}">` : `<span class="mission-badge ${statusClass}">`;
      const linkEnd = mission.link ? "</a>" : "</span>";
      return `
        ${linkStart}
          <span>${statusIcon}</span>
          <span>${mission.id} · ${mission.points} CM</span>
          <small>${mission.title}</small>
        ${linkEnd}
      `;
    }).join("");

    const isMassive = event.id === "EVT-CONTACT";
    const tagClass = `tag-${event.tagColor}`;
    const hiddenText = event.note ? `${event.transmission}\n\n${event.note}` : event.transmission;

    return `
      <article class="timeline-card ${tagClass} ${isMassive ? "pulse-border" : ""} ${event.glitch ? "glitch" : ""} fade-in-up ${event.highlight ? "timing-glitch" : ""}" data-filter="${getTimelineGroup(event)}" data-event-id="${event.id}" ${isMassive ? 'style="grid-column: 1 / -1;"' : ""}>
        <div class="timeline-head">
          <div>
            <div class="timeline-meta">
              <span class="timeline-date">${event.date}</span>
              <span class="timeline-tag">${event.tag}</span>
            </div>
            <h3 data-text="${event.title}">${event.title}</h3>
          </div>
          <button class="timeline-toggle" type="button" aria-expanded="false">Ouvrir</button>
        </div>
        <div class="timeline-body">
          <p class="transmission-preview">${formatExcerpt(event.transmission)}</p>
          <p class="transmission-full" hidden>${hiddenText.replace(/\n/g, "<br />")}</p>
          <div class="timeline-missions">${missions || ""}</div>
        </div>
      </article>
    `;
  }).join("");

  wireTimelineCards();
  applyTimelineFilter(filter);
  observeRevealTargets(DOM.timelineGrid);
}

function wireTimelineCards() {
  const cards = Array.from(document.querySelectorAll(".timeline-card"));
  cards.forEach((card) => {
    const button = card.querySelector(".timeline-toggle");
    const body = card.querySelector(".timeline-body");
    const preview = card.querySelector(".transmission-preview");
    const full = card.querySelector(".transmission-full");

    if (!button || !body || !preview || !full) {
      return;
    }

    card.classList.add("is-collapsed");

    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const isExpanded = card.classList.toggle("is-expanded");
      card.classList.toggle("is-collapsed", !isExpanded);
      button.textContent = isExpanded ? "Refermer" : "Ouvrir";
      button.setAttribute("aria-expanded", String(isExpanded));
      preview.hidden = isExpanded;
      full.hidden = !isExpanded;
    });

    card.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement || event.target instanceof HTMLButtonElement) {
        return;
      }
      button.click();
    });
  });
}

function applyTimelineFilter(filter) {
  activeTimelineFilter = filter;
  const cards = Array.from(document.querySelectorAll(".timeline-card"));
  cards.forEach((card) => {
    const visible = filter === "all" || card.dataset.filter === filter;
    card.style.display = visible ? "block" : "none";
  });
}

function renderProductions() {
  if (!DOM.productionsGrid) {
    return;
  }

  DOM.productionsGrid.innerHTML = EXISTING_PAGES.map((page) => {
    const missionTags = page.missions.map((missionId) => `<span class="production-chip">${missionId}</span>`).join("");
    return `
      <article class="production-card fade-in-up">
        <div class="production-top">
          <div class="production-icon" aria-hidden="true">${page.icon}</div>
          <div class="score-meta">${page.id}</div>
        </div>
        <h3>${page.title}</h3>
        <p>${page.description}</p>
        <div class="production-tags">${missionTags}</div>
        <a class="production-link" href="${page.link}">Accéder →</a>
      </article>
    `;
  }).join("");
  observeRevealTargets(DOM.productionsGrid);
}

function getFeedCategory(event) {
  if (event.id === "EVT-CONTACT") {
    return "mystery";
  }
  if (event.tagColor === "alert" || event.tagColor === "crisis") {
    return "alerts";
  }
  if (event.tagColor === "mystery" || event.tagColor === "nova") {
    return "mystery";
  }
  return "crew";
}

function renderFeed(filter = "all") {
  activeFeedFilter = filter;
  if (!DOM.feedList) {
    return;
  }

  const visibleEvents = TIMELINE_EVENTS.filter((event) => filter === "all" || getFeedCategory(event) === filter);

  DOM.feedList.innerHTML = visibleEvents.map((event) => {
    const category = getFeedCategory(event);
    const tagClass = `tag-${event.tagColor}`;
    const badgeLabel = category === "alerts" ? "ALERTE" : category === "mystery" ? "MYSTÈRE" : "ÉQUIPAGE";
    return `
      <article class="feed-entry ${tagClass} fade-in-up ${event.glitch || event.tagColor === "crisis" ? "glitch" : ""}">
        <div class="feed-meta">
          <strong>${event.date}</strong>
          <span class="feed-chip ${tagClass}">${badgeLabel}</span>
        </div>
        <h3>${event.title}</h3>
        <p>${formatExcerpt(event.transmission, 220)}</p>
      </article>
    `;
  }).join("");
  observeRevealTargets(DOM.feedList);
}

function renderGallery() {
  if (!DOM.galleryGrid) {
    return;
  }

  DOM.galleryGrid.innerHTML = GALLERY_ITEMS.map((item, index) => {
    const src = assetPath(item.src);
    return `
      <button class="gallery-item fade-in-up" type="button" data-gallery-index="${index}" aria-label="Ouvrir ${item.title}">
        <img src="${src}" alt="${item.title}" loading="lazy" decoding="async" />
        <div class="gallery-overlay">
          <strong>${item.title}</strong>
          <span>${item.meta}</span>
        </div>
      </button>
    `;
  }).join("");

  Array.from(document.querySelectorAll(".gallery-item")).forEach((button) => {
    button.addEventListener("click", () => {
      openLightbox(Number(button.dataset.galleryIndex || 0));
    });
  });

  observeRevealTargets(DOM.galleryGrid);
}

function openLightbox(index) {
  lightboxIndex = index;
  const item = GALLERY_ITEMS[lightboxIndex];
  if (!item || !DOM.lightbox) {
    return;
  }

  DOM.lightbox.classList.add("is-open");
  DOM.lightbox.setAttribute("aria-hidden", "false");
  DOM.lightboxImage.src = assetPath(item.src);
  DOM.lightboxImage.alt = item.title;
  DOM.lightboxTitle.textContent = item.title;
  DOM.lightboxMeta.textContent = item.meta;
}

function closeLightbox() {
  if (!DOM.lightbox) {
    return;
  }
  DOM.lightbox.classList.remove("is-open");
  DOM.lightbox.setAttribute("aria-hidden", "true");
}

function stepLightbox(direction) {
  lightboxIndex = (lightboxIndex + direction + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
  const item = GALLERY_ITEMS[lightboxIndex];
  DOM.lightboxImage.src = assetPath(item.src);
  DOM.lightboxImage.alt = item.title;
  DOM.lightboxTitle.textContent = item.title;
  DOM.lightboxMeta.textContent = item.meta;
}

function bindFilters(container, applyFn, validSet) {
  if (!container) {
    return;
  }
  const buttons = Array.from(container.querySelectorAll(".filter-button"));
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter || "all";
      if (!validSet.has(filter)) {
        return;
      }
      buttons.forEach((candidate) => candidate.classList.toggle("is-active", candidate === button));
      applyFn(filter);
    });
  });
}

function setupNavigation() {
  if (!DOM.menuToggle || !DOM.primaryNav) {
    return;
  }

  const closeNav = () => {
    DOM.primaryNav.classList.remove("is-open");
    DOM.menuToggle.setAttribute("aria-expanded", "false");
  };

  DOM.menuToggle.addEventListener("click", () => {
    const isOpen = DOM.primaryNav.classList.toggle("is-open");
    DOM.menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  Array.from(DOM.primaryNav.querySelectorAll("a")).forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Node)) {
      return;
    }
    if (!DOM.primaryNav.contains(target) && !DOM.menuToggle.contains(target)) {
      closeNav();
    }
  });
}

function setupCursor() {
  if (!DOM.cursorLayer) {
    return;
  }

  const dot = DOM.cursorLayer.querySelector(".cursor-dot");
  const ring = DOM.cursorLayer.querySelector(".cursor-ring");

  document.addEventListener("pointermove", (event) => {
    targetCursorX = event.clientX;
    targetCursorY = event.clientY;
  });

  document.addEventListener("pointerdown", () => {
    DOM.cursorLayer.classList.add("is-hover");
  });

  document.addEventListener("pointerup", () => {
    DOM.cursorLayer.classList.remove("is-hover");
  });

  document.addEventListener("pointerover", (event) => {
    const target = event.target;
    if (target instanceof Element && target.closest("a, button, iframe, .gallery-item")) {
      DOM.cursorLayer.classList.add("is-hover");
    }
  });

  document.addEventListener("pointerout", (event) => {
    const target = event.target;
    if (target instanceof Element && target.closest("a, button, iframe, .gallery-item")) {
      DOM.cursorLayer.classList.remove("is-hover");
    }
  });

  const lerp = () => {
    cursorX += (targetCursorX - cursorX) * 0.14;
    cursorY += (targetCursorY - cursorY) * 0.14;
    if (dot) {
      dot.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    }
    if (ring) {
      ring.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    }
    requestAnimationFrame(lerp);
  };

  requestAnimationFrame(lerp);
}

function setupCursorFallback() {
  document.addEventListener("mousemove", (event) => {
    targetCursorX = event.clientX;
    targetCursorY = event.clientY;
  });
}

function setupScrollReveal() {
  if (revealObserver) {
    return;
  }

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
}

function observeRevealTargets(root = document) {
  if (!revealObserver) {
    setupScrollReveal();
  }

  Array.from(root.querySelectorAll(".fade-in-up:not([data-observed])")).forEach((element) => {
    element.dataset.observed = "true";
    revealObserver.observe(element);
  });
}

function setupCounters() {
  const counters = Array.from(document.querySelectorAll(".counter"));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      const target = Number(entry.target.dataset.target || 0);
      animateNumber(entry.target, target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.4 });

  counters.forEach((counter) => {
    const target = Number(counter.dataset.target || 0);
    counter.dataset.target = String(target);
    counter.textContent = "0";
    observer.observe(counter);
  });
}

function setupStarfield() {
  if (!DOM.starCanvas) {
    return;
  }

  const canvas = DOM.starCanvas;
  const context = canvas.getContext("2d");
  const starCount = 200;
  const stars = [];
  let width = window.innerWidth;
  let height = window.innerHeight;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function createStars() {
    stars.length = 0;
    for (let index = 0; index < starCount; index += 1) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 1 + Math.random() * 2,
        speed: 0.04 + Math.random() * 0.16,
        drift: -0.14 + Math.random() * 0.28,
        phase: Math.random() * Math.PI * 2,
        twinkle: 0.4 + Math.random() * 0.6
      });
    }
  }

  function draw(time) {
    context.clearRect(0, 0, width, height);
    context.fillStyle = "rgba(255,255,255,0.95)";

    stars.forEach((star) => {
      star.x += star.drift;
      star.y += star.speed;
      if (star.x < -2) star.x = width + 2;
      if (star.x > width + 2) star.x = -2;
      if (star.y > height + 4) star.y = -4;

      const twinkle = 0.65 + Math.sin(time * 0.0015 + star.phase) * star.twinkle * 0.35;
      context.globalAlpha = Math.max(0.25, Math.min(1, twinkle));
      context.beginPath();
      context.arc(star.x, star.y, star.size / 2, 0, Math.PI * 2);
      context.fill();
    });

    context.globalAlpha = 1;
    starAnimationFrame = requestAnimationFrame(draw);
  }

  resize();
  createStars();
  window.addEventListener("resize", () => {
    resize();
    createStars();
  });
  starAnimationFrame = requestAnimationFrame(draw);
}

function setupLoadingScreen() {
  const duration = 2500;
  const start = performance.now();
  const copy = DOM.loadingCopy;
  const progressCopy = "INITIALISATION ARCHIVE...";

  if (copy) {
    copy.textContent = "INITIALISATION ARCHIVE...";
  }

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const percent = Math.round(progress * 100);
    if (DOM.loadingBarFill) {
      DOM.loadingBarFill.style.width = `${percent}%`;
    }
    if (DOM.loadingPercent) {
      DOM.loadingPercent.textContent = `${percent}%`;
    }

    if (copy) {
      const shown = Math.max(1, Math.round(progressCopy.length * progress));
      copy.textContent = progressCopy.slice(0, shown);
    }

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
  window.setTimeout(() => {
    DOM.loadingScreen?.classList.add("is-done");
  }, duration);
}

function setupLightbox() {
  if (!DOM.lightbox) {
    return;
  }

  DOM.lightboxClose?.addEventListener("click", closeLightbox);
  DOM.lightboxPrev?.addEventListener("click", () => stepLightbox(-1));
  DOM.lightboxNext?.addEventListener("click", () => stepLightbox(1));

  DOM.lightbox.addEventListener("click", (event) => {
    if (event.target === DOM.lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!DOM.lightbox.classList.contains("is-open")) {
      return;
    }
    if (event.key === "Escape") {
      closeLightbox();
    }
    if (event.key === "ArrowLeft") {
      stepLightbox(-1);
    }
    if (event.key === "ArrowRight") {
      stepLightbox(1);
    }
  });
}

function setupHeroClock() {
  if (!DOM.heroClock) {
    return;
  }

  const update = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    DOM.heroClock.textContent = `${day}/${month} ${hours}:${minutes}`;
  };

  update();
  window.setInterval(update, 60000);
}

function init() {
  setupLoadingScreen();
  setupNavigation();
  setupCursorFallback();
  setupCursor();
  setupStarfield();
  setupCounters();
  setupLightbox();
  setupHeroClock();

  renderTimeline("all");
  renderProductions();
  renderFeed("all");
  renderGallery();
  updateScores();
  setupScrollReveal();
  observeRevealTargets();

  bindFilters(DOM.timelineFilters, (filter) => {
    renderTimeline(filter);
  }, TIMELINE_FILTERS);

  bindFilters(DOM.feedFilters, (filter) => {
    renderFeed(filter);
  }, FEED_FILTERS);
}

document.addEventListener("DOMContentLoaded", init);
