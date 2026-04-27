const navToggle = document.querySelector('.nav-toggle');
const globalNav = document.querySelector('.global-nav');

if (navToggle && globalNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = globalNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dot');

if (slides.length) {
  let current = 0;

  const setSlide = (next) => {
    slides.forEach((slide, idx) => slide.classList.toggle('is-active', idx === next));
    dots.forEach((dot, idx) => dot.classList.toggle('is-active', idx === next));
    current = next;
  };

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => setSlide(idx));
  });

  setInterval(() => setSlide((current + 1) % slides.length), 5500);
}

const accordionTriggers = document.querySelectorAll('.accordion-trigger');
accordionTriggers.forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.accordion-item');
    const expanded = item.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(expanded));
  });
});

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('デモサイトのため送信は行われません。運用時に送信処理を接続してください。');
  });
}
