//   Hamburger Menu Toggle
const hamburger = document.querySelector('.navbar__toggle-wrapper');
const mobileMenu = document.querySelector('.navbar__mobile-menu');

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle('open');
});

// Close menu when a link is clicked
document.querySelectorAll('.navbar__mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        mobileMenu.classList.remove('open');
    }
});

//   Navbar Shadow on Scroll
window.addEventListener('scroll', () => {
    document.querySelector('.header').classList.toggle('scrolled', window.scrollY > 20);
});