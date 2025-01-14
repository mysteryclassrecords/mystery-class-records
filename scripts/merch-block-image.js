document.addEventListener('DOMContentLoaded', function () {
    const shopDomain = '3eyau1-rk.myshopify.com'; // Replace with your Shopify store domain
    const storefrontAccessToken = '6dbf61b263e46db8a392d40ccdbf8901'; // Replace with your Storefront API token

    // Initialize Shopify Client
    const client = ShopifyBuy.buildClient({
        domain: shopDomain,
        storefrontAccessToken: storefrontAccessToken,
    });

    // Debug: Check if Shopify Client is initialized
    if (!client) {
        console.error('ShopifyBuy Client failed to initialize.');
        return;
    }

    // Find all merch blocks with a data-product-id attribute
    const merchBlocks = document.querySelectorAll('.merch-block[data-product-id]');

    merchBlocks.forEach((merchBlock) => {
        const productId = merchBlock.getAttribute('data-product-id'); // Get product ID
        const imagePlaceholder = merchBlock.querySelector('.image-placeholder'); // Target the image placeholder

        if (productId && imagePlaceholder) {
            // Fetch product details by ID
            client.product.fetch(productId).then((product) => {
                console.log('Fetched product:', product); // Debug: Log product details

                if (product.images && product.images.length > 0) {
                    const imageUrl = product.images[0].src; // Get the first product image
                    console.log('Image URL:', imageUrl); // Debug: Log the image URL

                    // Inject the product image into the placeholder
                    const productImage = document.createElement('img'); // Create an image element
                    productImage.src = imageUrl;
                    productImage.alt = product.title;
                    productImage.classList.add('product-image'); // Add a class for styling
                    imagePlaceholder.appendChild(productImage); // Inject the image into the placeholder
                } else {
                    console.error(`No images found for product ID: ${productId}`);
                }
            }).catch((error) => {
                console.error(`Error fetching product with ID ${productId}:`, error);
            });
        } else {
            console.warn('Merch block missing product ID or image placeholder:', merchBlock);
        }
    });
});
