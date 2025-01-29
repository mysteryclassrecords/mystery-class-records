(function () {
    var client = ShopifyBuy.buildClient({
        domain: "3eyau1-rk.myshopify.com", // Replace with your Shopify store domain
        storefrontAccessToken: "6dbf61b263e46db8a392d40ccdbf8901", // Replace with your API token
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent("cart", {
            node: document.getElementById("shopify-cart"),
            options: {
                cart: {
                    startOpen: true, // Opens the cart by default
                    styles: {
                        button: {
                            "background-color": "#0B1215",
                            "color": "#FFFFFF",
                            "font-size": "18px",
                            "border-radius": "8px",
                        },
                    },
                },
            },
        });
    });
})();
