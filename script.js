const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const header = document.querySelector('.site-header');
let lastY = window.scrollY;

window.addEventListener(
  'scroll',
  () => {
    const currentY = window.scrollY;
    if (currentY > 40) {
      header.style.boxShadow = '0 8px 30px rgba(20,70,120,.06)';
    } else {
      header.style.boxShadow = 'none';
    }
    lastY = currentY;
  },
  { passive: true },
);
