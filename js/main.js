
// Theme toggle
const toggle = document.getElementById('themeToggle');
toggle?.addEventListener('click', () => {
  const root = document.documentElement;
  const isLight = root.classList.toggle('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});
// Persist theme
(() => {
  const saved = localStorage.getItem('theme');
  if(saved === 'light'){ document.documentElement.classList.add('light'); }
})();
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});
// Current year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll reveal
const revealElements = document.querySelectorAll('.fade-up, .slide-left, .slide-right');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

revealElements.forEach(el => observer.observe(el));
