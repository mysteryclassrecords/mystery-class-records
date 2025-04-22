document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    const hamburger = document.querySelector(".hamburger-icon button");
    const nav = document.querySelector(".nav");
    const spacer = document.querySelector(".header-spacer");
  
    hamburger.addEventListener("click", () => {
      const isExpanded = header.getAttribute("data-expanded") === "true";
  
      // Toggle the expanded state
      header.setAttribute("data-expanded", !isExpanded);
      nav.classList.toggle("active");
  
      // Adjust the header spacer dynamically
      if (!isExpanded) {
        spacer.style.height = `${header.scrollHeight + parseInt(getComputedStyle(spacer).height)}px`;
      } else {
        spacer.style.height = `calc(var(--header-height) + var(--rainbow-height))`;
      }
    });
  });
  