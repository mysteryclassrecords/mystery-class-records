document.addEventListener('DOMContentLoaded', () => {
    const loadPartial = (selector, url) => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to load ${url}: ${response.status} ${response.statusText}`);
          }
          return response.text();
        })
        .then(data => {
          const targetElement = document.querySelector(selector);
          if (targetElement) {
            targetElement.outerHTML = data;
          } else {
            console.error(`Target element for selector "${selector}" not found.`);
          }
        })
        .catch(error => console.error(error));
    };
  
    // Load header and footer
    loadPartial('header', '../partials/header.html');
    loadPartial('footer', '../partials/footer.html');
  });
  