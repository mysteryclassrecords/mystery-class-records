(function () {
    const buttonContainer = document.querySelector('.product-buy-button');
    const productId = buttonContainer.getAttribute('data-product-id'); // Get product ID

    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }

    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.head || document.body).appendChild(script);
        script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: '3eyau1-rk.myshopify.com',
            storefrontAccessToken: '6dbf61b263e46db8a392d40ccdbf8901',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: productId,
                node: document.getElementById('product-add-to-cart'),
                options: {
                    product: {
                        contents: {
                            button: true,
                            imgWithCarousel: false,
                            img: false,
                            title: false,
                            description: false,
                            price: false,
                            options: false,
                        },
                        layout: 'vertical',
                        styles: {
                            button: {
                                "font-family": "coolvetica, sans-serif",
                                "font-weight": "400",
                                "font-style": "italic",
                                "font-size": "32px",
                                "background-color": "#0B1215",
                                "color": "#F3F4F6",
                                "border-radius": "50px",
                                "padding": "12px 24px",
                                "text-transform": "none",
                                "transition": "all 0.3s ease", /* Smooth animation */
                                "letter-spacing": "0.5px",
                                "width": "auto",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "overflow": "visible",
                                "transform-origin": "center",
                                ":hover": {
                                    "font-weight": "400",
                                    "font-style": "italic",
                                    "background-color": "#0B1215",
                                    "color": "#F3F4F6",
                                },
                                ":focus": {
                                    "background-color": "#0B1215",
                                    "color": "#F3F4F6",
                                },
                            },
                        },
                        text: {
                            button: "ADD TO CART",
                        },
                    },
                },
            }).then(function (components) {
                let buttonElement = document.querySelector("#product-add-to-cart iframe");
                let buttonContainer = document.querySelector(".product-buy-button");
                
                if (buttonElement) {
                    buttonElement.style.display = "flex";
                    buttonElement.style.alignItems = "center";
                    buttonElement.style.justifyContent = "center";
                    buttonElement.style.height = "auto";
                    buttonElement.style.width = "auto";
                    buttonElement.style.overflow = "visible";
                }
                
                if (buttonContainer) {
                    buttonContainer.style.transition = "all 0.3s ease";
                }

                // Check for stock status
                client.product.fetch(productId).then(function (product) {
                    let isSoldOut = product.variants[0].available === false; // Check first variant stock status
                    if (isSoldOut) {
                        let btnText = document.querySelector("#product-add-to-cart button");
                        if (btnText) {
                            btnText.innerText = "SOLD OUT";
                            btnText.style.opacity = "1";
                            btnText.style.pointerEvents = "none"; // Disable button
                            btnText.style.fontFamily = "coolvetica, sans-serif";
                            btnText.style.fontWeight = "400";
                            btnText.style.fontStyle = "italic";
                            btnText.style.fontSize = "32px";
                            btnText.style.backgroundColor = "#0B1215";
                            btnText.style.color = "#F3F4F6";
                            btnText.style.borderRadius = "50px";
                            btnText.style.padding = "12px 24px";
                            btnText.style.textTransform = "none";
                            btnText.style.letterSpacing = "0.5px";
                            btnText.style.display = "flex";
                            btnText.style.alignItems = "center";
                            btnText.style.justifyContent = "center";
                        }
                    }
                });
            });
        });
    }
})();
