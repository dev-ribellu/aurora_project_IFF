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

const transmissionsList = document.getElementById('transmissionsList');
const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
const cursor = document.querySelector('.cursor');
const ambientOrbits = document.querySelector('.ambient-orbits');
const hoverTargets = 'a, button, .card, .transmission, .member';
const typewriterEl = document.getElementById('typewriter');
const rootElement = document.documentElement;

const idleDelay = 1500;
const idleOrbits = [
  { side: 'left', size: 150, top: 14, duration: 16, delay: 0 },
  { side: 'left', size: 94, top: 58, duration: 20, delay: 1.2 },
  { side: 'left', size: 120, top: 82, duration: 18, delay: 0.6 },
  { side: 'right', size: 170, top: 18, duration: 19, delay: 0.4 },
  { side: 'right', size: 108, top: 46, duration: 22, delay: 1.1 },
  { side: 'right', size: 88, top: 78, duration: 17, delay: 0.2 }
];

let idleTimer = null;
let orbitPulseTimer = null;

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

['scroll', 'keydown', 'touchstart', 'mousemove'].forEach((eventName) => {
  window.addEventListener(eventName, resetIdleTimer, { passive: true });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    siteNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
  }
});

resetIdleTimer();