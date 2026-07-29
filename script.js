// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('active');
});

// Close menu when a link is tapped
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
  });
});

// ===== Navbar shadow on scroll =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 8);
});

// ===== Booking form (demo — no backend) =====
const form = document.getElementById('bookingForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  note.hidden = false;
  form.querySelector('button[type="submit"]').textContent = 'Request Sent ✓';
  form.reset();
  note.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// ===== Current year in footer =====
document.getElementById('year').textContent = new Date().getFullYear();
