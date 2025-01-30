document.addEventListener("DOMContentLoaded", function () {
    const productImageContainer = document.querySelector(".product-image");
    const productImage = productImageContainer.querySelector("img");
    let isZoomed = false; // Track zoom state

    productImageContainer.style.cursor = "zoom-in"; // Default cursor

    productImageContainer.addEventListener("click", (e) => {
        if (!isZoomed) {
            // Activate Zoom
            productImage.style.transform = "scale(2)"; // Adjust zoom level
            productImageContainer.style.cursor = "zoom-out";
            isZoomed = true;
        } else {
            // Deactivate Zoom
            productImage.style.transformOrigin = "center";
            productImage.style.transform = "scale(1)";
            productImageContainer.style.cursor = "zoom-in";
            isZoomed = false;
        }
    });

    productImageContainer.addEventListener("mousemove", (e) => {
        if (isZoomed) {
            const { left, top, width, height } = productImageContainer.getBoundingClientRect();
            const xPercent = ((e.clientX - left) / width) * 100;
            const yPercent = ((e.clientY - top) / height) * 100;

            productImage.style.transformOrigin = `${xPercent}% ${yPercent}%`;
        }
    });
});
