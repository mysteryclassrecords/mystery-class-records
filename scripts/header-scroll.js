const header = document.querySelector('.header');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const nav = document.querySelector('.nav');

// Check if it's mobile mode
const isMobile = () => window.innerWidth <= 768;

// Handle header toggle in mobile mode
const toggleHeader = () => {
  header.classList.toggle('expanded');
  nav.classList.toggle('active');
};

// Add click event to the hamburger icon
hamburgerIcon.addEventListener('click', toggleHeader);

// Remove scroll-based header behavior in mobile mode
const handleScroll = () => {
  if (!isMobile()) {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      // Scrolling down: Hide header
      header.style.transform = `translateY(-${header.getBoundingClientRect().height}px)`;
    } else {
      // Scrolling up: Show header
      header.style.transform = 'translateY(0)';
    }
    lastScrollY = currentScrollY;
  } else {
    // Ensure the header remains visible in mobile mode
    header.style.transform = 'translateY(0)';
  }
};

// Throttle scroll event for performance
let lastScrollY = window.scrollY;
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll();
      ticking = false;
    });
    ticking = true;
  }
});

// Update behavior on resize
window.addEventListener('resize', () => {
  if (isMobile()) {
    header.style.transform = 'translateY(0)';
  }
});
