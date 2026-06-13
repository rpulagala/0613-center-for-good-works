/* ==============================================
   CENTER FOR GOOD WORKS — main.js
   ============================================== */

'use strict';

// --- Intersection Observer: scroll reveals ---
const revealEls = document.querySelectorAll('.reveal');

if (revealEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach((el) => observer.observe(el));
}

// --- Navigation: scroll state ---
const nav      = document.getElementById('nav');
const navLinks = document.getElementById('navLinks');
const navToggle = document.getElementById('navToggle');

let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      nav.classList.toggle('scrolled', window.scrollY > 70);
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

// --- Navigation: mobile menu ---
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open navigation menu');
      document.body.style.overflow = '';
    });
  });
}

// --- Smooth scroll: anchor links ---
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const offset = nav ? nav.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// --- Hero scroll hint fade ---
const scrollHint = document.querySelector('.hero__scroll-hint');
if (scrollHint) {
  window.addEventListener('scroll', () => {
    const fade = 1 - window.scrollY / (window.innerHeight * 0.55);
    scrollHint.style.opacity = Math.max(0, fade).toFixed(2);
  }, { passive: true });
}

// --- Contact form: submit handler ---
const contactForm = document.getElementById('contactForm');
const formStatus  = document.getElementById('formStatus');
const submitBtn   = document.getElementById('submitBtn');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic validation
    const name    = document.getElementById('name');
    const email   = document.getElementById('email');
    const message = document.getElementById('message');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      showStatus('Please complete the required fields above.', 'error');
      return;
    }

    if (!isValidEmail(email.value)) {
      showStatus('Please enter a valid email address.', 'error');
      return;
    }

    // Simulate submission (replace with real endpoint or form service)
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    submitBtn.style.opacity = '0.65';

    setTimeout(() => {
      showStatus('Your inquiry has been received. We will be in touch soon.', 'success');
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = 'Inquire About Hosting a Retreat';
      submitBtn.style.opacity = '1';
    }, 1400);
  });
}

function showStatus(msg, type) {
  if (!formStatus) return;
  formStatus.textContent = msg;
  formStatus.style.color = type === 'error'
    ? '#c47838'
    : 'var(--gold)';
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// --- Staggered retreat-type reveal ---
const retreatTypes = document.querySelectorAll('.retreat-type');

if (retreatTypes.length) {
  const staggerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Number(entry.target.dataset.staggerIdx || 0);
          entry.target.style.transitionDelay = `${idx * 0.08}s`;
          entry.target.classList.add('revealed');
          staggerObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  retreatTypes.forEach((el, i) => {
    el.dataset.staggerIdx = i % 4; // reset per row of 4
    staggerObserver.observe(el);
  });
}

// --- Keyboard: close mobile menu on Escape ---
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navLinks && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation menu');
    document.body.style.overflow = '';
    navToggle.focus();
  }
});
