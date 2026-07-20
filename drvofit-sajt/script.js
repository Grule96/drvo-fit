// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  // Slow ambient rotation for tree-ring / gymnastic-ring signature graphics
  const rings = document.querySelectorAll('.ring-rotate');
  rings.forEach((ring, i) => {
    let angle = 0;
    const speed = 0.02 + (i * 0.005);
    function spin() {
      angle += speed;
      ring.style.transform = `rotate(${angle}deg)`;
      requestAnimationFrame(spin);
    }
    requestAnimationFrame(spin);
  });
});
