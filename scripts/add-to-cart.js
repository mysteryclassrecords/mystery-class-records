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
              id: productId, // Use the dynamic product ID
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
                              "font-weight": "400", // Ensure weight consistency
                              "font-style": "italic", // Ensure italic consistency
                              "font-size": "32px", // Ensure consistent size
                              "background-color": "#0B1215",
                              "color": "#F3F4F6",
                              "border-radius": "50px",
                              "padding": "12px 24px",
                              "text-transform": "none",
                              "transition": "color 0.3s ease",
                              "letter-spacing": "0.5px", // Add slight spacing for better rendering
                              ":hover": {
                                  "background-color": "#0B1215", // Invert colors on hover
                                  "color": "#ccc", // Adjust hover text color
                                  "font-weight": "400", // Explicitly set weight
                                  "font-style": "italic", // Explicitly set style
                              },
                              ":focus": {
                                  "background-color": "#0B1215",
                                  "color": "#F3F4F6",
                              },
                          },
                      },
                      text: {
                          button: "ADD TO CART", // Change text to match your requirements
                      },
                  },
              },
          });
      });
  }
})();
