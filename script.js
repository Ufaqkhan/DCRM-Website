/* ── DCRM-ViT — Script ────────────────── */

// ── Tab switching ──
document.querySelectorAll('.table-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.table-tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.table-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('panel-' + btn.dataset.tab).classList.add('active');
  });
});

// ── Reveal on scroll ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Copy BibTeX ──
function copyBibtex() {
  const text = document.getElementById('bibtex').innerText;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector('.copy-btn');
    const original = btn.textContent;
    btn.textContent = '✓ Copied!';
    setTimeout(() => { btn.textContent = original; }, 1600);
  });
}

// ── Teaser Slideshow ──
(function () {
  const slides = document.querySelectorAll('.slide');
  const progressBar = document.querySelector('.progress-bar');
  if (!slides.length || !progressBar) return;

  let current = 0;
  const total = slides.length;
  const SLIDE_DURATION = 7000; // 7 seconds per slide
  let timer = null;
  let startTime = null;
  let animFrame = null;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    slides[index].classList.add('active');
    current = index;
    startTime = Date.now();
  }

  function updateProgress() {
    if (!startTime) return;
    const elapsed = Date.now() - startTime;
    const slideProgress = Math.min(elapsed / SLIDE_DURATION, 1);
    const totalProgress = ((current + slideProgress) / total) * 100;
    progressBar.style.width = totalProgress + '%';

    if (slideProgress >= 1) {
      const next = (current + 1) % total;
      showSlide(next);
    }
    animFrame = requestAnimationFrame(updateProgress);
  }

  // Start
  showSlide(0);
  animFrame = requestAnimationFrame(updateProgress);

  // Click on slide to advance
  document.querySelector('.teaser-presentation').addEventListener('click', (e) => {
    if (e.target.closest('a') || e.target.closest('button')) return;
    const next = (current + 1) % total;
    showSlide(next);
  });

  // Pause on hover
  const container = document.querySelector('.teaser-presentation');
  let paused = false;
  container.addEventListener('mouseenter', () => {
    paused = true;
    if (animFrame) cancelAnimationFrame(animFrame);
  });
  container.addEventListener('mouseleave', () => {
    paused = false;
    startTime = Date.now() - ((Date.now() - startTime)); // resume from where we left off
    animFrame = requestAnimationFrame(updateProgress);
  });
})();
