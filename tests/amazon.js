module.exports = {
    /*
    Test case to select Kindle from Category page
    1. Login as a user
    2. Click on the Category link
    3. Select Kindle from the Category
    4. Add the item to cart
    5. Go to cart
    6. Click proceed to payment
    7. Select address
    8. Click continue
    */
    'Amazon Kindle From Category': function (client) {
      var amazonLogin = client.page.amazonLogin();
      amazonLogin.navigate()
        .login();

      var amazon = client.page.amazon();
      amazon.navigate()
        .assert.title('Amazon.com.au: Shop online for Electronics, Apparel, Toys, Books, DVDs & more')
        .selectCategory("Kindle")
        .assert.title('Kindle E-reader – Amazon Official Site')
        .addToCart()
        .goToCart()
        .proceedToPayment() // still not working properly with selecting address
        .clearCart() // still not working with the delete button
      client.end();
    },
    /*
    Test case to select Kindle from Category page
    1. Login as a user
    2. Click on the Category link
    3. Select PS4 from the Category
    4. Add the item to cart
    5. Go to cart
    6. Click proceed to payment
    7. Select address
    8. Click continue
    */
    'Amazon PS4 From Category': function (client) {
        var amazonLogin = client.page.amazonLogin();
        amazonLogin.navigate()
          .login();
  
        var amazon = client.page.amazon();
        amazon.navigate()
          .assert.title('Amazon.com.au: Shop online for Electronics, Apparel, Toys, Books, DVDs & more')
          .selectCategory("PS4")
          .assert.title('Amazon.com.au: PlayStation 4: Video Games: Accessories, Games, Digital Games, Interactive Gaming Figures & More')
          .selectItem("Marvel's Spider-Man (PlayStation 4)") // Still not working selecting the item
          .addToCart()
          .goToCart()
          .proceedToPayment() // still not working properly with selecting address
          .clearCart() // still not working with the delete button
        client.end();
      },
    /*
    Test case to select Kindle from Search result
    1. Login as a user
    2. Search Kindle from the search bar
    3. Click Search
    4. Add the item to cart
    */
    'Amazon Kindle From Search': function (client) {
        var amazonLogin = client.page.amazonLogin();
        amazonLogin.navigate()
          .login();
  
        var amazon = client.page.amazon();
        amazon.navigate()
          .search("Kindle")
          .assert.title('Amazon.com.au: Kindle')
          .selectItem("Kindle E-Reader, 6\" Glare-Free Touchscreen Display, Wi-Fi (Black)") // Still not working selecting the item
          .addToCart()
          .goToCart()
          .proceedToPayment() // still not working
          .clearCart() // still not working
        client.end();
      }
  };