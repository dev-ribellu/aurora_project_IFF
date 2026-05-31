// =========================================
// Setup
// =========================================
const canvas = document.getElementById("signal-canvas");
const ctx = canvas.getContext("2d");
const contactText = document.getElementById("contact-text");

// =========================================
// Audio
// =========================================
let audioContext = null;
let oscillator = null;
let gainNode = null;
let audioReady = false;

let centerX = 0;
let centerY = 0;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  centerX = canvas.width / 2;
  centerY = canvas.height / 2;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// =========================================
// Souris
// =========================================
const mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  previousX: window.innerWidth / 2,
  previousY: window.innerHeight / 2,
  hasMoved: false,
};

let hoverStart = null;
let contactActive = false;
let tremorFactor = 1;

window.addEventListener("pointermove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
  mouse.hasMoved = true;

  if (!audioReady) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    oscillator = audioContext.createOscillator();
    gainNode = audioContext.createGain();

    oscillator.type = "sine";
    oscillator.frequency.value = 80;
    gainNode.gain.value = 0.03;

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.start();
    audioReady = true;
  }

  if (audioContext && audioContext.state === "suspended") {
    audioContext.resume();
  }
});

// =========================================
// Helpers
// =========================================
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function lerp(start, end, amount) {
  return start + (end - start) * amount;
}

function easeOutCubic(value) {
  const t = clamp(value, 0, 1);
  return 1 - Math.pow(1 - t, 3);
}

function distance(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}

function pulseProfile(phase) {
  if (phase < 20) {
    return lerp(0, 40, phase / 20);
  }

  if (phase < 50) {
    return 35 + Math.sin((phase - 20) * 0.7) * 3.5;
  }

  if (phase < 200) {
    return lerp(40, 0, easeOutCubic((phase - 50) / 150));
  }

  if (phase < 230) {
    return lerp(0, 8, (phase - 200) / 30);
  }

  if (phase < 300) {
    return lerp(8, 0, (phase - 230) / 70);
  }

  return 0;
}

function ecgProfile(x, time) {
  const cycle = 132;
  const phase = ((x + time * 0.055) % cycle) / cycle;

  if (phase < 0.14) {
    return Math.sin((phase / 0.14) * Math.PI) * 2.2;
  }

  if (phase < 0.22) {
    const t = (phase - 0.14) / 0.08;
    return lerp(2.2, -3.2, t);
  }

  if (phase < 0.26) {
    const t = (phase - 0.22) / 0.04;
    return lerp(-3.2, 16, t);
  }

  if (phase < 0.29) {
    const t = (phase - 0.26) / 0.03;
    return lerp(16, -6, t);
  }

  if (phase < 0.36) {
    const t = (phase - 0.29) / 0.07;
    return lerp(-6, 2.8, t);
  }

  if (phase < 0.58) {
    const t = (phase - 0.36) / 0.22;
    return Math.sin(t * Math.PI) * 4.2;
  }

  if (phase < 0.76) {
    return Math.sin((phase - 0.58) / 0.18 * Math.PI) * 1.4;
  }

  return 0;
}

function microNoise(x, time, seed) {
  const a = Math.sin(x * 0.035 + time * 0.0018 + seed) * 0.8;
  const b = Math.sin(x * 0.11 - time * 0.0024 + seed * 1.7) * 0.5;
  const c = Math.sin(x * 0.23 + time * 0.0009 + seed * 2.9) * 0.3;
  return a + b + c;
}

function proximityToCircle() {
  return distance(mouse.x, mouse.y, centerX, centerY);
}

function curveFactor() {
  const radius = proximityToCircle();
  if (radius >= 100) {
    return 0;
  }

  return 1 - radius / 100;
}

function drawPolyline(points) {
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);

  for (let index = 1; index < points.length; index += 1) {
    ctx.lineTo(points[index].x, points[index].y);
  }

  ctx.stroke();
}

function updateAudio() {
  if (!audioReady || !audioContext || !oscillator || !gainNode) {
    return;
  }

  const now = audioContext.currentTime;
  const radius = proximityToCircle();
  let targetFrequency = 80;
  let targetGain = 0.01;

  if (radius <= 100) {
    targetFrequency = 400;
    targetGain = 0.08;
  } else if (radius < 300) {
    const mix = (300 - radius) / 200;
    targetFrequency = lerp(80, 400, mix);
    targetGain = lerp(0.01, 0.08, mix);
  }

  oscillator.frequency.setTargetAtTime(targetFrequency, now, 0.03);
  gainNode.gain.setTargetAtTime(targetGain, now, 0.04);
}

// =========================================
// Lignes
// =========================================
function computeUpperY(x, time, pulseX) {
  if (contactActive) {
    return centerY;
  }

  const baseY = centerY - canvas.height * 0.28;
  const proximity = curveFactor();
  const centeredBase = lerp(baseY, centerY, proximity * proximity);
  const wave = (
    ecgProfile(x, time) * 1.45 +
    Math.sin(x * 0.008 + time * 0.0014) * 2.8 +
    Math.sin(x * 0.0036 + time * 0.0009) * 1.9
  ) * (1 + (tremorFactor - 1) * 1.0);
  const pulseDistance = Math.abs(x - pulseX);
  const pulseWidth = 70;
  const pulse = pulseDistance < pulseWidth ? pulseProfile((pulseDistance / pulseWidth) * 300) * 0.65 : 0;

  return centeredBase + wave + pulse;
}

function computeLowerY(x, time, pulseX) {
  if (contactActive) {
    return centerY;
  }

  const baseY = centerY + canvas.height * 0.28;
  const proximity = curveFactor();
  const centeredBase = lerp(baseY, centerY, proximity * proximity);
  const wave = (
    microNoise(x, time * 1.18, 2.1) * 1.8 +
    Math.sin(x * 0.0075 + time * 0.0017) * 2.6 +
    Math.sin(x * 0.0028 - time * 0.0009) * 1.3
  ) * (1 + (tremorFactor - 1) * 1.1);
  const pulseDistance = Math.abs(x - pulseX);
  const pulseWidth = 120;
  const pulse = pulseDistance < pulseWidth ? pulseProfile((pulseDistance / pulseWidth) * 300) * 0.9 : 0;

  return centeredBase + wave + pulse;
}

function getPulseX(time, offset) {
  return (((time + offset) % 4700) / 4700) * canvas.width;
}

// =========================================
// Rendu
// =========================================
function drawFrame(time) {
  const speed = mouse.hasMoved
    ? distance(mouse.x, mouse.y, mouse.previousX, mouse.previousY)
    : 0;
  const nearCircle = proximityToCircle() < 100;

  if (nearCircle && speed < 5) {
    if (hoverStart === null) {
      hoverStart = time;
    }

    tremorFactor = lerp(tremorFactor, 1 + speed * 0.03, 0.08);
  } else {
    hoverStart = null;
    contactActive = false;
    contactText.style.opacity = "0";
    tremorFactor = lerp(tremorFactor, 1, 0.06);
  }

  if (hoverStart !== null && time - hoverStart >= 3000) {
    contactActive = true;
    contactText.style.opacity = "1";
  }

  updateAudio();

  mouse.previousX = mouse.x;
  mouse.previousY = mouse.y;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Ligne ECG
  const ecgPoints = [];
  const step = 4;
  const upperPulseX = getPulseX(time, 0);
  const lowerPulseX = getPulseX(time, 1630);

  for (let x = 0; x <= canvas.width; x += step) {
    ecgPoints.push({ x, y: computeUpperY(x, time, upperPulseX) });
  }

  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 1.4;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  drawPolyline(ecgPoints);

  // Ligne Alien
  const alienPoints = [];

  for (let x = 0; x <= canvas.width; x += step) {
    alienPoints.push({ x, y: computeLowerY(x, time, lowerPulseX) });
  }

  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 1.4;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  drawPolyline(alienPoints);

  // Cercle central
  ctx.beginPath();
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 1.5;
  ctx.arc(centerX, centerY, Math.min(canvas.width, canvas.height) * 0.065, 0, Math.PI * 2);
  ctx.stroke();

  // Curseur custom dessiné en dernier
  ctx.beginPath();
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 1.5;
  ctx.moveTo(mouse.x - 12, mouse.y);
  ctx.lineTo(mouse.x + 12, mouse.y);
  ctx.moveTo(mouse.x, mouse.y - 12);
  ctx.lineTo(mouse.x, mouse.y + 12);
  ctx.stroke();

  requestAnimationFrame(drawFrame);
}

requestAnimationFrame(drawFrame);