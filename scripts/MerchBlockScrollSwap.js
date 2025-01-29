document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth < 768) { // Only run on mobile
        const merchBlocks = document.querySelectorAll(".merch-block");

        function checkMerchBlockPositions() {
            const viewportHeight = window.innerHeight; // Get viewport height

            merchBlocks.forEach(block => {
                const rect = block.getBoundingClientRect(); // Get element position

                if (rect.top < viewportHeight * 0.2) {
                    // If the block is in the TOP 20% of the viewport
                    block.classList.add("scrolled"); // Show hover image
                } else {
                    // If the block is in the BOTTOM 80% of the viewport
                    block.classList.remove("scrolled"); // Show default image
                }
            });
        }

        // Run the function on page scroll
        window.addEventListener("scroll", checkMerchBlockPositions);

        // Run once when the page loads in case some elements are already visible
        checkMerchBlockPositions();
    }
});
