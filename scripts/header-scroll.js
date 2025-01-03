let lastScrollY = window.scrollY;
const header = document.querySelector('.header');
let threshold = 50; // Adjust to your preference

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (Math.abs(currentScrollY - lastScrollY) < threshold) return;

  if (currentScrollY > lastScrollY) {
    // Scrolling down
    header.style.transform = 'translateY(-110px)';
  } else {
    // Scrolling up
    header.style.transform = 'translateY(0)';
  }

  lastScrollY = currentScrollY;
});
