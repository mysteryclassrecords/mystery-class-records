const carousel = document.querySelector('.artist-image-carousel'); // ⬅️ fixed wrapper
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-track .artist-image');
const prevButton = document.querySelector('.carousel-button.left');
const nextButton = document.querySelector('.carousel-button.right');

let currentIndex = 0;

function updateCarousel() {
  const slideWidth = slides[0].clientWidth;
  const offset = -currentIndex * slideWidth;
  track.style.transform = `translateX(${offset}px)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

// ✅ SWIPE SUPPORT - attach to stable container
let startX = 0;
let endX = 0;
const swipeThreshold = 50;

carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const distance = endX - startX;
  if (Math.abs(distance) > swipeThreshold) {
    if (distance < 0) {
      currentIndex = (currentIndex + 1) % slides.length;
    } else {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    }
    updateCarousel();
  }
}

window.addEventListener('resize', updateCarousel);
updateCarousel();
