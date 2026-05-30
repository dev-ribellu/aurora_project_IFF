(() => {
  const timelineEntries = [
      {
        timestamp: "00:14:08 UTC",
        title: "Approche du secteur 7",
        description: "Laurent et Wong confirment une émission faible avant toute entrée dans la zone active.",
        image: createCrystalImage("#0ff0ff", "#0d1b2a", "#06101c", "Approche du secteur 7")
      },
      {
        timestamp: "00:18:51 UTC",
        title: "Structure observée",
        description: "Une forme cristalline bioluminescente est isolée visuellement; la hauteur est estimée à 3,2 mètres.",
        image: createCrystalImage("#70ffff", "#10233a", "#08131f", "Structure observée")
      },
      {
        timestamp: "00:22:19 UTC",
        title: "Protocole NOVA",
        description: "La corrélation entre l'émission lumineuse et la signature du signal déclenche l'activation du protocole NOVA.",
        image: createCrystalImage("#00f5ff", "#0a1626", "#05090f", "Protocole NOVA")
      }
    ];

    const galleryCards = [
      {
        label: "Lecture 01",
        title: "Noyau cristallin",
        caption: "Éclairage cyan, contours actifs et couche de contraste renforcée pour lecture de terrain.",
        image: createCrystalImage("#00f5ff", "#09131f", "#03060c", "Noyau cristallin")
      },
      {
        label: "Lecture 02",
        title: "Emission cyclique",
        caption: "Fenêtre d'observation montrant la cadence lumineuse exacte de 47 secondes.",
        image: createCrystalImage("#7efcff", "#0b1c2f", "#05090f", "Emission cyclique")
      },
      {
        label: "Lecture 03",
        title: "Signature validée",
        caption: "La source du signal est confirmée dans le volume de la structure et non dans le bruit ambiant.",
        image: createCrystalImage("#6be8ff", "#08111d", "#020409", "Signature validée")
      }
    ];

    const stats = {
      height: {
        value: 3.2,
        suffix: "m",
        label: "Hauteur",
        note: "Mesure retenue après recalage optique et validation croisée."
      },
      cycle: {
        value: 47,
        suffix: "s",
        label: "Emission cycle",
        note: "La récurrence lumineuse reste constante à 47 secondes."
      },
      field: {
        value: 1,
        suffix: "",
        label: "Champ électromagnétique",
        note: "Niveau faible mais mesurable, confirmé par instrumentation."
      },
      status: {
        value: 1,
        suffix: "",
        label: "Status",
        note: "Etat actuel : ACTIVE, sous observation continue."
      }
    };

    // ============================================================
    // FAQ — SOURCE DE VÉRITÉ UNIQUE
    // Pour ajouter une réponse publique :
    // 1. Consulter les questions via Ctrl+Shift+E
    // 2. Exporter le CSV si besoin
    // 3. Ajouter un objet { question, answer } dans le tableau ci-dessous
    // 4. Sauvegarder — la FAQ se met à jour automatiquement
    // ============================================================
    const faqItems = [
      {
        question: "Qu'est-ce que la structure de secteur 7 ?",
        answer: "Une structure de source inconnue présentant une émission bioluminescente, un volume cristallin et une cohérence instrumentale suffisante pour être classée comme phénomène naturel inexpliqué."
      }
      
      
    ];

    const timelineGrid = document.getElementById("timelineGrid");
    const galleryGrid = document.getElementById("galleryGrid");
    const statsGrid = document.getElementById("statsGrid");
    const faqGrid = document.getElementById("faqGrid");
    const faqStage = document.getElementById("faqStage");
    const novaQuestionForm = document.getElementById("novaQuestionForm");
    const novaQuestionName = document.getElementById("novaQuestionName");
    const novaQuestionText = document.getElementById("novaQuestionText");
    const novaQuestionSubmit = novaQuestionForm ? novaQuestionForm.querySelector(".question-submit") : null;
    const novaQuestionFeedback = document.getElementById("novaQuestionFeedback");
    const novaAdminModal = document.getElementById("novaAdminModal");
    const novaAdminPanel = novaAdminModal ? novaAdminModal.querySelector(".nova-modal-panel") : null;
    const novaAdminClose = document.getElementById("novaAdminClose");
    const novaExportCsv = document.getElementById("novaExportCsv");
    const novaClearAll = document.getElementById("novaClearAll");
    const novaPendingQuestions = document.getElementById("novaPendingQuestions");
    const novaAdminConnectionState = document.getElementById("novaAdminConnectionState");
    const novaAdminConnectionDot = document.getElementById("novaAdminConnectionDot");
    const novaAdminConnectionText = document.getElementById("novaAdminConnectionText");
    const novaAdminStatusMessage = document.getElementById("novaAdminStatusMessage");
    const particleCanvas = document.getElementById("particleCanvas");
    const particleContext = particleCanvas.getContext("2d");
    const novaGlowCore = document.querySelector(".glow-core");
    const novaHeroPanel = document.querySelector(".hero-panel");
    const novaStatementStage = document.querySelector(".statement-stage");
    const novaStatsCards = () => Array.from(document.querySelectorAll(".stat-card"));
    const NOVA_QUESTIONS_KEY = "nova_questions";
    const NOVA_QUESTIONS_STATUT = "EN ATTENTE";
    const APPS_SCRIPT_PLACEHOLDER = "PASTE_YOUR_WEB_APP_URL_HERE";
    const APPS_SCRIPT_ENDPOINT = typeof APPS_SCRIPT_URL === "string" ? APPS_SCRIPT_URL : APPS_SCRIPT_PLACEHOLDER;
    const pageLoadedAt = Date.now();
    let novaPulseTimeout = null;
    let novaPulseInterval = null;
    let statPulseInterval = null;
    let shootingStarInterval = null;
    let activeNovaAudioContext = null;
    let previousAdminFocus = null;
    let adminSheetQuestions = [];
    let adminQuestionsLoaded = false;

    function createCrystalImage(accent, base, deep, label) {
      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" role="img" aria-label="${label}">
          <defs>
            <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="${deep}" />
              <stop offset="100%" stop-color="${base}" />
            </linearGradient>
            <radialGradient id="glow" cx="50%" cy="45%" r="40%">
              <stop offset="0%" stop-color="${accent}" stop-opacity="0.95" />
              <stop offset="35%" stop-color="${accent}" stop-opacity="0.32" />
              <stop offset="100%" stop-color="${accent}" stop-opacity="0" />
            </radialGradient>
          </defs>
          <rect width="1200" height="800" fill="url(#bg)" />
          <ellipse cx="600" cy="410" rx="280" ry="220" fill="url(#glow)" />
          <polygon points="600,150 730,280 690,590 600,700 510,590 470,280" fill="${accent}" fill-opacity="0.82" />
          <polygon points="600,205 690,310 670,560 600,646 530,560 510,310" fill="#f7ffff" fill-opacity="0.18" />
          <polygon points="468,290 600,150 510,310" fill="#ffffff" fill-opacity="0.18" />
          <polygon points="730,280 600,150 690,310" fill="#ffffff" fill-opacity="0.12" />
          <polygon points="470,580 510,310 600,700" fill="#ffffff" fill-opacity="0.08" />
          <polygon points="730,280 670,560 600,700" fill="#ffffff" fill-opacity="0.08" />
          <path d="M120 640 C240 560, 350 540, 480 560 S760 620, 1080 520" stroke="${accent}" stroke-opacity="0.28" stroke-width="6" fill="none" />
          <path d="M160 690 C320 620, 430 620, 560 650 S820 700, 1110 600" stroke="#ffffff" stroke-opacity="0.14" stroke-width="3" fill="none" />
          <text x="60" y="740" fill="#ffffff" fill-opacity="0.72" font-family="monospace" font-size="42" letter-spacing="6">${label}</text>
        </svg>
      `;
      return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
    }

    function renderTimeline() {
      timelineGrid.innerHTML = timelineEntries.map((entry) => `
        <article class="timeline-card reveal">
          <!-- Texte : horodatage timeline -->
          <div class="timeline-time">${entry.timestamp}</div>
          <!-- Texte : titre timeline -->
          <h3 class="timeline-title">${entry.title}</h3>
          <!-- Texte : description timeline -->
          <p class="timeline-description">${entry.description}</p>
          <figure class="timeline-media">
            <!-- Image : illustration de chronologie -->
            <img src="${entry.image}" alt="Illustration scientifique de ${entry.title}" />
            <!-- Texte : légende image chronologie -->
            <figcaption class="timeline-media-caption">Slot image modulaire prêt à être remplacé par une photographie de mission.</figcaption>
          </figure>
        </article>
      `).join("");
    }

    function renderGallery() {
      galleryGrid.innerHTML = galleryCards.map((card) => `
        <article class="gallery-card reveal">
          <!-- Image : vignette de galerie -->
          <img src="${card.image}" alt="${card.title}" data-parallax="true" />
          <div class="gallery-overlay">
            <!-- Texte : label de galerie -->
            <div class="section-kicker">${card.label}</div>
            <!-- Texte : titre de galerie -->
            <h3 class="panel-title">${card.title}</h3>
            <!-- Texte : légende de galerie -->
            <p class="gallery-caption">${card.caption}</p>
          </div>
        </article>
      `).join("");
    }

    function renderStats() {
      const entries = Object.entries(stats);
      statsGrid.innerHTML = entries.map(([key, stat]) => `
        <article class="stat-card reveal" data-stat-key="${key}" data-target="${stat.value}">
          <!-- Texte : valeur statistique -->
          <div class="stat-value" data-count-target>${stat.label === "Status" ? "ACTIVE" : "0"}${stat.suffix}</div>
          <!-- Texte : label statistique -->
          <div class="stat-label">${stat.label}</div>
          <!-- Texte : note statistique -->
          <p class="stat-note">${stat.note}</p>
        </article>
      `).join("");
    }

    function renderFaq() {
      faqGrid.innerHTML = faqItems.map((item, index) => `
        <article class="faq-item reveal" data-open="${index === 0 ? "true" : "false"}">
          <!-- Texte : question FAQ -->
          <button class="faq-question" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
            <span>${item.question}</span>
            <span aria-hidden="true">+</span>
          </button>
          <!-- Texte : réponse FAQ -->
          <div class="faq-answer">
            <div class="faq-answer-inner">${item.answer}</div>
          </div>
        </article>
      `).join("");
    }

    function getStoredQuestions() {
      try {
        const raw = localStorage.getItem(NOVA_QUESTIONS_KEY);
        const parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed) ? parsed : [];
      } catch (error) {
        return [];
      }
    }

    function setStoredQuestions(questions) {
      localStorage.setItem(NOVA_QUESTIONS_KEY, JSON.stringify(questions));
    }

    // ============================================================
    // QUESTIONS — NORMALISATION ET SYNCHRONISATION SHEET
    // ============================================================
    function createQuestionId() {
      if (window.crypto && typeof window.crypto.randomUUID === "function") {
        return window.crypto.randomUUID();
      }

      return `nova-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    }

    // ============================================================
    // QUESTIONS — NORMALISER UN ENREGISTREMENT BRUT
    // ============================================================
    function normalizeQuestionEntry(entry) {
      if (!entry || typeof entry !== "object") {
        return null;
      }

      const id = String(entry.id || entry.ID || "").trim();
      const timestamp = String(entry.timestamp || entry.Timestamp || "").trim();
      const prenom = String(entry.prenom ?? entry.name ?? entry.Prénom ?? "").trim();
      const question = String(entry.question || entry.Question || "").trim();
      const rawStatut = String(entry.statut || entry.status || entry.Statut || NOVA_QUESTIONS_STATUT).trim();
      const statut = rawStatut.toUpperCase() === "PENDING" ? NOVA_QUESTIONS_STATUT : rawStatut || NOVA_QUESTIONS_STATUT;

      if (!id || !question) {
        return null;
      }

      return {
        id,
        timestamp,
        prenom,
        question,
        statut
      };
    }

    // ============================================================
    // QUESTIONS — LIRE LE STOCKAGE LOCAL
    // ============================================================
    function getLocalQuestions() {
      return getStoredQuestions()
        .map(normalizeQuestionEntry)
        .filter(Boolean);
    }

    // ============================================================
    // QUESTIONS — ENREGISTRER LE STOCKAGE LOCAL
    // ============================================================
    function setLocalQuestions(questions) {
      setStoredQuestions(questions.map((entry) => ({
        id: entry.id,
        timestamp: entry.timestamp,
        prenom: entry.prenom,
        question: entry.question,
        statut: entry.statut || NOVA_QUESTIONS_STATUT
      })));
    }

    // ============================================================
    // QUESTIONS — DÉDUPLICATION ET TRI PAR DATE
    // ============================================================
    function mergeQuestions(sheetQuestions, localQuestions) {
      const mergedMap = new Map();

      [...sheetQuestions, ...localQuestions].forEach((entry) => {
        const normalized = normalizeQuestionEntry(entry);
        if (normalized) {
          mergedMap.set(normalized.id, normalized);
        }
      });

      return Array.from(mergedMap.values()).sort((left, right) => {
        const leftTime = Date.parse(left.timestamp) || 0;
        const rightTime = Date.parse(right.timestamp) || 0;
        return rightTime - leftTime;
      });
    }

    // ============================================================
    // QUESTIONS — METTRE À JOUR L'ÉTAT DU MODAL ADMIN
    // ============================================================
    function setAdminConnectionState(state) {
      if (!novaAdminConnectionState || !novaAdminConnectionDot || !novaAdminConnectionText) {
        return;
      }

      const isConnected = state === "sheet";
      novaAdminConnectionDot.style.background = isConnected ? "#3ddc84" : "#f4c542";
      novaAdminConnectionDot.style.boxShadow = isConnected ? "0 0 0.9rem rgba(61,220,132,0.5)" : "0 0 0.9rem rgba(244,197,66,0.55)";
      novaAdminConnectionText.textContent = isConnected ? "CONNECTÉ AU SHEET" : "MODE LOCAL";
      novaAdminConnectionState.dataset.state = isConnected ? "sheet" : "local";
    }

    // ============================================================
    // QUESTIONS — AFFICHER LE STATUT TERMINAL ADMIN
    // ============================================================
    function setAdminStatusMessage(message) {
      if (novaAdminStatusMessage) {
        novaAdminStatusMessage.textContent = message;
      }
    }

    // ============================================================
    // QUESTIONS — AFFICHER UN MESSAGE DE FEEDBACK FORMULAIRE
    // ============================================================
    function setQuestionFeedback(message, isError = false) {
      if (!novaQuestionFeedback) {
        return;
      }

      novaQuestionFeedback.textContent = message;
      novaQuestionFeedback.dataset.state = isError ? "error" : "success";
    }

    // ============================================================
    // QUESTIONS — CONSTRUIRE LE RENDU ADMIN À PARTIR D'UNE LISTE
    // ============================================================
    function renderPendingQuestions(questions = mergeQuestions(adminSheetQuestions, getLocalQuestions())) {
      if (!novaPendingQuestions) {
        return;
      }

      if (!questions.length) {
        novaPendingQuestions.innerHTML = `<tr><td class="nova-empty-state" colspan="5">Aucune question en attente.</td></tr>`;
        return;
      }

      novaPendingQuestions.innerHTML = questions.map((entry) => `
        <tr>
          <td>${escapeHtml(entry.id)}</td>
          <td>${escapeHtml(entry.timestamp || "—")}</td>
          <td>${escapeHtml(entry.prenom || "—")}</td>
          <td>${escapeHtml(entry.question)}</td>
          <td>${escapeHtml(entry.statut || NOVA_QUESTIONS_STATUT)}</td>
        </tr>
      `).join("");
    }

    // ============================================================
    // QUESTIONS — CHARGER LES DONNÉES SHEET
    // ============================================================
    async function fetchSheetQuestions() {
      if (!APPS_SCRIPT_ENDPOINT || APPS_SCRIPT_ENDPOINT === APPS_SCRIPT_PLACEHOLDER) {
        return [];
      }

      const response = await fetch(APPS_SCRIPT_ENDPOINT, {
        method: "GET",
        mode: "cors"
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const payload = await response.json();
      return Array.isArray(payload) ? payload.map(normalizeQuestionEntry).filter(Boolean) : [];
    }

    // ============================================================
    // QUESTIONS — CHARGER LE MODAL ADMIN AVEC FALLBACK LOCAL
    // ============================================================
    async function loadAdminQuestions() {
      setAdminStatusMessage("> CHARGEMENT DES DONNÉES...");

      if (!APPS_SCRIPT_ENDPOINT || APPS_SCRIPT_ENDPOINT === APPS_SCRIPT_PLACEHOLDER) {
        adminSheetQuestions = [];
        adminQuestionsLoaded = true;
        setAdminConnectionState("local");
        renderPendingQuestions();
        setAdminStatusMessage("> MODE LOCAL — Apps Script non configuré.");
        return;
      }

      try {
        const sheetQuestions = await fetchSheetQuestions();
        adminSheetQuestions = sheetQuestions;
        adminQuestionsLoaded = true;
        setAdminConnectionState("sheet");
        renderPendingQuestions();
        setAdminStatusMessage("> DONNÉES CHARGÉES DEPUIS LE SHEET.");
      } catch (error) {
        adminSheetQuestions = [];
        adminQuestionsLoaded = true;
        setAdminConnectionState("local");
        renderPendingQuestions();
        setAdminStatusMessage("> CONNEXION SHEET IMPOSSIBLE — affichage local uniquement");
      }
    }

    // ============================================================
    // QUESTIONS — PERSISTER UNE QUESTION EN LOCAL
    // ============================================================
    function saveQuestionLocally(entry) {
      const localQuestions = getLocalQuestions();
      localQuestions.unshift(entry);
      setLocalQuestions(localQuestions);
      renderPendingQuestions();
    }

    function escapeCsvCell(value) {
      return `"${String(value).replace(/"/g, '""')}"`;
    }

    function escapeHtml(value) {
      return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
    }

    function downloadCsv(filename, rows) {
      const csv = rows.map((row) => row.map(escapeCsvCell).join(",")).join("\r\n");
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    }

    function closeNovaAdminModal() {
      if (!novaAdminModal) {
        return;
      }

      novaAdminModal.classList.remove("is-open");
      novaAdminModal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";

      if (previousAdminFocus && typeof previousAdminFocus.focus === "function") {
        previousAdminFocus.focus();
      }
    }

    function getFocusableAdminElements() {
      if (!novaAdminPanel) {
        return [];
      }

      return Array.from(novaAdminPanel.querySelectorAll("button, [href], input, textarea, select, [tabindex]:not([tabindex='-1'])"))
        .filter((element) => !element.hasAttribute("disabled") && element.getAttribute("aria-hidden") !== "true");
    }

    function trapAdminFocus(event) {
      if (event.key !== "Tab" || !novaAdminModal || !novaAdminModal.classList.contains("is-open")) {
        return;
      }

      const focusable = getFocusableAdminElements();
      if (!focusable.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    async function openNovaAdminModal() {
      if (!novaAdminModal) {
        return;
      }

      previousAdminFocus = document.activeElement;
      setAdminConnectionState("local");
      setAdminStatusMessage("> CHARGEMENT DES DONNÉES...");
      renderPendingQuestions([]);
      novaAdminModal.classList.add("is-open");
      novaAdminModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";

      const focusable = getFocusableAdminElements();
      if (focusable.length) {
        focusable[0].focus();
      }

      await loadAdminQuestions();
    }

    function exportPendingQuestionsToCsv() {
      const questions = mergeQuestions(adminSheetQuestions, getLocalQuestions());
      const rows = [
        ["ID", "Timestamp", "Prénom", "Question", "Statut"],
        ...questions.map((entry) => [entry.id, entry.timestamp, entry.prenom || "", entry.question, entry.statut || NOVA_QUESTIONS_STATUT])
      ];
      downloadCsv("nova-questions-export.csv", rows);
    }

    function clearAllPendingQuestions() {
      const confirmClear = window.confirm("Effacer toutes les questions en attente ?");
      if (!confirmClear) {
        return;
      }

      localStorage.removeItem(NOVA_QUESTIONS_KEY);
      renderPendingQuestions();
      setAdminStatusMessage("> STOCKAGE LOCAL EFFACÉ. Le Sheet n'a pas été modifié.");
    }

    async function submitNovaQuestion(event) {
      event.preventDefault();

      if (!novaQuestionForm || !novaQuestionText || !novaQuestionFeedback) {
        return;
      }

      const question = novaQuestionText.value.trim();
      const name = novaQuestionName ? novaQuestionName.value.trim() : "";

      if (!question) {
        novaQuestionText.focus();
        return;
      }

      const prenom = novaQuestionName ? novaQuestionName.value.trim() : "";
      const entry = {
        id: createQuestionId(),
        timestamp: new Date().toISOString(),
        prenom,
        question,
        statut: NOVA_QUESTIONS_STATUT
      };

      if (novaQuestionSubmit) {
        novaQuestionSubmit.disabled = true;
        novaQuestionSubmit.textContent = "> TRANSMISSION EN COURS...";
      }

      setQuestionFeedback("");

      if (APPS_SCRIPT_ENDPOINT === APPS_SCRIPT_PLACEHOLDER) {
        console.warn("NOVA: Apps Script URL not configured — fallback to localStorage");
        saveQuestionLocally(entry);
        novaQuestionForm.reset();
        setQuestionFeedback("> QUESTION TRANSMISE — EN ATTENTE DE VALIDATION.");
        if (novaQuestionSubmit) {
          novaQuestionSubmit.disabled = false;
          novaQuestionSubmit.textContent = "ENVOYER LA QUESTION";
        }
        return;
      }

      const payload = {
        id: entry.id,
        timestamp: entry.timestamp,
        prenom: entry.prenom,
        question: entry.question,
        statut: entry.statut
      };

      try {
        await fetch(APPS_SCRIPT_ENDPOINT, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain"
          },
          body: JSON.stringify(payload)
        });

        saveQuestionLocally(entry);
        adminSheetQuestions = mergeQuestions(adminSheetQuestions, [entry]);
        novaQuestionForm.reset();
        setQuestionFeedback("> QUESTION TRANSMISE — EN ATTENTE DE VALIDATION.");
      } catch (error) {
        saveQuestionLocally(entry);
        novaQuestionForm.reset();
        setQuestionFeedback("> ERREUR TRANSMISSION — Réessayez ou contactez le centre de contrôle.", true);
      } finally {
        if (novaQuestionSubmit) {
          novaQuestionSubmit.disabled = false;
          novaQuestionSubmit.textContent = "ENVOYER LA QUESTION";
        }
      }
    }

    function wireFaq() {
      faqGrid.querySelectorAll(".faq-item").forEach((item) => {
        const button = item.querySelector(".faq-question");
        button.addEventListener("click", () => {
          const isOpen = item.dataset.open === "true";
          item.dataset.open = String(!isOpen);
          button.setAttribute("aria-expanded", String(!isOpen));
        });
      });
    }

    function observeReveal() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (entry.target.matches("[data-stat-key]")) {
              animateStat(entry.target);
            }
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.18 });

      document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    }

    function animateStat(card) {
      const valueNode = card.querySelector("[data-count-target]");
      const target = Number(card.dataset.target || 0);
      const statKey = card.dataset.statKey;
      if (statKey === "status") {
        valueNode.textContent = "ACTIVE";
        return;
      }

      const suffix = card.querySelector(".stat-label")?.textContent === "Hauteur" ? "m" : card.querySelector(".stat-label")?.textContent === "Emission cycle" ? "s" : "";
      const duration = 1400;
      const start = performance.now();

      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = target === 3.2 ? (3.2 * eased) : target * eased;
        const display = target === 3.2 ? current.toFixed(1) : Math.round(current).toString();
        valueNode.textContent = `${display}${suffix}`;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          valueNode.textContent = `${target}${suffix}`;
        }
      }

      requestAnimationFrame(step);
    }

    function updateParallax() {
      let ticking = false;

      function onScroll() {
        if (!ticking) {
          requestAnimationFrame(() => {
            const scrollY = window.scrollY || 0;

            document.querySelectorAll("[data-parallax='true']").forEach((image, index) => {
              const card = image.closest(".gallery-card");
              if (!card) {
                return;
              }
              const rect = card.getBoundingClientRect();
              const center = rect.top + rect.height / 2;
              const offset = (window.innerHeight / 2 - center) * 0.5;
              image.style.setProperty("--parallax", `${offset}px`);
            });

            const faqOffset = scrollY * 0.3;
            faqStage.style.setProperty("--faq-parallax", `${faqOffset}px`);
            ticking = false;
          });

          ticking = true;
        }
      }

      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    function triggerNovaPulse() {
      if (novaGlowCore) {
        novaGlowCore.classList.remove("is-pulsing");
        void novaGlowCore.offsetWidth;
        novaGlowCore.classList.add("is-pulsing");
      }

      if (novaHeroPanel) {
        const ripple = document.createElement("span");
        ripple.className = "nova-ripple";
        novaHeroPanel.appendChild(ripple);
        window.setTimeout(() => ripple.remove(), 1800);
      }

      const flash = document.createElement("div");
      flash.className = "nova-flash";
      document.body.appendChild(flash);
      window.setTimeout(() => flash.remove(), 300);

      if (window.AudioContext || window.webkitAudioContext) {
        try {
          const AudioCtor = window.AudioContext || window.webkitAudioContext;
          activeNovaAudioContext = activeNovaAudioContext || new AudioCtor();
          const oscillator = activeNovaAudioContext.createOscillator();
          const gainNode = activeNovaAudioContext.createGain();
          oscillator.type = "sine";
          oscillator.frequency.value = 432;
          gainNode.gain.value = 0.0001;
          oscillator.connect(gainNode);
          gainNode.connect(activeNovaAudioContext.destination);
          oscillator.start();
          gainNode.gain.exponentialRampToValueAtTime(0.08, activeNovaAudioContext.currentTime + 0.02);
          gainNode.gain.exponentialRampToValueAtTime(0.0001, activeNovaAudioContext.currentTime + 0.2);
          oscillator.stop(activeNovaAudioContext.currentTime + 0.22);
        } catch (error) {
          // Audio cue is optional; ignore browser restrictions.
        }
      }
    }

    function scheduleNovaPulseCycle() {
      window.clearTimeout(novaPulseTimeout);
      window.clearInterval(novaPulseInterval);

      const elapsed = Date.now() - pageLoadedAt;
      const delay = 47000 - (elapsed % 47000);

      novaPulseTimeout = window.setTimeout(() => {
        triggerNovaPulse();
        novaPulseInterval = window.setInterval(triggerNovaPulse, 47000);
      }, delay);
    }

    function pulseRandomStatCard() {
      const cards = novaStatsCards();
      if (!cards.length) {
        return;
      }

      const card = cards[Math.floor(Math.random() * cards.length)];
      card.classList.add("is-pulsing");
      window.setTimeout(() => card.classList.remove("is-pulsing"), 600);
    }

    function scheduleStatPulses() {
      window.clearInterval(statPulseInterval);
      pulseRandomStatCard();
      statPulseInterval = window.setInterval(pulseRandomStatCard, 12000);
    }

    function spawnShootingStar(stars) {
      stars.push({
        x: Math.random() * 0.75,
        y: Math.random() * 0.45,
        vx: 0.012 + Math.random() * 0.012,
        vy: 0.008 + Math.random() * 0.008,
        life: 1,
        length: 120 + Math.random() * 90,
        width: 1.5 + Math.random()
      });
    }

    function setupParticleField() {
      const particles = [];
      const shootingStars = [];
      const count = 86;

      function resize() {
        const rect = particleCanvas.getBoundingClientRect();
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        particleCanvas.width = Math.max(Math.floor(rect.width * ratio), 1);
        particleCanvas.height = Math.max(Math.floor(rect.height * ratio), 1);
        particleContext.setTransform(ratio, 0, 0, ratio, 0, 0);
      }

      function createParticle() {
        return {
          x: Math.random(),
          y: Math.random(),
          radius: 0.6 + Math.random() * 1.9,
          speed: 0.03 + Math.random() * 0.08,
          drift: (Math.random() - 0.5) * 0.04,
          alpha: 0.22 + Math.random() * 0.58
        };
      }

      for (let index = 0; index < count; index += 1) {
        particles.push(createParticle());
      }

      window.clearInterval(shootingStarInterval);
      shootingStarInterval = window.setInterval(() => spawnShootingStar(shootingStars), 8000);
      spawnShootingStar(shootingStars);

      function draw() {
        const width = particleCanvas.clientWidth;
        const height = particleCanvas.clientHeight;
        particleContext.clearRect(0, 0, width, height);

        particles.forEach((particle, index) => {
          particle.y -= particle.speed * 0.002;
          particle.x += particle.drift * 0.002;

          if (particle.y < -0.1) {
            particles[index] = createParticle();
            particles[index].y = 1.1;
          }

          if (particle.x < -0.1) particle.x = 1.1;
          if (particle.x > 1.1) particle.x = -0.1;

          const x = particle.x * width;
          const y = particle.y * height;
          const size = particle.radius;

          particleContext.beginPath();
          particleContext.fillStyle = `rgba(0, 229, 255, ${particle.alpha})`;
          particleContext.shadowBlur = 12;
          particleContext.shadowColor = "rgba(0, 229, 255, 0.85)";
          particleContext.arc(x, y, size, 0, Math.PI * 2);
          particleContext.fill();
        });

        shootingStars.forEach((star, index) => {
          star.x += star.vx;
          star.y += star.vy;
          star.life -= 0.018;

          if (star.life <= 0 || star.x > 1.2 || star.y > 1.2) {
            shootingStars.splice(index, 1);
            return;
          }

          const x = star.x * width;
          const y = star.y * height;
          const dx = star.length * (width / 1200);
          const dy = star.length * 0.18 * (height / 800);

          particleContext.save();
          particleContext.globalAlpha = Math.max(star.life, 0);
          particleContext.strokeStyle = "rgba(0, 229, 255, 0.95)";
          particleContext.lineWidth = star.width;
          particleContext.shadowBlur = 18;
          particleContext.shadowColor = "rgba(0, 229, 255, 0.9)";
          particleContext.beginPath();
          particleContext.moveTo(x, y);
          particleContext.lineTo(x - dx, y - dy);
          particleContext.stroke();
          particleContext.restore();
        });

        requestAnimationFrame(draw);
      }

      resize();
      window.addEventListener("resize", resize, { passive: true });
      requestAnimationFrame(draw);
    }

    function wireQuestionForm() {
      if (!novaQuestionForm) {
        return;
      }

      novaQuestionForm.addEventListener("submit", submitNovaQuestion);
    }

    function wireNovaAdminModal() {
      if (!novaAdminModal) {
        return;
      }

      document.addEventListener("keydown", (event) => {
        if (event.key === "E" && event.ctrlKey && event.shiftKey) {
          event.preventDefault();
          openNovaAdminModal();
          return;
        }

        if (event.key === "Escape" && novaAdminModal.classList.contains("is-open")) {
          closeNovaAdminModal();
          return;
        }

        trapAdminFocus(event);
      });

      novaAdminModal.addEventListener("click", (event) => {
        if (event.target === novaAdminModal) {
          closeNovaAdminModal();
        }
      });

      if (novaAdminClose) {
        novaAdminClose.addEventListener("click", closeNovaAdminModal);
      }

      if (novaExportCsv) {
        novaExportCsv.addEventListener("click", exportPendingQuestionsToCsv);
      }

      if (novaClearAll) {
        novaClearAll.addEventListener("click", clearAllPendingQuestions);
      }
    }

    renderTimeline();
    renderGallery();
    renderStats();
    renderFaq();
    renderPendingQuestions();
    wireFaq();
    wireQuestionForm();
    wireNovaAdminModal();
    observeReveal();
    updateParallax();
    setupParticleField();
    scheduleNovaPulseCycle();
    scheduleStatPulses();
  })();
