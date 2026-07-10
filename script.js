/* ============================================================
   PORTFOLIO — Interactions
   Edit EMAIL below to change the copy target.
   ============================================================ */

const EMAIL = "joshinkoshys@gmail.com";

// --- Set copyright year ---
document.getElementById("year").textContent = new Date().getFullYear();

// --- Copy email helpers ---
function flashCopied() {
  const kbd = document.getElementById("copyKbd");
  const label = document.getElementById("copyLabel");
  const emailIcon = document.getElementById("emailIcon");
  if (kbd) { kbd.textContent = "✓"; }
  if (label) { label.textContent = "copied!"; }
  if (emailIcon) { emailIcon.textContent = "✓"; }
  setTimeout(() => {
    if (kbd) kbd.textContent = "C";
    if (label) label.textContent = "to copy my email";
    if (emailIcon) emailIcon.textContent = "📋";
  }, 1600);
}

function copyEmail() {
  navigator.clipboard.writeText(EMAIL).then(flashCopied).catch(() => {
    // Fallback for older browsers
    const t = document.createElement("textarea");
    t.value = EMAIL; document.body.appendChild(t); t.select();
    document.execCommand("copy"); document.body.removeChild(t);
    flashCopied();
  });
}

document.getElementById("copyBtn").addEventListener("click", copyEmail);
document.getElementById("emailBtn").addEventListener("click", copyEmail);

// --- Press "C" anywhere to copy email ---
window.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() !== "c" || e.metaKey || e.ctrlKey || e.altKey) return;
  const tag = (e.target && e.target.tagName) || "";
  if (["INPUT", "TEXTAREA"].includes(tag)) return;
  copyEmail();
});

// --- Mobile nav (hamburger toggle) ---
const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");
const navBackdrop = document.getElementById("navBackdrop");

function closeNav() {
  siteNav.classList.remove("open");
  navBackdrop.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}
function toggleNav() {
  const isOpen = siteNav.classList.toggle("open");
  navBackdrop.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
}
navToggle.addEventListener("click", toggleNav);
navBackdrop.addEventListener("click", closeNav);
siteNav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeNav));

// --- Starfield: twinkling, slowly drifting dots for a space-like backdrop ---
(function initStarfield() {
  const canvas = document.getElementById("starfield");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let stars = [];
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function createStars() {
    const count = Math.min(90, Math.floor((width * height) / 15000));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.1 + 0.6,
      baseAlpha: Math.random() * 0.25 + 0.22,
      twinkleSpeed: Math.random() * 0.006 + 0.0015,
      twinklePhase: Math.random() * Math.PI * 2,
      vx: (Math.random() - 0.5) * 0.018,
      vy: (Math.random() - 0.5) * 0.018,
    }));
  }

  function draw(t) {
    ctx.clearRect(0, 0, width, height);
    stars.forEach((s) => {
      s.x += s.vx;
      s.y += s.vy;
      if (s.x < 0) s.x = width;
      if (s.x > width) s.x = 0;
      if (s.y < 0) s.y = height;
      if (s.y > height) s.y = 0;

      const alpha = Math.max(0, Math.min(0.65, s.baseAlpha + Math.sin(t * s.twinkleSpeed + s.twinklePhase) * 0.16));
      ctx.beginPath();
      ctx.fillStyle = `rgba(205, 210, 230, ${alpha})`;
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", () => {
    resize();
    createStars();
  });

  resize();
  createStars();
  requestAnimationFrame(draw);
})();

// --- One-time decrypt/glitch effect on name + role when the page first loads ---
(function initGlitchIntro() {
  const targets = [
    { el: document.getElementById("glitchName"), text: "Joshin K Saju" },
    { el: document.getElementById("glitchRole"), text: "Full-Stack Developer / ML Engineer" },
  ];
  const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!<>-_\\/[]{}—=+*^?#$%";

  function scramble(el, finalText, duration) {
    if (!el) return;
    const len = finalText.length;
    const totalFrames = Math.round(duration / 45);
    let frame = 0;

    function step() {
      const revealCount = Math.floor((frame / totalFrames) * len);
      let out = "";
      for (let i = 0; i < len; i++) {
        if (finalText[i] === " " || finalText[i] === "/") {
          out += finalText[i];
        } else if (i < revealCount) {
          out += finalText[i];
        } else {
          out += glyphs[Math.floor(Math.random() * glyphs.length)];
        }
      }
      el.textContent = out;
      frame++;
      if (frame <= totalFrames) {
        requestAnimationFrame(step);
      } else {
        el.textContent = finalText;
      }
    }
    step();
  }

  window.addEventListener("load", () => {
    scramble(targets[0].el, targets[0].text, 2200);
    setTimeout(() => scramble(targets[1].el, targets[1].text, 1800), 600);
  });
})();

// --- Scroll-reveal animations (also fills skill bars when About enters view) ---
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");

        // Animate any skill bars inside the section that just revealed
        const fills = entry.target.querySelectorAll(".skill-bar-fill");
        fills.forEach((fill) => {
          const pct = fill.dataset.fill || 0;
          requestAnimationFrame(() => { fill.style.width = pct + "%"; });
        });

        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));