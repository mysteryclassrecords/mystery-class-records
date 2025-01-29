document.addEventListener("DOMContentLoaded", function () {
    let isMobile = window.innerWidth < 768; // Check initial device type
    let merchBlocks = document.querySelectorAll(".merch-block");

    function checkMerchBlockPositions() {
        const viewportHeight = window.innerHeight;

        merchBlocks.forEach(block => {
            const rect = block.getBoundingClientRect();

            if (rect.top < viewportHeight * 0.2) {
                block.classList.add("scrolled"); // Show hover image
            } else {
                block.classList.remove("scrolled"); // Show default image
            }
        });
    }

    function setupMobileScrollDetection() {
        if (isMobile) {
            window.addEventListener("scroll", checkMerchBlockPositions);
            checkMerchBlockPositions(); // Run once on load
        } else {
            window.removeEventListener("scroll", checkMerchBlockPositions);
        }
    }

    // Run script initially
    setupMobileScrollDetection();

    // Detect if the screen switches between desktop and mobile
    window.addEventListener("resize", function () {
        const newIsMobile = window.innerWidth < 768;

        if (newIsMobile !== isMobile) {
            isMobile = newIsMobile;
            setupMobileScrollDetection(); // Restart scroll detection if viewport changes
        }
    });
});
