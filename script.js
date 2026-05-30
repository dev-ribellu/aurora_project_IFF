const transmissions = [
  {
    titre: "Signal confirmé sur orbite basse",
    date: "2079-04-17",
    type: "INFO",
    contenu: "Les antennes de surface ont capté un motif de retour régulier sur trois fenêtres de communication consécutives."
  },
  {
    titre: "Alerte de densité atmosphérique",
    date: "2079-04-18",
    type: "ALERTE",
    contenu: "Une variation inattendue dans les couches supérieures impose une recalibration immédiate des filtres de télémétrie."
  },
  {
    titre: "Rapport de première lecture",
    date: "2079-04-19",
    type: "RAPPORT",
    contenu: "Les premiers spectres exploitables suggèrent une composition compatible avec des environnements stables à long terme."
  },
  {
    titre: "Fenêtre de diffusion prolongée",
    date: "2079-04-20",
    type: "INFO",
    contenu: "Le centre autorise une retransmission continue pendant 9 heures afin d’accompagner les équipes de terrain et la presse internationale."
  },
  {
    titre: "Anomalie sur le vecteur de guidage",
    date: "2079-04-21",
    type: "ALERTE",
    contenu: "Les calculateurs ont détecté une dérive minime mais persistante du vecteur principal. Surveillance renforcée en cours."
  },
  {
    titre: "Protocole de synthèse activé",
    date: "2079-04-22",
    type: "RAPPORT",
    contenu: "Toutes les séquences entrantes sont désormais résumées en temps réel pour la cellule IFF et les relais partenaires."
  }
];

const DEGRADED_MODE = false;
const DEGRADED_STORAGE_KEY = 'aurora.degraded';
const BANNER_CYCLE_MESSAGES = [
  '⚠ TEMPETE SOLAIRE DETECTEE - COMMUNICATIONS DEGRADEES - SIGNAL: 23% - LATENCE: +4700ms - DONNEES CORROMPUES',
  'TEMPETE SOLAIRE EN COURS - SIGNAL INSTABLE - PAQUETS PERDUS: 41% - RESEAU PARTIEL',
  'CANAL ODYSSEY IV PERTURBE - MODE COM-DEGRAD ACTIF - INTEGRITE FLUX: 23%'
];
const RESTORED_MESSAGE = 'COMMUNICATIONS RESTAUREES - SIGNAL: 98% - NOMINAL';
const GLITCH_CHARS = '█▓▒░╔╗╚╝║═▄▀■□▪▫◘◙';
const STATUS = 'confidentiel';

const ALERT_DATA = {
  confidentiel: {
    statusLabel: 'CONFIDENTIEL',
    chipLabel: 'BLOCAGE ACTIF',
    timestamp: '30/05 · 03:00 UTC',
    description: 'Signal anormal détecté sur le relais de communication principal. Les détails restent masqués en attente de validation.',
    fullDetails: 'Transmission Odyssey IV. Fenêtre de télémetrie instable, réévaluation en cours par la cellule de contrôle. Les paramètres sensibles sont temporairement redéployés en accès restreint.'
  },
  public: {
    statusLabel: 'PUBLIC',
    chipLabel: 'DIFFUSION OUVERTE',
    timestamp: '30/05 · 03:00 UTC',
    description: 'Signal anormal confirmé sur le relais principal avec perturbation courte mais visible des communications.',
    fullDetails: 'Transmission Odyssey IV. Les indicateurs de latence ont brièvement dépassé les seuils de tolérance, mais le flux reste exploitable. Les équipes confirment une surveillance continue et un retour à la normale progressif.'
  }
};

const MISSION_LOGS = [
  {
    id: "LOG-001",
    timestamp: "2079.03.11 // 14:32:07 UTC",
    type: "SYSTÈME",
    severity: "FAIBLE",
    status: "RÉSOLU",
    title: "Fluctuation panneau solaire C",
    detail: "Baisse de rendement de 12% détectée sur le panneau C-3. Recalibration automatique effectuée.",
    operator: "IA ARIA"
  },
  {
    id: "LOG-002",
    timestamp: "2079.03.12 // 09:15:44 UTC",
    type: "ALERTE",
    severity: "HAUTE",
    status: "EN COURS",
    title: "Anomalie atmosphérique Kepler-452c",
    detail: "Composition atmosphérique inattendue détectée. Concentration O2 supérieure aux prévisions de 34%.",
    operator: "Dr. Yusuf Amara"
  },
  {
    id: "LOG-003",
    timestamp: "2079.03.14 // 22:58:01 UTC",
    type: "CRITIQUE",
    severity: "HAUTE",
    status: "RÉSOLU",
    title: "Perte signal telémétrie secteur 7",
    detail: "Interruption communication 4min 32sec. Cause: interférence magnétique. Protocole de secours activé.",
    operator: "Cmdt. Sarah Chen"
  },
  {
    id: "LOG-004",
    timestamp: "2079.03.16 // 22:58:01 UTC",
    type: "FAIBLE",
    severity: "FAIBLE",
    status: "RÉSOLU",
    title: "Défaillance capteur thermique module 3",
    detail: "Rien de grave, c'est un capteur redondant. Davis et moi on s'en occupe. Mais bon, 18 mois de voyage, fallait bien qu'un truc lâche un jour.",
    operator: "Cmdt. Sarah Chen"
  },
  {
    id: "MESSAGE-001",
    timestamp: "2079.03.19 // 10:58:01 UTC",
    type: "INFO",
    severity: "FAIBLE",
    status: "RÉSOLU",
    title: "rapport de fin de nuit",
    detail: "Tempête solaire en décroissance, signal qui se stabilise. L'équipage va bien. Le capteur est réparé. On se prépare pour la suite : première EVA de reconnaissance sur le site Delta prévue cet après-midi. Laurent et Wong sont impatients. Bonne matinée, la Terre.",
    operator: "Spc. N. Davis"
  },
  {
    id: "EVT-01",
    timestamp: "2079.05.29 // 19:31",
    type: "INFO",
    severity: "MOYENNE",
    status: "RÉSOLU",
    title: "Premier contact visuel",
    detail: "Transmission Odyssey IV : CCA, ici Laurent. On vient de terminer le premier survol basse altitude de la zone Alpha. Les images arrivent. C'est... c'est vraiment autre chose de le voir de près. La vallée d'Aurelia est immense. On distingue ce qui ressemble à des formations rocheuses stratifiées. Patel est comme un gosse devant un sapin de Noël.",
    operator: "Laurent",
    note: "Progression mission : 2/3"
  },
  {
    id: "EVT-04",
    timestamp: "2079.05.30 // 03:00",
    type: "ALERTE",
    severity: "HAUTE",
    status: "EN COURS",
    title: "Tempête solaire",
    detail: "Transmission Odyssey IV : Tempête solaire de classe M4 détectée. Impact sur les communications dans 45 minutes. Durée estimée : 6-8 heures. Débit réduit à 10%. Protocole COM-DEGRAD activé.",
    operator: "Équipage Odyssey IV",
    note: "On a vu l'alerte. On passe en mode économie de bande passante. Les prochains messages seront courts. Ne vous inquiétez pas si on est silencieux."
  },
  {
    id: "MESSAGE-002",
    timestamp: "2079.03.21 // 18:42:13 UTC",
    type: "COMMUNICATION",
    severity: "FAIBLE",
    status: "SURVEILLANCE",
    title: "message personnel diffusé au public",
    detail: "Maman, Papa... Je sais que vous recevrez ça dans 20 minutes. Aujourd'hui ça fait exactement 2 ans que je suis partie de la maison. Je voulais juste vous dire... la Terre me manque. Vous me manquez. Mais quand je regarde par le hublot et que je vois cette planète qu'aucun humain n'a jamais vue de si près... je sais pourquoi je suis là. Je vous aime.",
    operator: "Cmdt. Sarah Chen",
    note: "Ce message a fuité sur les réseaux sociaux. Réaction publique très positive. Forte émotion. Opportunité de communication émotionnelle autour de l'aspect humain de la mission."
  },
];

const transmissionsList = document.getElementById('transmissionsList');
const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
const cursor = document.querySelector('.cursor');
const ambientOrbits = document.querySelector('.ambient-orbits');
const hoverTargets = 'a, button, .card, .transmission, .member';
const typewriterEl = document.getElementById('typewriter');
const rootElement = document.documentElement;
const galleryGrid = document.getElementById('galleryGrid');
const galleryPrev = document.getElementById('galleryPrev');
const galleryNext = document.getElementById('galleryNext');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxMeta = document.getElementById('lightboxMeta');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const galleryTooltip = document.getElementById('galleryTooltip');
const journalSection = document.getElementById('journal');
const journalBody = document.getElementById('journalBody');
const journalOutput = document.getElementById('journalOutput');
const journalStats = document.getElementById('journalStats');
const journalReplay = document.getElementById('journalReplay');
const alertCard = document.getElementById('alertCard');
const alertStatus = document.getElementById('alertStatus');
const alertModeChip = document.getElementById('alertModeChip');
const alertTimestamp = document.getElementById('alertTimestamp');
const alertVisibility = document.getElementById('alertVisibility');
const alertDescription = document.getElementById('alertDescription');
const alertFullDetails = document.getElementById('alertFullDetails');
const degradedBanner = document.getElementById('degradedBanner');
const degradedStatusBadge = document.getElementById('degradedStatusBadge');
const degradedTickerText = document.getElementById('degradedTickerText');
const degradedToggle = document.getElementById('degradedToggle');
const staticFlash = document.getElementById('staticFlash');
const restorationFlash = document.getElementById('restorationFlash');
const degradedModal = document.getElementById('degradedModal');
const degradedModalText = document.getElementById('degradedModalText');
const degradedModalClose = document.getElementById('degradedModalClose');

const idleDelay = 1500;
const idleOrbits = [
  { side: 'left', size: 150, top: 14, duration: 16, delay: 0 },
  { side: 'left', size: 94, top: 58, duration: 20, delay: 1.2 },
  { side: 'left', size: 120, top: 82, duration: 18, delay: 0.6 },
  { side: 'right', size: 170, top: 18, duration: 19, delay: 0.4 },
  { side: 'right', size: 108, top: 46, duration: 22, delay: 1.1 },
  { side: 'right', size: 88, top: 78, duration: 17, delay: 0.2 }
];

const galleryItems = [
  {
    src: 'assets/Visuel citation spatiale_2.png',
    titre: 'Visuel citation spatiale 2',
    short: 'La Terre me manque',
    lieu: 'Cupola — Kepler-452c',
    date: '30.05.2079',
    astronaute: 'Commande visuelle IFF'
  },
  {
    src: 'assets/Visuel citation spatiale.png',
    titre: 'Visuel citation spatiale',
    short: 'Je sais pourquoi je suis là',
    lieu: 'Cupola — Kepler-452c',
    date: '30.05.2079',
    astronaute: 'Commande visuelle IFF'
  },
  {
    src: 'assets/nano3.png',
    short: 'Le sol de l’autre monde',
    titre: 'Le sol de l’autre monde',
    lieu: 'Site d’atterrissage Omega',
    date: '15.03.2079',
    astronaute: 'Ing. Lena Kovač'
  },
  {
    src: 'assets/nano1.png',
    short: 'Première lumière',
    titre: 'Première lumière',
    lieu: 'Surface nord, Zone A-7',
    date: '14.03.2079',
    astronaute: 'Cmdt. Sarah Chen'
  },
  {
    src: 'assets/nano2.png',
    short: 'Depuis l’orbite basse',
    titre: 'Depuis l’orbite basse',
    lieu: 'Orbite — 340 km altitude',
    date: '11.03.2079',
    astronaute: 'Dr. Yusuf Amara'
  },
];

let idleTimer = null;
let orbitPulseTimer = null;
let activeGalleryIndex = 0;
let galleryAttraction = null;
let cursorTargetX = window.innerWidth / 2;
let cursorTargetY = window.innerHeight / 2;
let cursorActualX = cursorTargetX;
let cursorActualY = cursorTargetY;
let journalRunToken = 0;
let journalHasPlayed = false;
let degradedBannerIndex = 0;
let degradedBannerCycleTimer = null;
let corruptedTextTimer = null;
let staticFlashTimer = null;
let degradedPopupOpenTimer = null;
let degradedPopupAutoCloseTimer = null;
let degradedModalTypeToken = 0;
let restoredBannerTimer = null;

const TYPE_CLASS_MAP = {
  'SYSTÈME': 'log-type-systeme',
  'ALERTE': 'log-type-alerte',
  'CRITIQUE': 'log-type-critique',
  'INFO': 'log-type-info',
  'COMMUNICATION': 'log-type-communication',
  'RÉSOLU': 'log-type-resolu'
};

const SEVERITY_CLASS_MAP = {
  'FAIBLE': 'severity-low',
  'MOYENNE': 'severity-medium',
  'HAUTE': 'severity-high'
};

const STATUS_META = {
  'EN COURS': { label: '● EN COURS', className: 'status-progress' },
  'RÉSOLU': { label: '✓ RÉSOLU', className: 'status-resolved' },
  'SURVEILLANCE': { label: '◉ SURVEILLANCE', className: 'status-watch' }
};

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function setTickerText(text) {
  if (!degradedTickerText) return;
  degradedTickerText.textContent = `${text} // ${text} // ${text}`;
}

function renderAlertCard() {
  if (!alertCard || !alertStatus || !alertModeChip || !alertTimestamp || !alertVisibility || !alertDescription || !alertFullDetails) {
    return;
  }

  const mode = STATUS === 'public' ? 'public' : 'confidentiel';
  const data = ALERT_DATA[mode];

  alertCard.classList.toggle('is-public', mode === 'public');
  alertCard.classList.toggle('is-confidentiel', mode !== 'public');
  alertStatus.textContent = data.statusLabel;
  alertModeChip.textContent = data.chipLabel;
  alertTimestamp.textContent = data.timestamp;
  alertVisibility.textContent = data.statusLabel;
  alertDescription.textContent = data.description;
  alertFullDetails.textContent = data.fullDetails;
  alertFullDetails.hidden = mode !== 'public';
}

function startBannerCycle() {
  if (!degradedTickerText) return;
  window.clearInterval(degradedBannerCycleTimer);
  degradedBannerIndex = 0;
  setTickerText(BANNER_CYCLE_MESSAGES[degradedBannerIndex]);
  degradedBannerCycleTimer = window.setInterval(() => {
    degradedBannerIndex = (degradedBannerIndex + 1) % BANNER_CYCLE_MESSAGES.length;
    setTickerText(BANNER_CYCLE_MESSAGES[degradedBannerIndex]);
  }, 3600);
}

function stopBannerCycle() {
  window.clearInterval(degradedBannerCycleTimer);
  degradedBannerCycleTimer = null;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function corruptTextElement(node) {
  if (!node || !document.body.classList.contains('degraded')) return;
  const source = node.dataset.originalText || node.textContent || '';
  if (!source.trim()) return;

  node.dataset.originalText = source;
  const chars = source.split('');
  const candidates = chars
    .map((char, index) => ({ char, index }))
    .filter(({ char }) => /[\wÀ-ÿ]/.test(char));

  if (!candidates.length) return;

  const count = Math.min(randomInt(1, 3), candidates.length);
  for (let i = 0; i < count; i += 1) {
    const pick = candidates[randomInt(0, candidates.length - 1)];
    chars[pick.index] = GLITCH_CHARS[randomInt(0, GLITCH_CHARS.length - 1)];
  }

  node.textContent = chars.join('');
  window.setTimeout(() => {
    if (node.dataset.originalText) {
      node.textContent = node.dataset.originalText;
    }
  }, 150);
}

function scheduleTextCorruption() {
  window.clearTimeout(corruptedTextTimer);
  if (!document.body.classList.contains('degraded')) return;

  const delay = randomInt(2000, 3000);
  corruptedTextTimer = window.setTimeout(() => {
    const targets = Array.from(document.querySelectorAll('h1, h2, .hero-title'));
    if (targets.length) {
      corruptTextElement(targets[randomInt(0, targets.length - 1)]);
    }
    scheduleTextCorruption();
  }, delay);
}

function triggerStaticFlash() {
  if (!staticFlash) return;
  staticFlash.classList.add('is-active');
  window.setTimeout(() => {
    staticFlash.classList.remove('is-active');
  }, 50);
}

function scheduleStaticFlash() {
  window.clearTimeout(staticFlashTimer);
  if (!document.body.classList.contains('degraded')) return;

  const delay = randomInt(4000, 6000);
  staticFlashTimer = window.setTimeout(() => {
    triggerStaticFlash();
    scheduleStaticFlash();
  }, delay);
}

async function typeModalLines(lines, token, speed = 24) {
  if (!degradedModalText) return;
  degradedModalText.classList.add('has-caret');
  degradedModalText.textContent = '';
  for (const line of lines) {
    for (let i = 0; i < line.length; i += 1) {
      if (token !== degradedModalTypeToken) return;
      degradedModalText.textContent += line[i];
      await wait(speed);
    }
    degradedModalText.textContent += '\n';
    await wait(70);
  }
}

function closeDegradedModal() {
  degradedModalTypeToken += 1;
  window.clearTimeout(degradedPopupAutoCloseTimer);
  if (!degradedModal) return;
  if (degradedModalText) {
    degradedModalText.classList.remove('has-caret');
  }
  degradedModal.classList.remove('is-open');
  degradedModal.setAttribute('aria-hidden', 'true');
}

function openDegradedModal() {
  if (!degradedModal || !document.body.classList.contains('degraded')) return;
  degradedModalTypeToken += 1;
  const currentToken = degradedModalTypeToken;

  degradedModal.classList.add('is-open');
  degradedModal.setAttribute('aria-hidden', 'false');

  const lines = [
    '> ALERTE SYSTEME',
    '> Tempete solaire classe X7 detectee',
    '> Perturbation magnetique: 847 nT',
    '> Integrite signal Terre-Odyssey IV: 23%',
    '> Mode communications degrade active',
    '> Certaines donnees peuvent etre corrompues',
    '> [COMPRIS - FERMER]'
  ];

  typeModalLines(lines, currentToken);

  window.clearTimeout(degradedPopupAutoCloseTimer);
  degradedPopupAutoCloseTimer = window.setTimeout(() => {
    closeDegradedModal();
  }, 10000);
}

function scheduleDegradedPopup() {
  window.clearTimeout(degradedPopupOpenTimer);
  if (!document.body.classList.contains('degraded')) return;

  degradedPopupOpenTimer = window.setTimeout(() => {
    openDegradedModal();
  }, 3000);
}

function playRestorationFlash() {
  if (!restorationFlash) return;
  restorationFlash.classList.add('is-active');
  window.setTimeout(() => {
    restorationFlash.classList.remove('is-active');
  }, 300);
}

function showRestoredBanner() {
  if (!degradedBanner || !degradedStatusBadge) return;
  document.body.classList.add('show-restored-banner');
  degradedBanner.setAttribute('aria-hidden', 'false');
  degradedStatusBadge.textContent = 'STATUT: NOMINAL';
  setTickerText(RESTORED_MESSAGE);

  window.clearTimeout(restoredBannerTimer);
  restoredBannerTimer = window.setTimeout(() => {
    document.body.classList.remove('show-restored-banner');
    degradedBanner.setAttribute('aria-hidden', 'true');
  }, 5000);
}

function updateDegradedToggleLabel() {
  if (!degradedToggle) return;
  const active = document.body.classList.contains('degraded');
  degradedToggle.textContent = active
    ? '[↺ RESTAURER COMMUNICATIONS]'
    : '[↺ RESTAURER COMMUNICATIONS]';
}

function setDegradedMode(enabled, options = {}) {
  const { showPopup = true, restorationAnimation = false, restoredBanner = false } = options;

  document.body.classList.toggle('degraded', enabled);
  localStorage.setItem(DEGRADED_STORAGE_KEY, enabled ? 'true' : 'false');
  updateDegradedToggleLabel();

  if (enabled) {
    document.body.classList.remove('show-restored-banner');
    if (degradedBanner) degradedBanner.setAttribute('aria-hidden', 'false');
    if (degradedStatusBadge) degradedStatusBadge.textContent = 'STATUT: PERTURBÉ';

    startBannerCycle();
    scheduleTextCorruption();
    scheduleStaticFlash();
    if (showPopup) {
      scheduleDegradedPopup();
    }
    return;
  }

  window.clearTimeout(corruptedTextTimer);
  window.clearTimeout(staticFlashTimer);
  window.clearTimeout(degradedPopupOpenTimer);
  closeDegradedModal();
  stopBannerCycle();

  if (restorationAnimation) {
    playRestorationFlash();
  }
  if (restoredBanner) {
    showRestoredBanner();
  }
}

function getStoredDegradedMode() {
  const stored = localStorage.getItem(DEGRADED_STORAGE_KEY);
  if (stored === 'true') return true;
  if (stored === 'false') return false;
  return DEGRADED_MODE;
}

function renderJournalStats() {
  if (!journalStats) return;
  const total = MISSION_LOGS.length;
  const enCours = MISSION_LOGS.filter((log) => log.status === 'EN COURS').length;
  const resolus = MISSION_LOGS.filter((log) => log.status === 'RÉSOLU').length;
  journalStats.textContent = `INCIDENTS TOTAL: ${total} | EN COURS: ${enCours} | RÉSOLUS: ${resolus}`;
}

function removeTerminalCaret() {
  journalOutput.querySelectorAll('.terminal-caret').forEach((node) => node.remove());
}

function appendTerminalCaret() {
  removeTerminalCaret();
  const line = document.createElement('div');
  line.className = 'log-line';
  const caret = document.createElement('span');
  caret.className = 'terminal-caret';
  caret.textContent = '█';
  line.appendChild(caret);
  journalOutput.appendChild(line);
}

async function typeInto(element, text, runToken, speed = 30) {
  element.textContent = '';
  for (let i = 0; i < text.length; i += 1) {
    if (runToken !== journalRunToken) return false;
    element.textContent += text[i];
    await wait(speed);
  }
  return true;
}

function createStatusTag(status) {
  const info = STATUS_META[status] || STATUS_META['SURVEILLANCE'];
  const tag = document.createElement('span');
  tag.className = `status-tag ${info.className}`;
  tag.textContent = info.label;
  return tag;
}

async function playJournalLogs(forceReplay = false) {
  if (!journalOutput || !journalStats) return;
  if (journalHasPlayed && !forceReplay) return;

  journalHasPlayed = true;
  journalRunToken += 1;
  const currentRunToken = journalRunToken;

  journalOutput.innerHTML = '';
  renderJournalStats();

  for (const log of [...MISSION_LOGS].reverse()) {
    if (currentRunToken !== journalRunToken) return;

    const entry = document.createElement('article');
    entry.className = 'log-entry';
    if (log.type === 'COMMUNICATION') {
      entry.classList.add('log-entry-communication');
    }

    const lineMain = document.createElement('div');
    lineMain.className = 'log-line log-main';

    const mainText = document.createElement('span');
    const typeClass = TYPE_CLASS_MAP[log.type] || 'log-type-info';
    mainText.className = typeClass;
    lineMain.appendChild(mainText);

    const severityBadge = document.createElement('span');
    const severityClass = SEVERITY_CLASS_MAP[log.severity] || 'severity-medium';
    severityBadge.className = `severity-badge ${severityClass}`;
    severityBadge.textContent = log.severity;

    const statusTag = createStatusTag(log.status);

    const lineDetail = document.createElement('div');
    lineDetail.className = 'log-line log-detail';

    const lineOperator = document.createElement('div');
    lineOperator.className = 'log-line log-operator';

    const lineNote = document.createElement('div');
    lineNote.className = 'log-line log-note';

    entry.appendChild(lineMain);
    entry.appendChild(lineDetail);
    if (log.note) {
      entry.appendChild(lineNote);
    }
    entry.appendChild(lineOperator);
    journalOutput.appendChild(entry);

    const firstLineText = `> [${log.timestamp}] [${log.type}] ${log.title}`;
    const firstOk = await typeInto(mainText, firstLineText, currentRunToken, 30);
    if (!firstOk) return;

    lineMain.appendChild(severityBadge);
    lineMain.appendChild(statusTag);

    const detailOk = await typeInto(lineDetail, `  └─ ${log.detail}`, currentRunToken, 30);
    if (!detailOk) return;

    if (log.note) {
      const noteOk = await typeInto(lineNote, `  └─ NOTE COM: ${log.note}`, currentRunToken, 24);
      if (!noteOk) return;
    }

    const operatorOk = await typeInto(lineOperator, `  └─ OPR: ${log.operator}`, currentRunToken, 30);
    if (!operatorOk) return;

    appendTerminalCaret();
    if (journalBody) {
      journalBody.scrollTop = journalBody.scrollHeight;
    }
    await wait(400);
  }

  appendTerminalCaret();
}

function animateCursor() {
  cursorActualX += (cursorTargetX - cursorActualX) * 0.18;
  cursorActualY += (cursorTargetY - cursorActualY) * 0.18;
  cursor.style.transform = `translate(${cursorActualX - 16}px, ${cursorActualY - 16}px)`;
  requestAnimationFrame(animateCursor);
}

function initJournalObserver() {
  if (!journalSection) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        playJournalLogs(false);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(journalSection);
}

function renderGallery() {
  if (!galleryGrid) return;

  galleryGrid.innerHTML = galleryItems.map((item, index) => `
    <a class="gallery-card scroll-reveal ${item.hideCaption ? 'gallery-card--no-caption' : ''}" href="#" data-gallery-index="${index}" data-gallery-date="${item.date}" aria-label="Ouvrir ${item.titre}">
      <div class="gallery-media">
        <img src="${item.src}" alt="${item.titre} — ${item.lieu}" loading="lazy" />
      </div>
      ${item.hideCaption ? '' : `
      <div class="gallery-caption">
        <span class="gallery-short">${item.short}</span>
        <div class="gallery-mini">${item.lieu}</div>
      </div>
      `}
    </a>
  `).join('');

  galleryGrid.querySelectorAll('.gallery-card').forEach((card) => {
    card.addEventListener('click', (event) => {
      event.preventDefault();
      openLightbox(Number(card.dataset.galleryIndex));
    });

    card.addEventListener('pointerenter', () => {
      galleryTooltip.textContent = `Date : ${card.dataset.galleryDate}`;
      galleryTooltip.classList.add('is-visible');
      galleryTooltip.setAttribute('aria-hidden', 'false');
      card.classList.add('is-magnetic');
    });

    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;
      const magnetStrength = 0.12;
      const moveX = -deltaX * magnetStrength;
      const moveY = -deltaY * magnetStrength;

      card.style.transform = `translate(${moveX}px, ${moveY}px)`;

      const offsetX = 18;
      const offsetY = 18;
      const maxX = window.innerWidth - galleryTooltip.offsetWidth - 16;
      const maxY = window.innerHeight - galleryTooltip.offsetHeight - 16;
      const x = Math.min(event.clientX + offsetX, maxX);
      const y = Math.min(event.clientY + offsetY, maxY);
      galleryTooltip.style.left = `${x}px`;
      galleryTooltip.style.top = `${y}px`;

      cursorTargetX = event.clientX + deltaX * 0.06;
      cursorTargetY = event.clientY + deltaY * 0.06;
      galleryAttraction = { card, centerX, centerY };
    });

    card.addEventListener('pointerleave', () => {
      galleryTooltip.classList.remove('is-visible');
      galleryTooltip.setAttribute('aria-hidden', 'true');
      card.classList.remove('is-magnetic');
      card.style.transform = '';
      galleryAttraction = null;
    });
  });
}

function scrollGallery(direction) {
  if (!galleryGrid) return;
  const firstCard = galleryGrid.querySelector('.gallery-card');
  const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 320;
  const gap = 18;
  galleryGrid.scrollBy({ left: direction * (cardWidth + gap), behavior: 'smooth' });
}

function updateLightbox(index) {
  const item = galleryItems[index];
  activeGalleryIndex = index;
  lightboxImage.src = item.src;
  lightboxImage.alt = `${item.titre} — ${item.lieu}`;
  lightboxTitle.textContent = item.titre;
  lightboxMeta.textContent = `Lieu : ${item.lieu}\nDate : ${item.date}\nAstronaute : ${item.astronaute}`;
}

function openLightbox(index) {
  updateLightbox(index);
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function goToGallery(offset) {
  const nextIndex = (activeGalleryIndex + offset + galleryItems.length) % galleryItems.length;
  updateLightbox(nextIndex);
}

function applyIdleState(isIdle) {
  rootElement.classList.toggle('is-idle', isIdle);
  document.body.classList.toggle('is-idle', isIdle);
  ambientOrbits.classList.toggle('is-idle', isIdle);

  if (isIdle) {
    ambientOrbits.innerHTML = idleOrbits.map(({ side, size, top, duration, delay }, index) => `
      <span
        class="ambient-orbit ${side}"
        style="width:${size}px;height:${size}px;top:${top}vh;animation-duration:${duration}s;animation-delay:${delay}s;left:${side === 'left' ? `-${size * 0.34}px` : 'auto'};right:${side === 'right' ? `-${size * 0.34}px` : 'auto'};"
        data-orbit="${index}"
      ></span>
    `).join('');

    const orbitNodes = Array.from(ambientOrbits.querySelectorAll('.ambient-orbit'));
    requestAnimationFrame(() => {
      orbitNodes.forEach((orbit, index) => {
        setTimeout(() => orbit.classList.add('is-visible'), index * 180);
      });
    });

    orbitPulseTimer = window.setInterval(() => {
      const orbitNodesNow = Array.from(ambientOrbits.querySelectorAll('.ambient-orbit'));
      orbitNodesNow.forEach((orbit, index) => {
        orbit.classList.remove('is-visible');
        window.setTimeout(() => orbit.classList.add('is-visible'), 180 + index * 120);
      });
    }, 3800);
  } else {
    window.clearInterval(orbitPulseTimer);
    orbitPulseTimer = null;
    ambientOrbits.innerHTML = '';
  }
}

function resetIdleTimer() {
  window.clearTimeout(idleTimer);
  if (rootElement.classList.contains('is-idle')) {
    applyIdleState(false);
  }

  idleTimer = window.setTimeout(() => {
    applyIdleState(true);
  }, idleDelay);
}

const badgeClass = (type) => {
  if (type === 'ALERTE') return 'alert';
  if (type === 'INFO') return 'info';
  return 'report';
};

transmissionsList.innerHTML = transmissions.map(({ titre, date, type, contenu }) => `
  <article class="transmission scroll-reveal">
    <div class="meta-line">
      <span class="badge ${badgeClass(type)}">${type}</span>
      <span>${date}</span>
    </div>
    <h3>${titre}</h3>
    <p>${contenu}</p>
  </article>
`).join('');

renderAlertCard();
document.querySelectorAll('h1, h2').forEach((heading) => {
  heading.style.setProperty('--glitch-delay', `${(Math.random() * 3).toFixed(2)}s`);
  heading.dataset.originalText = heading.textContent;
});

setDegradedMode(getStoredDegradedMode(), { showPopup: true, restorationAnimation: false, restoredBanner: false });

renderGallery();
initJournalObserver();
renderJournalStats();
window.setTimeout(() => {
  playJournalLogs(false);
}, 220);

if (journalReplay) {
  journalReplay.addEventListener('click', () => {
    playJournalLogs(true);
  });
}

if (galleryPrev) {
  galleryPrev.addEventListener('click', () => scrollGallery(-1));
}

if (galleryNext) {
  galleryNext.addEventListener('click', () => scrollGallery(1));
}

if (degradedModalClose) {
  degradedModalClose.addEventListener('click', () => {
    closeDegradedModal();
  });
}

if (degradedModal) {
  degradedModal.addEventListener('click', (event) => {
    if (event.target === degradedModal) {
      closeDegradedModal();
    }
  });
}

if (degradedToggle) {
  degradedToggle.addEventListener('click', () => {
    const isDegraded = document.body.classList.contains('degraded');
    setDegradedMode(!isDegraded, {
      showPopup: !isDegraded,
      restorationAnimation: isDegraded,
      restoredBanner: isDegraded
    });
  });
}

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  siteNav.classList.toggle('is-open', !expanded);
  menuToggle.setAttribute('aria-label', expanded ? 'Ouvrir le menu' : 'Fermer le menu');
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll('.scroll-reveal').forEach((el) => revealObserver.observe(el));

function animateCount(node, target) {
  const isDecimal = String(target).includes('.');
  const duration = 3600;
  const start = performance.now();
  const initial = 0;

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = initial + (target - initial) * eased;
    node.textContent = isDecimal ? value.toFixed(1) : Math.round(value).toLocaleString('fr-FR');
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll('[data-count]').forEach((stat) => animateCount(stat, Number(stat.dataset.count)));
    statsObserver.unobserve(entry.target);
  });
}, { threshold: 0.45 });

statsObserver.observe(document.querySelector('.hero-stats'));

function typeText(element, text, speed = 34) {
  element.textContent = '';
  let index = 0;

  function tick() {
    element.textContent = text.slice(0, index);
    index += 1;
    if (index <= text.length) {
      setTimeout(tick, speed);
    }
  }

  tick();
}

typeText(typewriterEl, 'Le monde regarde. Nous transmettons.', 38);

const canvas = document.getElementById('starsCanvas');
const ctx = canvas.getContext('2d');
let stars = [];
let width = 0;
let height = 0;

function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  width = canvas.clientWidth;
  height = canvas.clientHeight;
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  stars = Array.from({ length: Math.max(80, Math.round((width * height) / 12000)) }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 1.6 + 0.3,
    s: Math.random() * 0.35 + 0.05,
    a: Math.random() * 0.7 + 0.15
  }));
}

function drawStars() {
  ctx.clearRect(0, 0, width, height);
  stars.forEach((star) => {
    star.y += star.s;
    if (star.y > height + 4) {
      star.y = -4;
      star.x = Math.random() * width;
    }

    ctx.beginPath();
    ctx.fillStyle = `rgba(240, 240, 255, ${star.a})`;
    ctx.shadowColor = 'rgba(0, 229, 255, 0.8)';
    ctx.shadowBlur = 8;
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();
  });

  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, 'rgba(123, 47, 255, 0.18)');
  gradient.addColorStop(1, 'rgba(5, 5, 16, 0.02)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  requestAnimationFrame(drawStars);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
drawStars();

let cursorX = window.innerWidth / 2;
let cursorY = window.innerHeight / 2;
let rafId = null;

function moveCursor() {
  cursor.style.transform = `translate(${cursorX - 16}px, ${cursorY - 16}px)`;
  rafId = null;
}

window.addEventListener('pointermove', (event) => {
  cursorX = event.clientX;
  cursorY = event.clientY;
  if (!event.target.closest('.gallery-card')) {
    cursorTargetX = event.clientX;
    cursorTargetY = event.clientY;
  }
  if (!rafId) rafId = requestAnimationFrame(moveCursor);
  resetIdleTimer();
});

window.addEventListener('pointerleave', () => {
  cursor.style.opacity = '0';
});

window.addEventListener('pointerenter', () => {
  cursor.style.opacity = '1';
});

document.addEventListener('pointerover', (event) => {
  cursor.classList.toggle('is-hover', Boolean(event.target.closest(hoverTargets)));
});

window.addEventListener('scroll', () => {
  galleryTooltip.classList.remove('is-visible');
  galleryTooltip.setAttribute('aria-hidden', 'true');
}, { passive: true });

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', () => goToGallery(-1));
lightboxNext.addEventListener('click', () => goToGallery(1));

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox || event.target === lightboxImage || event.target === lightboxMeta || event.target === lightboxTitle) {
    closeLightbox();
  }
});

['scroll', 'keydown', 'touchstart', 'mousemove'].forEach((eventName) => {
  window.addEventListener(eventName, resetIdleTimer, { passive: true });
});

animateCursor();

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' && lightbox.classList.contains('is-open')) {
    goToGallery(-1);
    return;
  }

  if (event.key === 'ArrowRight' && lightbox.classList.contains('is-open')) {
    goToGallery(1);
    return;
  }

  if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
    closeLightbox();
    return;
  }

  if (event.key === 'Escape') {
    siteNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
  }
});

resetIdleTimer();