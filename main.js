// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

// IntersectionObserver for animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('inview');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.animate-up, .animate-fade').forEach(el => observer.observe(el));

// Active year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Product filters
const chips = document.querySelectorAll('.chip');
const products = document.querySelectorAll('.product');
chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const filter = chip.dataset.filter;
    products.forEach(p => {
      p.style.display = (filter === 'all' || p.dataset.category === filter) ? '' : 'none';
    });
  });
});
