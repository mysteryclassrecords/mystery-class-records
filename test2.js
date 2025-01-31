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
      ui.createComponent('product', {
        id: '7723835195446',
        node: document.getElementById('product-component-1738357677452'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "title": {
        "color": "#0b1215"
      },
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
        "border-radius": "40px",
        "padding-left": "18px",
        "padding-right": "18px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      },
      "price": {
        "color": "#0b1215"
      },
      "compareAt": {
        "color": "#0b1215"
      },
      "unitPrice": {
        "color": "#0b1215"
      },
      "description": {
        "color": "#0b1215"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "googleFonts": [
      "Raleway"
    ]
  },


  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },


  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },

      
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
        "border-radius": "40px",
        "padding-left": "18px",
        "padding-right": "18px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      },
      "title": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "bold",
        "font-size": "26px",
        "color": "#4c4c4c"
      },
      "price": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "18px",
        "color": "#4c4c4c"
      },
      "compareAt": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "15.299999999999999px",
        "color": "#4c4c4c"
      },
      "unitPrice": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "15.299999999999999px",
        "color": "#4c4c4c"
      },
      "description": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "14px",
        "color": "#4c4c4c"
      }
    },
    "googleFonts": [
      "Raleway"
    ],
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
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
    "styles": {
      "toggle": {
        "font-family": "Raleway, sans-serif",
        "font-weight": "bold",
        "background-color": "#0b1215",
        ":hover": {
          "background-color": "#131f24"
        },
        ":focus": {
          "background-color": "#131f24"
        }
      },
      "count": {
        "font-size": "18px",
        "color": "#f3f4f6",
        ":hover": {
          "color": "#f3f4f6"
        }
      },
      "iconPath": {
        "fill": "#f3f4f6"
      }
    },
    "googleFonts": [
      "Raleway"
    ]
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
},
      });
    });
  }
})();
