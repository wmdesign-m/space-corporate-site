const cursorGlow = document.querySelector(".cursor-glow");
const reveals = document.querySelectorAll(".reveal");
const navToggle = document.querySelector(".nav-toggle");
const globalNav = document.querySelector(".global-nav");
const serviceToggles = document.querySelectorAll(".service-toggle");
const contactForm = document.querySelector(".contact-form");

const siteHeader = document.querySelector(".site-header");

if (siteHeader) {
  const handleHeaderScroll = () => {
    if (window.scrollY > 24) {
      siteHeader.classList.add("is-scrolled");
    } else {
      siteHeader.classList.remove("is-scrolled");
    }
  };

  handleHeaderScroll();
  window.addEventListener("scroll", handleHeaderScroll);
}

if (cursorGlow) {
  window.addEventListener("mousemove", (event) => {
    cursorGlow.style.opacity = "1";
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.16 },
);

reveals.forEach((element) => observer.observe(element));

if (navToggle && globalNav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    globalNav.classList.toggle("is-open");
  });

  globalNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      globalNav.classList.remove("is-open");
    });
  });
}

serviceToggles.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.target);
    const isOpen = target.classList.contains("is-open");

    document.querySelectorAll(".service-detail").forEach((detail) => {
      detail.classList.remove("is-open");
    });

    serviceToggles.forEach((toggle) => {
      toggle.setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      target.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
    }
  });
});

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert(
      "デモサイトのため送信は行われません。実運用時はフォーム送信先の実装を追加してください。",
    );
  });
}
