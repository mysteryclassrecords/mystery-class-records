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
          options: {
            "cart": {
              "popup": false,
              "styles": {
                ".cart.button": {  // <- More specific selector
                  "background-color": "#0b1215",
                  "color": "#f3f4f6",
                  "border-radius": "8px",
                  "padding": "10px 15px"
                }
              }
            }
          }
        });
      });
    }
})();
