/* ── DCRM-ViT — Minimal Script ────────────────── */

// Tab switching
document.querySelectorAll('.table-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.table-tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.table-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('panel-' + btn.dataset.tab).classList.add('active');
  });
});

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Copy BibTeX
function copyBibtex() {
  const text = document.getElementById('bibtex').innerText;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector('.copy-btn');
    const original = btn.textContent;
    btn.textContent = '✓ Copied!';
    setTimeout(() => { btn.textContent = original; }, 1600);
  });
}
