(function () {
    const carouselContainer = document.querySelector('.product-carousel');
    const productId = carouselContainer.getAttribute('data-product-id'); // Get product ID
  
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
          node: document.getElementById('product-image-carousel'),
          options: {
            product: {
              contents: {
                imgWithCarousel: true,
                img: false,
                button: false,
                title: false,
                description: false,
                price: false,
                options: false,
              },
              layout: 'vertical',
            },
          },
        });
      });
    }
  })();
  