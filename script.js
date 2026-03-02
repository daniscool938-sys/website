// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('show');
  });
}

// Fade-in on scroll using IntersectionObserver
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

faders.forEach((el) => observer.observe(el));

// Gallery lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const galleryItems = document.querySelectorAll('.gallery-item');
const closeBtn = document.querySelector('.lightbox-close');

galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    lightboxImage.src = item.dataset.img;
    lightbox.classList.add('show');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});

const closeLightbox = () => {
  lightbox.classList.remove('show');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
};

closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});

// Dynamic copyright year
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
