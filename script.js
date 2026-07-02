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

// --- Scroll-reveal animations ---
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));