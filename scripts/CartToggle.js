(function () {
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
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: '3eyau1-rk.myshopify.com',
            storefrontAccessToken: '6dbf61b263e46db8a392d40ccdbf8901',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('cart', {
                node: document.getElementById('cart-button'),
                    options: {
                        "cart": {
                            "styles": {
                                "button": {
                                    "font-family": "Raleway, sans-serif",
                                    "font-weight": "bold",
                                    "font-size": "18px",
                                    "padding-top": "17px",
                                    "padding-bottom": "17px",
                                    "color": "#f3f4f6",
                                    ":hover": {
                                        "color": "#f3f4f6",
                                        "background-color": "#131f24"
                                    },
                                    "background-color": "#0b1215",
                                    ":focus": {
                                        "background-color": "#131f24"
                                    },
                                    "border-radius": "40px"
                                },
                                "title": {
                                    "color": "#0b1215"
                                },
                                "header": {
                                    "color": "#0b1215"
                                },
                                "lineItems": {
                                    "color": "#0b1215"
                                },
                                "subtotalText": {
                                    "color": "#0b1215"
                                },
                                "subtotal": {
                                    "color": "#0b1215"
                                },
                                "notice": {
                                    "color": "#0b1215"
                                },
                                "currency": {
                                    "color": "#0b1215"
                                },
                                "close": {
                                    "color": "#0b1215",
                                    ":hover": {
                                        "color": "#0b1215"
                                    }
                                },
                                "empty": {
                                    "color": "#0b1215"
                                },
                                "noteDescription": {
                                    "color": "#0b1215"
                                },
                                "discountText": {
                                    "color": "#0b1215"
                                },
                                "discountIcon": {
                                    "fill": "#0b1215"
                                },
                                "discountAmount": {
                                    "color": "#0b1215"
                                },
                                "cart": {
                                    "background-color": "#f3f4f6"
                                },
                                "footer": {
                                    "background-color": "#f3f4f6"
                                }
                            },
                            "text": {
                                "total": "Subtotal"
                            },
                            "contents": {
                                "note": true
                            },
                            "popup": false,
                            "googleFonts": [
                                "Raleway"
                            ]
                        },
                        "toggle": {
                            'iframe': false,
                            'sticky': false,
                            'contents': {
                                'count': true,
                                'icon': false,
                                'title': true,
                            },
                            'text': {
                                'title': 'CART'
                            }
                        },
                        "lineItem": {
                            "styles": {
                                "variantTitle": {
                                    "color": "#0b1215"
                                },
                                "title": {
                                    "color": "#0b1215"
                                },
                                "price": {
                                    "color": "#0b1215"
                                },
                                "fullPrice": {
                                    "color": "#0b1215"
                                },
                                "discount": {
                                    "color": "#0b1215"
                                },
                                "discountIcon": {
                                    "fill": "#0b1215"
                                },
                                "quantity": {
                                    "color": "#0b1215"
                                },
                                "quantityIncrement": {
                                    "color": "#0b1215",
                                    "border-color": "#0b1215"
                                },
                                "quantityDecrement": {
                                    "color": "#0b1215",
                                    "border-color": "#0b1215"
                                },
                                "quantityInput": {
                                    "color": "#0b1215",
                                    "border-color": "#0b1215"
                                }
                            }
                        }
                    }
                });
            });
        }
    })();