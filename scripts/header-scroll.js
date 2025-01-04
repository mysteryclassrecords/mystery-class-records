const header = document.querySelector('.header');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const nav = document.querySelector('.nav');
const headerSpacer = document.querySelector('.header-spacer');
let lastScrollY = window.scrollY;
let isHeaderHidden = false;

// Check if it's mobile mode
const isMobile = () => window.innerWidth <= 768;

// Handle header toggle in mobile mode
const toggleHeader = () => {
  const isExpanded = header.classList.toggle('expanded');
  nav.classList.toggle('active');

  // Adjust the header-spacer height based on the header state
  if (isMobile()) {
    headerSpacer.style.height = isExpanded ? '280px' : '110px';
  }
};

// Add click event to the hamburger icon
hamburgerIcon.addEventListener('click', toggleHeader);

// Ensure correct spacer height on page load and resize
const updateHeaderSpacerHeight = () => {
  if (isMobile()) {
    const isExpanded = header.classList.contains('expanded');
    headerSpacer.style.height = isExpanded ? '306px' : '110px';
    // Ensure the header stays fixed in mobile mode
    header.style.transform = 'translateY(0)';
  } else {
    // Reset to default for desktop
    headerSpacer.style.height = '100px';
  }
};

// Handle scroll-based header behavior in desktop mode
const handleScroll = () => {
  if (!isMobile()) {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      // Scrolling down: Hide header
      header.style.transform = `translateY(-${header.getBoundingClientRect().height}px)`;
      isHeaderHidden = true;
    } else {
      // Scrolling up: Show header
      header.style.transform = 'translateY(0)';
      isHeaderHidden = false;
    }
    lastScrollY = currentScrollY;
  }
};

// Show header when mouse hovers near the top in desktop mode
const handleMouseMove = (event) => {
  if (!isMobile() && isHeaderHidden && event.clientY < 50) {
    header.style.transform = 'translateY(0)';
    isHeaderHidden = false;
  }
};

// Throttle scroll event for performance
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

// Listen for mouse movement near the top of the screen
window.addEventListener('mousemove', handleMouseMove);

// Update spacer height and header behavior on resize
window.addEventListener('resize', updateHeaderSpacerHeight);

// Initialize spacer height on page load
updateHeaderSpacerHeight();
